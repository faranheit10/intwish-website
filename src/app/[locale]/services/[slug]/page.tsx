import { ArrowRight, CheckCircle2, Cpu, Terminal } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema, serviceSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getService } from "@/content/services";
import { products } from "@/content/products";
import { caseStudies } from "@/content/caseStudies";
import { localize } from "@/content/types";

const SERVICE_SLUGS = [
  "training-learning",
  "recruitment-assessment",
  "employee-engagement",
  "enterprise-portals",
  "feedback-360",
  "ar-vr-simulation",
] as const;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = localize(locale as Locale, service.title);
  const t = await getTranslations({ locale, namespace: "metadata.pages.servicesDetail" });
  return buildMetadata({
    locale: locale as Locale,
    href: `/services/${slug}`,
    title: t("title", { service: title }),
    description: t("description", { service: title }),
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations("services");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const title = localize(l, service.title);
  const tagline = localize(l, service.tagline);
  const description = localize(l, service.description);
  const outcomes = localize(l, service.outcomes);
  const related = service.caseStudySlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c) => c !== undefined);

  return (
    <>
      {/* ============ 1. Page header — breadcrumb + title + tagline ============ */}
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
                { name: tnav("services"), href: "/services" },
                { name: title },
              ]}
            />
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <DefineWishKicker>{t("heroKicker")}</DefineWishKicker>
              <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{tagline}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-faint">{description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/demo?intent=project"
                  data-track={`cta_click_service_discuss_${slug}`}
                >
                  {t("discussCta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("back")}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-7 sm:p-8">
                <p className="flex items-center gap-2 font-mono text-xs text-accent-300">
                  <Terminal className="h-4 w-4" aria-hidden="true" />
                  define({slug}) → deploy(result)
                </p>
                <div className="mt-6 space-y-4">
                  {outcomes.slice(0, 4).map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-paper">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 2. Capability framing — outcome list ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("outcomesKicker")}
            title={t("outcomesTitle")}
            subtitle={t("outcomesBody")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {outcomes.map((outcome, i) => (
              <Reveal key={outcome} variant={i % 2 === 0 ? "slide-start" : "slide-end"}>
                <div className="frame-blueprint flex h-full items-start gap-4 rounded-2xl bg-ink-850 p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-base font-medium leading-relaxed text-paper">{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 3. Proof by product — shipped evidence ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("proofKicker")}
            title={t("proofTitle")}
            subtitle={t("proofBody")}
            teal
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {products.map((product, i) => {
              const tagline = localize(l, product.tagline);
              const description = localize(l, product.description);
              return (
                <Reveal key={product.slug} variant={i === 0 ? "slide-start" : "slide-end"} as="article">
                  <Link
                    href={`/products/${product.slug}`}
                    className="frame-blueprint group flex h-full flex-col rounded-2xl bg-ink-850 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-glow-teal"
                    data-track={`cta_click_service_proof_${product.slug}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                        <Cpu className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{tagline}</p>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 flex-1 leading-relaxed text-muted">{description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-400">
                      {t("poweredBy")} {product.name}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 4. Relevant case studies ============ */}
      {related.length > 0 ? (
        <Section bg="ink-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              kicker={t("kicker")}
              title={t("relatedCaseStudies")}
              subtitle={t("outcomesBody")}
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((study, i) => (
                <Reveal key={study.slug} staggerIndex={i} as="article">
                  <CaseStudyCard study={study} locale={l} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* ============ 5. Engagement model / CTA ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up">
            <CTABand
              title={tcta("title")}
              subtitle={tcta("subtitle")}
              primary={{ label: t("discussCta"), href: "/demo?intent=project" }}
              secondary={{ label: t("back"), href: "/services" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {/* Structured data */}
      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("services"), href: "/services" },
          { name: title },
        ]),
        serviceSchema({
          locale: l,
          href: `/services/${slug}`,
          name: title,
          description,
        })
      )}
    </>
  );
}