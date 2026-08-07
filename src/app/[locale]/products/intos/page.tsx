import {
  Activity,
  BarChart3,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cpu,
  FileCheck,
  FileDown,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Inbox,
  Landmark,
  Languages,
  Layers,
  Lock,
  Mail,
  MessagesSquare,
  MonitorPlay,
  Puzzle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sliders,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { breadcrumbSchema, renderSchema, videoObjectSchema, faqPageSchema, productSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { ProductDetailHero } from "@/components/ProductDetailHero";
import { WindowFrame } from "@/components/WindowFrame";
import { OSSandbox } from "@/components/OSSandbox";
import { GameVideo } from "@/components/GameVideo";
import { ROICalculator } from "@/components/ROICalculator";
import { CTABand } from "@/components/CTABand";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { FAQ } from "@/components/FAQ";
import { PricingBand } from "@/components/PricingBand";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { clientNames } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";
import { cn } from "@/lib/cn";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.intos" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/products/intos",
      title: t("title"),
      description: t("description"),
    });
  });
}

const proofKeys = ["candidates", "completion", "games", "report"] as const;
const dashboardKeys = ["pulse", "funnel", "timeSaved", "gems", "integrity"] as const;
const dashboardIcons = [Activity, BarChart3, Timer, Brain, ShieldCheck] as const;
const candidateKeys = ["anxiety", "mobile", "languages", "themes"] as const;
const candidateIcons = [Brain, Smartphone, Languages, Globe] as const;
const useCaseKeys = ["mt", "any", "graduate", "government", "volume"] as const;
const useCaseIcons = [GraduationCap, Briefcase, Users, Landmark, Rocket] as const;
const reportingKeys = ["report", "pdf", "shortlist", "compare"] as const;
const reportingIcons = [FileText, FileDown, BarChart3, Users] as const;
const pricingKeys = ["volume", "pilot", "quote"] as const;
const pricingIcons = [Users, Rocket, Timer] as const;

const resultSlugs = ["ptcl-recruitment", "hbl-3d-simulation", "faysal-bank-recruitment", "ici-recruitment"] as const;

const gameVideos = [
  { src: "/videos/intos/brain-buster.mp4", name: "Brain Buster (Working Memory)" },
  { src: "/videos/intos/numbubbles.mp4", name: "Numbubbles (Quantitative Reasoning)" },
  { src: "/videos/intos/numparision.mp4", name: "Numparison (Numerical Speed)" },
  { src: "/videos/intos/sentence-completion.mp4", name: "Word Wizard (Verbal Ability)" },
  { src: "/videos/intos/tetris.mp4", name: "Grid Lock (Spatial Logic)" },
  { src: "/videos/intos/word-wizard.mp4", name: "Shortcuts (Cognitive Flexibility)" },
] as const;

const atsIntegrations = [
  { name: "Workday", logoText: "Workday" },
  { name: "SAP SuccessFactors", logoText: "SAP SuccessFactors" },
  { name: "Oracle Taleo", logoText: "Oracle Taleo" },
  { name: "Greenhouse", logoText: "Greenhouse" },
  { name: "Lever", logoText: "Lever" },
] as const;

const comparisonRowsKeys = ["env", "builder", "consequence", "dataResidency", "whiteLabel"] as const;
const faqKeys = ["validity", "differs", "experience", "scoring", "ats", "compliance", "pricing"] as const;

