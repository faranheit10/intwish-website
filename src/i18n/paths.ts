import type { Locale } from "./routing";
import { SITE_URL } from "@/lib/site-url";

/**
 * Returns the public, locale-prefixed path for a given locale.
 * `en` is the default locale so it carries no prefix (localePrefix: "as-needed").
 */
export function localizedPath(locale: Locale, href: string): string {
  if (locale === "en") return href === "/" ? "/" : href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/**
 * Builds the canonical/hreflang URL for a page.
 * Origin comes from NEXT_PUBLIC_SITE_URL (defaults to https://intwish.com) so
 * staging hosts like mock.intwish.com can be referenced without code changes.
 */
export function pageUrl(locale: Locale, href: string): string {
  return `${SITE_URL}${localizedPath(locale, href)}`;
}
