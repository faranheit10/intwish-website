# Intwish Website Revamp — Gold Standard Shared Foundation

**Version:** 2.0 · **Date:** 2026-08-05 · **Status:** Awaiting Approval

---

## 0. Planning Agent Summary

I have audited both repositories (`c:\GitHub\intwish` — the old site + assets, and `c:\GitHub\intwish-website` — the new workspace), the `Prompt.md` brief (Part A/B/C), the existing dev site at `web/`, all 16 case studies, the asset inventory, competitor research, and bleeding-edge design trends for 2026. This plan is the output.

> [!IMPORTANT]
> **The new site will be built in `c:\GitHub\intwish-website`** as a fresh Next.js 16 project. All reusable assets, content data, and locale files from the old `intwish/web/` codebase will be migrated — not copied blindly. The old repo's design system (Tailwind v4, `globals.css` tokens, component library) gives us a massive head start, but every component must be rebuilt to pass the anti-slop audit (A2).

---

## 1. Positioning Decision

**Primary narrative: Blend of options 1 + 3 from A3.**

> *Intwish is a full-stack talent technology partner that owns every layer of the stack — gamified assessment (intOS), AI interview/proctoring (IntReview), gamified LMS, and the custom engineering capability that built all three. The tagline `DefineYourWish();` becomes the site's structural spine: visitors define a problem → Intwish compiles the solution → deployed results follow. This function-signature motif runs as a subtle "define → build → deploy" narrative arc across every page, expressed through monospace type accents, terminal-inspired UI flourishes, and a "compiled output" visual language for results/metrics — not as a gimmick, but as brand-authentic design DNA given the tagline already reads like code.*

**Why this blend wins:**
- **Option 1** (product-suite-led) lets the products be the proof of engineering depth — which is the strongest trust signal for enterprise buyers ("if they built intOS and IntReview themselves, they can build for us").
- **Option 3** (`DefineYourWish();`) gives the site a distinctive structural device that no competitor uses. It unifies 33+ pages under one narrative arc instead of each page improvising its own story.
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

### 3.8 BraceFraming & Card Specifications

- **Metric styling:** Large numbers are framed as `{ 300,000+ }` instead of plain text.
- **Hover states:** Text navigation links and cards reveal subtle, CSS-animated brackets `{ }` on hover.
- **Asymmetric brackets:** Section transitions use light, 1px horizontal braces to anchor layout divisions.
- **Card Specifications:** Explicitly mandate that cards use thin 1px blueprint-style grid framing without fake window chrome, letting the product showcase windows provide the high-end contrast.

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
| `DefineWishKicker` | All pages | Monospace kicker in the `DefineYourWish();` style — `define(problem) → build(solution) → deploy(result)` |
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
| `WindowFrame` | Product pages, Homepage | A wrapper component that automatically renders the macOS window bar (close/minimize/expand buttons, window title, tab triggers) and applies the soft hover-shadow. Used around all screenshots, gameplay videos, and demo embeds. |

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
