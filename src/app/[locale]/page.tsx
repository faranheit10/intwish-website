import { ArrowRight, Terminal } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { renderSchema, videoObjectSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { Reveal } from "@/components/Reveal";
import { HomepageHero } from "@/components/HomepageHero";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ServicesBand } from "@/components/ServicesBand";
import { CaseStudySpotlight } from "@/components/CaseStudySpotlight";
import { AnimatedStatCounter } from "@/components/AnimatedStatCounter";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { CTABand } from "@/components/CTABand";
import { clientNames } from "@/content/site";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return params.then(async ({ locale }) => {
    const t = await getTranslations({ locale, namespace: "metadata.pages.home" });
    return buildMetadata({
      locale: locale as Locale,
      href: "/",
      title: t("title"),
      description: t("description"),
    });
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const thero = await getTranslations("hero");
  const tp = await getTranslations("products");
  const tsb = await getTranslations("servicesBand");
  const tc = await getTranslations("caseStudies");
  const tstats = await getTranslations("stats");
  const tsci = await getTranslations("science");
  const tcomp = await getTranslations("compliance");
  const tcta = await getTranslations("cta");
  const tcommon = await getTranslations("common");

  const statItems = [
    { value: 300000, hasPlus: true, label: tstats("items.users.label") },
    { value: 7000, hasPlus: true, label: tstats("items.employees.label") },
    { value: 25000, hasPlus: false, label: tstats("items.candidates.label") },
    { value: 20, hasPlus: false, label: tstats("items.reportPages.label") },
  ];

  const complianceItems = (["pipeda", "pdp", "gdpr", "pdpl", "roadmap"] as const).map(
    (key) => ({ name: tcomp(`items.${key}.name`), note: tcomp(`items.${key}.note`) })
  );

  return (
    <>
      {/* 1. Hero — asymmetric split */}
      <HomepageHero
        kicker={thero("kicker")}
        title={thero("title")}
        titleAccent={thero("titleAccent")}
        subtitle={thero("subtitle")}
        proofLine={thero("proofLine")}
        primaryCta={thero("primaryCta")}
        secondaryCta={thero("secondaryCta")}
        codeComment={thero("codeComment")}
        placeholderLabel={thero("placeholderLabel")}
        osWindowTitle={thero("osWindowTitle")}
        aiReportWindowTitle={thero("aiReportWindowTitle")}
      />

      {/* 2. Trust strip — animated logo marquee + stat badges */}
      <Section bg="ink-900" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <ClientLogoMarquee enhanced />
          </Reveal>
        </div>
      </Section>

      {/* 3. Product suite — bento grid */}
      <Section bg="ink" id="products">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProductShowcase
            kicker={tp("bentoKicker")}
            title={tp("bentoTitle")}
            subtitle={tp("bentoSubtitle")}
            intos={{
              cta: tp("intos.ctaPrimary"),
              metric: tp("intos.metric"),
              placeholder: tp("intos.placeholder"),
            }}
            intreview={{
              cta: tp("intreview.ctaPrimary"),
              metric: tp("intreview.metric"),
              windowTitle: tp("intreview.windowTitle"),
              reportLabel: tp("intreview.reportLabel"),
            }}
          />
        </div>
      </Section>

      {/* 4. Services band — horizontal scroll (mobile) / grid (desktop) */}
      <Section bg="ink-900" id="services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ServicesBand
            locale={loc}
            kicker={tsb("kicker")}
            title={tsb("title")}
            subtitle={tsb("subtitle")}
          />
        </div>
      </Section>

      {/* 5. Case study spotlight — featured + two secondary */}
      <Section bg="ink" id="case-studies">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CaseStudySpotlight
            locale={loc}
            kicker={tc("kicker")}
            title={tc("title")}
            subtitle={tc("subtitle")}
            featuredLabel={tc("featuredLabel")}
            secondaryLabel={tc("secondaryLabel")}
            seeAll={tcommon("allCaseStudies")}
            readMore={tc("readMore")}
            featuredSlugs={["bank-alfalah-training"]}
            secondarySlugs={["ptcl-recruitment", "sbc-knowledge-gate"]}
          />
        </div>
      </Section>

      {/* 6. Stats band — animated counters on teal gradient */}
      <Section bg="ink" className="py-24 sm:py-28">
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(45,212,191,0.14),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 flex items-center justify-center">
              <Reveal variant="fade-up">
                <DefineWishKicker color="teal" className="text-center">
                  {tstats("kicker")}
                </DefineWishKicker>
              </Reveal>
            </div>
            <Reveal variant="fade-up" delay={0.1}>
              <AnimatedStatCounter items={statItems} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 7. Science & methodology teaser */}
      <Section bg="ink-900" id="science">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Reveal variant="slide-start">
                <DefineWishKicker>{tsci("kicker")}</DefineWishKicker>
              </Reveal>
              <Reveal variant="fade-up" delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {tsci("title")}
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <p className="mt-5 max-w-xl leading-relaxed text-muted sm:text-lg">
                  {tsci("body")}
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.15}>
                <Link
                  href="/science"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-brand-300"
                  data-track="cta_click_science"
                >
                  {tsci("cta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <Reveal variant="slide-end">
              <div className="rounded-2xl border border-dashed border-accent-500/50 bg-accent-500/5 p-8">
                <p className="flex items-center gap-2 font-mono text-sm text-accent-300">
                  <Terminal className="h-4 w-4" aria-hidden="true" />
                  {tsci("kicker")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-faint">
                  {tsci("placeholder")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 8. Compliance & trust band */}
      <Section bg="ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex items-center justify-center">
            <Reveal variant="fade-up">
              <DefineWishKicker>{tcomp("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {tcomp("title")}
              </h2>
              <p className="mt-3 text-muted">{tcomp("subtitle")}</p>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              <TrustBadgeRow items={complianceItems} />
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 9. Closing CTA band — with trust line + kicker */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <Reveal variant="fade-up">
              <DefineWishKicker color="teal">{tcta("kicker")}</DefineWishKicker>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.05}>
            <CTABand
              title={tcta("title")}
              subtitle={tcta("subtitle")}
              secondary={{ label: tcta("sandboxCta"), href: "/products/intos#sandbox" }}
              trustLine={`${tcta("trustLine")} · ${clientNames.slice(0, 4).join(" · ")}`}
            />
          </Reveal>
        </div>
      </Section>

      {/* Structured data */}
      {renderSchema(
        videoObjectSchema({
          name: thero("osWindowTitle"),
          description: thero("subtitle"),
          embedUrl: "https://www.youtube.com/embed/9mAMfE8ZZ5A",
          thumbnailUrl: "https://i.ytimg.com/vi/9mAMfE8ZZ5A/hqdefault.jpg",
        })
      )}
    </>
  );
}