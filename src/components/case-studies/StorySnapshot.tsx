import { Target, Lightbulb, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export interface SnapshotSolution {
  label: string;
  /** Provenance / lineage note — e.g. "predates intOS". */
  note?: string;
}

export interface SnapshotMetric {
  value: string;
  label: string;
}

export interface StorySnapshotProps {
  challengeLabel: string;
  challenge: string;
  solutionLabel: string;
  solution: SnapshotSolution[];
  outcomeLabel: string;
  outcome: SnapshotMetric[];
}

function SnapshotCard({
  icon,
  kicker,
  title,
  children,
  accent = "brand",
}: {
  icon: ReactNode;
  kicker: string;
  title: string;
  children: ReactNode;
  accent?: "brand" | "teal";
}) {
  return (
    <div
      className={
        "frame-blueprint flex h-full flex-col rounded-2xl bg-ink-850 p-6 " +
        (accent === "teal"
          ? "hover:border-accent-500/40"
          : "hover:border-brand-500/40")
      }
    >
      <span
        className={
          "inline-flex h-10 w-10 items-center justify-center rounded-lg border " +
          (accent === "teal"
            ? "border-accent-500/30 bg-accent-500/10 text-accent-400"
            : "border-brand-500/30 bg-brand-500/10 text-brand-400")
        }
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
        {kicker}
      </p>
      <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-paper">
        {title}
      </h2>
      <div className="mt-4 flex-1">{children}</div>
    </div>
  );
}

/**
 * Story Snapshot — the above-the-fold Challenge → Solution → Outcome strip.
 * This is the validated research-backed pattern: a busy evaluator reads these
 * three cards before deciding whether to scroll into the full narrative.
 */
export function StorySnapshot({
  challengeLabel,
  challenge,
  solutionLabel,
  solution,
  outcomeLabel,
  outcome,
}: StorySnapshotProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Reveal variant="fade-up" as="article">
        <SnapshotCard
          icon={<Target className="h-5 w-5" />}
          kicker="challenge"
          title={challengeLabel}
        >
          <p className="text-sm leading-relaxed text-muted">{challenge}</p>
        </SnapshotCard>
      </Reveal>

      <Reveal variant="fade-up" delay={0.05} as="article">
        <SnapshotCard
          icon={<Lightbulb className="h-5 w-5" />}
          kicker="solution"
          title={solutionLabel}
        >
          <ul className="space-y-2">
            {solution.map((item) => (
              <li key={item.label} className="text-sm leading-relaxed text-paper">
                <span className="me-2 text-brand-400" aria-hidden="true">
                  ▸
                </span>
                {item.label}
                {item.note ? (
                  <span className="mt-1 block ps-4 font-mono text-xs text-accent-300">
                    {item.note}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </SnapshotCard>
      </Reveal>

      <Reveal variant="fade-up" delay={0.1} as="article">
        <SnapshotCard
          icon={<BarChart3 className="h-5 w-5" />}
          kicker="outcome"
          title={outcomeLabel}
          accent="teal"
        >
          <ul className="space-y-3">
            {outcome.map((metric) => (
              <li
                key={metric.label}
                className="flex items-baseline justify-between gap-3 border-b border-line/60 pb-2 last:border-0 last:pb-0"
              >
                <span className="font-mono text-xl font-bold tracking-tight text-gradient-teal">
                  {"{ "}
                  {metric.value}
                  {" }"}
                </span>
                <span className="text-right text-xs leading-snug text-muted">
                  {metric.label}
                </span>
              </li>
            ))}
          </ul>
        </SnapshotCard>
      </Reveal>
    </div>
  );
}