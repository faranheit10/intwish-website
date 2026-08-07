# INTWISH WEBSITE — COMPLETE ARCHITECTURE, DESIGN SYSTEM & PAGE-BY-PAGE SPECIFICATION

**Document Version:** 2.0  
**Status:** Approved Technical & Design Specification  
**Primary Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · next-intl 4  
**Target Markets:** Global Enterprise, Kingdom of Saudi Arabia (Public Sector & Vision 2030), GCC & North America  

---

## EXECUTIVE SUMMARY & NARRATIVE SPINE

### 1. Brand Identity & The `DefineYourWish();` Motif
Intwish is positioned as a **full-stack talent technology partner** that owns every layer of the modern hiring and workforce development stack. Unlike point-solution providers that sell isolated test libraries or single video interview tools, Intwish engineers proprietary platform products (**intOS**, **IntReview**, **Gamified LMS**) and leverages the exact custom software engineering capability that built those products to deliver bespoke client solutions.

The company's tagline—`DefineYourWish();`—serves as the structural spine for the entire digital experience. This is expressed through a **function-signature design system**:
$$\text{DefineYourWish}(\text{problem}, \text{requirements}) \longrightarrow \text{CompiledSolution}$$
Across all pages, visitors experience a unified narrative arc:
1. **Define**: The customer specifies their organizational challenge (e.g., candidate drop-off, interview fraud, legacy upskilling).
2. **Build / Compile**: Intwish applies psychometric algorithms, AI proctoring engines, or custom software engineering.
3. **Deploy / Output**: The customer receives verified talent, zero-cheat assessments, or scalable enterprise platforms with quantified metrics.

This motif is instantiated through code-accented monospace kickers, terminal UI frames, dark-mode surfaces, and a two-stage color state (Orange = *Input/Compilation*, Teal = *Compiled/Deployed Output*).

### 2. Positioning & Market Differentiation
Intwish directly addresses key market competitors by highlighting full-stack ownership:
- **Vs. TalentGames**: TalentGames offers generic game assessment libraries integrated into third-party ATSs. Intwish's **intOS** is a simulated recruitment virtual operating system offering deep psychometric mapping, custom branding, and real-time situational simulations.
- **Vs. HireVue**: HireVue provides standard structured video interviewing. Intwish's **IntReview** leads on native mobile anti-cheat engineering, dual-camera monitoring, acoustic anomaly detection, and local sovereign cloud compliance (Saudi KSA / GCC data residency).
- **Custom Engineering Proof**: Intwish's custom software development services are positioned not as a generic IT shop, but as *"the underlying engineering muscle that built our flagship products."*

### 3. The Anti-Slop Design Mandate (A2 Compliance)
To prevent the generic, cookie-cutter aesthetics typical of modern AI-assisted websites, every page strictly enforces the **Anti-Slop Audit Checklist**:
- ❌ **Banned**: Inter-only typography, purple-to-blue gradients, floating plastic 3D blobs, glassmorphism cards with illegible text, uniform scroll fade-ups, and centered heroes with three identical icon cards underneath.
- ✅ **Required**: Dual-typeface contrast (*Space Grotesk* display + *Geist Sans* body + *Geist Mono* code), asymmetric hero layouts, real UI screenshots inside macOS window frames (`WindowFrame`), data visualization dot matrices (`bg-data-viz`), non-uniform motion choreography (`Reveal`), and named enterprise proof.

### 4. Internationalization & Arabic RTL Parity
The website supports 4 core locales:
1. **English (`en`)**: Primary commercial default.
2. **French Canadian (`fr-CA`)**: Enterprise & North American public sector coverage.
3. **Indonesian (`id-ID`)**: High-growth Southeast Asian recruitment market.
4. **Arabic (`ar`)**: Full Right-to-Left (RTL) layout parity catering to Saudi Arabia (Public Sector & Vision 2030) and GCC enterprises.

RTL layout switching is automatic via Next.js locale routing (`src/app/[locale]`), applying `dir="rtl"` to the document body, reversing grid directions, mirroring icons, and utilizing **Noto Sans Arabic** typography.

---

## SECTION 1: SYSTEM ARCHITECTURE & TECHNICAL STACK

### 1.1 Technology Stack Matrix
```
 ┌────────────────────────────────────────────────────────────────────────┐
 │                           NEXT.JS 16 APP ROUTER                        │
 ├────────────────────────────────────────────────────────────────────────┤
 │  React 19 (Server & Client Components)                                 │
 │  TypeScript (Strict Type-Checking & Localized Data Models)             │
 ├────────────────────────────────────────────────────────────────────────┤
 │  STYLING ENGINE                                                        │
 │  Tailwind CSS v4 · Custom CSS Variables (@theme in globals.css)        │
 │  Space Grotesk (Display) · Geist Sans (Body) · Geist Mono (Accents)     │
 ├────────────────────────────────────────────────────────────────────────┤
 │  INTERNATIONALIZATION (i18n)                                           │
 │  next-intl 4 · Locale Routing ([locale]) · Dynamic JSON Message Bundles │
 ├────────────────────────────────────────────────────────────────────────┤
 │  FORM & BACKEND INTEGRATIONS                                           │
 │  MailerSend Transactional API · Client-side Rate Limiter · Honeypot    │
 ├────────────────────────────────────────────────────────────────────────┤
 │  SEO & PERFORMANCE                                                     │
 │  Dynamic Sitemap Generator · Reciprocal Hreflang · JSON-LD Schemas     │
 └────────────────────────────────────────────────────────────────────────┘
```

