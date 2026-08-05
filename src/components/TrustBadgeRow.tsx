import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface TrustBadgeRowProps {
  items: { name: string; note: string }[];
  className?: string;
}

/**
 * Compliance & trust badge row — shield icons + certification names.
 * Always rendered adjacent to CTAs (A7 conversion research).
 */
export function TrustBadgeRow({ items, className }: TrustBadgeRowProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {items.map((item, i) => (
        <Reveal key={item.name} staggerIndex={i} as="li">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-ink-850 px-5 py-4 transition-colors hover:border-accent-500/40">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-paper">{item.name}</p>
              <p className="text-xs text-faint">{item.note}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
