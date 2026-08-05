# Intwish Website Revamp — Program Brief & Multi-Agent Execution Framework

**v2 — restructured for a 33-page overhaul executed by multiple agents in phases.**

This version splits the original brief into two tiers:

- **Part A — The Shared Foundation.** Brand rules, research grounding, the anti-slop checklist, page-type blueprints, and the component contract. **Every agent, on every phase, reads this before touching anything.** It's what keeps 33 pages built by different agents from looking like 33 different websites.
- **Part B — Phase 0: Planning Agent Mandate.** The very first agent's *only* job is to produce a detailed implementation plan against Part A and its own audit of the current codebase. It writes no page code. Its output is what gets sliced into tickets for the agents in Part C.
- **Part C — Execution Agent Protocol.** The rules every subsequent agent follows when picking up a ticket from the Phase 0 plan.

Decisions already made are stated as facts below, not questions. Where a real number, logo, or asset is needed, it's marked [All assets from the website folder/placeholder]. Everything else — structure, phasing, exact page count, creative direction within the guardrails — is the Planning Agent's and Execution Agents' call to make and document, not something to punt back upstream.

---

# PART A — The Shared Foundation

## A0. Non-negotiables

- **Brand identity stays**: Intwish logo and the tagline `DefineYourWish():` — preserved, pushed further visually than today (see A3).
- **Never fabricate**: client names, logos, quotes, headcounts, NPS/ROI numbers, awards, or certifications. A clearly marked placeholder is fine; an invented fact is not, ever, on any page, by any agent.
- **Scope**: marketing/corporate site only. Don't touch the intOS, IntReview, or LMS product codebases themselves.
- **No page ships without passing** the anti-slop audit (A2) and the performance budget (A7).
- **No agent invents new design tokens, colors, fonts, or one-off components** without first proposing the extension back into the shared system (A6) so every other agent inherits it too. Silent one-offs are the fastest way a 33-page multi-agent build turns into a mess.

## A1. Why the current site reads as "AI slop" — the data behind it

Not a subjective complaint — this is measurable:

- Visitors form a credibility judgment about a website in about **50 milliseconds**, and that snap judgment is **94% design-related**. The first 3–5 seconds either earn trust or lose it; there's little recovery after.
- Sites that read as AI-generated and undifferentiated convert roughly **91% worse** than sites with a considered design point of view. Sameness is the failure, not any single flaw.
- Load speed compounds it: a B2B page loading in **1 second converts 3x higher than one loading in 5, and 5x higher than one loading in 10**. A 1-second delay alone costs ~7% of conversions.
- Trust signals (logos, named proof, security badges) placed **near the CTA** lift conversion 34–42%; social proof directly under a CTA can lift it up to 68%. Trust signals buried in a footer barely register.
- Median B2B conversion is ~2.9%; HR-tech specifically benchmarks at 3–6% visitor-to-lead when trust and relevance are handled well. That's the real bar, not "does it look fine."

**Implication**: positioning, trust architecture, and page speed have to move together across all 33 pages. A visual skin change alone will still underperform.

## A2. The anti-slop checklist — the QA gate for every page, every agent

Recent design research converges on the same recurring tells across AI-generated B2B sites. Treat this as a literal audit checklist, not inspiration.

**Banned by default (require a deliberate, documented reason to break):**
- Inter as the only typeface anywhere
- Purple-to-blue gradient hero backgrounds, or glowing gradient "orbs"
- Glassmorphism / frosted-glass cards
- A perfectly centered hero + exactly three icon feature cards underneath
- One oversized centered icon sitting above every section heading
- Floating abstract 3D blobs or "too-smooth" plastic illustration
- Generic stock photography ("diverse team smiling at a laptop")
- Uniform fade-in-on-scroll applied identically to every element with no other motion vocabulary
- Buttons/hovers that snap instead of transitioning, or do nothing

**Required instead:**
- Every page built strictly on the locked `DESIGN.md` tokens (A6) — no ad hoc styling.
- A committed layout point of view per archetype (A5) — asymmetry, distinctive hero structure — not the default centered-hero-then-cards pattern.
- Real assets wherever possible: actual product UI capture from intOS/IntReview/LMS, not stock imagery.
- Intentional micro-interactions on interactive elements — this is a gamification company; interaction states are a brand opportunity.

