declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackParams = Record<string, string | number | boolean | undefined>;

const GA_ID = "G-V3FX4VCECR";

/**
 * gtag only loads after the visitor *accepts* the consent banner
 * (see components/ConsentManager.tsx). Until then trackEvent is a no-op,
 * so no data leaves the browser without consent.
 *
 * Named events (form_submit, demo_request, sandbox_engage, case_download, ...)
 * can be marked as conversions in the GA4 admin so the funnel
 * (Visit → Sandbox engage → Demo request → Sale) is measurable per the plan.
 */

let gtagLoadStarted = false;

function analyticsAllowed(): boolean {
  if (typeof window === "undefined") return false;
  // Keep GA off in local dev to avoid noise; enable on deployed domains.
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return false;
  return true;
}

/** Loads gtag once — only when the visitor has consented. */
export function loadAnalytics(consented: boolean): void {
  if (!consented || gtagLoadStarted || !analyticsAllowed()) return;
  if (typeof window.gtag === "function") return;
  gtagLoadStarted = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.gtag = function (...args: any[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

/** Fire a named GA4 event (Phase 5 — CRO & growth). Safe no-op pre-consent. */
export function trackEvent(name: string, params?: TrackParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
