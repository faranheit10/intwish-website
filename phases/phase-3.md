# Phase 3: Services

## Phase 3 Tasks

- `[ ]` **S-01:** Services index
- `[ ]` **S-02–S-07:** Service detail pages (×6)

---

## Phase 3 Detailed Specifications

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