**Every execution agent runs this checklist against its own page(s) before marking a ticket complete.**

## A3. Positioning

- **TalentGames** (intOS's direct rival): a pure-play gamified assessment content library, sold as a point solution, integrated into other companies' ATS/LMS. Its site leans on animated stat counters, named/photographed testimonials, a dedicated "Science" page, an awards band, and use-case-based solution pages.
- **HireVue** (IntReview's direct rival): positioned as enterprise structured-interview and governance infrastructure — buyers there care about compliance, ATS integration, and scoring consistency at scale.
- Neither sells the other's category, and neither builds custom software. **Intwish's real differentiator: it's the only vendor here that owns the full stack** — gamified assessment (intOS), AI interview/exam monitoring with anti-cheat (IntReview), a gamified LMS, and the custom AI/app/web/game development capability that built all three. "One partner instead of five vendors, and the proof is we built our own product line" is a defensible position, but it has to be stated explicitly, not implied.

**Confirmed**: the Saudi public-sector business gets distinct treatment — not folded silently into the general commercial narrative. The Planning Agent decides the exact form (a dedicated Industry/Sector page at minimum per A5; full Arabic-language parity and/or a visually separate enterprise/government track are options to evaluate) and documents the recommendation with rationale in its plan output.

**Positioning narrative — Planning Agent's call, to be made once and documented, then applied consistently across all 33 pages:**
1. *Full-stack talent technology partner* — lead with the product suite, use custom-dev services as proof of engineering depth behind them.
2. *We build what point solutions can't* — lead with engineering/services capability, use intOS/IntReview/LMS as flagship case studies.
3. Lean on `DefineYourWish():` as a structural device site-wide (define the problem → Intwish compiles/builds the solution) — legitimate since it's the brand's own tagline, not invented. A subtle "code/terminal/compiled-output" visual motif (monospace accents, a define→build→deploy narrative spine) is a real option here, not a gimmick, given the tagline already reads like a function signature.

Pick one as primary (a blend of 1 and 3, or 2 and 3, are both coherent) — write the one-paragraph rationale into the Phase 0 plan so every subsequent agent inherits the same narrative spine instead of improvising per page.

## A4. Trust architecture — solving "strong client list, no direct testimonials"

In order of ease and actual conversion impact:

1. **Named logo wall + aggregate metrics.** ~76% of high-converting B2B pages lead with a logo wall; this requires no one to write a quote. **[NEEDS REAL DATA/ASSET FROM FARAN: approved-for-public-use client logo list; real headline figures — candidates/employees assessed, clients served, years active, regions covered]**
2. **Attributed-but-anonymized case detail.** "Head of Talent Acquisition, Top-5 Pakistani Bank" or "a leading Saudi government entity" is close to as credible as a named quote and needs no sign-off cycle — standard B2B convention when a client won't go on record by name.
3. **Case studies with a named client and a quantified result**, even with no polished quote attached. Structure: results-led headline → challenge → solution → results (a metrics box, not prose) → optional attributed line → CTA. Specific numbers beat generic value statements regardless of whether a quote is attached.
4. **Institutional proof substitutes**: security/compliance posture (Intwish already has real ISO/IEC 27001-aligned, SBP-aligned material from the vendor registration policy work — genuine credibility, not filler), awards, press, partner integrations.
5. **Operational recommendation, not a build task**: start capturing a one-question NPS-style testimonial ask at project close so real named quotes accumulate for future revisions. Note this in the Phase 0 plan's closing recommendations; it's outside what any execution agent can build into the site today.

## A5. Page archetypes — the blueprint kit

This is a **framework of page types, not a mandated page count.** The Planning Agent maps the actual current pages onto these archetypes during its audit (Part B). Some archetypes will have many instances (Case Study Detail could apply to 10+ of the 33 pages); others may not exist yet. Don't force consolidation or expansion for its own sake — restructure only where it demonstrably improves clarity or removes real redundancy. If 33 well-organized pages already make sense for the content Intwish has, keep 33; don't shrink the site just to hit a smaller number, and don't invent new pages just to hit a rounder framework.

Each archetype below has a purpose, a block-order blueprint, and an asset/content bar. Every page instance of an archetype should meet this bar; specific instances can add archetype-appropriate blocks the Planning Agent identifies as needed.

**Homepage** (single instance — highest scrutiny page on the site)
Purpose: prove in one screen this is a serious, differentiated, full-stack company.
Blocks: Hero (ownable headline, real product UI capture, primary + secondary CTA) → Proof band (animated stat counters) → Client logo wall → Product suite overview (3 cards: intOS/IntReview/LMS, each with its one-line edge) → Services band (framed as "the engineering capability behind the products above") → Case study spotlight (3 cards) → Science/methodology teaser → Trust & security band → Closing CTA.

**Product Detail** (intOS, IntReview, LMS, any future products)
Purpose: let a buyer evaluating a point-solution competitor see why Intwish's version is stronger or safer.
Blocks: problem framing → how it works (real step diagram, not a generic icon row) → feature breakdown organized around what this category's buyers actually evaluate → differentiation callout → product-specific metrics → filtered case studies → demo CTA.
Buyer evaluation criteria to build copy around: gamified-assessment buyers weigh bias/fairness, cheat-proofing, branding customization, analytics depth, ATS/LMS integrations, language coverage. AI interview/monitoring buyers weigh scoring consistency, ATS integration, governance/compliance, completion rate, and proctoring/integrity rigor — the last one is Intwish's demonstrated strength given the native mobile anti-cheat engineering already shipped, and should be the lead differentiator for IntReview specifically rather than trying to out-enterprise HireVue on breadth. intOS should lean into the "recruitment virtual OS" framing — a simulated environment, not a test library — as the structural differentiator from TalentGames' library-of-tests model.

**Service Detail** (Custom Software, AI & AI Agents/Chatbots, Gamification & Game Development, App Development, Web Development)
Purpose: prove engineering depth using the products as evidence, since every generic IT company also claims custom-software capability.
Blocks: capability framing → proof-by-product (point to at least one of intOS/IntReview/LMS as shipped evidence, not just a capability list) → relevant case studies → engagement model/CTA.

**Index / Listing pages** (Products index, Services index, Case Studies index, Industries index, Resources index, etc.)
Purpose: fast orientation + filtering into the right detail page.
Blocks: intro framing → filterable/sortable card grid using the shared Card Grid component (A6) → cross-links.

**Case Study Detail** (one per client engagement — likely the largest single archetype by page count)
Purpose: convert credibility into proof, per A4.
Blocks: results-led headline → challenge → solution → results as a metrics box → attributed line (named or anonymized per A4) → CTA. Target 600–1,200 words on-page.

**Industry / Sector Detail** (Banking, Telecom, Government, Saudi Public Sector, others as identified)
Purpose: let an enterprise buyer self-identify in seconds.
Blocks: sector-specific pain points → relevant case studies → relevant compliance/data-residency notes → CTA.

**Trust / Credibility pages** (Science/Methodology, Security & Compliance)
Purpose: the highest-leverage credibility real estate on the site — turns "another HR-tech vendor" into "a company that understands the science." **[Planning Agent's call, to document with rationale]**: whether and how prominently to surface Faran's AKU academic research appointment here or on About — it's a genuinely unusual credibility asset most competitors can't claim.
Blocks: methodology explanation → AI/bias-mitigation approach → data-handling posture → (optional) academic/research credibility → supporting stats.

**Company / About**
Blocks: mission → leadership → dual-market presence (Pakistan + KSA) → academic tie-in per above → careers link.

**Careers** *(confirmed in scope)*
Blocks: culture/mission framing → open roles listing → application flow or contact-in.

**Resources / Insights** *(confirmed in scope — index + article/whitepaper detail archetype)*
Blocks index: filterable list by topic/format. Blocks detail: standard long-form content template consistent with brand tokens, not a bare CMS default.

**Contact**
Blocks: segmented intake (Sales / Partnership / Careers or Media — not one catch-all form) → partial-capture form behavior where feasible → brief data-handling note near the form (research shows a meaningful share of B2B form abandonment is privacy-hesitation, not disinterest) → adjacent trust signals.

**Legal / Utility pages** (privacy policy, terms, etc.)
Lower design investment is acceptable, but must still carry the brand header/footer/type system — never default-template these into looking like a different site.

## A6. Shared component system — the contract every agent builds on

This is what makes 33 pages built by different agents look like one site. Before any execution agent builds a page, it uses these components; if a page genuinely needs something new, the agent proposes the addition back into this list (with rationale) rather than one-off improvising a bespoke pattern.

| Component | Used on | Key requirement |
|---|---|---|
| Site Header / Nav | all pages | Consistent mega-menu pattern for Products/Services/Industries |
| Footer | all pages | One canonical footer, no per-page variants |
| Page Header (interior) | all non-homepage pages | Breadcrumb + title band, lighter hero variant |
| Homepage Hero | homepage only | Real product capture, dual CTA |
| Animated Stat Counter | homepage, product pages, industry pages | Real numbers only |
| Client Logo Wall | homepage, case studies index, about | Permission-gated logo set |
| Trust/Security Badge Row | homepage, contact, trust pages | Real certifications only |
| Card Grid (flexible slots) | all index/listing pages | One component, props for product/service/case-study/resource variants — not four different card components |
| Metrics Box | case study detail | Structured data, not prose |
| Attribution Block | case studies, trust pages | Named vs. anonymized variant per A4 |
| Step/Flow Diagram | product pages, science page | Real diagram, not generic icon row |
| CTA Band | all pages | Always paired with an adjacent trust signal slot per A7 |
| Segmented Contact Form | contact page | Multi-intent routing, partial-capture behavior |
| Filterable Grid | case studies index, resources index | Shared filter/sort logic |
| Breadcrumb / Related-pages module | all interior pages | Consistent cross-linking pattern |

`DESIGN.md` (tokens: palette, type scale, spacing, radius, motion curves, icon style) is drafted by the Planning Agent in Phase 0 and is the source of truth this entire component table is built against.

## A7. Site-wide conversion, trust & performance mechanics

- **CTA + proof pairing** everywhere, not just the hero — trust signals earn their keep right next to the ask, not buried lower on the page.
- **Mobile parity** as a first-class design pass — mobile converts roughly half as often as desktop in B2B, largely because trust signals and forms degrade harder on small screens.
- **Performance budget**: LCP < 2.5s, INP < 200ms, CLS < 0.1, with a ~1-second load as the aspirational target given the B2B 1s-vs-5s conversion gap is roughly 3x.
- **Forms**: prefer partial-capture over all-or-nothing; keep first-touch fields minimal.

## A8. Visual asset inventory needed across the site

- Real product UI screenshots/short capture loops from intOS, IntReview, LMS — highest-priority gap versus a stock-photo-driven site. **[NEEDS REAL DATA/ASSET FROM FARAN: which capture footage exists and who can provide/approve it]**
- Custom or heavily customized icon set — not a default library used untouched.
- Rendered data-visualization components for every stat band, not static image screenshots of numbers.
- A diagram set per product (assessment flow, interview/monitoring flow, LMS flow).
- Real team/office photography if available; otherwise a deliberate custom illustration style consistent with `DESIGN.md`. **[NEEDS REAL DATA/ASSET FROM FARAN: what photography exists]**
- Client logos, award badges, compliance/security badges (permission-gated per A4).

---

# PART B — Phase 0: Planning Agent Mandate

**This agent writes exactly one deliverable: a master implementation plan document. It does not touch page code, does not restyle anything, does not build components.** Its plan is what gets sliced into tickets for every agent in Part C.

## What the plan must contain

1. **Current-state audit.** A table of all ~33 existing pages: route/URL, current purpose, a brief content-quality note, and a recommended action — keep-as-is, rebuild-in-place, merge into another page, retire, or archetype it's mapped to (A5). This requires actually reading the repo; don't estimate.

2. **Finalized information architecture.** The real sitemap, reconciling the actual pages against the A5 archetype framework. State explicitly whether the final page count changes from 33 and why — restructuring should be justified by clarity or redundancy removal, not done for its own sake.

3. **`DESIGN.md` draft.** The full token system — palette, type scale (one distinctive display face + one workhorse text face, deliberately chosen, not defaults), spacing scale, corner-radius rule, motion curves, icon style — with a short rationale tying it to the positioning decision made in A3.

4. **Component inventory.** Extends the A6 table with anything the audit reveals is genuinely needed beyond what's listed there.

5. **Positioning decision.** Pick one of the A3 narrative options (or a documented blend) and write the one-paragraph rationale every subsequent agent will inherit.

6. **Per-page content & asset checklist.** For every page in the finalized sitemap: which archetype blocks apply, what real content/data it needs, and what's marked [All assets from the website folder/placeholder] versus what the agent can draft directly.

7. **Phased roadmap.** Logical groupings for parallel or sequential execution — for example (illustrative, not mandatory): Phase 1 Foundation + Homepage → Phase 2 Products → Phase 3 Services → Phase 4 Case Studies → Phase 5 Industries/Trust/Company → Phase 6 Careers/Resources/Contact/Legal → Phase 7 cross-site QA pass. The Planning Agent proposes its own grouping logic based on actual page count and dependency order (e.g., shared components must exist before any page consuming them starts).

8. **Execution tickets.** One self-contained brief per page (or a tightly related cluster, e.g., all Case Study details as one ticket template applied N times). Each ticket must be independently handoff-able to a different agent with zero missing context beyond Part A + the master plan. Ticket format:
   - Page ID / route
   - Archetype (A5)
   - Phase / priority
   - One-line objective
   - Content blocks required (archetype blueprint + any page-specific deltas)
   - Copy inputs needed (facts, data, differentiation angle)
   - Assets needed (and which are already available vs. [All assets from the website folder/placeholder])
   - Required cross-links to related pages
   - Acceptance criteria: passes A2 anti-slop audit, passes A7 performance budget, uses only A6 components/tokens, no fabricated content

9. **"Inputs Needed From Faran" — one consolidated list.** Only true blockers: real figures, logo approvals, real screenshots/photography/video, legal-copy sign-off. Everything structural or creative gets decided and documented by the Planning Agent, not deferred here.

10. **Consistency/QA protocol.** How deviations between agents get caught once multiple pages are shipped — e.g., a final audit pass (Part C) that checks every page against `DESIGN.md`, the component table, and A2/A7, and a process for reconciling any agent-proposed component/token additions back into the shared docs so later phases inherit them.

---

# PART C — Execution Agent Protocol

Every agent picking up a ticket from the Phase 0 plan:

1. Reads Part A in full, plus the Phase 0 master plan, plus its own ticket. Nothing else is needed to start.
2. Builds strictly on `DESIGN.md` tokens and the A6 component table. No new colors, fonts, spacing values, or bespoke one-off components without first proposing the addition back into the shared docs.
3. If the assigned page type doesn't cleanly fit an existing archetype or component, proposes the extension (with rationale) and updates the shared component list — doesn't silently improvise.
4. Runs the A2 anti-slop checklist and the A7 performance budget against its own output before marking the ticket complete.
5. Never fabricates content. If a ticket has an open [All assets from the website folder/placeholder] item, ships a clearly marked placeholder and flags it in the completion note rather than inventing a number, quote, or logo.
6. Logs anything it added to the shared system (new component, new token, new pattern) in its completion note so later-phase agents and the final QA pass inherit it.

---

## Sources consulted

- thetalentgames.com (site structure, homepage IA, positioning) — intOS's direct competitor
- Gartner Peer Insights, G2 — The Talent Games product reviews
- hirevire.com, tenzo.ai, dailyaitools.io, toolsforhumans.ai, screeninghive.com, thenontechai.com — HireVue feature/positioning research
- martal.ca, withsurface.com, firstpagesage.com, conversionxperts.com, genesysgrowth.com, greetnow.com, pixelswithin.com, konabayev.com — B2B conversion and trust-signal benchmarks
- monet.design, dev.to (Hallmark), 925studios.co, vibecodekit.dev, mindstudio.ai, growthguys.tech — "AI slop" design pattern research
- webstacks.com, zoomforth.com, breadcrumbs.io, brixongroup.com, geisheker.com, scopicstudios.com, thelogonaut.com, stryvemarketing.com, thesimonsgroup.com — B2B case study structure and no-testimonial workarounds
- fastspring.com, cxl.com, whitepeakdigital.com, samps.org, dccreativepartners.com, evelan.de, shropshiremedia.com, floatdesign.com, semicolon.agency — first-impression/design-judgment research (Carleton University, Stanford Web Credibility Project)
- sitebuilderreport.com, bigredjelly.com, colorlib.com, solve.co.uk, digitalapplied.com, blog.netstager.com, searchlab.nl, involvedigital.com, ideafueled.com — page speed / Core Web Vitals / conversion data
- wavespace.agency, spinxdigital.com, bmgmediaco.com, theworldmag.com, growthroom.co — award-winning web design agency benchmarking (visual direction reference only)