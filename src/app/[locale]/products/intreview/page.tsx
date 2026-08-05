import Image from "next/image";
import {
  BarChart3,
  BrainCircuit,
  Eye,
  FileText,
  Languages,
  ListChecks,
  Mail,
  Palette,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema, faqPageSchema, productSchema } from "@/lib/schema";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { ProductDetailHero } from "@/components/ProductDetailHero";
import { WindowFrame } from "@/components/WindowFrame";
import { StepFlowDiagram } from "@/components/StepFlowDiagram";
import { ROICalculator } from "@/components/ROICalculator";
import { CTABand } from "@/components/CTABand";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { FAQ } from "@/components/FAQ";
import { PricingBand } from "@/components/PricingBand";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { clientNames } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.intreview" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/products/intreview",
      title: t("title"),
      description: t("description"),
    });
  });
}

const featureIcons = [BrainCircuit, ListChecks, Eye, FileText, BarChart3, Palette] as const;
const flowIcons = [Mail, PlayCircle, BarChart3, Sparkles] as const;

const featureKeys = ["scoring", "questions", "proctoring", "reports", "dashboard", "whiteLabel"] as const;
const flowKeys = ["invite", "record", "review", "decide"] as const;
const proofKeys = ["speed", "consistency", "anxiety", "scale"] as const;
const testimonialKeys = ["ptcl", "hbl", "faysal", "ici", "bankAlfalah"] as const;
const comparisonKeys = ["time", "consistency", "scheduling", "evidence", "integrity", "scale"] as const;
const faqKeys = ["fairness", "proctoring", "questions", "candidate", "whiteLabel", "pricing"] as const;
const pricingKeys = ["volume", "pilot", "quote"] as const;
const pricingIcons = [Users, Rocket, Timer] as const;
const resultSlugs = ["ptcl-recruitment", "faysal-bank-recruitment", "ici-recruitment"] as const;

