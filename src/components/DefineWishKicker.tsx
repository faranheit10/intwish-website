import { cn } from "@/lib/cn";

interface DefineWishKickerProps {
  children: React.ReactNode;
  className?: string;
  /** Shows the blinking terminal cursor after the text. */
  cursor?: boolean;
  color?: "brand" | "teal" | "muted";
}

const colors = {
  brand: "text-brand-400",
  teal: "text-accent-400",
  muted: "text-faint",
};

/**
 * The `DefineYourWish();` motif — monospace kicker that anchors the
 * define → build → deploy spine. Serves as the section kicker everywhere.
 */
export function DefineWishKicker({
  children,
  className,
  cursor = false,
  color = "brand",
}: DefineWishKickerProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.8125rem] font-medium tracking-wide",
        colors[color],
        cursor && "cursor-blink",
        className
      )}
    >
      {children}
    </p>
  );
}
