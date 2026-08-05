"use client";

import { useEffect, useState } from "react";
import { X, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ANNOUNCEMENT_COOKIE = "intwish-announcement-dismissed";

function readDismissed(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie
    .split("; ")
    .some((row) => row.startsWith(`${ANNOUNCEMENT_COOKIE}=1`));
}

/**
 * Optional, hideable announcement bar. Teal accent (--accent-500 at 10%),
 * dismissal persists via cookie so returning visitors don't see it again.
 */
export function NavigationAnnouncement() {
  const t = useTranslations("announcement");
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDismissed(readDismissed()));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    document.cookie = `${ANNOUNCEMENT_COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 30}`;
    setDismissed(true);
  };

  return (
    <div className="relative z-50 border-b border-accent-500/20 bg-accent-500/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-2.5 sm:px-8">
        <Rocket className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
        <Link
          href="/products/intos#sandbox"
          className="text-center font-mono text-xs text-paper underline-offset-4 hover:text-accent-300 hover:underline sm:text-[0.8125rem]"
          data-track="announcement_click"
        >
          {t("message")}
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t("dismiss")}
          className="absolute end-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-paper sm:end-5"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
