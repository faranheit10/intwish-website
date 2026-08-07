import { ArrowRight, Quote } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export interface SidebarTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface CaseStudySidebarProps {
  client: string;
  industry: string;
  /** Client Profile Badge — rendered at the top of the sticky rail. */
  badge: ReactNode;
  testimonialLabel: string;
  testimonial?: SidebarTestimonial;
  scheduleDemo: { label: string; href: string; track: string };
  viewProduct: { label: string; href: string };
}

/**
 * Sticky right rail on the case-study body — the client profile badge, the
 * named client quote (only when a real quote is sourced) and the conversion
 * pair: "Schedule a demo" (primary) + link to the relevant product page.
 */
export function CaseStudySidebar({
  client,
  industry,
  badge,
  testimonialLabel,
  testimonial,
  scheduleDemo,
  viewProduct,
}: CaseStudySidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
      <div className="grid gap-6">
        {/* Client Profile Badge */}
        <Reveal variant="slide-end">
          {badge}
        </Reveal>

        {/* Named client quote — hidden entirely until a real quote is sourced */}
        {testimonial ? (
          <Reveal variant="slide-end" delay={0.05} as="figure">
            <div className="frame-blueprint rounded-2xl bg-ink-850 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {testimonialLabel}
              </p>
              <Quote
                className="mt-4 h-6 w-6 text-brand-500/60"
                aria-hidden="true"
              />
              <blockquote className="mt-3 text-sm leading-relaxed text-paper">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block font-semibold text-paper">
                  {testimonial.name}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {testimonial.title} · {testimonial.company}
                </span>
              </figcaption>
            </div>
          </Reveal>
        ) : null}

        {/* CTA pair */}
        <Reveal variant="slide-end" delay={0.1}>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-balance font-semibold text-paper">
              {client} · {industry}
            </p>
            <div className="mt-5 grid gap-3">
              <Button href={scheduleDemo.href} data-track={scheduleDemo.track}>
                {scheduleDemo.label}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Button>
              <Button href={viewProduct.href} variant="secondary">
                {viewProduct.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </aside>
  );
}