import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { pageUrl } from "@/i18n/paths";
import { SITE_URL } from "@/lib/site-url";

const OG_IMAGE = `${SITE_URL}/img/about/cover.webp`;

/** Maps our internal locale codes to BCP-47/OpenGraph locale strings. */
const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  "fr-CA": "fr_CA",
  "id-ID": "id_ID",
  ar: "ar_AE", // Dubai HQ; ar_AR would be ambiguous (Argentina).
};

interface SeoImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface SeoInput {
  locale: Locale;
  href: string;
  title: string;
  description: string;
  /** Optional per-page social share image (relative paths resolve against metadataBase). */
  image?: SeoImage;
}

/**
 * Builds per-locale metadata with reciprocal hreflang + canonical.
 * `href` is the locale-neutral path (e.g. "/about" or "/case-studies/x").
 * Every locale links back to all others plus x-default (reciprocity).
 */
export function buildMetadata({ locale, href, title, description, image }: SeoInput): Metadata {
  const languages: Record<string, string> = {
    "x-default": pageUrl("en", href),
  };
  for (const code of routing.locales) {
    languages[code] = pageUrl(code as Locale, href);
  }
  const ogImages = image
    ? [image]
    : [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Intwish — Gamified Training, AI Assessments & Immersive Simulations",
        },
      ];
  return {
    title,
    description,
    alternates: {
      canonical: pageUrl(locale, href),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Intwish",
      title,
      description,
      url: pageUrl(locale, href),
      locale: OG_LOCALES[locale],
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((og) => og.url),
    },
  };
}
