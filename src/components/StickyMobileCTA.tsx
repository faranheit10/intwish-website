"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

/**
 * Mobile-only sticky "Book a Demo" action bar (Phase 5 — funnel optimization).
 * Slides in after the visitor scrolls past the hero, keeping the primary CTA
 * one thumb-tap away on mobile. Hidden on desktop (lg+).
 */
export function StickyMobileCTA() {
  const tn = useTranslations("nav");
  const tc = useTranslations("cta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reserve space only while the bar is visible, so it never covers the footer. */}
      {visible ? <div className="h-16 lg:hidden" aria-hidden="true" /> : null}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink-950/90 px-4 py-3 backdrop-blur-xl transition-transform duration-300 lg:hidden print:hidden",
          visible ? "translate-y-0" : "translate-y-full"
        )}
        aria-hidden={!visible}
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <Link
            href="/demo"
            className="flex-1 rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(241,95,53,0.55)] transition-colors hover:bg-brand-400"
            data-track="cta_click_sticky_demo"
          >
            {tn("bookDemo")}
          </Link>
          <Link
            href="/products/intos#sandbox"
            className="flex-1 rounded-full border border-line-strong bg-white/5 px-4 py-3 text-center text-sm font-semibold text-paper transition-colors hover:border-brand-500/50 hover:bg-white/10"
            data-track="cta_click_sticky_sandbox"
          >
            {tc("sandboxCta")}
          </Link>
        </div>
      </div>
    </>
  );
}
