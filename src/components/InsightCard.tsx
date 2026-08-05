import { ArrowUpRight, FileText, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { InsightType } from "@/content/insights";

/** Pre-localized card preview — the hub localizes before handing to the client. */
export interface InsightPreview {
  slug: string;
  type: InsightType;
  date: string;
  readTimeMin: number;
  gated?: boolean;
  title: string;
  excerpt: string;
}

interface InsightCardProps {
  post: InsightPreview;
  locale: Locale;
}

/**
 * Type pills stay inside the design-token palette (brand + accent teal + ink)
 * — no off-palette hues, per DESIGN.md §3.2. Report = flagship (brand),
 * whitepaper/webinar = deployed-result (teal), the rest = neutral surfaces.
 */
const typeStyles: Record<InsightType, string> = {
  report: "border-brand-500/40 bg-brand-500/15 text-brand-400",
  whitepaper: "border-accent-500/40 bg-accent-500/10 text-accent-300",
  playbook: "border-line bg-white/5 text-muted",
  article: "border-line-strong bg-white/5 text-paper",
  webinar: "border-accent-500/40 bg-accent-500/10 text-accent-300",
};

export function InsightCard({ post, locale }: InsightCardProps) {
  const t = useTranslations("insights");

  // timeZone: "UTC" keeps the rendered month stable across server/client
  // and across visitor timezones (ISO dates are UTC-midnight based).
  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });

  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-glow sm:p-7"
      data-track="insight_open"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${typeStyles[post.type]}`}
        >
          {post.type === "report" ? (
            <FileText className="h-3 w-3" aria-hidden="true" />
          ) : null}
          {t(`types.${post.type}`)}
        </span>
        {post.gated ? (
          <span
            className="inline-flex items-center gap-1 text-xs font-medium text-faint"
            title={t("gatedLabel")}
          >
            <Lock className="h-3 w-3" aria-hidden="true" />
            {t("gatedLabel")}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-balance text-lg font-semibold leading-snug tracking-tight text-paper transition-colors group-hover:text-brand-300">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-xs text-faint">
          {formattedDate} · {t("readTime", { count: post.readTimeMin })}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
          {t("readCta")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </Link>
  );
}