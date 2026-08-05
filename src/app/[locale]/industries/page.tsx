import { ArrowRight, Landmark, Radio, Zap, BookOpen } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/content/industries";
import { localize } from "@/content/types";

const icons = {
  landmark: Landmark,
  radio: Radio,
  zap: Zap,
  book: BookOpen,
} as const;

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.industries" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/industries",
      title: t("title"),
      description: t("description"),
    });
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("industries");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("industries") }]}
            />
          </Reveal>
          <SectionHeading
            kicker={t("kicker")}
            title={t("title")}
            subtitle={t("subtitle")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Sector cards ============ */}
      <Section bg="ink-900" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = icons[industry.icon as keyof typeof icons] ?? Landmark;
              const name = localize(l, industry.name);
              const headline = localize(l, industry.headline);
              const count = industry.caseStudySlugs.length;
              return (
                <Reveal key={industry.slug} staggerIndex={i} as="article">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="frame-blueprint group flex h-full flex-col justify-between rounded-2xl bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow"
                    data-track={`industry_index_open_${industry.slug}`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs text-faint">
                          {count} {count === 1 ? t("caseSingular") : t("casePlural")}
                        </span>
                      </div>
                      <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-paper">
                        {name}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{headline}</p>
                    </div>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
                      {t("explore")}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
            {/* CTA tile to complete the grid */}
            <Reveal staggerIndex={industries.length}>
              <Link
                href="/demo?intent=project"
                className="frame-blueprint flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-dashed bg-ink-850 p-7 text-center transition-colors hover:border-accent-500/40"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
                  {t("otherSectorKicker")}
                </p>
                <p className="text-base font-semibold text-paper">{t("otherSectorTitle")}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300">
                  {t("otherSectorCta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ CTA ============ */}
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
          { name: tnav("industries") },
        ])
      )}
    </>
  );
}