import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./Button";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** One-line trust signal shown directly under the CTAs (A7). */
  trustLine?: string;
}

/**
 * Closing conversion band. Always pairs CTAs with a trust signal directly
 * below (client names + stat summary), framed with the `};` compiled state.
 */
export function CTABand({
  title,
  subtitle,
  primary,
  secondary,
  trustLine,
}: CTABandProps) {
  const t = useTranslations("nav");
  const bookDemo = t("bookDemo");

  return (
    <div className="frame-blueprint relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(45,212,191,0.12),transparent_70%)]"
      />
      <Terminal
        aria-hidden="true"
        className="mx-auto mb-5 h-8 w-8 text-accent-400"
      />
      <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-xl text-balance text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Button
          href={primary?.href ?? "/demo"}
          size="lg"
          data-track="cta_click_demo"
        >
          {primary?.label ?? bookDemo}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Button>
        {secondary ? (
          <Button href={secondary.href} size="lg" variant="secondary">
            {secondary.label}
          </Button>
        ) : null}
      </div>
      {trustLine ? (
        <p className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs text-faint">
          <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
          <span>{trustLine}</span>
        </p>
      ) : null}
    </div>
  );
}
