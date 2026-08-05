"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Delegated click tracking for any element carrying [data-track].
 * The GA4 script itself is loaded by ConsentManager only after consent —
 * trackEvent is a no-op until then.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-track]") as HTMLElement | null;
      if (el) {
        const label = el.getAttribute("data-track");
        if (label) {
          trackEvent(label, { event_category: "engagement" });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
