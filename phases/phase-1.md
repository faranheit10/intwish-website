# Phase 1: Foundation + Homepage

## Phase 1 Tasks

- `[/]` **F-01:** Project scaffolding & design system
  - `[ ]` Initialize Next.js 16 project
  - `[ ]` Install dependencies
  - `[ ]` Create DESIGN.md token system (globals.css)
  - `[ ]` Set up fonts (Space Grotesk + Geist Sans/Mono)
  - `[ ]` Configure i18n (4 locales)
  - `[ ]` Migrate message catalogs
  - `[ ]` Migrate content layer
  - `[ ]` Migrate lib utilities
  - `[ ]` Build shared components
  - `[ ]` Migrate & optimize public assets
  - `[ ]` Configure robots, sitemap, manifest
- `[ ]` **H-01:** Homepage

---

## Phase 1 Detailed Specifications

#### TICKET F-01: Project Scaffolding & Design System

**Page ID:** N/A — Foundation
**Phase:** 1 (must complete before any page)
**Priority:** P0 — Blocker for everything

**Objective:** Initialize Next.js 16 project in `intwish-website/`, install dependencies, set up design system, create all shared components, configure i18n, SEO infrastructure, and deployment pipeline.

**Tasks:**
1. `npx -y create-next-app@latest ./` with TypeScript, Tailwind v4, App Router, ESLint
2. Install: `next-intl`, `lucide-react`, `framer-motion` (for choreographed animations — replaces the uniform `Reveal` component)
3. Create `globals.css` with full DESIGN.md token system (§3 above)
4. Import **Space Grotesk** (display) + **Geist Sans/Mono** (body) via `next/font/google` and `next/font/local`
5. Migrate `src/i18n/` routing config (4 locales: en, fr-CA, id-ID, ar)
6. Migrate `messages/` locale files (en.json, fr-CA.json, id-ID.json, ar.json)
7. Migrate `src/content/` data layer (types.ts, site.ts, products.ts, services.ts, caseStudies.ts, insights.ts)
8. Migrate `src/lib/` utilities (seo.ts, schema.tsx, site-url.ts, mailer.ts, analytics.ts, consent.ts, cn.ts)
9. Build all §5 components to DESIGN.md spec
10. Configure `robots.ts`, `sitemap.ts`, `manifest.webmanifest`
11. Migrate `public/` assets — convert all JPG/PNG to WebP, optimize videos
12. Set up `.env.example` with all required environment variables

**Assets needed:**
- ✅ Intwish logo SVG (`img/logo.svg`)
- ✅ Product logos (`website-assets/03-logos-and-brand/product-logos/`)
- ✅ 28 client logos (`website-assets/03-logos-and-brand/client-logos/` — convert to WebP)
- ✅ Team photos (`img/team/1-4.jpg` — convert to WebP)
- ✅ Portfolio images (`img/portfolio/Portfolio1-16.png` — convert to WebP)
- ✅ 6 gameplay videos (`website-assets/04-videos/intos-gameplay/`)
- ✅ OG share cards (`website-assets/05-images/og/`)
- ✅ Favicon + icons (existing in `web/public/`)

**Acceptance criteria:**
- [ ] `npm run build` succeeds with zero errors
- [ ] All 4 locales render correctly
- [ ] RTL (Arabic) layout works
- [ ] All design tokens match DESIGN.md §3
- [ ] Lighthouse performance ≥ 90 on empty page
- [ ] No A2 violations in any component

---

#### TICKET H-01: Homepage

**Page ID:** `/`
**Archetype:** Homepage (A5)
**Phase:** 1
**Priority:** P0

**Objective:** The single most scrutinized page on the site. Must prove in one viewport that Intwish is serious, differentiated, and full-stack — not another generic IT company.

**Layout approach — BREAKS A2 BANNED PATTERN of "centered hero + three cards":**

The homepage uses an **editorial newspaper layout** — asymmetric, content-dense, with clear visual hierarchy. Think Linear's homepage meets a Bloomberg terminal: information-rich but calm.

**Section-by-section specification:**

**1. Navigation Announcement Bar** (top — optional, hideable)
- Content: `[PLACEHOLDER: Announcement — e.g. "🚀 intOS sandbox is live — try it now" or "📍 Now serving Canada & Indonesia"]`
- Teal accent background (`--accent-500` at 10% opacity)
- Dismiss button that sets cookie

**2. Hero — Asymmetric Split (NOT centered)**
- **Left column (55%):**
  - Kicker: `DefineYourWish();` in Geist Mono, brand-400 color, with blinking cursor animation
  - Headline: **"The full-stack talent technology company that builds what point solutions can't."** (Space Grotesk, display-xl)
  - Subtitle: "Gamified assessments, AI-scored interviews, and immersive simulations — built, deployed, and proven across 300,000+ professionals in 5 markets." (Geist Sans, body-lg, muted)
  - Proof line: "Trusted by Bank Alfalah · HBL · PTCL · Shell · K-Electric · Daraz" (mono, xs, faint)
  - Dual CTA: Primary "Book a Demo →" (brand-500 bg) + Secondary "Try intOS sandbox" (ghost outline)
