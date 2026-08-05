import { ArrowRight } from "lucide-react";
import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { ServiceIcon } from "./Icon";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/content/types";
import { services } from "@/content/services";

interface ServicesBandProps {
  locale: Locale;
  kicker: string;
  title: string;
  subtitle: string;
}

/**
 * Services band — navigation, not content. 3×2 grid on desktop, horizontal
 * scroll on mobile. Each card: icon + title + one-line tagline + arrow.
 */
export function ServicesBand({ locale, kicker, title, subtitle }: ServicesBandProps) {
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

      <div
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-5"
        style={{
          maskImage: "linear-gradient(90deg, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, black 88%, transparent 100%)",
        }}
      >
        {services.map((service, i) => {
          const title = localize(locale, service.title);
          const tagline = localize(locale, service.tagline);
          return (
            <Reveal
              key={service.slug}
              staggerIndex={i}
              as="article"
              className="w-[78%] shrink-0 snap-start sm:w-auto"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full min-h-44 flex-col justify-between rounded-2xl border border-line bg-ink-850 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow"
                data-track="service_open"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5">
                    <ServiceIcon name={service.icon} className="h-5 w-5 text-brand-400" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-paper">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-all group-hover:translate-x-0.5 group-hover:text-brand-300 rtl:group-hover:-translate-x-0.5">
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