### 1.2 File Structure & Codebase Organization
```
c:\GitHub\intwish-website\
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── about/            # Page 48: About Us
│   │   │   ├── careers/          # Page 50: Careers
│   │   │   ├── case-studies/     # Pages 19-35: Case Studies Hub & 16 Detail pages
│   │   │   ├── contact/          # Page 52: Contact Us
│   │   │   ├── demo/             # Page 53: Interactive Demo & Sandbox
│   │   │   ├── industries/       # Pages 12-18: Industries Hub & 6 Detail pages
│   │   │   ├── insights/         # Pages 36-47: Insights Hub & 11 Detail pages
│   │   │   ├── privacy/          # Page 54: Privacy Policy
│   │   │   ├── products/         # Pages 2-4: Products Hub, intOS, IntReview
│   │   │   ├── science/          # Page 49: Science & Methodology
│   │   │   ├── services/         # Pages 5-11: Services Hub & 6 Detail pages
│   │   │   ├── terms/            # Page 55: Terms of Service
│   │   │   ├── trust/            # Page 51: Trust, Security & Compliance
│   │   │   ├── globals.css       # Design System Tokens & Utility Classes
│   │   │   ├── layout.tsx        # Locale Layout Wrapper (RTL/LTR, Fonts, i18n)
│   │   │   ├── not-found.tsx     # Page 56: Custom 404 Error Screen
│   │   │   └── page.tsx          # Page 1: Main Homepage
│   │   ├── api/                  # Form Submission & MailerSend Endpoints
│   │   ├── sitemap.ts            # Dynamic XML Sitemap Generator
│   │   └── robots.ts             # Search Engine Crawler Directives
│   ├── components/               # 53+ Modular UI Components
│   ├── content/                  # Strongly-Typed Localized Content Layer
│   │   ├── caseStudies.ts        # 16 Quantified Case Studies
│   │   ├── industries.ts         # 6 Industry Sector Definitions
│   │   ├── insights.ts           # 11 Research Articles & Gated Downloads
│   │   ├── products.ts           # intOS & IntReview Specifications
│   │   ├── services.ts           # 6 Custom Engineering Services
│   │   ├── site.ts               # Global Site Metadata, Team & Milestones
│   │   └── types.ts              # Localized<T> Helper & Data Models
│   ├── i18n/                     # next-intl Configuration & Navigation Helpers
│   └── lib/                      # MailerSend Client, Rate Limiter & Utils
└── public/
    ├── img/                      # WebP Logos, Screenshots, Team Photos
    └── pdf/                      # Enterprise Whitepapers & Security Overviews
```

---

## SECTION 2: THE INTWISH DESIGN SYSTEM (DESIGN.md TOKENS)

### 2.1 Typography System
Typography is structured to create maximum visual hierarchy and eliminate generic appearance.

| Role | Font Family | Variable Name | Character Rationale |
|---|---|---|---|
| **Headlines / Display** | **Space Grotesk** | `--font-space-grotesk` | Geometric, tech-forward, high-contrast character shapes for large section titles. |
| **Body / Interface** | **Geist Sans** | `--font-geist-sans` | Ultra-clean, neutral reading density optimized for long-form data & enterprise copy. |
| **Monospace / Accents** | **Geist Mono** | `--font-geist-mono` | Terminal kickers, code blocks, metrics, and `DefineYourWish();` function signatures. |
| **Arabic / RTL** | **Noto Sans Arabic** | N/A | Clean, legible Arabic typography with native weight support for LTR/RTL parity. |

#### Type Scale (16px / 1rem Base)
- `--text-display-xl`: `4.5rem` (72px) / Line Height 1.05 / Bold (700) — *Homepage Hero Main Title*
- `--text-display-lg`: `3.5rem` (56px) / Line Height 1.1 / Bold (700) — *Product & Service Hero Titles*
- `--text-display`: `2.75rem` (44px) / Line Height 1.15 / SemiBold (600) — *Primary Section Headings*
- `--text-heading-lg`: `2.0rem` (32px) / Line Height 1.25 / SemiBold (600) — *Sub-Section Headings & Card Groups*
- `--text-heading`: `1.5rem` (24px) / Line Height 1.3 / SemiBold (600) — *Feature Card Titles*
- `--text-body-lg`: `1.125rem` (18px) / Line Height 1.6 / Regular (400) — *Lead Paragraphs & Subtitles*
- `--text-body`: `1.0rem` (16px) / Line Height 1.6 / Regular (400) — *Standard Body Text*
- `--text-small`: `0.875rem` (14px) / Line Height 1.5 / Regular (400) — *Captions, Metadata, Badges*
- `--text-xs`: `0.75rem` (12px) / Line Height 1.4 / Medium (500) — *Tags, Terminal Status Counters*
- `--text-mono`: `0.8125rem` (13px) / Line Height 1.5 / Medium (500) — *Code Accents & Function Signatures*

### 2.2 Color System & Token Mapping
The palette relies on a deep dark slate foundation (*Ink Scale*), vibrant brand orange (*Input/Execution*), and precision teal (*Compiled Result/Output*).

```
   INK SURFACE SCALE (Dark Slate)           ACCENT PALETTES
  ┌───────────────────────────────┐        ┌───────────────────────────────┐
  │ ink-950 (#0B0D10) Page Base   │        │ brand-500 (#F15F35) Primary   │
  │ ink-900 (#0E1115) Surface 1   │        │ brand-600 (#E04C24) Hover     │
  │ ink-850 (#12161B) Card Base   │        │ brand-300 (#F9966F) Glow      │
  │ ink-800 (#171C22) Elev. Hover │        ├───────────────────────────────┤
  │ ink-700 (#1F252E) Dividers    │        │ accent-500 (#2DD4BF) Teal Viz │
  │ ink-600 (#2A313B) Muted UI    │        │ accent-400 (#5EEAD4) Success │
  └───────────────────────────────┘        └───────────────────────────────┘
```

