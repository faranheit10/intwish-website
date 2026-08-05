# Phase 4: Case Studies

## Phase 4 Tasks

- `[ ]` **CS-01:** Case studies index
- `[ ]` **CS-02:** Case study detail template (×16)

---

## Phase 4 Detailed Specifications

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
