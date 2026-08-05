import {
  Activity,
  BarChart3,
  Briefcase,
  Contrast,
  FileDown,
  FileText,
  Gem,
  GitBranch,
  GraduationCap,
  Inbox,
  Landmark,
  Languages,
  Mail,
  MessagesSquare,
  MonitorPlay,
  Puzzle,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Smile,
  Terminal,
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
import { IntOSDesktopMock } from "@/components/IntOSDesktopMock";
import { WindowFrame } from "@/components/WindowFrame";
import { OSSandbox } from "@/components/OSSandbox";
import { GameVideo } from "@/components/GameVideo";
import { ROICalculator } from "@/components/ROICalculator";
import { CTABand } from "@/components/CTABand";
import { TestimonialGrid } from "@/components/TestimonialGrid";
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

const dashboardIcons = [Activity, BarChart3, Timer, Gem, ShieldAlert] as const;
const candidateIcons = [Smile, Smartphone, Languages, Contrast] as const;
const useCaseIcons = [GraduationCap, Briefcase, Users, Landmark, Rocket] as const;
const reportingIcons = [FileText, FileDown, BarChart3, Users] as const;
const pricingIcons = [Users, Rocket, Timer] as const;

const dashboardKeys = ["pulse", "funnel", "timeSaved", "gems", "integrity"] as const;
const candidateKeys = ["anxiety", "mobile", "languages", "themes"] as const;
const useCaseKeys = ["mt", "any", "graduate", "government", "volume"] as const;
const reportingKeys = ["report", "pdf", "shortlist", "compare"] as const;
const proofKeys = ["candidates", "conversion", "users", "report"] as const;
const testimonialKeys = ["ptcl", "hbl", "ici", "bankAlfalah", "faysal"] as const;
const comparisonKeys = ["setup", "scale", "experience", "objectivity", "reporting", "audit"] as const;
const faqKeys = ["validity", "experience", "scoring", "scale", "languages", "pricing"] as const;
const pricingKeys = ["volume", "pilot", "quote"] as const;
const resultSlugs = ["ptcl-recruitment", "hbl-3d-simulation", "ici-recruitment"] as const;

const gameVideos = [
  { src: "/videos/intos/brain-buster.mp4", name: "Brain buster" },
  { src: "/videos/intos/numbubbles.mp4", name: "Numbubbles" },
  { src: "/videos/intos/numparision.mp4", name: "Numparision" },
  { src: "/videos/intos/sentence-completion.mp4", name: "Sentence Completion" },
  { src: "/videos/intos/tetris.mp4", name: "Tetris" },
  { src: "/videos/intos/word-wizard.mp4", name: "Word Wizard" },
] as const;

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
      {/* ============ 1. Hero — side-by-side with sandbox preview ============ */}
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
        trustLine={`${clientNames.slice(0, 4).join(" · ")} · ${t("hero.outcome")}`}
        visual={
          <div className="relative">
            <div className="rotate-[-1deg]">
              <WindowFrame title={t("hero.windowTitle")} bodyClassName="bg-ink-900">
                <IntOSDesktopMock className="shadow-window" />
              </WindowFrame>
            </div>
            <span className="absolute -top-3 start-6 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
              PLACEHOLDER — intOS desktop screenshot needed
            </span>
          </div>
        }
        proofLabel={t("proofLabel")}
        proof={proofKeys.map((key) => ({
          value: t(`proof.${key}.value`),
          label: t(`proof.${key}.label`),
        }))}
      />

      {/* ============ 2. Interactive sandbox ============ */}
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

      {/* ============ 3. Psychometric games in action ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("videos.kicker")}
            title={t("videos.title")}
            subtitle={t("videos.subtitle")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameVideos.map((video, i) => (
              <Reveal key={video.src} staggerIndex={i}>
                <GameVideo src={video.src} name={video.name} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 4. Modules showcase — bento ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("modules.kicker")}
            title={t("modules.title")}
            subtitle={t("modules.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Large — email simulation (2x2) */}
            <Reveal variant="slide-start" className="lg:col-span-2">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-paper">
                  {t("modules.items.email.title")}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {t("modules.items.email.body")}
                </p>
              </div>
            </Reveal>
            {/* Small — messenger */}
            <Reveal variant="slide-end">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <MessagesSquare className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                  {t("modules.items.messenger.title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("modules.items.messenger.body")}
                </p>
              </div>
            </Reveal>
            {/* Small — SJT meetings */}
            <Reveal variant="slide-start">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Video className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                  {t("modules.items.meeting.title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("modules.items.meeting.body")}
                </p>
              </div>
            </Reveal>
            {/* Large — e-tray */}
            <Reveal variant="slide-end" className="lg:col-span-2">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Inbox className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-paper">
                  {t("modules.items.etray.title")}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {t("modules.items.etray.body")}
                </p>
              </div>
            </Reveal>
            {/* Small — psychometric */}
            <Reveal variant="slide-start">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  <Puzzle className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                  {t("modules.items.psychometric.title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("modules.items.psychometric.body")}
                </p>
              </div>
            </Reveal>
            {/* Narrative engine — full width, the differentiator */}
            <Reveal variant="fade-up" className="lg:col-span-3">
              <div className="frame-blueprint relative overflow-hidden rounded-2xl bg-accent-500/[0.06] p-7 sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 end-0 hidden w-1/2 bg-[radial-gradient(60%_120%_at_100%_50%,rgba(45,212,191,0.12),transparent_70%)] lg:block"
                />
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-500/40 bg-accent-500/10 text-accent-300">
                    <GitBranch className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                      {t("modules.items.narrative.title")}
                    </h3>
                    <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                      {t("modules.items.narrative.body")}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-1.5 font-mono text-xs text-accent-300">
                    {"{ "}the differentiator{" }"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 5. Recruiter dashboard ============ */}
      <Section bg="ink">
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
                      <li className="flex items-start gap-4">
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
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </Reveal>
            <Reveal variant="slide-end">
              <WindowFrame title="intOS — recruiter dashboard" bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-grid-dense">
                  {/* CSS-composed dashboard preview until real screenshot lands */}
                  <div className="absolute inset-0 p-5 sm:p-7">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Pending", value: "1,204", tone: "brand" },
                        { label: "Completed", value: "68%", tone: "accent" },
                        { label: "Avg match", value: "4.1/5", tone: "brand" },
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
                    {/* Funnel bars */}
                    <div className="mt-4 space-y-2 rounded-lg border border-line bg-ink-850 p-4">
                      <p className="font-mono text-[10px] text-faint sm:text-xs">Funnel</p>
                      {[100, 78, 54, 31].map((w, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2 rounded-full bg-ink-700">
                            <div
                              className="h-full rounded-full bg-accent-500/70"
                              style={{ width: `${w}%` }}
                            />
                          </div>
                          <span className="w-10 shrink-0 font-mono text-[9px] text-muted">{w}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="absolute -top-2.5 start-4 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
                    PLACEHOLDER — recruiter dashboard screenshot needed
                  </span>
                </div>
              </WindowFrame>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 6. Candidate experience — split screen ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("candidate.kicker")}
            title={t("candidate.title")}
            subtitle={t("candidate.subtitle")}
            teal
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {candidateKeys.map((key, i) => {
              const Icon = candidateIcons[i];
              return (
                <Reveal key={key} staggerIndex={i} as="li">
                  <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-paper">
                      {t(`candidate.items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`candidate.items.${key}.body`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {/* Split-screen light/dark visual */}
          <Reveal variant="fade-up" className="mt-10">
            <WindowFrame title="intOS — candidate view · dark & light" bodyClassName="bg-ink-900">
              <div className="grid grid-cols-2 gap-3 p-4 sm:p-6">
                <div className="rounded-xl border border-line bg-ink-850 p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-faint sm:text-xs">Dark theme</span>
                    <span className="h-3 w-3 rounded-full bg-ink-500" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-5 rounded bg-ink-700/70" />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-white p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-ink-600 sm:text-xs">Light theme</span>
                    <span className="h-3 w-3 rounded-full bg-brand-500" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-5 rounded bg-ink-700/20" />
                    ))}
                  </div>
                </div>
              </div>
            </WindowFrame>
          </Reveal>
        </div>
      </Section>

      {/* ============ 7. Use cases ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("useCases.kicker")}
            title={t("useCases.title")}
            subtitle={t("useCases.subtitle")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCaseKeys.map((key, i) => {
              const Icon = useCaseIcons[i];
              return (
                <Reveal key={key} staggerIndex={i} as="li">
                  <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                      {t(`useCases.items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`useCases.items.${key}.body`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal staggerIndex={useCaseKeys.length}>
              <div className="frame-blueprint flex h-full flex-col items-center justify-center gap-3 rounded-2xl border-dashed bg-ink-850 p-7 text-center">
                <Terminal className="h-6 w-6 text-accent-400" aria-hidden="true" />
                <p className="text-sm font-medium text-muted">{t("useCases.more")}</p>
                <Link
                  href="/demo?intent=intos"
                  className="text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("ctaPilot")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 8. Science & validity ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="slide-start">
              <DefineWishKicker>{t("science.kicker")}</DefineWishKicker>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {t("science.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{t("science.subtitle")}</p>
              <Link
                href="/science"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                {t("science.cta")}
              </Link>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-8">
                <p className="font-mono text-sm leading-relaxed text-paper">{t("science.body")}</p>
                <div className="mt-6 rounded-xl border border-dashed border-accent-500/50 bg-accent-500/5 p-5">
                  <p className="flex items-center gap-2 font-mono text-xs text-accent-300">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    PLACEHOLDER — validation data (reliability, validity correlations, samples)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 9. Reporting & analytics ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("reporting.kicker")}
            title={t("reporting.title")}
            subtitle={t("reporting.subtitle")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reportingKeys.map((key, i) => {
              const Icon = reportingIcons[i];
              return (
                <Reveal key={key} staggerIndex={i} as="li">
                  <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-paper">
                      {t(`reporting.items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`reporting.items.${key}.body`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ 10. Client outcomes ============ */}
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
              cta={{ label: t("testimonials.cta"), href: "/demo?intent=intos" }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 11. Comparison vs traditional ============ */}
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

      {/* ============ 12. Results from real drives ============ */}
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
              <MonitorPlay className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ============ 13. ROI calculator ============ */}
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
              <ROICalculator intent="intos" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 14. FAQ ============ */}
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

      {/* ============ 15. Pricing philosophy ============ */}
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
              cta={{ label: t("pricing.cta"), href: "/demo?intent=intos" }}
              roiNote={{ label: t("pricing.roiNote"), href: "#roi" }}
            />
          </div>
        </div>
      </Section>

      {/* ============ 16. CTA ============ */}
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