| Token Name | Hex / CSS Value | Primary Usage | Contrast Ratio (WCAG) |
|---|---|---|---|
| `--color-ink-950` | `#0B0D10` | Default Page Background | Base Surface |
| `--color-ink-900` | `#0E1115` | Elevated Surface 1 (Section Backgrounds) | 1.05:1 vs 950 |
| `--color-ink-850` | `#12161B` | Elevated Surface 2 (Cards, Window Frames) | 1.12:1 vs 950 |
| `--color-ink-800` | `#171C22` | Elevated Surface 3 (Hover States, Active Cards) | 1.22:1 vs 950 |
| `--color-ink-700` | `#1F252E` | Card Borders, Table Dividers | Subtle Separator |
| `--color-brand-500` | `#F15F35` | Primary CTA Buttons, Active Highlights | 4.85:1 vs 950 |
| `--color-brand-600` | `#E04C24` | Primary Button Hover / Pressed State | Interactive |
| `--color-accent-500` | `#2DD4BF` | Compiled/Deployed Indicators, Data Viz | 7.92:1 vs 950 |
| `--color-paper` | `#E9ECEF` | Primary Body Text & Headlines | 16.2:1 vs 950 (AAA) |
| `--color-muted` | `#9AA2AC` | Secondary Descriptions, Metadata | 7.41:1 vs 950 (AAA) |
| `--color-faint` | `#7E8894` | Captions, Code Comments, Disabled Text | 5.31:1 vs 950 (AA) |
| `--color-line` | `rgba(233,236,239,0.09)` | Default Subtle Border Dividers | Decorative |

### 2.3 Visual Textures, Borders & Elevation
- **`bg-grid` Utility**: 44px × 44px linear dark grid backdrop representing technical precision.
- **`bg-grid-dense` Utility**: 22px × 22px micro-grid for terminal headers and code modules.
- **`bg-data-viz` Utility**: 18px × 18px radial dot pattern used in analytics and psychometric sections.
- **Shadow Tokens**:
  - `--shadow-glow`: `0 0 48px rgba(241, 95, 53, 0.22)` (Brand orange atmospheric glow).
  - `--shadow-glow-teal`: `0 0 48px rgba(45, 212, 191, 0.20)` (Compiled teal output glow).
  - `--shadow-card`: `0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 18px 40px -18px rgba(0, 0, 0, 0.55)`
  - `--shadow-window`: `0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 30px 70px -24px rgba(0, 0, 0, 0.70)`

---

## SECTION 3: SHARED COMPONENT LIBRARY SPECIFICATION

The application is built on 53 reusable, strongly-typed React 19 components located in `src/components/`.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE COMPONENT ARCHITECTURE                     │
├──────────────────────────────────────┬─────────────────────────────────┤
│ NAVIGATION & SHELL                   │ DATA VISUALIZATION & PROOF      │
│ • Header.tsx                         │ • AnimatedStatCounter.tsx       │
│ • Footer.tsx                         │ • ClientLogoMarquee.tsx         │
│ • NavigationAnnouncement.tsx         │ • MetricsBox.tsx                │
│ • LocaleSwitcher.tsx                 │ • ComparisonMatrix.tsx          │
│ • StickyMobileCTA.tsx                │ • ROICalculator.tsx             │
├──────────────────────────────────────┼─────────────────────────────────┤
│ CONTAINERS & FRAMES                  │ INTERACTIVE FORMS & DEMOS       │
│ • WindowFrame.tsx                    │ • SegmentedContactForm.tsx      │
│ • Section.tsx                        │ • DemoForm.tsx                  │
│ • SectionHeading.tsx                 │ • GatedResourceForm.tsx         │
│ • DefineWishKicker.tsx               │ • OSSandbox.tsx                 │
├──────────────────────────────────────┼─────────────────────────────────┤
│ CARDS & GRID LAYOUTS                 │ METHODOLOGY & CONTENT           │
│ • ProductShowcase.tsx                │ • TimelineVertical.tsx          │
│ • CaseStudyCard.tsx                  │ • StepFlowDiagram.tsx           │
│ • InsightCard.tsx                    │ • TeamGrid.tsx                  │
│ • FilterableGrid.tsx                 │ • FAQ.tsx                       │
└──────────────────────────────────────┴─────────────────────────────────┘
```

### Key Component Functional Profiles

1. **`Header.tsx`**
   - **Description**: Sticky global navigation header with integrated backdrop blur (`backdrop-blur-md`).
   - **Features**: Multi-column mega-menu for Products & Services, industry links, live locale switcher modal (`LocaleSwitcher`), mobile drawer with full touch support, and "Schedule Demo" primary action button.
   - **RTL Support**: Automatic reversal of brand logo, drop-down menus, and action triggers.

2. **`WindowFrame.tsx`**
   - **Description**: Simulated macOS window container used to house screenshots, live app previews, and terminal interfaces.
   - **Features**: Includes authentic macOS traffic light buttons (Close `#FF5F57`, Minimize `#FEBC2E`, Maximize `#28C840`), customizable window title bar, dark inner frame shadow (`--shadow-window`), and optional address bar url string.

3. **`DefineWishKicker.tsx`**
   - **Description**: Code-accented kicker badge rendering function signature syntax.
   - **Usage**: Displayed above section headings (e.g., `DefineYourWish(service: "ai-solutions") => CompiledModule`). Uses Geist Mono typeface with orange bracket highlights.

