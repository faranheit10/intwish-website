import Image from "next/image";
import { ArrowRight, Mail, MessageSquare, Video, Gamepad2, Sparkles } from "lucide-react";
import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { WindowFrame } from "./WindowFrame";
import { IntOSDesktopMock } from "./IntOSDesktopMock";
import { Link } from "@/i18n/navigation";

interface ProductShowcaseProps {
  kicker: string;
  title: string;
  subtitle: string;
  intos: {
    cta: string;
    metric: string;
    placeholder: string;
  };
  intreview: {
    cta: string;
    metric: string;
    windowTitle: string;
    reportLabel: string;
  };
}

/**
 * Product suite overview — 2-column equal-width grid.
 * intOS carries the real OS surface; IntReview shows the real AI report
 * screenshot with a data-visualization motif background.
 */
export function ProductShowcase({
  kicker,
  title,
  subtitle,
  intos,
  intreview,
}: ProductShowcaseProps) {
  return (
    <div>
      <div className="mb-12 max-w-3xl">
        <Reveal variant="fade-up">
          <DefineWishKicker>{kicker}</DefineWishKicker>
        </Reveal>
        <Reveal variant="fade-up" delay={0.05}>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {subtitle ? (
          <Reveal variant="fade-up" delay={0.1}>
            <p className="mt-4 text-muted sm:text-lg">{subtitle}</p>
          </Reveal>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* intOS — 50% */}
        <Reveal variant="slide-start">
          <article className="frame-blueprint group flex h-full flex-col overflow-hidden rounded-2xl">
            <div className="bg-grid-dense relative flex-1 p-5 sm:p-6">
              <IntOSDesktopMock className="transition-transform duration-500 group-hover:scale-[1.01]" />
              {/* Module icons floating along the edge */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {[Mail, MessageSquare, Video, Gamepad2].map((Icon, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink-850 px-3 py-1.5 text-xs text-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                    {/* label kept short */}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-mono text-xs text-accent-300">
                {"{ "}{intos.metric}{" }"}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-ink-850 px-5 py-4 sm:px-6">
              <span className="font-display text-lg font-semibold text-paper">intOS</span>
              <Link
                href="/products/intos"
                className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-500 hover:text-ink-950"
                data-track="cta_click_intos_bento"
              >
                {intos.cta}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            <span className="absolute -top-2.5 start-4 rounded border border-dashed border-accent-500/70 bg-ink-950/90 px-2 py-0.5 font-mono text-[10px] text-accent-300">
              {intos.placeholder}
            </span>
          </article>
        </Reveal>

        {/* IntReview — 50% */}
        <Reveal variant="slide-end">
          <article className="frame-blueprint group relative flex h-full flex-col overflow-hidden rounded-2xl">
            <div className="bg-data-viz relative flex-1 p-5 sm:p-6">
              <div className="relative">
                <WindowFrame title={intreview.windowTitle} bodyClassName="bg-ink-900">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/img/products/ai-report.webp"
                      alt={intreview.reportLabel}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                </WindowFrame>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent-400" aria-hidden="true" />
                <p className="font-mono text-xs text-accent-300">
                  {"{ "}{intreview.metric}{" }"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-ink-850 px-5 py-4 sm:px-6">
              <span className="font-display text-lg font-semibold text-paper">IntReview</span>
              <Link
                href="/products/intreview"
                className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-500 hover:text-ink-950"
                data-track="cta_click_intreview_bento"
              >
                {intreview.cta}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  );
}
