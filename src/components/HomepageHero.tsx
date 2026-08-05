import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "./Button";
import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { IntOSDesktopMock } from "./IntOSDesktopMock";
import { WindowFrame } from "./WindowFrame";

interface HomepageHeroProps {
  kicker: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  proofLine: string;
  primaryCta: string;
  secondaryCta: string;
  codeComment: string;
  placeholderLabel: string;
  osWindowTitle: string;
  aiReportWindowTitle: string;
}

/**
 * Asymmetric editorial hero — NOT the banned centered-hero pattern.
 * Text left (55%), real product UI right (45%): an intOS desktop mock with
 * the IntReview AI report overlapping at an angle.
 */
export function HomepageHero({
  kicker,
  title,
  titleAccent,
  subtitle,
  proofLine,
  primaryCta,
  secondaryCta,
  codeComment,
  placeholderLabel,
  osWindowTitle,
  aiReportWindowTitle,
}: HomepageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Background: subtle grid + a single diagonal code-comment line */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 hidden rotate-[4deg] font-mono text-sm tracking-widest text-faint opacity-[0.04] lg:block"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <p key={i} className="whitespace-nowrap">
            {codeComment} {codeComment} {codeComment} {codeComment} {codeComment}{" "}
            {codeComment} {codeComment}
          </p>
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        {/* Left column — 55% */}
        <div>
          <Reveal variant="fade-up">
            <DefineWishKicker cursor>
              {kicker}
            </DefineWishKicker>
          </Reveal>
          <Reveal variant="fade-up" delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {title}{" "}
              <span className="text-gradient-brand">{titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={0.12}>
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/demo" size="lg" data-track="cta_click_hero_demo">
                {primaryCta}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
              <Button
                href="/products/intos#sandbox"
                size="lg"
                variant="secondary"
                data-track="cta_click_hero_sandbox"
              >
                {secondaryCta}
              </Button>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={0.24}>
            <p className="mt-9 font-mono text-xs text-faint sm:text-sm">
              {proofLine}
            </p>
          </Reveal>
        </div>

        {/* Right column — 45% product UI showcase */}
        <div className="relative">
          <Reveal variant="scale" className="relative">
            <div className="relative rotate-[-1.5deg]">
              <IntOSDesktopMock className="shadow-window" />
              <span className="absolute -top-2.5 start-4 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
                {placeholderLabel}
              </span>
            </div>
            {/* Overlapping IntReview AI report */}
            <div className="animate-float-soft absolute -bottom-10 -end-4 w-[46%] sm:-end-8">
              <div className="rotate-[2.5deg]">
                <WindowFrame title={aiReportWindowTitle} bodyClassName="p-2 bg-ink-900">
                  <div className="flex items-center justify-between px-2">
                    <span className="font-mono text-[9px] text-faint">
                      {"{"} STAR · Communication {"}"}
                    </span>
                    <span className="rounded bg-accent-500/20 px-1.5 py-0.5 font-mono text-[9px] text-accent-300">
                      4.2/5
                    </span>
                  </div>
                  <div className="mt-1.5 space-y-1.5 px-2 pb-1.5">
                    <div className="h-1.5 rounded-full bg-ink-700">
                      <div className="h-full w-4/5 rounded-full bg-accent-500/80" />
                    </div>
                    <div className="h-1.5 rounded-full bg-ink-700">
                      <div className="h-full w-3/5 rounded-full bg-brand-500/80" />
                    </div>
                    <p className="pt-1 font-mono text-[9px] italic leading-snug text-muted">
                      &ldquo;I escalated to the compliance lead without delay&hellip;&rdquo;
                    </p>
                  </div>
                </WindowFrame>
              </div>
            </div>
            {/* Floating OS window title tag */}
            <span className="absolute -top-3 end-6 hidden rounded border border-line bg-ink-850 px-2.5 py-1 font-mono text-[10px] text-muted sm:block">
              <Terminal className="me-1 inline h-3 w-3 text-brand-400" aria-hidden="true" />
              {osWindowTitle}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
