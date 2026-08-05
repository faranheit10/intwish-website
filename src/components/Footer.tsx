import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { company } from "@/content/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const complianceBadges = ["pipeda", "pdp", "gdpr", "pdpl"] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tcomp = useTranslations("compliance");
  const tc = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-950 print:hidden">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.svg"
              alt="Intwish"
              className="h-7 w-auto"
              width={250}
              height={60}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {t("blurb")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("linkedin")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-brand-500/50 hover:text-brand-400"
              >
                <BrandIcon name="linkedin" className="h-4 w-4" />
              </a>
              <a
                href={company.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("facebook")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-brand-500/50 hover:text-brand-400"
              >
                <BrandIcon name="facebook" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              {t("explore")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {(
                [
                  ["/about", "about"],
                  ["/services", "services"],
                  ["/case-studies", "caseStudies"],
                  ["/insights", "insights"],
                  ["/science", "science"],
                  ["/contact", "contact"],
                ] as const
              ).map(([href, key]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted transition-colors hover:text-brand-400"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              {t("productsTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/products/intos" className="text-muted transition-colors hover:text-brand-400">
                  {t("intos")}
                </Link>
              </li>
              <li>
                <Link href="/products/intreview" className="text-muted transition-colors hover:text-brand-400">
                  {t("intreview")}
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-muted transition-colors hover:text-brand-400">
                  {t("security")}
                </Link>
              </li>
            </ul>
            {/* Compliance badges per locale */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {complianceBadges.map((key) => (
                <li
                  key={key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/5 px-2.5 py-1 text-[0.7rem] text-faint"
                >
                  <ShieldCheck className="h-3 w-3 text-accent-400" aria-hidden="true" />
                  {tcomp(`items.${key}.name`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              {t("contactTitle")}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={`mailto:${company.email}`} className="hover:text-brand-400">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="space-y-0.5">
                  <span className="block">{company.phones.dubai}</span>
                  <span className="block">{company.phones.karachi}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="max-w-[16rem]">{tc("dubaiAddress")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {year} Intwish. {t("rights")}
          </p>
          <p className="text-xs text-faint">{t("regions")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-faint">
            <Link href="/privacy" className="transition-colors hover:text-brand-400">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-400">
              {t("terms")}
            </Link>
            <Link href="/trust" className="transition-colors hover:text-brand-400">
              {t("security")}
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
