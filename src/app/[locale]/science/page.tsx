import { ArrowRight, Beaker, Brain, Microscope, ShieldCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema, articleSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { SectionHeading } from "@/components/SectionHeading";
import { MetricsBox } from "@/components/MetricsBox";
import { Button } from "@/components/Button";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.science" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/science",
      title: t("title"),
      description: t("description"),
    });
  });
}

const methodologyKeys = ["p1", "p2", "p3", "p4"] as const;
const biasKeys = ["p1", "p2", "p3"] as const;
const dataKeys = ["p1", "p2", "p3"] as const;
const academicKeys = ["p1", "p2", "p3"] as const;
const statKeys = ["validity", "anxiety", "bias", "scale"] as const;

export default async function SciencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("science");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const stats = statKeys.map((key) => ({
    value: t(`stats.${key}.value`),
    label: t(`stats.${key}.label`),
  }));

  return (
    <>
      {/* ============ 1. Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("science") }]}
            />
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <div className="flex items-center gap-3">
                <Beaker className="h-5 w-5 text-accent-400" aria-hidden="true" />
                <DefineWishKicker color="teal">define(problem) → build(solution) → deploy(result)</DefineWishKicker>
              </div>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {t("heroSubtitle")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/products/intos" data-track="cta_click_science_product">
                  {t("exploreProduct")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("readResearch")}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                  {t("statsKicker")}
                </p>
                <div className="mt-6 space-y-4">
                  {statKeys.map((key) => (
                    <div key={key} className="flex items-center justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                      <span className="font-mono text-2xl font-bold text-gradient-teal">{t(`stats.${key}.value`)}</span>
                      <span className="text-end text-sm text-muted">{t(`stats.${key}.label`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 2. Methodology ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("methodologyKicker")}
            title={t("methodologyTitle")}
            subtitle={t("methodologySubtitle")}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {methodologyKeys.map((key, i) => (
              <Reveal key={key} variant={i % 2 === 0 ? "slide-start" : "slide-end"}>
                <div className="frame-blueprint flex h-full items-start gap-4 rounded-2xl bg-ink-850 p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400">
                    {i % 2 === 0 ? <Brain className="h-5 w-5" aria-hidden="true" /> : <Microscope className="h-5 w-5" aria-hidden="true" />}
                  </span>
                  <p className="text-sm leading-relaxed text-paper sm:text-base">{t(`methodology.${key}`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 3. AI & bias mitigation ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <div className="lg:sticky lg:top-28">
                <DefineWishKicker color="teal">{t("biasKicker")}</DefineWishKicker>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {t("biasTitle")}
                </h2>
                <p className="mt-4 leading-relaxed text-muted sm:text-lg">{t("biasIntro")}</p>
              </div>
            </Reveal>
            <div className="space-y-6">
              {biasKeys.map((key, i) => (
                <Reveal key={key} variant="slide-end" delay={0.05 * i}>
                  <div className="frame-blueprint rounded-2xl bg-ink-850 p-6">
                    <p className="text-sm leading-relaxed text-paper sm:text-base">{t(`bias.${key}`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 4. Data handling & ethics ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("dataKicker")}
            title={t("dataTitle")}
            subtitle={t("dataSubtitle")}
            teal
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {dataKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i}>
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6">
                  <ShieldCheck className="h-6 w-6 text-accent-400" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">{t(`data.${key}`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 5. Academic & research credibility ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("academicKicker")}
            title={t("academicTitle")}
            subtitle={t("academicSubtitle")}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {academicKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i}>
                <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                  <p className="text-sm leading-relaxed text-muted">{t(`academic.${key}`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Visible placeholder: academic credential details pending from Faran */}
          <Reveal variant="fade-up" className="mt-8">
            <div className="rounded-2xl border border-dashed border-accent-500/50 bg-accent-500/5 p-6">
              <p className="flex items-center gap-2 font-mono text-xs text-accent-300">
                <Microscope className="h-4 w-4" aria-hidden="true" />
                {t("placeholder")}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 6. Supporting statistics band ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("statsKicker")}
            title={t("statsTitle")}
            subtitle={t("statsSubtitle")}
            teal
            center
          />
          <div className="mt-14">
            <MetricsBox items={stats} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" />
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
              title={tcta("title")}
              subtitle={tcta("subtitle")}
              secondary={{ label: tcta("sandboxCta"), href: "/products/intos#sandbox" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("science") },
        ]),
        articleSchema({
          locale: l,
          href: "/science",
          headline: t("heroTitle"),
          description: t("heroSubtitle"),
          articleSection: "Methodology",
        })
      )}
    </>
  );
}