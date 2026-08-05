"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { loadAnalytics } from "@/lib/analytics";
import {
  readConsent,
  setConsent,
  subscribeConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Consent-first privacy banner (no third-party CMP needed).
 *
 * - Shows until the visitor chooses Accept or Decline.
 * - Analytics (gtag) and the Chatwoot widget only load after "Accept".
 * - The choice is remembered; a "Cookie settings" link in the footer
 *   (CookieSettingsButton) clears it and reopens the banner.
 *
 * The banner sits above the mobile sticky CTA (bottom-16 on small screens).
 */
export function ConsentManager() {
  const t = useTranslations("consent");
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const apply = () => {
      const current = readConsent();
      setChoice(current);
      setReady(true);
      // Load analytics now only if the visitor already accepted earlier.
      if (current === "accepted") loadAnalytics(true);
    };
    apply();
    return subscribeConsent(apply);
  }, []);

  // Known trade-off: scripts can't be unloaded, so if a visitor accepts and
  // later clears their choice via "Cookie settings", gtag stays loaded for the
  // remainder of the session (it just never loads again after a decline).
  // For strict consent-mode behaviour, wire gtag('consent', ...) updates here.

  if (!ready || choice !== null) return null;

  return (
    <div
      role="region"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-16 z-[80] px-4 sm:bottom-4 print:hidden"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-line-strong bg-ink-900/95 p-5 shadow-card backdrop-blur-xl sm:p-6">
        <p className="text-sm font-semibold text-paper">{t("title")}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t("body")}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow"
            data-track="consent_accept"
          >
            {t("accept")}
          </button>
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="inline-flex items-center justify-center rounded-full border border-line-strong bg-white/5 px-6 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-brand-500/50 hover:text-brand-400"
            data-track="consent_decline"
          >
            {t("decline")}
          </button>
        </div>
      </div>
    </div>
  );
}
