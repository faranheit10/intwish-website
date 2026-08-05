"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Lock, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

interface GatedResourceFormProps {
  locale: string;
  /** Post slug, sent with the lead so the sales team knows the resource. */
  resource: string;
  /** Reveals the gated body after a successful submission. */
  onUnlocked: () => void;
}

/**
 * Email-capture gate for gated insights (benchmark report, whitepapers).
 * Posts to /api/lead (MailerSend-backed, same hardening as /api/contact).
 */
export function GatedResourceForm({ locale, resource, onUnlocked }: GatedResourceFormProps) {
  const t = useTranslations("insights.gate");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      resource,
      website: String(data.get("website") ?? ""), // honeypot
      locale,
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setMessage(t("required"));
      trackEvent("form_submit", { form: "gate", outcome: "invalid", resource });
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: boolean;
      };
      if (res.ok && json.success) {
        setStatus("success");
        onUnlocked();
        trackEvent("form_submit", { form: "gate", outcome: "success", resource });
      } else if (res.status === 503) {
        setStatus("error");
        setMessage(t("notConfigured"));
        trackEvent("form_submit", { form: "gate", outcome: "error", reason: "not_configured", resource });
      } else {
        setStatus("error");
        setMessage(t("error"));
        trackEvent("form_submit", { form: "gate", outcome: "error", resource });
      }
    } catch {
      setStatus("error");
      setMessage(t("error"));
      trackEvent("form_submit", { form: "gate", outcome: "error", reason: "network", resource });
    }
  }

  if (status === "success") {
    return (
      <div className="frame-blueprint flex flex-col items-center gap-4 rounded-2xl bg-ink-850 p-8 text-center sm:p-10">
        <CheckCircle2 className="h-10 w-10 text-accent-400" aria-hidden="true" />
        <p className="text-lg font-medium text-paper">{t("success")}</p>
        <p className="max-w-md text-sm text-muted">{t("successNote")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-paper placeholder:text-faint transition-colors focus:border-brand-500/60 focus:outline-none";

  return (
    <form
      onSubmit={onSubmit}
      className="frame-blueprint relative overflow-hidden rounded-2xl bg-ink-850 p-6 sm:p-8"
      noValidate
    >
      <div aria-hidden="true" className="bg-grid-dense absolute inset-0 opacity-40" />
      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand-400">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          {t("kicker")}
        </p>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-paper sm:text-2xl">
          {t("title")}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t("subtitle")}</p>

        {/* Honeypot — hidden from humans, tempting for bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-name" className="mb-2 block text-sm font-medium text-paper">
              {t("name")} *
            </label>
            <input id="lead-name" name="name" type="text" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="lead-email" className="mb-2 block text-sm font-medium text-paper">
              {t("email")} *
            </label>
            <input id="lead-email" name="email" type="email" required className={inputClass} />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="lead-company" className="mb-2 block text-sm font-medium text-paper">
            {t("company")}
          </label>
          <input id="lead-company" name="company" type="text" className={inputClass} />
        </div>

        {status === "error" ? (
          <p role="alert" className="mt-4 rounded-xl border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-300">
            {message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
          data-track="cta_click_gate_submit"
        >
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          )}
          {status === "submitting" ? t("sending") : t("submit")}
        </button>

        <p className="mt-4 text-xs leading-relaxed text-faint">{t("privacy")}</p>
      </div>
    </form>
  );
}