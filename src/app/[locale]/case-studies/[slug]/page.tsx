import Image from "next/image";
import { ArrowRight, FileDown, Quote } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MetricsBox } from "@/components/MetricsBox";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { localize } from "@/content/types";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const l = locale as Locale;
  const title = localize(l, study.title);
  const t = await getTranslations({ locale, namespace: "metadata.pages.caseStudyDetail" });
  return buildMetadata({
    locale: l,
    href: `/case-studies/${slug}`,
    title: t("title", { title }),
    description: t("description", { summary: localize(l, study.summary) }),
    image: { url: study.image, alt: title },
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const study = getCaseStudy(slug);
  if (!study) notFound();

  const t = await getTranslations("caseStudies");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const title = localize(l, study.title);
  const summary = localize(l, study.summary);
  const industry = localize(l, study.industry);
  const paragraphs = localize(l, study.body);
  const metrics = study.metrics?.map((m) => ({
    value: localize(l, m.value),
    label: localize(l, m.label),
  }));
  const hasMetrics = Boolean(metrics && metrics.length > 0);
  const clientKey = study.client.toLowerCase().replace(/[^a-z0-9]+/g, "") || "client";

  const related = caseStudies
    .filter((c) => c.slug !== study.slug && c.industry.en === study.industry.en)
    .slice(0, 3);

  return (
    <>
      {/* ============ 1. Results-led header ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[
                { name: tnav("home"), href: "/" },
                { name: tnav("caseStudies"), href: "/case-studies" },
                { name: title },
              ]}
            />
          </Reveal>

          <div
            className={
              hasMetrics
                ? "grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
                : "grid items-center gap-12"
            }
          >
            <div className={hasMetrics ? "" : "max-w-3xl"}>
              <Reveal variant="slide-start">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs font-medium text-brand-400">
                    {industry}
                  </span>
                  <span className="font-mono text-xs text-faint">{study.client}</span>
                  {study.date ? (
                    <span className="rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs text-muted">
                      {study.date}
                    </span>
                  ) : null}
                </div>
                <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{summary}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/demo?intent=project" data-track={`cta_click_case_discuss_${slug}`}>
                    {t("ctaPrimary")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Button>
                  <Link
                    href={`/case-studies/${study.slug}/one-pager`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-500 hover:text-ink-950"
                    data-track="case_download"
                  >
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    {t("onePager.download")}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Headline metric — the "deployed result" framed first */}
            {hasMetrics ? (
              <Reveal variant="slide-end">
                <div className="frame-blueprint rounded-2xl bg-ink-850 p-7 text-center sm:p-9">
                  <DefineWishKicker color="teal" className="justify-center">
                    deploy({clientKey})
                  </DefineWishKicker>
                  <p className="mt-6 font-mono text-4xl font-bold tracking-tight text-gradient-teal sm:text-5xl">
                    <span aria-hidden="true" className="text-accent-500/70">{`{ `}</span>
                    {metrics![0].value}
                    <span aria-hidden="true" className="text-accent-500/70">{` }`}</span>
                  </p>
                  <p className="mt-3 text-sm text-muted">{metrics![0].label}</p>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Section>

      {/* ============ 2. Hero image ============ */}
      <Section bg="ink-900" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-card">
              <Image
                src={study.image}
                alt={title}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 3. Impact at a glance — MetricsBox ============ */}
      {metrics && metrics.length > 0 ? (
        <Section bg="ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              kicker={t("kicker")}
              title={t("impactLabel")}
              subtitle={t("subtitle")}
              teal
            />
            <div className="mt-14">
              <MetricsBox items={metrics} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" />
            </div>
          </div>
        </Section>
      ) : null}

      {/* ============ 4. The story ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              define({clientKey})
            </p>
          </Reveal>
          <div className="mt-6 space-y-6">
            {paragraphs.map((paragraph, i) => (
              <Reveal key={`${slug}-${i}`} variant="fade-up" delay={0.05 * i}>
                <p className="text-base leading-relaxed text-paper/90 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade-up" delay={0.1}>
            <p className="mt-10 flex items-center gap-2 font-mono text-sm text-accent-300">
              <Quote className="h-4 w-4" aria-hidden="true" /> {study.client} · {industry}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ============ 5. Related case studies ============ */}
      {related.length > 0 ? (
        <Section bg="ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading kicker={t("kicker")} title={t("secondaryLabel")} subtitle={t("subtitle")} />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((studyItem, i) => (
                <Reveal key={studyItem.slug} staggerIndex={i} as="article">
                  <CaseStudyCard study={studyItem} locale={l} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* ============ 6. CTA ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.05}>
            <CTABand
              title={tcta("title")}
              subtitle={tcta("subtitle")}
              secondary={{ label: tcta("sandboxCta"), href: "/products/intos#sandbox" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {/* ============ Structured data ============ */}
      {renderSchema(
        articleSchema({
          locale: l,
          href: `/case-studies/${slug}`,
          headline: title,
          description: summary,
          image: study.image,
          datePublished: study.date,
          keywords: [study.client, industry, "gamified assessment", "case study"],
          articleSection: industry,
        }),
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("caseStudies"), href: "/case-studies" },
          { name: title },
        ])
      )}
    </>
  );
}