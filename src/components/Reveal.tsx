"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Choreographed scroll-reveal — replaces the old uniform fade-up.
 *
 * Every usage picks a motion vocabulary (not one default):
 *  - fade-up      : default for stacked prose
 *  - slide-start  : items on the start edge slide inward
 *  - slide-end    : items on the end edge slide inward
 *  - scale        : hero elements / key visuals scale from 0.95
 *  - none         : static (for things that should never move)
 *
 * Always read the no-JS fallback in globals.css — content stays visible.
 */

type Variant = "fade-up" | "slide-start" | "slide-end" | "scale" | "none";

const variants: Record<Variant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
  "slide-start": {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
  "slide-end": {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  /** Delays siblings in a stagger cascade (i * 80ms). */
  staggerIndex?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  staggerIndex,
  className,
  as = "div",
}: RevealProps) {
  const transition = {
    delay: (staggerIndex ?? 0) * 0.08 + delay,
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const componentMap = {
    div: motion.div,
    section: motion.section,
    li: motion.li,
    article: motion.article,
    figure: motion.figure,
  } as const;
  const Component = componentMap[as];

  return (
    <Component
      data-reveal
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
      className={cn("will-change-transform", className)}
    >
      {children}
    </Component>
  );
}
