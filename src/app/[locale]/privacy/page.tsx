import { Database, FileKey2, Mail, ShieldCheck, Trash2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { company } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.privacy" });
  return buildMetadata({
    locale: locale as Locale,
    href: "/privacy",
    title: t("title"),
    description: t("description"),
  });
}

const complianceKeys = ["pipeda", "pdp", "gdpr", "pdpl"] as const;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("privacy");
  const trust = await getTranslations("trust");
  const tf = await getTranslations("footer");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tf("privacy") }]}
            />
          </Reveal>
          <SectionHeading
            kicker={trust("kicker")}
            title={tf("privacy")}
            subtitle={t("intro")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Data we process ============ */}
      <Section bg="ink-900" className="pt-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="slide-start">
            <div className="frame-blueprint grid items-start gap-6 rounded-2xl bg-ink-850 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                <Database className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <DefineWishKicker>{trust("data.kicker")}</DefineWishKicker>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {trust("data.title")}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {trust("data.body")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ Compliance by region ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={trust("compliance.kicker")}
            title={trust("compliance.title")}
            subtitle={trust("compliance.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {complianceKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i}>
                <div className="card-surface flex h-full flex-col p-6 transition-colors hover:border-brand-500/40 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs font-semibold text-brand-400">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {trust(`compliance.items.${key}.name`)}
                    </span>
                    <span className="text-xs text-faint">
                      {trust(`compliance.items.${key}.region`)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {trust(`compliance.items.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ Retention ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="slide-end">
            <div className="frame-blueprint grid items-start gap-6 rounded-2xl bg-ink-850 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-500/30 bg-accent-500/10 text-accent-300">
                <Trash2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <DefineWishKicker color="teal">{trust("retention.kicker")}</DefineWishKicker>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {trust("retention.title")}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {trust("retention.body")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ Certifications + contact ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="frame-blueprint rounded-2xl bg-ink-850 p-8 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand-400">
                  <FileKey2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {trust("roadmap.kicker")}
                </span>
                <span className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-muted">
                  {trust("roadmap.status")}
                </span>
              </div>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {trust("roadmap.title")}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {trust("roadmap.body")}
              </p>
              <div className="mt-8 rounded-2xl border border-line bg-ink-900 p-6">
                <h3 className="flex items-center gap-3 text-lg font-semibold text-paper">
                  <Mail className="h-5 w-5 text-brand-500" aria-hidden="true" />
                  {trust("contact.title")}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {trust("contact.body")}
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow"
                  data-track="cta_click_privacy_email"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {company.email}
                </a>
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-faint">
                  {t("disclaimer")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ CTA ============ */}
      <Section bg="ink-900">
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
          { name: tf("privacy") },
        ])
      )}
    </>
  );
}