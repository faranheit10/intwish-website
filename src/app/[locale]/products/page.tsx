import Image from "next/image";
import { ArrowRight, CheckCircle2, Layers, Boxes } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Button } from "@/components/Button";
import { WindowFrame } from "@/components/WindowFrame";
import { IntOSDesktopMock } from "@/components/IntOSDesktopMock";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.productsIndex" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/products",
      title: t("title"),
      description: t("description"),
    });
  });
}

const stackKeys = ["model", "rubric", "support", "roadmap", "cost"] as const;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("productsIndex");
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
              items={[
                { name: tnav("home"), href: "/" },
                { name: tnav("products") },
              ]}
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

      {/* ============ Two showcase cards (not a grid) ============ */}
      <Section bg="ink" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl space-y-16 px-5 sm:px-8 lg:space-y-24">
          {/* intOS */}
          <article className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal variant="slide-start">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/products/intos-logo.svg"
                  alt="intOS"
                  className="h-9 w-auto"
                  width={120}
                  height={36}
                />
                <span className="font-display text-xl font-semibold text-paper">intOS</span>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {t("intos.tagline")}
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {t("intos.differentiator")}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted sm:text-lg">
                {t("intos.description")}
              </p>
              <ul className="mt-7 space-y-2.5">
                {(["intos.a", "intos.b", "intos.c"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-paper sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/products/intos" data-track="cta_click_product_intos_index">
                  {t("intos.cta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
                <Link
                  href="/products/intos#sandbox"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("intos.sandbox")}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-end">
              <WindowFrame title="intOS — virtual desktop" bodyClassName="bg-ink-900">
                <IntOSDesktopMock className="shadow-window" />
              </WindowFrame>
            </Reveal>
          </article>

          {/* IntReview */}
          <article className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal variant="slide-end" className="lg:order-2">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/products/intreview-logo.webp"
                  alt="IntReview"
                  className="h-9 w-auto"
                  width={140}
                  height={36}
                />
                <span className="font-display text-xl font-semibold text-paper">IntReview</span>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {t("intreview.tagline")}
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {t("intreview.differentiator")}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted sm:text-lg">
                {t("intreview.description")}
              </p>
              <ul className="mt-7 space-y-2.5">
                {(["intreview.a", "intreview.b", "intreview.c"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-paper sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/products/intreview" data-track="cta_click_product_intreview_index">
                  {t("intreview.cta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
                <Link
                  href="/demo?intent=intreview"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t("intreview.sandbox")}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-start" className="lg:order-1">
              <WindowFrame title={t("intreview.windowTitle")} bodyClassName="bg-ink-900">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/img/products/ai-report.webp"
                    alt={t("intreview.reportLabel")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </WindowFrame>
            </Reveal>
          </article>
        </div>
      </Section>

      {/* ============ Why Intwish's stack? ============ */}
      <Section bg="ink-900" id="stack">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("stack.kicker")}
            title={t("stack.title")}
            subtitle={t("stack.subtitle")}
            teal
            center
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stackKeys.map((key, i) => (
              <Reveal key={key} staggerIndex={i} as="li">
                <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6 transition-colors hover:border-accent-500/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 text-accent-400">
                    <Boxes className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-paper">
                    {t(`stack.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`stack.items.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal staggerIndex={stackKeys.length}>
              <div className="frame-blueprint flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-dashed bg-ink-850 p-6 text-center">
                <Layers className="h-6 w-6 text-brand-400" aria-hidden="true" />
                <p className="text-base font-semibold text-paper">{t("stack.cta")}</p>
                <Button href="/demo" variant="secondary" size="md" data-track="cta_click_stack_demo">
                  {tnav("bookDemo")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ CTA ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="mb-8 flex justify-center">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </div>
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
          { name: tnav("products") },
        ])
      )}
    </>
  );
}