# Intwish Website Revamp — Gold Standard Implementation Plan

**Version:** 2.0 · **Date:** 2026-08-05 · **Status:** Awaiting Approval

---

## 0. Planning Agent Summary

I have audited both repositories (`c:\GitHub\intwish` — the old site + assets, and `c:\GitHub\intwish-website` — the new workspace), the `Prompt.md` brief (Part A/B/C), the existing dev site at `web/`, all 16 case studies, the asset inventory, competitor research, and bleeding-edge design trends for 2026. This plan is the output.

> [!IMPORTANT]
> **The new site will be built in `c:\GitHub\intwish-website`** as a fresh Next.js 16 project. All reusable assets, content data, and locale files from the old `intwish/web/` codebase will be migrated — not copied blindly. The old repo's design system (Tailwind v4, `globals.css` tokens, component library) gives us a massive head start, but every component must be rebuilt to pass the anti-slop audit (A2).

---

## 1. Positioning Decision

**Primary narrative: Blend of options 1 + 3 from A3.**

> *Intwish is a full-stack talent technology partner that owns every layer of the stack — gamified assessment (intOS), AI interview/proctoring (IntReview), gamified LMS, and the custom engineering capability that built all three. The tagline `DefineYourWish():` becomes the site's structural spine: visitors define a problem → Intwish compiles the solution → deployed results follow. This function-signature motif runs as a subtle "define → build → deploy" narrative arc across every page, expressed through monospace type accents, terminal-inspired UI flourishes, and a "compiled output" visual language for results/metrics — not as a gimmick, but as brand-authentic design DNA given the tagline already reads like code.*

**Why this blend wins:**
- **Option 1** (product-suite-led) lets the products be the proof of engineering depth — which is the strongest trust signal for enterprise buyers ("if they built intOS and IntReview themselves, they can build for us").
- **Option 3** (`DefineYourWish():`) gives the site a distinctive structural device that no competitor uses. It unifies 33+ pages under one narrative arc instead of each page improvising its own story.
- **Option 2** (services-led) is demoted because every generic IT company claims services. Products are the differentiator. Services are positioned as "the engineering capability behind the products above."

---

## 2. Current-State Audit

### 2.1 Existing Dev Site (Next.js build in `intwish/web/`)

The old dev build is **substantial** — not a throwaway. It has:

| Asset | Status | Migration Action |
|---|---|---|
| **Stack**: Next.js 16.2 + React 19 + Tailwind v4 + next-intl 4 | ✅ Correct stack | Replicate in new repo |
| **4 locales** (en, fr-CA, id-ID, ar with RTL) | ✅ Working | Migrate locale files |
| **39 components** | ⚠️ Functional but violates A2 (uniform fade-up, centered hero, icon-card pattern repeats) | Rebuild per DESIGN.md |
| **16 case studies** (localized, quantified) | ✅ Content gold | Migrate content layer directly |
| **6 service detail pages** (localized) | ✅ Content exists | Migrate content, rebuild templates |
| **Products: intOS (588 LOC) + IntReview** | ✅ Rich pages | Migrate content, redesign layout |
| **Design tokens** (`globals.css`) | ⚠️ Good foundation (ink scale, brand orange, motion) but needs extension | Evolve into full DESIGN.md |
| **SEO infrastructure** | ✅ Excellent (hreflang, sitemap, JSON-LD, robots) | Migrate patterns |
| **11 insight articles** | ✅ Content exists | Migrate |
| **Consent manager, analytics, chat** | ✅ Working | Migrate |
| **OSSandbox, ROI Calculator, DemoForm** | ✅ Interactive components | Migrate + enhance |
| **messages/en.json** (53KB) | ✅ Massive copy asset | Migrate |

### 2.2 Old Legacy Site (`intwish/index.php`)

Single-page PHP site, 2018-era Bootstrap template. **No code to salvage**, but valuable assets:

| Asset | Location | Status |
|---|---|---|
| 28 client logos (JPG) | `img/logos/1-28.jpg` | ✅ Migrate — convert to WebP/SVG |
| 16 portfolio PNGs (unoptimized) | `img/portfolio/` | ✅ Migrate — compress to WebP |
| 4 team photos | `img/team/` | ✅ Migrate |
| Hero background | `img/header-bg.jpg` (930KB) | ⚠️ Too heavy — regenerate |
| Intwish logo SVG | `img/logo.svg` | ✅ Migrate |
| 6 intOS gameplay videos | `website-assets/04-videos/intos-gameplay/` | ✅ Migrate |
| 7 real product UI screenshots | `website-assets/02-screenshots/product-ui/` | ✅ Migrate |
| 13 marketing site screenshots | `website-assets/02-screenshots/marketing-site/` | ✅ Reference only |
| OG share cards (1200×630) | `website-assets/05-images/og/` | ✅ Migrate |
| Product logos (intOS SVG, IntReview PNG) | `website-assets/03-logos-and-brand/product-logos/` | ✅ Migrate |

### 2.3 What the Existing Build Does Well (Keep)

1. **Content layer architecture** — `Localized<T>` types, `localize()` helper, message catalogs — this is excellent and CMS-swap-ready
2. **SEO infrastructure** — per-locale `generateMetadata`, reciprocal hreflang, JSON-LD, sitemap generation
3. **Form architecture** — MailerSend integration, honeypot, rate limiting, intent-based routing
4. **Consent management** — GDPR/PIPEDA-compliant cookie banner with granular controls
5. **intOS sandbox embed** — OSSandbox component with env-configurable demo URL
6. **ROI calculator** — interactive time-saved estimator

### 2.4 What the Existing Build Does Wrong (A2 Violations to Fix)

| A2 Violation | Where | Fix |
|---|---|---|
| **Uniform fade-up on scroll** on every element | `Reveal` component used identically everywhere | Replace with choreographed, varied motion vocabulary (stagger, slide-in, parallax, scale-up) |
| **Centered hero + three icon feature cards** pattern | Homepage, all product pages, service pages | Design unique hero layouts per archetype; break card grids |
| **Single oversized icon above section headings** | `SectionHeader` + `FeatureCard` pattern | Remove icon-above-heading pattern; use asymmetric layouts |
| **Lucide icons used as-is** | All 39 components | Develop custom icon set or heavily customize |
| **No real product UI on homepage hero** | Homepage shows only text + abstract gradients | Add real intOS/IntReview screenshots to hero |
| **Dark + orange gradient orbs** | Multiple pages have `bg-brand-500/10 blur-3xl` orbs | Replace with intentional, non-generic decorative elements |
| **No distinctive layout POV** | Every page follows same centered-content structure | Create unique compositions per archetype |