4. **`AnimatedStatCounter.tsx`**
   - **Description**: Scroll-triggered animated numerical counter powered by IntersectionObserver.
   - **Features**: Smooth ease-out duration (`600ms`), target value calculation, customizable prefix/suffix (`+`, `%`, `k`), and fallback static rendering for SSR.

5. **`ClientLogoMarquee.tsx`**
   - **Description**: Infinite horizontal marquee displaying 28 enterprise client logos.
   - **Features**: Dual-strip infinite CSS animation loop, automatic grayscale-to-full-color transition on hover, pause-on-hover accessibility support, and responsive scaling.

6. **`ROICalculator.tsx`**
   - **Description**: Interactive financial and time-savings calculator for enterprise HR leaders.
   - **Inputs**: Annual Hiring Volume (slider: 50 – 10,000 candidates), Average Hourly Recruiter Cost (slider: $25 – $150/hr).
   - **Outputs**: Hours Saved Annually, Total Dollar Savings, Time-to-Fill Reduction Percentage. Features interactive chart bars using Teal Accent (`#2DD4BF`).

7. **`OSSandbox.tsx`**
   - **Description**: Interactive product sandbox embed previewing intOS candidate simulations.
   - **Features**: Scenario switcher tabs (Cognitive Challenge, Situational Judgment, Coding Simulation), full-screen toggle, interactive control panel, and direct demo request trigger.

8. **`SegmentedContactForm.tsx`** & `SegmentedContactFormWithIntent.tsx`
   - **Description**: Enterprise lead capture form with intent-based tab routing.
   - **Intent Tabs**: Enterprise Sales, Custom Engineering, Sandbox Request, Strategic Partnership.
   - **Features**: Multi-step field progression, real-time validation with danger tokens (`--color-danger-500`), MailerSend API integration, honeypot spam protection, and rate-limiting feedback.

9. **`GatedInsightBody.tsx`** & `GatedResourceForm.tsx`
   - **Description**: Content gating mechanism for premium whitepapers and research reports.
   - **Behavior**: Displays the first 30% of the article, applies a CSS blur-to-gradient mask over remaining sections, and locks full access behind a short business-email capture form.

10. **`ConsentManager.tsx`**
    - **Description**: GDPR/PIPEDA-compliant cookie banner with persistent state management.
    - **Features**: Granular preference selection (Necessary, Analytics, Marketing), custom consent modal, non-blocking script execution, and persistent storage in `localStorage`.

---

## SECTION 4: EXHAUSTIVE PAGE-BY-PAGE SPECIFICATION

The site encompasses **56 distinct page URLs** organized across 7 major architectural archetypes.

---

### 4.1 ARCHETYPE 1: MAIN HOMEPAGE & OVERVIEW HUBS

#### PAGE 1: Main Homepage
- **URL**: `/[locale]/`
- **Archetype**: Homepage (Single Master Instance)
- **Core Objective**: Establish immediate enterprise trust, showcase full-stack product & engineering capability, and drive high-intent demo requests.
- **Hero UI/UX**:
  - **Layout**: Asymmetric 2-Column Grid (60% Copy / 40% Interactive Window Frame).
  - **Copy**: Mono kicker `DefineYourWish(target: "EnterpriseTalent");` followed by Space Grotesk Display Title: *"The Talent Technology Partner That Engineers Its Own Stack."*
  - **CTAs**: Primary Brand Button *"Schedule Sandbox Demo"* + Secondary Line Button *"Explore intOS Platform"*.
  - **Visual Asset**: `WindowFrame` containing a live product screenshot of intOS dashboard with animated data pills.
- **Page Content Blocks (Visual Order)**:
  1. **Asymmetric Hero Section** (with real product capture).
  2. **Proof & Stat Counter Band**: `AnimatedStatCounter` grid showcasing *100,000+ Candidates Assessed*, *99.4% Anti-Cheat Accuracy*, *45% Faster Time-to-Fill*, *28+ Enterprise Clients*.
  3. **Client Logo Wall**: `ClientLogoMarquee` running 28 enterprise client logos (Bank Alfalah, HBL, PTCL, Shell, K-Electric, SCBC, etc.).
  4. **Product Suite Overview**: 3 distinct cards highlighting **intOS** (recruitment virtual OS), **IntReview** (AI video proctoring), and **Gamified LMS**, each featuring terminal code badges and direct feature links.
  5. **Services Engineering Band**: *"The Capability Behind Our Products"* — 6-card grid showcasing Custom Software, AI Agents, Gamification, Mobile Apps, Web Dev, Cloud & DevOps.
  6. **Quantified Case Study Spotlight**: 3 prominent enterprise case study cards featuring real metrics callouts (e.g., Top Saudi Bank graduate program).
  7. **Science & Methodology Teaser**: Highlights psychometric validity (Big Five + Cognitive) and AI fairness architecture.
  8. **Trust, Security & Compliance Strip**: ISO/IEC 27001 badge, SBP guidelines alignment, GDPR compliance, and KSA local cloud hosting indicators.
  9. **Closing CTA Band**: Split container featuring direct booking widget and instant sandbox launcher.

---

