import { DefineWishKicker } from "./DefineWishKicker";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  /** Teal accent for "compiled / deployed" sections (ROI, results). */
  teal?: boolean;
  /** Center-aligns the block (only for genuinely symmetric bands). */
  center?: boolean;
  className?: string;
  as?: "h2" | "h3";
}

/**
 * Standardized section heading — kicker + display title + optional lead.
 * NOT the banned icon-above-heading pattern; the kicker carries the motif.
 */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  teal = false,
  center = false,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <Reveal variant="fade-up">
        <DefineWishKicker color={teal ? "teal" : "brand"} className={cn(center && "flex justify-center")}>
          {kicker}
        </DefineWishKicker>
      </Reveal>
      <Reveal variant="fade-up" delay={0.05}>
        <Tag className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {title}
        </Tag>
      </Reveal>
      {subtitle ? (
        <Reveal variant="fade-up" delay={0.1}>
          <p className={cn("mt-4 leading-relaxed text-muted sm:text-lg", center && "mx-auto max-w-2xl")}>
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