---

## 3. DESIGN.md — Token System

### 3.1 Typography

| Role | Font | Rationale |
|---|---|---|
| **Display / Headlines** | **Space Grotesk** (Google Fonts) | Geometric, tech-forward, distinctive character shapes — avoids Inter/Geist sameness. Strong personality at large sizes. |
| **Body / UI** | **Geist Sans** (already in use) | Clean, proven, excellent rendering at small sizes. Keeps engineering alignment with intOS/IntReview. |
| **Monospace / Code accents** | **Geist Mono** (already in use) | Powers the `DefineYourWish():` motif. Used for kickers, stat values, the "define → build → deploy" spine. |
| **Arabic** | **Noto Sans Arabic** (already in use) | Maintains RTL quality |

**Type scale (rem, 16px base):**

| Token | Size | Weight | Usage |
|---|---|---|---|
| `--text-display-xl` | 4.5rem / 72px | 700 | Homepage hero only |
| `--text-display-lg` | 3.5rem / 56px | 700 | Product page heroes |
| `--text-display` | 2.75rem / 44px | 600 | Section headings |
| `--text-heading-lg` | 2rem / 32px | 600 | Sub-headings |
| `--text-heading` | 1.5rem / 24px | 600 | Card titles |
| `--text-body-lg` | 1.125rem / 18px | 400 | Lead paragraphs |
| `--text-body` | 1rem / 16px | 400 | Body copy |
| `--text-small` | 0.875rem / 14px | 400 | Captions, metadata |
| `--text-xs` | 0.75rem / 12px | 500 | Badges, labels |
| `--text-mono` | 0.8125rem / 13px | 500 | Code-style accents |

### 3.2 Color System

**Keep the existing ink + brand orange scale — it's distinctive and not the banned purple-to-blue.**

| Token | Value | Usage |
|---|---|---|
| **Ink scale** | | |
| `--ink-950` | `#0B0D10` | Page background |
| `--ink-900` | `#0E1115` | Elevated surface 1 |
| `--ink-850` | `#12161B` | Elevated surface 2 (cards) |
| `--ink-800` | `#171C22` | Elevated surface 3 |
| `--ink-700` | `#1F252E` | Borders, dividers |
| `--ink-600` | `#2A313B` | Muted UI elements |
| `--ink-500` | `#39414D` | Disabled state |
| **Brand orange** | | |
| `--brand-700` | `#C23E1C` | Dark CTA hover |
| `--brand-600` | `#E04C24` | Active/pressed state |
| `--brand-500` | `#F15F35` | Primary CTA, accents |
| `--brand-400` | `#F57A52` | Links, interactive text |
| `--brand-300` | `#F9966F` | Highlights, gradients |
| **NEW: Accent teal** | | |
| `--accent-500` | `#2DD4BF` | Secondary accent for data viz, "compiled" state indicator |
| `--accent-400` | `#5EEAD4` | Charts, success states |
| `--accent-300` | `#99F6E4` | Highlights |
| **Text** | | |
| `--paper` | `#E9ECEF` | Primary text on dark |
| `--muted` | `#9AA2AC` | Secondary text |
| `--faint` | `#69717C` | Tertiary / placeholder |
| **Lines** | | |
| `--line` | `rgba(233,236,239,0.09)` | Default borders |
| `--line-strong` | `rgba(233,236,239,0.16)` | Emphasized borders |

**Rationale for teal accent:** The orange-only palette is limiting for data visualization, charts, and "success" states. Teal provides necessary contrast without introducing a third brand hue. It also serves the "compiled/deployed" visual state in the define→build→deploy motif — orange = define/build, teal = deployed/result.

### 3.3 Spacing Scale

8px base grid: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160` px.

### 3.4 Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Small buttons, badges |
| `--radius-md` | 10px | Inputs, small cards |
| `--radius-lg` | 16px | Standard cards |
| `--radius-xl` | 20px | Large cards, sections |
| `--radius-2xl` | 24px | Hero containers |
| `--radius-full` | 9999px | Pills, avatar circles |

### 3.5 Motion System

**Principle: Choreographed, not uniform.** Every animation must serve a purpose — guide attention, illustrate causality, or provide feedback. No decoration-only motion.

| Token | Value | Usage |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16,1,0.3,1)` | Primary entrance — fast snap, slow settle |
| `--ease-out-quart` | `cubic-bezier(0.25,1,0.5,1)` | Secondary entrance |
| `--ease-in-out-quint` | `cubic-bezier(0.83,0,0.17,1)` | Hover transitions |
| `--duration-fast` | 200ms | Hover states, toggles |
| `--duration-normal` | 350ms | Page transitions |
| `--duration-slow` | 600ms | Scroll reveals, hero entrance |

**Scroll-reveal vocabulary (NOT uniform fade-up):**
- **Stagger cascade:** Cards/grid items enter with increasing delay (60-100ms increments)
- **Slide-from-edge:** Content slides from the side it's positioned (LTR: left items slide right, right items slide left)
- **Scale-up-from-center:** Hero elements and key visuals scale from 0.95 → 1.0 with opacity
- **Counter-scroll parallax:** Background decorative elements move at 0.3x scroll speed
- **Clip-path reveal:** Text headings revealed via expanding clip-path (top-to-bottom or left-to-right)
- **Number count-up:** Stats band values count from 0 to final value using intersection observer

### 3.6 Icon System

**Custom icon treatment:** Start with Lucide as a base, but apply the "define → build" visual language:
- Icons wrapped in a subtle monospace-grid container (1px grid lines behind the icon)
- Accent stroke in `--brand-400` with `--ink-700` grid
- Never just a floating icon above text — always composed into a layout element

### 3.7 Grid System

| Context | Grid | Rationale |
|---|---|---|
| Page container | `max-w-7xl` (80rem) with 5/8 responsive padding | Existing, works well |
| Content column | `max-w-3xl` (48rem) for prose | Readability |
| Hero content | `max-w-4xl` (56rem) for hero text | Impact |
| Card grids | `grid-cols-1 → 2 → 3` (sometimes 4 for small cards) | Standard responsive |
| **Asymmetric layouts** | `grid-cols-[1.2fr_1fr]` or `grid-cols-[1fr_1.4fr]` | **New — breaks the centered symmetry** |

---

## 4. Finalized Information Architecture (Sitemap)

### 4.1 Page Count Change: 33 → 38 pages

