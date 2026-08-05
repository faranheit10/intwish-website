"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/analytics";

type Segment = "sales" | "partnership" | "careers" | "general";
type Step = "contact" | "details";
type Status = "idle" | "submitting" | "success" | "error";

interface SegmentedContactFormProps {
  locale: string;
  /** Preselected segment, e.g. from /contact?intent=intos → sales. */
  initialIntent?: string;
}

/**
 * Segmented intake form (CT-01): tabs for Sales / Partnership / Careers /
 * General, each with its own field set, plus partial capture — name + email
 * are collected first, then the details. Posts to /api/contact.
 */
export function SegmentedContactForm({ locale, initialIntent }: SegmentedContactFormProps) {
  const t = useTranslations("contact");
  const td = useTranslations("demo");
  const formRef = useRef<HTMLFormElement>(null);
  const [segment, setSegment] = useState<Segment>(
    initialIntent === "intos" || initialIntent === "intreview"
      ? "sales"
      : "general"
  );
  const [step, setStep] = useState<Step>("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  // Preserve name + email across the step transition (step-1 inputs unmount),
  // so submit in step 2 still carries them via hidden inputs.
  const [capturedName, setCapturedName] = useState("");
  const [capturedEmail, setCapturedEmail] = useState("");

  const segments: Segment[] = ["sales", "partnership", "careers", "general"];

  function chooseSegment(next: Segment) {
    setSegment(next);
    setStep("contact");
    setStatus("idle");
  }

  function continueToDetails() {
    // Read name + email from the live form before the step-1 fields unmount.
    const d = formRef.current ? new FormData(formRef.current) : null;
    const name = String(d?.get("name") ?? "").trim();
    const email = String(d?.get("email") ?? "").trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setMessage(t("requiredEmail"));
      return;
    }
    setCapturedName(name);
    setCapturedEmail(email);
    setStatus("idle");
    setStep("details");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const partnershipType = String(data.get("partnership") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const website = String(data.get("website") ?? ""); // honeypot

    // Step 1 — partial capture: only name + email are required to reveal the
    // rest of the form (reduces friction before asking for details).
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || !name) {
      setStatus("error");
      setMessage(t("requiredEmail"));
      return;
    }

    let body: string;
    if (segment === "careers") {
      body = [notes, role ? `Role / team: ${role}` : ""].filter(Boolean).join("\n");
    } else if (segment === "partnership") {
      body = [notes, partnershipType ? `Type: ${partnershipType}` : ""].filter(Boolean).join("\n");
    } else if (segment === "sales") {
      body = [notes, product ? `Product: ${product}` : ""].filter(Boolean).join("\n");
    } else {
      body = notes;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          subject: segment,
          message: body,
          website,
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: boolean;
      };
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
        trackEvent("form_submit", { form: "contact", outcome: "success", segment });
      } else if (res.status === 503) {
        setStatus("error");
        setMessage(t("notConfigured"));
      } else {
        setStatus("error");
        setMessage(t("error"));
      }
    } catch {
      setStatus("error");
      setMessage(t("error"));
    }
  }

  if (status === "success") {
    return (
      <div className="frame-blueprint flex flex-col items-center gap-4 rounded-2xl bg-ink-850 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-400" aria-hidden="true" />
        <p className="text-lg font-medium text-paper">{t("success")}</p>
        <p className="max-w-md text-sm leading-relaxed text-muted">{t("responseTime")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-paper placeholder:text-faint transition-colors focus:border-brand-500/60 focus:outline-none";

  const tabClass = (active: boolean) =>
    cn(
      "flex-1 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:flex-none",
      active
        ? "border-brand-500 bg-brand-500 text-white"
        : "border-line bg-white/5 text-muted hover:border-brand-500/40 hover:text-paper"
    );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="frame-blueprint rounded-2xl bg-ink-850 p-6 sm:p-8"
      noValidate
    >
      {/* Segment tabs */}
      <div
        role="group"
        aria-label={t("segmentsLabel")}
        className="mb-7 flex flex-wrap gap-2"
      >
        {segments.map((s) => (
          <button
            key={s}
            type="button"
            className={tabClass(segment === s)}
            onClick={() => chooseSegment(s)}
          >
            {t(`segments.${s}`)}
          </button>
        ))}
      </div>

      {/* Honeypot — hidden from humans, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Step 1 — partial capture: name + email first */}
      {step === "contact" ? (
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-paper">
                {t("name")} *
              </label>
              <input id="name" name="name" type="text" required defaultValue={capturedName} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-paper">
                {t("email")} *
              </label>
              <input id="email" name="email" type="email" required defaultValue={capturedEmail} className={inputClass} />
            </div>
          </div>
          {status === "error" ? (
            <p role="alert" className="mt-4 rounded-xl border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-300">
              {message}
            </p>
          ) : null}
          <button
            type="button"
            onClick={continueToDetails}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow"
          >
            {t("continue")}
            <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <div>
          {/* Preserve step-1 partial capture across the transition */}
          <input type="hidden" name="name" value={capturedName} />
          <input type="hidden" name="email" value={capturedEmail} />

          {/* Shared fields for all segments */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-paper">
                {t("company")} <span className="text-faint">({t("optional")})</span>
              </label>
              <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
            </div>

            {segment === "general" ? (
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-paper">
                  {t("phone")} <span className="text-faint">({t("optional")})</span>
                </label>
                <input id="phone" name="phone" type="tel" className={inputClass} />
              </div>
            ) : null}

            {segment === "sales" ? (
              <div>
                <label htmlFor="product" className="mb-2 block text-sm font-medium text-paper">
                  {t("productInterest")}
                </label>
                <select id="product" name="product" className={inputClass}>
                  <option value="intos">{td("intosDemo")}</option>
                  <option value="intreview">{td("intreviewDemo")}</option>
                  <option value="project">{td("project")}</option>
                  <option value="general">{td("general")}</option>
                </select>
              </div>
            ) : null}

            {segment === "partnership" ? (
              <div>
                <label htmlFor="partnership" className="mb-2 block text-sm font-medium text-paper">
                  {t("partnershipType")}
                </label>
                <select id="partnership" name="partnership" className={inputClass}>
                  <option value="reseller">{t("partnershipTypes.reseller")}</option>
                  <option value="integration">{t("partnershipTypes.integration")}</option>
                  <option value="academy">{t("partnershipTypes.academy")}</option>
                  <option value="other">{t("partnershipTypes.other")}</option>
                </select>
              </div>
            ) : null}

            {segment === "careers" ? (
              <div>
                <label htmlFor="role" className="mb-2 block text-sm font-medium text-paper">
                  {t("roleInterest")}
                </label>
                <input id="role" name="role" type="text" className={inputClass} />
              </div>
            ) : null}
          </div>

          <div className="mt-5">
            <label htmlFor="notes" className="mb-2 block text-sm font-medium text-paper">
              {t("message")} *
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={5}
              required
              placeholder={t(`hints.${segment}`)}
              className={inputClass}
            />
          </div>

          {status === "error" ? (
            <p role="alert" className="mt-4 rounded-xl border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-300">
              {message}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              data-track="cta_click_form_submit"
            >
              {status === "submitting" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              )}
              {status === "submitting" ? t("sending") : t("send")}
            </button>
            <button
              type="button"
              onClick={() => setStep("contact")}
              className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-brand-400 hover:underline"
            >
              {t("back")}
            </button>
          </div>
        </div>
      )}

      <p className="mt-6 max-w-md text-xs leading-relaxed text-faint">{t("privacyNote")}</p>
    </form>
  );
}