#### PAGE 2: Products Overview Page
- **URL**: `/[locale]/products`
- **Archetype**: Overview Hub
- **Core Objective**: Present the complete suite of Intwish platform products, allow direct comparative evaluation against competitors, and provide instant interactive sandbox access.
- **Hero UI/UX**: Asymmetric split header with product architecture toggle (intOS vs. IntReview vs. Gamified LMS).
- **Page Content Blocks**:
  1. **Ecosystem Hero**: Positioned around owning the talent technology stack.
  2. **Product 1 — intOS Deep Dive Card**: Details 40+ interactive role simulations, psychometric engines, candidate drop-off reduction, and ATS integrations.
  3. **Product 2 — IntReview Deep Dive Card**: Highlights mobile-native anti-cheat proctoring, acoustic sentiment analysis, and automated scoring rubrics.
  4. **Product 3 — Gamified LMS Preview**: Interactive learning paths, badge certifications, and enterprise skill verification.
  5. **Interactive Product Sandbox Embed**: `OSSandbox` component letting users test a candidate simulation directly on page.
  6. **Head-to-Head Comparison Matrix**: `ComparisonMatrix` comparing intOS vs. TalentGames (test library) and IntReview vs. HireVue (standard video interview).
  7. **Interactive ROI Calculator**: `ROICalculator` widget estimating annual cost and hour savings based on hiring volume.
  8. **Closing CTA**: Demo schedule trigger.

---

#### PAGE 5: Services Overview Page
- **URL**: `/[locale]/services`
- **Archetype**: Overview Hub
- **Core Objective**: Showcase Intwish’s custom software development, AI, gamification, and cloud engineering capabilities.
- **Hero UI/UX**: Terminal-inspired header reading `DefineYourWish(service: "custom-engineering");`.
- **Page Content Blocks**:
  1. **Engineering Capabilities Hero**.
  2. **6 Core Service Cards Grid**:
     - Custom Software Development
     - AI Solutions & AI Agents
     - Gamification & Game Development
     - Mobile App Development
     - Web Development
     - Cloud & DevOps Engineering
  3. **Engineering Process Timeline**: `TimelineVertical` detailing Discovery → Architecture → Sprint Build → QA & Penetration Testing → Deployment.
  4. **Enterprise Technology Stack Matrix**: Interactive tech badges (React, Next.js, Node, Python, TensorFlow, Flutter, AWS, KSA Sovereign Cloud).
  5. **Client Case Studies Filter**: Filterable grid displaying custom engineering project outcomes.
  6. **Contact Form Embed**: `SegmentedContactFormWithIntent` pre-selected for engineering inquiries.

---

#### PAGE 12: Industries Overview Page
- **URL**: `/[locale]/industries`
- **Archetype**: Overview Hub
- **Core Objective**: Map Intwish products and engineering services to specialized vertical markets in Saudi Arabia, GCC, and global regions.
- **Page Content Blocks**:
  1. **Industry Solution Hero**.
  2. **6 Industry Vertical Cards**:
     - Public Sector & Saudi Vision 2030 Initiatives
     - Banking, Financial Services & Fintech
     - Telecommunications & Tech Enterprises
     - Higher Education & EdTech
     - Retail, FMCG & E-Commerce
     - Healthcare & Pharmaceuticals
  3. **Regulatory & Compliance Matrix**: Details alignment with SAMA, SBP, KSA Cybersecurity Authority (NCA), and NDMO guidelines.
  4. **Industry-Specific Case Study Links & CTAs**.

---

#### PAGE 19: Case Studies Hub Page
- **URL**: `/[locale]/case-studies`
- **Archetype**: Content Hub
- **Core Objective**: Serve as a searchable repository of 16 quantified client success stories.
- **Page Content Blocks**:
  1. **Results-First Hero Header**.
  2. **Category Filter Bar**: `FilterableGrid` allowing instant filtering by Product (intOS, IntReview), Service (Custom Dev, Gamification), or Industry (Banking, Public Sector, Telecom).
  3. **Case Study Grid**: 16 `CaseStudyCard` components featuring client sector badges, quantified metric pills (+75% faster fill, 99.4% accuracy), project summaries, and read links.
  4. **Spotlight Feature**: Detailed breakdown of flagship Saudi Public Sector digital assessment deployment.

---

#### PAGE 36: Insights Hub Page
- **URL**: `/[locale]/insights`
- **Archetype**: Research & Resource Hub
- **Core Objective**: Establish thought leadership in psychometrics, AI ethics, game mechanics, and Saudi Vision 2030 talent digitization.
- **Page Content Blocks**:
  1. **Research & Thought Leadership Hero**.
  2. **Featured Whitepaper Download Banner**: `GatedResourceForm` for downloading *"The 2026 Enterprise Talent Technology Report"*.
  3. **Category Filter Tabs**: Psychometrics, AI Governance, Gamification, Saudi Arabia Focus, Engineering Insights.
  4. **Article Grid**: 11 `InsightCard` components showing read times, topic tags, publication dates, and excerpt previews.

---

### 4.2 ARCHETYPE 2: PRODUCT DETAIL PAGES

#### PAGE 3: intOS Product Detail Page
- **URL**: `/[locale]/products/intos`
- **Archetype**: Product Detail
- **Core Objective**: Drive enterprise conversion for intOS by demonstrating simulation gameplay, psychometric validity, and ATS integration.
- **Page Content Blocks**:
  1. **Product Hero**: Asymmetric split layout with `DefineYourWish(product: "intOS");`, video preview player (`GameVideo`), and "Launch Demo" CTA.
  2. **Platform Architecture**: 40+ job simulation games categorized by Cognitive Capacity, Problem Solving, Work Ethic, and Emotional Intelligence.
  3. **Video Gallery & Screen Showcase**: Interactive tabbed screenshots showing the candidate virtual desktop, task simulator, and recruiter scoring analytics.
  4. **Psychometric Science & Fairness Panel**: Explains algorithm mapping to Big Five personality and g-factor cognitive metrics with zero demographic bias.
  5. **ATS Integration Ecosystem**: Logos & specs for Workday, SuccessFactors, Taleo, Greenhouse, and Lever APIs.
  6. **Product ROI Metrics Box**: +300% candidate completion rate, 45% reduction in cost-per-hire, 70% candidate NPS.
  7. **Filtered intOS Case Studies**: 3 specific client stories (e.g., Bank Trainee Program).
  8. **Demo Request Form**: `DemoFormWithIntent`.

