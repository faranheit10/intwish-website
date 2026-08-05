/**
 * Shared MailerSend sending + regional recipient routing (Phase 5 — per-region
 * lead KPIs). Both /api/contact and /api/lead send through here so the
 * recipient inbox is decided in exactly one place.
 *
 * Recipient resolution by locale (env vars override the global inbox):
 *   fr-CA          → INTWISH_TO_EMAIL_CA
 *   id-ID          → INTWISH_TO_EMAIL_ID
 *   ar             → INTWISH_TO_EMAIL_MENA
 *   everything     → INTWISH_TO_EMAIL (default)
 */

const DEFAULT_FROM = "info@intwish.com";
const DEFAULT_TO = "info@intwish.com";

const REGIONAL_TO: Record<string, string | undefined> = {
  "fr-CA": process.env.INTWISH_TO_EMAIL_CA,
  "id-ID": process.env.INTWISH_TO_EMAIL_ID,
  ar: process.env.INTWISH_TO_EMAIL_MENA,
};

export function resolveRecipient(locale?: string): string {
  if (locale && REGIONAL_TO[locale]) return REGIONAL_TO[locale]!;
  return process.env.INTWISH_TO_EMAIL ?? DEFAULT_TO;
}

export interface MailerOptions {
  locale?: string;
  fromName: string;
  subject: string;
  text: string;
  replyTo: { email: string; name: string };
}

export interface MailerResult {
  ok: boolean;
  configured: boolean;
}

/** Sends an email via MailerSend; returns success + whether the API key is set. */
export async function sendMail({
  locale,
  fromName,
  subject,
  text,
  replyTo,
}: MailerOptions): Promise<MailerResult> {
  const apiKey = process.env.MAILERSEND_API_KEY;
  if (!apiKey) return { ok: false, configured: false };

  try {
    const res = await fetch("https://api.mailersend.com/v1/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        from: { email: process.env.INTWISH_FROM_EMAIL ?? DEFAULT_FROM, name: fromName },
        to: [{ email: resolveRecipient(locale), name: "Intwish Sales Team" }],
        subject,
        text,
        reply_to: replyTo,
      }),
      signal: AbortSignal.timeout(15000),
    });
    return { ok: res.ok, configured: true };
  } catch {
    return { ok: false, configured: true };
  }
}
