import { FileText, Mail, ShieldCheck } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "metadata.pages.terms" });
  return buildMetadata({
    locale: locale as Locale,
    href: "/terms",
    title: t("title"),
    description: t("description"),
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("terms");
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
              items={[{ name: tnav("home"), href: "/" }, { name: tf("terms") }]}
            />
          </Reveal>
          <SectionHeading
            kicker={trust("kicker")}
            title={tf("terms")}
            subtitle={t("intro")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Services & engagements ============ */}
      <Section bg="ink-900" className="pt-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="slide-start">
            <div className="frame-blueprint grid items-start gap-6 rounded-2xl bg-ink-850 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                <FileText className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <DefineWishKicker>{`// scope(engagement)`}</DefineWishKicker>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {t("servicesTitle")}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {t("servicesBody")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ Data handling ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="slide-end">
            <div className="frame-blueprint grid items-start gap-6 rounded-2xl bg-ink-850 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-500/30 bg-accent-500/10 text-accent-300">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <DefineWishKicker color="teal">{trust("data.kicker")}</DefineWishKicker>
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

      {/* ============ Retention & certification roadmap ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal variant="slide-start">
              <div className="card-surface flex h-full flex-col p-8 sm:p-10">
                <DefineWishKicker color="teal">{trust("retention.kicker")}</DefineWishKicker>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                  {trust("retention.title")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {trust("retention.body")}
                </p>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <div className="card-surface flex h-full flex-col p-8 sm:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                  {trust("roadmap.kicker")}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                  {trust("roadmap.title")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {trust("roadmap.body")}
                </p>
                <p className="mt-4 font-mono text-xs text-faint">{trust("roadmap.status")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ Contact + disclaimer ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="frame-blueprint rounded-2xl bg-ink-850 p-8 sm:p-12">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {trust("contact.title")}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {trust("contact.body")}
              </p>
              <a
                href={`mailto:${company.email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow"
                data-track="cta_click_terms_email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {company.email}
              </a>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-faint">
                {t("disclaimer")}
              </p>
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
          { name: tf("terms") },
        ])
      )}
    </>
  );
}