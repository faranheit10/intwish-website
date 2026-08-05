import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { GatedInsightBody } from "@/components/GatedInsightBody";
import { InsightSections } from "@/components/InsightSections";
import { insightPosts, insightText, type InsightType } from "@/content/insights";
import { caseStudies } from "@/content/caseStudies";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const l = locale as Locale;
  const title = insightText(l, post.title);
  const t = await getTranslations({ locale, namespace: "metadata.pages.insightDetail" });
  return buildMetadata({
    locale: l,
    href: `/insights/${slug}`,
    title: t("title", { title }),
    description: t("description", { excerpt: insightText(l, post.excerpt) }),
  });
}

/** Type pills stay inside the design-token palette (brand + teal + ink). */
const typeStyles: Record<InsightType, string> = {
  report: "border-brand-500/40 bg-brand-500/15 text-brand-400",
  whitepaper: "border-accent-500/40 bg-accent-500/10 text-accent-300",
  playbook: "border-line bg-white/5 text-muted",
  article: "border-line-strong bg-white/5 text-paper",
  webinar: "border-accent-500/40 bg-accent-500/10 text-accent-300",
};

/** Hub-and-spoke cross-links: each insight points at the case studies it cites. */
const relatedCaseStudySlugs: Record<string, string[]> = {
  "state-of-gamified-assessment-2026": ["bank-alfalah-training", "ptcl-recruitment", "hbl-3d-simulation"],
  "roi-of-gamified-recruitment": ["ptcl-recruitment", "faysal-bank-recruitment", "ici-recruitment"],
  "sjt-and-game-based-validity": ["hbl-3d-simulation", "fps-entry-test", "kelectric-hipo"],
  "playbook-banking": ["bank-alfalah-training", "faysal-bank-recruitment"],
  "playbook-telecom": ["ptcl-recruitment"],
  "playbook-energy": ["kelectric-hipo", "kelectric-360"],
  "playbook-government": ["sbc-knowledge-gate"],
  "playbook-education": ["fps-entry-test"],
  "why-gamified-assessments-win": ["ptcl-recruitment", "hbl-3d-simulation"],
  "async-video-interviews": ["ptcl-recruitment", "faysal-bank-recruitment"],
  "live-intos-demo": ["ptcl-recruitment"],
};

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("insights");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const formattedDate = new Date(post.date).toLocaleDateString(l, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const title = insightText(l, post.title);
  const excerpt = insightText(l, post.excerpt);
  const sources = (post.sources ?? []).map((s) => insightText(l, s));

  // Related case studies (cross-links) + always point at the two products.
  const relatedStudies = (relatedCaseStudySlugs[post.slug] ?? [])
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((s): s is (typeof caseStudies)[number] => Boolean(s))
    .slice(0, 3);

  const countWords = (s: string) => s.split(/\s+/).filter(Boolean).length;
  const wordCount = post.sections.reduce((acc, section) => {
    return (
      acc +
      countWords(insightText(l, section.heading)) +
      section.paragraphs.reduce((a, p) => a + countWords(insightText(l, p)), 0)
    );
  }, 0);

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[
                { name: tnav("home"), href: "/" },
                { name: tnav("insights"), href: "/insights" },
                { name: title },
              ]}
            />
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${typeStyles[post.type]}`}
              >
                {t(`types.${post.type}`)}
              </span>
              <span className="text-xs text-faint">
                {formattedDate} · {t("readTime", { count: post.readTimeMin })}
              </span>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={0.1}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15}>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
              {excerpt}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ============ Body ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {post.gated ? (
            <GatedInsightBody
              locale={locale}
              resource={post.slug}
              highlights={(post.highlights ?? []).map((h) => insightText(l, h))}
            >
              {/* Server-rendered so the full report text ships in the initial
                  HTML for AI crawlers and no-JS visitors. */}
              <InsightSections sections={post.sections} locale={l} />
            </GatedInsightBody>
          ) : (
            <InsightSections sections={post.sections} locale={l} animate />
          )}

          {/* ============ Sources ============ */}
          {sources.length > 0 ? (
            <div className="mt-14 rounded-2xl border border-line-strong bg-ink-850 p-6 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-300">
                {t("sourcesLabel")}
              </p>
              <ul className="mt-4 space-y-3">
                {sources.map((source) => (
                  <li key={source} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                    />
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* ============ Related (hub-and-spoke cross-links) ============ */}
          {relatedStudies.length > 0 ? (
            <div className="mt-14">
              <Reveal variant="fade-up">
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {t("relatedTitle")}
                </h2>
              </Reveal>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedStudies.map((study, i) => (
                  <Reveal key={study.slug} staggerIndex={i} as="article">
                    <CaseStudyCard study={study} locale={l} />
                  </Reveal>
                ))}
                {relatedStudies.length < 3 ? (
                  <Reveal staggerIndex={relatedStudies.length}>
                    <div className="card-surface flex h-full flex-col justify-center gap-3 p-6">
                      <p className="text-sm font-medium text-muted">
                        {t("relatedProducts")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="/products/intos"
                          className="rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-500 hover:text-white"
                        >
                          intOS
                        </Link>
                        <Link
                          href="/products/intreview"
                          className="rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-500 hover:text-white"
                        >
                          IntReview
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </Section>

      {/* ============ Post CTA ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <CTABand
              title={post.cta ? insightText(l, post.cta.label) : tcta("title")}
              subtitle={post.cta ? insightText(l, post.excerpt) : tcta("subtitle")}
              primary={post.cta ? { label: insightText(l, post.cta.label), href: post.cta.href } : undefined}
              secondary={{ label: tcta("sandboxCta"), href: "/products/intos#sandbox" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
          {post.cta ? (
            <p className="mt-6 text-center text-sm text-faint">
              <ArrowRight className="me-1 inline h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
              {t("webinar.note")}
            </p>
          ) : null}
        </div>
      </Section>

      {/* ============ Structured data ============ */}
      {renderSchema(
        articleSchema({
          locale: l,
          href: `/insights/${post.slug}`,
          headline: title,
          description: excerpt,
          datePublished: post.date,
          dateModified: post.date,
          keywords: [
            "gamified assessment",
            "AI assessment",
            ...(post.sources?.length ? ["Intwish research"] : []),
          ],
          articleSection: t(`types.${post.type}`),
          wordCount,
        }),
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("insights"), href: "/insights" },
          { name: title },
        ])
      )}
    </>
  );
}