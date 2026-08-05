import { ArrowRight, Boxes, CheckCircle2 } from "lucide-react";
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
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceIcon } from "@/components/Icon";
import { services } from "@/content/services";
import { products } from "@/content/products";
import { localize } from "@/content/types";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.services" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/services",
      title: t("title"),
      description: t("description"),
    });
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("services");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");
  const tcommon = await getTranslations("common");

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
                { name: tnav("services") },
              ]}
            />
          </Reveal>
          <SectionHeading
            kicker={t("heroKicker")}
            title={t("title")}
            subtitle={t("subtitle")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Six capability cards — 3×2 grid ============ */}
      <Section bg="ink" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const title = localize(l, service.title);
              const tagline = localize(l, service.tagline);
              return (
                <Reveal key={service.slug} staggerIndex={i} as="article">
                  <Link
                    href={`/services/${service.slug}`}
                    className="frame-blueprint group flex h-full flex-col justify-between rounded-2xl bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow"
                    data-track="service_index_open"
                  >
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-paper">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{tagline}</p>
                    </div>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
                      {t("seeDetails")}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ Our products are the proof ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker={t("proofKicker")}
            title={t("proofTitle")}
            subtitle={t("proofBody")}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {products.map((product, i) => {
              const tagline = localize(l, product.tagline);
              const description = localize(l, product.description);
              const highlight = localize(l, product.highlights)[0];
              return (
                <Reveal key={product.slug} variant={i === 0 ? "slide-start" : "slide-end"} as="article">
                  <div className="frame-blueprint h-full rounded-2xl bg-ink-850 p-8">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400">
                        <Boxes className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{tagline}</p>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 leading-relaxed text-muted">{description}</p>
                    <p className="mt-4 flex items-start gap-2.5 text-sm text-paper">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      <span className="font-mono text-xs">{highlight}</span>
                    </p>
                    <Button
                      href={`/products/${product.slug}`}
                      variant="secondary"
                      size="md"
                      className="mt-7"
                      data-track={`cta_click_proof_${product.slug}`}
                    >
                      {tcommon("learnMore")}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============ CTA — discuss a project ============ */}
      <Section bg="ink">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="mb-8 flex justify-center">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </div>
            <CTABand
              title={tcta("title")}
              subtitle={tcta("subtitle")}
              primary={{ label: t("discussProjectCta"), href: "/demo?intent=project" }}
              trustLine={tcta("trustLine")}
            />
          </Reveal>
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: tnav("services") },
        ])
      )}
    </>
  );
}