export default async function IntOSPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("intos");
  const troi = await getTranslations("roi");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const comparisonRows = comparisonRowsKeys.map((k) => ({
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
      {/* ============ 1. Hero — Side-by-side with live interactive sandbox embed ============ */}
      <ProductDetailHero
        breadcrumb={[
          { name: tnav("home"), href: "/" },
          { name: tnav("products"), href: "/products" },
          { name: "intOS" },
        ]}
        logo={
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/img/products/intos-logo.svg"
            alt="intOS"
            className="h-9 w-auto"
            width={110}
            height={32}
          />
        }
        kicker={t("hero.kicker")}
        headline={t("hero.headline")}
        tagline={t("hero.tagline")}
        outcome={t("hero.outcome")}
        primaryCta={{ label: t("hero.ctaSandbox"), href: "#sandbox", track: "cta_click_intos_sandbox" }}
        secondaryCta={{ label: t("hero.ctaPilot"), href: "/demo?intent=intos", track: "cta_click_intos_pilot" }}
        trustLine={`${clientNames.slice(0, 4).join(" · ")} · 300,000+ candidates assessed`}
        visual={
          <div className="relative">
            <WindowFrame title={t("hero.windowTitle")} bodyClassName="bg-ink-900 overflow-hidden">
              <div className="relative h-[440px] sm:h-[500px] w-full">
                <OSSandbox />
              </div>
            </WindowFrame>
          </div>
        }
        proofLabel={t("proofLabel")}
        proof={proofKeys.map((key) => ({
          value: t(`proof.${key}.value`),
          label: t(`proof.${key}.label`),
        }))}
      />

      {/* ============ 2. Science, Validity & Adverse-Impact Transparency Strip ============ */}
      <Section bg="ink-900" className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <DefineWishKicker color="teal">{t("scienceStrip.kicker")}</DefineWishKicker>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
              {t("scienceStrip.title")}
            </h2>
            <p className="mt-2 mx-auto max-w-3xl text-sm text-muted sm:text-base">
              {t("scienceStrip.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal variant="fade-up" staggerIndex={0}>
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-mono text-lg font-bold text-paper">
                  {t("scienceStrip.sample.title")}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t("scienceStrip.sample.body")}
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" staggerIndex={1}>
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <Brain className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-mono text-lg font-bold text-paper">
                  {t("scienceStrip.validity.title")}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t("scienceStrip.validity.body")}
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" staggerIndex={2}>
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <FileCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-mono text-lg font-bold text-paper">
                  {t("scienceStrip.adverseImpact.title")}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t("scienceStrip.adverseImpact.body")}
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" staggerIndex={3}>
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <Lock className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-mono text-lg font-bold text-paper">
                  {t("scienceStrip.compliance.title")}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t("scienceStrip.compliance.body")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 3. Interactive Sandbox Full View ============ */}
      <Section bg="ink-900" id="sandbox">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("sandbox.kicker")}
            title={t("sandbox.title")}
            subtitle={t("sandbox.subtitle")}
            center
          />
          <div className="mt-12">
            <Reveal variant="scale">
              <OSSandbox />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 4. Named Platform Architecture (Modules Showcase) ============ */}
      <Section bg="ink" id="architecture">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("modules.kicker")}
            title={t("modules.title")}
            subtitle={t("modules.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* E-Tray / Email simulation (Large) */}
            <Reveal variant="slide-start" className="lg:col-span-2">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs text-brand-300">
                      Module 01
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-paper">
                    {t("modules.items.email.title")}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {t("modules.items.email.body")}
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-dashed border-accent-500/50 bg-ink-900 p-4 text-center">
                  <span className="font-mono text-xs text-accent-300">
                    PLACEHOLDER — E-Tray / Email simulation screenshot needed
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Team Messenger */}
            <Reveal variant="slide-end">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <MessagesSquare className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] text-faint">
                      Module 02
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                    {t("modules.items.messenger.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t("modules.items.messenger.body")}
                  </p>
                </div>
                <div className="mt-5 rounded-lg border border-dashed border-accent-500/50 bg-ink-900 p-3 text-center">
                  <span className="font-mono text-[11px] text-accent-300">
                    PLACEHOLDER — Team Messenger screenshot needed
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Meeting SJT */}
            <Reveal variant="slide-start">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Video className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] text-faint">
                      Module 03
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                    {t("modules.items.meeting.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t("modules.items.meeting.body")}
                  </p>
                </div>
                <div className="mt-5 rounded-lg border border-dashed border-accent-500/50 bg-ink-900 p-3 text-center">
                  <span className="font-mono text-[11px] text-accent-300">
                    PLACEHOLDER — Meeting SJT video call screenshot needed
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Calendar & Scheduler */}
            <Reveal variant="fade-up">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] text-faint">
                      Module 04
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                    {t("modules.items.calendar.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t("modules.items.calendar.body")}
                  </p>
                </div>
                <div className="mt-5 rounded-lg border border-dashed border-accent-500/50 bg-ink-900 p-3 text-center">
                  <span className="font-mono text-[11px] text-accent-300">
                    PLACEHOLDER — Calendar & Scheduler screenshot needed
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Structured Async Video Recorder */}
            <Reveal variant="slide-end">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <MonitorPlay className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] text-faint">
                      Module 05
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                    {t("modules.items.videoRecorder.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t("modules.items.videoRecorder.body")}
                  </p>
                </div>
                <div className="mt-5 rounded-lg border border-dashed border-accent-500/50 bg-ink-900 p-3 text-center">
                  <span className="font-mono text-[11px] text-accent-300">
                    PLACEHOLDER — Structured Async Video Recorder screenshot needed
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Narrative Engine (Full Width — Differentiator) */}
            <Reveal variant="fade-up" className="lg:col-span-3">
              <div className="frame-blueprint relative overflow-hidden rounded-2xl bg-accent-500/[0.06] p-7 sm:p-10 border border-accent-500/30">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 end-0 hidden w-1/2 bg-[radial-gradient(60%_120%_at_100%_50%,rgba(45,212,191,0.12),transparent_70%)] lg:block"
                />
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-500/40 bg-accent-500/10 text-accent-300">
                    <GitBranch className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                        {t("modules.items.narrative.title")}
                      </h3>
                      <span className="shrink-0 rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-300">
                        Primary Differentiator
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                      {t("modules.items.narrative.body")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 5. Cognitive Games Showcase (6 CHC-Theory Games) ============ */}
      <Section bg="ink-900" id="cognitive-assessments">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("gamesSection.kicker")}
            title={t("gamesSection.title")}
            subtitle={t("gamesSection.subtitle")}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "numbubbles", name: t("gamesSection.items.numbubbles.name"), factor: t("gamesSection.items.numbubbles.factor") },
              { id: "numparison", name: t("gamesSection.items.numparison.name"), factor: t("gamesSection.items.numparison.factor") },
              { id: "wordWizard", name: t("gamesSection.items.wordWizard.name"), factor: t("gamesSection.items.wordWizard.factor") },
              { id: "brainBuster", name: t("gamesSection.items.brainBuster.name"), factor: t("gamesSection.items.brainBuster.factor") },
              { id: "gridLock", name: t("gamesSection.items.gridLock.name"), factor: t("gamesSection.items.gridLock.factor") },
              { id: "shortcuts", name: t("gamesSection.items.shortcuts.name"), factor: t("gamesSection.items.shortcuts.factor") },
            ].map((game, i) => (
              <Reveal key={game.id} staggerIndex={i}>
                <div className="frame-blueprint rounded-xl bg-ink-850 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-paper text-base">{game.name}</span>
                    <span className="font-mono text-[10px] text-accent-300 border border-accent-500/30 rounded px-2 py-0.5">
                      CHC Theory
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted">{game.factor}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-line bg-ink-850 p-4 text-center">
            <span className="font-mono text-xs text-accent-300">
              PLACEHOLDER — Cognitive Mini-Games Hub & In-Game gameplay screenshots needed
            </span>
          </div>

          {/* Gameplay video recordings grid */}
          <div className="mt-12">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-faint mb-6">
              Gameplay Video Recordings
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gameVideos.map((video, i) => (
                <Reveal key={video.src} staggerIndex={i}>
                  <GameVideo src={video.src} name={video.name} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 6. Dual-Sided Proof: Candidate View + Recruiter Scenario Builder ============ */}
      <Section bg="ink" id="scenario-builder">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("dualProof.kicker")}
            title={t("dualProof.title")}
            subtitle={t("dualProof.subtitle")}
            teal
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Candidate Side */}
            <Reveal variant="slide-start">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {t("dualProof.candidateSide.title")}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t("dualProof.candidateSide.body")}
                </p>

                <div className="mt-6">
                  <WindowFrame title="intOS — candidate desktop view" bodyClassName="bg-ink-900">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-grid-dense flex items-center justify-center p-6 text-center">
                      <span className="font-mono text-xs text-accent-300">
                        PLACEHOLDER — Candidate Virtual OS Desktop (Light/Dark & Mobile) screenshot needed
                      </span>
                    </div>
                  </WindowFrame>
                </div>
              </div>
            </Reveal>

            {/* Recruiter / Admin Scenario Builder Side */}
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 text-accent-400">
                    <Sliders className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {t("dualProof.recruiterSide.title")}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t("dualProof.recruiterSide.body")}
                </p>

                <div className="mt-6">
                  <WindowFrame title="intOS — recruiter scenario builder canvas" bodyClassName="bg-ink-900">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-grid-dense flex items-center justify-center p-6 text-center">
                      <span className="font-mono text-xs text-accent-300">
                        PLACEHOLDER — Recruiter Scenario & Assessment Builder canvas screenshot needed
                      </span>
                    </div>
                  </WindowFrame>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 7. Recruiter Command Center Dashboard ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <Reveal variant="slide-start">
              <SectionHeading
                kicker={t("dashboard.kicker")}
                title={t("dashboard.title")}
                subtitle={t("dashboard.subtitle")}
              />
              <ul className="mt-8 space-y-5">
                {dashboardKeys.map((key, i) => {
                  const Icon = dashboardIcons[i];
                  return (
                    <Reveal key={key} variant="slide-start" staggerIndex={i} as="li">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold tracking-tight text-paper">
                            {t(`dashboard.items.${key}.title`)}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {t(`dashboard.items.${key}.body`)}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </Reveal>
            <Reveal variant="slide-end">
              <WindowFrame title="intOS — recruiter command center" bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-grid-dense p-5 sm:p-7">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Completion Rate", value: "97%", tone: "accent" },
                      { label: "Assessed Drives", value: "300k+", tone: "brand" },
                      { label: "Avg Match Score", value: "4.4/5", tone: "brand" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-lg border border-line bg-ink-850 p-3 sm:p-4">
                        <p className="font-mono text-[10px] text-faint sm:text-xs">{kpi.label}</p>
                        <p
                          className={cn(
                            "mt-1 font-mono text-base font-bold sm:text-xl",
                            kpi.tone === "accent" ? "text-accent-300" : "text-paper"
                          )}
                        >
                          {kpi.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 rounded-lg border border-line bg-ink-850 p-4">
                    <p className="font-mono text-[10px] text-faint sm:text-xs">Candidate Funnel Analytics</p>
                    {[100, 97, 84, 62].map((w, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 rounded-full bg-ink-700 flex-1">
                          <div
                            className="h-full rounded-full bg-accent-500/70"
                            style={{ width: `${w}%` }}
                          />
                        </div>
                        <span className="w-10 shrink-0 font-mono text-[9px] text-muted">{w}%</span>
                      </div>
                    ))}
                  </div>
                  <span className="absolute -top-2.5 start-4 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
                    PLACEHOLDER — Recruiter analytics dashboard screenshot needed
                  </span>
                </div>
              </WindowFrame>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 8. Category Benchmark Comparison Matrix ============ */}
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

      {/* ============ 9. ATS Integration Ecosystem ============ */}
      <Section bg="ink-900" id="atsintegrations">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("ats.kicker")}
            title={t("ats.title")}
            subtitle={t("ats.subtitle")}
            teal
            center
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {atsIntegrations.map((ats, i) => (
              <Reveal key={ats.name} staggerIndex={i}>
                <div className="frame-blueprint flex items-center gap-3 rounded-xl bg-ink-850 px-6 py-4 border border-line hover:border-accent-500/40 transition-colors">
                  <Cpu className="h-5 w-5 text-accent-400" aria-hidden="true" />
                  <span className="font-display font-semibold text-paper text-base">{ats.logoText}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 10. Filtered Real Deployment Case Studies ============ */}
      <Section bg="ink" id="case-studies">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("results.kicker")}
            title={t("results.title")}
            subtitle={t("results.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <MonitorPlay className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ============ 11. Defensible Category ROI Calculator ============ */}
      <Section bg="ink-900" id="roi">
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
              <ROICalculator intent="intos" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 12. FAQ Accordion ============ */}
      <Section bg="ink" id="faq">
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

      {/* ============ 13. Pricing & Pilot Band ============ */}
      <Section bg="ink-900">
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
              cta={{ label: t("pricing.cta"), href: "/demo?intent=intos" }}
              roiNote={{ label: t("pricing.roiNote"), href: "#roi" }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 14. Demo Request Form & Feature-Flagged Testimonial Slot ============ */}
      {/* 
        TESTIMONIAL SLOT: Feature-flagged off until real verified client quotes are sourced.
        Uncomment when client quotes are available.
        <Section bg="ink-900">
          <TestimonialGrid items={[]} cta={{ label: "Book Demo", href: "/demo?intent=intos" }} />
        </Section>
      */}

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
              primary={{ label: tnav("bookDemo"), href: "/demo?intent=intos" }}
              secondary={{ label: tcta("sandboxCta"), href: "#sandbox" }}
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
          { name: "intOS" },
        ]),
        productSchema({
          locale: l,
          href: "/products/intos",
          name: "intOS",
          description: t("description"),
          image: "/img/og-intos.webp",
          offers: { priceCurrency: "USD", description: t("pricing.subtitle") },
        }),
        ...gameVideos.map((video) =>
          videoObjectSchema({
            name: `${video.name} — intOS psychometric game`,
            description: "A psychometric game from the intOS virtual-OS assessment suite, as played by candidates in a live drive.",
            contentUrl: `${SITE_URL}${video.src}`,
          })
        )
      )}
    </>
  );
}