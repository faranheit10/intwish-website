import { Building2, Mail, MapPin, Phone } from "lucide-react";
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
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { SegmentedContactFormWithIntent } from "@/components/SegmentedContactFormWithIntent";
import { company } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.contact" });
  return buildMetadata({
    locale: locale as Locale,
    href: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("contact");
  const tc = await getTranslations("compliance");
  const tnav = await getTranslations("nav");
  const tcta = await getTranslations("cta");

  const offices = [
    {
      icon: MapPin,
      city: t("headOffice"),
      address: t("dubaiAddress"),
      phone: company.phones.dubai,
    },
    {
      icon: MapPin,
      city: t("pakistanOffice"),
      address: t("karachiAddress"),
      phone: company.phones.karachi,
    },
    {
      icon: Building2,
      city: t("canadaEntity"),
      address: t("canadaEntityDesc"),
    },
    {
      icon: Building2,
      city: t("indonesiaEntity"),
      address: t("indonesiaEntityDesc"),
    },
  ];

  const badges = (["pipeda", "pdp", "gdpr", "pdpl", "roadmap"] as const).map(
    (key) => ({
      name: tc(`items.${key}.name`),
      note: tc(`items.${key}.note`),
    })
  );

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("contact") }]}
            />
          </Reveal>
          <SectionHeading
            kicker="define(problem)"
            title={t("title")}
            subtitle={t("subtitle")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Form + details ============ */}
      <Section bg="ink-900" className="pt-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Segmented form */}
            <Reveal variant="slide-start">
              <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight text-paper">
                {t("formTitle")}
              </h2>
              <SegmentedContactFormWithIntent locale={l} />
            </Reveal>

            {/* Contact details + trust signals */}
            <Reveal variant="slide-end" delay={0.05}>
              <div className="space-y-4">
                <div className="card-surface p-6">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-paper">
                    <Mail className="h-5 w-5 text-brand-500" aria-hidden="true" />
                    {t("emailUs")}
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-3 inline-block text-sm text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {company.email}
                  </a>
                </div>

                {offices.map((office, i) => (
                  <Reveal key={office.city} staggerIndex={i + 1}>
                    <div className="card-surface p-6">
                      <h3 className="flex items-center gap-3 text-base font-semibold text-paper">
                        <office.icon className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                        {office.city}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{office.address}</p>
                      {office.phone ? (
                        <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                          <Phone className="h-4 w-4 text-brand-500" aria-hidden="true" />
                          <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-brand-400" dir="ltr">
                            {office.phone}
                          </a>
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}

                {/* Compliance badges — trusted adjacent to the form */}
                <div className="pt-2">
                  <DefineWishKicker color="teal" className="mb-4 justify-center">
                    {`// ${tc("kicker")}`}
                  </DefineWishKicker>
                  <TrustBadgeRow items={badges} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============ Client logo strip ============ */}
      <Section bg="ink-850">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ClientLogoMarquee enhanced />
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
          { name: tnav("contact") },
        ])
      )}
    </>
  );
}