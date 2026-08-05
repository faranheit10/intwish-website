"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DemoForm } from "./DemoForm";

function DemoFormWithIntentInner() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") ?? undefined;
  return <DemoForm initialIntent={intent} />;
}

/**
 * Reads the `intent` query param (e.g. /demo?intent=intos) entirely on the
 * client so the demo page stays statically generated.
 */
export function DemoFormWithIntent() {
  return (
    <Suspense fallback={<DemoForm />}>
      <DemoFormWithIntentInner />
    </Suspense>
  );
}