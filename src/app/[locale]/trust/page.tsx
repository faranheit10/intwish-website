import { ArrowRight, FileDown, Lock, Server, ShieldCheck, Clock } from "lucide-react";
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
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { Button } from "@/components/Button";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.trust" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/trust",
      title: t("title"),
      description: t("description"),
    });
  });
}

const complianceKeys = ["pipeda", "pdp", "gdpr", "pdpl"] as const;
const hostingKeys = ["encryption", "access", "uptime", "backup"] as const;

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("trust");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

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
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("trust") }]}
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

      {/* ============ 2. Compliance overview ============ */}
      <Section bg="ink-900" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("compliance.kicker")}
            title={t("compliance.title")}
            subtitle={t("compliance.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {complianceKeys.map((key, i) => (
              <Reveal key={key} variant={i % 2 === 0 ? "slide-start" : "slide-end"}>
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-lg font-bold tracking-tight text-paper">
                      {t(`compliance.items.${key}.name`)}
                    </h3>
                    <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-300">
                      {t(`compliance.items.${key}.region`)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`compliance.items.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal variant="slide-start" staggerIndex={complianceKeys.length}>
              <div className="frame-blueprint flex h-full flex-col justify-center rounded-2xl border-dashed bg-ink-850 p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                  {t("roadmap.kicker")}
                </p>
                <h3 className="mt-3 font-mono text-lg font-bold tracking-tight text-gradient-teal">
                  {t("roadmap.status")}
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 3. Data handling ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <div className="lg:sticky lg:top-28">
                <DefineWishKicker color="teal">{t("data.kicker")}</DefineWishKicker>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {t("data.title")}
                </h2>
                <p className="mt-4 leading-relaxed text-muted sm:text-lg">{t("data.body")}</p>
                <Link
                  href="/privacy"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("data.privacyLink")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <div className="space-y-6">
              {hostingKeys.map((key, i) => (
                <Reveal key={key} variant="slide-end" delay={0.05 * i}>
                  <div className="frame-blueprint flex items-start gap-4 rounded-2xl bg-ink-850 p-6">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 text-accent-400">
                      {key === "encryption" ? (
                        <Lock className="h-5 w-5" aria-hidden="true" />
                      ) : key === "uptime" ? (
                        <Server className="h-5 w-5" aria-hidden="true" />
                      ) : key === "backup" ? (
                        <Clock className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-paper">
                        {t(`hosting.items.${key}.title`)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {t(`hosting.items.${key}.body`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ 4. Retention + DPA readiness ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal variant="slide-start">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">{t("retention.kicker")}</p>
                <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-paper">
                  {t("retention.title")}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{t("retention.body")}</p>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">{t("dpa.kicker")}</p>
                <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-paper">
                  {t("dpa.title")}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{t("dpa.body")}</p>
                <Button
                  href={`mailto:${t("dpa.email")}`}
                  variant="secondary"
                  size="md"
                  className="mt-6"
                  data-track="cta_click_dpa_request"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  {t("dpa.cta")}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ 5. Certification roadmap ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("roadmap.kicker")}
            title={t("roadmap.title")}
            subtitle={t("roadmap.body")}
            teal
          />
          <Reveal variant="fade-up" className="mt-14">
            <div className="frame-blueprint rounded-2xl bg-ink-850 p-8 text-center">
              <p className="font-mono text-lg font-bold tracking-tight text-gradient-teal">
                {t("roadmap.status")}
              </p>
              <TrustBadgeRow
                items={[
                  { name: "PIPEDA", note: "Canada" },
                  { name: "UU PDP 27/2022", note: "Indonesia" },
                  { name: "GDPR-ready", note: "EU / global" },
                  { name: "PDPL", note: "UAE / KSA" },
                ]}
                className="mt-6 justify-center"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ 6. Security contact ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.05}>
            <CTABand
              title={t("contact.title")}
              subtitle={t("contact.body")}
              primary={{ label: t("contact.cta"), href: "/contact" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("trust") },
        ])
      )}
    </>
  );
}