- **Right column (45%):**
  - **Real product UI showcase** — a floating, slightly rotated card showing an actual intOS virtual desktop screenshot (from `product-ui/` assets) with a smaller IntReview AI report screenshot overlapping at an angle
  - Subtle float animation (6s ease-in-out)
  - `[PLACEHOLDER: Need high-quality cropped intOS desktop screenshot showing email simulation + notifications — full virtual OS environment visible. AND IntReview AI candidate report showing STAR scores and evidence quotes]`
- **Background:** Subtle grid pattern (existing `bg-grid` utility), NO gradient orbs. Instead: a single diagonal line of monospace code comments fading into the background at 3% opacity — `// define → build → deploy`

**3. Trust Strip — Animated Logo Marquee**
- Existing `ClientLogoMarquee` component — **enhanced with:**
  - Logos in grayscale, colorize on hover
  - "Trusted by enterprise leaders across 5 markets" kicker
  - Below: stat badges inline — "300,000+ assessed" · "10+ years" · "5 markets"
- Uses 28 real client logos (converted to WebP)

**4. Product Suite Overview — Bento Grid (NOT three cards)**
- **Layout:** 2-column bento grid, NOT identical cards
  - **intOS card (larger, 60% width):** Real virtual OS screenshot embedded, "Experience the OS →" CTA, module icons (email, messenger, meeting, games) floating along the edge, key metric "25,000+ in one drive"
  - **IntReview card (40% width):** Real AI report screenshot, "See AI scoring in action →" CTA, key metric "~80% less review time"
  - Each card has a distinctive background treatment — intOS uses the grid pattern, IntReview uses a subtle data-visualization motif
- Kicker: `const products = compile(`
- Section heading: "Two products. One stack. Zero vendor sprawl."

**5. Services Band — Horizontal Scroll on Mobile, Grid on Desktop**
- Framing: "The engineering capability behind the products above"
- 6 service cards in a 3×2 grid (desktop) or horizontal scroll (mobile)
- Each card: icon + title + one-line tagline + "→" link to service detail
- NOT full descriptions — this is navigation, not content
- Kicker: `const services = deploy(`

**6. Case Study Spotlight — Featured 3**
- Layout: **One hero-sized featured case study** (full width, with headline metric + client name + read more) + **two smaller cards** below
- Featured: Bank Alfalah training (7,000+ employees) — most impressive scale number
- Secondary: PTCL recruitment (25,000+) + SBC Knowledge Gate (Saudi government)
- `[PLACEHOLDER: Each case study needs a hero image — ideally a screenshot or visual from the actual project. For now, use portfolio images from img/portfolio/]`
- CTA: "See all 16 case studies →"

**7. Stats Band — Animated Counter**
- Full-width band with teal accent gradient background
- 4 stats counting up on intersection:
  - **300,000+** professionals assessed
  - **7,000+** employees in a single training drive
  - **25,000** candidates in one recruitment drive
  - **20** pages of automated 360° reports
- Geist Mono for numbers, Space Grotesk for labels
- Kicker: `return {`

**8. Science & Methodology Teaser**
- Asymmetric two-column: text left, visual right
- Headline: "Grounded in science, not just gamification"
- Body: Brief mention of SJT validity, psychometric game-based assessment, I/O psychology research
- `[PLACEHOLDER: Need specifics on Faran's AKU academic research appointment — this is a genuine credibility asset. Add details about psychometric validation studies, cross-national research, and any published papers or academic affiliations]`
- CTA: "Read our methodology →" (links to `/science`)

**9. Compliance & Trust Band**
- Horizontal badge row: PIPEDA · PDP Law · GDPR-ready · PDPL · ISO/SOC2 roadmap
- Adjacent to CTA — per A7 conversion research
- Shield icons with certification names

**10. Closing CTA Band**
- Headline: "DefineYourWish(); — let's build yours."
- Dual CTA: "Book a Demo" + "Try the intOS sandbox"
- Trust signal row immediately below: client names + stat summary
- Kicker: `}; // compiled and ready`

**Content needed:**
- ✅ All stat numbers (confirmed in credentials doc)
- ✅ Client names + logos (28 logos exist)
- ✅ Product descriptions (existing in products.ts)
- ✅ Service names + taglines (existing in services.ts)
- ✅ Case study data (existing in caseStudies.ts)
- `[PLACEHOLDER: Hero product screenshots — need fresh captures of intOS desktop and IntReview AI report at high resolution (2x/retina)]`
- `[PLACEHOLDER: Science/methodology specifics — Faran's academic credentials, published research, psychometric validation data]`

**Cross-links:** /products, /products/intos, /products/intreview, /services, /case-studies, /demo, /science, /trust, /about

**Acceptance criteria:**
- [ ] NO centered hero + three cards pattern
- [ ] Real product UI visible above the fold
- [ ] All stats are real (from credentials doc)
- [ ] No fabricated testimonials or numbers
- [ ] Passes A2 anti-slop checklist fully
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Mobile layout is equally compelling (not degraded)
- [ ] All CTAs have adjacent trust signals
