import { ArrowRight, Building2, GraduationCap } from "lucide-react";
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
import { TimelineVertical } from "@/components/TimelineVertical";
import { TeamGrid } from "@/components/TeamGrid";
import { team, timeline } from "@/content/site";

const awardKeys = ["pioneer", "first3d", "largest", "firstIndustry", "scale", "reach"] as const;

const marketKeys = ["pk", "ae", "ca", "id"] as const;

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.about" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/about",
      title: t("title"),
      description: t("description"),
    });
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("about");
  const tmedia = await getTranslations("media");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  return (
    <>
      {/* ============ 1. Hero / mission ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("about") }]}
            />
          </Reveal>
          <SectionHeading kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} as="h1" />
        </div>
      </Section>

      {/* ============ 2. Origin story ============ */}
      <Section bg="ink-900" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Reveal variant="slide-start">
                <DefineWishKicker cursor>{t("originKicker")}</DefineWishKicker>
              </Reveal>
              <Reveal variant="fade-up" delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {t("originTitle")}
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <p className="mt-5 leading-relaxed text-muted sm:text-lg">{t("originBody")}</p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.15}>
                <div className="mt-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10 font-mono text-[10px] font-bold text-brand-400">
                      {"{"}
                    </span>
                    <p className="text-sm leading-relaxed text-paper">{t("whoBody")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-500/40 bg-accent-500/10 font-mono text-[10px] font-bold text-accent-400">
                      {"}"}
                    </span>
                    <p className="text-sm leading-relaxed text-faint">{t("gamBody")}</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal variant="slide-end">
              <div className="frame-blueprint rounded-2xl bg-ink-850 p-8">
                <p className="font-mono text-sm text-accent-300">define(problem) → build(solution) → deploy(result);</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-mono text-3xl font-bold text-gradient-brand">300k+</p>
                    <p className="mt-1 text-xs text-muted">{t("statAssessed")}</p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl font-bold text-gradient-brand">10+</p>
                    <p className="mt-1 text-xs text-muted">{t("statYears")}</p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl font-bold text-gradient-brand">5</p>
                    <p className="mt-1 text-xs text-muted">{t("statMarkets")}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 3. Timeline ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("timelineKicker")} title={t("timelineTitle")} subtitle={t("timelineSubtitle")} teal />
          <div className="mx-auto mt-14 max-w-4xl">
            <TimelineVertical items={timeline} locale={l} />
          </div>
        </div>
      </Section>

      {/* ============ 4. Leadership ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={t("teamKicker")} title={t("teamTitle")} subtitle={t("teamSubtitle")} />
          <div className="mt-14">
            <TeamGrid members={team} locale={l} />
          </div>
        </div>
      </Section>

      {/* ============ 5. Dual-market presence ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("entitiesKicker")}
            title={t("entitiesTitle")}
            subtitle={t("entitiesSubtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i} as="li">
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6">
                  <Building2 className="h-6 w-6 text-brand-400" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-paper">
                    {t(`markets.${key}.name`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(`markets.${key}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ 6. Academic tie-in ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="frame-blueprint grid items-center gap-8 rounded-2xl bg-ink-850 p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-10">
            <Reveal variant="slide-start">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                <GraduationCap className="h-7 w-7" aria-hidden="true" />
              </span>
            </Reveal>
            <Reveal variant="slide-end">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">{t("academicKicker")}</p>
              <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-paper">
                {t("academicTitle")}
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{t("academicBody")}</p>
              <Link
                href="/science"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                {t("academicCta")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 7. Media & awards ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker={tmedia("kicker")} title={tmedia("title")} subtitle={tmedia("subtitle")} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awardKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i} as="article">
                <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-6">
                  <h3 className="text-balance font-display text-base font-semibold tracking-tight text-paper">
                    {tmedia(`awards.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tmedia(`awards.items.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade-up" className="mt-12">
            <div className="frame-blueprint rounded-2xl border-dashed bg-ink-850 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">{tmedia("media.title")}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{tmedia("media.body")}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {tmedia.raw("media.items").map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-paper">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 8. Careers CTA ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{t("careersKicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.05}>
            <CTABand
              title={t("careersTitle")}
              subtitle={t("careersBody")}
              primary={{ label: t("careersCta"), href: "/careers" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("about") },
        ]),
        articleSchema({
          locale: l,
          href: "/about",
          headline: t("title"),
          description: t("subtitle"),
          articleSection: "About",
        })
      )}
    </>
  );
}