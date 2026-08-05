import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export interface PricingItem {
  icon: ReactNode;
  title: string;
  body: string;
}

interface PricingBandProps {
  items: PricingItem[];
  cta: { label: string; href: string };
  roiNote: { label: string; href: string };
}

/**
 * "How pricing works" trust section for contact-based, region-variable
 * pricing — transparency about the process without tied numbers.
 */
export function PricingBand({ items, cta, roiNote }: PricingBandProps) {
  return (
    <Reveal>
      <div className="frame-blueprint rounded-2xl bg-ink-850 p-8 sm:p-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-line bg-ink-900 p-6 transition-colors hover:border-brand-500/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                {item.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-paper">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={cta.href} size="lg" data-track="cta_click_pricing_quote">
            {cta.label}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
          <Button href={roiNote.href} size="lg" variant="secondary" data-track="cta_click_pricing_roi">
            {roiNote.label}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}