**Additions (justified):**
- **+5 Industry pages** (Banking & Finance, Telecom, Energy & Utilities, Government & Public Sector, Education) — the existing site has zero industry pages. Enterprise buyers self-identify by sector, and competitors (Mercer Mettl, TalentGames) all have them. Each page surfaces the relevant case studies from the existing 16.
- **+1 Science & Methodology page** — the existing trust page covers compliance only. A dedicated science page is the highest-leverage credibility asset (per A5) given Intwish's psychometric research and Faran's academic background.
- **+1 Careers page** (confirmed in scope in A5).
- **+1 Industries index page** (listing page for the 5 industry detail pages).

**Removals:**
- **-2 Merge:** en-CA was already folded into en in the existing build. The `/media` page content merges into `/about` as a "Media & Awards" section.
- **-1 Remove:** The old `index.php` is retired entirely (301 redirect).

**Final count: 38 unique page templates** (× 4 locales = ~152 rendered URLs, consistent with the existing sitemap's 220+ URLs).

### 4.2 Complete Sitemap

| # | Route | Archetype | New/Rebuild | Content Source |
|---|---|---|---|---|
| 1 | `/` | Homepage | **REBUILD** | Existing content + new layout |
| 2 | `/about` | Company / About | **REBUILD** | `site.ts` + absorb media page |
| 3 | `/products` | Index | **REBUILD** | `products.ts` |
| 4 | `/products/intos` | Product Detail | **REBUILD** | 588 LOC existing + gameplay videos |
| 5 | `/products/intreview` | Product Detail | **REBUILD** | Existing + product UI screenshots |
| 6 | `/services` | Index | **REBUILD** | `services.ts` |
| 7 | `/services/training-learning` | Service Detail | **REBUILD** | `services.ts` |
| 8 | `/services/recruitment-assessment` | Service Detail | **REBUILD** | `services.ts` |
| 9 | `/services/employee-engagement` | Service Detail | **REBUILD** | `services.ts` |
| 10 | `/services/enterprise-portals` | Service Detail | **REBUILD** | `services.ts` |
| 11 | `/services/360-feedback` | Service Detail | **REBUILD** | `services.ts` |
| 12 | `/services/ar-vr-simulation` | Service Detail | **REBUILD** | `services.ts` |
| 13 | `/case-studies` | Index | **REBUILD** | `caseStudies.ts` (16 studies) |
| 14–29 | `/case-studies/[slug]` (×16) | Case Study Detail | **REBUILD** | `caseStudies.ts` |
| 30 | `/industries` | Index | **NEW** | New content |
| 31 | `/industries/banking-finance` | Industry Detail | **NEW** | Case studies: Bank Alfalah, HBL, Faysal Bank |
| 32 | `/industries/telecom` | Industry Detail | **NEW** | Case studies: PTCL |
| 33 | `/industries/energy-utilities` | Industry Detail | **NEW** | Case studies: K-Electric, Shell |
| 34 | `/industries/government-public-sector` | Industry Detail | **NEW** | Case studies: SBC (×2), IRD |
| 35 | `/industries/education` | Industry Detail | **NEW** | Case studies: FPS, Daraz Academy |
| 36 | `/science` | Trust / Credibility | **NEW** | Psychometric research, SJT validity |
| 37 | `/trust` | Trust / Credibility | **REBUILD** | Existing trust page |
| 38 | `/careers` | Careers | **NEW** | New content |
| 39 | `/insights` | Index | **REBUILD** | `insights.ts` (11 articles) |
| 40 | `/insights/[slug]` (×11) | Resources Detail | **REBUILD** | `insights.ts` |
| 41 | `/demo` | Contact variant | **REBUILD** | Existing form + enhanced UX |
| 42 | `/contact` | Contact | **REBUILD** | Existing + segmented routing |
| 43 | `/privacy` | Legal | Migrate as-is | Existing |
| 44 | `/terms` | Legal | Migrate as-is | Existing |

> [!NOTE]
> Case study detail pages (14–29) share one template applied 16 times. Service detail pages (7–12) share one template applied 6 times. Industry detail pages (31–35) share one template applied 5 times. The unique template count is **21**, not 44.

---

## 5. Component System (Extended from A6)

### 5.1 Core Components (all pages)

| Component | A6 Ref | Key Changes from Existing |
|---|---|---|
| `SiteHeader` / `MegaMenu` | ✅ | **Mega-menu** with product previews, not plain dropdown. Persistent on scroll with blur backdrop. |
| `Footer` | ✅ | Add regional entities, compliance badges per locale, newsletter signup. |
| `PageHeader` | ✅ | Breadcrumb + title band with `DefineYourWish():` kicker variant. NOT a hero — lighter. |
| `HomepageHero` | ✅ | **Asymmetric split layout** — text left, real product UI capture right. Dual CTA. NOT centered-hero. |
| `AnimatedStatCounter` | ✅ | Count-up animation on intersection. Real numbers only. Monospace Geist Mono rendering. |
| `ClientLogoMarquee` | ✅ | Existing works — convert logos to WebP, add grayscale→color on hover. |
| `TrustBadgeRow` | ✅ | Shield icons + badge names. Always adjacent to CTA per A7. |
| `CardGrid` | ✅ | **One component with variant props** for product/service/case-study/resource/industry cards. |
| `MetricsBox` | ✅ | Structured data display for case study results. Grid of metric cards. |
| `AttributionBlock` | ✅ | Named vs. anonymized quote variant. |
| `StepFlowDiagram` | ✅ | **Horizontal timeline with connecting lines**, not generic icon row. Animated on scroll. |
| `CTABand` | ✅ | Always paired with trust signal. Existing pattern works — add teal "compiled" accent. |
| `SegmentedContactForm` | ✅ | Multi-intent tabs (Sales / Partnership / Careers / Media). Partial-capture first step. |
| `FilterableGrid` | ✅ | Existing `CaseStudyGrid` + filter/sort logic. Extend for insights/resources. |
| `Breadcrumb` | ✅ | Existing pattern — standardize across all interior pages. |

### 5.2 New Components (proposed additions)

| Component | Used On | Purpose |
|---|---|---|
| `ProductShowcase` | Homepage, product index | Split-screen with real UI screenshot + floating feature callouts |
| `DefineWishKicker` | All pages | Monospace kicker in the `DefineYourWish():` style — `define(problem) → build(solution) → deploy(result)` |
| `IndustryHero` | Industry detail pages | Sector-specific hero with relevant iconography and case study count |
| `TimelineVertical` | About page | Animated vertical timeline with year markers and expansion |
| `TeamGrid` | About page | Team member cards with role, bio, LinkedIn — NOT generic stock photo grid |
| `ComparisonMatrix` | Product pages | Extends existing `ComparisonTable` with visual checkmark/cross design |
| `CaseStudySpotlight` | Homepage, industry pages | Featured case study with headline metric, client attribution, read-more |
| `NavigationAnnouncement` | Site-wide | Top banner for announcements ("🚀 intOS sandbox is live — try it now") |
| `SkipToContent` | All pages | Accessibility: keyboard skip link |
| `BackToTop` | All pages | Smooth scroll-to-top button appearing after scroll |
| `NewsletterSignup` | Footer, insights | Email capture for insights/reports |
| `RelatedPages` | All interior pages | Cross-links to related content, powered by archetype relationships |
| `SchemaRenderer` | All pages | Centralized JSON-LD structured data component |

---

## 6. Per-Page Detailed Specifications

> [!IMPORTANT]
> Every section below is an **execution ticket** — self-contained, independently handoff-able to a different agent with zero missing context beyond this plan + the DESIGN.md tokens.

---

### PHASE 1: Foundation + Design System + Homepage

---

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
  - Kicker: `DefineYourWish():` in Geist Mono, brand-400 color, with blinking cursor animation
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
- Headline: "DefineYourWish(): — let's build yours."
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

---

### PHASE 2: Product Pages

---

#### TICKET P-01: intOS Product Page

**Page ID:** `/products/intos`
**Archetype:** Product Detail (A5)
**Phase:** 2
**Priority:** P0

**Objective:** Let a buyer evaluating TalentGames see why intOS is fundamentally different — it's a virtual OS, not a test library.

**Lead differentiator to emphasize:** intOS is a "recruitment virtual OS" — a simulated working environment, not a collection of tests. Candidates operate inside a virtual desktop with interlinked modules. No competitor offers this.

**Section-by-section:**

1. **Hero — Side-by-side with sandbox preview**
   - Left: intOS logo + kicker (`define(assessment):`) + headline "The first assessment platform that simulates the working world" + tagline + outcome stat "25,000+ candidates assessed in a single drive" + Dual CTA: "Experience the OS" (scrolls to sandbox) + "Book a Pilot"
   - Right: Embedded preview/screenshot of the intOS virtual desktop — taskbar, windows, notifications visible
   - Proof band below: 4 metric cards (candidates, conversion, users, report pages)

2. **Interactive Sandbox Section** (`#sandbox`)
   - Full-width iframe embed of the intOS demo environment (`demo.intwish.com/os-demo`)
   - `[PLACEHOLDER: The sandbox URL needs to be a real, deployed demo instance. Currently configured via NEXT_PUBLIC_INTOS_DEMO_URL env var. Need deployed demo.]`
   - Fallback: If sandbox unavailable, show a walkthrough video + screenshots gallery

3. **Psychometric Games in Action — Video Gallery**
   - 6 real gameplay recordings (Brain Buster, Numbubbles, Numparision, Sentence Completion, Tetris, Word Wizard)
   - ✅ Videos exist in `04-videos/intos-gameplay/`
   - Card grid with video player, game name, brief description

4. **Modules Showcase — 6 cards with visual differentiation**
   - Email simulation, Team messenger, SJT virtual meetings, E-tray exercises, Psychometric games, Interlinked narrative engine
   - Each card: icon + title + description
   - Layout: NOT 6 identical cards. Use a **bento layout** — 2 large + 4 small, with the narrative engine card spanning full width at the bottom to emphasize it's the differentiator

5. **Recruiter Dashboard — Feature showcase**
   - KPI pulse cards, funnel visualization, time-saved metrics, hidden gems, integrity watchlist
   - `[PLACEHOLDER: Need screenshot of the actual intOS recruiter dashboard showing real data. If not available, describe what should be captured: dashboard overview with KPI cards, candidate funnel, and shortlist view]`

6. **Candidate Experience Section**
   - Anxiety-reducing, mobile-ready, dark/light themes, EN/AR RTL
   - Visual: Split screen showing the same intOS interface in light and dark mode, or mobile and desktop

7. **Use Cases — 5 application scenarios**
   - MT recruitment, any position, graduate programs, government selection, high-volume drives
   - Each with one-line description + relevant case study link

8. **Science & Validity**
   - SJT and game-based cognitive assessment validity
   - `[PLACEHOLDER: Specific psychometric validation data — reliability coefficients, validity correlations, sample sizes from Intwish's research corpus. Also: any published papers, conference presentations, or academic partnerships]`
   - Link to full `/science` page

9. **Reporting & Analytics**
   - Gold-standard candidate reports → PDF export
   - `[PLACEHOLDER: Screenshot of an actual intOS candidate report PDF — the 20-page automated 360° report. Redact real names but show report structure, charts, and scoring]`

10. **Client Outcomes — Testimonials**
    - PTCL, HBL, ICI, Bank Alfalah, Faysal Bank
    - Uses existing testimonial content from `testimonials.md`

11. **Comparison vs Traditional Assessment**
    - Existing comparison table data — visual redesign with checkmark/cross matrix

12. **Results from Real Drives — 3 Case Studies**
    - PTCL recruitment, HBL 3D simulation, ICI recruitment

13. **ROI Calculator**
    - Interactive estimator (existing component — migrate + enhance visually)

14. **FAQ** (with FAQPage JSON-LD)
    - 6 items covering validity, experience, scoring, scale, languages, pricing

15. **Pricing Philosophy Band**
    - Per-candidate volume pricing, pilot before commit, 24-48h regional quote

16. **CTA Band**
    - "DefineYourWish(): — let's assess yours" + Demo CTA + Sandbox CTA

**Assets needed:**
- ✅ intOS logo SVG
- ✅ 6 gameplay videos
- ✅ All content from existing `intos` page (588 LOC worth)
- `[PLACEHOLDER: intOS virtual desktop screenshot — high-res, showing full OS with taskbar, windows, notifications]`
- `[PLACEHOLDER: intOS recruiter dashboard screenshot]`
- `[PLACEHOLDER: intOS candidate report PDF example (redacted)]`
- `[PLACEHOLDER: Deployed sandbox demo URL]`

---

#### TICKET P-02: IntReview Product Page

**Page ID:** `/products/intreview`
**Archetype:** Product Detail (A5)
**Phase:** 2
**Priority:** P0

**Objective:** Let a buyer evaluating HireVue see why IntReview's evidence-based scoring and multi-voice proctoring are stronger.

**Lead differentiator:** Verbatim evidence quotes with timestamps on every AI score — not just a number. Plus multi-voice audio forensics proctoring (rare in the industry).

**Sections (same archetype as intOS, with IntReview-specific content):**

1. **Hero** — "AI-powered interviews that show their work" + IntReview logo + AI report screenshot
2. **6 Feature Cards** — AI scoring, 18+ question types, anti-cheat proctoring, infinite-canvas reports, analytics dashboard, white-label
3. **4-Step Candidate Flow** — Invite → Record → Review → Decide (StepFlowDiagram component)
4. **Languages & RTL** — EN/AR with full RTL support callout
5. **Security & Compliance** — links to `/trust`
6. **Testimonials** — same client base
7. **vs Manual Hiring Comparison** — existing comparison data
8. **Results — 3 Case Studies** — filtered to IntReview-relevant
9. **ROI Calculator** — with `intent=intreview`
10. **FAQ** (6 items from `faq-intreview.md`)
11. **Pricing Band**
12. **CTA Band**

**Assets needed:**
- ✅ All content from existing IntReview page (16,930 bytes)
- ✅ 7 real product UI screenshots (login, dashboard, candidates, assessments, questions, AI report, interview room)
- `[PLACEHOLDER: Interactive IntReview demo — this is the #1 gap. Even a guided screenshot walkthrough would be better than nothing. Consider: a click-through prototype showing the recruiter dashboard → AI report flow]`

---

#### TICKET P-03: Products Index Page

**Page ID:** `/products`
**Archetype:** Index (A5)
**Phase:** 2
**Priority:** P1

**Objective:** Fast orientation between intOS and IntReview.

**Layout:** Two large showcase cards (not a grid), each with:
- Product logo + name + tagline
- Real screenshot
- Key differentiator headline
- 3 bullet highlights
- CTA to product detail page

Plus: A "Why Intwish's stack?" section explaining the full-stack advantage (one partner vs. five vendors).

---

### PHASE 3: Services Pages

---

#### TICKET S-01: Services Index Page

**Page ID:** `/services`
**Archetype:** Index (A5)
**Phase:** 3
**Priority:** P1

**Objective:** Fast orientation across 6 service capabilities.

**Layout:**
- Hero: "The engineering capability behind the products" + `DefineYourWish():` kicker
- 6 service cards in a 3×2 grid
- Each: icon + title + tagline + "See details →"
- Below: "Our products are the proof" — links to intOS/IntReview
- CTA: "Discuss a project →" (links to `/demo?intent=project`)

**Content:** ✅ All exists in `services.ts` (6 services, fully localized)

---

#### TICKET S-02 through S-07: Service Detail Pages (×6)

**Page IDs:** `/services/training-learning`, `/services/recruitment-assessment`, `/services/employee-engagement`, `/services/enterprise-portals`, `/services/360-feedback`, `/services/ar-vr-simulation`

**Archetype:** Service Detail (A5)
**Phase:** 3
**Priority:** P1

**One template, applied 6 times.** Each service detail page follows this structure:

1. **Page Header** — breadcrumb + title + tagline
2. **Capability Framing** — what the service does, outcome-focused
3. **Proof by Product** — points to intOS/IntReview/LMS as shipped evidence:
   - Training & Learning → Bank Alfalah gamified training (7,000+ employees), HBL Design Thinking (20,000+)
   - Recruitment & Assessment → intOS + PTCL/ICI/HBL/Faysal case studies
   - Employee Engagement → HBL Agile (20,000+), Daraz Academy
   - Enterprise Portals → SBC Knowledge Gate, IRD EPI Rehnuma
   - 360° Feedback → Bank Alfalah + K-Electric (20-page automated reports)
   - AR/VR Simulation → HBL 3D simulation, Shell Driver Training
4. **Relevant Case Studies** — filtered from 16, based on `caseStudySlugs` in `services.ts`
5. **Engagement Model / CTA** — "Discuss this capability →"

**Content:** ✅ All exists in `services.ts` (descriptions, outcomes, case study linkages — all localized)

---

### PHASE 4: Case Studies

---

#### TICKET CS-01: Case Studies Index

**Page ID:** `/case-studies`
**Archetype:** Index (A5)
**Phase:** 4
**Priority:** P1

**Layout:**
- Hero: "Results from real programs, not hypotheticals"
- Filterable grid: filter by industry (Banking, Telecom, Energy, Government, Education, E-commerce), filter by type (Training, Recruitment, Engagement, Feedback)
- 16 case study cards, each showing: client name, title, headline metric, industry badge
- Uses `FilterableGrid` component

---

#### TICKET CS-02: Case Study Detail Template (×16)

**Page ID:** `/case-studies/[slug]`
**Archetype:** Case Study Detail (A5)
**Phase:** 4
**Priority:** P1

**One template, 16 instances.** Structure per A5:

1. **Results-led headline** — the metric first, then the story. E.g., "25,000+ candidates assessed in days — PTCL's gamified MT recruitment"
2. **Challenge** — what the client was facing
3. **Solution** — what Intwish built/deployed
4. **Results** — **MetricsBox component** with structured data cards:
   - `[PLACEHOLDER: For each of the 16 case studies, need specific baseline → outcome metrics. Currently the case studies in caseStudies.ts have headline metrics but many lack detailed before/after data. Need from Faran: completion rates, time saved, cost reduction, candidate satisfaction, any NPS data]`
5. **Attribution** — named client or anonymized per A4
6. **CTA** — "See how we can do this for you →"
7. **Related case studies** — 2-3 from same industry/service
8. **Print/PDF one-pager** — existing `PrintPdfButton` functionality (noindex)

**Content data for all 16 case studies (from `caseStudies.ts`):**

| # | Slug | Client | Headline Metric | Industry |
|---|---|---|---|---|
| 1 | `bank-alfalah-training` | Bank Alfalah | 7,000+ employees | Banking |
| 2 | `ici-recruitment` | ICI Pakistan | 4,000+ applicants | Manufacturing |
| 3 | `ptcl-recruitment` | PTCL | 25,000+ candidates | Telecom |
| 4 | `faysal-bank-recruitment` | Faysal Bank & Others | 4–25k candidates | Banking |
| 5 | `hbl-3d-simulation` | HBL | 4,000+ candidates (2×) | Banking |
| 6 | `fps-entry-test` | Foundation Public School | Entry test gamification | Education |
| 7 | `ba-kelectric-360` | Bank Alfalah & K-Electric | 7,000+ employees, 20-page reports | Banking/Energy |
| 8 | `kelectric-hipo` | K-Electric | HiPo identification | Energy |
| 9 | `kelectric-360` | K-Electric | 360° feedback | Energy |
| 10 | `ird-epi-rehnuma` | IRD | Vaccinator training app | Government/Health |
| 11 | `hbl-design-thinking` | HBL | 20,000+ learners | Banking |
| 12 | `hbl-agile` | HBL | 20,000+ learners | Banking |
| 13 | `daraz-academy` | Daraz | Express Academy onboarding | E-commerce |
| 14 | `shell-driver-training` | Shell | Fleet-wide 3D training | Energy |
| 15 | `sbc-knowledge-gate` | Saudi Business Center | Knowledge gate portal | Government |
| 16 | `sbc-reaching-top` | Saudi Business Center | Customer service simulation | Government |

**`[PLACEHOLDER: For ALL 16 case studies, need:]`**
- **Challenge paragraph** (2-3 sentences describing the client's problem before Intwish)
- **Solution paragraph** (2-3 sentences describing what was built)
- **Detailed metrics** (baseline → outcome, not just "7,000+ employees")
- **Project timeline** (when it was deployed, how long the engagement lasted)
- **Hero image/screenshot** from the actual project (portfolio images exist in `img/portfolio/` — need mapping of which portfolio image corresponds to which case study)
- **Attribution approval** (are all client names approved for public use?)

---

### PHASE 5: Industries, Science, Trust, About, Careers

---

#### TICKET I-01: Industries Index

**Page ID:** `/industries`
**Archetype:** Index (A5)
**Phase:** 5
**Priority:** P1

**Layout:**
- Hero: "Enterprise talent solutions for your sector"
- 5 industry cards with sector-specific iconography and case study counts:
  - Banking & Finance (6 case studies)
  - Telecom (1 case study)
  - Energy & Utilities (4 case studies)
  - Government & Public Sector (3 case studies)
  - Education (2 case studies)

---

#### TICKET I-02 through I-06: Industry Detail Pages (×5)

**Page IDs:** `/industries/banking-finance`, `/industries/telecom`, `/industries/energy-utilities`, `/industries/government-public-sector`, `/industries/education`

**Archetype:** Industry Detail (A5)
**Phase:** 5
**Priority:** P1

**One template, 5 instances.** Structure:

1. **Sector-specific hero** — pain points for this vertical
2. **Relevant case studies** — filtered from 16
3. **Relevant products** — which products serve this sector
4. **Compliance/data-residency notes** — for banking: mention ISO/SOC2 roadmap, data handling. For government: Arabic RTL, PDPL compliance, SBC reference.
5. **CTA** — "Talk to our [sector] team →"

**Content per industry:**

**Banking & Finance:**
- Pain points: compliance training at scale, MT recruitment volume, 360° feedback for large workforces
- Case studies: Bank Alfalah training, Bank Alfalah+K-Electric 360°, HBL 3D simulation, HBL Design Thinking, HBL Agile, Faysal Bank, ICI Pakistan
- Products: intOS (assessment), IntReview (AI interviews)
- Compliance: ISO/SOC2 roadmap, SBP-aligned data handling
- `[PLACEHOLDER: Banking-specific pain points — what challenges do bank HR teams face specifically? Regulatory compliance training burden, high-volume graduate recruitment, leadership identification programs. Need 3-4 paragraphs of sector-specific copy]`

**Telecom:**
- Case studies: PTCL (25,000+ candidates)
- `[PLACEHOLDER: Telecom-specific pain points. Suggest: massive seasonal hiring cycles, contact center training, technical role assessment at scale]`

**Energy & Utilities:**
- Case studies: K-Electric HiPo, K-Electric 360°, Shell Driver Training
- `[PLACEHOLDER: Energy-specific pain points. Suggest: safety training, field worker assessment, leadership pipeline identification]`

**Government & Public Sector:**
- Case studies: SBC Knowledge Gate, SBC Reaching the Top, IRD EPI Rehnuma
- Special: Saudi-specific treatment per A3 — Arabic-first, PDPL compliance, reference to Dubai HQ
- `[PLACEHOLDER: Government procurement-specific trust signals — data sovereignty, local hosting options, Arabic-first UI, security clearance or government vendor registration details]`

**Education:**
- Case studies: FPS Entry Test, Daraz Academy (e-learning/onboarding)
- `[PLACEHOLDER: Education-specific pain points. Suggest: standardized testing, student engagement, onboarding for e-commerce/gig platforms]`

---

#### TICKET SC-01: Science & Methodology Page

**Page ID:** `/science`
**Archetype:** Trust / Credibility (A5)
**Phase:** 5
**Priority:** P1

**Objective:** The highest-leverage credibility page on the site. Turns "another HR-tech vendor" into "a company that understands the science."

**Sections:**

1. **Hero** — "Built on science, not hype"
2. **Methodology Explanation**
   - How gamified assessments are designed (SJT theory, cognitive load theory, game-based assessment validity)
   - How AI scoring works (STAR structure analysis, rubric-based evaluation, evidence quoting)
   - `[PLACEHOLDER: Detailed methodology content — the psychometric framework behind intOS assessments. What personality/cognitive constructs are measured? How are games mapped to competencies? What's the scoring model? Need 800-1200 words of technical but accessible content]`

3. **AI & Bias Mitigation**
   - How IntReview's AI maintains fairness (same rubric for every candidate, verbatim evidence quotes)
   - Position AI as a copilot, not a judge — "Decide with data" messaging
   - `[PLACEHOLDER: Bias mitigation specifics — any adverse impact studies? Fairness audits? Demographic parity analysis? Even "roadmap" commitments are valuable here]`

4. **Data Handling & Ethics**
   - Data retention policies, anonymization, candidate consent
   - Link to existing vendor registration policy work

5. **Academic & Research Credibility**
   - `[PLACEHOLDER: Faran's AKU (Aga Khan University) academic research appointment — this is genuinely unusual. Include: appointment title, research focus, any publications, conference presentations. Also: any collaboration with I/O psychologists, psychometricians, or university research labs. This section could be the single most differentiating content on the site vs. competitors]`

6. **Supporting Statistics**
   - Research-backed claims: structured interviews are more predictive, gamified assessments reduce anxiety, etc.

---

#### TICKET T-01: Trust & Security Page

**Page ID:** `/trust`
**Archetype:** Trust / Credibility (A5)
**Phase:** 5
**Priority:** P1

**Existing page (10,936 bytes) — REBUILD with enhanced layout.**

**Sections:**
1. Compliance overview — PIPEDA, PDP Law, GDPR, PDPL, ISO/SOC2 roadmap
2. Data handling — encryption, storage, retention, sub-processors
3. Infrastructure — hosting, availability, monitoring
4. DPA readiness — data processing agreement template availability
5. `[PLACEHOLDER: Intwish Backup Policy v1.0 — referenced in old plan. Link or summarize the existing backup_policy_v1.0.pdf]`
6. Security certifications timeline — honest roadmap showing ISO 27001 target date

---

#### TICKET A-01: About Page

**Page ID:** `/about`
**Archetype:** Company / About (A5)
**Phase:** 5
**Priority:** P1

**Existing page (9,773 bytes) — REBUILD with enhanced content.**

**Sections:**
1. **Mission** — `DefineYourWish():` origin story
2. **Company Timeline** — `TimelineVertical` component using existing `timeline` data (7 entries, 2015-2021)
   - `[PLACEHOLDER: Timeline entries for 2022-2026 — what happened after Dubai HQ move? Canada/Indonesia registration? Any awards, new products, major client wins?]`
3. **Leadership Team** — 4 members (existing in `site.ts`): CEO, CSO, CTO, COO
   - Each with photo, role, bio, LinkedIn
   - `[PLACEHOLDER: Updated team photos — professional headshots if available. Current photos exist but may need refreshing]`
4. **Dual-Market Presence** — Pakistan (Karachi) + UAE (Dubai HQ) + Canada + Indonesia
   - Map or visual showing global presence
5. **Academic Tie-in** — Faran's AKU connection (per A5)
6. **Media & Awards** — absorbed from old `/media` page
   - `[PLACEHOLDER: Media coverage links — the old plan mentions "national media coverage" but no specifics. Need: press mentions, award names, coverage URLs]`
7. **Careers Link** — CTA to `/careers`

---

#### TICKET CR-01: Careers Page

**Page ID:** `/careers`
**Archetype:** Careers (A5)
**Phase:** 5
**Priority:** P2

**Sections:**
1. **Culture/Mission Framing** — "Build the future of talent technology"
2. **Why Intwish** — engineering culture, product ownership, global reach
3. **Open Roles**
   - `[PLACEHOLDER: Current open positions. If no positions are open, show "We're always looking for exceptional talent" with a general application form. Need: role titles, departments, locations, job descriptions]`
4. **Application Flow** — email contact or form submission
5. `[PLACEHOLDER: Office photos, team culture photos, work environment images — if available. Otherwise, use the existing team photos in a culture-focused layout]`

---

### PHASE 6: Insights, Contact, Demo, Legal

---

#### TICKET IN-01: Insights Hub (Index)

**Page ID:** `/insights`
**Archetype:** Index (A5)
**Phase:** 6
**Priority:** P1

**Existing page (8,814 bytes) — REBUILD.**

**Layout:**
- Hero: "Research, benchmarks, and insights from 300,000+ assessed professionals"
- Filterable grid by topic (Assessment, AI, Recruitment, Training, Gamification) and format (Article, Whitepaper, Report)
- 11 existing articles + placeholder for future content
- `[PLACEHOLDER: Flagship gated report — "The State of Gamified Assessment: South Asia & MENA" — this was recommended in the old plan. Even a placeholder landing page with a "Coming Soon" email capture form would be valuable]`

---

#### TICKET IN-02: Insight Detail Template (×11+)

**Page ID:** `/insights/[slug]`
**Archetype:** Resources Detail (A5)
**Phase:** 6
**Priority:** P1

**Existing template — REBUILD with DESIGN.md tokens.**
- Standard long-form content layout
- Gated lead capture on flagship reports (existing `GatedInsightBody` component)
- Share buttons, author attribution, related posts

---

#### TICKET CT-01: Contact Page

**Page ID:** `/contact`
**Archetype:** Contact (A5)
**Phase:** 6
**Priority:** P1

**Existing page (4,285 bytes) — REBUILD with segmented form.**

**Layout:**
1. **Segmented intake tabs:**
   - Sales inquiry (products/services)
   - Partnership inquiry
   - Careers / General
2. **Form fields per segment:**
   - Sales: Name, email, company, product interest (intOS/IntReview/custom), message
   - Partnership: Name, email, company, partnership type, message
   - Careers: Name, email, role interest, resume upload, message
3. **Partial-capture behavior** — capture email on first step before asking for details
4. **Privacy note** near form — "Your data is handled per our [Privacy Policy]. We respond within 24-48 hours."
5. **Regional offices** — Dubai HQ, Karachi, with phone numbers
6. **Trust signals** adjacent to form: compliance badges, client logo strip

---

#### TICKET DM-01: Demo Booking Page

**Page ID:** `/demo`
**Archetype:** Contact variant (A5)
**Phase:** 6
**Priority:** P0

**Existing page (5,891 bytes) — REBUILD with enhanced UX.**

**Layout:**
- Reduced-friction form: name, email, company, intent (intOS/IntReview/custom/general), optional notes
- `?intent=` URL parameter pre-selects product
- "What happens next" steps: 1) We review your request → 2) A specialist contacts you within 24h → 3) Live demo tailored to your needs
- Trust signals: client logos + "300,000+ professionals assessed" stat
- Regional office info for phone-first buyers

