import type { Locale } from "@/i18n/routing";

/**
 * Phase 4 — Thought Leadership Engine.
 *
 * The insights hub ships as typed, localized content (mirroring the DatoCMS
 * swap path in CONTENT.md). Unlike `Localized<T>` (which requires every
 * locale inline), `InsightLocalized` lets any missing locale fall back to
 * `en` — English is the source of truth, so only ar / fr-CA / id-ID are
 * written out in full.
 */

export type InsightLocalized = Partial<Record<Locale, string>>;

/** Resolves a localized insight string, falling back to English. */
export function insightText(locale: Locale, value: InsightLocalized): string {
  return value[locale] ?? value.en ?? "";
}

export type InsightType =
  | "report"
  | "whitepaper"
  | "playbook"
  | "article"
  | "webinar";

export interface InsightSection {
  heading: InsightLocalized;
  paragraphs: InsightLocalized[];
  /** Optional data table — clean rows are easy for AI systems to cite. */
  table?: InsightTable;
}

export interface InsightTable {
  caption: InsightLocalized;
  headers: InsightLocalized[];
  rows: InsightLocalized[][];
}

export interface Insight {
  slug: string;
  type: InsightType;
  /** ISO date (yyyy-mm-dd), formatted per locale at render time. */
  date: string;
  readTimeMin: number;
  title: InsightLocalized;
  excerpt: InsightLocalized;
  /** Public teaser highlights — the full body of gated posts stays behind the gate. */
  highlights?: InsightLocalized[];
  sections: InsightSection[];
  gated?: boolean;
  /** Cited sources & data — surfaced as a footnote so AI systems see evidence. */
  sources?: InsightLocalized[];
  /** CTA override (e.g. webinar → book a live demo). */
  cta?: { label: InsightLocalized; href: string };
}

