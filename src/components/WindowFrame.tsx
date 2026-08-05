import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface WindowFrameProps {
  children: ReactNode;
  /** Window title shown in the macOS-style bar. */
  title?: string;
  className?: string;
  bodyClassName?: string;
}

/**
 * Wraps product screenshots, gameplay videos and demo embeds in a soft
 * macOS window bar (traffic lights + title) with a deep window shadow.
 * Provides the high-end contrast the DESIGN.md cards intentionally avoid.
 */
export function WindowFrame({
  children,
  title,
  className,
  bodyClassName,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line-strong bg-ink-900 shadow-window",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-ink-800 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {title ? (
          <span className="truncate font-mono text-xs text-faint">
            {title}
          </span>
        ) : (
          <span className="flex-1" />
        )}
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}
