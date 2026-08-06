import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { ConsentManager } from "@/components/ConsentManager";
import { ChatWidget } from "@/components/ChatWidget";
import { BackToTop } from "@/components/BackToTop";

import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { company, team } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Intwish — The Full-Stack Talent Technology Company",
    template: "%s",
  },
  description:
    "Gamified assessments, AI-scored interviews and immersive simulations — built, deployed and proven across 300,000+ professionals in 5 markets.",
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
};

const ORG_ID = `${SITE_URL}/#organization`;

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Intwish",
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.svg`,
      slogan: "DefineYourWish();",
      foundingDate: "2015",
      email: company.email,
      telephone: company.phones.dubai,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite 1702, Level 17, Boulevard Plaza Tower 1",
        addressLocality: "Dubai",
        addressRegion: "Downtown Dubai",
        postalCode: "PO Box 415049",
        addressCountry: "AE",
      },
      areaServed: ["PK", "AE", "SA", "CA", "ID"],
      sameAs: [company.socials.linkedin, company.socials.facebook],
      founder: team.map((member) => ({
        "@id": `${SITE_URL}/#person-${member.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      })),
      brand: { "@type": "Brand", name: "Intwish" },
    },
    ...team.map((member) => ({
      "@type": "Person",
      "@id": `${SITE_URL}/#person-${member.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      name: member.name,
      jobTitle: member.role.en,
      worksFor: { "@id": ORG_ID },
      sameAs: [member.linkedin],
    })),
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#intos`,
      name: "intOS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Application",
      description:
        "A virtual-OS assessment platform that simulates the working world — email simulations, team messenger, situational-judgement meetings, psychometric games and an interlinked narrative engine.",
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#intreview`,
      name: "IntReview",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Application",
      description:
        "An advanced, AI-powered video interview application and gamified cognitive assessment platform designed for enterprise talent acquisition and high-volume training.",
      provider: { "@id": ORG_ID },
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering (generateStaticParams above).
  setRequestLocale(locale);
  const isRtl = locale === "ar";
  const tcommon = await getTranslations({ locale, namespace: "common" });

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {/* Marks JS availability so scroll-reveal content stays visible without JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
          >
            {tcommon("skipToContent")}
          </a>
          <Analytics />
          <ConsentManager />
          <ChatWidget />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
          <StickyMobileCTA />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}