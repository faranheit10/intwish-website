import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { MetricsBox, type MetricItem } from "./MetricsBox";
import { Breadcrumb } from "./Breadcrumb";
import { CheckCircle2 } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface ProductDetailHeroProps {
  breadcrumb: BreadcrumbItem[];
  logo: ReactNode;
  kicker: string;
  headline: string;
  tagline: string;
  outcome: string;
  primaryCta: { label: string; href: string; track: string };
  secondaryCta: { label: string; href: string; track: string };
  visual: ReactNode;
  proof: MetricItem[];
  proofLabel?: string;
  trustLine?: string;
}

/**
 * Product-detail hero — asymmetric split: editorial text left, real product
 * UI right (framed in a WindowFrame by the caller). Proof band below.
 * NOT a centered hero: this is the A5 Product Detail archetype composition.
 */
export function ProductDetailHero({
  breadcrumb,
  logo,
  kicker,
  headline,
  tagline,
  outcome,
  primaryCta,
  secondaryCta,
  visual,
  proof,
  proofLabel,
  trustLine,
}: ProductDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="fade-up">
          <Breadcrumb items={breadcrumb} />
        </Reveal>
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left — editorial */}
          <div>
            <Reveal variant="fade-up">
              <div className="flex items-center gap-4">
                {logo}
                <DefineWishKicker>{kicker}</DefineWishKicker>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={0.05}>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
                {headline}
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={0.12}>
              <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                {tagline}
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={0.18}>
              <p className="mt-5 max-w-2xl font-mono text-sm font-medium text-accent-300">
                {"{ "}{outcome}{" }"}
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={primaryCta.href} size="lg" data-track={primaryCta.track}>
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
                <Button href={secondaryCta.href} size="lg" variant="secondary" data-track={secondaryCta.track}>
                  {secondaryCta.label}
                </Button>
              </div>
            </Reveal>
            {trustLine ? (
              <Reveal variant="fade-up" delay={0.3}>
                <p className="mt-7 flex max-w-xl items-center gap-2 font-mono text-xs text-faint">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
                  {trustLine}
                </p>
              </Reveal>
            ) : null}
          </div>

          {/* Right — product visual */}
          <Reveal variant="scale" className="relative">
            {visual}
          </Reveal>
        </div>

        {/* Proof band */}
        <div className="mt-16 sm:mt-20">
          {proofLabel ? (
            <Reveal variant="fade-up">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {proofLabel}
              </p>
            </Reveal>
          ) : null}
          <MetricsBox items={proof} />
        </div>
      </div>
    </section>
  );
}