---

#### TICKET LG-01: Privacy Policy

**Page ID:** `/privacy`
**Archetype:** Legal (A5)
**Phase:** 6
**Priority:** P2

**Existing page (8,805 bytes) — MIGRATE with design token update.**
Localized privacy policy with PIPEDA/PDP/GDPR/PDPL sections per locale.

---

#### TICKET LG-02: Terms of Service

**Page ID:** `/terms`
**Archetype:** Legal (A5)
**Phase:** 6
**Priority:** P2

**Existing page — MIGRATE with design token update.**

---

### PHASE 7: Cross-Site QA & Polish

---

#### TICKET QA-01: Cross-Site Consistency Audit

**Phase:** 7
**Priority:** P0

**Tasks:**
1. Run A2 anti-slop checklist on every page
2. Verify all pages use DESIGN.md tokens — no ad-hoc colors, fonts, or spacing
3. Verify all pages use shared components — no one-off component variants
4. Verify all cross-links work (especially case study → industry → product paths)
5. Verify all 4 locales render correctly on every page
6. Verify RTL (Arabic) layout on every page
7. Run Lighthouse on every page — verify performance budget (LCP < 2.5s, INP < 200ms, CLS < 0.1)
8. Verify all structured data (JSON-LD) validates
9. Verify hreflang reciprocity
10. Verify all forms submit correctly (MailerSend)
11. Verify consent manager works
12. Verify GA4 events fire correctly
13. Test on real mobile devices (iOS Safari, Chrome Android)
14. WCAG 2.1 AA accessibility audit

