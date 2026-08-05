import { CalendarCheck, Mail, MapPin, Phone, Presentation, Rocket } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { DemoFormWithIntent } from "@/components/DemoFormWithIntent";
import { company } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.demo" });
  return buildMetadata({
    locale: locale as Locale,
    href: "/demo",
    title: t("title"),
    description: t("description"),
  });
}

const stepIcons = [CalendarCheck, Presentation, Rocket] as const;
const stepKeys = ["confirm", "walkthrough", "pilot"] as const;

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("demo");
  const tc = await getTranslations("contact");
  const tnav = await getTranslations("nav");

  const offices = [
    {
      icon: MapPin,
      city: tc("headOffice"),
      address: tc("dubaiAddress"),
      phone: company.phones.dubai,
    },
    {
      icon: MapPin,
      city: tc("pakistanOffice"),
      address: tc("karachiAddress"),
      phone: company.phones.karachi,
    },
    {
      icon: MapPin,
      city: tc("canadaEntity"),
      address: tc("canadaEntityDesc"),
    },
    {
      icon: MapPin,
      city: tc("indonesiaEntity"),
      address: tc("indonesiaEntityDesc"),
    },
  ];

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: t("kicker") }]}
            />
          </Reveal>
          <SectionHeading
            kicker="define(workflow)"
            title={t("title")}
            subtitle={t("subtitle")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Form + next steps ============ */}
      <Section bg="ink-900" className="pt-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Reduced-friction demo form */}
            <Reveal variant="slide-start">
              <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight text-paper">
                {t("formTitle")}
              </h2>
              <DemoFormWithIntent />
            </Reveal>

            {/* What happens next */}
            <div className="space-y-4">
              <Reveal variant="slide-end" delay={0.05}>
                <div className="frame-blueprint rounded-2xl bg-ink-850 p-6">
                  <DefineWishKicker color="teal">deploy(demo)</DefineWishKicker>
                  <h3 className="mt-3 text-lg font-semibold text-paper">{t("nextTitle")}</h3>
                  <ol className="mt-5 space-y-5">
                    {stepKeys.map((key, i) => {
                      const Icon = stepIcons[i];
                      return (
                        <li key={key} className="flex items-start gap-4">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-paper">
                              {t(`steps.${key}.title`)}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {t(`steps.${key}.body`)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </Reveal>

              <Reveal variant="slide-end" delay={0.1}>
                <div className="card-surface p-6">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-paper">
                    <Mail className="h-5 w-5 text-brand-500" aria-hidden="true" />
                    {tc("emailUs")}
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-3 inline-block text-sm text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {company.email}
                  </a>
                </div>
              </Reveal>

              {offices.map((office, i) => (
                <Reveal key={office.city} variant="slide-end" staggerIndex={i + 2}>
                  <div className="card-surface p-6">
                    <h3 className="flex items-center gap-3 text-base font-semibold text-paper">
                      <office.icon className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                      {office.city}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{office.address}</p>
                    {office.phone ? (
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                        <Phone className="h-4 w-4 text-brand-500" aria-hidden="true" />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="hover:text-brand-400"
                          dir="ltr"
                        >
                          {office.phone}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============ Trust strip ============ */}
      <Section bg="ink-850">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ClientLogoMarquee enhanced />
        </div>
      </Section>

      {renderSchema(
        breadcrumbSchema(l, [
          { name: tnav("home"), href: "/" },
          { name: t("kicker") },
        ])
      )}
    </>
  );
}