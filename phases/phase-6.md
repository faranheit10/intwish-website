# Phase 6: Insights, Contact, Demo, Legal

## Phase 6 Tasks

- `[ ]` **IN-01:** Insights hub
- `[ ]` **IN-02:** Insight detail template
- `[ ]` **CT-01:** Contact page
- `[ ]` **DM-01:** Demo booking page
- `[ ]` **LG-01:** Privacy policy
- `[ ]` **LG-02:** Terms of service

---

## Phase 6 Detailed Specifications

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