export default async function IntReviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("intreview");
  const troi = await getTranslations("roi");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const testimonials = testimonialKeys.map((k) => ({
    client: t(`testimonials.items.${k}.client`),
    value: t(`testimonials.items.${k}.value`),
    quote: t(`testimonials.items.${k}.quote`),
  }));
  const comparisonRows = comparisonKeys.map((k) => ({
    feature: t(`comparison.rows.${k}.feature`),
    us: t(`comparison.rows.${k}.us`),
    them: t(`comparison.rows.${k}.them`),
  }));
  const faqItems = faqKeys.map((k) => ({
    q: t(`faq.items.${k}.q`),
    a: t(`faq.items.${k}.a`),
  }));
  const pricingItems = pricingKeys.map((k, i) => {
    const Icon = pricingIcons[i];
    return {
      icon: <Icon className="h-5 w-5" aria-hidden="true" />,
      title: t(`pricing.items.${k}.title`),
      body: t(`pricing.items.${k}.body`),
    };
  });
  const results = resultSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      {/* ============ 1. Hero — AI report visual ============ */}
      <ProductDetailHero
        breadcrumb={[
          { name: tnav("home"), href: "/" },
          { name: tnav("products"), href: "/products" },
          { name: "IntReview" },
        ]}
        logo={
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/img/products/intreview-logo.webp"
            alt="IntReview"
            className="h-9 w-auto"
            width={110}
            height={32}
          />
        }
        kicker={t("hero.kicker")}
        headline={t("hero.headline")}
        tagline={t("hero.tagline")}
        outcome={t("hero.outcome")}
        primaryCta={{ label: t("hero.ctaDemo"), href: "/demo?intent=intreview", track: "cta_click_intreview_demo" }}
        secondaryCta={{ label: t("hero.ctaPilot"), href: "/demo?intent=intreview", track: "cta_click_intreview_pilot" }}
        trustLine={`${clientNames.slice(0, 4).join(" · ")} · ${t("outcome")}`}
        visual={
          <div className="relative">
            <div className="rotate-[1deg]">
              <WindowFrame title={t("hero.windowTitle")} bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-850">
                  <Image
                    src="/img/products/ai-report.webp"
                    alt="IntReview AI candidate report"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </WindowFrame>
            </div>
            <span className="absolute -top-3 start-6 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
              sample — real AI report UI
            </span>
          </div>
        }
        proofLabel={t("proofLabel")}
        proof={proofKeys.map((key) => ({
          value: t(`proof.${key}.value`),
          label: t(`proof.${key}.label`),
        }))}
      />

      {/* ============ 2. Features ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("features.kicker")}
            title={t("features.title")}
            subtitle={t("features.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureKeys.map((key, i) => {
              const Icon = featureIcons[i];
              return (
                <Reveal key={key} staggerIndex={i} as="li">
                  <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                      {t(`features.items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`features.items.${key}.body`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 3. Candidate flow ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("flow.kicker")}
            title={t("flow.title")}
            subtitle={t("flow.subtitle")}
          />
          <div className="mt-12">
            <StepFlowDiagram
              steps={flowKeys.map((key, i) => {
                const Icon = flowIcons[i];
                return {
                  icon: <Icon className="h-5 w-5" aria-hidden="true" />,
                  title: t(`flow.items.${key}.title`),
                  body: t(`flow.items.${key}.body`),
                };
              })}
            />
          </div>
        </div>
      </Section>

      {/* ============ 4. Candidate view + Languages / RTL ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_1fr]">
            <Reveal variant="slide-start">
              <WindowFrame title="IntReview — candidate recording view" bodyClassName="bg-ink-900">
                <div className="relative aspect-video w-full overflow-hidden bg-ink-850">
                  <Image
                    src="/img/products/interview-room.webp"
                    alt="IntReview candidate recording experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </WindowFrame>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint flex h-full flex-col justify-center gap-6 rounded-2xl bg-ink-850 p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <Languages className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-paper">
                    {t("languages.title")}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{t("languages.body")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 5. Security & compliance ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="frame-blueprint relative overflow-hidden rounded-2xl bg-ink-850 p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-20 -top-20 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-paper">
                    {t("security.title")}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {t("security.body")}
                  </p>
                </div>
                <Button href="/trust" variant="secondary" data-track="cta_click_trust_hub">
                  {t("security.cta")}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 6. Client outcomes ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("testimonials.kicker")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            teal
          />
          <div className="mt-12">
            <TestimonialGrid
              items={testimonials}
              cta={{ label: t("testimonials.cta"), href: "/demo?intent=intreview" }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 7. Comparison vs manual review ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("comparison.kicker")}
            title={t("comparison.title")}
            subtitle={t("comparison.subtitle")}
          />
          <div className="mt-12">
            <ComparisonMatrix
              us={t("comparison.us")}
              them={t("comparison.them")}
              rows={comparisonRows}
            />
          </div>
        </div>
      </Section>

      {/* ============ 8. Results from real programs ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("results.kicker")}
            title={t("results.title")}
            subtitle={t("results.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((study, i) => (
              <Reveal key={study.slug} staggerIndex={i}>
                <CaseStudyCard study={study} locale={l} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Button
              href="/case-studies"
              variant="secondary"
              size="lg"
              data-track="cta_click_product_all_case_studies"
            >
              {t("results.cta")}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ============ 9. ROI calculator ============ */}
      <Section bg="ink" id="roi">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            kicker={troi("kicker")}
            title={troi("title")}
            subtitle={troi("subtitle")}
            teal
            center
          />
          <div className="mt-12">
            <Reveal variant="scale">
              <ROICalculator intent="intreview" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 10. FAQ ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("faq.kicker")}
            title={t("faq.title")}
            subtitle={t("faq.subtitle")}
          />
          <div className="mt-12">
            <Reveal variant="fade-up">
              <FAQ items={faqItems} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 11. Pricing philosophy ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("pricing.kicker")}
            title={t("pricing.title")}
            subtitle={t("pricing.subtitle")}
            teal
            center
          />
          <div className="mt-12">
            <PricingBand
              items={pricingItems}
              cta={{ label: t("pricing.cta"), href: "/demo?intent=intreview" }}
              roiNote={{ label: t("pricing.roiNote"), href: "#roi" }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 12. CTA ============ */}
      <Section bg="ink-900">
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
              primary={{ label: tnav("bookDemo"), href: "/demo?intent=intreview" }}
              secondary={{ label: tcta("sandboxCta"), href: "/products/intos#sandbox" }}
              trustLine={`${tcta("trustLine")} · ${clientNames.slice(0, 4).join(" · ")}`}
            />
          </Reveal>
        </div>
      </Section>

      {/* Structured data */}
      {renderSchema(
        faqPageSchema({ items: faqItems }),
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("products"), href: "/products" },
          { name: "IntReview" },
        ]),
        productSchema({
          locale: l,
          href: "/products/intreview",
          name: "IntReview",
          description: t("description"),
          image: "/img/og-intreview.webp",
          offers: { priceCurrency: "USD", description: t("pricing.subtitle") },
        })
      )}
    </>
  );
}
