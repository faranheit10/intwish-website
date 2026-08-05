import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { localize } from "@/content/types";
import type { CaseStudy } from "@/content/caseStudies";

interface CaseStudyCardProps {
  study: Pick<
    CaseStudy,
    "slug" | "client" | "image" | "industry" | "title" | "summary"
  >;
  locale: Locale;
}

export function CaseStudyCard({ study, locale }: CaseStudyCardProps) {
  const t = useTranslations("common");
  const title = localize(locale, study.title);
  const summary = localize(locale, study.summary);
  const industry = localize(locale, study.industry);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group card-surface flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow"
      data-track="case_study_open"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <Image
          src={study.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <span className="absolute start-3 top-3 rounded-full border border-line bg-ink-950/80 px-3 py-1 text-xs font-medium text-paper backdrop-blur">
          {industry}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          {study.client}
        </p>
        <h3 className="mt-2 text-balance text-lg font-semibold leading-snug text-paper">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
          {t("readCaseStudy")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </Link>
  );
}
