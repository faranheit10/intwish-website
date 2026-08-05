"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

interface StatItem {
  value: number;
  /** Whether the "+" suffix/prefix applies (e.g. "300,000+"). */
  hasPlus?: boolean;
  label: string;
}

interface AnimatedStatCounterProps {
  items: StatItem[];
  className?: string;
}

const localeMap: Record<Locale, string> = {
  en: "en-US",
  "fr-CA": "fr-CA",
  "id-ID": "id-ID",
  ar: "en-US",
};

function formatValue(locale: Locale, value: number, hasPlus: boolean): string {
  const n = value.toLocaleString(localeMap[locale]);
  const suffixBefore = locale === "ar";
  return hasPlus ? (suffixBefore ? `+${n}` : `${n}+`) : n;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Full-width stats band with animated count-up on intersection.
 * Respects prefers-reduced-motion by jumping straight to the final value.
 */
export function AnimatedStatCounter({ items, className }: AnimatedStatCounterProps) {
  const locale = useLocale() as Locale;
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const duration = reduce ? 1 : 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      setProgress(reduce ? 1 : easeOutExpo(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <div ref={ref} className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item) => {
        const current = Math.round(item.value * progress);
        const display = formatValue(locale, current, item.hasPlus || false);
        return (
          <div
            key={item.label}
            className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur transition-colors hover:border-accent-400/40"
          >
            <span
              aria-label={formatValue(locale, item.value, item.hasPlus || false)}
              className="font-mono text-4xl font-bold tracking-tight text-paper sm:text-5xl"
            >
              {display}
            </span>
            <span className="mt-3 max-w-[14rem] font-display text-sm text-paper/70">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}