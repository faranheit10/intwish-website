import type { ReactNode } from "react";
import type { Locale } from "@/i18n/routing";
import { pageUrl } from "@/i18n/paths";
import { SITE_URL } from "@/lib/site-url";

const ORIGIN = SITE_URL;
const ORG_ID = `${ORIGIN}/#organization`;

/** BreadcrumbList JSON-LD. `items` are [name, locale-neutral href?] pairs. */
export function breadcrumbSchema(
  locale: Locale,
  items: { name: string; href?: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: pageUrl(locale, item.href) } : {}),
    })),
  };
}

interface ArticleSchemaInput {
  locale: Locale;
  href: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
}

/**
 * Article-style schema used on insight reports and case studies.
 * author/publisher point at the Organization node declared in the layout graph.
 */
export function articleSchema(input: ArticleSchemaInput): object {
  const { locale, href, headline, description, image } = input;
  const url = pageUrl(locale, href);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(image ? { image: image.startsWith("http") ? image : `${ORIGIN}${image}` } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", "@id": ORG_ID, name: "Intwish", url: ORIGIN },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: "Intwish", url: ORIGIN },
    inLanguage: locale,
  };
}

interface ServiceSchemaInput {
  locale: Locale;
  href: string;
  name: string;
  description: string;
}

/** Service JSON-LD for the six service pages. */
export function serviceSchema(input: ServiceSchemaInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: pageUrl(input.locale, input.href),
    provider: { "@id": ORG_ID },
    serviceType: input.name,
    areaServed: ["Pakistan", "United Arab Emirates", "Saudi Arabia", "Canada", "Indonesia"],
  };
}

interface VideoObjectInput {
  name: string;
  description?: string;
  contentUrl?: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
}

/** VideoObject JSON-LD — one per clip (homepage film + intOS gameplay recordings). */
export function videoObjectSchema(input: VideoObjectInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    ...(input.contentUrl ? { contentUrl: input.contentUrl } : {}),
    ...(input.embedUrl ? { embedUrl: input.embedUrl } : {}),
    ...(input.thumbnailUrl ? { thumbnailUrl: input.thumbnailUrl } : {}),
    ...(input.uploadDate ? { uploadDate: input.uploadDate } : {}),
    ...(input.duration ? { duration: input.duration } : {}),
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Convenience: render schema object(s) as a JSON-LD <script> tag.
 * Multiple schemas are merged into a single @graph (per-node @context is
 * stripped to avoid duplication).
 */
export function renderSchema(...schemas: object[]): ReactNode {
  if (schemas.length === 1) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[0]) }}
      />
    );
  }
  const graph = schemas.map((s) => {
    const node = { ...(s as Record<string, unknown>) };
    delete node["@context"];
    return node;
  });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