export const insightPosts: Insight[] = [
  /* ============ Flagship gated report ============ */
  {
    slug: "state-of-gamified-assessment-2026",
    type: "report",
    date: "2026-07-15",
    readTimeMin: 12,
    title: {
      en: "The State of Gamified Assessment: South Asia & MENA",
      "fr-CA":
        "L'état de l'évaluation ludifiée : Asie du Sud et Moyen-Orient",
      "id-ID":
        "Kondisi Asesmen Gamifikasi: Asia Selatan & Timur Tengah",
      ar: "حالة التقييم التفاعلي: جنوب آسيا والشرق الأوسط",
    },
    excerpt: {
      en: "Engagement, completion and validity data from 300,000+ assessed professionals across five markets — and what it means for hiring and L&D leaders in the region.",
      "fr-CA":
        "Données d'engagement, de complétion et de validité issues de plus de 300 000 professionnels évalués dans cinq marchés — et ce que cela signifie pour les responsables du recrutement et de la formation.",
      "id-ID":
        "Data keterlibatan, penyelesaian, dan validitas dari 300.000+ profesional yang dinilai di lima pasar — dan artinya bagi pemimpin rekrutmen dan L&D di kawasan ini.",
      ar: "بيانات التفاعل والإكمال والصدق من أكثر من 300,000 متخصص تم تقييمهم عبر خمسة أسواق — وماذا تعني لقادة التوظيف والتطوير في المنطقة.",
    },
    highlights: [
      {
        en: "90%+ completion on gamified assessments vs. 60–70% for traditional online tests",
        "fr-CA":
          "Taux de complétion supérieur à 90 % pour les évaluations ludifiées, contre 60 à 70 % pour les tests en ligne traditionnels",
        "id-ID":
          "Tingkat penyelesaian 90%+ pada asesmen gamifikasi vs. 60–70% untuk tes daring tradisional",
        ar: "نسبة إكمال تتجاوز 90% في التقييمات التفاعلية مقابل 60–70% في الاختبارات الإلكترونية التقليدية",
      },
      {
        en: "Cross-national validity evidence for game-based cognitive assessment",
        "fr-CA":
          "Preuves de validité transnationale pour l'évaluation cognitive par le jeu",
        "id-ID":
          "Bukti validitas lintas negara untuk asesmen kognitif berbasis game",
        ar: "أدلة صدق عبر الدول للتقييم المعرفي القائم على الألعاب",
      },
      {
        en: "Playbooks from 10 years of banking, telecom, energy, government and education deployments",
        "fr-CA":
          "Guides pratiques issus de 10 ans de déploiements en banque, télécoms, énergie, secteur public et éducation",
        "id-ID":
          "Playbook dari 10 tahun implementasi di perbankan, telekomunikasi, energi, pemerintahan, dan pendidikan",
        ar: "أدلة عملية من 10 سنوات من التطبيقات في البنوك والاتصالات والطاقة والحكومة والتعليم",
      },
      {
        en: "A five-step rollout plan for performance-based assessment at enterprise scale",
        "fr-CA":
          "Un plan de déploiement en cinq étapes pour l'évaluation par la performance à l'échelle de l'entreprise",
        "id-ID":
          "Rencana peluncuran lima langkah untuk asesmen berbasis kinerja di skala perusahaan",
        ar: "خطة إطلاق من خمس خطوات للتقييم القائم على الأداء على نطاق المؤسسات",
      },
    ],
    sources: [
      {
        en: "Intwish assessment platform data, 2016–2026 — 300,000+ assessments across five markets",
      },
      {
        en: "Completion and validity benchmarks from internal deployments (Bank Alfalah, PTCL, HBL, ICI Pakistan, K-Electric, Saudi Competitiveness & Business Center - SCBC)",
      },
    ],
    gated: true,
    sections: [
      {
        heading: {
          en: "Why the region is pivoting to performance-based assessment",
          "fr-CA":
            "Pourquoi la région se tourne vers l'évaluation par la performance",
          "id-ID":
            "Mengapa kawasan ini beralih ke asesmen berbasis kinerja",
          ar: "لماذا تتحول المنطقة إلى التقييم القائم على الأداء",
        },
        paragraphs: [
          {
            en: "Bottom line: gamified assessments are finishing at 90%+ completion versus 60–70% for traditional online tests, and they screen for behavior rather than credentials. That is the headline from 300,000+ assessments across five markets in ten years — and it is why the region's leading banks, telecoms and governments are shifting to performance-based assessment.",
          },
          {
            en: "South Asia and MENA are hiring at unprecedented volume — and paying the price for tests that screen for credentials rather than behavior. Banks run 25,000-candidate drives in days; telecoms onboard thousands of field staff; governments must show that selection is fair and auditable.",
            "fr-CA":
              "L'Asie du Sud et le Moyen-Orient recrutent à un volume sans précédent — et en paient le prix avec des tests qui filtrent les diplômes plutôt que les comportements. Les banques mènent des campagnes de 25 000 candidats en quelques jours; les télécoms intègrent des milliers d'employés terrain; les gouvernements doivent démontrer que leur sélection est juste et vérifiable.",
            "id-ID":
              "Asia Selatan dan Timur Tengah merekrut dalam volume yang belum pernah terjadi — dan membayar harganya dengan tes yang menyaring kredensial, bukan perilaku. Bank menjalankan rekrutmen 25.000 kandidat dalam hitungan hari; telekomunikasi menggaet ribuan staf lapangan; pemerintah harus menunjukkan bahwa seleksi bersifat adil dan dapat diaudit.",
            ar: "توظف جنوب آسيا والشرق الأوسط بأحجام غير مسبوقة — وتدفع الثمن عبر اختبارات تغربل الشهادات لا السلوك. البنوك تدير حملات تضم 25,000 مرشح في أيام؛ وشركات الاتصالات تستقطب آلاف موظفي الميدان؛ والحكومات مطالبة بإثبات أن الاختيار عادل وقابل للتدقيق.",
          },
          {
            en: "Traditional assessment can't keep up: it measures recall, not judgment; it creates anxiety, not evidence; and it scales only by adding cost. The organizations leading the region have shifted to performance-based assessment — measuring what candidates actually do under working conditions.",
            "fr-CA":
              "L'évaluation traditionnelle ne suit pas le rythme : elle mesure la mémorisation, pas le jugement; elle crée de l'anxiété, pas des preuves; et elle ne passe à l'échelle qu'en ajoutant des coûts. Les organisations en tête de la région sont passées à l'évaluation par la performance — mesurer ce que les candidats font réellement dans des conditions de travail.",
            "id-ID":
              "Asesmen tradisional tidak mampu mengimbangi: ia mengukur hafalan, bukan penilaian; menciptakan kecemasan, bukan bukti; dan berskala hanya dengan menambah biaya. Organisasi terdepan di kawasan ini telah beralih ke asesmen berbasis kinerja — mengukur apa yang benar-benar dilakukan kandidat dalam kondisi kerja.",
            ar: "لا يستطيع التقييم التقليدي مواكبة ذلك: فهو يقيس الاستظهار لا الحكم؛ ويخلق القلق لا الأدلة؛ ولا يتوسع إلا بإضافة التكاليف. المؤسسات الرائدة في المنطقة انتقلت إلى التقييم القائم على الأداء — قياس ما يفعله المرشحون فعلياً في ظروف العمل.",
          },
        ],
      },
      {
        heading: {
          en: "What 300,000+ assessments tell us",
          "fr-CA": "Ce que plus de 300 000 évaluations nous apprennent",
          "id-ID": "Apa yang 300.000+ asesmen ajarkan kepada kami",
          ar: "ماذا تخبرنا أكثر من 300,000 عملية تقييم",
        },
        paragraphs: [
          {
            en: "Across ten years and five markets, three patterns repeat. First, candidates who engage with realistic work simulations produce richer behavioral evidence than any questionnaire. Second, game-based measures of cognitive ability hold up cross-nationally — the same game, calibrated in Karachi, predicts performance in Riyadh or Jakarta.",
            "fr-CA":
              "En dix ans et sur cinq marchés, trois constantes se répètent. Premièrement, les candidats qui s'engagent dans des simulations de travail réalistes produisent des preuves comportementales plus riches que n'importe quel questionnaire. Deuxièmement, les mesures cognitives fondées sur le jeu tiennent au niveau transnational — le même jeu, calibré à Karachi, prédit la performance à Riyad ou à Jakarta.",
            "id-ID":
              "Selama sepuluh tahun dan di lima pasar, tiga pola berulang. Pertama, kandidat yang terlibat dalam simulasi kerja realistis menghasilkan bukti perilaku yang lebih kaya daripada kuesioner apa pun. Kedua, ukuran kemampuan kognitif berbasis game bertahan lintas negara — game yang sama, dikalibrasi di Karachi, memprediksi kinerja di Riyadh atau Jakarta.",
            ar: "عبر عشر سنوات وخمسة أسواق، تتكرر ثلاثة أنماط. أولاً، المرشحون الذين يتفاعلون مع محاكاة عمل واقعية يقدمون أدلة سلوكية أغنى من أي استبيان. ثانياً، المقاييس المعرفية القائمة على الألعاب تصمد عبر الدول — فاللعبة نفسها، معايرة في كراتشي، تتنبأ بالأداء في الرياض أو جاكرتا.",
          },
          {
            en: "Third, automated scoring at scale doesn't just save time; it removes the subjectivity that erodes trust in hiring. A ranked shortlist built the same way for every applicant is something recruiters can defend — and candidates can understand.",
            "fr-CA":
              "Troisièmement, la notation automatisée à grande échelle ne fait pas qu'économiser du temps; elle élimine la subjectivité qui érode la confiance dans l'embauche. Une liste classée construite de la même façon pour chaque candidat est défendable pour les recruteurs — et compréhensible pour les candidats.",
            "id-ID":
              "Ketiga, penilaian otomatis dalam skala besar tidak hanya menghemat waktu; ia menghilangkan subjektivitas yang mengikis kepercayaan dalam rekrutmen. Daftar pendek berperingkat yang dibangun dengan cara yang sama untuk setiap pelamar dapat dipertanggungjawabkan perekrut — dan dipahami kandidat.",
            ar: "ثالثاً، التصحيح الآلي على نطاق واسع لا يوفر الوقت فحسب؛ بل يزيل الذاتية التي تآكل الثقة في التوظيف. قائمة قصيرة مرتبة بُنيَت بالطريقة نفسها لكل متقدم يمكن للموظفين الدفاع عنها — وللمرشحين فهمها.",
          },
        ],
      },
      {
        heading: {
          en: "Engagement and completion: the numbers",
          "fr-CA": "Engagement et complétion : les chiffres",
          "id-ID": "Keterlibatan dan penyelesaian: angkanya",
          ar: "التفاعل والإكمال: الأرقام",
        },
        paragraphs: [
          {
            en: "Completion is the silent killer of assessment programs. In our deployments, gamified assessments consistently clear 90% completion — versus 60–70% for traditional online tests. The reason isn't novelty; it's meaning. When an assessment feels like the first day of a job rather than an exam, candidates finish it — and their performance reflects ability rather than nerves.",
            "fr-CA":
              "La complétion est le tueur silencieux des programmes d'évaluation. Dans nos déploiements, les évaluations ludifiées dépassent régulièrement 90 % de complétion — contre 60 à 70 % pour les tests en ligne traditionnels. La raison n'est pas la nouveauté; c'est le sens. Quand une évaluation ressemble au premier jour d'un emploi plutôt qu'à un examen, les candidats la terminent — et leur performance reflète leurs capacités plutôt que leur nervosité.",
            "id-ID":
              "Tingkat penyelesaian adalah pembunuh senyap program asesmen. Dalam implementasi kami, asesmen gamifikasi secara konsisten menembus 90% penyelesaian — dibandingkan 60–70% untuk tes daring tradisional. Alasannya bukan kebaruan; melainkan makna. Ketika asesmen terasa seperti hari pertama kerja, bukan ujian, kandidat menyelesaikannya — dan kinerja mereka mencerminkan kemampuan, bukan kegugupan.",
            ar: "الإكمال هو القاتل الصامت لبرامج التقييم. في تطبيقاتنا، تتجاوز التقييمات التفاعلية باستمرار 90% من الإكمال — مقابل 60–70% للاختبارات الإلكترونية التقليدية. السبب ليس الجدة؛ بل المعنى. حين يبدو التقييم كأول يوم عمل لا كامتحان، يكمل المرشحون — ويعكس أداؤهم القدرة لا التوتر.",
          },
        ],
        table: {
          caption: {
            en: "Completion rates: gamified vs. traditional online tests",
          },
          headers: [{ en: "Measure" }, { en: "Gamified assessment" }, { en: "Traditional online test" }],
          rows: [
            [{ en: "Completion rate" }, { en: "90%+" }, { en: "60–70%" }],
            [
              { en: "Candidate experience" },
              { en: "Feels like the first day of a job" },
              { en: "Exam-like and anxiety-prone" },
            ],
            [{ en: "Evidence captured" }, { en: "Behavior — what candidates do" }, { en: "Recall and self-report" }],
            [{ en: "Scales to" }, { en: "25,000+ candidates in days" }, { en: "Cost scales linearly with volume" }],
          ],
        },
      },
      {
        heading: {
          en: "Validity and fairness: answering the skeptics",
          "fr-CA": "Validité et équité : répondre aux sceptiques",
          "id-ID": "Validitas dan keadilan: menjawab para skeptis",
          ar: "الصدق والإنصاف: الرد على المشككين",
        },
        paragraphs: [
          {
            en: "The questions we hear most: 'Are you measuring ability or just playfulness?' The evidence says ability. SJTs and game-based cognitive tasks map to the same constructs as their paper counterparts, with lower susceptibility to faking and smaller cultural bias — because candidates are showing us behavior, not telling us about themselves.",
            "fr-CA":
              "La question la plus fréquente : « Mesurez-vous la capacité ou simplement le jeu ? » Les données répondent : la capacité. Les tests de jugement situationnel (SJT) et les tâches cognitives ludiques couvrent les mêmes construits que leurs équivalents papier, avec moins de tricherie possible et moins de biais culturel — parce que les candidats nous montrent leur comportement au lieu de nous parler d'eux-mêmes.",
            "id-ID":
              "Pertanyaan yang paling sering kami dengar: 'Apakah Anda mengukur kemampuan atau sekadar keceriaan?' Buktinya: kemampuan. SJT dan tugas kognitif berbasis game memetakan konstruk yang sama dengan versi kertasnya, dengan kerentanan lebih rendah terhadap kecurangan dan bias budaya yang lebih kecil — karena kandidat menunjukkan perilaku, bukan bercerita tentang diri mereka.",
            ar: "أكثر الأسئلة التي نسمعها: «هل تقيسون القدرة أم مجرد المرح؟» الأدلة تقول: القدرة. اختبارات الحكم الظرفي والمهام المعرفية القائمة على الألعاب تقيس نفس البنى التي تقيسها نظيراتها الورقية، مع قابلية أقل للتزييف وانحياز ثقافي أصغر — لأن المرشحين يظهرون لنا سلوكاً بدلاً من إخبارنا عن أنفسهم.",
          },
        ],
      },
      {
        heading: {
          en: "What to do next: a five-step rollout",
          "fr-CA": "Prochaines étapes : un déploiement en cinq étapes",
          "id-ID": "Langkah berikutnya: peluncuran lima langkah",
          ar: "ماذا تفعل بعد ذلك: خطة إطلاق من خمس خطوات",
        },
        paragraphs: [
          {
            en: "Step one: map the competencies you actually want to measure. Step two: run a pilot with a reference cohort to set norms. Step three: launch at scale with integrity monitoring. Step four: audit outcomes against on-the-job performance. Step five: publish your own benchmark — and let the data defend your decisions.",
            "fr-CA":
              "Première étape : cartographier les compétences que vous voulez réellement mesurer. Deuxième étape : mener un projet pilote avec une cohorte de référence pour établir des normes. Troisième étape : lancer à grande échelle avec surveillance de l'intégrité. Quatrième étape : auditer les résultats par rapport à la performance en poste. Cinquième étape : publier votre propre référence — et laisser les données défendre vos décisions.",
            "id-ID":
              "Langkah satu: petakan kompetensi yang benar-benar ingin Anda ukur. Langkah dua: jalankan pilot dengan kohort referensi untuk menetapkan norma. Langkah tiga: luncurkan dalam skala besar dengan pemantauan integritas. Langkah empat: audit hasil terhadap kinerja di tempat kerja. Langkah lima: terbitkan tolok ukur Anda sendiri — dan biarkan data membela keputusan Anda.",
            ar: "الخطوة الأولى: حدد الكفاءات التي تريد قياسها فعلاً. الثانية: نفّذ برنامجاً تجريبياً مع مجموعة مرجعية لوضع المعايير. الثالثة: أطلق على نطاق واسع مع مراقبة النزاهة. الرابعة: قيّم النتائج مقابل الأداء الفعلي في الوظيفة. الخامسة: انشر معيارك الخاص — ودع البيانات تدافع عن قراراتك.",
          },
        ],
      },
    ],
  },

  /* ============ Whitepapers ============ */
  {
    slug: "roi-of-gamified-recruitment",
    type: "whitepaper",
    date: "2026-06-20",
    readTimeMin: 8,
    title: {
      en: "The ROI of Gamified Recruitment: From 4,000 to 25,000 Candidates",
      "fr-CA":
        "Le ROI du recrutement ludifié : de 4 000 à 25 000 candidats",
      "id-ID":
        "ROI Rekrutmen Gamifikasi: Dari 4.000 hingga 25.000 Kandidat",
      ar: "العائد على الاستثمار في التوظيف التفاعلي: من 4,000 إلى 25,000 مرشح",
    },
    excerpt: {
      en: "A working framework for calculating what automated, gamified screening saves — in recruiter hours, assessment-centre costs and quality of hire.",
      "fr-CA":
        "Un cadre pratique pour calculer ce que le filtrage automatisé et ludifié permet d'économiser — en heures de recruteur, coûts de centre d'évaluation et qualité d'embauche.",
      "id-ID":
        "Kerangka kerja praktis untuk menghitung apa yang dihemat oleh penyaringan otomatis dan gamifikasi — dalam jam perekrut, biaya assessment centre, dan kualitas rekrutmen.",
      ar: "إطار عملي لحساب ما توفره الفرز الآلي والتفاعلي — في ساعات الموظفين وتكاليف مراكز التقييم وجودة التوظيف.",
    },
    sources: [
      {
        en: "Client deployment records: PTCL (25,000+ candidates, 2017), ICI Pakistan (4,000+ candidates, 2017), Faysal Bank (2018), HBL (2018–2019)",
      },
      {
        en: "Recruiter-hour and cost-per-hire benchmarks from Intwish engagement data, 2016–2026",
      },
    ],
    sections: [
      {
        heading: {
          en: "Where traditional screening leaks money",
          "fr-CA": "Où le filtrage traditionnel perd de l'argent",
          "id-ID": "Di mana penyaringan tradisional membocorkan uang",
          ar: "أين يهدر الفرز التقليدي المال",
        },
        paragraphs: [
          {
            en: "Every manual screen costs recruiter time; every assessment-centre day costs senior bandwidth. At 25,000 candidates, even five minutes of manual review per candidate is over 2,000 hours — roughly one full-time recruiter per drive, before a single hire is made.",
            "fr-CA":
              "Chaque filtrage manuel coûte du temps de recruteur; chaque journée de centre d'évaluation coûte du temps d'encadrement. À 25 000 candidats, même cinq minutes d'examen manuel par candidat représentent plus de 2 000 heures — environ un recruteur à temps plein par campagne, avant la moindre embauche.",
            "id-ID":
              "Setiap penyaringan manual menghabiskan waktu perekrut; setiap hari assessment centre menghabiskan kapasitas senior. Pada 25.000 kandidat, bahkan lima menit peninjauan manual per kandidat berarti lebih dari 2.000 jam — kira-kira satu perekrut penuh waktu per rekrutmen, sebelum satu pun orang dipekerjakan.",
            ar: "كل فرز يدوي يكلف وقت الموظفين؛ وكل يوم في مركز التقييم يكلف طاقة كبار الإدارة. مع 25,000 مرشح، حتى خمس دقائق من المراجعة اليدوية لكل مرشح تعني أكثر من 2,000 ساعة — أي ما يعادل موظف توظيف بدوام كامل في كل حملة، قبل توظيف أي شخص.",
          },
        ],
      },
      {
        heading: {
          en: "The math: time saved at scale",
          "fr-CA": "Le calcul : le temps économisé à grande échelle",
          "id-ID": "Matematikanya: waktu yang dihemat dalam skala besar",
          ar: "الحساب: الوقت الموفر على نطاق واسع",
        },
        paragraphs: [
          {
            en: "Automated scoring converts weeks of manual review into seconds of reading ranked shortlists. Clients report review time cut by roughly 80% while improving consistency — every candidate is scored against the same rubric, at 3 a.m. or 3 p.m., by a system that never gets tired.",
            "fr-CA":
              "La notation automatisée transforme des semaines d'examen manuel en secondes de lecture de listes classées. Les clients rapportent une réduction d'environ 80 % du temps d'examen tout en améliorant la cohérence — chaque candidat est noté selon la même grille, à 3 h ou à 15 h, par un système qui ne se fatigue jamais.",
            "id-ID":
              "Penilaian otomatis mengubah berminggu-minggu tinjauan manual menjadi hitungan detik membaca daftar pendek berperingkat. Klien melaporkan pengurangan waktu tinjauan sekitar 80% sambil meningkatkan konsistensi — setiap kandidat dinilai dengan rubrik yang sama, jam 3 pagi atau 3 sore, oleh sistem yang tidak pernah lelah.",
            ar: "يحوّل التصحيح الآلي أسابيع من المراجعة اليدوية إلى ثوانٍ من قراءة القوائم المرتبة. يبلغ العملاء عن خفض وقت المراجعة بنحو 80% مع تحسين الاتساق — كل مرشح يُصحح وفق المعيار نفسه، في الثالثة فجراً أو عصراً، بنظام لا يتعب أبداً.",
          },
        ],
        table: {
          caption: {
            en: "What a 25,000-candidate drive costs in recruiter time",
          },
          headers: [{ en: "Screen" }, { en: "Manual approach" }, { en: "Gamified & automated" }],
          rows: [
            [{ en: "Review time per candidate" }, { en: "5+ minutes" }, { en: "Seconds — ranked shortlists" }],
            [
              { en: "Total for 25,000 candidates" },
              { en: "2,000+ hours (~1 FTE)" },
              { en: "Minutes of dashboard time" },
            ],
            [{ en: "Scoring consistency" }, { en: "Human variance" }, { en: "One rubric, every candidate" }],
            [{ en: "Audit trail" }, { en: "Notes and spreadsheets" }, { en: "Every action logged & exportable" }],
          ],
        },
      },
      {
        heading: {
          en: "Building the business case",
          "fr-CA": "Construire l'argumentaire d'affaires",
          "id-ID": "Membangun business case",
          ar: "بناء مبرر العمل",
        },
        paragraphs: [
          {
            en: "Three numbers matter: hours saved, cost per hire, and quality of hire. Our ROI calculator walks you through each with your own volumes — most teams find the platform pays for itself in a single large drive.",
            "fr-CA":
              "Trois chiffres comptent : les heures économisées, le coût par embauche et la qualité d'embauche. Notre calculateur de ROI vous guide à travers chacun avec vos propres volumes — la plupart des équipes constatent que la plateforme se rentabilise en une seule grande campagne.",
            "id-ID":
              "Tiga angka yang penting: jam yang dihemat, biaya per rekrutan, dan kualitas rekrutan. Kalkulator ROI kami memandu Anda melalui masing-masing dengan volume Anda sendiri — sebagian besar tim menemukan platform ini membayar sendiri dalam satu rekrutmen besar.",
            ar: "ثلاثة أرقام مهمة: الساعات الموفرة، والتكلفة لكل توظيف، وجودة التوظيف. ترشدك حاسبة العائد على الاستثمار عبر كل منها بأرقامك الخاصة — وتجد معظم الفرق أن المنصة تدفع ثمنها في حملة كبيرة واحدة.",
          },
        ],
      },
    ],
  },
  {
    slug: "sjt-and-game-based-validity",
    type: "whitepaper",
    date: "2026-05-10",
    readTimeMin: 7,
    title: {
      en: "SJT & Game-Based Assessment: The Validity Evidence",
      "fr-CA":
        "SJT et évaluation par le jeu : les preuves de validité",
      "id-ID": "SJT & Asesmen Berbasis Game: Bukti Validitas",
      ar: "الاختبارات الظرفية والتقييم القائم على الألعاب: أدلة الصدق",
    },
    excerpt: {
      en: "Why situational judgement tests and game-based cognitive measures predict performance — and how to read the research before you buy.",
      "fr-CA":
        "Pourquoi les tests de jugement situationnel et les mesures cognitives ludiques prédisent la performance — et comment lire la recherche avant d'acheter.",
      "id-ID":
        "Mengapa tes penilaian situasional dan ukuran kognitif berbasis game memprediksi kinerja — dan cara membaca riset sebelum membeli.",
      ar: "لماذا تتنبأ اختبارات الحكم الظرفي والمقاييس المعرفية القائمة على الألعاب بالأداء — وكيف تقرأ البحث قبل الشراء.",
    },
    sources: [
      {
        en: "Published meta-analytic research on situational judgement test validity (criterion-related validity literature)",
      },
      {
        en: "Intwish cross-national validation studies of game-based cognitive assessment",
      },
    ],
    sections: [
      {
        heading: {
          en: "Why SJTs predict performance",
          "fr-CA": "Pourquoi les SJT prédisent la performance",
          "id-ID": "Mengapa SJT memprediksi kinerja",
          ar: "لماذا تتنبأ الاختبارات الظرفية بالأداء",
        },
        paragraphs: [
          {
            en: "Situational judgement tests present candidates with realistic workplace dilemmas and score the judgment behind their choices. Decades of meta-analytic evidence show SJT scores add incremental validity over cognitive ability alone — they measure the 'would do' that tests of 'can do' miss.",
            "fr-CA":
              "Les tests de jugement situationnel présentent aux candidats des dilemmes professionnels réalistes et évaluent le jugement derrière leurs choix. Des décennies de données méta-analytiques montrent que les scores SJT ajoutent une validité incrémentale par rapport à la seule capacité cognitive — ils mesurent le « ferait » que les tests de « sait faire » manquent.",
            "id-ID":
              "Tes penilaian situasional menyajikan dilema kerja realistis kepada kandidat dan menilai penilaian di balik pilihan mereka. Puluhan tahun bukti meta-analitik menunjukkan skor SJT menambah validitas inkremental di atas kemampuan kognitif saja — mereka mengukur 'yang akan dilakukan' yang luput dari tes 'yang bisa dilakukan'.",
            ar: "تعرض اختبارات الحكم الظرفي على المرشحين معضلات عمل واقعية وتقيّم الحكم الكامن خلف اختياراتهم. تُظهر عقود من الأدلة التحليلية أن درجات هذه الاختبارات تضيف صدقاً تراكمياً فوق القدرة المعرفية وحدها — فهي تقيس «ما سيفعله» الذي تفوته اختبارات «ما يستطيع فعله».",
          },
          {
            en: "In meta-analytic terms, SJT validity sits alongside structured interviews and work samples — well above personality questionnaires and résumé review. That is why high-stakes selectors pair SJTs with cognitive tests: ability predicts what a candidate can do, while judgment predicts what they will do under pressure.",
          },
        ],
      },
      {
        heading: {
          en: "Game-based cognitive assessment: the research",
          "fr-CA": "L'évaluation cognitive par le jeu : la recherche",
          "id-ID": "Asesmen kognitif berbasis game: risetnya",
          ar: "التقييم المعرفي القائم على الألعاب: البحث",
        },
        paragraphs: [
          {
            en: "Psychometric games convert established measures — working memory, processing speed, spatial reasoning — into engaging tasks. Cross-national validation of game-based assessment shows scores align with the underlying constructs while reducing test anxiety and faking, and our own research base contributes to that literature.",
            "fr-CA":
              "Les jeux psychométriques transforment des mesures établies — mémoire de travail, vitesse de traitement, raisonnement spatial — en tâches engageantes. La validation transnationale de l'évaluation par le jeu montre que les scores s'alignent sur les construits sous-jacents tout en réduisant l'anxiété de test et la tricherie; notre propre base de recherche contribue à cette littérature.",
            "id-ID":
              "Game psikometrik mengubah ukuran yang mapan — memori kerja, kecepatan pemrosesan, penalaran spasial — menjadi tugas yang menarik. Validasi lintas negara atas asesmen berbasis game menunjukkan skor selaras dengan konstruk yang mendasarinya sekaligus mengurangi kecemasan dan kecurangan tes, dan basis riset kami sendiri berkontribusi pada literatur tersebut.",
            ar: "تحوّل الألعاب النفسية المقاييس الراسخة — الذاكرة العاملة وسرعة المعالجة والاستدلال المكاني — إلى مهام جذابة. يُظهر التحقق عبر الدول للتقييم القائم على الألعاب أن الدرجات تتوافق مع البنى الأساسية مع تقليل قلق الاختبار والتزييف، ويسهم بحثنا الخاص في هذه الأدبيات.",
          },
        ],
      },
      {
        heading: {
          en: "Fairness, faking and cultural bias",
          "fr-CA": "Équité, tricherie et biais culturel",
          "id-ID": "Keadilan, kecurangan, dan bias budaya",
          ar: "الإنصاف والتزييف والانحياز الثقافي",
        },
        paragraphs: [
          {
            en: "Self-report personality items are easy to fake and carry cultural loading. Behavioral measures — what candidates actually do in a simulation — are harder to game and translate more fairly across markets. That's why enterprise clients in banks and governments insist on them for high-stakes selection.",
            "fr-CA":
              "Les items de personnalité autodéclarés sont faciles à tricher et chargés culturellement. Les mesures comportementales — ce que les candidats font réellement dans une simulation — sont plus difficiles à manipuler et se traduisent plus équitablement d'un marché à l'autre. C'est pourquoi les clients entreprises des banques et des gouvernements l'exigent pour les sélections à enjeux élevés.",
            "id-ID":
              "Item kepribadian laporan diri mudah dipalsukan dan sarat muatan budaya. Ukuran perilaku — apa yang benar-benar dilakukan kandidat dalam simulasi — lebih sulit dimanipulasi dan diterjemahkan lebih adil lintas pasar. Itulah sebabnya klien korporat di perbankan dan pemerintahan bersikeras menggunakannya untuk seleksi berisiko tinggi.",
            ar: "أسئلة الشخصية بالتقرير الذاتي سهلة التزييف وتحمل أعباء ثقافية. أما المقاييس السلوكية — ما يفعله المرشحون فعلاً في محاكاة — فتصعب خداعها وتُترجم بعدالة أكبر عبر الأسواق. لذلك يصرّ عملاء البنوك والحكومات عليها في الاختيارات عالية المخاطر.",
          },
        ],
      },
    ],
  },

  /* ============ Industry playbooks ============ */
  {
    slug: "playbook-banking",
    type: "playbook",
    date: "2026-04-15",
    readTimeMin: 5,
    title: {
      en: "The Banking Playbook: Compliance Training & MT Recruitment at Scale",
      "fr-CA":
        "Guide pratique du secteur bancaire : formation à la conformité et recrutement des stagiaires en gestion à grande échelle",
      "id-ID":
        "Playbook Perbankan: Pelatihan Kepatuhan & Rekrutmen MT dalam Skala Besar",
      ar: "دليل القطاع المصرفي: تدريب الامتثال وتوظيف المتدربين الإداريين على نطاق واسع",
    },
    excerpt: {
      en: "How banks use gamified learning to clear 7,000-employee compliance drives and run MT recruitment that assesses 4,000–25,000 candidates.",
      "fr-CA":
        "Comment les banques utilisent l'apprentissage ludifié pour réussir des campagnes de conformité de 7 000 employés et mener un recrutement de stagiaires en gestion évaluant 4 000 à 25 000 candidats.",
      "id-ID":
        "Bagaimana bank menggunakan pembelajaran gamifikasi untuk menuntaskan program kepatuhan 7.000 karyawan dan menjalankan rekrutmen MT yang menilai 4.000–25.000 kandidat.",
      ar: "كيف تستخدم البنوك التعلم التفاعلي لإنجاز حملات امتثال تضم 7,000 موظف وإدارة توظيف يقيم من 4,000 إلى 25,000 مرشح.",
    },
    sections: [
      {
        heading: {
          en: "The problem",
          "fr-CA": "Le problème",
          "id-ID": "Masalahnya",
          ar: "المشكلة",
        },
        paragraphs: [
          {
            en: "Banks face two volume challenges at once: mandatory compliance training for thousands of employees, and management trainee drives that attract tens of thousands of applicants — each requiring defensible, consistent assessment.",
            "fr-CA":
              "Les banques font face à deux défis de volume à la fois : la formation obligatoire à la conformité pour des milliers d'employés, et les campagnes de stagiaires en gestion qui attirent des dizaines de milliers de candidats — chacune exigeant une évaluation défendable et cohérente.",
            "id-ID":
              "Bank menghadapi dua tantangan volume sekaligus: pelatihan kepatuhan wajib bagi ribuan karyawan, dan rekrutmen management trainee yang menarik puluhan ribu pelamar — masing-masing membutuhkan asesmen yang dapat dipertanggungjawabkan dan konsisten.",
            ar: "تواجه البنوك تحديتين ضخمتين معاً: تدريب امتثال إلزامي لآلاف الموظفين، وحملات للمتدربين الإداريين تجتذب عشرات الآلاف من المتقدمين — وكل منهما يتطلب تقييماً قابلاً للدفاع عنه ومتسقاً.",
          },
        ],
      },
      {
        heading: {
          en: "The play",
          "fr-CA": "La démarche",
          "id-ID": "Cara bermainnya",
          ar: "المنهج",
        },
        paragraphs: [
          {
            en: "Compliance training becomes an immersive role-play — Bank Alfalah's AML/CFT drive reached 7,000+ employees through a detective storyline. MT recruitment moves to a virtual OS where candidates handle email, messenger and meetings — HBL's 3D simulation and PTCL's 25,000-candidate game show the same platform scales up.",
            "fr-CA":
              "La formation à la conformité devient un jeu de rôle immersif — la campagne LBC/FAT de Bank Alfalah a touché plus de 7 000 employés via un scénario policier. Le recrutement des stagiaires en gestion passe à un système d'exploitation virtuel où les candidats gèrent courriels, messagerie et réunions — la simulation 3D de HBL et le jeu de 25 000 candidats de PTCL montrent que la même plateforme passe à l'échelle.",
            "id-ID":
              "Pelatihan kepatuhan menjadi role-play imersif — program AML/CFT Bank Alfalah menjangkau 7.000+ karyawan melalui alur cerita detektif. Rekrutmen MT berpindah ke OS virtual tempat kandidat menangani email, messenger, dan rapat — simulasi 3D HBL dan game 25.000 kandidat PTCL menunjukkan platform yang sama dapat berskala naik.",
            ar: "يتحول تدريب الامتثال إلى تمثيل أدوار غامر — حملة مكافحة غسل الأموال لدى بنك ألفلاح وصلت إلى أكثر من 7,000 موظف عبر قصة محقق. وينتقل توظيف المتدربين الإداريين إلى نظام تشغيل افتراضي يدير فيه المرشحون البريد والمحادثات والاجتماعات — وتُظهر محاكاة HBL ثلاثية الأبعاد ولعبة PTCL التي تضم 25,000 مرشح أن المنصة نفسها تتوسع.",
          },
        ],
      },
      {
        heading: {
          en: "Measured outcomes",
          "fr-CA": "Résultats mesurés",
          "id-ID": "Hasil terukur",
          ar: "النتائج المقاسة",
        },
        paragraphs: [
          {
            en: "National-scale completion the bank can report, ranked shortlists recruiters trust, and candidate experiences that double as employer-branding — assessed, not advertised.",
            "fr-CA":
              "Une complétion à l'échelle nationale que la banque peut rapporter, des listes classées auxquelles les recruteurs font confiance, et des expériences candidats qui servent aussi de marque employeur — mesurées, pas publicitaires.",
            "id-ID":
              "Penyelesaian skala nasional yang dapat dilaporkan bank, daftar pendek berperingkat yang dipercaya perekrut, dan pengalaman kandidat yang sekaligus menjadi employer branding — dinilai, bukan diiklankan.",
            ar: "إكمال على مستوى وطني يمكن للبنك الإبلاغ عنه، وقوائم قصيرة مرتبة يثق بها الموظفون، وتجارب مرشحين تخدم كعلامة لصاحب العمل — تقييم، لا إعلان.",
          },
        ],
      },
    ],
  },
  {
    slug: "playbook-telecom",
    type: "playbook",
    date: "2026-03-20",
    readTimeMin: 5,
    title: {
      en: "The Telecom Playbook: High-Volume Drives & Field-Facing Games",
      "fr-CA":
        "Guide pratique des télécoms : campagnes à grand volume et jeux terrain",
      "id-ID":
        "Playbook Telekomunikasi: Rekrutmen Volume Tinggi & Game Lapangan",
      ar: "دليل قطاع الاتصالات: حملات ضخمة وألعاب ميدانية",
    },
    excerpt: {
      en: "Screening 25,000 candidates in days and turning training for a distributed workforce into something people actually finish.",
      "fr-CA":
        "Filtrer 25 000 candidats en quelques jours et transformer la formation d'une main-d'œuvre distribuée en une activité que l'on termine réellement.",
      "id-ID":
        "Menyaring 25.000 kandidat dalam hitungan hari dan mengubah pelatihan tenaga kerja tersebar menjadi sesuatu yang benar-benar diselesaikan orang.",
      ar: "فرز 25,000 مرشح في أيام وتحويل تدريب قوة عمل موزعة إلى شيء يكمله الناس فعلاً.",
    },
    sections: [
      {
        heading: {
          en: "The problem",
          "fr-CA": "Le problème",
          "id-ID": "Masalahnya",
          ar: "المشكلة",
        },
        paragraphs: [
          {
            en: "Telecom hiring spikes are massive and seasonal; workforces are spread across regions; and frontline staff absorb training on phones between calls.",
            "fr-CA":
              "Les pics d'embauche des télécoms sont massifs et saisonniers; les effectifs sont répartis dans toutes les régions; et le personnel de première ligne absorbe la formation sur téléphone entre deux appels.",
            "id-ID":
              "Lonjakan rekrutmen telekomunikasi sangat besar dan musiman; tenaga kerja tersebar di banyak wilayah; dan staf lini depan menyerap pelatihan di ponsel di sela-sela panggilan.",
            ar: "ارتفاعات التوظيف في الاتصالات ضخمة وموسمية؛ والقوى العاملة موزعة عبر المناطق؛ ويتلقى موظفو الخطوط الأمامية التدريب على هواتفهم بين المكالمات.",
          },
        ],
      },
      {
        heading: {
          en: "The play",
          "fr-CA": "La démarche",
          "id-ID": "Cara bermainnya",
          ar: "المنهج",
        },
        paragraphs: [
          {
            en: "PTCL's MT recruitment assessed 25,000+ candidates nationwide in days. For ongoing learning, mobile-first gamified modules with leaderboards and rewards turn product knowledge into a daily habit rather than a quarterly chore.",
            "fr-CA":
              "Le recrutement des stagiaires en gestion de PTCL a évalué plus de 25 000 candidats à l'échelle nationale en quelques jours. Pour l'apprentissage continu, des modules ludifiés pensés mobile avec classements et récompenses transforment la connaissance des produits en habitude quotidienne plutôt qu'en corvée trimestrielle.",
            "id-ID":
              "Rekrutmen MT PTCL menilai 25.000+ kandidat di seluruh negeri dalam hitungan hari. Untuk pembelajaran berkelanjutan, modul gamifikasi mobile-first dengan papan peringkat dan penghargaan mengubah pengetahuan produk menjadi kebiasaan harian, bukan tugas triwulanan.",
            ar: "قيّمت حملة توظيف المتدربين الإداريين لدى PTCL أكثر من 25,000 مرشح على مستوى البلاد في أيام. وللتعلم المستمر، تحوّل الوحدات التفاعلية المصممة للجوال مع لوحات المتصدرين والمكافآت المعرفة بالمنتجات إلى عادة يومية لا واجباً فصلياً.",
          },
        ],
      },
      {
        heading: {
          en: "Measured outcomes",
          "fr-CA": "Résultats mesurés",
          "id-ID": "Hasil terukur",
          ar: "النتائج المقاسة",
        },
        paragraphs: [
          {
            en: "Days, not months, to a ranked shortlist — and training completion rates that HR can finally report with confidence.",
            "fr-CA":
              "Des jours, pas des mois, pour obtenir une liste classée — et des taux de complétion de formation que les RH peuvent enfin rapporter en toute confiance.",
            "id-ID":
              "Berhari-hari, bukan berbulan-bulan, menuju daftar pendek berperingkat — dan tingkat penyelesaian pelatihan yang akhirnya bisa dilaporkan HR dengan percaya diri.",
            ar: "أيام لا شهور للوصول إلى قائمة قصيرة مرتبة — ومعدلات إكمال تدريب يستطيع قسم الموارد البشرية الإبلاغ عنها أخيراً بثقة.",
          },
        ],
      },
    ],
  },
  {
    slug: "playbook-energy",
    type: "playbook",
    date: "2026-02-18",
    readTimeMin: 5,
    title: {
      en: "The Energy Playbook: HiPo Identification & Safety Training",
      "fr-CA":
        "Guide pratique de l'énergie : identification des hauts potentiels et formation à la sécurité",
      "id-ID":
        "Playbook Energi: Identifikasi HiPo & Pelatihan Keselamatan",
      ar: "دليل قطاع الطاقة: تحديد المواهب الواعدة والتدريب على السلامة",
    },
    excerpt: {
      en: "Using games to find high-potential leaders and to make safety and compliance training stick across the grid.",
      "fr-CA":
        "Utiliser les jeux pour trouver les leaders à haut potentiel et faire en sorte que la formation à la sécurité et à la conformité soit durable sur tout le réseau.",
      "id-ID":
        "Menggunakan game untuk menemukan pemimpin berpotensi tinggi dan membuat pelatihan keselamatan serta kepatuhan melekat di seluruh jaringan.",
      ar: "استخدام الألعاب للعثور على قادة واعدين وجعل تدريب السلامة والامتثال راسخاً عبر الشبكة.",
    },
    sections: [
      {
        heading: {
          en: "The problem",
          "fr-CA": "Le problème",
          "id-ID": "Masalahnya",
          ar: "المشكلة",
        },
        paragraphs: [
          {
            en: "Energy companies must identify future leaders across engineering and field staff, and keep safety behaviors alive in a workforce that rarely sits at a desk.",
            "fr-CA":
              "Les entreprises du secteur de l'énergie doivent identifier leurs futurs leaders parmi l'ingénierie et le personnel terrain, et maintenir des comportements sécuritaires dans une main-d'œuvre qui s'assoit rarement à un bureau.",
            "id-ID":
              "Perusahaan energi harus mengidentifikasi pemimpin masa depan di kalangan staf teknik dan lapangan, serta menjaga perilaku keselamatan tetap hidup di tenaga kerja yang jarang duduk di meja kerja.",
            ar: "على شركات الطاقة تحديد قادتها المستقبليين بين المهندسين والموظفين الميدانيين، والحفاظ على سلوكيات السلامة حية في قوة عمل نادراً ما تجلس خلف مكتب.",
          },
        ],
      },
      {
        heading: {
          en: "The play",
          "fr-CA": "La démarche",
          "id-ID": "Cara bermainnya",
          ar: "المنهج",
        },
        paragraphs: [
          {
            en: "K-Electric used gamified assessment to identify high-potential talent — measuring cognitive skill and personality traits in play. Safety and compliance training is delivered as scenario-based games that rehearse the right response before the field demands it.",
            "fr-CA":
              "K-Electric a utilisé l'évaluation ludifiée pour identifier les talents à haut potentiel — mesurant les compétences cognitives et les traits de personnalité par le jeu. La formation à la sécurité et à la conformité est offerte sous forme de jeux basés sur des scénarios qui répètent la bonne réponse avant que le terrain ne l'exige.",
            "id-ID":
              "K-Electric menggunakan asesmen gamifikasi untuk mengidentifikasi talenta berpotensi tinggi — mengukur keterampilan kognitif dan sifat kepribadian melalui permainan. Pelatihan keselamatan dan kepatuhan disampaikan sebagai game berbasis skenario yang melatih respons yang tepat sebelum lapangan menuntutnya.",
            ar: "استخدمت K-Electric التقييم التفاعلي لتحديد المواهب الواعدة — قياس المهارات المعرفية والسمات الشخصية عبر اللعب. ويُقدم التدريب على السلامة والامتثال كألعاب قائمة على السيناريوهات تدرّب الاستجابة الصحيحة قبل أن يطلبها الميدان.",
          },
        ],
      },
      {
        heading: {
          en: "Measured outcomes",
          "fr-CA": "Résultats mesurés",
          "id-ID": "Hasil terukur",
          ar: "النتائج المقاسة",
        },
        paragraphs: [
          {
            en: "A data-backed HiPo pipeline and a safety culture measured in behavior, not attendance.",
            "fr-CA":
              "Un vivier de hauts potentiels fondé sur les données et une culture de sécurité mesurée par les comportements, pas par la présence.",
            "id-ID":
              "Pipelines HiPo berbasis data dan budaya keselamatan yang diukur dari perilaku, bukan kehadiran.",
            ar: "خط أنابيب للمواهب الواعدة مدعوم بالبيانات وثقافة سلامة تُقاس بالسلوك لا بالحضور.",
          },
        ],
      },
    ],
  },
  {
    slug: "playbook-government",
    type: "playbook",
    date: "2026-01-22",
    readTimeMin: 5,
    title: {
      en: "The Government Playbook: Auditable, Fair Selection",
      "fr-CA":
        "Guide pratique du secteur public : une sélection juste et vérifiable",
      "id-ID":
        "Playbook Pemerintahan: Seleksi yang Dapat Diaudit & Adil",
      ar: "دليل القطاع الحكومي: اختيار قابل للتدقيق وعادل",
    },
    excerpt: {
      en: "How public-sector bodies run large-scale selection that survives scrutiny — with integrity monitoring and defensible evidence.",
      "fr-CA":
        "Comment les organismes publics mènent une sélection à grande échelle qui résiste à l'examen — avec surveillance de l'intégrité et preuves défendables.",
      "id-ID":
        "Bagaimana lembaga publik menjalankan seleksi skala besar yang tahan terhadap pengawasan — dengan pemantauan integritas dan bukti yang dapat dipertanggungjawabkan.",
      ar: "كيف تدير الجهات العامة اختياراً واسع النطاق يصمد أمام التدقيق — مع مراقبة النزاهة وأدلة قابلة للدفاع عنها.",
    },
    sections: [
      {
        heading: {
          en: "The problem",
          "fr-CA": "Le problème",
          "id-ID": "Masalahnya",
          ar: "المشكلة",
        },
        paragraphs: [
          {
            en: "Public selection must be fair, auditable and immune to challenge — while absorbing volume that would swamp any assessment centre.",
            "fr-CA":
              "La sélection publique doit être juste, vérifiable et à l'abri des contestations — tout en absorbant un volume qui submergerait n'importe quel centre d'évaluation.",
            "id-ID":
              "Seleksi publik harus adil, dapat diaudit, dan kebal terhadap gugatan — sambil menyerap volume yang akan membanjiri assessment centre mana pun.",
            ar: "يجب أن يكون الاختيار العام عادلاً وقابلاً للتدقيق ومحصناً ضد الطعون — مع استيعاب حجم كان سيغرق أي مركز تقييم.",
          },
        ],
      },
      {
        heading: {
          en: "The play",
          "fr-CA": "La démarche",
          "id-ID": "Cara bermainnya",
          ar: "المنهج",
        },
        paragraphs: [
          {
            en: "Simulation-based assessment with automated scoring, integrity watchlists and full audit trails — the same machinery trusted by Saudi Competitiveness & Business Center (SCBC) and public-sector engagements across the region.",
            "fr-CA":
              "Une évaluation fondée sur la simulation avec notation automatisée, listes de surveillance de l'intégrité et pistes d'audit complètes — la même machinerie à laquelle font confiance le Saudi Competitiveness & Business Center (SCBC) et les engagements du secteur public dans toute la région.",
            "id-ID":
              "Asesmen berbasis simulasi dengan penilaian otomatis, daftar pantau integritas, dan jejak audit lengkap — mesin yang sama yang dipercaya Saudi Competitiveness & Business Center (SCBC) dan keterlibatan sektor publik di seluruh kawasan.",
            ar: "تقييم قائم على المحاكاة مع تصحيح آلي وقوائم مراقبة نزاهة وسجلات تدقيق كاملة — الآلية ذاتها التي يثق بها المركز السعودي للتنافسية والأعمال والجهات العامة في جميع أنحاء المنطقة.",
          },
        ],
      },
      {
        heading: {
          en: "Measured outcomes",
          "fr-CA": "Résultats mesurés",
          "id-ID": "Hasil terukur",
          ar: "النتائج المقاسة",
        },
        paragraphs: [
          {
            en: "Selection decisions backed by evidence trails, repeatable processes, and scores that withstand appeal.",
            "fr-CA":
              "Des décisions de sélection étayées par des traces de preuves, des processus reproductibles et des scores qui résistent aux contestations.",
            "id-ID":
              "Keputusan seleksi didukung jejak bukti, proses yang dapat diulang, dan skor yang tahan terhadap banding.",
            ar: "قرارات اختيار مدعومة بمسارات أدلة وعمليات قابلة للتكرار ودرجات تصمد أمام الطعون.",
          },
        ],
      },
    ],
  },
  {
    slug: "playbook-education",
    type: "playbook",
    date: "2025-12-12",
    readTimeMin: 5,
    title: {
      en: "The Education Playbook: From Entry Tests to Lifelong Learning",
      "fr-CA":
        "Guide pratique de l'éducation : des tests d'admission à l'apprentissage tout au long de la vie",
      "id-ID":
        "Playbook Pendidikan: Dari Tes Masuk hingga Pembelajaran Sepanjang Hayat",
      ar: "دليل قطاع التعليم: من اختبارات القبول إلى التعلم مدى الحياة",
    },
    excerpt: {
      en: "Reimagining admissions, professional certification and public-health training as experiences people engage with.",
      "fr-CA":
        "Repenser les admissions, la certification professionnelle et la formation en santé publique comme des expériences engageantes.",
      "id-ID":
        "Membayangkan ulang penerimaan, sertifikasi profesional, dan pelatihan kesehatan masyarakat sebagai pengalaman yang menarik.",
      ar: "إعادة تصور القبول والشهادات المهنية والتدريب في الصحة العامة كتجارب يتفاعل معها الناس.",
    },
    sections: [
      {
        heading: {
          en: "The problem",
          "fr-CA": "Le problème",
          "id-ID": "Masalahnya",
          ar: "المشكلة",
        },
        paragraphs: [
          {
            en: "Entry tests create anxiety, not insight; professional development is completed for compliance, not mastery; and public-health training has to work at national scale.",
            "fr-CA":
              "Les tests d'admission créent de l'anxiété, pas de la connaissance; le perfectionnement professionnel est complété par conformité, pas pour la maîtrise; et la formation en santé publique doit fonctionner à l'échelle nationale.",
            "id-ID":
              "Tes masuk menciptakan kecemasan, bukan wawasan; pengembangan profesional diselesaikan demi kepatuhan, bukan penguasaan; dan pelatihan kesehatan masyarakat harus berjalan dalam skala nasional.",
            ar: "اختبارات القبول تخلق القلق لا البصيرة؛ والتنمية المهنية تُنجز للامتثال لا للإتقان؛ وتدريب الصحة العامة يجب أن يعمل على نطاق وطني.",
          },
        ],
      },
      {
        heading: {
          en: "The play",
          "fr-CA": "La démarche",
          "id-ID": "Cara bermainnya",
          ar: "المنهج",
        },
        paragraphs: [
          {
            en: "Foundation Public School's O/A-level entry test became a game — measuring ability while reducing exam stress. Under EPI Rehnuma, vaccinator training became a gamified app with levels, stories and rewards covering vaccine management and COVID-19 SOPs.",
            "fr-CA":
              "Le test d'admission aux niveaux O/A de Foundation Public School est devenu un jeu — mesurant les capacités tout en réduisant le stress de l'examen. Dans le cadre d'EPI Rehnuma, la formation des vaccinateurs est devenue une application ludifiée avec niveaux, histoires et récompenses couvrant la gestion des vaccins et les protocoles COVID-19.",
            "id-ID":
              "Tes masuk O/A Level Foundation Public School menjadi sebuah game — mengukur kemampuan sambil mengurangi stres ujian. Di bawah EPI Rehnuma, pelatihan vaksinator menjadi aplikasi gamifikasi dengan level, cerita, dan penghargaan yang mencakup manajemen vaksin dan SOP COVID-19.",
            ar: "تحول اختبار القبول (O/A Level) في مدارس Foundation Public School إلى لعبة — تقيس القدرة مع تخفيف ضغط الامتحان. وفي مبادرة EPI Rehnuma، أصبح تدريب الملقّحين تطبيقاً تفاعلياً بمراحل وقصص ومكافآت تغطي إدارة اللقاحات وإجراءات كوفيد-19.",
          },
        ],
      },
      {
        heading: {
          en: "Measured outcomes",
          "fr-CA": "Résultats mesurés",
          "id-ID": "Hasil terukur",
          ar: "النتائج المقاسة",
        },
        paragraphs: [
          {
            en: "Engagement that protects measurement integrity, and completion rates that public-health programs can actually rely on.",
            "fr-CA":
              "Un engagement qui protège l'intégrité de la mesure, et des taux de complétion sur lesquels les programmes de santé publique peuvent réellement compter.",
            "id-ID":
              "Keterlibatan yang melindungi integritas pengukuran, dan tingkat penyelesaian yang benar-benar dapat diandalkan program kesehatan masyarakat.",
            ar: "تفاعل يحمي نزاهة القياس، ومعدلات إكمال يمكن لبرامج الصحة العامة الاعتماد عليها فعلاً.",
          },
        ],
      },
    ],
  },

  /* ============ Articles ============ */
  {
    slug: "why-gamified-assessments-win",
    type: "article",
    date: "2026-05-30",
    readTimeMin: 4,
    title: {
      en: "Why Gamified Assessments Beat Traditional Tests for Early Talent",
      "fr-CA":
        "Pourquoi les évaluations ludifiées surpassent les tests traditionnels pour les talents débutants",
      "id-ID":
        "Mengapa Asesmen Gamifikasi Mengungguli Tes Tradisional untuk Talenta Muda",
      ar: "لماذا تتفوق التقييمات التفاعلية على الاختبارات التقليدية للمواهب الناشئة",
    },
    excerpt: {
      en: "The behavioral evidence, the candidate experience, and the hidden cost of the status quo.",
      "fr-CA":
        "Les preuves comportementales, l'expérience candidat et le coût caché du statu quo.",
      "id-ID":
        "Bukti perilaku, pengalaman kandidat, dan biaya tersembunyi dari status quo.",
      ar: "الأدلة السلوكية وتجربة المرشح والتكلفة الخفية للوضع الراهن.",
    },
    sections: [
      {
        heading: {
          en: "Credentials aren't behavior",
          "fr-CA": "Les diplômes ne sont pas des comportements",
          "id-ID": "Kredensial bukanlah perilaku",
          ar: "الشهادات ليست سلوكاً",
        },
        paragraphs: [
          {
            en: "A résumé tells you what a candidate says they did; an assessment shows you what they do. For early talent — where most applicants have no work history to judge — behavioral simulation is the only reliable signal.",
            "fr-CA":
              "Un CV vous dit ce qu'un candidat prétend avoir fait; une évaluation vous montre ce qu'il fait. Pour les talents débutants — où la plupart des candidats n'ont aucun historique professionnel à juger — la simulation comportementale est le seul signal fiable.",
            "id-ID":
              "CV memberi tahu apa yang diklaim kandidat lakukan; asesmen menunjukkan apa yang mereka lakukan. Untuk talenta muda — di mana sebagian besar pelamar belum punya riwayat kerja untuk dinilai — simulasi perilaku adalah satu-satunya sinyal yang andal.",
            ar: "السيرة الذاتية تخبرك بما يقول المرشح إنه فعله؛ والتقييم يريك ما يفعله فعلاً. وبالنسبة للمواهب الناشئة — حيث لا يملك معظم المتقدمين سجل عمل يُحكم عليه — فإن المحاكاة السلوكية هي الإشارة الوحيدة الموثوقة.",
          },
        ],
      },
      {
        heading: {
          en: "The candidate experience is a brand",
          "fr-CA": "L'expérience candidat est une marque",
          "id-ID": "Pengalaman kandidat adalah merek",
          ar: "تجربة المرشح علامة تجارية",
        },
        paragraphs: [
          {
            en: "A well-designed assessment is the first 'day on the job' a candidate experiences with your company. Make it feel like work, not a test, and the strongest candidates finish it — and talk about it.",
            "fr-CA":
              "Une évaluation bien conçue est le premier « jour de travail » qu'un candidat vit avec votre entreprise. Faites-la ressembler à du travail, pas à un test, et les meilleurs candidats la termineront — et en parleront.",
            "id-ID":
              "Asesmen yang dirancang baik adalah 'hari pertama kerja' pertama yang dialami kandidat bersama perusahaan Anda. Buat terasa seperti bekerja, bukan ujian, dan kandidat terkuat akan menyelesaikannya — dan membicarakannya.",
            ar: "التقييم المصمم جيداً هو «أول يوم عمل» يعيشه المرشح مع شركتك. اجعله يبدو عملاً لا اختباراً، وسيكمله أقوى المرشحين — ويتحدثون عنه.",
          },
        ],
      },
      {
        heading: {
          en: "The hidden cost of the status quo",
          "fr-CA": "Le coût caché du statu quo",
          "id-ID": "Biaya tersembunyi dari status quo",
          ar: "التكلفة الخفية للوضع الراهن",
        },
        paragraphs: [
          {
            en: "Every drop-off, every false positive and every shortlist built on gut feel has a price. Gamified assessment converts those hidden costs into measurable, defensible decisions.",
            "fr-CA":
              "Chaque abandon, chaque faux positif et chaque liste construite à l'intuition a un coût. L'évaluation ludifiée convertit ces coûts cachés en décisions mesurables et défendables.",
            "id-ID":
              "Setiap penurunan partisipasi, setiap positif palsu, dan setiap daftar pendek yang dibangun berdasarkan intuisi ada harganya. Asesmen gamifikasi mengubah biaya tersembunyi itu menjadi keputusan yang terukur dan dapat dipertanggungjawabkan.",
            ar: "لكل تراجع، وكل نتيجة إيجابية خاطئة، وكل قائمة قصيرة مبنية على الحدس ثمن. يحوّل التقييم التفاعلي هذه التكاليف الخفية إلى قرارات قابلة للقياس والدفاع عنها.",
          },
        ],
      },
    ],
  },
  {
    slug: "async-video-interviews",
    type: "article",
    date: "2026-04-28",
    readTimeMin: 4,
    title: {
      en: "Asynchronous Video Interviews: A Better Experience, A Better Signal",
      "fr-CA":
        "Entrevues vidéo asynchrones : une meilleure expérience, un meilleur signal",
      "id-ID":
        "Wawancara Video Asinkron: Pengalaman Lebih Baik, Sinyal Lebih Baik",
      ar: "مقابلات الفيديو غير المتزامنة: تجربة أفضل وإشارة أفضل",
    },
    excerpt: {
      en: "Why recording once and scoring consistently beats calendar roulette — for candidates and for hiring teams.",
      "fr-CA":
        "Pourquoi enregistrer une fois et noter de façon cohérente bat la roulette des calendriers — pour les candidats comme pour les équipes d'embauche.",
      "id-ID":
        "Mengapa merekam sekali dan menilai secara konsisten mengalahkan rolet kalender — bagi kandidat dan tim rekrutmen.",
      ar: "لماذا يتفوق التسجيل مرة واحدة والتصحيح المتسق على روليت المواعيد — للمرشحين ولفرق التوظيف.",
    },
    sections: [
      {
        heading: {
          en: "The candidate's schedule wins",
          "fr-CA": "L'horaire du candidat gagne",
          "id-ID": "Jadwal kandidat yang menang",
          ar: "جدول المرشح يفوز",
        },
        paragraphs: [
          {
            en: "Asynchronous interviews let candidates record when they're ready — no rescheduling, no 3 a.m. nerves. The result is better evidence, not just better feelings.",
            "fr-CA":
              "Les entrevues asynchrones permettent aux candidats d'enregistrer quand ils sont prêts — pas de report, pas de trac à 3 h du matin. Le résultat est de meilleures preuves, pas seulement de meilleures impressions.",
            "id-ID":
              "Wawancara asinkron memungkinkan kandidat merekam saat mereka siap — tanpa penjadwalan ulang, tanpa gugup jam 3 pagi. Hasilnya adalah bukti yang lebih baik, bukan sekadar perasaan yang lebih baik.",
            ar: "تتيح المقابلات غير المتزامنة للمرشحين التسجيل عندما يكونون مستعدين — دون إعادة جدولة، ودون توتر في الثالثة فجراً. النتيجة أدلة أفضل، لا مشاعر أفضل فحسب.",
          },
        ],
      },
      {
        heading: {
          en: "One rubric, every candidate",
          "fr-CA": "Une grille, chaque candidat",
          "id-ID": "Satu rubrik, setiap kandidat",
          ar: "معيار واحد لكل مرشح",
        },
        paragraphs: [
          {
            en: "AI scoring against your competency rubric applies the same standard to every candidate, every time — with evidence quotes your hiring committee can actually verify.",
            "fr-CA":
              "La notation par IA selon votre grille de compétences applique la même norme à chaque candidat, à chaque fois — avec des citations de preuves que votre comité d'embauche peut réellement vérifier.",
            "id-ID":
              "Penilaian AI berdasarkan rubrik kompetensi Anda menerapkan standar yang sama kepada setiap kandidat, setiap saat — dengan kutipan bukti yang benar-benar dapat diverifikasi komite rekrutmen Anda.",
            ar: "يطبق التصحيح بالذكاء الاصطناعي وفق معايير كفاءاتك المعيار نفسه على كل مرشح، في كل مرة — مع اقتباسات أدلة يمكن للجنة التوظيف التحقق منها فعلاً.",
          },
        ],
      },
      {
        heading: {
          en: "From footage to shortlist",
          "fr-CA": "De la vidéo à la liste classée",
          "id-ID": "Dari rekaman ke daftar pendek",
          ar: "من اللقطات إلى القائمة القصيرة",
        },
        paragraphs: [
          {
            en: "Ranked shortlists with timestamps and quotes replace hours of scrubbing through footage — cutting review time and letting your team decide with data.",
            "fr-CA":
              "Des listes classées avec horodatages et citations remplacent des heures de visionnage — réduisant le temps d'examen et permettant à votre équipe de décider avec des données.",
            "id-ID":
              "Daftar pendek berperingkat dengan stempel waktu dan kutipan menggantikan berjam-jam menonton ulang rekaman — memangkas waktu tinjauan dan memungkinkan tim Anda memutuskan dengan data.",
            ar: "قوائم قصيرة مرتبة مع طوابع زمنية واقتباسات تحل محل ساعات من تمشيط اللقطات — تقلص وقت المراجعة وتتيح لفريقك اتخاذ القرار بالبيانات.",
          },
        ],
      },
    ],
  },

  /* ============ Webinar / live demo ============ */
  {
    slug: "live-intos-demo",
    type: "webinar",
    date: "2026-08-01",
    readTimeMin: 1,
    title: {
      en: "Live Demo: Watch intOS Assess a Candidate in Real Time",
      "fr-CA":
        "Démo en direct : regardez intOS évaluer un candidat en temps réel",
      "id-ID":
        "Demo Langsung: Saksikan intOS Menilai Kandidat Secara Real-Time",
      ar: "عرض مباشر: شاهد intOS يقيّم مرشحاً في الوقت الفعلي",
    },
    excerpt: {
      en: "A 30-minute guided walkthrough of the intOS virtual OS — from invite to ranked shortlist — with our product team.",
      "fr-CA":
        "Une visite guidée de 30 minutes du système d'exploitation virtuel intOS — de l'invitation à la liste classée — avec notre équipe produit.",
      "id-ID":
        "Tur berpemandu 30 menit dari OS virtual intOS — dari undangan hingga daftar pendek berperingkat — bersama tim produk kami.",
      ar: "جولة إرشادية مدتها 30 دقيقة في نظام intOS الافتراضي — من الدعوة إلى القائمة القصيرة المرتبة — مع فريق المنتجات لدينا.",
    },
    cta: {
      label: {
        en: "Book a live demo",
        "fr-CA": "Réserver une démo en direct",
        "id-ID": "Jadwalkan demo langsung",
        ar: "احجز عرضاً مباشراً",
      },
      href: "/contact?intent=intos",
    },
    sections: [
      {
        heading: {
          en: "What you'll see",
          "fr-CA": "Ce que vous verrez",
          "id-ID": "Apa yang akan Anda lihat",
          ar: "ماذا سترى",
        },
        paragraphs: [
          {
            en: "We'll run a live candidate journey: the virtual desktop, the email simulation, the team messenger, the SJT meeting — then flip to the recruiter dashboard and watch the shortlist form.",
            "fr-CA":
              "Nous déroulerons un parcours candidat en direct : le bureau virtuel, la simulation de courriels, la messagerie d'équipe, la réunion SJT — puis nous basculerons sur le tableau de bord du recruteur pour voir la liste se former.",
            "id-ID":
              "Kami akan menjalankan perjalanan kandidat secara langsung: desktop virtual, simulasi email, messenger tim, rapat SJT — lalu beralih ke dashboard perekrut dan menyaksikan daftar pendek terbentuk.",
            ar: "سنعرض رحلة مرشح حية: سطح المكتب الافتراضي، ومحاكاة البريد الإلكتروني، ومراسلة الفريق، واجتماع الحكم الظرفي — ثم ننتقل إلى لوحة تحكم الموظفين لنشاهد القائمة القصيرة تتشكل.",
          },
          {
            en: "Bring your numbers. Tell us the size of your next drive and we'll show you what a pilot would look like for your team.",
            "fr-CA":
              "Apportez vos chiffres. Dites-nous la taille de votre prochaine campagne et nous vous montrerons à quoi ressemblerait un projet pilote pour votre équipe.",
            "id-ID":
              "Bawa angka Anda. Beri tahu kami ukuran rekrutmen berikutnya dan kami akan menunjukkan seperti apa pilot untuk tim Anda.",
            ar: "أحضر أرقامك. أخبرنا بحجم حملتك القادمة وسنريك كيف سيبدو البرنامج التجريبي لفريقك.",
          },
        ],
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insightPosts.find((post) => post.slug === slug);
}
