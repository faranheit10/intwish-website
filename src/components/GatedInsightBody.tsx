"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { GatedResourceForm } from "./GatedResourceForm";

interface GatedInsightBodyProps {
  locale: string;
  resource: string;
  highlights: string[];
  /**
   * The full report body, rendered by the server into the initial HTML.
   * AI crawlers and no-JS visitors read it as-is; humans see it blurred
   * behind the email gate until they unlock it.
   */
  children: ReactNode;
}

/**
 * Gated insight body: teaser highlights + an email-capture gate.
 * The full sections arrive server-rendered (SEO/AI-visible) inside a
 * blur-locked wrapper that unlocks only after the visitor submits the form.
 */
export function GatedInsightBody({
  locale,
  resource,
  highlights,
  children,
}: GatedInsightBodyProps) {
  const t = useTranslations("insights");
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      {/* Teaser */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          define(resource)
        </p>
        <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-paper">
          {t("gate.teaserTitle")}
        </h2>
        <ul className="mt-6 space-y-4">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
              />
              <span className="text-sm leading-relaxed text-muted sm:text-base">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full body — server-rendered, blur-locked until unlock.
          data-gated-body/overlay hooks let globals.css unblur everything when
          JS is unavailable (SEO + a11y). */}
      <div className="relative lg:col-span-2">
        <div
          data-gated-body
          className={`transition-all duration-500 ${
            unlocked
              ? ""
              : "pointer-events-none select-none blur-md"
          }`}
          aria-hidden={!unlocked}
        >
          <div className="space-y-12">{children}</div>
        </div>

        {!unlocked ? (
          <div
            data-gated-overlay
            className="absolute inset-0 z-10 flex items-start justify-center bg-gradient-to-b from-transparent via-ink-950/30 to-ink-950/80 pt-10 sm:pt-16"
          >
            <div className="w-full max-w-xl">
              <GatedResourceForm
                locale={locale}
                resource={resource}
                onUnlocked={() => setUnlocked(true)}
              />
            </div>
          </div>
        ) : (
          <p className="mt-8 flex items-center gap-2 border-t border-line pt-6 font-mono text-sm text-accent-300">
            <span aria-hidden="true" className="text-accent-500/70">{`{ `}</span>
            {t("gate.successNote")}
            <span aria-hidden="true" className="text-accent-500/70">{` }`}</span>
          </p>
        )}
      </div>
    </div>
  );
}