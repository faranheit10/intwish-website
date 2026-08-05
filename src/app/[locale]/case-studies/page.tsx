import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FilterableGrid } from "@/components/FilterableGrid";
import { caseStudies } from "@/content/caseStudies";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.caseStudies" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/case-studies",
      title: t("title"),
      description: t("description"),
    });
  });
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("caseStudies");
  const tnav = await getTranslations("nav");
  const tcta = await getTranslations("cta");

  const previews = caseStudies.map((s) => ({
    slug: s.slug,
    client: s.client,
    image: s.image,
    industry: s.industry,
    title: s.title,
    summary: s.summary,
  }));

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
                { name: tnav("caseStudies") },
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

      {/* ============ Filterable grid — 16 studies by industry ============ */}
      <Section bg="ink-900" className="pt-4 sm:pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FilterableGrid items={previews} locale={l} />
        </div>
      </Section>

      {/* ============ CTA — see how we can do this for you ============ */}
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
          { name: tnav("caseStudies") },
        ])
      )}
    </>
  );
}
