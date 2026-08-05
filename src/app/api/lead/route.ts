import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { insightPosts } from "@/content/insights";

/**
 * Gated-resource lead endpoint (Phase 4 — benchmark report / whitepapers).
 * Captures name + email when a visitor requests a gated insight, then emails
 * the lead to the sales team via MailerSend.
 *
 * Phase 5 — regional routing: the submitted `locale` decides the recipient
 * inbox (see lib/mailer.ts) so gated leads land with the right regional team.
 *
 * Same hardening as /api/contact:
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
  const company = typeof body.company === "string" ? body.company.trim().slice(0, 120) : "";
  const resource = typeof body.resource === "string" ? body.resource.trim().slice(0, 120) : "";
  const locale = typeof body.locale === "string" ? body.locale.slice(0, 10) : "";
  const website = typeof body.website === "string" ? body.website : "";

  // Honeypot: bots fill the hidden field — silently succeed.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // Resolve the resource title for the email subject.
  const post = insightPosts.find((p) => p.slug === resource);
  const resourceTitle = post?.title.en ?? resource ?? "Intwish resource";

  const text = [
    "New gated-resource lead from the Intwish website:",
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company || "—"}`,
    `Resource: ${resourceTitle}`,
    `Locale:   ${locale || "—"}`,
    "",
  ].join("\n");

  const result = await sendMail({
    locale,
    fromName: "Intwish",
    subject: `[Intwish Lead] ${resourceTitle} — ${name}`,
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
