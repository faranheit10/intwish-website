/**
 * Lightweight consent state (GDPR / PIPEDA / UU PDP-style).
 * Choice is persisted in localStorage; components subscribe to changes
 * via the `intwish-consent-change` window event.
 */

export const CONSENT_STORAGE_KEY = "intwish-consent";

export type ConsentChoice = "accepted" | "declined" | null;

const CONSENT_EVENT = "intwish-consent-change";

export function readConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: "accepted" | "declined" | null): void {
  if (typeof window === "undefined") return;
  try {
    if (choice === null) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } else {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    }
  } catch {
    // Storage unavailable (private mode / blocked) — choice lasts for this visit.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}