---

#### PAGE 4: IntReview Product Detail Page
- **URL**: `/[locale]/products/intreview`
- **Archetype**: Product Detail
- **Core Objective**: Position IntReview as the premier AI video interviewing and automated proctoring platform with uncompromised integrity.
- **Page Content Blocks**:
  1. **Product Hero**: Features dual video stream UI inside `WindowFrame` showing real-time proctoring flag overlays.
  2. **Anti-Cheat Integrity Suite**: Details 6-layer security (Mobile OS app locking, face verification, eye tracking, background noise analysis, dual-camera setup, browser lockdown).
  3. **AI Scoring & Rubric Engine**: Automated interview transcription, sentiment evaluation, competency keyword matching, and human-in-the-loop audit controls.
  4. **Sovereign Cloud & Data Privacy**: Explains KSA local server deployment (Riyadh), encryption protocols (AES-256), and GDPR candidate consent workflows.
  5. **Feature Matrix vs. Legacy Video Tools**: Comparative table showing advantages over traditional single-camera video interview tools.
  6. **Dedicated Case Studies & Instant Trial Booking**.

---

### 4.3 ARCHETYPE 3: SERVICE DETAIL PAGES (6 DEDICATED PAGES)

Every Service Detail Page follows a rigorous technical structure:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SERVICE DETAIL PAGE BLUEPRINT                   │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Hero with Terminal Kicker: DefineYourWish(service: "slug")          │
│ 2. Core Capabilities & Architecture Breakdown (Grid/Accordion)         │
│ 3. Engineering Stack & Framework Badges                                │
│ 4. Industry Use Cases & Application Scenarios                          │
│ 5. Filtered Client Case Studies (Quantified Proof)                     │
│ 6. Interactive Segmented Lead Form (Pre-selected Intent)               │
└────────────────────────────────────────────────────────────────────────┘
```

#### PAGE 6: Custom Software Development
- **URL**: `/[locale]/services/custom-software`
- **Content**: Architecture design, legacy modernization, enterprise web/mobile apps, API integrations.
- **UI Highlights**: Terminal code preview, software architecture diagram, case studies for logistics ERP and e-commerce vendor portals.

#### PAGE 7: AI & AI Agents / Chatbots
- **URL**: `/[locale]/services/ai-solutions`
- **Content**: Agentic automation, custom LLM fine-tuning, NLP sentiment engines, automated HR candidate assistants.
- **UI Highlights**: Interactive AI agent conversation flow preview, data safety guardrails panel, insurance chatbot case study.

#### PAGE 8: Gamification & Game Development
- **URL**: `/[locale]/services/gamification`
- **Content**: WebGL/Canvas game engines, behavioral mechanics, reward systems, enterprise learning games.
- **UI Highlights**: Game mechanic taxonomy grid (Points, Badges, Leaderboards, Quests, Simulations), mobile fintech gamification case study.

#### PAGE 9: Mobile App Development
- **URL**: `/[locale]/services/mobile-apps`
- **Content**: iOS, Android, Flutter, React Native, cross-platform enterprise tools, offline synchronization.
- **UI Highlights**: Smartphone mockup frame, performance benchmark charts, vendor app case study.

#### PAGE 10: Web Development
- **URL**: `/[locale]/services/web-development`
- **Content**: Next.js App Router, React, high-performance marketing engines, headless CMS integrations, Web Vitals optimization.
- **UI Highlights**: Page speed score metric (+99 Lighthouse score), responsive breakpoint previewer.

#### PAGE 11: Cloud & DevOps Engineering
- **URL**: `/[locale]/services/cloud-devops`
- **Content**: Infrastructure as Code (Terraform), Kubernetes orchestration, CI/CD pipelines, KSA sovereign cloud setup, penetration testing.
- **UI Highlights**: Multi-region deployment map, zero-downtime deployment diagram, government national exam cloud case study.

---

### 4.4 ARCHETYPE 4: INDUSTRY DETAIL PAGES (6 DEDICATED PAGES)

Each Industry Detail Page addresses sector-specific operational challenges, regulatory constraints, and tailored Intwish solutions.

#### PAGE 15: Public Sector & KSA Vision 2030
- **URL**: `/[locale]/industries/public-sector-ksa`
- **Key Themes**: Saudization compliance, government digital transformation, Arabic-first UX, KSA local cloud data sovereignty (Riyadh data centers).
- **Proof**: 50,000+ government candidates assessed across Saudi authorities.

#### PAGE 16: Banking, Financial Services & Fintech
- **URL**: `/[locale]/industries/banking-finance`
- **Key Themes**: SBP & SAMA cybersecurity compliance, quantitative talent screening, anti-cheat proctoring for bank academies.
- **Proof**: Deployed at Bank Alfalah, HBL, and Faysal Bank.

#### PAGE 17: Telecommunications & Tech Enterprises
- **URL**: `/[locale]/industries/telecom-tech`
- **Key Themes**: High-volume software engineering recruitment, automated coding challenge simulations, scalable assessment pipelines.
- **Proof**: Deployed at PTCL and regional tech firms.

#### PAGE 18: Higher Education & EdTech
- **URL**: `/[locale]/industries/education-edtech`
- **Key Themes**: University student admissions testing, campus recruitment drives, gamified learning platforms.
- **Proof**: 100,000+ student users on custom gamified LMS.

#### PAGE 19: Retail, FMCG & E-Commerce
- **URL**: `/[locale]/industries/retail-ecommerce`
- **Key Themes**: Mass frontline worker screening, situational judgment game tests, reducing 90-day turnover.
- **Proof**: Deployed at Daraz and international FMCG brands.

#### PAGE 20: Healthcare & Pharmaceuticals
- **URL**: `/[locale]/industries/healthcare-pharma`
- **Key Themes**: Clinical scenario assessments, medical compliance verification, secure AI video proctoring.
- **Proof**: Zero-incident medical licensing exam proctoring deployment.

---

### 4.5 ARCHETYPE 5: CASE STUDY DETAIL PAGES (16 INDIVIDUAL PAGES)

Every Case Study Detail Page is rendered dynamically via `/[locale]/case-studies/[slug]` and adheres to a 4-part structure:
1. **Header & Key Metrics Box**: Client industry, region, solution type, and high-impact stat callouts (`MetricsBox`).
2. **The Challenge**: Detailed operational narrative describing pre-deployment pain points.
3. **The Intwish Solution**: Technical implementation architecture, product configuration, and engineering delivery.
4. **Verified Results & PDF Export**: Quantified outcomes, ROI breakdown, and `PrintPdfButton` trigger.

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    16 QUANTIFIED CASE STUDY DIRECTORY                      │
├────┬──────────────────────────────────────────┬────────────────────────────┤
│ #  │ Slug Path                                │ Headline Metric            │
├────┼──────────────────────────────────────────┼────────────────────────────┤
│ 21 │ saudi-public-sector-digital-assessment   │ 50,000+ Candidates         │
│ 22 │ top-5-bank-graduate-trainee-program       │ 75% Faster Hiring          │
│ 23 │ telecom-giant-tech-hiring                │ 12,000 Applicants/Mo       │
│ 24 │ edtech-gamified-learning-platform        │ 100,000 Student Users      │
│ 25 │ retail-group-frontline-screening         │ 80% Drop in Early Turnover │
│ 26 │ healthcare-system-ai-proctoring          │ 99.8% Integrity Rate       │
│ 27 │ fintech-mobile-app-gamification          │ +42% User Retention        │
│ 28 │ logistics-enterprise-custom-erp          │ 4-Month Delivery           │
│ 29 │ global-consulting-firm-recruitment       │ 4 Locales Supported        │
│ 30 │ government-authority-national-exam       │ 100% KSA Sovereign Cloud   │
│ 31 │ insurance-leader-ai-chatbot              │ 60% Support Automation     │
│ 32 │ university-system-admissions             │ 35,000 Applicants          │
│ 33 │ energy-conglomerate-skill-matrix         │ 5,000 Employee Skills Mapped│
│ 34 │ e-commerce-marketplace-vendor-app       │ 15,000 Active Sellers      │
│ 35 │ banking-group-cybersecurity-lms          │ 94% Employee Completion    │
│ 36 │ multinational-fmcg-leadership-track     │ 2.5x Leadership Pool       │
└────┴──────────────────────────────────────────┴────────────────────────────┘
```

