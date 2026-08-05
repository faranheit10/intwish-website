"use client";

import { useState } from "react";
import { Clock, PiggyBank } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

const FTE_HOURS = 2080;
const DAY_HOURS = 8;

interface ROICalculatorProps {
  intent: "intos" | "intreview";
}

/**
 * "Estimate time saved vs. traditional recruitment" — slider-driven,
 * locale-aware number formatting, ungated. Results framed as compiled
 * `{ hours }` output values.
 */
export function ROICalculator({ intent }: ROICalculatorProps) {
  const t = useTranslations("roi");
  const locale = useLocale();
  const [candidates, setCandidates] = useState(5000);
  const [screenMinutes, setScreenMinutes] = useState(30);
  const [recruiterCost, setRecruiterCost] = useState(25);

  const savedHours = (candidates * screenMinutes) / 60;
  const savedDays = savedHours / DAY_HOURS;
  const savedCost = savedHours * recruiterCost;
  const teams = savedHours / FTE_HOURS;

  const numberLocale =
    locale === "ar" ? "ar" : locale === "fr-CA" ? "fr-CA" : locale === "id-ID" ? "id-ID" : "en-US";
  const nf = new Intl.NumberFormat(numberLocale);
  const currency = t("currency");

  const rangeClass = "w-full cursor-pointer accent-brand-500";
  const labelRow = "mb-3 flex items-center justify-between gap-4";
  const labelClass = "text-sm font-medium text-paper";
  const pillClass =
    "rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs text-brand-400";

  return (
    <div className="frame-blueprint rounded-2xl bg-ink-850 p-6 sm:p-10" data-track="roi_calculator_engage">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Inputs */}
        <div className="space-y-9">
          <div>
            <div className={labelRow}>
              <label htmlFor="roi-candidates" className={labelClass}>
                {t("candidates")}
              </label>
              <span className={pillClass}>
                {nf.format(candidates)} {t("candidatesLabel")}
              </span>
            </div>
            <input
              id="roi-candidates"
              type="range"
              min={500}
              max={50000}
              step={500}
              value={candidates}
              onChange={(e) => setCandidates(Number(e.target.value))}
              className={rangeClass}
            />
          </div>

          <div>
            <div className={labelRow}>
              <label htmlFor="roi-minutes" className={labelClass}>
                {t("screenMinutes")}
              </label>
              <span className={pillClass}>
                {nf.format(screenMinutes)} {t("minutesLabel")}
              </span>
            </div>
            <input
              id="roi-minutes"
              type="range"
              min={5}
              max={240}
              step={5}
              value={screenMinutes}
              onChange={(e) => setScreenMinutes(Number(e.target.value))}
              className={rangeClass}
            />
          </div>

          <div>
            <div className={labelRow}>
              <label htmlFor="roi-cost" className={labelClass}>
                {t("recruiterCost")}
              </label>
              <span className={pillClass}>
                {currency}
                {nf.format(recruiterCost)} {t("currencyLabel")}
              </span>
            </div>
            <input
              id="roi-cost"
              type="range"
              min={5}
              max={150}
              step={5}
              value={recruiterCost}
              onChange={(e) => setRecruiterCost(Number(e.target.value))}
              className={rangeClass}
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-surface flex flex-col items-center justify-center gap-2 bg-ink-900 px-6 py-8 text-center">
            <Clock className="h-6 w-6 text-brand-500" aria-hidden="true" />
            <span className="font-mono text-3xl font-bold tracking-tight text-gradient-teal sm:text-4xl">
              {"{ "}
              {nf.format(Math.round(savedHours))}
              {" }"}
            </span>
            <span className="text-sm text-muted">{t("savedHours")}</span>
          </div>
          <div className="card-surface flex flex-col items-center justify-center gap-2 bg-ink-900 px-6 py-8 text-center">
            <Clock className="h-6 w-6 text-brand-500" aria-hidden="true" />
            <span className="font-mono text-3xl font-bold tracking-tight text-gradient-teal sm:text-4xl">
              {"{ "}
              {nf.format(Math.round(savedDays))}
              {" }"}
            </span>
            <span className="text-sm text-muted">{t("savedDays")}</span>
          </div>
          <div className="card-surface flex flex-col items-center justify-center gap-2 bg-ink-900 px-6 py-8 text-center sm:col-span-2">
            <PiggyBank className="h-6 w-6 text-brand-500" aria-hidden="true" />
            <span className="font-mono text-4xl font-bold tracking-tight text-gradient-teal sm:text-5xl">
              {"{ "}
              {currency}
              {nf.format(Math.round(savedCost))}
              {" }"}
            </span>
            <span className="text-sm text-muted">{t("savedCost")}</span>
          </div>
        </div>
      </div>

      <p className={cn("mt-10 text-center text-sm font-medium text-paper")}>
        {t("teamsNote", { teams: teams.toFixed(1) })}
      </p>
      <div className="mt-6 flex flex-col items-center gap-4">
        <Button href={`/demo?intent=${intent}`} size="lg" data-track="cta_click_roi_pilot">
          {t("bookPilot")}
        </Button>
        <p className="max-w-xl text-center text-xs leading-relaxed text-faint">
          {t("disclaimer")}
        </p>
      </div>
    </div>
  );
}