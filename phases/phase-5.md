# Phase 5: Industries, Science, Trust, About, Careers

## Phase 5 Tasks

- `[ ]` **I-01:** Industries index
- `[ ]` **I-02–I-06:** Industry detail pages (×5)
- `[ ]` **SC-01:** Science & methodology
- `[ ]` **T-01:** Trust & security
- `[ ]` **A-01:** About page
- `[ ]` **CR-01:** Careers page

---

## Phase 5 Detailed Specifications

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
