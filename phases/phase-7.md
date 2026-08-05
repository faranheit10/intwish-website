# Phase 7: QA & Polish

## Phase 7 Tasks

- `[ ]` **QA-01:** Cross-site consistency audit

---

## Phase 7 Detailed Specifications

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
