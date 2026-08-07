import { Boxes, Building2, Clock, Layers, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export interface ClientProfileField {
  label: string;
  value: string;
  href?: string;
}

export interface ClientProfileBadgeProps {
  client: string;
  industry: string;
  /** Cross-link to the industry page (omitted when none exists). */
  industryHref?: string;
  region: string;
  year?: string;
  /** Product/service used — labels the proof→product loop. */
  product: string;
  productHref: string;
  /** Deployment-scale descriptor — never a sensitive org-size number. */
  scale: string;
  labels: {
    industry: string;
    region: string;
    year: string;
    product: string;
    scale: string;
  };
}

function Field({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-2 text-sm text-muted">
      <span className="text-faint" aria-hidden="true">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-faint">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-paper">{value}</span>
      </span>
    </span>
  );

  return href ? (
    <Link
      href={href}
      className="rounded-lg transition-colors hover:bg-white/5 hover:text-brand-300"
    >
      {content}
    </Link>
  ) : (
    content
  );
}

/**
 * Client Profile Badge — the identity block near the top of every case study.
 * Shows client, industry/sector, region, year of engagement, product used and
 * a deployment-scale descriptor. Deliberately never prints a headcount for
 * clients where org size may be commercially sensitive; `scale` carries that
 * role instead.
 */
export function ClientProfileBadge({
  client,
  industry,
  industryHref,
  region,
  year,
  product,
  productHref,
  scale,
  labels,
}: ClientProfileBadgeProps) {
  return (
    <div className="frame-blueprint overflow-hidden rounded-2xl bg-ink-850">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5">
        <div>
          <p className="text-xl font-semibold tracking-tight text-paper">{client}</p>
          <p className="mt-1 font-mono text-xs text-faint">
            {labels.industry} · {industry}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs font-medium text-accent-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
          {industry}
        </span>
      </div>

      {/* Company details — industry, region, year */}
      <div className="grid gap-x-8 gap-y-4 px-6 pt-5 sm:grid-cols-3">
        <Field icon={<Building2 className="h-4 w-4" />} label={labels.industry} value={industry} href={industryHref} />
        <Field icon={<MapPin className="h-4 w-4" />} label={labels.region} value={region} />
        {year ? (
          <Field icon={<Clock className="h-4 w-4" />} label={labels.year} value={year} />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>

      {/* Product & scale — centered second row with consistent field widths */}
      <div className="mt-5 border-t border-line/60 px-6 py-5">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-x-8">
          <Field icon={<Boxes className="h-4 w-4" />} label={labels.product} value={product} href={productHref} />
          <Field icon={<Layers className="h-4 w-4" />} label={labels.scale} value={scale} />
        </div>
      </div>
    </div>
  );
}