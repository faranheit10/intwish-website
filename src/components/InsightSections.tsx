import type { InsightSection } from "@/content/insights";
import { insightText } from "@/content/insights";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";
import { InsightTable } from "./InsightTable";

/**
 * Renders an insight's full body. Used for both gated (inside the blur-lock,
 * so the text ships in the initial HTML for crawlers) and ungated posts.
 */
export function InsightSections({
  sections,
  locale,
  animate = false,
}: {
  sections: InsightSection[];
  locale: Locale;
  animate?: boolean;
}) {
  const renderSection = (section: InsightSection) => (
    <section>
      <span
        aria-hidden="true"
        className="mb-2 inline-block h-px w-10 bg-brand-500/50"
      />
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
        {insightText(locale, section.heading)}
      </h2>
      <div className="mt-5 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph.en}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            {insightText(locale, paragraph)}
          </p>
        ))}
      </div>
      {section.table ? <InsightTable table={section.table} locale={locale} /> : null}
    </section>
  );

  return (
    <div className="space-y-12">
      {sections.map((section, i) =>
        animate ? (
          <Reveal key={section.heading.en} delay={i * 60}>
            {renderSection(section)}
          </Reveal>
        ) : (
          <div key={section.heading.en}>{renderSection(section)}</div>
        )
      )}
    </div>
  );
}