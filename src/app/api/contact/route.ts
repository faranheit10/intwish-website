import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

/**
 * Contact form endpoint (MailerSend-backed, parity with Phase 0).
 * Requires MAILERSEND_API_KEY; returns 503 with a clear message otherwise.
 *
 * Phase 5 — regional routing: the submitted `locale` decides the recipient
 * inbox (see lib/mailer.ts) so leads land with the right regional office.
 *
 * Hardening (parity with the Phase 0 PHP backend):
 *  - honeypot field
 *  - input validation + length caps
 *  - origin allow-list
 *  - simple rate limit (5 submissions / IP / 15 min)
 *
 * Note: the limiter is in-memory, so on serverless hosts it applies per
 * warm instance. For production volume, move to Vercel KV / Upstash.
 */

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const rateBuckets = new Map<string, number[]>();

const ALLOWED_ORIGINS =
  /^https?:\/\/(([a-z0-9-]+\.)*intwish\.com|localhost|127\.0\.0\.1|.*\.vercel\.app)(:\d+)?$/i;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const times = (rateBuckets.get(ip) ?? []).filter((t) => t > windowStart);
  if (times.length >= RATE_MAX) return true;
  times.push(now);
  rateBuckets.set(ip, times);
  return false;
}

export async function POST(request: Request) {
  // Origin allow-list (CSRF-ish hardening)
  const origin = request.headers.get("origin") ?? "";
  if (origin && !ALLOWED_ORIGINS.test(origin)) {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ success: false }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  const subject = typeof body.subject === "string" ? body.subject.trim().slice(0, 120) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";
  const locale = typeof body.locale === "string" ? body.locale.slice(0, 10) : "";
  const website = typeof body.website === "string" ? body.website : "";

  // Honeypot: bots fill the hidden field — silently succeed.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const text = [
    "New message from the Intwish website contact form:",
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    `Subject: ${subject}`,
    `Locale:  ${locale || "—"}`,
    "",
    "Message:",
    message,
    "",
  ].join("\n");

  const result = await sendMail({
    locale,
    fromName: "Intwish Website",
    subject: `[Intwish Contact] ${name}`,
    text,
    replyTo: { email, name },
  });

  if (!result.configured) {
    return NextResponse.json(
      { success: false, message: "not_configured" },
      { status: 503 }
    );
  }
  if (!result.ok) {
    return NextResponse.json({ success: false }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
