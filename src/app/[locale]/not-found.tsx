import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

/**
 * Locale-aware 404. NOTE: Next.js renders this boundary without `params`,
 * so it must not call setRequestLocale — useTranslations resolves the
 * request locale (set by the proxy middleware) automatically.
 */
export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <Section bg="ink" className="flex min-h-[70vh] items-center pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(241,95,53,0.12),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-xl px-5 text-center sm:px-8">
        <p className="font-mono text-7xl font-bold tracking-tight text-gradient-brand sm:text-8xl">
          {t("code")}
        </p>
        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-muted sm:text-lg">{t("body")}</p>
        <div className="mt-9">
          <Button href="/" size="lg" data-track="cta_click_404">
            {t("cta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
