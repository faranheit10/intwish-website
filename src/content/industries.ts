import type { Localized } from "./types";

/**
 * Industry verticals — the enterprise sectors we serve. Each entry carries
 * fully-localized copy (mirroring services.ts) plus the case studies and
 * products that prove the sector track record.
 */
export interface Industry {
  slug: string;
  /** Icon key resolved by the industry icon map in the detail page. */
  icon: string;
  name: Localized<string>;
  /** Hero headline — the promise to this vertical. */
  headline: Localized<string>;
  tagline: Localized<string>;
  /** Sector-specific pain points we solve. */
  painPoints: Localized<string[]>;
  /** Compliance / data-residency note specific to this sector's procurement. */
  compliance: Localized<string>;
  /** Case studies relevant to this sector (manual mapping, drives counts). */
  caseStudySlugs: string[];
  /** Product slugs relevant to this sector. */
  productSlugs: string[];
}

export const industries: Industry[] = [
  {
    slug: "banking-finance",
    icon: "landmark",
    name: {
      en: "Banking & Finance",
      "fr-CA": "Banque et finance",
      "id-ID": "Perbankan & Keuangan",
      ar: "الخدمات المصرفية والمالية",
    },
    headline: {
      en: "Compliance that scales, hiring that filters.",
      "fr-CA": "Une conformité qui passe à l'échelle, un recrutement qui filtre.",
      "id-ID": "Kepatuhan yang berskala, perekrutan yang menyaring.",
      ar: "امتثال يتسع النطاق، وتوظيف ينتقي.",
    },
    tagline: {
      en: "Regulatory training for tens of thousands of employees and high-volume MT hiring — delivered, tracked and reported without losing engagement.",
      "fr-CA": "Formation réglementaire pour des dizaines de milliers d'employés et recrutement à grand volume de stagiaires en gestion — livrés, suivis et rapportés sans perdre l'engagement.",
      "id-ID": "Pelatihan regulasi untuk puluhan ribu karyawan dan rekrutmen MT volume tinggi — dikirim, dilacak, dan dilaporkan tanpa kehilangan keterlibatan.",
      ar: "تدريب تنظيمي لعشرات الآلاف من الموظفين وتوظيف كثيف للمتدربين الإداريين — يُسلَّم ويُتتبع ويُبلَّغ عنه دون أن تفقد التفاعل.",
    },
    painPoints: {
      en: [
        "Compliance training at national scale — AML/CFT, branch transformation and fair-treatment drives that thousands of employees must actually complete.",
        "Management trainee recruitment volume — thousands of applicants who all deserve a consistent, defensible screening experience.",
        "Leadership identification and 360° feedback for large workforces, without drowning HR in paperwork.",
      ],
      "fr-CA": [
        "Formation à la conformité à l'échelle nationale — menu de formations en LBC/FAT, en transformation des succursales et en traitement équitable que des milliers d'employés doivent réellement compléter.",
        "Volume de recrutement de stagiaires en gestion — des milliers de candidats qui méritent tous une expérience de sélection cohérente et défendable.",
        "Identification des leaders et rétroaction 360° pour de grands effectifs, sans noyer les RH dans les formalités.",
      ],
      "id-ID": [
        "Pelatihan kepatuhan dalam skala nasional — kampanye AML/CFT, transformasi cabang, dan perlakuan wajar yang harus benar-benar diselesaikan ribuan karyawan.",
        "Volume rekrutmen management trainee — ribuan pelamar yang semuanya pantas mendapat pengalaman skrining yang konsisten dan dapat dipertanggungjawabkan.",
        "Identifikasi kepemimpinan dan umpan balik 360° untuk tenaga kerja besar, tanpa menenggelamkan HR dalam dokumen.",
      ],
      ar: [
        "تدريب الالتزام على مستوى وطني — حملات مكافحة غسل الأموال وتمويل الإرهاب والتحول الفرعي والمعاملة العادلة التي يجب على آلاف الموظفين إكمالها فعلاً.",
        "حجم توظيف المتدربين الإداريين — آلاف المتقدمين الذين يستحقون جميعاً تجربة فرز متسقة وقابلة للدفاع عنها.",
        "تحديد القيادات والتقييم 360 درجة لقوى عاملة كبيرة دون إغراق الموارد البشرية في الأعمال الورقية.",
      ],
    },
    compliance: {
      en: "Procurement-ready for regulated banks — centralized, role-based data access, retention aligned to your policy, and an ISO 27001 / SOC 2 certification roadmap. Data handling aligns with SBP expectations and regional banking regulations.",
      "fr-CA": "Prêt pour l'achat des banques réglementées — accès centralisé fondé sur les rôles, conservation alignée sur votre politique et feuille de route ISO 27001 / SOC 2. Le traitement des données s'aligne sur les attentes de la SBP et les réglementations bancaires régionales.",
      "id-ID": "Siap pembelanjaan untuk bank teregulasi — akses data terpusat berbasis peran, retensi sesuai kebijakan Anda, dan peta jalan sertifikasi ISO 27001 / SOC 2. Penanganan data selaras dengan ekspektasi SBP dan regulasi perbankan regional.",
      ar: "جاهز للمشتريات في البنوك الخاضعة للتنظيم — وصول مركزي حسب الأدوار، واستبقاء يتماشى مع سياستك، وخارطة طريق لشهادة ISO 27001 / SOC 2. يتوافق معالجة البيانات مع متطلبات مصرف SBP واللوائح المصرفية الإقليمية.",
    },
    caseStudySlugs: [
      "bank-alfalah-training",
      "hbl-3d-simulation",
      "hbl-design-thinking",
      "hbl-agile",
      "faysal-bank-recruitment",
      "ba-kelectric-360",
    ],
    productSlugs: ["intos", "intreview"],
  },
  {
    slug: "telecom",
    icon: "radio",
    name: {
      en: "Telecom",
      "fr-CA": "Télécommunications",
      "id-ID": "Telekomunikasi",
      ar: "الاتصالات",
    },
    headline: {
      en: "Hire a nation of candidates in days.",
      "fr-CA": "Embauchez une nation de candidats en quelques jours.",
      "id-ID": "Rekrut kandidat sebangsa dalam hitungan hari.",
      ar: "وظّف مرشحين على مستوى دولة في أيام.",
    },
    tagline: {
      en: "Massive seasonal cycles, contact-center training and technical roles at scale — assessed on judgment and potential, not pedigree.",
      "fr-CA": "Cycles saisonniers massifs, formation de centres d'appels et rôles techniques à grande échelle — évalués sur le jugement et le potentiel, pas sur le pedigree.",
      "id-ID": "Siklus musiman masif, pelatihan contact center, dan peran teknis dalam skala besar — dinilai pada penilaian dan potensi, bukan latar belakang.",
      ar: "دورات موسمية ضخمة وتدريب مراكز الاتصال وأدوار تقنية على نطاق واسع — يُقيَّم المرشح على الحكم والإمكانات لا على الخلفية الأكاديمية.",
    },
    painPoints: {
      en: [
        "Huge recruitment drives in short windows — telecom hiring peaks are fierce and can't wait for paper-based screening.",
        "Contact-center and technical role assessment at scale, with consistent standards across regions.",
        "A candidate experience fast enough not to lose top applicants to competitors.",
      ],
      "fr-CA": [
        "Campagnes de recrutement massives sur de courtes fenêtres — les pics d'embauche des télécoms sont intenses et ne peuvent pas attendre un filtrage papier.",
        "Évaluation des rôles de centres d'appels et techniques à grande échelle, avec des normes cohérentes entre les régions.",
        "Une expérience candidat assez rapide pour ne pas perdre les meilleurs profils au profit des concurrents.",
      ],
      "id-ID": [
        "Kampanye rekrutmen besar dalam jangka pendek — puncak rekrutmen telekomunikasi sangat ketat dan tidak bisa menunggu skrining berbasis kertas.",
        "Asesmen peran contact center dan teknis dalam skala besar, dengan standar yang konsisten antar wilayah.",
        "Pengalaman kandidat yang cukup cepat agar pelamar terbaik tidak hilang ke kompetitor.",
      ],
      ar: [
        "حملات توظيف ضخمة في نوافذ زمنية قصيرة — ذروات توظيف الاتصالات شرسة ولا يمكن أن تنتظر الفرز الورقي.",
        "تقييم أدوار مراكز الاتصال والوظائف التقنية على نطاق واسع، بمعايير متسقة بين المناطق.",
        "تجربة مرشح بالسرعة الكافية لئلا تخسر أفضل المتقدمين لصالح المنافسين.",
      ],
    },
    compliance: {
      en: "Scale without compromising integrity — automated proctoring and anomaly flags keep high-volume drives trustworthy, with role-based reporting aligned to your policies.",
      "fr-CA": "Passez à l'échelle sans compromettre l'intégrité — la surveillance automatisée et les drapeaux d'anomalie gardent les campagnes à grand volume fiables, avec des rapports fondés sur les rôles alignés sur vos politiques.",
      "id-ID": "Berskala tanpa mengorbankan integritas — proctoring otomatis dan flag anomali menjaga kampanye volume tinggi tetap terpercaya, dengan pelaporan berbasis peran yang selaras dengan kebijakan Anda.",
      ar: "توسّع الحجم دون المساس بالنزاهة — فتحافظ المراقبة الآلية وأعلام الشذوذ على موثوقية الحملات الكثيفة، مع تقارير حسب الأدوار تتماشى مع سياساتك.",
    },
    caseStudySlugs: ["ptcl-recruitment"],
    productSlugs: ["intos", "intreview"],
  },
  {
    slug: "energy-utilities",
    icon: "zap",
    name: {
      en: "Energy & Utilities",
      "fr-CA": "Énergie et services publics",
      "id-ID": "Energi & Utilitas",
      ar: "الطاقة والمرافق",
    },
    headline: {
      en: "Find and build the leaders your grid depends on.",
      "fr-CA": "Trouvez et formez les leaders dont dépend votre réseau.",
      "id-ID": "Temukan dan bangun pemimpin yang diandalkan jaringan Anda.",
      ar: "اكتشف وطوّر القادة الذين يرتكز عليهم عملك.",
    },
    tagline: {
      en: "Safety training that sticks, field-worker assessment and high-potential pipelines — for utilities whose operators and supervisors can't afford gaps.",
      "fr-CA": "Formation à la sécurité durable, évaluation des travailleurs de terrain et viviers de hauts potentiels — pour des services publics dont les opérateurs et superviseurs ne peuvent se permettre de lacunes.",
      "id-ID": "Pelatihan keselamatan yang melekat, asesmen pekerja lapangan, dan jalur potensi tinggi — untuk utilitas yang operator dan supervishornya tidak boleh punya celah.",
      ar: "تدريب سلامة راسخ، وتقييم عمال الميدان، ومسارات للمواهب الواعدة — للمرافق التي لا يمكن لمشغليها ومشرفيها تحمّل أي فجوات.",
    },
    painPoints: {
      en: [
        "Safety and driver training that must be standardized across an entire fleet and actually remembered.",
        "Field-worker and operator assessment, including high-risk, high-stakes roles.",
        "Identifying a defensible leadership pipeline — HiPo programs backed by data, not gut feel.",
      ],
      "fr-CA": [
        "Une formation à la sécurité et à la conduite normalisée sur toute une flotte et réellement mémorisée.",
        "Évaluation des travailleurs de terrain et des opérateurs, y compris les rôles à haut risque et à fort enjeu.",
        "Constituer un vivier de leadership défendable — des programmes HiPo fondés sur les données, pas sur l'intuition.",
      ],
      "id-ID": [
        "Pelatihan keselamatan dan pengemudi yang distandardisasi di seluruh armada dan benar-benar diingat.",
        "Asesmen pekerja lapangan dan operator, termasuk peran berisiko tinggi dan berdampak besar.",
        "Mengidentifikasi jalur kepemimpinan yang dapat dipertahankan — program HiPo berbasis data, bukan perasaan.",
      ],
      ar: [
        "تدريب سلامة وقيادة موحّد عبر الأسطول بأكمله ويُتذكر فعلاً.",
        "تقييم عمال الميدان والمشغلين، بما في ذلك الأدوار عالية الخطورة والكبيرة التأثير.",
        "تكوين مسار قيادي قابل للدفاع عنه — برامج مواهب واعدة مبنية على البيانات لا على الحدس.",
      ],
    },
    compliance: {
      en: "Enterprise and on-premise options for utilities with strict data rules — role-based dashboards, encrypted handling and a documented backup & recovery policy.",
      "fr-CA": "Options d'entreprise et sur site pour les services publics aux règles de données strictes — tableaux de bord fondés sur les rôles, traitement chiffré et politique documentée de sauvegarde et de récupération.",
      "id-ID": "Opsi enterprise dan on-premise untuk utilitas dengan aturan data ketat — dashboard berbasis peran, penanganan terenkripsi, dan kebijakan pencadangan & pemulihan terdokumentasi.",
      ar: "خيارات مؤسسية ومحلية للمرافق ذات القواعد الصارمة للبيانات — لوحات تحكم حسب الأدوار، ومعالجة مشفرة، وسياسة نسخ احتياطي واستعادة موثقة.",
    },
    caseStudySlugs: ["kelectric-hipo", "kelectric-360", "ba-kelectric-360", "shell-driver-training"],
    productSlugs: ["intos"],
  },
  {
    slug: "government-public-sector",
    icon: "landmark",
    name: {
      en: "Government & Public Sector",
      "fr-CA": "Secteur public et gouvernemental",
      "id-ID": "Pemerintahan & Sektor Publik",
      ar: "القطاع الحكومي والعام",
    },
    headline: {
      en: "Fair, auditable selection and training for the public good.",
      "fr-CA": "Une sélection et une formation équitables, auditées, pour le bien public.",
      "id-ID": "Seleksi dan pelatihan yang adil dan dapat diaudit demi kepentingan publik.",
      ar: "انتقاء وتدريب عادل وقابل للتدقيق من أجل الصالح العام.",
    },
    tagline: {
      en: "Service portals, citizen-servant training and large-scale selection — Arabic-first, PDPL-aligned and referenced by public-sector entities in the Middle East.",
      "fr-CA": "Portails de services, formation des agents publics et sélection à grande échelle — arabe d'abord, aligné sur la PDPL et référencé par des entités du secteur public au Moyen-Orient.",
      "id-ID": "Portal layanan, pelatihan pelayan publik, dan seleksi skala besar — mengutamakan Arab, selaras PDPL, dan dirujuk entitas sektor publik di Timur Tengah.",
      ar: "بوابات خدمات، وتدريب موظفي القطاع العام، وانتقاء على نطاق واسع — بالعربية أولاً، ومتوافق مع ضوابط حماية البيانات PDPL، ومرجع لجهات القطاع العام في الشرق الأوسط.",
    },
    painPoints: {
      en: [
        "Structured, high-volume selection that is fair, auditable and defensible under public scrutiny.",
        "Enterprise portals and evaluations that centralise service delivery, quality and mystery-shopper monitoring.",
        "Arabic-first interfaces with PDPL-aligned data handling and sovereignty-conscious hosting options.",
      ],
      "fr-CA": [
        "Une sélection structurée et volumineuse qui soit équitable, auditable et défendable face à l'examen public.",
        "Des portails et évaluations d'entreprise qui centralisent la prestation de services, la qualité et le suivi de client mystère.",
        "Des interfaces en arabe d'abord avec un traitement des données aligné sur la PDPL et des options d'hébergement soucieuses de la souveraineté.",
      ],
      "id-ID": [
        "Seleksi terstruktur volume tinggi yang adil, dapat diaudit, dan dapat dipertahankan di bawah pengawasan publik.",
        "Portal dan evaluasi enterprise yang mensentralisasi penyampaian layanan, kualitas, dan pemantauan mystery shopper.",
        "Antarmuka mengutamakan Arab dengan penanganan data selaras PDPL dan opsi hosting yang sadar kedaulatan.",
      ],
      ar: [
        "انتقاء منظم ومرتفع الحجم يكون عادلاً وقابلاً للتدقيق والدفاع عنه أمام الرقابة العامة.",
        "بوابات وتقييمات مؤسسية تتمركز حول تقديم الخدمات والجودة ومراقبة المتسوق الخفي.",
        "واجهات عربية أولاً مع معالجة بيانات متوافقة مع PDPL وخيارات استضافة تحترم السيادة.",
      ],
    },
    compliance: {
      en: "Aligned to public-sector procurement — PDPL-compliant data handling, Arabic-first RTL interfaces, a Dubai headquarters and modular hosting options tailored to government requirements and data sovereignty.",
      "fr-CA": "Aligné sur les achats du secteur public — traitement des données conforme à la PDPL, interfaces RTL en arabe d'abord, siège à Dubaï et options d'hébergement modulaires adaptées aux exigences gouvernementales et à la souveraineté des données.",
      "id-ID": "Selaras dengan pengadaan sektor publik — penanganan data patuh PDPL, antarmuka RTL mengutamakan Arab, kantor pusat Dubai, dan opsi hosting modular yang disesuaikan dengan persyaratan pemerintah dan kedaulatan data.",
      ar: "متوافق مع مشتريات القطاع العام — معالجة بيانات متوافقة مع PDPL، وواجهات عربية من اليمين إلى اليسار، ومقر رئيسي في دبي، وخيارات استضافة معيارية مصممة لاحتياجات الحكومة وسيادة البيانات.",
    },
    caseStudySlugs: ["sbc-knowledge-gate", "sbc-reaching-top", "ird-epi-rehnuma"],
    productSlugs: ["intos", "intreview"],
  },
  {
    slug: "education",
    icon: "book",
    name: {
      en: "Education",
      "fr-CA": "Éducation",
      "id-ID": "Pendidikan",
      ar: "التعليم",
    },
    headline: {
      en: "Assessment that measures ability, not anxiety.",
      "fr-CA": "Une évaluation qui mesure la capacité, pas l'anxiété.",
      "id-ID": "Asesmen yang mengukur kemampuan, bukan kecemasan.",
      ar: "تقييم يقيس الإمكانات لا القلق.",
    },
    tagline: {
      en: "Standardized entry tests and onboarding for institutions and platforms — engaging experiences that reduce pressure while preserving measurement integrity.",
      "fr-CA": "Tests d'admission normalisés et intégration pour institutions et plateformes — des expériences engageantes qui réduisent la pression tout en préservant l'intégrité de la mesure.",
      "id-ID": "Tes masuk terstandarisasi dan onboarding untuk institusi dan platform — pengalaman menarik yang mengurangi tekanan sambil menjaga integritas pengukuran.",
      ar: "اختبارات قبول موحّدة وتعريف بالمؤسسات والمنصات — تجارب جذابة تخفف الضغط مع الحفاظ على نزاهة القياس.",
    },
    painPoints: {
      en: [
        "High-pressure standardized entry tests that students dread — and that don't always reflect true ability.",
        "Onboarding at scale for gig-marketplace and e-commerce workforces.",
        "Engagement and completion in training that learners actually finish.",
      ],
      "fr-CA": [
        "Des tests d'admission normalisés à haute pression que les étudiants redoutent — et qui ne reflètent pas toujours les vraies capacités.",
        "L'intégration à grande échelle pour les effectifs de places de marché et de commerce électronique.",
        "Engagement et achèvement dans une formation que les apprenants terminent réellement.",
      ],
      "id-ID": [
        "Tes masuk terstandarisasi bertekanan tinggi yang ditakuti siswa — dan tidak selalu mencerminkan kemampuan sejati.",
        "Onboarding dalam skala besar untuk tenaga kerja marketplace gig dan e-commerce.",
        "Keterlibatan dan penyelesaian dalam pelatihan yang benar-benar dituntaskan peserta didik.",
      ],
      ar: [
        "اختبارات قبول موحّدة عالية الضغط يتجنبها الطلاب — ولا تعكس دائماً الإمكانات الحقيقية.",
        "تعريف واسع النطاق لقوى عاملة في أسواق العمل والشراء (gig) والتجارة الإلكترونية.",
        "تفاعل وإكمال في التدريب يُنهيه المتعلمون فعلاً.",
      ],
    },
    compliance: {
      en: "Built for institutions handling minors and personal data — consent-first data handling, minimal collection and audit-friendly reporting aligned to school and platform policies.",
      "fr-CA": "Conçu pour les institutions traitant des mineurs et des données personnelles — traitement des données axé sur le consentement, collecte minimale et rapports adaptés à l'audit, alignés sur les politiques des écoles et des plateformes.",
      "id-ID": "Dibangun untuk institusi yang menangani anak di bawah umur dan data pribadi — penanganan data yang mengutamakan persetujuan, pengumpulan minimal, dan pelaporan ramah-audit sesuai kebijakan sekolah dan platform.",
      ar: "مصمم للمؤسسات التي تتعامل مع القصّر والبيانات الشخصية — معالجة بيانات قائمة على الموافقة، وتجميع محدود، وتقارير صديقة للتدقيق تتماشى مع سياسات المدارس والمنصات.",
    },
    caseStudySlugs: ["fps-entry-test", "daraz-academy"],
    productSlugs: ["intos"],
  },
];

export const INDUSTRY_SLUGS = industries.map((i) => i.slug);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}