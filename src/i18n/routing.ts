import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Locales and their path prefixes (subfolders inherit root authority).
  // en (default) + ar, with fr-CA and id-ID added in Phase 3.
  // en-CA was folded back into `en` — the content was identical, so one
  // English locale is enough (hreflang/sitemap regenerate automatically).
  locales: ["en", "fr-CA", "id-ID", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // First-visit language detection: negotiate the locale from the visitor's
  // system (Accept-Language header). Priority is pathname → NEXT_LOCALE
  // cookie → Accept-Language → default. Manual switches via the navigation
  // API set the NEXT_LOCALE cookie automatically, so the choice is remembered
  // across sessions for a year.
  localeDetection: true,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
});

export type Locale = (typeof routing.locales)[number];
