"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { InsightCard, type InsightPreview } from "./InsightCard";
import { Reveal } from "./Reveal";
import type { Locale } from "@/i18n/routing";
import type { InsightType } from "@/content/insights";

interface InsightsHubProps {
  posts: InsightPreview[];
  locale: Locale;
}

const typeOrder: InsightType[] = [
  "report",
  "whitepaper",
  "playbook",
  "article",
  "webinar",
];

/** Filterable insights grid — receives pre-localized previews only. */
export function InsightsHub({ posts, locale }: InsightsHubProps) {
  const t = useTranslations("insights");
  const [active, setActive] = useState<"all" | InsightType>("all");

  const filters = useMemo(() => {
    const present = typeOrder.filter((type) =>
      posts.some((post) => post.type === type)
    );
    return [
      { key: "all" as const, label: t("filters.all") },
      ...present.map((type) => ({ key: type, label: t(`filters.${type}`) })),
    ];
  }, [posts, t]);

  const filtered =
    active === "all" ? posts : posts.filter((post) => post.type === active);

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
        aria-label={t("hub.title")}
        className="mb-10 flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          aria-pressed={active === "all"}
          className={chip(active === "all")}
          onClick={() => setActive("all")}
        >
          {t("filters.all")}
          <span className="font-mono text-xs opacity-70">{posts.length}</span>
        </button>
        {filters.slice(1).map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            className={chip(active === key)}
            onClick={() => setActive(key)}
          >
            {label}
            <span className="font-mono text-xs opacity-70">
              {posts.filter((post) => post.type === key).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-mono text-sm text-faint">—</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} staggerIndex={i} as="li" className="h-full">
              <InsightCard post={post} locale={locale} />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}