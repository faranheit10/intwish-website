import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { localize } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import type { TeamMember } from "@/content/site";

interface TeamGridProps {
  members: TeamMember[];
  locale: Locale;
}

/**
 * Leadership team cards — real headshots, role, bio and LinkedIn.
 * Not a generic stock-photo grid; identity comes first, accent on hover.
 */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function TeamGrid({ members, locale }: TeamGridProps) {
  const t = useTranslations("about");
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {members.map((member, i) => {
        const role = localize(locale, member.role);
        const bio = localize(locale, member.bio);
        return (
          <Reveal key={member.name} staggerIndex={i} as="article">
            <div className="frame-blueprint group flex h-full flex-col rounded-2xl bg-ink-850 p-6 transition-all duration-300 hover:border-brand-500/40 hover:shadow-glow">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="64px"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-semibold tracking-tight text-paper">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-brand-400">{role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{bio}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-xs text-faint">{t("viewLinkedIn")}</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} — LinkedIn`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-brand-500/50 hover:text-brand-400"
                >
                  <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}