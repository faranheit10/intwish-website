import type { Localized } from "./types";
import { getCaseStudy, type CaseStudy } from "./caseStudies";

/**
 * Structured metadata that drives the case-study hub and detail templates.
 *
 * Kept separate from `caseStudies.ts` so the localized narrative lives in one
 * place while this file carries the template-facing schema:
 *
 * - Client Profile Badge fields (region, scale, product) â€” headcount / org size
 *   is deliberately NOT included for clients where it may be commercially
 *   sensitive; the `scale` descriptor is used instead.
 * - Outcome Matrix (`metrics`) â€” 3â€“4 slots per engagement type. Unverified
 *   slots are marked "N/A" and flagged for an enrichment pass; we do not
 *   silently estimate a number to fill a slot.
 * - Solution Map (`solution`).
 * - Gallery (`images`) â€” hero uses the real asset; screenshot / results slots
 *   point at dimensioned placeholders until real deployment screenshots land.
 * - `testimonial` â€” always absent for now; rendered conditionally (hidden)
 *   until the team sources real named quotes.
 * - `video` â€” slot wired for flagship case studies; hidden until a clip
 *   exists (`src` empty string = not produced yet).
 */

export type CaseStudyType = "recruitment" | "feedback" | "training" | "portal" | "education";
export type CaseStudyLayout = "data-driven" | "product-specific";
export type ProductSlug = "intos" | "intreview";

export interface CaseStudyMetric {
  value: Localized<string>;
  label: Localized<string>;
}

export interface CaseStudyImage {
  src: string;
  width: number;
  height: number;
  kind: "hero" | "screenshot" | "results";
  alt: string;
  caption: Localized<string>;
}

export interface CaseStudySolution {
  label: Localized<string>;
  /** Provenance / lineage note â€” e.g. "predates intOS". */
  note?: Localized<string>;
}

export interface CaseStudyTestimonial {
  quote: Localized<string>;
  name: string;
  title: Localized<string>;
  company: string;
}

export interface CaseStudyMeta {
  /** Engagement type â€” drives Outcome Matrix categories + layout defaults. */
  type: CaseStudyType;
  /** Region of deployment (Client Profile Badge). */
  region: Localized<string>;
  /** Deployment-scale descriptor (Client Profile Badge). */
  scale: Localized<string>;
  /** Industries/[slug] cross-link target (omitted when no page exists). */
  industrySlug?: string;
  /** Products/[slug] cross-link target. */
  productSlug: ProductSlug;
  /** One-line statement of the pre-engagement challenge. */
  challenge: Localized<string>;
  /** What was actually deployed (Solution Map). */
  solution: CaseStudySolution[];
  /** Outcome Matrix â€” use "N/A" for unfilled slots. */
  metrics: CaseStudyMetric[];
  /** Gallery: hero + product screenshots + optional results visualization. */
  images: CaseStudyImage[];
  /** Story layout variant (defaults to a balanced layout). */
  layout?: CaseStudyLayout;
  /** Flagship video slot â€” leave src empty until a clip is produced. */
  video?: { src: string; title: Localized<string> };
  /** Named client quote â€” leave absent until the team sources a real one. */
  testimonial?: CaseStudyTestimonial;
}

export type EnrichedCaseStudy = CaseStudy & CaseStudyMeta;

const NA: Localized<string> = {
  en: "N/A",
  "fr-CA": "N/A",
  "id-ID": "N/A",
  ar: "ØºÙŠØ± Ù…ØªØ§Ø­",
};

/** Shared metric labels, localized in all four locales. */
const L = {
  candidatesAssessed: {
    en: "Candidates assessed",
    "fr-CA": "Candidats Ã©valuÃ©s",
    "id-ID": "Kandidat dinilai",
    ar: "Ù…Ø±Ø´Ø­ ØªÙ… ØªÙ‚ÙŠÙŠÙ…Ù‡Ù…",
  },
  completionRate: {
    en: "Completion rate",
    "fr-CA": "Taux de complÃ©tion",
    "id-ID": "Tingkat penyelesaian",
    ar: "Ù…Ø¹Ø¯Ù„ Ø§Ù„Ø¥ÙƒÙ…Ø§Ù„",
  },
  timeToShortlist: {
    en: "Time-to-shortlist reduction",
    "fr-CA": "RÃ©duction du dÃ©lai de prÃ©sÃ©lection",
    "id-ID": "Pengurangan waktu shortlist",
    ar: "Ø®ÙØ¶ Ø²Ù…Ù† Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ù…Ø®ØªØµØ±Ø©",
  },
  costTimeSaved: {
    en: "Cost / time saved",
    "fr-CA": "CoÃ»t / temps Ã©conomisÃ©s",
    "id-ID": "Biaya / waktu dihemat",
    ar: "ØªÙˆÙÙŠØ± Ø§Ù„ØªÙƒÙ„ÙØ© / Ø§Ù„ÙˆÙ‚Øª",
  },
  employeesAssessed: {
    en: "Employees assessed",
    "fr-CA": "EmployÃ©s Ã©valuÃ©s",
    "id-ID": "Karyawan dinilai",
    ar: "Ù…ÙˆØ¸Ù ØªÙ… ØªÙ‚ÙŠÙŠÙ…Ù‡Ù…",
  },
  reportTurnaround: {
    en: "Report turnaround time",
    "fr-CA": "DÃ©lai de gÃ©nÃ©ration des rapports",
    "id-ID": "Waktu pengerjaan laporan",
    ar: "Ø²Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±",
  },
  raterParticipation: {
    en: "Rater participation rate",
    "fr-CA": "Taux de participation des Ã©valuateurs",
    "id-ID": "Tingkat partisipasi penilai",
    ar: "Ù…Ø¹Ø¯Ù„ Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ù…Ù‚ÙŠÙ‘Ù…ÙŠÙ†",
  },
  peopleTrained: {
    en: "People trained",
    "fr-CA": "Personnes formÃ©es",
    "id-ID": "Orang dilatih",
    ar: "Ø´Ø®Øµ ØªÙ„Ù‚Ù‰ Ø§Ù„ØªØ¯Ø±ÙŠØ¨",
  },
  scoreImprovement: {
    en: "Score / competency improvement",
    "fr-CA": "AmÃ©lioration des scores / compÃ©tences",
    "id-ID": "Peningkatan skor / kompetensi",
    ar: "ØªØ­Ø³Ù† Ø§Ù„Ø¯Ø±Ø¬Ø§Øª / Ø§Ù„ÙƒÙØ§Ø¡Ø§Øª",
  },
  timeToCompetency: {
    en: "Time-to-competency",
    "fr-CA": "DÃ©lai d'acquisition des compÃ©tences",
    "id-ID": "Waktu menuju kompetensi",
    ar: "Ø²Ù…Ù† Ø¨Ù„ÙˆØº Ø§Ù„ÙƒÙØ§Ø¡Ø©",
  },
  applicantsProcessed: {
    en: "Applicants processed",
    "fr-CA": "Candidats traitÃ©s",
    "id-ID": "Pelamar diproses",
    ar: "Ù…ØªÙ‚Ø¯Ù… ØªÙ…Øª Ù…Ø¹Ø§Ù„Ø¬ØªÙ‡",
  },
  adminTimeSaved: {
    en: "Admin time saved (directional)",
    "fr-CA": "Temps administratif Ã©conomisÃ© (indicatif)",
    "id-ID": "Waktu admin dihemat (indikatif)",
    ar: "ØªÙˆÙÙŠØ± ÙˆÙ‚Øª Ø¥Ø¯Ø§Ø±ÙŠ (Ù…Ø¤Ø´Ø± ØªÙ‚Ø±ÙŠØ¨ÙŠ)",
  },
  completedAssessments: {
    en: "Completed assessments",
    "fr-CA": "Ã‰valuations complÃ©tÃ©es",
    "id-ID": "Asesmen selesai",
    ar: "ØªÙ‚ÙŠÙŠÙ… Ù…ÙƒØªÙ…Ù„",
  },
} satisfies Record<string, Localized<string>>;

const CAPTIONS = {
  hero: {
    en: "Client & context imagery",
    "fr-CA": "Visuel client et contexte",
    "id-ID": "Gambar klien & konteks",
    ar: "ØµÙˆØ±Ø© Ø§Ù„Ø¹Ù…ÙŠÙ„ ÙˆØ§Ù„Ø³ÙŠØ§Ù‚",
  },
  screenshot: {
    en: "Product screenshot from the deployment",
    "fr-CA": "Capture d'Ã©cran du produit dÃ©ployÃ©",
    "id-ID": "Tangkapan layar produk dari penempatan",
    ar: "Ù„Ù‚Ø·Ø© Ø´Ø§Ø´Ø© Ù„Ù„Ù…Ù†ØªØ¬ Ù…Ù† Ø§Ù„ØªÙ†ÙÙŠØ°",
  },
  results: {
    en: "Results & metrics visualization",
    "fr-CA": "Visualisation des rÃ©sultats et mÃ©triques",
    "id-ID": "Visualisasi hasil & metrik",
    ar: "ØªØµÙˆØ± Ø§Ù„Ù†ØªØ§Ø¦Ø¬ ÙˆØ§Ù„Ù…Ù‚Ø§ÙŠÙŠØ³",
  },
} satisfies Record<string, Localized<string>>;

const PAKISTAN: Localized<string> = {
  en: "Pakistan",
  "fr-CA": "Pakistan",
  "id-ID": "Pakistan",
  ar: "Ø¨Ø§ÙƒØ³ØªØ§Ù†",
};

const SAUDI_ARABIA: Localized<string> = {
  en: "Saudi Arabia",
  "fr-CA": "Arabie saoudite",
  "id-ID": "Arab Saudi",
  ar: "Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
};

function heroImage(study: CaseStudy): CaseStudyImage {
  return {
    src: study.image,
    width: 1200,
    height: 900,
    kind: "hero",
    alt: `${study.client} â€” case study hero image`,
    caption: CAPTIONS.hero,
  };
}

function screenshotImage(slug: string, n: number): CaseStudyImage {
  return {
    src: `/img/case_studies/placeholders/${slug}-shot-${n}.png`,
    width: 1200,
    height: 800,
    kind: "screenshot",
    alt: `${slug} â€” product screenshot ${n} placeholder`,
    caption: CAPTIONS.screenshot,
  };
}

function resultsImage(slug: string): CaseStudyImage {
  return {
    src: `/img/case_studies/placeholders/${slug}-results.png`,
    width: 1200,
    height: 800,
    kind: "results",
    alt: `${slug} â€” results visualization placeholder`,
    caption: CAPTIONS.results,
  };
}

