"use client";

import { Play } from "lucide-react";
import { WindowFrame } from "./WindowFrame";
import { trackEvent } from "@/lib/analytics";

interface GameVideoProps {
  src: string;
  name: string;
  description?: string;
  /** Custom title shown in the window bar (defaults to the game name). */
  windowTitle?: string;
}

/**
 * intOS psychometric-game recording framed as a product window.
 * Native <video> controls live in shadow DOM, so play tracking uses onPlay.
 */
export function GameVideo({ src, name, description, windowTitle }: GameVideoProps) {
  return (
    <figure className="group transition-transform duration-500 hover:-translate-y-1">
      <WindowFrame
        title={windowTitle ?? name}
        bodyClassName="bg-ink-900"
        className="transition-colors group-hover:border-brand-500/40"
      >
        <video
          src={src}
          controls
          preload="none"
          playsInline
          onPlay={() => trackEvent("video_play", { game: name })}
          className="aspect-video w-full bg-ink-900"
        />
      </WindowFrame>
      <figcaption className="mt-3 flex items-center justify-between gap-3 px-1">
        <span className="text-sm font-semibold text-paper">{name}</span>
        <Play className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
      </figcaption>
      {description ? (
        <p className="mt-1 px-1 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
    </figure>
  );
}