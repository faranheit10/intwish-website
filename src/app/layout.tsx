import "./globals.css";

/**
 * Pass-through root layout (mirrors the official next-intl example).
 * The real <html>/<body> live in app/[locale]/layout.tsx so they can carry
 * the per-locale `lang`/`dir` attributes while routes stay statically
 * rendered via generateStaticParams + setRequestLocale.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}