export const caseStudiesMeta: Record<string, CaseStudyMeta> = {
  "bank-alfalah-training": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "National compliance training drive",
      "fr-CA": "Campagne nationale de formation Ã  la conformitÃ©",
      "id-ID": "Kampanye pelatihan kepatuhan nasional",
      ar: "Ø­Ù…Ù„Ø© ØªØ¯Ø±ÙŠØ¨ Ø§Ù…ØªØ«Ø§Ù„ ÙˆØ·Ù†ÙŠØ©",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "Mandatory AML/CFT, branch transformation and fair-treatment compliance training had to reach and engage 7,000+ employees nationwide â€” and produce completion the bank could measure and report.",
      "fr-CA": "Une formation obligatoire Ã  la conformitÃ© (LBC/FAT, transformation des succursales, traitement Ã©quitable) devait toucher et mobiliser plus de 7 000 employÃ©s Ã  l'Ã©chelle nationale â€” et produire des taux d'achÃ¨vement mesurables et rapportables.",
      "id-ID": "Pelatihan kepatuhan wajib AML/CFT, transformasi cabang, dan perlakuan wajar harus menjangkau dan melibatkan 7.000+ karyawan di seluruh negeri â€” dan menghasilkan penyelesaian yang dapat diukur dan dilaporkan bank.",
      ar: "ØªØ¯Ø±ÙŠØ¨ Ø§Ù…ØªØ«Ø§Ù„ Ø¥Ù„Ø²Ø§Ù…ÙŠ (Ù…ÙƒØ§ÙØ­Ø© ØºØ³Ù„ Ø§Ù„Ø£Ù…ÙˆØ§Ù„ ÙˆØ§Ù„ØªØ­ÙˆÙ„ Ø§Ù„ÙØ±Ø¹ÙŠ ÙˆØ§Ù„Ù…Ø¹Ø§Ù…Ù„Ø© Ø§Ù„Ø¹Ø§Ø¯Ù„Ø©) ÙƒØ§Ù† ÙŠØ¬Ø¨ Ø£Ù† ÙŠØµÙ„ Ø¥Ù„Ù‰ Ø£ÙƒØ«Ø± Ù…Ù† 7,000 Ù…ÙˆØ¸Ù ÙˆÙŠØ«ÙŠØ± ØªÙØ§Ø¹Ù„Ù‡Ù… Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ ÙˆØ·Ù†ÙŠ â€” Ù…Ø¹ ØªØ­Ù‚ÙŠÙ‚ Ø¥ÙƒÙ…Ø§Ù„ ÙŠÙ…ÙƒÙ† Ù„Ù„Ø¨Ù†Ùƒ Ù‚ÙŠØ§Ø³Ù‡ ÙˆØ§Ù„Ø¥Ø¨Ù„Ø§Øº Ø¹Ù†Ù‡.",
    },
    solution: [
      {
        label: {
          en: "Gamified AML/CFT compliance training",
          "fr-CA": "Formation Ã  la conformitÃ© LBC/FAT ludifiÃ©e",
          "id-ID": "Pelatihan kepatuhan AML/CFT bergamifikasi",
          ar: "ØªØ¯Ø±ÙŠØ¨ ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„Ø§Ù…ØªØ«Ø§Ù„ Ø¨Ù…ÙƒØ§ÙØ­Ø© ØºØ³Ù„ Ø§Ù„Ø£Ù…ÙˆØ§Ù„",
        },
      },
      {
        label: {
          en: "Branch transformation & fair-treatment modules",
          "fr-CA": "Modules de transformation des succursales et traitement Ã©quitable",
          "id-ID": "Modul transformasi cabang & perlakuan wajar",
          ar: "ÙˆØ­Ø¯Ø§Øª Ø§Ù„ØªØ­ÙˆÙ„ Ø§Ù„ÙØ±Ø¹ÙŠ ÙˆØ§Ù„Ù…Ø¹Ø§Ù…Ù„Ø© Ø§Ù„Ø¹Ø§Ø¯Ù„Ø©",
        },
      },
      {
        label: {
          en: "Immersive detective role-play storyline",
          "fr-CA": "ScÃ©nario immersif de jeu de rÃ´le policier",
          "id-ID": "Alur cerita peran detektif yang imersif",
          ar: "Ù‚ØµØ© Ù„Ø¹Ø¨ Ø£Ø¯ÙˆØ§Ø± Ø¨ÙˆÙ„ÙŠØ³ÙŠØ© ØºØ§Ù…Ø±Ø©",
        },
      },
      {
        label: {
          en: "Measurable completion & engagement reporting",
          "fr-CA": "Rapports mesurables d'achÃ¨vement et d'engagement",
          "id-ID": "Pelaporan penyelesaian & keterlibatan yang terukur",
          ar: "ØªÙ‚Ø§Ø±ÙŠØ± Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ø³ Ù„Ù„Ø¥ÙƒÙ…Ø§Ù„ ÙˆØ§Ù„ØªÙØ§Ø¹Ù„",
        },
      },
    ],
    metrics: [
      { value: { en: "7,000+", "fr-CA": "7 000+", "id-ID": "7.000+", ar: "+7,000" }, label: L.peopleTrained },
      {
        value: { en: "1", "fr-CA": "1", "id-ID": "1", ar: "1" },
        label: {
          en: "Nationwide campaign",
          "fr-CA": "Campagne nationale",
          "id-ID": "Kampanye nasional",
          ar: "Ø­Ù…Ù„Ø© ÙˆØ·Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
    ],
    images: [
      heroImage(getCaseStudy("bank-alfalah-training")!),
      screenshotImage("bank-alfalah-training", 1),
      screenshotImage("bank-alfalah-training", 2),
      screenshotImage("bank-alfalah-training", 3),
      resultsImage("bank-alfalah-training"),
    ],
    layout: "data-driven",
    video: {
      src: "",
      title: {
        en: "Bank Alfalah: compliance training at national scale",
        "fr-CA": "Bank Alfalah : formation Ã  la conformitÃ© Ã  l'Ã©chelle nationale",
        "id-ID": "Bank Alfalah: pelatihan kepatuhan skala nasional",
        ar: "Ø¨Ù†Ùƒ Ø£Ù„ÙÙ„Ø§Ø­: ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ÙˆØ·Ù†ÙŠ",
      },
    },
  },

  "ici-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Management trainee recruitment drive",
      "fr-CA": "Campagne de recrutement de stagiaires en gestion",
      "id-ID": "Kampanye rekrutmen management trainee",
      ar: "Ø­Ù…Ù„Ø© ØªÙˆØ¸ÙŠÙ Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ†",
    },
    industrySlug: undefined,
    productSlug: "intos",
    challenge: {
      en: "High-volume screening of 4,000+ management trainee applicants â€” where a traditional paper test could not surface real problem-solving ability.",
      "fr-CA": "Le filtrage Ã  grand volume de plus de 4 000 candidats au programme de stagiaires en gestion â€” oÃ¹ un test papier traditionnel ne pouvait rÃ©vÃ©ler la vraie capacitÃ© de rÃ©solution de problÃ¨mes.",
      "id-ID": "Penyaringan volume tinggi untuk 4.000+ pelamar management trainee â€” di mana tes kertas tradisional tidak dapat mengungkap kemampuan pemecahan masalah yang sebenarnya.",
      ar: "ÙØ±Ø² Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø­Ø¬Ù… Ù„Ø£ÙƒØ«Ø± Ù…Ù† 4,000 Ù…ØªÙ‚Ø¯Ù… Ù„Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† â€” Ø­ÙŠØ« Ù„Ø§ ÙŠØ³ØªØ·ÙŠØ¹ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„ÙˆØ±Ù‚ÙŠ Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ Ø¥Ø¨Ø±Ø§Ø² Ù‚Ø¯Ø±Ø© Ø­Ù‚ÙŠÙ‚ÙŠØ© Ø¹Ù„Ù‰ Ø­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª.",
    },
    solution: [
      {
        label: {
          en: "Gamified scenario-based assessment",
          "fr-CA": "Ã‰valuation ludifiÃ©e fondÃ©e sur des scÃ©narios",
          "id-ID": "Asesmen berbasis skenario bergamifikasi",
          ar: "ØªÙ‚ÙŠÙŠÙ… ØªÙØ§Ø¹Ù„ÙŠ Ù‚Ø§Ø¦Ù… Ø¹Ù„Ù‰ Ø§Ù„Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª",
        },
      },
      {
        label: {
          en: "Real-life work scenarios",
          "fr-CA": "ScÃ©narios de travail rÃ©els",
          "id-ID": "Skenario kerja nyata",
          ar: "Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø¹Ù…Ù„ ÙˆØ§Ù‚Ø¹ÙŠØ©",
        },
      },
      {
        label: {
          en: "Authentic, ranked candidate pool",
          "fr-CA": "Bassin de candidats authentique et classÃ©",
          "id-ID": "Kumpulan kandidat autentik & berperingkat",
          ar: "Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ø±Ø´Ø­ÙŠÙ† Ø£ØµÙŠÙ„Ø© ÙˆÙ…ØµÙ†ÙØ©",
        },
      },
    ],
    metrics: [
      { value: { en: "4,000+", "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" }, label: L.candidatesAssessed },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.timeToShortlist },
      { value: NA, label: L.costTimeSaved },
    ],
    images: [
      heroImage(getCaseStudy("ici-recruitment")!),
      screenshotImage("ici-recruitment", 1),
      screenshotImage("ici-recruitment", 2),
      screenshotImage("ici-recruitment", 3),
      resultsImage("ici-recruitment"),
    ],
  },

  "ptcl-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "National recruitment drive",
      "fr-CA": "Campagne nationale de recrutement",
      "id-ID": "Kampanye rekrutmen nasional",
      ar: "Ø­Ù…Ù„Ø© ØªÙˆØ¸ÙŠÙ ÙˆØ·Ù†ÙŠØ©",
    },
    industrySlug: "telecom",
    productSlug: "intos",
    challenge: {
      en: "A national management trainee drive that needed to assess 25,000+ candidates in days â€” a scale traditional testing could never absorb.",
      "fr-CA": "Une campagne nationale de recrutement de stagiaires en gestion devant Ã©valuer plus de 25 000 candidats en quelques jours â€” une Ã©chelle que les tests traditionnels ne pouvaient jamais absorber.",
      "id-ID": "Kampanye management trainee nasional yang perlu menilai 25.000+ kandidat dalam hitungan hari â€” skala yang tidak pernah bisa ditampung tes tradisional.",
      ar: "Ø­Ù…Ù„Ø© ÙˆØ·Ù†ÙŠØ© Ù„ØªÙˆØ¸ÙŠÙ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† ØªØªØ·Ù„Ø¨ ØªÙ‚ÙŠÙŠÙ… Ø£ÙƒØ«Ø± Ù…Ù† 25,000 Ù…Ø±Ø´Ø­ ÙÙŠ Ø£ÙŠØ§Ù… â€” Ù†Ø·Ø§Ù‚ Ù„Ø§ ØªØ³ØªØ·ÙŠØ¹ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ© Ø§Ø³ØªÙŠØ¹Ø§Ø¨Ù‡.",
    },
    solution: [
      {
        label: {
          en: "Largest gamified MT recruitment in Pakistan (2017)",
          "fr-CA": "Le plus grand recrutement de stagiaires en gestion ludifiÃ© au Pakistan (2017)",
          "id-ID": "Rekrutmen MT gamifikasi terbesar di Pakistan (2017)",
          ar: "Ø£ÙƒØ¨Ø± Ø­Ù…Ù„Ø© ØªÙˆØ¸ÙŠÙ ØªÙØ§Ø¹Ù„ÙŠØ© Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† ÙÙŠ Ø¨Ø§ÙƒØ³ØªØ§Ù† (2017)",
        },
      },
      {
        label: {
          en: "Cognitive & competency assessment under real-world scenarios",
          "fr-CA": "Ã‰valuation cognitive et des compÃ©tences en situation rÃ©elle",
          "id-ID": "Asesmen kognitif & kompetensi dalam skenario dunia nyata",
          ar: "ØªÙ‚ÙŠÙŠÙ… Ù…Ø¹Ø±ÙÙŠ ÙˆÙƒÙØ§Ø¡Ø§Øª ÙÙŠ Ù…ÙˆØ§Ù‚Ù ÙˆØ§Ù‚Ø¹ÙŠØ©",
        },
      },
      {
        label: {
          en: "Ranked, data-rich talent pool",
          "fr-CA": "Bassin de talents classÃ© et riche en donnÃ©es",
          "id-ID": "Kumpulan talenta berperingkat kaya data",
          ar: "Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…ÙˆØ§Ù‡Ø¨ Ù…ØµÙ†ÙØ© ÙˆØºÙ†ÙŠØ© Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
        },
      },
    ],
    metrics: [
      { value: { en: "25,000+", "fr-CA": "25 000+", "id-ID": "25.000+", ar: "+25,000" }, label: L.candidatesAssessed },
      { value: NA, label: L.completionRate },
      {
        value: { en: "A few days", "fr-CA": "Quelques jours", "id-ID": "Beberapa hari", ar: "Ø¨Ø¶Ø¹Ø© Ø£ÙŠØ§Ù…" },
        label: {
          en: "End-to-end drive window",
          "fr-CA": "FenÃªtre de campagne de bout en bout",
          "id-ID": "Jangka waktu drive end-to-end",
          ar: "Ù…Ø¯Ø© Ø§Ù„Ø­Ù…Ù„Ø© Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ù†Ù‡Ø§ÙŠØ©",
        },
      },
      { value: NA, label: L.timeToShortlist },
    ],
    images: [
      heroImage(getCaseStudy("ptcl-recruitment")!),
      screenshotImage("ptcl-recruitment", 1),
      screenshotImage("ptcl-recruitment", 2),
      screenshotImage("ptcl-recruitment", 3),
      resultsImage("ptcl-recruitment"),
    ],
    layout: "data-driven",
    video: {
      src: "",
      title: {
        en: "PTCL: 25,000 candidates in days",
        "fr-CA": "PTCL : 25 000 candidats en quelques jours",
        "id-ID": "PTCL: 25.000 kandidat dalam hitungan hari",
        ar: "PTCL: 25,000 Ù…Ø±Ø´Ø­ ÙÙŠ Ø£ÙŠØ§Ù…",
      },
    },
  },

  "faysal-bank-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Multi-sector platform rollout",
      "fr-CA": "DÃ©ploiement multi-secteur de la plateforme",
      "id-ID": "Peluncuran platform multi-sektor",
      ar: "Ù†Ø´Ø± Ø§Ù„Ù…Ù†ØµØ© Ø¹Ø¨Ø± Ù‚Ø·Ø§Ø¹Ø§Øª Ù…ØªØ¹Ø¯Ø¯Ø©",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "Banking, telecom, FMCG and supply-chain organizations needed hiring that scaled â€” with candidate experiences strong enough to attract top applicants.",
      "fr-CA": "Les organisations bancaires, tÃ©lÃ©coms, BGC et de chaÃ®ne d'approvisionnement avaient besoin d'un recrutement Ã©volutif â€” avec des expÃ©riences candidats assez fortes pour attirer les meilleurs profils.",
      "id-ID": "Organisasi perbankan, telekomunikasi, FMCG, dan rantai pasok membutuhkan rekrutmen yang berskala â€” dengan pengalaman kandidat yang cukup kuat untuk menarik pelamar terbaik.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª Ù…Ø¤Ø³Ø³Ø§Øª Ø§Ù„Ø¨Ù†ÙˆÙƒ ÙˆØ§Ù„Ø§ØªØµØ§Ù„Ø§Øª ÙˆØ§Ù„Ø³Ù„Ø¹ Ø§Ù„Ø§Ø³ØªÙ‡Ù„Ø§ÙƒÙŠØ© ÙˆØ³Ù„Ø§Ø³Ù„ Ø§Ù„Ø¥Ù…Ø¯Ø§Ø¯ Ø¥Ù„Ù‰ ØªÙˆØ¸ÙŠÙ Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªÙˆØ³Ø¹ â€” Ù…Ø¹ ØªØ¬Ø§Ø±Ø¨ Ù…Ø±Ø´Ø­ÙŠÙ† Ù‚ÙˆÙŠØ© Ø¨Ù…Ø§ ÙŠÙƒÙÙŠ Ù„Ø¬Ø°Ø¨ Ø£ÙØ¶Ù„ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ†.",
    },
    solution: [
      {
        label: {
          en: "Gamified recruitment platforms (banking, telecom, FMCG, supply chain)",
          "fr-CA": "Plateformes de recrutement ludifiÃ©es (banque, tÃ©lÃ©coms, BGC, chaÃ®ne d'approvisionnement)",
          "id-ID": "Platform rekrutmen gamifikasi (perbankan, telekom, FMCG, rantai pasok)",
          ar: "Ù…Ù†ØµØ§Øª ØªÙˆØ¸ÙŠÙ ØªÙØ§Ø¹Ù„ÙŠØ© (Ø§Ù„Ø¨Ù†ÙˆÙƒ ÙˆØ§Ù„Ø§ØªØµØ§Ù„Ø§Øª ÙˆØ§Ù„Ø³Ù„Ø¹ Ø§Ù„Ø§Ø³ØªÙ‡Ù„Ø§ÙƒÙŠØ© ÙˆØ³Ù„Ø§Ø³Ù„ Ø§Ù„Ø¥Ù…Ø¯Ø§Ø¯)",
        },
      },
      {
        label: {
          en: "First-in-industry gamified hiring (Faysal Bank, 2018)",
          "fr-CA": "Premier recrutement ludifiÃ© du secteur (Faysal Bank, 2018)",
          "id-ID": "Rekrutmen gamifikasi pertama di industri (Faysal Bank, 2018)",
          ar: "Ø£ÙˆÙ„ ØªÙˆØ¸ÙŠÙ ØªÙØ§Ø¹Ù„ÙŠ ÙÙŠ Ø§Ù„Ù‚Ø·Ø§Ø¹ (Ø¨Ù†Ùƒ ÙÙŠØµÙ„ØŒ 2018)",
        },
      },
      {
        label: {
          en: "Desktop & mobile leaderboard assessment",
          "fr-CA": "Ã‰valuation classÃ©e sur ordinateur et mobile",
          "id-ID": "Asesmen papan peringkat desktop & mobile",
          ar: "ØªÙ‚ÙŠÙŠÙ… Ø¹Ø¨Ø± Ù„ÙˆØ­Ø© Ù…ØªØµØ¯Ø±ÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ ÙˆØ§Ù„Ø¬ÙˆØ§Ù„",
        },
      },
      {
        label: {
          en: "Live dashboards, funnel stats & performance heatmaps",
          "fr-CA": "Tableaux de bord en direct, statistiques d'entonnoir et cartes thermiques",
          "id-ID": "Dashboard langsung, statistik funnel & heatmap performa",
          ar: "Ù„ÙˆØ­Ø§Øª ØªØ­ÙƒÙ… Ø­ÙŠØ© ÙˆØ¥Ø­ØµØ§Ø¡Ø§Øª Ù‚Ù…Ø¹ ÙˆØ®Ø±Ø§Ø¦Ø· Ø£Ø¯Ø§Ø¡",
        },
      },
    ],
    metrics: [
      {
        value: { en: "4â€“25k", "fr-CA": "4â€“25 k", "id-ID": "4â€“25rb", ar: "4â€“25 Ø£Ù„Ù" },
        label: {
          en: "Candidates per organization",
          "fr-CA": "Candidats par organisation",
          "id-ID": "Kandidat per organisasi",
          ar: "Ù…Ø±Ø´Ø­ Ù„ÙƒÙ„ Ù…Ø¤Ø³Ø³Ø©",
        },
      },
      {
        value: { en: "2018", "fr-CA": "2018", "id-ID": "2018", ar: "2018" },
        label: {
          en: "First in industry (Faysal Bank)",
          "fr-CA": "PremiÃ¨re du secteur (Faysal Bank)",
          "id-ID": "Pertama di industri (Faysal Bank)",
          ar: "Ø§Ù„Ø£ÙˆÙ„ ÙÙŠ Ø§Ù„Ù‚Ø·Ø§Ø¹ (Ø¨Ù†Ùƒ ÙÙŠØµÙ„)",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.timeToShortlist },
    ],
    images: [
      heroImage(getCaseStudy("faysal-bank-recruitment")!),
      screenshotImage("faysal-bank-recruitment", 1),
      screenshotImage("faysal-bank-recruitment", 2),
      screenshotImage("faysal-bank-recruitment", 3),
      screenshotImage("faysal-bank-recruitment", 4),
      resultsImage("faysal-bank-recruitment"),
    ],
    layout: "data-driven",
  },

  "hbl-3d-simulation": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "National management trainee drive",
      "fr-CA": "Campagne nationale de recrutement de stagiaires en gestion",
      "id-ID": "Kampanye management trainee nasional",
      ar: "Ø­Ù…Ù„Ø© ÙˆØ·Ù†ÙŠØ© Ù„ØªÙˆØ¸ÙŠÙ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ†",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "A national management trainee drive for a top bank that needed a more effective, national-reach assessment than a conventional test.",
      "fr-CA": "Une campagne nationale de stagiaires en gestion pour une grande banque, qui avait besoin d'une Ã©valuation plus efficace et Ã  portÃ©e nationale qu'un test classique.",
      "id-ID": "Kampanye management trainee nasional untuk bank besar yang membutuhkan asesmen yang lebih efektif dan menjangkau nasional daripada tes konvensional.",
      ar: "Ø­Ù…Ù„Ø© ÙˆØ·Ù†ÙŠØ© Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† Ù„Ø¨Ù†Ùƒ ÙƒØ¨ÙŠØ± Ø§Ø­ØªØ§Ø¬Øª ØªÙ‚ÙŠÙŠÙ…Ø§Ù‹ Ø£ÙƒØ«Ø± ÙØ§Ø¹Ù„ÙŠØ© ÙˆØ£ÙˆØ³Ø¹ Ù†Ø·Ø§Ù‚Ø§Ù‹ Ù…Ù† Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ.",
    },
    solution: [
      {
        label: {
          en: "Pakistan's first 3D recruitment simulation",
          "fr-CA": "La premiÃ¨re simulation de recrutement 3D au Pakistan",
          "id-ID": "Simulasi rekrutmen 3D pertama di Pakistan",
          ar: "Ø£ÙˆÙ„ Ù…Ø­Ø§ÙƒØ§Ø© ØªÙˆØ¸ÙŠÙ Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙÙŠ Ø¨Ø§ÙƒØ³ØªØ§Ù†",
        },
      },
      {
        label: {
          en: "Cognitive games & real-life situations",
          "fr-CA": "Jeux cognitifs et situations rÃ©elles",
          "id-ID": "Game kognitif & situasi nyata",
          ar: "Ø£Ù„Ø¹Ø§Ø¨ Ù…Ø¹Ø±ÙÙŠØ© ÙˆÙ…ÙˆØ§Ù‚Ù ÙˆØ§Ù‚Ø¹ÙŠØ©",
        },
      },
      {
        label: {
          en: "Reused by HBL for the 2019 MT program",
          "fr-CA": "RÃ©utilisÃ©e par HBL pour le programme MT 2019",
          "id-ID": "Digunakan kembali oleh HBL untuk program MT 2019",
          ar: "Ø£ÙØ¹ÙŠØ¯ Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡ ÙÙŠ HBL Ù„Ø¨Ø±Ù†Ø§Ù…Ø¬ 2019",
        },
      },
    ],
    metrics: [
      { value: { en: "4,000+", "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" }, label: L.candidatesAssessed },
      { value: NA, label: L.completionRate },
      {
        value: { en: "2Ã—", "fr-CA": "2Ã—", "id-ID": "2Ã—", ar: "Ù…Ø±ØªÙŠÙ†" },
        label: {
          en: "Reused by HBL (2018â€“19)",
          "fr-CA": "RÃ©utilisÃ© par HBL (2018-19)",
          "id-ID": "Digunakan kembali oleh HBL (2018â€“19)",
          ar: "Ø£ÙØ¹ÙŠØ¯ Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡ ÙÙŠ HBL (2018â€“19)",
        },
      },
      { value: NA, label: L.timeToShortlist },
    ],
    images: [
      heroImage(getCaseStudy("hbl-3d-simulation")!),
      screenshotImage("hbl-3d-simulation", 1),
      screenshotImage("hbl-3d-simulation", 2),
      screenshotImage("hbl-3d-simulation", 3),
      resultsImage("hbl-3d-simulation"),
    ],
    layout: "data-driven",
    video: {
      src: "",
      title: {
        en: "HBL: Pakistan's first 3D recruitment simulation",
        "fr-CA": "HBL : la premiÃ¨re simulation de recrutement 3D au Pakistan",
        "id-ID": "HBL: simulasi rekrutmen 3D pertama di Pakistan",
        ar: "HBL: Ø£ÙˆÙ„ Ù…Ø­Ø§ÙƒØ§Ø© ØªÙˆØ¸ÙŠÙ Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙÙŠ Ø¨Ø§ÙƒØ³ØªØ§Ù†",
      },
    },
  },

  "fps-entry-test": {
    type: "education",
    region: PAKISTAN,
    scale: {
      en: "School entry-test pilot",
      "fr-CA": "Projet pilote de test d'admission scolaire",
      "id-ID": "Pilot tes masuk sekolah",
      ar: "ØªØ¬Ø±Ø¨Ø© Ø§Ø®ØªØ¨Ø§Ø± Ù‚Ø¨ÙˆÙ„ Ù…Ø¯Ø±Ø³ÙŠ",
    },
    industrySlug: "education",
    productSlug: "intos",
    challenge: {
      en: "A high-pressure O/A Level entry test that students dreaded â€” reimagined as an assessment that measures ability, not anxiety.",
      "fr-CA": "Un test d'admission aux niveaux O/A Ã  haute pression que les Ã©lÃ¨ves redoutaient â€” repensÃ© comme une Ã©valuation qui mesure la capacitÃ©, pas l'anxiÃ©tÃ©.",
      "id-ID": "Tes masuk O/A Level bertekanan tinggi yang ditakuti siswa â€” dibayangkan ulang sebagai asesmen yang mengukur kemampuan, bukan kecemasan.",
      ar: "Ø§Ø®ØªØ¨Ø§Ø± Ù‚Ø¨ÙˆÙ„ Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¶ØºØ· (O/A Level) ÙŠØªØ¬Ù†Ø¨Ù‡ Ø§Ù„Ø·Ù„Ø§Ø¨ â€” Ø£ÙØ¹ÙŠØ¯ ØªØµÙˆØ±Ù‡ ÙƒØªÙ‚ÙŠÙŠÙ… ÙŠÙ‚ÙŠØ³ Ø§Ù„Ø¥Ù…ÙƒØ§Ù†Ø§Øª Ù„Ø§ Ø§Ù„Ù‚Ù„Ù‚.",
    },
    solution: [
      {
        label: {
          en: "O/A Level entry test reimagined as a game",
          "fr-CA": "Test d'admission O/A repensÃ© en jeu",
          "id-ID": "Tes masuk O/A dibayangkan ulang sebagai game",
          ar: "Ø¥Ø¹Ø§Ø¯Ø© ØªØµÙˆØ± Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„Ù‚Ø¨ÙˆÙ„ O/A ÙƒÙ„Ø¹Ø¨Ø©",
        },
      },
      {
        label: {
          en: "Anxiety-reducing experience with measurement integrity",
          "fr-CA": "ExpÃ©rience rÃ©duisant l'anxiÃ©tÃ© avec intÃ©gritÃ© de mesure",
          "id-ID": "Pengalaman mengurangi kecemasan dengan integritas pengukuran",
          ar: "ØªØ¬Ø±Ø¨Ø© ØªØ®ÙÙ Ø§Ù„Ù‚Ù„Ù‚ Ù…Ø¹ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ù†Ø²Ø§Ù‡Ø© Ø§Ù„Ù‚ÙŠØ§Ø³",
        },
      },
    ],
    metrics: [
      { value: NA, label: L.applicantsProcessed },
      { value: NA, label: L.adminTimeSaved },
    ],
    images: [
      heroImage(getCaseStudy("fps-entry-test")!),
      screenshotImage("fps-entry-test", 1),
      screenshotImage("fps-entry-test", 2),
      resultsImage("fps-entry-test"),
    ],
  },

  "ba-kelectric-360": {
    type: "feedback",
    region: PAKISTAN,
    scale: {
      en: "Enterprise-wide 360Â° rollout (two organizations)",
      "fr-CA": "DÃ©ploiement 360Â° Ã  l'Ã©chelle de l'entreprise (deux organisations)",
      "id-ID": "Peluncuran 360Â° skala enterprise (dua organisasi)",
      ar: "Ù†Ø´Ø± Ø´Ø§Ù…Ù„ Ù„Ù†Ø¸Ø§Ù… 360 Ø¯Ø±Ø¬Ø© (Ù…Ø¤Ø³Ø³ØªØ§Ù†)",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "Two large organizations needed a scalable 360Â° feedback system for 7,000+ employees each â€” with reports HR could actually use.",
      "fr-CA": "Deux grandes organisations avaient besoin d'un systÃ¨me de rÃ©troaction 360Â° Ã©volutif pour plus de 7 000 employÃ©s chacune â€” avec des rapports rÃ©ellement utilisables par les RH.",
      "id-ID": "Dua organisasi besar membutuhkan sistem umpan balik 360Â° berskala untuk masing-masing 7.000+ karyawan â€” dengan laporan yang benar-benar bisa digunakan HR.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª Ù…Ø¤Ø³Ø³ØªØ§Ù† ÙƒØ¨ÙŠØ±ØªØ§Ù† Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªÙˆØ³Ø¹ Ù„Ø£ÙƒØ«Ø± Ù…Ù† 7,000 Ù…ÙˆØ¸Ù ÙÙŠ ÙƒÙ„ Ù…Ù†Ù‡Ù…Ø§ â€” Ù…Ø¹ ØªÙ‚Ø§Ø±ÙŠØ± ÙŠÙ…ÙƒÙ† Ù„Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø¨Ø´Ø±ÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§ ÙØ¹Ù„Ø§Ù‹.",
    },
    solution: [
      {
        label: {
          en: "Scalable 360Â° feedback platform",
          "fr-CA": "Plateforme de rÃ©troaction 360Â° Ã©volutive",
          "id-ID": "Platform umpan balik 360Â° berskala",
          ar: "Ù…Ù†ØµØ© ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹",
        },
      },
      {
        label: {
          en: "Automated 20-page personalized reports",
          "fr-CA": "Rapports personnalisÃ©s automatisÃ©s de 20 pages",
          "id-ID": "Laporan personal otomatis 20 halaman",
          ar: "ØªÙ‚Ø§Ø±ÙŠØ± Ø¢Ù„ÙŠØ© Ù…Ø®ØµØµØ© Ù…Ù† 20 ØµÙØ­Ø©",
        },
      },
      {
        label: {
          en: "Role-based access & multi-level review",
          "fr-CA": "AccÃ¨s fondÃ© sur les rÃ´les et examen Ã  plusieurs niveaux",
          "id-ID": "Akses berbasis peran & tinjauan bertingkat",
          ar: "ÙˆØµÙˆÙ„ Ø­Ø³Ø¨ Ø§Ù„Ø£Ø¯ÙˆØ§Ø± ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª",
        },
      },
    ],
    metrics: [
      {
        value: { en: "7,000+", "fr-CA": "7 000+", "id-ID": "7.000+", ar: "+7,000" },
        label: {
          en: "Employees assessed per organization",
          "fr-CA": "EmployÃ©s Ã©valuÃ©s par organisation",
          "id-ID": "Karyawan dinilai per organisasi",
          ar: "Ù…ÙˆØ¸Ù ØªÙ… ØªÙ‚ÙŠÙŠÙ…Ù‡Ù… ÙÙŠ ÙƒÙ„ Ù…Ø¤Ø³Ø³Ø©",
        },
      },
      { value: NA, label: L.reportTurnaround },
      { value: NA, label: L.raterParticipation },
      {
        value: { en: "20", "fr-CA": "20", "id-ID": "20", ar: "20" },
        label: {
          en: "Pages per automated report",
          "fr-CA": "Pages par rapport automatisÃ©",
          "id-ID": "Halaman per laporan otomatis",
          ar: "ØµÙØ­Ø© ÙÙŠ ÙƒÙ„ ØªÙ‚Ø±ÙŠØ± Ø¢Ù„ÙŠ",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("ba-kelectric-360")!),
      screenshotImage("ba-kelectric-360", 1),
      screenshotImage("ba-kelectric-360", 2),
      screenshotImage("ba-kelectric-360", 3),
      resultsImage("ba-kelectric-360"),
    ],
  },

  "kelectric-hipo": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "HiPo identification program",
      "fr-CA": "Programme d'identification des hauts potentiels",
      "id-ID": "Program identifikasi HiPo",
      ar: "Ø¨Ø±Ù†Ø§Ù…Ø¬ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…ÙˆØ§Ù‡Ø¨ Ø§Ù„ÙˆØ§Ø¹Ø¯Ø©",
    },
    industrySlug: "energy-utilities",
    productSlug: "intos",
    challenge: {
      en: "K-Electric needed to identify high-potential leaders using data rather than gut feel.",
      "fr-CA": "K-Electric devait identifier ses leaders Ã  haut potentiel avec des donnÃ©es plutÃ´t qu'Ã  l'intuition.",
      "id-ID": "K-Electric perlu mengidentifikasi pemimpin potensial tinggi menggunakan data, bukan perasaan.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª K-Electric Ø¥Ù„Ù‰ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù‚Ø§Ø¯Ø© Ø§Ù„ÙˆØ§Ø¹Ø¯ÙŠÙ† Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø§Ù„ØªÙ‚Ø¯ÙŠØ± Ø§Ù„Ø´Ø®ØµÙŠ.",
    },
    solution: [
      {
        label: {
          en: "Cognitive & personality assessment games",
          "fr-CA": "Jeux d'Ã©valuation cognitive et de personnalitÃ©",
          "id-ID": "Game asesmen kognitif & kepribadian",
          ar: "Ø£Ù„Ø¹Ø§Ø¨ ØªÙ‚ÙŠÙŠÙ… Ù…Ø¹Ø±ÙÙŠØ© ÙˆØ´Ø®ØµÙŠØ©",
        },
      },
      {
        label: {
          en: "Data-driven HiPo identification",
          "fr-CA": "Identification des hauts potentiels fondÃ©e sur les donnÃ©es",
          "id-ID": "Identifikasi HiPo berbasis data",
          ar: "ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…ÙˆØ§Ù‡Ø¨ Ø§Ù„ÙˆØ§Ø¹Ø¯Ø© Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
        },
      },
    ],
    metrics: [
      { value: NA, label: L.employeesAssessed },
      { value: NA, label: L.completionRate },
      {
        value: NA,
        label: {
          en: "HiPo candidates identified",
          "fr-CA": "Candidats Ã  haut potentiel identifiÃ©s",
          "id-ID": "Kandidat HiPo teridentifikasi",
          ar: "Ù…Ø±Ø´Ø­ ÙˆØ§Ø¹Ø¯ ØªÙ… ØªØ­Ø¯ÙŠØ¯Ù‡",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("kelectric-hipo")!),
      screenshotImage("kelectric-hipo", 1),
      screenshotImage("kelectric-hipo", 2),
      resultsImage("kelectric-hipo"),
    ],
  },

  "kelectric-360": {
    type: "feedback",
    region: PAKISTAN,
    scale: {
      en: "Senior management feedback cycle",
      "fr-CA": "Cycle de rÃ©troaction de la haute direction",
      "id-ID": "Siklus umpan balik manajemen senior",
      ar: "Ø¯ÙˆØ±Ø© ØªÙ‚ÙŠÙŠÙ… Ù„Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù„ÙŠØ§",
    },
    industrySlug: "energy-utilities",
    productSlug: "intos",
    challenge: {
      en: "Higher management at K-Electric needed a 360Â° feedback cycle that was simple to complete and produced real leadership insight.",
      "fr-CA": "La haute direction de K-Electric avait besoin d'un cycle de rÃ©troaction 360Â° simple Ã  complÃ©ter et source de rÃ©els insights sur le leadership.",
      "id-ID": "Manajemen senior K-Electric membutuhkan siklus umpan balik 360Â° yang mudah diselesaikan dan menghasilkan wawasan kepemimpinan nyata.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù„ÙŠØ§ ÙÙŠ K-Electric Ø¥Ù„Ù‰ Ø¯ÙˆØ±Ø© ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ø³Ù‡Ù„Ø© Ø§Ù„Ø¥ÙƒÙ…Ø§Ù„ ÙˆØªÙ‚Ø¯Ù… Ø±Ø¤Ù‰ Ù‚ÙŠØ§Ø¯ÙŠØ© Ø­Ù‚ÙŠÙ‚ÙŠØ©.",
    },
    solution: [
      {
        label: {
          en: "360Â° feedback for higher management",
          "fr-CA": "RÃ©troaction 360Â° pour la haute direction",
          "id-ID": "Umpan balik 360Â° untuk manajemen senior",
          ar: "ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ù„Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù„ÙŠØ§",
        },
      },
      {
        label: {
          en: "Progress-saving interface & 20-page automated analysis",
          "fr-CA": "Interface avec sauvegarde et analyse automatisÃ©e de 20 pages",
          "id-ID": "Antarmuka penyimpan progres & analisis otomatis 20 halaman",
          ar: "ÙˆØ§Ø¬Ù‡Ø© ØªØ­ÙØ¸ Ø§Ù„ØªÙ‚Ø¯Ù… Ù…Ø¹ ØªØ­Ù„ÙŠÙ„ Ø¢Ù„ÙŠ Ù…Ù† 20 ØµÙØ­Ø©",
        },
      },
    ],
    metrics: [
      {
        value: { en: "100", "fr-CA": "100", "id-ID": "100", ar: "100" },
        label: {
          en: "Higher management employees",
          "fr-CA": "EmployÃ©s de la haute direction",
          "id-ID": "Karyawan manajemen senior",
          ar: "Ù…ÙˆØ¸Ù Ù…Ù† Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù„ÙŠØ§",
        },
      },
      { value: NA, label: L.reportTurnaround },
      { value: NA, label: L.raterParticipation },
      {
        value: { en: "20", "fr-CA": "20", "id-ID": "20", ar: "20" },
        label: {
          en: "Pages of automated analysis",
          "fr-CA": "Pages d'analyse automatisÃ©e",
          "id-ID": "Halaman analisis otomatis",
          ar: "ØµÙØ­Ø© Ù…Ù† Ø§Ù„ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¢Ù„ÙŠ",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("kelectric-360")!),
      screenshotImage("kelectric-360", 1),
      screenshotImage("kelectric-360", 2),
      resultsImage("kelectric-360"),
    ],
  },

  "ird-epi-rehnuma": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "National vaccinator training program",
      "fr-CA": "Programme national de formation des vaccinateurs",
      "id-ID": "Program pelatihan vaksinator nasional",
      ar: "Ø¨Ø±Ù†Ø§Ù…Ø¬ ÙˆØ·Ù†ÙŠ Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…ÙÙ„Ù‚Ù‘Ø­ÙŠÙ†",
    },
    industrySlug: "government-public-sector",
    productSlug: "intos",
    challenge: {
      en: "Vaccinators across Pakistan needed consistent, engaging training on vaccine management, COVID-19 SOPs and cold-chain handling.",
      "fr-CA": "Les vaccinateurs partout au Pakistan avaient besoin d'une formation cohÃ©rente et engageante sur la gestion des vaccins, les protocoles COVID-19 et la chaÃ®ne du froid.",
      "id-ID": "Vaksinator di seluruh Pakistan membutuhkan pelatihan yang konsisten dan menarik tentang manajemen vaksin, SOP COVID-19, dan penanganan rantai dingin.",
      ar: "Ø§Ø­ØªØ§Ø¬ Ø§Ù„Ù…Ù„Ù‚Ù‘Ø­ÙˆÙ† ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø¨Ø§ÙƒØ³ØªØ§Ù† Ø¥Ù„Ù‰ ØªØ¯Ø±ÙŠØ¨ Ù…ØªØ³Ù‚ ÙˆØ¬Ø°Ø§Ø¨ Ø­ÙˆÙ„ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù„Ù‚Ø§Ø­Ø§Øª ÙˆØ¥Ø¬Ø±Ø§Ø¡Ø§Øª ÙƒÙˆÙÙŠØ¯-19 ÙˆØ³Ù„Ø³Ù„Ø© Ø§Ù„ØªØ¨Ø±ÙŠØ¯.",
    },
    solution: [
      {
        label: {
          en: "Gamified vaccinator learning app (EPI Rehnuma)",
          "fr-CA": "Application d'apprentissage ludifiÃ©e pour vaccinateurs (EPI Rehnuma)",
          "id-ID": "Aplikasi pembelajaran vaksinator bergamifikasi (EPI Rehnuma)",
          ar: "ØªØ·Ø¨ÙŠÙ‚ ØªØ¹Ù„Ù… ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„Ù…Ù„Ù‚Ù‘Ø­ÙŠÙ† (EPI Rehnuma)",
        },
      },
      {
        label: {
          en: "13 modules â€” vaccine management, cold chain, outbreak response & more",
          "fr-CA": "13 modules â€” gestion des vaccins, chaÃ®ne du froid, rÃ©ponse aux flambÃ©esâ€¦",
          "id-ID": "13 modul â€” manajemen vaksin, rantai dingin, respons wabah, dll.",
          ar: "13 ÙˆØ­Ø¯Ø© â€” Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù„Ù‚Ø§Ø­Ø§Øª ÙˆØ³Ù„Ø³Ù„Ø© Ø§Ù„ØªØ¨Ø±ÙŠØ¯ ÙˆØ§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ù„ÙØ§Ø´ÙŠØ§Øª ÙˆØºÙŠØ±Ù‡Ø§",
        },
      },
      {
        label: {
          en: "Video learning, quizzes, scoring & leaderboard",
          "fr-CA": "Apprentissage vidÃ©o, quiz, pointage et classement",
          "id-ID": "Pembelajaran video, kuis, penilaian & papan peringkat",
          ar: "ØªØ¹Ù„Ù… Ø¨Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØªÙ†Ù‚ÙŠØ· ÙˆÙ„ÙˆØ­Ø© Ù…ØªØµØ¯Ø±ÙŠÙ†",
        },
      },
    ],
    metrics: [
      {
        value: { en: "2,000+", "fr-CA": "2 000+", "id-ID": "2.000+", ar: "+2,000" },
        label: {
          en: "Vaccinators trained",
          "fr-CA": "Vaccinateurs formÃ©s",
          "id-ID": "Vaksinator dilatih",
          ar: "Ù…ÙÙ„Ù‚Ù‘Ø­ ØªÙ„Ù‚Ù‰ Ø§Ù„ØªØ¯Ø±ÙŠØ¨",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
      {
        value: { en: "13", "fr-CA": "13", "id-ID": "13", ar: "13" },
        label: {
          en: "Learning modules",
          "fr-CA": "Modules d'apprentissage",
          "id-ID": "Modul pembelajaran",
          ar: "ÙˆØ­Ø¯Ø© ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("ird-epi-rehnuma")!),
      screenshotImage("ird-epi-rehnuma", 1),
      screenshotImage("ird-epi-rehnuma", 2),
      screenshotImage("ird-epi-rehnuma", 3),
      screenshotImage("ird-epi-rehnuma", 4),
      resultsImage("ird-epi-rehnuma"),
    ],
    video: {
      src: "",
      title: {
        en: "EPI Rehnuma: vaccinator training at national scale",
        "fr-CA": "EPI Rehnuma : formation des vaccinateurs Ã  l'Ã©chelle nationale",
        "id-ID": "EPI Rehnuma: pelatihan vaksinator skala nasional",
        ar: "EPI Rehnuma: ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…Ù„Ù‚Ù‘Ø­ÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ÙˆØ·Ù†ÙŠ",
      },
    },
  },

  "hbl-design-thinking": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "Enterprise LMS module rollout",
      "fr-CA": "DÃ©ploiement de modules LMS d'entreprise",
      "id-ID": "Peluncuran modul LMS enterprise",
      ar: "Ù†Ø´Ø± ÙˆØ­Ø¯Ø§Øª ØªØ¹Ù„Ù… Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ø¤Ø³Ø³Ø©",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "A bank-wide design-thinking capability push â€” one methodology, one set of tools, delivered consistently to 20,000+ employees.",
      "fr-CA": "Un dÃ©ploiement du design thinking Ã  l'Ã©chelle de la banque â€” une mÃ©thodologie, une boÃ®te Ã  outils, livrÃ©es de faÃ§on cohÃ©rente Ã  plus de 20 000 employÃ©s.",
      "id-ID": "Dorongan kapabilitas design thinking di seluruh bank â€” satu metodologi, satu set alat, dikirim konsisten ke 20.000+ karyawan.",
      ar: "Ø¯ÙØ¹Ø© Ù„ØªØ·ÙˆÙŠØ± Ù‚Ø¯Ø±Ø§Øª Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„ØªØµÙ…ÙŠÙ…ÙŠ Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø¨Ù†Ùƒ â€” Ù…Ù†Ù‡Ø¬ÙŠØ© ÙˆØ§Ø­Ø¯Ø© ÙˆØ­Ø²Ù…Ø© Ø£Ø¯ÙˆØ§Øª ÙˆØ§Ø­Ø¯Ø©ØŒ ØªÙÙ‚Ø¯ÙŽÙ‘Ù… Ø¨Ø§Ø³ØªÙ…Ø±Ø§Ø± Ù„Ø£ÙƒØ«Ø± Ù…Ù† 20,000 Ù…ÙˆØ¸Ù.",
    },
    solution: [
      {
        label: {
          en: "Design Thinking learning game",
          "fr-CA": "Jeu d'apprentissage du design thinking",
          "id-ID": "Game pembelajaran Design Thinking",
          ar: "Ù„Ø¹Ø¨Ø© ØªØ¹Ù„Ù… Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„ØªØµÙ…ÙŠÙ…ÙŠ",
        },
      },
      {
        label: {
          en: "Integrated into Oracle Taleo LMS",
          "fr-CA": "IntÃ©grÃ© au LMS Oracle Taleo",
          "id-ID": "Terintegrasi ke LMS Oracle Taleo",
          ar: "Ù…Ø¯Ù…Ø¬ ÙÙŠ Ù…Ù†ØµØ© Oracle Taleo",
        },
      },
      {
        label: {
          en: "Five components + core problem-solving tools",
          "fr-CA": "Cinq composantes + outils de rÃ©solution de problÃ¨mes",
          "id-ID": "Lima komponen + alat pemecahan masalah inti",
          ar: "Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø®Ù…Ø³Ø© + Ø£Ø¯ÙˆØ§Øª Ø­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©",
        },
      },
    ],
    metrics: [
      {
        value: { en: "20,000+", "fr-CA": "20 000+", "id-ID": "20.000+", ar: "+20,000" },
        label: {
          en: "Employees reached via LMS",
          "fr-CA": "EmployÃ©s touchÃ©s via le LMS",
          "id-ID": "Karyawan yang terjangkau via LMS",
          ar: "Ù…ÙˆØ¸Ù Ø¹Ø¨Ø± Ù…Ù†ØµØ© Ø§Ù„ØªØ¹Ù„Ù…",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
      {
        value: { en: "5", "fr-CA": "5", "id-ID": "5", ar: "5" },
        label: {
          en: "Design Thinking components covered",
          "fr-CA": "Composantes du design thinking couvertes",
          "id-ID": "Komponen Design Thinking tercakup",
          ar: "Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„ØªØµÙ…ÙŠÙ…ÙŠ Ø§Ù„Ù…ØºØ·Ø§Ø©",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("hbl-design-thinking")!),
      screenshotImage("hbl-design-thinking", 1),
      screenshotImage("hbl-design-thinking", 2),
      resultsImage("hbl-design-thinking"),
    ],
  },

  "hbl-agile": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "Enterprise LMS module rollout",
      "fr-CA": "DÃ©ploiement de modules LMS d'entreprise",
      "id-ID": "Peluncuran modul LMS enterprise",
      ar: "Ù†Ø´Ø± ÙˆØ­Ø¯Ø§Øª ØªØ¹Ù„Ù… Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ø¤Ø³Ø³Ø©",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "20,000+ HBL employees needed hands-on clarity on agile and Scrum through the bank's LMS.",
      "fr-CA": "Plus de 20 000 employÃ©s de HBL avaient besoin d'une clartÃ© pratique sur l'agile et Scrum via le LMS de la banque.",
      "id-ID": "20.000+ karyawan HBL membutuhkan kejelasan praktis tentang agile dan Scrum melalui LMS bank.",
      ar: "Ø§Ø­ØªØ§Ø¬ Ø£ÙƒØ«Ø± Ù…Ù† 20,000 Ù…ÙˆØ¸Ù ÙÙŠ HBL Ø¥Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ø¹Ù…Ù„ÙŠ Ø­ÙˆÙ„ Ø§Ù„Ø±Ø´Ø§Ù‚Ø© ÙˆScrum Ø¹Ø¨Ø± Ù…Ù†ØµØ© ØªØ¹Ù„Ù… Ø§Ù„Ø¨Ù†Ùƒ.",
    },
    solution: [
      {
        label: {
          en: "Agile Project Management learning game",
          "fr-CA": "Jeu d'apprentissage de gestion de projet agile",
          "id-ID": "Game pembelajaran Manajemen Proyek Agile",
          ar: "Ù„Ø¹Ø¨Ø© ØªØ¹Ù„Ù… Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ø±Ø´ÙŠÙ‚Ø©",
        },
      },
      {
        label: {
          en: "Integrated into Oracle Taleo LMS",
          "fr-CA": "IntÃ©grÃ© au LMS Oracle Taleo",
          "id-ID": "Terintegrasi ke LMS Oracle Taleo",
          ar: "Ù…Ø¯Ù…Ø¬ ÙÙŠ Ù…Ù†ØµØ© Oracle Taleo",
        },
      },
      {
        label: {
          en: "Agile, Scrum & success-story learning objectives",
          "fr-CA": "Objectifs d'apprentissage agile, Scrum et rÃ©ussites",
          "id-ID": "Tujuan pembelajaran agile, Scrum & kisah sukses",
          ar: "Ø£Ù‡Ø¯Ø§Ù ØªØ¹Ù„Ù… Ù„Ù„Ø±Ø´Ø§Ù‚Ø© ÙˆScrum ÙˆÙ‚ØµØµ Ø§Ù„Ù†Ø¬Ø§Ø­",
        },
      },
    ],
    metrics: [
      { value: { en: "20,000+", "fr-CA": "20 000+", "id-ID": "20.000+", ar: "+20,000" }, label: L.peopleTrained },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
      { value: NA, label: L.timeToCompetency },
    ],
    images: [
      heroImage(getCaseStudy("hbl-agile")!),
      screenshotImage("hbl-agile", 1),
      screenshotImage("hbl-agile", 2),
      resultsImage("hbl-agile"),
    ],
  },

  "daraz-academy": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "National workforce onboarding",
      "fr-CA": "IntÃ©gration nationale de la main-d'Å“uvre",
      "id-ID": "Onboarding tenaga kerja nasional",
      ar: "ØªØ¹Ø±ÙŠÙ ÙˆØ·Ù†ÙŠ Ù„Ù„Ù‚ÙˆÙ‰ Ø§Ù„Ø¹Ø§Ù…Ù„Ø©",
    },
    industrySlug: "education",
    productSlug: "intos",
    challenge: {
      en: "Daraz's delivery workforce needed onboarding that was consistent, measurable and actually finished â€” across every rider in Pakistan.",
      "fr-CA": "La main-d'Å“uvre de livraison de Daraz avait besoin d'une intÃ©gration cohÃ©rente, mesurable et rÃ©ellement complÃ©tÃ©e â€” pour chaque coursier au Pakistan.",
      "id-ID": "Tenaga pengiriman Daraz membutuhkan onboarding yang konsisten, terukur, dan benar-benar diselesaikan â€” di setiap pengendara di Pakistan.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª Ù‚ÙˆØ© ØªÙˆØµÙŠÙ„ Ø¯Ø§Ø±Ø§Ø² Ø¥Ù„Ù‰ ØªØ¹Ø±ÙŠÙ Ù…ØªØ³Ù‚ ÙˆÙ‚Ø§Ø¨Ù„ Ù„Ù„Ù‚ÙŠØ§Ø³ ÙŠÙÙ†Ø¬Ø² ÙØ¹Ù„Ø§Ù‹ â€” Ù„ÙƒÙ„ Ø³Ø§Ø¦Ù‚ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø¨Ø§ÙƒØ³ØªØ§Ù†.",
    },
    solution: [
      {
        label: {
          en: "Gamified onboarding learning & assessment app",
          "fr-CA": "Application d'intÃ©gration et d'Ã©valuation ludifiÃ©e",
          "id-ID": "Aplikasi pembelajaran & asesmen onboarding bergamifikasi",
          ar: "ØªØ·Ø¨ÙŠÙ‚ ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„ØªØ¹Ù„Ù… ÙˆØ§Ù„ØªÙ‚ÙŠÙŠÙ… Ø§Ù„ØªØ¹Ø±ÙŠÙÙŠ",
        },
      },
      {
        label: {
          en: "Route preparation, customer interaction & conduct modules",
          "fr-CA": "Modules de prÃ©paration d'itinÃ©raire, d'interaction client et de conduite",
          "id-ID": "Modul persiapan rute, interaksi pelanggan & perilaku",
          ar: "ÙˆØ­Ø¯Ø§Øª ØªØ¬Ù‡ÙŠØ² Ø§Ù„Ù…Ø³Ø§Ø± ÙˆØ§Ù„ØªÙØ§Ø¹Ù„ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ§Ù„Ø³Ù„ÙˆÙƒ",
        },
      },
      {
        label: {
          en: "Live dashboard tracking every rider",
          "fr-CA": "Tableau de bord en direct suivant chaque coursier",
          "id-ID": "Dashboard langsung melacak setiap pengendara",
          ar: "Ù„ÙˆØ­Ø© ØªØ­ÙƒÙ… Ø­ÙŠØ© ØªØªØ§Ø¨Ø¹ ÙƒÙ„ Ø³Ø§Ø¦Ù‚",
        },
      },
    ],
    metrics: [
      {
        value: { en: "2,000+", "fr-CA": "2 000+", "id-ID": "2.000+", ar: "+2,000" },
        label: {
          en: "Riders trained & hired since",
          "fr-CA": "Coursiers formÃ©s et embauchÃ©s depuis",
          "id-ID": "Pengendara dilatih & direkrut sejak",
          ar: "Ø³Ø§Ø¦Ù‚ ØªØ¯Ø±Ø¨ ÙˆØ¹ÙÙŠÙ‘Ù† Ù…Ù†Ø° Ø°Ù„Ùƒ Ø§Ù„Ø­ÙŠÙ†",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
      {
        value: { en: "3", "fr-CA": "3", "id-ID": "3", ar: "3" },
        label: {
          en: "Onboarding modules",
          "fr-CA": "Modules d'intÃ©gration",
          "id-ID": "Modul onboarding",
          ar: "ÙˆØ­Ø¯Ø§Øª ØªØ¹Ø±ÙŠÙÙŠØ©",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("daraz-academy")!),
      screenshotImage("daraz-academy", 1),
      screenshotImage("daraz-academy", 2),
      screenshotImage("daraz-academy", 3),
      resultsImage("daraz-academy"),
    ],
  },

  "shell-driver-training": {
    type: "training",
    region: PAKISTAN,
    scale: {
      en: "National fleet safety training",
      "fr-CA": "Formation nationale Ã  la sÃ©curitÃ© de la flotte",
      "id-ID": "Pelatihan keselamatan armada nasional",
      ar: "ØªØ¯Ø±ÙŠØ¨ Ø³Ù„Ø§Ù…Ø© ÙˆØ·Ù†ÙŠ Ù„Ù„Ø£Ø³Ø·ÙˆÙ„",
    },
    industrySlug: "energy-utilities",
    productSlug: "intos",
    challenge: {
      en: "Shell's commercial drivers needed standardized safety training across the entire fleet â€” from defensive driving to emergency response.",
      "fr-CA": "Les conducteurs commerciaux de Shell avaient besoin d'une formation Ã  la sÃ©curitÃ© normalisÃ©e sur toute la flotte â€” de la conduite dÃ©fensive Ã  l'intervention d'urgence.",
      "id-ID": "Pengemudi komersial Shell membutuhkan pelatihan keselamatan terstandarisasi di seluruh armada â€” dari mengemudi defensif hingga respons darurat.",
      ar: "Ø§Ø­ØªØ§Ø¬ Ø³Ø§Ø¦Ù‚Ùˆ Ø´Ù„ Ø§Ù„ØªØ¬Ø§Ø±ÙŠÙˆÙ† Ø¥Ù„Ù‰ ØªØ¯Ø±ÙŠØ¨ Ø³Ù„Ø§Ù…Ø© Ù…Ø¹ÙŠØ§Ø±ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ø£Ø³Ø·ÙˆÙ„ Ø¨Ø£ÙƒÙ…Ù„Ù‡ â€” Ù…Ù† Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„Ø¯ÙØ§Ø¹ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ù„Ø·ÙˆØ§Ø±Ø¦.",
    },
    solution: [
      {
        label: {
          en: "3D simulation-based driver safety training",
          "fr-CA": "Formation Ã  la sÃ©curitÃ© des conducteurs basÃ©e sur la simulation 3D",
          "id-ID": "Pelatihan keselamatan pengemudi berbasis simulasi 3D",
          ar: "ØªØ¯Ø±ÙŠØ¨ Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† Ø¨Ù…Ø­Ø§ÙƒØ§Ø© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯",
        },
      },
      {
        label: {
          en: "7 topics â€” defensive driving, rollover, fire, emergency responseâ€¦",
          "fr-CA": "7 sujets â€” conduite dÃ©fensive, retournement, incendie, interventions d'urgenceâ€¦",
          "id-ID": "7 topik â€” mengemudi defensif, terguling, kebakaran, respons daruratâ€¦",
          ar: "7 Ù…ÙˆØ§Ø¶ÙŠØ¹ â€” Ù‚ÙŠØ§Ø¯Ø© Ø¯ÙØ§Ø¹ÙŠØ© ÙˆØ§Ù†Ù‚Ù„Ø§Ø¨ ÙˆØ­Ø±Ø§Ø¦Ù‚ ÙˆØ§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ù„Ø·ÙˆØ§Ø±Ø¦â€¦",
        },
      },
      {
        label: {
          en: "Standardized safety training across the fleet",
          "fr-CA": "Formation Ã  la sÃ©curitÃ© normalisÃ©e sur toute la flotte",
          "id-ID": "Pelatihan keselamatan terstandarisasi di seluruh armada",
          ar: "ØªØ¯Ø±ÙŠØ¨ Ø³Ù„Ø§Ù…Ø© Ù…Ø¹ÙŠØ§Ø±ÙŠ Ù„ÙƒØ§Ù…Ù„ Ø§Ù„Ø£Ø³Ø·ÙˆÙ„",
        },
      },
    ],
    metrics: [
      {
        value: { en: "2,000", "fr-CA": "2 000", "id-ID": "2.000", ar: "2,000" },
        label: {
          en: "Truck drivers trained",
          "fr-CA": "Conducteurs de camions formÃ©s",
          "id-ID": "Pengemudi truk dilatih",
          ar: "Ø³Ø§Ø¦Ù‚ Ø´Ø§Ø­Ù†Ø© ØªÙ„Ù‚Ù‰ Ø§Ù„ØªØ¯Ø±ÙŠØ¨",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.scoreImprovement },
      {
        value: { en: "7", "fr-CA": "7", "id-ID": "7", ar: "7" },
        label: {
          en: "Safety training topics",
          "fr-CA": "Sujets de formation Ã  la sÃ©curitÃ©",
          "id-ID": "Topik pelatihan keselamatan",
          ar: "Ù…ÙˆØ¶ÙˆØ¹ ØªØ¯Ø±ÙŠØ¨ Ø³Ù„Ø§Ù…Ø©",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("shell-driver-training")!),
      screenshotImage("shell-driver-training", 1),
      screenshotImage("shell-driver-training", 2),
      screenshotImage("shell-driver-training", 3),
      resultsImage("shell-driver-training"),
    ],
  },

  "sbc-knowledge-gate": {
    type: "portal",
    region: SAUDI_ARABIA,
    scale: {
      en: "National government service portal",
      "fr-CA": "Portail gouvernemental national de services",
      "id-ID": "Portal layanan pemerintah nasional",
      ar: "Ø¨ÙˆØ§Ø¨Ø© Ø®Ø¯Ù…Ø§Øª Ø­ÙƒÙˆÙ…ÙŠØ© ÙˆØ·Ù†ÙŠØ©",
    },
    industrySlug: "government-public-sector",
    productSlug: "intos",
    challenge: {
      en: "Front-desk staff and call-center representatives across 10+ Saudi entities needed one trusted source for procedures, fees and SLAs.",
      "fr-CA": "Le personnel de rÃ©ception et les agents des centres d'appels dans plus de 10 entitÃ©s saoudiennes avaient besoin d'une source unique et fiable pour les procÃ©dures, frais et SLA.",
      "id-ID": "Staf meja depan dan perwakilan call center di 10+ entitas Saudi membutuhkan satu sumber tepercaya untuk prosedur, biaya, dan SLA.",
      ar: "Ø§Ø­ØªØ§Ø¬ Ù…ÙˆØ¸ÙÙˆ Ø§Ù„Ø®Ø·ÙˆØ· Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© ÙˆÙ…Ø±Ø§ÙƒØ² Ø§Ù„Ø§ØªØµØ§Ù„ ÙÙŠ Ø£ÙƒØ«Ø± Ù…Ù† 10 Ø¬Ù‡Ø§Øª Ø³Ø¹ÙˆØ¯ÙŠØ© Ø¥Ù„Ù‰ Ù…ØµØ¯Ø± Ù…ÙˆØ«ÙˆÙ‚ ÙˆØ§Ø­Ø¯ Ù„Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª ÙˆØ§Ù„Ø±Ø³ÙˆÙ… ÙˆØ§Ù„Ù…Ø¯Ø¯ Ø§Ù„Ø²Ù…Ù†ÙŠØ©.",
    },
    solution: [
      {
        label: {
          en: "Enterprise knowledge portal across 10+ Saudi entities",
          "fr-CA": "Portail de connaissances d'entreprise dans plus de 10 entitÃ©s saoudiennes",
          "id-ID": "Portal pengetahuan enterprise di 10+ entitas Saudi",
          ar: "Ø¨ÙˆØ§Ø¨Ø© Ù…Ø¹Ø±ÙØ© Ù…Ø¤Ø³Ø³ÙŠØ© Ø¹Ø¨Ø± Ø£ÙƒØ«Ø± Ù…Ù† 10 Ø¬Ù‡Ø§Øª Ø³Ø¹ÙˆØ¯ÙŠØ©",
        },
      },
      {
        label: {
          en: "Google-style smart search with predictive autosuggest",
          "fr-CA": "Recherche intelligente inspirÃ©e de Google avec saisie prÃ©dictive",
          "id-ID": "Pencarian cerdas gaya Google dengan autosuggest prediktif",
          ar: "Ø¨Ø­Ø« Ø°ÙƒÙŠ Ø¨Ø£Ø³Ù„ÙˆØ¨ Google Ù…Ø¹ Ø§Ù‚ØªØ±Ø§Ø­Ø§Øª ØªÙ†Ø¨Ø¤ÙŠØ©",
        },
      },
      {
        label: {
          en: "Community content-update workflow + assessment & survey suite",
          "fr-CA": "Flux de mise Ã  jour communautaire + suite d'Ã©valuation et de sondage",
          "id-ID": "Alur pembaruan konten komunitas + suite asesmen & survei",
          ar: "Ù…Ø³Ø§Ø± ØªØ­Ø¯ÙŠØ« Ù…Ø­ØªÙˆÙ‰ Ù…Ø¬ØªÙ…Ø¹ÙŠ + Ø­Ø²Ù…Ø© ØªÙ‚ÙŠÙŠÙ… ÙˆØ§Ø³ØªØ¨ÙŠØ§Ù†Ø§Øª",
        },
      },
      {
        label: {
          en: "SSO with the 'Reaching the Top' training suite",
          "fr-CA": "Authentification unique avec la suite Â« Reaching the Top Â»",
          "id-ID": "SSO dengan suite pelatihan 'Reaching the Top'",
          ar: "Ø¯Ø®ÙˆÙ„ Ù…ÙˆØ­Ø¯ Ù…Ø¹ Ù…Ù†ØµØ© 'Reaching the Top'",
        },
      },
    ],
    metrics: [
      {
        value: { en: "10+", "fr-CA": "10+", "id-ID": "10+", ar: "+10" },
        label: {
          en: "Integrated Saudi ministries & entities",
          "fr-CA": "MinistÃ¨res & entitÃ©s saoudiennes intÃ©grÃ©s",
          "id-ID": "Kementerian & entitas Saudi terintegrasi",
          ar: "ÙˆØ²Ø§Ø±Ø© ÙˆØ¬Ù‡Ø© Ø­ÙƒÙˆÙ…ÙŠØ© Ø³Ø¹ÙˆØ¯ÙŠØ© Ù…Ø±ØªØ¨Ø·Ø©",
        },
      },
      {
        value: { en: "300+", "fr-CA": "300+", "id-ID": "300+", ar: "+300" },
        label: {
          en: "Concurrent active sessions supported",
          "fr-CA": "Sessions actives simultanÃ©es prises en charge",
          "id-ID": "Sesi aktif bersamaan didukung",
          ar: "Ø¬Ù„Ø³Ø© Ù†Ø´Ø·Ø© Ù…ØªØ²Ø§Ù…Ù†Ø© Ù…Ø¯Ø¹ÙˆÙ…Ø©",
        },
      },
      {
        value: {
          en: "TAT Reduction",
          "fr-CA": "RÃ©duction du TAT",
          "id-ID": "Reduksi TAT",
          ar: "Ø®ÙØ¶ Ø²Ù…Ù† Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø©",
        },
        label: {
          en: "Instant query resolution via smart search",
          "fr-CA": "RÃ©solution instantanÃ©e grÃ¢ce Ã  la recherche intelligente",
          "id-ID": "Resolusi kueri instan via pencarian cerdas",
          ar: "Ø­Ù„ ÙÙˆØ±ÙŠ Ù„Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ø°ÙƒÙŠ",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Unified SSO & profile integration",
          "fr-CA": "IntÃ©gration SSO & profil unifiÃ©",
          "id-ID": "Integrasi SSO & profil terpadu",
          ar: "Ø±Ø¨Ø· Ù…ÙˆØ­Ø¯ Ù„Ù„Ø¯Ø®ÙˆÙ„ ÙˆØ§Ù„Ù…Ù„ÙØ§Øª Ø§Ù„Ø´Ø®ØµÙŠØ©",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("sbc-knowledge-gate")!),
      screenshotImage("sbc-knowledge-gate", 1),
      screenshotImage("sbc-knowledge-gate", 2),
      screenshotImage("sbc-knowledge-gate", 3),
      screenshotImage("sbc-knowledge-gate", 4),
      resultsImage("sbc-knowledge-gate"),
    ],
    layout: "product-specific",
    video: {
      src: "",
      title: {
        en: "Knowledge Gate: a national government knowledge portal",
        "fr-CA": "Knowledge Gate : un portail de connaissances gouvernemental national",
        "id-ID": "Knowledge Gate: portal pengetahuan pemerintah nasional",
        ar: "Knowledge Gate: Ø¨ÙˆØ§Ø¨Ø© Ù…Ø¹Ø±ÙØ© Ø­ÙƒÙˆÙ…ÙŠØ© ÙˆØ·Ù†ÙŠØ©",
      },
    },
  },

  "sbc-reaching-top": {
    type: "training",
    region: SAUDI_ARABIA,
    scale: {
      en: "National customer-service training suite",
      "fr-CA": "Suite nationale de formation au service client",
      "id-ID": "Suite pelatihan layanan pelanggan nasional",
      ar: "Ù…Ù†ØµØ© ÙˆØ·Ù†ÙŠØ© Ù„ØªØ¯Ø±ÙŠØ¨ Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡",
    },
    industrySlug: "government-public-sector",
    productSlug: "intos",
    challenge: {
      en: "Mandatory customer-service training for every SCBC employee nationwide â€” traditionally delivered as lectures and static manuals.",
      "fr-CA": "Une formation obligatoire au service client pour chaque employÃ© de SCBC Ã  l'Ã©chelle nationale â€” traditionnellement livrÃ©e en cours magistraux et manuels statiques.",
      "id-ID": "Pelatihan layanan pelanggan wajib untuk setiap karyawan SCBC di seluruh negeri â€” biasanya disampaikan lewat ceramah dan manual statis.",
      ar: "ØªØ¯Ø±ÙŠØ¨ Ø¥Ù„Ø²Ø§Ù…ÙŠ Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù„ÙƒÙ„ Ù…ÙˆØ¸Ù ÙÙŠ Ø§Ù„Ù…Ø±ÙƒØ² Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù…Ù„ÙƒØ© â€” ÙŠÙÙ‚Ø¯ÙŽÙ‘Ù… ØªÙ‚Ù„ÙŠØ¯ÙŠØ§Ù‹ Ø¹Ø¨Ø± Ø§Ù„Ù…Ø­Ø§Ø¶Ø±Ø§Øª ÙˆØ§Ù„Ø£Ø¯Ù„Ø© Ø§Ù„Ø«Ø§Ø¨ØªØ©.",
    },
    solution: [
      {
        label: {
          en: "3-part, 30-day gamified career simulation",
          "fr-CA": "Simulation de carriÃ¨re ludifiÃ©e en 3 parties sur 30 jours",
          "id-ID": "Simulasi karir gamifikasi 3 bagian selama 30 hari",
          ar: "Ù…Ø­Ø§ÙƒØ§Ø© Ù…Ù‡Ù†ÙŠØ© ØªÙØ§Ø¹Ù„ÙŠØ© Ù…Ù† 3 Ø£Ø¬Ø²Ø§Ø¡ Ø¹Ù„Ù‰ 30 ÙŠÙˆÙ…Ø§Ù‹",
        },
      },
      {
        label: {
          en: "SJQs, dialogue trees & 4 customer personality types",
          "fr-CA": "SJQ, arbres de dialogue et 4 types de personnalitÃ© client",
          "id-ID": "SJQ, pohon dialog & 4 tipe kepribadian pelanggan",
          ar: "Ø£Ø³Ø¦Ù„Ø© Ù…ÙˆØ§Ù‚Ù ÙˆØ´Ø¬Ø±Ø§Øª Ø­ÙˆØ§Ø± Ùˆ4 Ø´Ø®ØµÙŠØ§Øª Ø¹Ù…Ù„Ø§Ø¡",
        },
      },
      {
        label: {
          en: "Active Directory & SCORM LMS integration",
          "fr-CA": "IntÃ©gration Active Directory et LMS SCORM",
          "id-ID": "Integrasi Active Directory & LMS SCORM",
          ar: "Ø¯Ù…Ø¬ Ù…Ø¹ Active Directory ÙˆØ£Ù†Ø¸Ù…Ø© LMS Ø§Ù„Ù…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ SCORM",
        },
      },
      {
        label: {
          en: "Real-time admin analytics dashboard",
          "fr-CA": "Tableau de bord d'analyse en temps rÃ©el",
          "id-ID": "Dashboard analitik admin real-time",
          ar: "Ù„ÙˆØ­Ø© ØªØ­ÙƒÙ… ØªØ­Ù„ÙŠÙ„Ø§Øª ÙÙˆØ±ÙŠØ© Ù„Ù„Ø¥Ø¯Ø§Ø±Ø©",
        },
      },
    ],
    metrics: [
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Mandatory training coverage",
          "fr-CA": "Couverture de formation obligatoire",
          "id-ID": "Cakupan pelatihan wajib",
          ar: "ØªØºØ·ÙŠØ© Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ø¥Ù„Ø²Ø§Ù…ÙŠ",
        },
      },
      {
        value: { en: "30 Days", "fr-CA": "30 jours", "id-ID": "30 Hari", ar: "30 ÙŠÙˆÙ…Ø§Ù‹" },
        label: {
          en: "3-part gamified career journey",
          "fr-CA": "Parcours de carriÃ¨re ludifiÃ© en 3 parties",
          "id-ID": "Perjalanan karir gamifikasi 3 bagian",
          ar: "Ø±Ø­Ù„Ø© Ù…Ù‡Ù†ÙŠØ© ØªÙØ§Ø¹Ù„ÙŠØ© Ù…Ù† 3 Ø£Ø¬Ø²Ø§Ø¡",
        },
      },
      {
        value: { en: "4", "fr-CA": "4", "id-ID": "4", ar: "4" },
        label: {
          en: "Customer personality types & SJQs",
          "fr-CA": "Types de personnalitÃ© client & SJQ",
          "id-ID": "Tipe kepribadian pelanggan & SJQ",
          ar: "Ø´Ø®ØµÙŠØ§Øª Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ£Ø³Ø¦Ù„Ø© Ù…ÙˆØ§Ù‚Ù",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Bilingual Arabic & English",
          "fr-CA": "Bilingue arabe et anglais",
          "id-ID": "Bilingual Arab & Inggris",
          ar: "Ø«Ù†Ø§Ø¦ÙŠ Ø§Ù„Ù„ØºØ© (Ø¹Ø±Ø¨ÙŠ ÙˆØ¥Ù†Ø¬Ù„ÙŠØ²ÙŠ)",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("sbc-reaching-top")!),
      screenshotImage("sbc-reaching-top", 1),
      screenshotImage("sbc-reaching-top", 2),
      screenshotImage("sbc-reaching-top", 3),
      screenshotImage("sbc-reaching-top", 4),
      resultsImage("sbc-reaching-top"),
    ],
    layout: "product-specific",
  },

  "parco-internship": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Annual internship selection drive",
      "fr-CA": "Campagne annuelle de sÃ©lection des stagiaires",
      "id-ID": "Kampanye seleksi magang tahunan",
      ar: "Ø­Ù…Ù„Ø© Ø³Ù†ÙˆÙŠØ© Ù„Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ†",
    },
    industrySlug: "energy-utilities",
    productSlug: "intos",
    challenge: {
      en: "PARCO needed an internship selection drive that evaluated engineering and business talent on real refinery scenarios, not transcripts.",
      "fr-CA": "PARCO avait besoin d'une campagne de sÃ©lection des stages Ã©valuant les talents en ingÃ©nierie et en gestion sur de vrais scÃ©narios de raffinerie, pas sur les relevÃ©s de notes.",
      "id-ID": "PARCO membutuhkan kampanye seleksi magang yang menilai talenta teknik dan bisnis pada skenario kilang nyata, bukan transkrip.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª PARCO Ø¥Ù„Ù‰ Ø­Ù…Ù„Ø© Ø§Ø®ØªÙŠØ§Ø± Ù…ØªØ¯Ø±Ø¨ÙŠÙ† ØªÙ‚ÙŠÙ‘Ù… Ø§Ù„Ù…ÙˆØ§Ù‡Ø¨ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ© Ø¹Ø¨Ø± Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª ØªÙƒØ±ÙŠØ± Ø­Ù‚ÙŠÙ‚ÙŠØ© Ù„Ø§ Ø¹Ø¨Ø± Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª.",
    },
    solution: [
      {
        label: {
          en: "Elevate â€” customized internship assessment drive",
          "fr-CA": "Elevate â€” campagne d'Ã©valuation des stages personnalisÃ©e",
          "id-ID": "Elevate â€” kampanye asesmen magang kustom",
          ar: "Elevate â€” Ø­Ù…Ù„Ø© ØªÙ‚ÙŠÙŠÙ… Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ù…Ø®ØµØµØ©",
        },
      },
      {
        label: {
          en: "Timed cognitive mini-games + energy-sector SJTs",
          "fr-CA": "Mini-jeux cognitifs chronomÃ©trÃ©s + SJT du secteur de l'Ã©nergie",
          "id-ID": "Mini-game kognitif berbatas waktu + SJT sektor energi",
          ar: "Ø£Ù„Ø¹Ø§Ø¨ Ù…Ø¹Ø±ÙÙŠØ© Ù…Ø¤Ù‚ØªØ© + Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…ÙˆØ§Ù‚Ù ÙÙŠ Ù‚Ø·Ø§Ø¹ Ø§Ù„Ø·Ø§Ù‚Ø©",
        },
      },
      {
        label: {
          en: "E-Tray inbox simulation",
          "fr-CA": "Simulation de boÃ®te E-Tray",
          "id-ID": "Simulasi E-Tray",
          ar: "Ù…Ø­Ø§ÙƒØ§Ø© Ø§Ù„ØµÙ†Ø¯ÙˆÙ‚ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ E-Tray",
        },
      },
      {
        label: {
          en: "Real-time metrics into PARCO's HR portal",
          "fr-CA": "MÃ©triques en temps rÃ©el vers le portail RH de PARCO",
          "id-ID": "Metrik real-time ke Portal SDM PARCO",
          ar: "Ù…Ù‚Ø§ÙŠÙŠØ³ ÙÙˆØ±ÙŠØ© Ø¥Ù„Ù‰ Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø¨Ø´Ø±ÙŠØ© Ù„Ø¯Ù‰ PARCO",
        },
      },
    ],
    metrics: [
      { value: NA, label: L.candidatesAssessed },
      {
        value: { en: "50%", "fr-CA": "50 %", "id-ID": "50%", ar: "50%" },
        label: {
          en: "Faster shortlisting turnaround",
          "fr-CA": "PrÃ©sÃ©lection plus rapide",
          "id-ID": "Proses seleksi lebih cepat",
          ar: "ØªØ³Ø±ÙŠØ¹ ÙØ±Ø² ÙˆØªØµÙÙŠØ© Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ†",
        },
      },
      {
        value: { en: "3", "fr-CA": "3", "id-ID": "3", ar: "3" },
        label: {
          en: "Assessment modules (Cognitive, SJT, E-Tray)",
          "fr-CA": "Modules d'Ã©valuation (Cognitif, SJT, E-Tray)",
          "id-ID": "Modul asesmen (Kognitif, SJT, E-Tray)",
          ar: "ÙˆØ­Ø¯Ø§Øª ØªÙ‚ÙŠÙŠÙ… (Ù…Ø¹Ø±ÙÙŠØŒ Ù…ÙˆØ§Ù‚ÙØŒ ØµÙ†Ø¯ÙˆÙ‚ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ)",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Automated candidate ranking",
          "fr-CA": "Classement automatisÃ© des candidats",
          "id-ID": "Pemeringkatan kandidat otomatis",
          ar: "ØªØµÙ†ÙŠÙ Ø¢Ù„ÙŠ Ù„Ù„Ù…Ø±Ø´Ø­ÙŠÙ†",
        },
      },
    ],
    images: [
      heroImage(getCaseStudy("parco-internship")!),
      screenshotImage("parco-internship", 1),
      screenshotImage("parco-internship", 2),
      screenshotImage("parco-internship", 3),
      resultsImage("parco-internship"),
    ],
    layout: "product-specific",
  },

  "ubl-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Management trainee recruitment drive",
      "fr-CA": "Campagne de recrutement de stagiaires en gestion",
      "id-ID": "Kampanye rekrutmen management trainee",
      ar: "Ø­Ù…Ù„Ø© ØªÙˆØ¸ÙŠÙ Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ†",
    },
    industrySlug: "banking-finance",
    productSlug: "intos",
    challenge: {
      en: "A management trainee drive for UBL that replaced the traditional test with a scenario-driven assessment of 4,000+ applicants.",
      "fr-CA": "Une campagne de stagiaires en gestion pour UBL remplaÃ§ant le test traditionnel par une Ã©valuation fondÃ©e sur des scÃ©narios auprÃ¨s de plus de 4 000 candidats.",
      "id-ID": "Kampanye management trainee untuk UBL yang menggantikan tes tradisional dengan asesmen berbasis skenario terhadap 4.000+ pelamar.",
      ar: "Ø­Ù…Ù„Ø© Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† Ù„Ø¨Ù†Ùƒ UBL Ø§Ø³ØªØ¨Ø¯Ù„Øª Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ Ø¨ØªÙ‚ÙŠÙŠÙ… Ù‚Ø§Ø¦Ù… Ø¹Ù„Ù‰ Ø§Ù„Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ù„Ø£ÙƒØ«Ø± Ù…Ù† 4,000 Ù…ØªÙ‚Ø¯Ù….",
    },
    solution: [
      {
        label: {
          en: "Gamified MT recruitment replacing the traditional test",
          "fr-CA": "Recrutement de stagiaires en gestion ludifiÃ© remplaÃ§ant le test traditionnel",
          "id-ID": "Rekrutmen MT bergamifikasi menggantikan tes tradisional",
          ar: "ØªÙˆØ¸ÙŠÙ ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† Ø§Ø³ØªØ¨Ø¯Ù„ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ",
        },
      },
      {
        label: {
          en: "Real-life work scenarios",
          "fr-CA": "ScÃ©narios de travail rÃ©els",
          "id-ID": "Skenario kerja nyata",
          ar: "Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø¹Ù…Ù„ ÙˆØ§Ù‚Ø¹ÙŠØ©",
        },
      },
      {
        label: {
          en: "Ranked, data-rich talent pool",
          "fr-CA": "Bassin de talents classÃ© et riche en donnÃ©es",
          "id-ID": "Kumpulan talenta berperingkat kaya data",
          ar: "Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…ÙˆØ§Ù‡Ø¨ Ù…ØµÙ†ÙØ© ÙˆØºÙ†ÙŠØ© Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
        },
      },
    ],
    metrics: [
      { value: { en: "4,000+", "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" }, label: L.completedAssessments },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.timeToShortlist },
      { value: NA, label: L.costTimeSaved },
    ],
    images: [
      heroImage(getCaseStudy("ubl-recruitment")!),
      screenshotImage("ubl-recruitment", 1),
      screenshotImage("ubl-recruitment", 2),
      screenshotImage("ubl-recruitment", 3),
      resultsImage("ubl-recruitment"),
    ],
  },

  "abu-dawood-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Management trainee recruitment drive",
      "fr-CA": "Campagne de recrutement de stagiaires en gestion",
      "id-ID": "Kampanye rekrutmen management trainee",
      ar: "Ø­Ù…Ù„Ø© ØªÙˆØ¸ÙŠÙ Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ†",
    },
    industrySlug: undefined,
    productSlug: "intos",
    challenge: {
      en: "A management trainee drive for Abu Dawood that screened 2,500+ applicants through immersive real-life work scenarios.",
      "fr-CA": "Une campagne de stagiaires en gestion pour Abu Dawood ayant filtrÃ© plus de 2 500 candidats via des scÃ©narios de travail rÃ©els immersifs.",
      "id-ID": "Kampanye management trainee untuk Abu Dawood yang menyaring 2.500+ pelamar melalui skenario kerja nyata yang imersif.",
      ar: "Ø­Ù…Ù„Ø© Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† Ù„Ø£Ø¨Ùˆ Ø¯Ø§ÙˆØ¯ ÙØ±Ø²Øª Ø£ÙƒØ«Ø± Ù…Ù† 2,500 Ù…ØªÙ‚Ø¯Ù… Ø¹Ø¨Ø± Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø¹Ù…Ù„ ÙˆØ§Ù‚Ø¹ÙŠØ© ØºØ§Ù…Ø±Ø©.",
    },
    solution: [
      {
        label: {
          en: "Gamified MT recruitment replacing the traditional test",
          "fr-CA": "Recrutement de stagiaires en gestion ludifiÃ© remplaÃ§ant le test traditionnel",
          "id-ID": "Rekrutmen MT bergamifikasi menggantikan tes tradisional",
          ar: "ØªÙˆØ¸ÙŠÙ ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠÙŠÙ† Ø§Ø³ØªØ¨Ø¯Ù„ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ",
        },
      },
      {
        label: {
          en: "Immersive real-life work scenarios",
          "fr-CA": "ScÃ©narios de travail rÃ©els immersifs",
          "id-ID": "Skenario kerja nyata imersif",
          ar: "Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø¹Ù…Ù„ ÙˆØ§Ù‚Ø¹ÙŠØ© ØºØ§Ù…Ø±Ø©",
        },
      },
      {
        label: {
          en: "Ranked candidate pool for final selection",
          "fr-CA": "Bassin de candidats classÃ© pour la sÃ©lection finale",
          "id-ID": "Kumpulan kandidat berperingkat untuk seleksi akhir",
          ar: "Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ø±Ø´Ø­ÙŠÙ† Ù…ØµÙ†ÙØ© Ù„Ù„Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ",
        },
      },
    ],
    metrics: [
      { value: { en: "2,500+", "fr-CA": "2 500+", "id-ID": "2.500+", ar: "+2,500" }, label: L.completedAssessments },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.timeToShortlist },
      { value: NA, label: L.costTimeSaved },
    ],
    images: [
      heroImage(getCaseStudy("abu-dawood-recruitment")!),
      screenshotImage("abu-dawood-recruitment", 1),
      screenshotImage("abu-dawood-recruitment", 2),
      screenshotImage("abu-dawood-recruitment", 3),
      resultsImage("abu-dawood-recruitment"),
    ],
  },

  "parco-recruitment": {
    type: "recruitment",
    region: PAKISTAN,
    scale: {
      en: "Annual graduate recruitment drive",
      "fr-CA": "Campagne annuelle de recrutement des diplÃ´mÃ©s",
      "id-ID": "Kampanye rekrutmen lulusan tahunan",
      ar: "Ø­Ù…Ù„Ø© Ø³Ù†ÙˆÙŠØ© Ù„ØªÙˆØ¸ÙŠÙ Ø§Ù„Ø®Ø±ÙŠØ¬ÙŠÙ†",
    },
    industrySlug: "energy-utilities",
    productSlug: "intos",
    challenge: {
      en: "Parco-Gunvor's annual graduate intake needed a consistent, comparable, data-rich screening process year after year.",
      "fr-CA": "Le recrutement annuel de diplÃ´mÃ©s de Parco-Gunvor avait besoin d'un processus de sÃ©lection cohÃ©rent, comparable et riche en donnÃ©es, annÃ©e aprÃ¨s annÃ©e.",
      "id-ID": "Penerimaan lulusan tahunan Parco-Gunvor membutuhkan proses penyaringan yang konsisten, sebanding, dan kaya data dari tahun ke tahun.",
      ar: "Ø§Ø­ØªØ§Ø¬ Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ Ø§Ù„Ø®Ø±ÙŠØ¬ÙŠÙ† Ø§Ù„Ø³Ù†ÙˆÙŠ Ù„Ø¯Ù‰ Parco-Gunvor Ø¥Ù„Ù‰ Ø¹Ù…Ù„ÙŠØ© ÙØ±Ø² Ù…ØªØ³Ù‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù…Ù‚Ø§Ø±Ù†Ø© ÙˆØºÙ†ÙŠØ© Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø¹Ø§Ù…Ø§Ù‹ Ø¨Ø¹Ø¯ Ø¹Ø§Ù….",
    },
    solution: [
      {
        label: {
          en: "Annual gamified graduate recruitment assessment",
          "fr-CA": "Ã‰valuation annuelle ludifiÃ©e de recrutement des diplÃ´mÃ©s",
          "id-ID": "Asesmen rekrutmen lulusan bergamifikasi tahunan",
          ar: "ØªÙ‚ÙŠÙŠÙ… Ø³Ù†ÙˆÙŠ ØªÙØ§Ø¹Ù„ÙŠ Ù„ØªÙˆØ¸ÙŠÙ Ø§Ù„Ø®Ø±ÙŠØ¬ÙŠÙ†",
        },
      },
      {
        label: {
          en: "Work scenarios, aptitude items & situational-judgement",
          "fr-CA": "ScÃ©narios de travail, items d'aptitude et jugement situationnel",
          "id-ID": "Skenario kerja, item aptitude & penilaian situasional",
          ar: "Ø³ÙŠÙ†Ø§Ø±ÙŠÙˆÙ‡Ø§Øª Ø¹Ù…Ù„ ÙˆØ¨Ù†ÙˆØ¯ Ù‚Ø¯Ø±Ø§Øª ÙˆØªÙ‚ÙŠÙŠÙ… Ø­ÙƒÙ… Ø§Ù„Ù…ÙˆØ§Ù‚Ù",
        },
      },
      {
        label: {
          en: "3,000 completions per year, three years running",
          "fr-CA": "3 000 complÃ©tions par an, trois annÃ©es de suite",
          "id-ID": "3.000 penyelesaian per tahun, tiga tahun berturut-turut",
          ar: "3,000 Ø¥ÙƒÙ…Ø§Ù„ Ø³Ù†ÙˆÙŠ Ù„Ø«Ù„Ø§Ø« Ø³Ù†ÙˆØ§Øª Ù…ØªØªØ§Ù„ÙŠØ©",
        },
      },
    ],
    metrics: [
      {
        value: { en: "3,000", "fr-CA": "3 000", "id-ID": "3.000", ar: "3,000" },
        label: {
          en: "Completions per year",
          "fr-CA": "ComplÃ©tions par an",
          "id-ID": "Penyelesaian per tahun",
          ar: "Ø¥ÙƒÙ…Ø§Ù„ Ø³Ù†ÙˆÙŠ",
        },
      },
      {
        value: { en: "3", "fr-CA": "3", "id-ID": "3", ar: "3" },
        label: {
          en: "Consecutive years (2024â€“2026)",
          "fr-CA": "Trois annÃ©es consÃ©cutives (2024-2026)",
          "id-ID": "Berturut-turut (2024â€“2026)",
          ar: "Ø«Ù„Ø§Ø« Ø³Ù†ÙˆØ§Øª Ù…ØªØªØ§Ù„ÙŠØ© (2024â€“2026)",
        },
      },
      { value: NA, label: L.completionRate },
      { value: NA, label: L.timeToShortlist },
    ],
    images: [
      heroImage(getCaseStudy("parco-recruitment")!),
      screenshotImage("parco-recruitment", 1),
      screenshotImage("parco-recruitment", 2),
      screenshotImage("parco-recruitment", 3),
      resultsImage("parco-recruitment"),
    ],
    video: {
      src: "",
      title: {
        en: "Parco-Gunvor: three years of gamified graduate recruitment",
        "fr-CA": "Parco-Gunvor : trois ans de recrutement ludifiÃ© des diplÃ´mÃ©s",
        "id-ID": "Parco-Gunvor: tiga tahun rekrutmen lulusan bergamifikasi",
        ar: "Parco-Gunvor: Ø«Ù„Ø§Ø« Ø³Ù†ÙˆØ§Øª Ù…Ù† Ø§Ù„ØªÙˆØ¸ÙŠÙ Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠ Ù„Ù„Ø®Ø±ÙŠØ¬ÙŠÙ†",
      },
    },
  },

  "descon-360": {
    type: "feedback",
    region: PAKISTAN,
    scale: {
      en: "360Â° feedback cycle",
      "fr-CA": "Cycle de rÃ©troaction 360Â°",
      "id-ID": "Siklus umpan balik 360Â°",
      ar: "Ø¯ÙˆØ±Ø© ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø©",
    },
    industrySlug: undefined,
    productSlug: "intos",
    challenge: {
      en: "Descon needed a 360Â° feedback platform to support leadership development and performance evaluation across 300 employees.",
      "fr-CA": "Descon avait besoin d'une plateforme de rÃ©troaction 360Â° pour soutenir le dÃ©veloppement du leadership et l'Ã©valuation de la performance auprÃ¨s de 300 employÃ©s.",
      "id-ID": "Descon membutuhkan platform umpan balik 360Â° untuk mendukung pengembangan kepemimpinan dan evaluasi kinerja di 300 karyawan.",
      ar: "Ø§Ø­ØªØ§Ø¬Øª Descon Ø¥Ù„Ù‰ Ù…Ù†ØµØ© ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ù„Ø¯Ø¹Ù… ØªØ·ÙˆÙŠØ± Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© ÙˆØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø¹Ø¨Ø± 300 Ù…ÙˆØ¸Ù.",
    },
    solution: [
      {
        label: {
          en: "360Â° feedback platform for leadership development",
          "fr-CA": "Plateforme de rÃ©troaction 360Â° pour le dÃ©veloppement du leadership",
          "id-ID": "Platform umpan balik 360Â° untuk pengembangan kepemimpinan",
          ar: "Ù…Ù†ØµØ© ØªÙ‚ÙŠÙŠÙ… 360 Ø¯Ø±Ø¬Ø© Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©",
        },
      },
      {
        label: {
          en: "Guided rater experience & automated reports",
          "fr-CA": "ExpÃ©rience d'Ã©valuation guidÃ©e et rapports automatisÃ©s",
          "id-ID": "Pengalaman penilai terpandu & laporan otomatis",
          ar: "ØªØ¬Ø±Ø¨Ø© Ù…Ù‚ÙŠÙ‘Ù… Ù…ÙˆØ¬Ù‡Ø© ÙˆØªÙ‚Ø§Ø±ÙŠØ± Ø¢Ù„ÙŠØ©",
        },
      },
    ],
    metrics: [
      { value: { en: "300", "fr-CA": "300", "id-ID": "300", ar: "300" }, label: L.employeesAssessed },
      { value: NA, label: L.reportTurnaround },
      { value: NA, label: L.raterParticipation },
    ],
    images: [
      heroImage(getCaseStudy("descon-360")!),
      screenshotImage("descon-360", 1),
      screenshotImage("descon-360", 2),
      resultsImage("descon-360"),
    ],
  },
};

export function getCaseStudyMeta(slug: string): CaseStudyMeta | undefined {
  return caseStudiesMeta[slug];
}

/** Returns the case study merged with its structured metadata. */
export function getEnrichedCaseStudy(slug: string): EnrichedCaseStudy | undefined {
  const study = getCaseStudy(slug);
  const meta = caseStudiesMeta[slug];
  if (!study || !meta) return undefined;
  return { ...study, ...meta };
}
