"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SegmentedContactForm } from "./SegmentedContactForm";

function SegmentedContactFormWithIntentInner({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") ?? undefined;
  return <SegmentedContactForm locale={locale} initialIntent={intent} />;
}

/**
 * Reads the `intent` query param (e.g. /contact?intent=intos) entirely on the
 * client so the contact page stays statically generated.
 */
export function SegmentedContactFormWithIntent({ locale }: { locale: string }) {
  return (
    <Suspense fallback={<SegmentedContactForm locale={locale} />}>
      <SegmentedContactFormWithIntentInner locale={locale} />
    </Suspense>
  );
}