---

## 7. Phased Execution Roadmap

| Phase | Scope | Dependencies | Estimated Templates |
|---|---|---|---|
| **1 — Foundation + Homepage** | F-01 (scaffolding), H-01 (homepage) | None — starts immediately | 2 (foundation + homepage) |
| **2 — Product Pages** | P-01 (intOS), P-02 (IntReview), P-03 (products index) | Phase 1 (components + tokens) | 3 templates |
| **3 — Services** | S-01 (index), S-02–S-07 (6 details) | Phase 1 | 2 templates (1 index + 1 detail ×6) |
| **4 — Case Studies** | CS-01 (index), CS-02 (detail ×16) | Phase 1 | 2 templates (1 index + 1 detail ×16) |
| **5 — Industries, Science, Trust, About, Careers** | I-01–I-06, SC-01, T-01, A-01, CR-01 | Phase 1, partial Phase 4 (for case study cross-links) | 6 templates |
| **6 — Insights, Contact, Demo, Legal** | IN-01, IN-02, CT-01, DM-01, LG-01, LG-02 | Phase 1 | 6 templates |
| **7 — QA & Polish** | QA-01 | All phases | 0 (audit only) |

**Parallel execution:** Phases 2, 3, 4 can run in parallel once Phase 1 delivers the foundation. Phases 5 and 6 can also run in parallel. Phase 7 is sequential after all others.

