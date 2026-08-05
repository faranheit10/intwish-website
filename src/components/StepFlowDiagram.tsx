import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export interface FlowStep {
  icon: ReactNode;
  title: string;
  body: string;
}

interface StepFlowDiagramProps {
  steps: FlowStep[];
  className?: string;
}

/**
 * Horizontal step flow with connecting lines and monospace step numbers —
 * used for the IntReview candidate flow (Invite → Record → Review → Decide).
 * NOT a generic icon row: steps are joined by animated connectors.
 */
export function StepFlowDiagram({ steps, className }: StepFlowDiagramProps) {
  return (
    <ol className={className ?? "grid gap-6 lg:grid-cols-4"}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <Reveal key={step.title} as="li" staggerIndex={i} className="relative">
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  {step.icon}
                </span>
                <span className="font-mono text-sm font-bold text-accent-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Connector line to the next step */}
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="absolute start-24 top-6 hidden h-px w-[calc(100%-7rem)] bg-line-strong lg:block"
                />
              ) : null}
              <div className="mt-4">
                <h3 className="text-base font-semibold tracking-tight text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}