---

### 4.6 ARCHETYPE 6: INSIGHT ARTICLE DETAIL PAGES (11 INDIVIDUAL ARTICLES)

Rendered via `/[locale]/insights/[slug]`, these research pieces establish domain authority and capture high-intent enterprise leads.

#### Content Structure:
- Article Header with reading time, author card, and topic tags.
- Sticky Table of Contents navigation bar (`InsightSections`).
- Embedded data visualization tables (`InsightTable`).
- **Gated Access Overlay** (`GatedInsightBody` + `GatedResourceForm`): Applies a gradient blur over sections 3–5 until the user submits their work email.

#### 11 Research Topics:
1. `future-of-gamified-assessments-2026`: Game psychometrics vs. traditional static testing.
2. `ai-interview-proctoring-governance-ksa`: Compliance with SAMA, NDMO, and Saudi AI regulations.
3. `reducing-time-to-hire-in-banking`: How gamification slashes graduate recruitment cycles.
4. `saudi-vision-2030-talent-digitization`: Sovereign cloud frameworks for public sector talent.
5. `psychometric-validity-in-game-simulations`: Mathematical proof of game-based cognitive scoring.
6. `building-scalable-custom-software`: Enterprise architectural design for modern web & mobile apps.
7. `ai-agents-in-hr-tech`: Generative AI and autonomous agentic workflows in recruitment.
8. `mobile-first-recruitment-strategies`: Engaging Gen-Z talent via smartphone-native OS simulations.
9. `combating-cheat-methods-in-remote-assessments`: Technical breakdown of IntReview's proctoring algorithms.
10. `gamified-lms-for-enterprise-upskilling`: Increasing employee course completion from 15% to 88%.
11. `roi-of-talent-technology`: A financial model for enterprise HR digital transformation.

---

### 4.7 ARCHETYPE 7: CORPORATE, METHODOLOGY & UTILITY PAGES

#### PAGE 48: About Us
- **URL**: `/[locale]/about`
- **Core Objective**: Tell the Intwish founding story, present executive leadership, and communicate company values.
- **Blocks**: Vision Hero → `DefineYourWish();` Philosophy → History & Milestones Timeline (`TimelineVertical`) → Executive Leadership Grid (`TeamGrid` showcasing CEO Khurram Izhar Siddiqui, CSO Zaid Izhar Siddiqui, CTO Mateen Ahmed, COO Muhammad Faran) → Global Footprint (Riyadh & Regional Hubs).

---

#### PAGE 49: Science & Methodology
- **URL**: `/[locale]/science`
- **Core Objective**: Provide scientific proof of psychometric validity, AI fairness, and anti-bias scoring algorithms.
- **Blocks**: Science Hero → Psychometric Framework (`StepFlowDiagram` mapping Big Five + Cognitive g-factor to game actions) → AI Ethics & Bias Prevention Policy → Proctoring Technical Architecture → Academic Validation References → Download Psychometric Whitepaper CTA.

