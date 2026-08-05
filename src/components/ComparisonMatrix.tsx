import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

export interface ComparisonRow {
  feature: string;
  us: string;
  them: string;
}

interface ComparisonMatrixProps {
  us: string;
  them: string;
  rows: ComparisonRow[];
}

/**
 * Product vs status-quo matrix — the Intwish column carries teal check
 * chips, the status-quo column muted crosses, so the win reads instantly
 * (bottom-of-funnel proof). Responsive: collapses to stacked cards on mobile.
 */
export function ComparisonMatrix({ us, them, rows }: ComparisonMatrixProps) {
  return (
    <Reveal>
      <div className="card-surface overflow-hidden">
        {/* Header row (desktop) */}
        <div className="hidden grid-cols-[1.4fr_1fr_1fr] items-center border-b border-line bg-ink-900 sm:grid">
          <div className="px-5 py-4 text-sm font-semibold text-muted">&nbsp;</div>
          <div className="flex items-center gap-2 bg-accent-500/10 px-5 py-4">
            <Check className="h-4 w-4 text-accent-400" aria-hidden="true" />
            <span className="text-sm font-bold tracking-tight text-accent-300">{us}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-4">
            <X className="h-4 w-4 text-faint" aria-hidden="true" />
            <span className="text-sm font-semibold text-muted">{them}</span>
          </div>
        </div>

        {/* Rows */}
        <ul className="divide-y divide-line">
          {rows.map((row, i) => (
            <Reveal key={row.feature} staggerIndex={i} as="li">
              <li className="grid gap-3 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-0">
                <div className="px-5 pt-4 text-sm font-semibold tracking-tight text-paper sm:flex sm:items-center sm:py-4 sm:align-top">
                  {row.feature}
                </div>
                <div className="flex items-start gap-3 bg-accent-500/[0.04] px-5 pb-4 sm:items-center sm:py-4 sm:px-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400 sm:mt-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-paper">{row.us}</span>
                </div>
                <div className="flex items-start gap-3 px-5 pb-4 sm:items-center sm:py-4 sm:px-4">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-faint sm:mt-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-muted">{row.them}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
