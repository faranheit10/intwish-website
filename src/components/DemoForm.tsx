"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const INTENTS = ["intos", "intreview", "project", "general"] as const;
type Intent = (typeof INTENTS)[number];

interface DemoFormProps {
  /** Preselected subject, e.g. from /demo?intent=intos. */
  initialIntent?: string;
}

/**
 * Reduced-friction demo booking form (name + email + company + intent +
 * optional notes) — per Baymard/HubSpot form-field research, fewer fields
 * convert materially better than the full contact form. Posts to /api/contact
 * (MailerSend + honeypot + regional routing already in place).
 */
export function DemoForm({ initialIntent }: DemoFormProps) {
  const t = useTranslations("demo");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [intent, setIntent] = useState<Intent>(
    INTENTS.includes(initialIntent as Intent) ? (initialIntent as Intent) : "general"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const website = String(data.get("website") ?? "");

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setErrorMsg(t("required"));
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          subject: intent,
          message: notes || `Demo request — ${company || intent}`,
          website,
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else if (res.status === 503) {
        setStatus("error");
        setErrorMsg(t("notConfigured"));
      } else {
        setStatus("error");
        setErrorMsg(t("error"));
      }
    } catch {
      setStatus("error");
      setErrorMsg(t("error"));
    }
  }

  if (status === "success") {
    return (
      <div className="frame-blueprint flex flex-col items-center gap-4 rounded-2xl bg-ink-850 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-400" aria-hidden="true" />
        <p className="text-lg font-medium text-paper">{t("success")}</p>
        <p className="max-w-md text-sm leading-relaxed text-muted">{t("successNote")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-paper placeholder:text-faint transition-colors focus:border-brand-500/60 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="frame-blueprint rounded-2xl bg-ink-850 p-6 sm:p-8" noValidate>
      {/* Honeypot — hidden from humans, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-paper">
            {t("name")} *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-paper">
            {t("email")} *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-paper">
          {t("company")} <span className="text-faint">({t("companyOptional")})</span>
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div className="mt-5">
        <label htmlFor="intent" className="mb-2 block text-sm font-medium text-paper">
          {t("intent")}
        </label>
        <select
          id="intent"
          name="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value as Intent)}
          className={inputClass}
        >
          <option value="intos">{t("intosDemo")}</option>
          <option value="intreview">{t("intreviewDemo")}</option>
          <option value="project">{t("project")}</option>
          <option value="general">{t("general")}</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-paper">
          {t("notes")}
        </label>
        <textarea id="notes" name="notes" rows={3} className={inputClass} />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-300">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        data-track="cta_click_demo_submit"
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
        )}
        {status === "submitting" ? t("sending") : t("submit")}
      </button>

      <p className="mt-5 max-w-md text-xs leading-relaxed text-faint">{t("privacy")}</p>
    </form>
  );
}