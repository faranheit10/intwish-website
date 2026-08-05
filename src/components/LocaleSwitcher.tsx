"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** Compact labels shown on the trigger button (matches industry switchers). */
const shortLabels: Record<Locale, string> = {
  en: "EN",
  "fr-CA": "FR",
  "id-ID": "ID",
  ar: "ع",
};

/**
 * Compact, industry-standard language selector: a language icon that slides
 * open a menu of all available languages, with the active one clearly marked.
 * The icon-only trigger keeps the header uncluttered on mobile and desktop.
 * Full keyboard support: opens into the menu, Arrow/Home/End to navigate,
 * Enter/Space to select, Escape or outside-click to close (focus returns
 * to the trigger).
 */

/** Session flag used to restore focus to the trigger after a locale switch. */
const FOCUS_KEY = "intwish:focus-lang-trigger";

export function LocaleSwitcher({ align = "end" }: { align?: "start" | "end" }) {
  const t = useTranslations("localeSwitcher");
  // The middleware guarantees the active locale is one of routing.locales.
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  // Switching locale remounts the header, which destroys this component's refs.
  // A transient session flag survives that remount so we can put focus back on
  // the trigger — keyboard users stay on the control they just used.
  useEffect(() => {
    if (sessionStorage.getItem(FOCUS_KEY)) {
      sessionStorage.removeItem(FOCUS_KEY);
      triggerRef.current?.focus();
    }
  }, []);

  // Close on outside pointer-down or Escape; focus lands inside on open.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    // Focus the active language when the menu opens (WAI-ARIA menu pattern).
    const menu = menuRef.current;
    const items = menu ? [...menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')] : [];
    const initial =
      items.find((el) => el.getAttribute("aria-current") === "true") ?? items[0];
    initial?.focus();
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const onMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const menu = menuRef.current;
    if (!menu) return;
    const items = [...menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')];
    if (items.length === 0) return;
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    let next: number | undefined;
    switch (event.key) {
      case "ArrowDown":
        next = current === -1 ? 0 : (current + 1) % items.length;
        break;
      case "ArrowUp":
        next = current === -1 ? items.length - 1 : (current - 1 + items.length) % items.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    items[next]?.focus();
  };

  const select = (code: Locale) => {
    setOpen(false);
    if (code !== locale) {
      sessionStorage.setItem(FOCUS_KEY, "1"); // survives the header remount
      router.replace(pathname, { locale: code });
    } else {
      triggerRef.current?.focus();
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t("label")}
        title={t(locale)}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-white/5 px-3 text-paper transition-all duration-200",
          "hover:border-brand-500/50 hover:text-brand-300",
          open && "border-brand-500/50 bg-brand-500/10 text-brand-300"
        )}
      >
        <Languages className="h-4 w-4" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">
          {shortLabels[locale]}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted transition-transform duration-200",
            open && "rotate-180 text-brand-300"
          )}
          aria-hidden
        />
      </button>

      {/* Slide-down language menu */}
      <div
        id={menuId}
        ref={menuRef}
        role="menu"
        aria-label={t("label")}
        onKeyDown={onMenuKeyDown}
        inert={!open}
        className={cn(
          "absolute top-full z-50 mt-2 min-w-[12.5rem] origin-top rounded-2xl border border-line bg-ink-900/95 p-1.5",
          "shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl",
          "transition-all duration-200 [transition-timing-function:var(--ease-out-quart)]",
          align === "end" ? "end-0" : "start-0",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        )}
      >
        {routing.locales.map((code) => {
          const active = code === locale;
          return (
            <button
              key={code}
              type="button"
              role="menuitem"
              lang={code}
              tabIndex={-1}
              aria-current={active ? "true" : undefined}
              onClick={() => select(code)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-start text-sm transition-colors",
                active
                  ? "bg-brand-500/15 font-semibold text-brand-300"
                  : "text-muted hover:bg-white/5 hover:text-paper"
              )}
            >
              <span dir="auto">{t(code)}</span>
              <span className="flex w-4 shrink-0 items-center justify-center">
                {active && <Check className="h-4 w-4 text-brand-400" aria-hidden />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
