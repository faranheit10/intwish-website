"use client";

import { Printer } from "lucide-react";
import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";

interface PrintPdfButtonProps {
  slug: string;
  client: string;
}

/**
 * "Save as PDF" button for the one-pager. Uses the browser's print dialog
 * (print-to-PDF) so every locale — including Arabic RTL — exports cleanly
 * with zero extra dependencies. Fires the `case_download` GA4 event.
 */
export function PrintPdfButton({ slug, client }: PrintPdfButtonProps) {
  const t = useTranslations("caseStudies.onePager");

  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("case_download", { slug, client, method: "print" });
        window.print();
      }}
      className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-10px_rgba(241,95,53,0.55)] transition-all hover:bg-brand-400 print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      {t("print")}
    </button>
  );
}