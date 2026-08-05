import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Link } from "@/i18n/navigation";

export interface TestimonialItem {
  client: string;
  value: string;
  quote: string;
}

interface TestimonialGridProps {
  items: TestimonialItem[];
  cta: { label: string; href: string };
}

/**
 * Named client-outcome proof cards (social proof with numbers).
 * The final card is a dashed "your drive could be next" CTA tile.
 */
export function TestimonialGrid({ items, cta }: TestimonialGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.client} staggerIndex={i} as="figure">
          <div className="frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-7 transition-colors hover:border-brand-500/40">
            <span
              aria-hidden="true"
              className="select-none font-mono text-5xl font-bold leading-none text-brand-500/40"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-paper sm:text-base">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
              <div>
                <span className="block font-mono text-2xl font-bold tracking-tight text-gradient-teal">
                  {"{ "}{item.value}{" }"}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-muted">{item.client}</span>
              </div>
            </figcaption>
          </div>
        </Reveal>
      ))}
      <Reveal staggerIndex={items.length}>
        <Link
          href={cta.href}
          className="group frame-blueprint flex h-full min-h-[200px] flex-col items-center justify-center gap-4 rounded-2xl bg-ink-850 p-7 text-center transition-colors hover:border-brand-500/50"
          data-track="testimonial_cta"
        >
          <p className="text-base font-semibold text-paper">{cta.label}</p>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
          </span>
        </Link>
      </Reveal>
    </div>
  );
}
