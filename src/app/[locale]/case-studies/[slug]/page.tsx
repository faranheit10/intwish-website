import { ArrowRight, CheckCircle2, FileDown, MonitorPlay } from "lucide-react";
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
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ClientProfileBadge } from "@/components/case-studies/ClientProfileBadge";
import { StorySnapshot } from "@/components/case-studies/StorySnapshot";
import { CaseStudySidebar } from "@/components/case-studies/CaseStudySidebar";
import { CaseStudyGallery } from "@/components/case-studies/CaseStudyGallery";
import { localize } from "@/content/types";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { getCaseStudyMeta } from "@/content/caseStudiesMeta";
import { getProduct } from "@/content/products";
import { getIndustry } from "@/content/industries";

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
  const meta = getCaseStudyMeta(slug);
  if (!study || !meta) notFound();

  const t = await getTranslations("caseStudies");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  // ---- Localized content ----
  const title = localize(l, study.title);
  const summary = localize(l, study.summary);
  const industry = localize(l, study.industry);
  const paragraphs = localize(l, study.body);
  const region = localize(l, meta.region);
  const scale = localize(l, meta.scale);

  const solution = meta.solution.map((s) => ({
    label: localize(l, s.label),
    note: s.note ? localize(l, s.note) : undefined,
  }));
  const outcome = meta.metrics.map((m) => ({
    value: localize(l, m.value),
    label: localize(l, m.label),
  }));
  const images = meta.images.map((img) => ({ ...img, caption: localize(l, img.caption) }));
  const video = meta.video && meta.video.src ? { src: meta.video.src, title: localize(l, meta.video.title) } : undefined;
  const testimonial = meta.testimonial
    ? {
        quote: localize(l, meta.testimonial.quote),
        name: meta.testimonial.name,
        title: localize(l, meta.testimonial.title),
        company: meta.testimonial.company,
      }
    : undefined;

  // ---- Proof to product cross-links ----
  const product = getProduct(meta.productSlug);
  const productName = product?.name ?? meta.productSlug;
  const productHref = `/products/${meta.productSlug}`;
  const industryItem = meta.industrySlug ? getIndustry(meta.industrySlug) : undefined;
  const industryHref = meta.industrySlug ? `/industries/${meta.industrySlug}` : undefined;

  // ---- More stories: shared product OR industry ----
  const related = caseStudies
    .map((c) => ({ study: c, m: getCaseStudyMeta(c.slug) }))
    .filter((x) => x.study.slug !== slug)
    .filter((x) => x.m && (x.m.productSlug === meta.productSlug || (meta.industrySlug !== undefined && x.m.industrySlug === meta.industrySlug)))
    .slice(0, 3)
    .map((x) => x.study);

  return (
    <>
      {/* ============ 1. Story Snapshot above the fold ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
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

          <div className="mt-10 grid items-end gap-8">
            <div>
              <Reveal variant="fade-up">
                <DefineWishKicker color="teal" cursor>
                  {t("snapshotKicker")} · {study.client}
                </DefineWishKicker>
              </Reveal>
              <Reveal variant="fade-up" delay={0.05}>
                <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
                  {title}
                </h1>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                  {summary}
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/demo?intent=project" size="lg" data-track={`cta_click_case_demo_${slug}`}>
                    {t("scheduleDemo")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Button>
                  <Button href={productHref} size="lg" variant="secondary">
                    {t("viewProduct", { product: productName })}
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
          </div>

          {/* Challenge -> Solution Map -> Outcome Matrix */}
          <div className="mt-14">
            <Reveal variant="fade-up">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {t("snapshotKicker")}
              </p>
            </Reveal>
            <StorySnapshot
              challengeLabel={t("challengeLabel")}
              challenge={localize(l, meta.challenge)}
              solutionLabel={t("solutionLabel")}
              solution={solution}
              outcomeLabel={t("outcomeLabel")}
              outcome={outcome}
            />
          </div>
        </div>
      </Section>

      {/* ============ 2. Two-column narrative + sticky sidebar ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            {/* Left - main narrative */}
            <div>
              {meta.layout === "product-specific" ? (
                <Reveal variant="fade-up">
                  <div className="frame-blueprint mb-10 rounded-2xl bg-ink-850 p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                      {t("solutionLabel")}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {solution.map((item) => (
                        <li key={item.label} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                          <span>
                            <span className="text-paper">{item.label}</span>
                            {item.note ? (
                              <span className="block font-mono text-xs text-accent-300">{item.note}</span>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ) : null}

              <SectionHeading kicker={t("readTheStory")} title={title} className="max-w-2xl" />
              <div className="mt-6 space-y-6">
                {paragraphs.map((paragraph, i) => (
                  <Reveal key={`${slug}-${i}`} variant="fade-up" delay={0.05 * i}>
                    <p className="text-base leading-relaxed text-paper/90 sm:text-lg">{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              {/* Proof -> product / industry cross-links */}
              <Reveal variant="fade-up" delay={0.1}>
                <div className="mt-12 flex flex-wrap gap-3">
                  <Link
                    href={productHref}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-300 transition-all hover:bg-brand-500 hover:text-ink-950"
                    data-track="case_link_product"
                  >
                    {t("viewProduct", { product: productName })}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                  {industryItem ? (
                    <Link
                      href={industryHref!}
                      className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-5 py-2.5 text-sm font-semibold text-accent-300 transition-all hover:bg-accent-500 hover:text-ink-950"
                      data-track="case_link_industry"
                    >
                      {t("industryLabel")}: {localize(l, industryItem.name)}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            </div>

            {/* Right - sticky sidebar (metrics / quote / CTA) */}
            <CaseStudySidebar
              client={study.client}
              industry={industry}
              badge={
                <ClientProfileBadge
                  client={study.client}
                  industry={industry}
                  industryHref={industryHref}
                  region={region}
                  year={study.date}
                  product={productName}
                  productHref={productHref}
                  scale={scale}
                  labels={{
                    industry: t("industryLabel"),
                    region: t("regionLabel"),
                    year: t("yearLabel"),
                    product: t("productLabel"),
                    scale: t("scaleLabel"),
                  }}
                />
              }
              testimonialLabel={t("testimonialLabel")}
              testimonial={testimonial}
              scheduleDemo={{ label: t("scheduleDemo"), href: "/demo?intent=project", track: `cta_click_case_demo_${slug}` }}
              viewProduct={{ label: t("viewProduct", { product: productName }), href: productHref }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 3. Deployment gallery ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("galleryKicker")} title={t("galleryLabel")} teal />
          <div className="mt-12">
            <CaseStudyGallery images={images} />
          </div>
        </div>
      </Section>

      {/* ============ 4. Flagship video (conditional) ============ */}
      {video ? (
        <Section bg="ink-900">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionHeading kicker={t("videoKicker")} title={video.title} />
            <Reveal variant="scale" className="mt-12">
              <figure className="overflow-hidden rounded-2xl border border-line-strong shadow-card">
                <video
                  src={video.src}
                  controls
                  preload="none"
                  playsInline
                  className="aspect-video w-full bg-ink-950"
                />
                <figcaption className="flex items-center gap-2 border-t border-line bg-ink-850 px-5 py-3 font-mono text-xs text-faint">
                  <MonitorPlay className="h-4 w-4 text-brand-400" aria-hidden="true" />
                  {t("videoLabel")}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ============ 5. More stories like this ============ */}
      {related.length > 0 ? (
        <Section bg="ink-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading kicker={t("relatedKicker")} title={t("relatedLabel")} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((studyItem, i) => (
                <Reveal key={studyItem.slug} staggerIndex={i} as="article">
                  <CaseStudyCard study={studyItem} locale={l} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* ============ 6. CTA band ============ */}
      <Section bg="ink">
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
              primary={{ label: t("scheduleDemo"), href: "/demo?intent=project" }}
              secondary={{ label: t("viewProduct", { product: productName }), href: productHref }}
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
