import Image from "next/image";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/content/types";
import { caseStudies, type CaseStudy } from "@/content/caseStudies";

interface CaseStudySpotlightProps {
  locale: Locale;
  kicker: string;
  title: string;
  subtitle: string;
  featuredLabel: string;
  secondaryLabel: string;
  seeAll: string;
  readMore: string;
  featuredSlugs: string[];
  secondarySlugs: string[];
}

function SpotlightCard({
  study,
  locale,
  readMore,
  hero = false,
}: {
  study: CaseStudy;
  locale: Locale;
  readMore: string;
  hero?: boolean;
}) {
  const title = localize(locale, study.title);
  const summary = localize(locale, study.summary);
  const industry = localize(locale, study.industry);
  const metric = study.metrics?.[0];

  if (hero) {
    return (
      <Link
        href={`/case-studies/${study.slug}`}
        className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-line-strong transition-colors hover:border-brand-500/40"
        data-track="case_study_spotlight"
      >
        <div className="absolute inset-0 bg-ink-900">
          <Image
            src={study.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
          />
        </div>
        <div className="relative bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-7 sm:p-9">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-300">
            <Quote className="h-3 w-3" aria-hidden="true" />
            {industry}
          </span>
          <h3 className="mt-4 max-w-2xl text-balance font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            {title}
          </h3>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-lg text-sm leading-relaxed text-muted">{summary}</p>
            <div className="shrink-0">
              <p className="font-mono text-4xl font-bold text-gradient-teal sm:text-5xl">
                {"{ "}{metric?.value ? localize(locale, metric.value) : ""}{" }"}
              </p>
              {metric?.label ? (
                <p className="mt-1 max-w-[12rem] text-xs text-paper/70">
                  {localize(locale, metric.label)}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 group-hover:text-brand-300">
            {readMore}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow"
      data-track="case_study_secondary"
    >
      <span className="font-mono text-xs text-faint">{industry}</span>
      <h3 className="mt-2 text-balance font-display text-xl font-semibold leading-snug text-paper">
        {title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {summary}
      </p>
      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
        {readMore}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
      </p>
    </Link>
  );
}

export function CaseStudySpotlight({
  locale,
  kicker,
  title,
  subtitle,
  featuredLabel,
  secondaryLabel,
  seeAll,
  readMore,
  featuredSlugs,
  secondarySlugs,
}: CaseStudySpotlightProps) {
  const featured = caseStudies.find((c) => c.slug === featuredSlugs[0]);
  const secondary = secondarySlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <div>
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <Reveal variant="fade-up">
            <DefineWishKicker>{kicker}</DefineWishKicker>
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          {subtitle ? (
            <Reveal variant="fade-up" delay={0.1}>
              <p className="mt-4 text-muted sm:text-lg">{subtitle}</p>
            </Reveal>
          ) : null}
        </div>
        <Reveal variant="fade-up" delay={0.15}>
          <Button href="/case-studies" variant="secondary">
            {seeAll}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal variant="slide-start" className="lg:col-span-2">
          {featured ? (
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {featuredLabel}
              </p>
              <SpotlightCard study={featured} locale={locale} readMore={readMore} hero />
            </div>
          ) : null}
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal variant="slide-end" staggerIndex={0}>
            {secondary[0] ? (
              <SpotlightCard study={secondary[0]} locale={locale} readMore={readMore} />
            ) : null}
          </Reveal>
          <Reveal variant="slide-end" staggerIndex={1}>
            {secondary[1] ? (
              <SpotlightCard study={secondary[1]} locale={locale} readMore={readMore} />
            ) : null}
          </Reveal>
        </div>
      </div>
      <p className="sr-only">{secondaryLabel}</p>
    </div>
  );
}
