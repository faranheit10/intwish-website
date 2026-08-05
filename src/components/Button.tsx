import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_10px_30px_-10px_rgba(241,95,53,0.55)] hover:bg-brand-400 hover:shadow-glow active:translate-y-px",
  secondary:
    "border border-line-strong bg-white/5 text-paper backdrop-blur hover:border-brand-500/50 hover:bg-white/10 active:translate-y-px",
  ghost: "text-paper hover:text-brand-300",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Link-styled button that stays locale-aware (next-intl Link). */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out",
        sizes[size],
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