---

## 8. Consolidated Asset & Content Needs from Faran

> [!CAUTION]
> These are the actual blockers and gaps. Everything structural or creative has been decided in this plan. Only items that require real-world data or approvals are listed here.

### Critical (Blocks launch):

| # | Item | Where Needed | Priority |
|---|---|---|---|
| 1 | **Deployed intOS sandbox demo** (`demo.intwish.com/os-demo`) | intOS product page, homepage | P0 |
| 2 | **High-res intOS virtual desktop screenshot** (showing full OS: taskbar, windows, notifications, email simulation) | Homepage hero, intOS product page | P0 |
| 3 | **High-res IntReview AI report screenshot** (showing STAR scores, rubric ratings, evidence quotes) | Homepage hero, IntReview product page | P0 |
| 4 | **IntReview recruiter dashboard screenshot** (showing overview with KPIs) | IntReview product page | P0 |
| 5 | **Approval of all 12 client names for public use** (Bank Alfalah, HBL, PTCL, Shell, K-Electric, Daraz, ICI, Faysal Bank, SBC, IRD, Descon, FPS) | All pages with client references | P0 |

### Important (Enhances quality):

| # | Item | Where Needed |
|---|---|---|
| 6 | **Case study detail content** — challenge/solution/detailed metrics for all 16 case studies | Case study detail pages |
| 7 | **Portfolio image → case study mapping** — which of the 16 portfolio PNGs corresponds to which case study | Case study detail pages |
| 8 | **Faran's AKU academic appointment details** — title, research focus, publications | Science page, About page |
| 9 | **Timeline entries for 2022–2026** — events after Dubai HQ move | About page |
| 10 | **Media coverage URLs** — press mentions, awards, article links | About page |
| 11 | **Current open job positions** (if any) | Careers page |
| 12 | **intOS recruiter dashboard screenshot** (showing KPI pulse, candidate funnel) | intOS product page |
| 13 | **intOS candidate report PDF example** (redacted, showing 20-page structure) | intOS product page |
| 14 | **Office/team culture photos** (Dubai office, Karachi office) | About page, Careers page |
| 15 | **Updated team headshots** (if newer ones exist) | About page |

