import { ArrowRight, Landmark, Radio, Zap, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema, serviceSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getIndustry, industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { getProduct, products } from "@/content/products";
import { localize } from "@/content/types";

const icons = {
  landmark: Landmark,
  radio: Radio,
  zap: Zap,
  book: BookOpen,
} as const;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const l = locale as Locale;
  const name = localize(l, industry.name);
  const t = await getTranslations({ locale, namespace: "metadata.pages.industryDetail" });
  return buildMetadata({
    locale: l,
    href: `/industries/${slug}`,
    title: t("title", { industry: name }),
    description: t("description", { industry: name }),
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const industry = getIndustry(slug);
  if (!industry) notFound();

  const t = await getTranslations("industries");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");
  const tcommon = await getTranslations("common");

  const name = localize(l, industry.name);
  const headline = localize(l, industry.headline);
  const tagline = localize(l, industry.tagline);
  const painPoints = localize(l, industry.painPoints);
  const compliance = localize(l, industry.compliance);

  const sectorCases = industry.caseStudySlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c) => c !== undefined) as NonNullable<(typeof caseStudies)[number]>[];

  const sectorProducts = industry.productSlugs
    .map((s) => getProduct(s))
    .filter((p) => p !== undefined) as NonNullable<(typeof products)[number]>[];

  const Icon = icons[industry.icon as keyof typeof icons] ?? Landmark;

  const related = industries.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <>
      {/* ============ 1. Sector hero ============ */}
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
                { name: tnav("industries"), href: "/industries" },
                { name },
              ]}
            />
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <DefineWishKicker color="muted">define({slug}):</DefineWishKicker>
              </div>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/demo?intent=project"
                  data-track={`cta_click_industry_discuss_${slug}`}
                >
                  {t("cta", { sector: name })}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("back")}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                  {t("deployLine")}
                </p>
                <div className="mt-6 space-y-4">
                  {painPoints.slice(0, 3).map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-paper">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 2. Pain points — what we solve ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("painKicker")}
            title={t("painTitle")}
            subtitle={t("painBody")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {painPoints.map((point, i) => (
              <Reveal key={point} variant={i % 2 === 0 ? "slide-start" : "slide-end"}>
                <div className="frame-blueprint flex h-full items-start gap-4 rounded-2xl bg-ink-850 p-6">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 font-mono text-sm text-brand-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-paper">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 3. Relevant case studies ============ */}
      {sectorCases.length > 0 ? (
        <Section bg="ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              kicker={t("proofKicker")}
              title={t("proofTitle")}
              subtitle={t("proofBody")}
              teal
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectorCases.map((study, i) => (
                <Reveal key={study.slug} staggerIndex={i} as="article">
                  <CaseStudyCard study={study} locale={l} />
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade-up" className="mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
                data-track="industry_view_all_cases"
              >
                {t("allCases")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ============ 4. Relevant products ============ */}
      {sectorProducts.length > 0 ? (
        <Section bg="ink-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              kicker={t("productKicker")}
              title={t("productTitle")}
              subtitle={t("productBody")}
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {sectorProducts.map((product, i) => {
                const ptagline = localize(l, product.tagline);
                const pdescription = localize(l, product.description);
                return (
                  <Reveal key={product.slug} variant={i === 0 ? "slide-start" : "slide-end"} as="article">
                    <Link
                      href={`/products/${product.slug}`}
                      className="frame-blueprint group flex h-full flex-col rounded-2xl bg-ink-850 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-glow-teal"
                      data-track={`cta_click_industry_product_${product.slug}`}
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{ptagline}</p>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-paper">
                        {product.name}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pdescription}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-400">
                        {tcommon("learnMore")}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Section>
      ) : null}

      {/* ============ 5. Compliance & data notes ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="frame-blueprint grid items-center gap-8 rounded-2xl bg-ink-850 p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-10">
            <Reveal variant="slide-start">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
            </Reveal>
            <Reveal variant="slide-end">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                {t("complianceKicker")}
              </p>
              <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-paper">
                {t("complianceTitle")}
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{compliance}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 6. Related industries ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("moreKicker")} title={t("moreTitle")} subtitle={t("moreBody")} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {related.map((industry, i) => {
              const rname = localize(l, industry.name);
              const rheadline = localize(l, industry.headline);
              const rcount = industry.caseStudySlugs.length;
              return (
                <Reveal key={industry.slug} variant={i === 0 ? "slide-start" : "slide-end"} as="article">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="frame-blueprint group flex h-full items-center justify-between gap-6 rounded-2xl bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow"
                  >
                    <div>
                      <p className="text-sm font-semibold text-paper">{rname}</p>
                      <p className="mt-1.5 font-mono text-xs text-faint">
                        {rcount} {rcount === 1 ? t("caseSingular") : t("casePlural")} · {rheadline}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 7. CTA ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.05}>
            <CTABand
              title={t("ctaTitle", { sector: name })}
              subtitle={t("ctaSubtitle")}
              primary={{ label: t("cta", { sector: name }), href: "/demo?intent=project" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("industries"), href: "/industries" },
          { name },
        ]),
        serviceSchema({
          locale: l,
          href: `/industries/${slug}`,
          name,
          description: headline,
        })
      )}
    </>
  );
}