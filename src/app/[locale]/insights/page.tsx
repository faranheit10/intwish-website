import { ArrowRight, FileText, Lock } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, renderSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DefineWishKicker } from "@/components/DefineWishKicker";
import { InsightsHub } from "@/components/InsightsHub";
import { CTABand } from "@/components/CTABand";
import { Breadcrumb } from "@/components/Breadcrumb";
import { insightPosts, insightText } from "@/content/insights";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.insights" });
  return buildMetadata({
    locale: locale as Locale,
    href: "/insights",
    title: t("title"),
    description: t("description"),
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const t = await getTranslations("insights");
  const tcta = await getTranslations("cta");
  const tnav = await getTranslations("nav");

  const featured = insightPosts.find((post) => post.gated) ?? insightPosts[0];

  // Pre-localize before handing to the client hub (keeps the JS bundle lean).
  const previews = insightPosts.map((post) => ({
    slug: post.slug,
    type: post.type,
    date: post.date,
    readTimeMin: post.readTimeMin,
    gated: post.gated,
    title: insightText(l, post.title),
    excerpt: insightText(l, post.excerpt),
  }));

  return (
    <>
      {/* ============ Hero ============ */}
      <Section bg="ink" className="overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <Breadcrumb
              items={[{ name: tnav("home"), href: "/" }, { name: tnav("insights") }]}
            />
          </Reveal>
          <SectionHeading
            kicker={`define(research)`}
            title={t("title")}
            subtitle={t("subtitle")}
            as="h1"
          />
        </div>
      </Section>

      {/* ============ Featured flagship report ============ */}
      <Section bg="glow" className="pt-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="scale">
            <article className="frame-blueprint relative overflow-hidden rounded-3xl bg-ink-850 p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,rgba(241,95,53,0.14),transparent_60%)]"
              />
              <div className="relative max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-300">
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("featured.kicker")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-faint">
                    <Lock className="h-3 w-3" aria-hidden="true" />
                    {t("gatedLabel")}
                  </span>
                  <span className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-faint">
                    {t("readTime", { count: featured.readTimeMin })}
                  </span>
                </div>
                <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {insightText(l, featured.title)}
                </h2>
                <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                  {insightText(l, featured.excerpt)}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {(featured.highlights ?? []).slice(0, 4).map((highlight) => (
                    <li key={insightText(l, highlight)} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                      />
                      <span className="text-sm leading-relaxed text-paper/90">
                        {insightText(l, highlight)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-glow"
                  data-track="cta_click_featured_report"
                >
                  {t("featured.cta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* ============ Hub grid ============ */}
      <Section bg="ink-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="// compile(insights)"
            title={t("hub.title")}
            subtitle={t("hub.subtitle")}
          />
          <div className="mt-14">
            <InsightsHub posts={previews} locale={l} />
          </div>
        </div>
      </Section>

      {/* ============ CTA — bench report → demo ============ */}
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
          { name: tnav("insights") },
        ])
      )}
    </>
  );
}