"use client";

import { useTranslations } from "next-intl";
import { setConsent } from "@/lib/consent";

/** Footer "Cookie settings" link — clears the stored choice and reopens the banner. */
export function CookieSettingsButton() {
  const t = useTranslations("footer");

  return (
    <button
      type="button"
      onClick={() => setConsent(null)}
      className="transition-colors hover:text-brand-400"
      data-track="consent_settings"
    >
      {t("cookieSettings")}
    </button>
  );
}
