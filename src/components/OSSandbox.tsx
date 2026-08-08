"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Loader2, MonitorPlay, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { WindowFrame } from "./WindowFrame";

import { cn } from "@/lib/cn";

const DEMO_URL =
  process.env.NEXT_PUBLIC_INTOS_DEMO_URL ?? "https://demo.intwish.com/os-demo";

type Status = "loading" | "live" | "unavailable";

interface OSSandboxProps {
  title?: string;
  heightClassName?: string;
}

/**
 * Live interactive intOS sandbox embed (ungated — the flagship asset).
 * If the demo endpoint is not yet deployed (or unreachable), a timeout shows
 * a graceful "book a pilot" fallback instead of a blank/error embed.
 */
export function OSSandbox({
  title,
  heightClassName = "h-[520px] sm:h-[620px]",
}: OSSandboxProps = {}) {
  const t = useTranslations("intos.sandbox");
  const [status, setStatus] = useState<Status>("loading");
  const [session, setSession] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "unavailable" : current));
    }, 15000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [session]);

  function reload() {
    setStatus("loading");
    setSession((n) => n + 1);
  }

  const windowTitle = title ?? `intOS — ${DEMO_URL.replace(/^https?:\/\//, "")}`;

  return (
    <WindowFrame
      title={windowTitle}
      bodyClassName="bg-ink-900"
    >
      <div className={cn("relative", heightClassName)}>
        {status === "unavailable" ? (
          <div className="flex h-full flex-col items-center justify-center gap-5 bg-ink-900 px-6 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
              <MonitorPlay className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-paper sm:text-2xl">
              {t("fallbackTitle")}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {t("fallbackBody")}
            </p>
            <Button
              href="/contact?intent=intos"
              size="lg"
              data-track="cta_click_sandbox_pilot"
            >
              {t("fallbackCta")}
            </Button>
          </div>
        ) : (
          <>
            {/* allow-scripts + allow-same-origin together is an escape-hatch
                anti-pattern for untrusted embeds — safe here only because
                DEMO_URL is our own first-party domain (demo.intwish.com). */}
            <iframe
              key={session}
              src={DEMO_URL}
              title={t("iframeTitle")}
              onLoad={() => {
                setStatus("live");
                trackEvent("sandbox_engage", { state: "live" });
              }}
              className="h-full w-full border-0 bg-ink-900"
              loading="lazy"
              allow="clipboard-write; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
            {status === "loading" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink-900">
                <Loader2 className="h-8 w-8 animate-spin text-brand-500" aria-hidden="true" />
                <p className="text-sm text-muted">{t("loading")}</p>
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Toolbar: reload + open in new tab + private-sandbox capture */}
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line bg-ink-900 px-4 py-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reload}
            aria-label={t("reload")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:text-paper"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
          </button>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("openInNewTab")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:text-paper"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="text-sm text-muted">{t("privateNote")}</p>
        <Button href="/demo?intent=intos" size="md" data-track="cta_click_sandbox_private">
          {t("privateCta")}
        </Button>
      </div>
    </WindowFrame>
  );
}