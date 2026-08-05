import { Reveal } from "./Reveal";

export interface MetricItem {
  value: string;
  label: string;
}

interface MetricsBoxProps {
  items: MetricItem[];
  className?: string;
}

/**
 * Proof-band metric cards — `{ 25,000+ }` brace-framed values on blueprint
 * cards. Used under product heroes and inside results sections.
 */
export function MetricsBox({ items, className }: MetricsBoxProps) {
  return (
    <div className={className ?? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
      {items.map((item, i) => (
        <Reveal key={item.label} staggerIndex={i} as="li">
          <div className="frame-blueprint h-full rounded-2xl bg-ink-850 px-5 py-6 text-center">
            <p className="font-mono text-2xl font-bold tracking-tight text-gradient-teal sm:text-3xl">
              <span aria-hidden="true" className="text-accent-500/70">{`{ `}</span>
              {item.value}
              <span aria-hidden="true" className="text-accent-500/70">{` }`}</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{item.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
