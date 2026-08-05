import { useTranslations } from "next-intl";
import { clientLogos } from "@/content/site";

interface ClientLogoMarqueeProps {
  /** Shows the "Trusted by enterprise leaders" kicker + stat badges row. */
  enhanced?: boolean;
}

/** Duplicated logo track for a seamless marquee loop. */
export function ClientLogoMarquee({ enhanced = false }: ClientLogoMarqueeProps) {
  const t = useTranslations("trustStrip");
  const track = [...clientLogos, ...clientLogos];

  return (
    <div>
      {enhanced ? (
        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {t("kicker")}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {(["assessed", "years", "markets"] as const).map((key) => (
              <li
                key={key}
                className="rounded-full border border-accent-500/25 bg-accent-500/10 px-4 py-1.5 font-mono text-xs text-accent-300"
              >
                {t(`statBadges.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-6 py-2 hover:[animation-play-state:paused]">
          {track.map((src, i) => (
            // Legacy logo assets have unknown intrinsic sizes — plain <img> is correct here.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-10 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
