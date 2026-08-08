import Image from "next/image";
import {
  BarChart3,
  BrainCircuit,
  Building2,
  CheckSquare,
  Code2,
  Cpu,
  Database,
  Eye,
  FileText,
  Globe,
  Languages,
  ListChecks,
  Lock,
  Mic,
  Palette,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sliders,
  Sparkles,
  Timer,
  UserCheck,
  Users,
  Video,
  Workflow,
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
import {
  VideoResponseVisual,
  MCQSelectVisual,
  TextEssayVisual,
  RatingScaleVisual,
  AssessmentBuilderVisual,
  QuestionBankVisual,
  RubricFrameworkVisual,
  RBACVisual,
  IntegrationsVisual,
} from "@/components/IntReviewVisuals";



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

const proofKeys = ["speed", "consistency", "anxiety", "scale"] as const;
const questionTypeKeys = ["video", "select", "text", "scale"] as const;
const antiCheatTierKeys = ["tier1", "tier2", "tier3", "tier4"] as const;
const scoringKeys = ["star", "radar", "quotes"] as const;
const dashboardKeys = ["builder", "bank", "rubric", "rbac", "integrations"] as const;
const comparisonKeys = ["formats", "proctoring", "transparency", "compliance", "builder", "rbac"] as const;
const flowKeys = ["invite", "record", "review", "decide"] as const;
const testimonialKeys = ["ptcl", "hbl", "faysal", "ici", "bankAlfalah"] as const;
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
      {/* ============ 1. Hero — Dual Stream Window Frame Visual ============ */}
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
        primaryCta={{ label: t("hero.ctaDemo"), href: "#anti-cheat", track: "cta_click_intreview_proctoring" }}
        secondaryCta={{ label: t("hero.ctaPilot"), href: "/demo?intent=intreview", track: "cta_click_intreview_pilot" }}
        trustLine={`${clientNames.slice(0, 4).join(" · ")} · ${t("proofLabel")}`}
        visual={
          <div className="relative">
            <div className="rotate-[1deg]">
              <WindowFrame title={t("hero.windowTitle")} bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-850">
                  <Image
                    src="/img/products/intreview-hero-room.png"
                    alt="IntReview Candidate Recording & Live Recruiter Proctoring Feed"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Real-time proctoring overlay simulation */}
                  <div className="absolute bottom-3 start-3 end-3 rounded-lg border border-accent-500/30 bg-ink-950/90 p-3 backdrop-blur sm:p-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-2 text-accent-400 font-semibold">
                        <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                        PROCTORING ACTIVE
                      </span>
                      <span className="text-paper-muted">Gaze: Centered | Audio Anomalies: None</span>
                    </div>
                  </div>
                </div>
              </WindowFrame>
            </div>
            {/* Real Product Interface Label */}
            <span className="absolute -top-3 start-6 rounded border border-accent-500/50 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300 shadow-sm">
              Real Product Interface: Candidate Assessment Room & Telemetry
            </span>
          </div>
        }
        proofLabel={t("proofLabel")}
        proof={proofKeys.map((key) => ({
          value: t(`proof.${key}.value`),
          label: t(`proof.${key}.label`),
        }))}
      />

      {/* ============ 2. Multi-Format Question Types Callout (#question-types) ============ */}
      <Section bg="ink-900" id="question-types">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("questionTypes.kicker")}
            title={t("questionTypes.title")}
            subtitle={t("questionTypes.subtitle")}
            teal
          />

          {/* STAR Guidance Panel Notice */}
          <Reveal variant="fade-up" className="mt-8">
            <div className="rounded-xl border border-brand-500/30 bg-brand-500/10 p-4 text-sm text-brand-300 sm:p-5 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{t("questionTypes.starNotice")}</span>
            </div>
          </Reveal>

          {/* 4 Multi-Format Question Type Cards with Image Placeholders */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {questionTypeKeys.map((key, i) => {
              const icons = [Video, ListChecks, FileText, Sliders];
              const Icon = icons[i];
              return (
                <Reveal key={key} staggerIndex={i}>
                  <div className="frame-blueprint flex h-full flex-col justify-between rounded-2xl bg-ink-850 p-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-xs text-muted">Format 0{i + 1}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                        {t(`questionTypes.items.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t(`questionTypes.items.${key}.body`)}
                      </p>
                    </div>

                    {/* Theme SVG Vector Visualizer per Format */}
                    <div className="mt-6">
                      {key === "video" ? (
                        <VideoResponseVisual />
                      ) : key === "select" ? (
                        <MCQSelectVisual />
                      ) : key === "text" ? (
                        <TextEssayVisual />
                      ) : (
                        <RatingScaleVisual />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 3. Anti-Cheat Integrity Suite (#anti-cheat) ============ */}
      <Section bg="ink" id="anti-cheat">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("antiCheat.kicker")}
            title={t("antiCheat.title")}
            subtitle={t("antiCheat.subtitle")}
          />

          {/* Tiered Diagram built with StepFlowDiagram */}
          <div className="mt-12">
            <StepFlowDiagram
              steps={antiCheatTierKeys.map((key, i) => {
                const icons = [UserCheck, Eye, Lock, ShieldCheck];
                const Icon = icons[i];
                return {
                  icon: <Icon className="h-5 w-5" aria-hidden="true" />,
                  title: t(`antiCheat.tiers.${key}.title`),
                  body: t(`antiCheat.tiers.${key}.body`),
                };
              })}
            />
          </div>

          {/* Human-in-the-Loop Score Override Callout */}
          <Reveal variant="fade-up" className="mt-12">
            <div className="frame-blueprint relative overflow-hidden rounded-2xl bg-ink-850 p-8 border-s-4 border-s-accent-500 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-paper">
                    {t("antiCheat.overrideCallout.title")}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted max-w-4xl">
                    {t("antiCheat.overrideCallout.body")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 4. AI Scoring & Rubric Engine (#scoring) ============ */}
      <Section bg="ink-900" id="scoring">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("scoring.kicker")}
            title={t("scoring.title")}
            subtitle={t("scoring.subtitle")}
            teal
          />

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
            {/* Left: Deep AI Analysis Page UI Screenshot / Placeholder */}
            <Reveal variant="slide-start">
              <WindowFrame title="IntReview — Deep AI Candidate Analysis Page" bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-850">
                  <Image
                    src="/img/products/intreview-admin-dashboard.png"
                    alt="IntReview Deep Analysis Page — STAR score breakdown and competency radar chart"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </WindowFrame>
              <p className="mt-2 text-center font-mono text-[11px] text-accent-400">
                Real Product Interface: Recruiter Workstation & Candidate Funnel Analytics
              </p>
            </Reveal>

            {/* Right: Feature breakdown */}
            <div className="space-y-6">
              {scoringKeys.map((key, i) => {
                const icons = [Sparkles, BarChart3, FileText];
                const Icon = icons[i];
                return (
                  <Reveal key={key} staggerIndex={i}>
                    <div className="frame-blueprint rounded-xl bg-ink-850 p-6">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold tracking-tight text-paper">
                            {t(`scoring.items.${key}.title`)}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {t(`scoring.items.${key}.body`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 5. Recruiter Control Surface (#dashboard) ============ */}
      <Section bg="ink" id="dashboard">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("dashboard.kicker")}
            title={t("dashboard.title")}
            subtitle={t("dashboard.subtitle")}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardKeys.map((key, i) => {
              const icons = [Cpu, Database, Sliders, Users, Workflow];
              const Icon = icons[i];
              return (
                <Reveal key={key} staggerIndex={i}>
                  <div className="frame-blueprint flex h-full flex-col justify-between rounded-2xl bg-ink-850 p-7">
                    <div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                        {t(`dashboard.items.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t(`dashboard.items.${key}.body`)}
                      </p>
                    </div>

                    {/* Theme SVG Vector Visualizer per Recruiter Module */}
                    <div className="mt-6">
                      {key === "builder" ? (
                        <AssessmentBuilderVisual />
                      ) : key === "bank" ? (
                        <QuestionBankVisual />
                      ) : key === "rubric" ? (
                        <RubricFrameworkVisual />
                      ) : key === "rbac" ? (
                        <RBACVisual />
                      ) : (
                        <IntegrationsVisual />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 6. Sovereign Cloud & Global Compliance (#compliance) ============ */}
      <Section bg="ink-900" id="compliance">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="frame-blueprint relative overflow-hidden rounded-2xl bg-ink-850 p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-20 -top-20 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Globe className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-paper">
                    {t("compliance.title")}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted sm:text-base">
                    {t("compliance.body")}
                  </p>
                </div>
                <Button href="/trust" variant="secondary" data-track="cta_click_trust_hub">
                  {t("compliance.cta")}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 7. Corrected Head-to-Head Comparison Matrix (#comparison) ============ */}
      <Section bg="ink" id="comparison">
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

      {/* ============ 8. Client Outcomes & Case Studies ============ */}
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

      {/* ============ 9. ROI Calculator (#roi) ============ */}
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

      {/* ============ 11. Pricing Philosophy ============ */}
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

      {/* Testimonial Slot (Commented out until real client quotes are sourced) */}
      {/* 
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker="Client Feedback" title="What Talent Teams Say" subtitle="Real feedback from hiring teams using IntReview." teal />
          <div className="mt-12">
            <TestimonialGrid items={testimonials} cta={{ label: t("testimonials.cta"), href: "/demo?intent=intreview" }} />
          </div>
        </div>
      </Section>
      */}

      {/* ============ 12. CTA Band ============ */}
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
