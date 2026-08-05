import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Legacy URLs: the en-CA locale was folded back into `en` (the default,
  // unprefixed locale), so 301 old /en-CA/… links to the same page in en —
  // keeps bookmarks, inbound links and previously indexed hreflang URLs alive.
  const { pathname } = request.nextUrl;
  if (pathname === "/en-CA" || pathname.startsWith("/en-CA/")) {
    const rest = pathname.slice("/en-CA".length) || "/";
    return NextResponse.redirect(new URL(rest, request.url), 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except API routes, Next internals, and files with extensions.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