### Nice to Have (Future enhancement):

| # | Item | Where Needed |
|---|---|---|
| 16 | **Interactive IntReview demo** (click-through prototype of recruiter dashboard → AI report) | IntReview product page |
| 17 | **Video testimonials** from clients (60-90s each) | Homepage, product pages |
| 18 | **Flagship benchmark report** — "The State of Gamified Assessment: South Asia & MENA" | Insights hub (gated) |
| 19 | **Client NPS/satisfaction data** (even aggregate: "95% of clients renew") | Trust architecture |
| 20 | **ISO 27001 / SOC 2 certification timeline** with target completion dates | Trust page |

---

## 9. Consistency & QA Protocol

### During Build:
1. Every agent reads this plan + DESIGN.md before touching any code
2. No new colors, fonts, spacing, or components without proposing back to DESIGN.md
3. Every new component must be documented with props, usage, and variant options
4. All content marked `[PLACEHOLDER]` must be clearly visible in the rendered page with a dashed border and "Content needed" label — never invisible

### Post-Build (Phase 7):
1. **A2 Anti-Slop Audit** — every page checked against the 8 banned patterns and 4 required patterns
2. **DESIGN.md Token Audit** — grep for any hardcoded colors, font sizes, or spacing values not in the token system
3. **Component Audit** — verify no one-off components were created; all UI uses shared system
4. **Cross-Link Audit** — every interior page has breadcrumbs and related-page links
5. **Performance Audit** — Lighthouse CI on every page, enforce LCP < 2.5s
6. **SEO Audit** — validate hreflang, canonical, JSON-LD, single H1, meta descriptions
7. **Accessibility Audit** — WCAG 2.1 AA compliance (focus visibility, alt text, ARIA, contrast ratios)
8. **Mobile Audit** — test on iOS Safari + Chrome Android on real devices
9. **Form Audit** — verify every form submits to MailerSend correctly with regional routing
10. **Reconciliation** — collect all agent-proposed additions to the shared system, merge into DESIGN.md

---

## 10. Technical Architecture Notes

### Stack (confirmed):
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with DESIGN.md token system
- **i18n:** next-intl v4 (4 locales: en, fr-CA, id-ID, ar with RTL)
- **Animation:** Framer Motion (replaces uniform `Reveal` component)
- **Icons:** Lucide React (customized per §3.6)
- **Fonts:** Space Grotesk + Geist Sans/Mono + Noto Sans Arabic
- **Forms:** MailerSend API
- **Analytics:** GA4 with consent management
- **Chat:** Chatwoot (consent-gated)
- **Hosting:** Vercel (or cPanel per existing `DEPLOY_CPANEL.md`)

### Key Decisions:
1. **No CMS yet** — Phase 1 ships with typed content layer (identical to existing `src/content/`). CMS swap is documented in `CONTENT.md` for Phase 1.5+.
2. **No Framer or Webflow** — custom Next.js for full control over performance and i18n.
3. **Images: WebP/AVIF with next/image** — all assets converted from legacy JPG/PNG.
4. **Server Components by default** — `'use client'` only for interactive components (forms, calculator, sandbox, analytics).
5. **No jQuery, no Bootstrap** — legacy bundles are not carried over.

---

*This plan is ready for execution. Approve it to begin Phase 1.*
