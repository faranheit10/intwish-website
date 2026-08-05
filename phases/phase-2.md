# Phase 2: Product Pages

## Phase 2 Tasks

- `[ ]` **P-01:** intOS product page
- `[ ]` **P-02:** IntReview product page
- `[ ]` **P-03:** Products index page

---

## Phase 2 Detailed Specifications

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
