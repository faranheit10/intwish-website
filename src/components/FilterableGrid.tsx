"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";
import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/content/types";

export interface FilterableGridItem {
  slug: string;
  client: string;
  image: string;
  industry: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
}

interface FilterableGridProps {
  items: FilterableGridItem[];
  locale: Locale;
  /** Empty-state message shown when a filter matches nothing. */
  emptyLabel?: string;
}

/**
 * Client-side filterable card grid. Industry taxonomy is derived from the
 * content data (en key is the stable filter key, labels localize per locale).
 * Cards enter in a stagger cascade instead of a uniform fade-up.
 */
export function FilterableGrid({ items, locale, emptyLabel }: FilterableGridProps) {
  const t = useTranslations("caseStudies");
  const [active, setActive] = useState<string>("all");

  const industries = useMemo(() => {
    const seen = new Map<string, string>();
    for (const item of items) {
      const key = item.industry.en;
      if (!seen.has(key)) seen.set(key, item.industry[locale]);
    }
    return Array.from(seen.entries()).map(([key, label]) => ({ key, label }));
  }, [items, locale]);

  const filtered =
    active === "all" ? items : items.filter((item) => item.industry.en === active);

  const chip = (isActive: boolean) =>
    cn(
      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
      isActive
        ? "border-brand-500 bg-brand-500 text-ink-950 shadow-[0_8px_24px_-8px_rgba(241,95,53,0.6)]"
        : "border-line bg-white/5 text-muted hover:border-brand-500/40 hover:text-paper"
    );

  return (
    <div>
      <div
        role="group"
        aria-label={t("industry")}
        className="mb-10 flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          aria-pressed={active === "all"}
          className={chip(active === "all")}
          onClick={() => setActive("all")}
        >
          {t("all")}
          <span className="font-mono text-xs opacity-70">{items.length}</span>
        </button>
        {industries.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            className={chip(active === key)}
            onClick={() => setActive(key)}
          >
            {label}
            <span className="font-mono text-xs opacity-70">
              {items.filter((item) => item.industry.en === key).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-mono text-sm text-faint">
          {emptyLabel ?? "—"}
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} staggerIndex={i} as="li" className="h-full">
              <CaseStudyCard study={item} locale={locale} />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
