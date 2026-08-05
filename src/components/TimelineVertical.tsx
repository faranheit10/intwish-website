import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { localize } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import type { TimelineEntry } from "@/content/site";

interface TimelineVerticalProps {
  items: TimelineEntry[];
  locale: Locale;
}

/**
 * Animated vertical timeline — year markers on a connecting spine, cards
 * alternating sides on desktop. Slide-from-edge per direction.
 */
export function TimelineVertical({ items, locale }: TimelineVerticalProps) {
  return (
    <ol className="relative before:absolute before:inset-y-2 before:start-[0.4375rem] before:w-px before:bg-gradient-to-b before:from-brand-500/40 before:via-line-strong before:to-transparent sm:before:start-1/2 sm:before:-translate-x-1/2">
      {items.map((entry, i) => {
        const title = localize(locale, entry.title);
        const body = localize(locale, entry.body);
        const onEnd = i % 2 === 1;
        return (
          <Reveal
            key={entry.period}
            variant={onEnd ? "slide-end" : "slide-start"}
            as="li"
            className={cn(
              "relative mb-8 ps-14 last:mb-0 sm:w-1/2 sm:ps-0",
              onEnd && "sm:ms-auto sm:ps-10"
            )}
          >
            {/* Node on the spine */}
            <span
              aria-hidden="true"
              className="absolute start-[0.25rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-ink-950 sm:start-0 sm:-translate-x-1/2"
            />
            <div
              className={cn(
                "frame-blueprint rounded-2xl bg-ink-850 p-6",
                !onEnd && "sm:me-10"
              )}
            >
              <p className="font-mono text-xs font-bold tracking-wide text-brand-400">{entry.period}</p>
              <h3 className="mt-2 text-balance font-display text-lg font-semibold tracking-tight text-paper">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}