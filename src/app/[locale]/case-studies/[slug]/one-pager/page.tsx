import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { localize } from "@/content/types";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { getCaseStudyMeta } from "@/content/caseStudiesMeta";
import { company } from "@/content/site";
import { PrintPdfButton } from "@/components/PrintPdfButton";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "metadata.pages.caseStudyDetail" });
  return {
    ...buildMetadata({
      locale: l,
      href: `/case-studies/${slug}`,
      title: t("title", { title: localize(l, study.title) }),
      description: t("description", { summary: localize(l, study.summary) }),
    }),
    // One-pagers are print duplicates of the case-study page — keep them out of the index.
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyOnePagerPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const study = getCaseStudy(slug);
  if (!study) notFound();

  const t = await getTranslations("caseStudies");

  // Enrich with structured metadata; strip unverified "N/A" slots so the
  // printed one-pager only shows confirmed outcome numbers.
  const meta = getCaseStudyMeta(slug);
  const printMetrics = meta
    ? meta.metrics
        .map((m) => ({ value: localize(l, m.value), label: localize(l, m.label) }))
        .filter((m) => m.value !== "N/A")
    : [];

  const title = localize(l, study.title);
  const industry = localize(l, study.industry);
  const summary = localize(l, study.summary);
  const paragraphs = localize(l, study.body);

  return (
    <div className="bg-white text-neutral-900">
      {/* Screen-only toolbar (hidden on print) */}
      <div className="print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t("back")}
          </Link>
          <PrintPdfButton slug={study.slug} client={study.client} />
        </div>
        <p className="border-t border-neutral-200 px-5 py-3 text-center text-xs text-neutral-500 sm:px-8">
          {t("onePager.toolbarNote")}
        </p>
      </div>

      {/* Print document */}
      <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Header */}
        <header className="flex items-start justify-between gap-6 border-b-2 border-neutral-900 pb-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              {t("onePager.kicker")}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900">
              {title}
            </h1>
            <p className="mt-3 text-lg font-medium text-neutral-700">
              {study.client}
              <span className="mx-2 text-neutral-400">·</span>
              <span className="text-neutral-500">{industry}</span>
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.svg"
            alt="Intwish"
            className="h-8 w-auto sm:h-9"
            width={250}
            height={60}
          />
        </header>

        {/* Summary — the challenge */}
        <section className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
            {t("onePager.summaryLabel")}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-neutral-800">{summary}</p>
        </section>

        {/* Impact metrics */}
        {printMetrics.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              {t("impactLabel")}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {printMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <p className="text-3xl font-bold tracking-tight text-brand-600">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Body (condensed for one page) */}
        <section className="mt-10 space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-800">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact strip */}
        <footer className="mt-12 border-t border-neutral-200 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">{t("onePager.contactNote")}</p>
            <div className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">{company.name}</span> ·{" "}
              {company.email} · {company.phones.dubai}
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-400">{t("onePager.generatedBy")}</p>
        </footer>
      </article>
    </div>
  );
}