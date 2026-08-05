/**
 * Canonical site origin used for SEO URLs (canonical / hreflang / sitemap),
 * OpenGraph images, metadataBase and JSON-LD identifiers.
 *
 * Defaults to the production origin (intwish.com). Point it at a different
 * environment at build time with NEXT_PUBLIC_SITE_URL — e.g. the cPanel
 * staging host:
 *
 *   NEXT_PUBLIC_SITE_URL=https://mock.intwish.com npm run build
 *
 * Because it is a NEXT_PUBLIC_* var it is inlined at build time, so set it
 * BEFORE running `next build`. A trailing slash is stripped so callers can do
 * `${SITE_URL}/about` safely.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://intwish.com"
).replace(/\/+$/, "");
