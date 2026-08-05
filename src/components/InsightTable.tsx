import type { InsightTable as InsightTableData } from "@/content/insights";
import { insightText } from "@/content/insights";
import type { Locale } from "@/i18n/routing";

/**
 * Renders a data table from an insight section. Tables give AI retrieval
 * systems clean, chunkable rows — and give buyers the numbers at a glance.
 * Styled with the blueprint line tokens so data reads like a compiled report.
 */
export function InsightTable({
  table,
  locale,
}: {
  table: InsightTableData;
  locale: Locale;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-line-strong">
      <figcaption className="border-b border-line bg-ink-850 px-5 py-3 text-sm font-semibold text-paper">
        {insightText(locale, table.caption)}
      </figcaption>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm rtl:text-right">
          <thead>
            <tr className="border-b border-line bg-ink-900">
              {table.headers.map((header, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400"
                >
                  {insightText(locale, header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-line last:border-b-0">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "px-5 py-3 font-medium text-paper"
                        : "px-5 py-3 text-muted"
                    }
                  >
                    {insightText(locale, cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}