import { Rocket, Globe2, Users, Wrench, Mail } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.careers" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/careers",
      title: t("title"),
      description: t("description"),
    });
  });
}

const whyKeys = ["build", "own", "global", "growth"] as const;
const steps = ["apply", "review", "talk", "welcome"] as const;

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("careers");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const email = "careers@intwish.com";

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
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("careers") }]}
            />
          </Reveal>
          <SectionHeading kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} as="h1" />
        </div>
      </Section>

      {/* ============ 2. Why Intwish ============ */}
      <Section bg="ink-900" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("whyKicker")} title={t("whyTitle")} subtitle={t("whySubtitle")} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i} as="article">
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6 transition-colors hover:border-brand-500/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                    {key === "build" ? (
                      <Rocket className="h-5 w-5" aria-hidden="true" />
                    ) : key === "global" ? (
                      <Globe2 className="h-5 w-5" aria-hidden="true" />
                    ) : key === "own" ? (
                      <Wrench className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Users className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-paper">
                    {t(`why.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(`why.${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 3. Open roles ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("rolesKicker")}
            title={t("rolesTitle")}
            subtitle={t("rolesSubtitle")}
            teal
          />
          <Reveal variant="fade-up" className="mt-14">
            <div className="frame-blueprint rounded-2xl border-dashed bg-ink-850 p-8 text-center sm:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                {t("alwaysOpenKicker")}
              </p>
              <h3 className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {t("alwaysOpenTitle")}
              </h3>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">{t("alwaysOpenBody")}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href={`mailto:${email}`} size="lg" data-track="cta_click_careers_apply">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t("applyCta")}
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  {t("learnMore")}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 4. Application flow ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("flowKicker")} title={t("flowTitle")} subtitle={t("flowSubtitle")} />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((key, i) => (
              <Reveal key={key} staggerIndex={i} as="li">
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6">
                  <span className="font-mono text-sm font-bold text-brand-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-paper">
                    {t(`flow.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(`flow.${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ============ 5. Culture photos placeholder ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("cultureKicker")} title={t("cultureTitle")} subtitle={t("cultureBody")} />
          <Reveal variant="fade-up" className="mt-14">
            <div className="grid gap-4 md:grid-cols-3">
              {([0, 1, 2] as const).map((n) => (
                <div
                  key={n}
                  className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-accent-500/50 bg-accent-500/5"
                >
                  <p className="px-6 text-center font-mono text-xs text-accent-300">
                    {t("photoPlaceholder")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

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
              title={t("ctaTitle")}
              subtitle={t("ctaSubtitle")}
              primary={{ label: t("applyCta"), href: `mailto:${email}` }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("careers") },
        ])
      )}
    </>
  );
}