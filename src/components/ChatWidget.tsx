"use client";

import { useEffect } from "react";
import { readConsent, subscribeConsent } from "@/lib/consent";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

/**
 * Chatwoot live-chat widget (open-source; free self-hosted or free cloud tier).
 *
 * Not mocked: this is the real Chatwoot web-widget loader. It activates only
 * when BOTH env vars are set AND the visitor accepted the consent banner:
 *
 *   NEXT_PUBLIC_CHATWOOT_BASE_URL      e.g. https://app.chatwoot.com (or self-hosted)
 *   NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN the inbox's website token (public-safe)
 *
 * Without those, nothing renders — no fake chat UI, no error.
 */
const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL;
const WEBSITE_TOKEN = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN;

function loadWidget() {
  if (typeof window === "undefined") return;
  if (!BASE_URL || !WEBSITE_TOKEN) return;
  if (window.chatwootSDK) return;

  const script = document.createElement("script");
  script.src = `${BASE_URL}/packs/js/sdk.js`;
  script.async = true;
  script.onload = () => {
    window.chatwootSDK?.run({ websiteToken: WEBSITE_TOKEN, baseUrl: BASE_URL });
  };
  document.body.appendChild(script);
}

export function ChatWidget() {
  useEffect(() => {
    const apply = () => {
      if (readConsent() === "accepted") loadWidget();
    };
    apply();
    return subscribeConsent(apply);
  }, []);

  return null;
}
