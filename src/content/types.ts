import type { Locale } from "@/i18n/routing";

/**
 * Localized content model.
 * Every content record carries all locale variants inline — the same shape
 * DatoCMS exposes for localized fields — so swapping this layer for a CMS
 * later is a mechanical change (see CONTENT.md).
 */
export type Localized<T> = Record<Locale, T>;

export function localize<T>(locale: Locale, value: Localized<T>): T {
  return value[locale] ?? value.en;
}
