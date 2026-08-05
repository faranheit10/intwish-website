"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links: {
  href: string;
  key: "products" | "services" | "industries" | "caseStudies" | "insights" | "careers" | "about";
  mega?: "products" | "services";
}[] = [
  { href: "/products", key: "products", mega: "products" },
  { href: "/services", key: "services", mega: "services" },
  { href: "/industries", key: "industries" },
  { href: "/case-studies", key: "caseStudies" },
  { href: "/insights", key: "insights" },
  { href: "/careers", key: "careers" },
  { href: "/about", key: "about" },
];

export function Header() {
  const t = useTranslations("nav");
  const tcommon = useTranslations("common");
  const tmega = useTranslations("megaMenu");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"products" | "services" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeMega) return;
    const close = () => setActiveMega(null);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [activeMega]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 print:hidden",
        scrolled || open || activeMega
          ? "border-b border-line bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Intwish — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.svg"
            alt="Intwish"
            className="h-7 w-auto sm:h-8"
            width={250}
            height={60}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map(({ href, key, mega }) =>
            mega ? (
              <button
                key={href}
                type="button"
                onClick={() => setActiveMega(activeMega === mega ? null : mega)}
                aria-expanded={activeMega === mega}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(href) || activeMega === mega
                    ? "text-brand-400"
                    : "text-muted hover:text-paper"
                )}
              >
                {t(key)}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeMega === mega && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(href) ? "text-brand-400" : "text-muted hover:text-paper"
                )}
              >
                {t(key)}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/demo"
            className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(241,95,53,0.55)] transition-all hover:bg-brand-400 hover:shadow-glow lg:inline-flex"
            data-track="cta_click_header"
          >
            {t("bookDemo")}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu panel */}
      {activeMega ? (
        <div className="hidden border-t border-line bg-ink-950/95 backdrop-blur-xl lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-8 py-8">
            {activeMega === "products" ? (
              <>
                {(["intos", "intreview"] as const).map((key) => (
                  <Link
                    key={key}
                    href={`/products/${key}`}
                    onClick={() => setActiveMega(null)}
                    className="group rounded-2xl border border-line bg-ink-850 p-5 transition-colors hover:border-brand-500/40"
                  >
                    <p className="font-display text-lg font-semibold text-paper">
                      {tmega(`products.${key}.name`)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {tmega(`products.${key}.tagline`)}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
                      {tcommon("learnMore")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                    </p>
                  </Link>
                ))}
                <div className="rounded-2xl border border-dashed border-accent-500/40 bg-accent-500/5 p-5">
                  <p className="flex items-center gap-2 font-mono text-sm text-accent-300">
                    <Terminal className="h-4 w-4" />
                    {tmega("products.sandbox")}
                  </p>
                  <Link
                    href="/products/intos#sandbox"
                    onClick={() => setActiveMega(null)}
                    className="mt-3 inline-flex text-sm font-semibold text-brand-400 hover:text-brand-300"
                  >
                    {tmega("products.trySandbox")} →
                  </Link>
                </div>
              </>
            ) : (
              <>
                {(["training", "recruitment", "engagement", "portals", "feedback", "arVr"] as const).map(
                  (key) => (
                    <Link
                      key={key}
                      href={`/services/${tmega(`services.${key}.slug`)}`}
                      onClick={() => setActiveMega(null)}
                      className="group rounded-2xl border border-line bg-ink-850 p-5 transition-colors hover:border-brand-500/40"
                    >
                      <p className="font-display text-base font-semibold text-paper">
                        {tmega(`services.${key}.name`)}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {tmega(`services.${key}.tagline`)}
                      </p>
                    </Link>
                  )
                )}
              </>
            )}
          </div>
        </div>
      ) : null}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "overflow-hidden border-line transition-all duration-300 lg:hidden",
          open ? "max-h-[36rem] border-t opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {links.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive(href) ? "bg-white/5 text-brand-400" : "text-muted hover:text-paper"
              )}
            >
              {t(key)}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
            data-track="cta_click_mobile"
          >
            {t("bookDemo")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