---

#### PAGE 50: Careers Page
- **URL**: `/[locale]/careers`
- **Core Objective**: Attract top-tier software engineers, AI researchers, and psychometricians.
- **Blocks**: Culture & Engineering Philosophy Hero → Perks & Benefits Grid → Open Positions List (Engineering, AI, Product, Psychometrics) → Resume Submission Form.

---

#### PAGE 51: Trust, Security & Compliance Page
- **URL**: `/[locale]/trust`
- **Core Objective**: Provide complete transparency regarding enterprise data security, certifications, and compliance posture.
- **Blocks**: Security Hero → ISO/IEC 27001 Certification Overview → Regional Compliance Badges (SAMA, SBP, KSA NCA, GDPR, PIPEDA) → Data Sovereignty & Encryption Standards (AES-256, TLS 1.3) → Downloadable SOC 2 & Security Artifacts.

---

#### PAGE 52: Contact Us Page
- **URL**: `/[locale]/contact`
- **Core Objective**: Convert inbound inquiries through a multi-purpose segmented lead form.
- **Blocks**: Contact Hero → `SegmentedContactForm` (Intent Selector: Sales, Engineering, Demo, Partnership) → Direct Contact Cards (Email, Phone, Office Locations) → Enterprise FAQ Accordion (`FAQ`).

---

#### PAGE 53: Interactive Demo & Sandbox Page
- **URL**: `/[locale]/demo`
- **Core Objective**: Offer immediate self-serve sandbox testing of intOS and IntReview.
- **Blocks**: Sandbox Hero → Full-Screen `OSSandbox` Embed → Instant Demo Scheduler Form (`DemoForm`).

---

#### PAGE 54: Privacy Policy Page
- **URL**: `/[locale]/privacy`
- **Content**: GDPR, PIPEDA, and KSA Personal Data Protection Law (PDPL) disclosure text, data retention schedules, candidate data deletion requests, and `CookieSettingsButton`.

---

#### PAGE 55: Terms of Service Page
- **URL**: `/[locale]/terms`
- **Content**: Master service agreement text, intellectual property ownership, SLA commitments, limitation of liability, and governing law.

---

#### PAGE 56: 404 Custom Not Found Page
- **URL**: `/[locale]/not-found` (and all unmatched routes)
- **UI/UX**: Terminal screen displaying `ERROR 404: ROUTE_NOT_COMPILED`, command-line search box, and direct shortcuts to Core Pages.

---

## SECTION 5: CONTENT LAYER & DATA DICTIONARY

All website copy is decoupled from components and stored in strongly-typed, localized TypeScript modules inside `src/content/`.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        LOCALIZED CONTENT ARCHITECTURE                  │
├────────────────────────────────────────────────────────────────────────┤
│ type Localized<T> = {                                                  │
│   en: T;                                                               │
│   "fr-CA"?: T;                                                         │
│   "id-ID"?: T;                                                         │
│   ar?: T;                                                              │
│ };                                                                     │
├────────────────────────────────────────────────────────────────────────┤
│ MODULE DICTIONARY                                                      │
│ • site.ts        → Global Metadata, 28 Client Logos, Team, Timeline   │
│ • products.ts    → intOS & IntReview Specs, Feature Matrices           │
│ • services.ts    → 6 Custom Engineering Service Definitions            │
│ • industries.ts  → 6 Vertical Market Profiles & Regulatory Data       │
│ • caseStudies.ts → 16 Quantified Case Studies (LOC: 108,000+)           │
│ • insights.ts    → 11 Research Articles & Gated Whitepapers           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 6: ACCESSIBILITY, PERFORMANCE & GOVERNANCE

### 1. Web Accessibility (WCAG 2.1 AA Compliance)
- **Contrast Ratios**: Body copy (`--color-paper` `#E9ECEF` on `--color-ink-950` `#0B0D10`) achieves **16.2:1 (AAA)**. Secondary muted copy (`--color-muted` `#9AA2AC`) achieves **7.41:1 (AAA)**. Faint captions (`#7E8894`) achieve **5.31:1 (AA)**.
- **Focus Indicator**: Custom focus ring `:focus-visible { outline: 2px solid #F15F35; outline-offset: 3px; }`.
- **Keyboard Navigation**: Full tab ordering across interactive cards, modals, sliders, and form step controls.
- **Screen Reader Support**: ARIA attributes (`aria-expanded`, `aria-selected`, `aria-live`) on sliders, accordions, and locale switchers.

### 2. Performance Engineering & Web Vitals
- **Target Performance Budget**: Largest Contentful Paint (LCP) `< 1.2s`, First Input Delay (FID) `< 100ms`, Cumulative Layout Shift (CLS) `< 0.05`.
- **Asset Optimization**: Next.js Image Component used exclusively with WebP conversion, custom responsive sizes, and lazy loading.
- **Code-Splitting**: Dynamic import of heavy interactive widgets (`ROICalculator`, `OSSandbox`, `SegmentedContactForm`).
- **CSS Delivery**: Single static utility bundle via Tailwind v4 CSS variables (`globals.css`), eliminating runtime CSS-in-JS overhead.

---

### SUMMARY OF WEBSITE COVERAGE
This specification encapsulates **100% of the Intwish website architecture**, spanning **56 distinct URLs**, **53 custom components**, **4 supported locales with RTL parity**, **6 engineering services**, **6 industry verticals**, **16 quantified case studies**, and **11 technical research publications**.
