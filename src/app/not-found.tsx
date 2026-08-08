import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Intwish",
  robots: { index: false, follow: false },
};

/**
 * Root 404 Page.
 * Rendered when a route cannot be found outside of the localized layout.
 */
export default function RootNotFound() {
  return (
    <html lang="en" className="h-full bg-[#0b0d10] text-[#f3f4f6]">
      <body className="flex min-h-full flex-col items-center justify-center p-6 text-center font-sans antialiased">
        <div className="relative mx-auto max-w-md">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(241,95,53,0.15),transparent_70%)] blur-2xl"
          />
          <div className="relative z-10">
            <p className="font-mono text-7xl font-bold tracking-tight text-[#f15f35] sm:text-8xl">
              404
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-[#f3f4f6] sm:text-3xl">
              Page Not Found
            </h1>
            <p className="mt-3 text-sm text-[#9ca3af] leading-relaxed">
              The requested URL could not be found. Check the web address or navigate back to our main products.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#f15f35] px-6 py-2.5 text-sm font-semibold text-[#0b0d10] transition hover:bg-[#ff7a54] focus:outline-none focus:ring-2 focus:ring-[#f15f35] focus:ring-offset-2 focus:ring-offset-[#0b0d10]"
              >
                Go to Home
              </Link>
              <Link
                href="/products/intreview"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#2d3748] bg-[#141820] px-6 py-2.5 text-sm font-semibold text-[#f3f4f6] transition hover:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                IntReview Product Page
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
