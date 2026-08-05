import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Bg = "ink" | "ink-900" | "ink-850" | "glow" | "glow-teal";

const bgMap: Record<Bg, string> = {
  ink: "bg-ink-950",
  "ink-900": "bg-ink-900",
  "ink-850": "bg-ink-850",
  glow: "bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950",
  "glow-teal":
    "bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950",
};

interface SectionProps {
  children: ReactNode;
  bg?: Bg;
  className?: string;
  id?: string;
}

export function Section({ children, bg = "ink", className, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-28", bgMap[bg], className)}>
      {children}
    </section>
  );
}
