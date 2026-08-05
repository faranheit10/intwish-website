import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/paths";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { insightPosts } from "@/content/insights";

const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://intwish.com").replace(
  /\/+$/,
  ""
);
const basePaths = [
  "/",
  "/about",
  "/services",
  "/products",
  "/products/intos",
  "/products/intreview",
  "/case-studies",
  "/insights",
  "/industries",
  "/science",
  "/trust",
  "/demo",
  "/contact",
  "/privacy",
  "/terms",
];

function alternatesFor(href: string): MetadataRoute.Sitemap[number]["alternates"] {
  const languages: Record<string, string> = { "x-default": `${ORIGIN}${localizedPath("en", href)}` };
  for (const locale of routing.locales) {
    languages[locale] = `${ORIGIN}${localizedPath(locale as Locale, href)}`;
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const href of basePaths) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${ORIGIN}${localizedPath(locale as Locale, href)}`,
        changeFrequency: href === "/" ? "monthly" : "weekly",
        priority: href === "/" ? 1 : 0.8,
        alternates: alternatesFor(href),
      });
    }
  }

  for (const service of services) {
    const href = `/services/${service.slug}`;
    for (const locale of routing.locales) {
      entries.push({
        url: `${ORIGIN}${localizedPath(locale as Locale, href)}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesFor(href),
      });
    }
  }

  for (const study of caseStudies) {
    const href = `/case-studies/${study.slug}`;
    for (const locale of routing.locales) {
      entries.push({
        url: `${ORIGIN}${localizedPath(locale as Locale, href)}`,
        ...(study.date ? { lastModified: study.date } : {}),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: alternatesFor(href),
      });
    }
  }

  for (const post of insightPosts) {
    const href = `/insights/${post.slug}`;
    for (const locale of routing.locales) {
      entries.push({
        url: `${ORIGIN}${localizedPath(locale as Locale, href)}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: post.gated ? 0.7 : 0.6,
        alternates: alternatesFor(href),
      });
    }
  }

  return entries;
}