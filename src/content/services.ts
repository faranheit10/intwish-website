import type { Localized } from "./types";

export interface Service {
  slug: string;
  /** Icon key resolved by the Icon component. */
  icon: string;
  title: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  outcomes: Localized<string[]>;
  caseStudySlugs: string[];
}

export const services: Service[] = [
  {
    slug: "training-learning",
    icon: "gamepad",
    title: {
      en: "Training & Learning",
      
      "fr-CA": "Formation et apprentissage",
      "id-ID": "Pelatihan & Pembelajaran",
      ar: "التدريب والتعلّم",
    },
    tagline: {
      en: "Gamified learning that employees actually finish — and remember.",
      
      "fr-CA": "Un apprentissage ludifié que les employés terminent vraiment — et dont ils se souviennent.",
      "id-ID": "Pembelajaran gamifikasi yang benar-benar diselesaikan karyawan — dan diingat.",
      ar: "تعلّم تفاعلي يُكمله الموظفون فعلاً — ويتذكرونه.",
    },
    description: {
      en: "Turn mandatory compliance, onboarding and capability training into immersive experiences. From AML/CFT training for 7,000+ Bank Alfalah employees to 20,000-employee learning games on HBL's Oracle Taleo LMS, we design storylines, roles and rewards that make training stick — and reportable.",
      
      "fr-CA": "Transformez la formation obligatoire en conformité, l'intégration et le renforcement des compétences en expériences immersives. De la formation en LBC-FAT pour plus de 7 000 employés de la Bank Alfalah aux jeux d'apprentissage de 20 000 employés sur le LMS Oracle Taleo de HBL, nous concevons des scénarios, des rôles et des récompenses qui rendent la formation durable — et mesurable.",
      "id-ID": "Ubah pelatihan kepatuhan wajib, onboarding, dan pelatihan kapabilitas menjadi pengalaman imersif. Dari pelatihan AML/CFT untuk 7.000+ karyawan Bank Alfalah hingga game pembelajaran 20.000 karyawan di LMS Oracle Taleo milik HBL, kami merancang alur cerita, peran, dan penghargaan yang membuat pelatihan melekat — dan dapat dilaporkan.",
      ar: "حوّل التدريب الإلزامي والتدريب التعريفي وتدريب القدرات إلى تجارب غامرة. من تدريب مكافحة غسل الأموال لأكثر من 7,000 موظف في بنك ألفلاح إلى ألعاب تعلم تضم 20,000 موظف على منصة Oracle Taleo لدى HBL، نصمم قصصاً وأدواراً ومكافآت تجعل التدريب راسخاً — وقابلاً للقياس.",
    },
    outcomes: {
      en: [
        "7,000+ employees in a single training drive",
        "20,000+ learners on Oracle Taleo LMS",
        "Detective & role-play storylines",
        "Completion tracking, scoring & reporting",
      ],
      
      "fr-CA": [
        "Plus de 7 000 employés dans une seule campagne de formation",
        "Plus de 20 000 apprenants sur le LMS Oracle Taleo",
        "Scénarios d'enquête et de jeu de rôle",
        "Suivi de l'achèvement, pointage et rapports",
      ],
      "id-ID": [
        "7.000+ karyawan dalam satu kampanye pelatihan",
        "20.000+ peserta didik di LMS Oracle Taleo",
        "Alur cerita detektif & bermain peran",
        "Pelacakan penyelesaian, penilaian & pelaporan",
      ],
      ar: [
        "أكثر من 7,000 موظف في حملة تدريب واحدة",
        "أكثر من 20,000 متعلم على منصة Oracle Taleo",
        "قصص محققين ولعب أدوار",
        "تتبع الإكمال والتنقيط والتقارير",
      ],
    },
    caseStudySlugs: [
      "bank-alfalah-training",
      "hbl-design-thinking",
      "hbl-agile",
      "shell-driver-training",
      "daraz-academy",
      "ird-epi-rehnuma",
    ],
  },
  {
    slug: "recruitment-assessment",
    icon: "users",
    title: {
      en: "Recruitment & Assessment",
      
      "fr-CA": "Recrutement et évaluation",
      "id-ID": "Rekrutmen & Asesmen",
      ar: "التوظيف والتقييم",
    },
    tagline: {
      en: "High-volume gamified hiring that filters for what predicts job success.",
      
      "fr-CA": "Une embauche ludifiée à grand volume qui filtre ce qui prédit la réussite en poste.",
      "id-ID": "Perekrutan gamifikasi volume tinggi yang menyaring hal-hal yang memprediksi kesuksesan kerja.",
      ar: "توظيف تفاعلي بأحجام ضخمة ينتقي ما ينبئ بنجاح الموظف.",
    },
    description: {
      en: "Replace paper tests with assessment games that surface real competencies at scale. We've run drives of 4,000 to 25,000 candidates for ICI Pakistan, PTCL, HBL, Faysal Bank and more — with 3D simulations, cognitive games, leaderboards and data-driven candidate profiles.",
      
      "fr-CA": "Remplacez les tests papier par des jeux d'évaluation qui révèlent les vraies compétences à grande échelle. Nous avons mené des campagnes de 4 000 à 25 000 candidats pour ICI Pakistan, PTCL, HBL, Faysal Bank et bien d'autres — avec des simulations 3D, des jeux cognitifs, des classements et des profils de candidats fondés sur les données.",
      "id-ID": "Gantikan tes kertas dengan game asesmen yang mengungkap kompetensi nyata dalam skala besar. Kami telah menjalankan kampanye 4.000 hingga 25.000 kandidat untuk ICI Pakistan, PTCL, HBL, Faysal Bank, dan lainnya — dengan simulasi 3D, game kognitif, papan peringkat, dan profil kandidat berbasis data.",
      ar: "استبدل الاختبارات الورقية بألعاب تقييم تُظهر الكفاءات الحقيقية على نطاق واسع. نفذنا حملات من 4,000 إلى 25,000 مرشح لشركات مثل ICI باكستان وPTCL وHBL وبنك فيصل وغيرها — بمحاكاة ثلاثية الأبعاد وألعاب معرفية ولوحات متصدرين وملفات مرشحين مبنية على البيانات.",
    },
    outcomes: {
      en: [
        "25,000 candidates in a single drive (PTCL)",
        "4,000–25,000 candidates per client",
        "3D simulation & cognitive game environments",
        "Leaderboards, mobile-ready play & auto reports",
      ],
      
      "fr-CA": [
        "25 000 candidats dans une seule campagne (PTCL)",
        "De 4 000 à 25 000 candidats par client",
        "Environnements de simulation 3D et de jeux cognitifs",
        "Classements, jeu adapté au mobile et rapports automatisés",
      ],
      "id-ID": [
        "25.000 kandidat dalam satu kampanye (PTCL)",
        "4.000–25.000 kandidat per klien",
        "Lingkungan simulasi 3D & game kognitif",
        "Papan peringkat, permainan siap-mobile & laporan otomatis",
      ],
      ar: [
        "25,000 مرشح في حملة واحدة (PTCL)",
        "من 4,000 إلى 25,000 مرشح لكل عميل",
        "بيئات محاكاة ثلاثية الأبعاد وألعاب معرفية",
        "لوحات متصدرين ولعب متوافق مع الجوال وتقارير آلية",
      ],
    },
    caseStudySlugs: [
      "ptcl-recruitment",
      "ici-recruitment",
      "hbl-3d-simulation",
      "faysal-bank-recruitment",
      "fps-entry-test",
    ],
  },
  {
    slug: "employee-engagement",
    icon: "star",
    title: {
      en: "Employee Engagement",
      
      "fr-CA": "Engagement des employés",
      "id-ID": "Keterlibatan Karyawan",
      ar: "تفاعل الموظفين",
    },
    tagline: {
      en: "Games that identify high-potential talent and build culture.",
      
      "fr-CA": "Des jeux qui cernent les talents à haut potentiel et bâtissent la culture.",
      "id-ID": "Game yang mengidentifikasi talenta berpotensi tinggi dan membangun budaya.",
      ar: "ألعاب تحدد المواهب الواعدة وتبني الثقافة المؤسسية.",
    },
    description: {
      en: "Identify high-potential employees, map personality traits and align culture through engagement games. Our gamified HiPo assessment for K-Electric highlighted the exact skills and traits leadership was looking for — a repeatable, data-driven talent signal.",
      
      "fr-CA": "Identifiez les employés à haut potentiel, cartographiez les traits de personnalité et alignez la culture grâce à des jeux d'engagement. Notre évaluation HiPo ludifiée pour K-Electric a mis en lumière les compétences et les traits exacts que recherchait la direction — un signal de talent reproductible et fondé sur les données.",
      "id-ID": "Identifikasi karyawan berpotensi tinggi, petakan sifat kepribadian, dan selaraskan budaya melalui game keterlibatan. Asesmen HiPo gamifikasi kami untuk K-Electric menyoroti keterampilan dan sifat persis yang dicari kepemimpinan — sinyal talenta yang dapat diulang dan berbasis data.",
      ar: "حدد الموظفين ذوي الإمكانات العالية وارسم سمات الشخصية ووازن بين الثقافات عبر ألعاب تفاعلية. أبرز تقييمنا التفاعلي للمواهب الواعدة لدى K-Electric المهارات والسمات التي تبحث عنها القيادة تماماً — إشارة مواهب قابلة للتكرار ومبنية على البيانات.",
    },
    outcomes: {
      en: [
        "High-potential (HiPo) identification",
        "Cognitive & personality trait mapping",
        "Leadership readiness insight",
        "Culture & values alignment activities",
      ],
      
      "fr-CA": [
        "Identification des hauts potentiels (HiPo)",
        "Cartographie des traits cognitifs et de personnalité",
        "Aperçu de l'état de préparation au leadership",
        "Activités d'alignement de la culture et des valeurs",
      ],
      "id-ID": [
        "Identifikasi potensi tinggi (HiPo)",
        "Pemetaan sifat kognitif & kepribadian",
        "Wawasan kesiapan kepemimpinan",
        "Aktivitas penyelarasan budaya & nilai",
      ],
      ar: [
        "تحديد المواهب الواعدة (HiPo)",
        "رسم السمات المعرفية والشخصية",
        "رؤية جاهزية القيادة",
        "أنشطة مواءمة الثقافة والقيم",
      ],
    },
    caseStudySlugs: ["kelectric-hipo"],
  },
  {
    slug: "enterprise-portals",
    icon: "network",
    title: {
      en: "Enterprise Portals & Automation",
      
      "fr-CA": "Portails d'entreprise et automatisation",
      "id-ID": "Portal Perusahaan & Otomatisasi",
      ar: "البوابات المؤسسية والأتمتة",
    },
    tagline: {
      en: "Modular platforms that centralize services, training and quality.",
      
      "fr-CA": "Des plateformes modulaires qui centralisent services, formation et qualité.",
      "id-ID": "Platform modular yang mensentralisasi layanan, pelatihan, dan kualitas.",
      ar: "منصات معيارية تتمركز حول الخدمات والتدريب والجودة.",
    },
    description: {
      en: "Enterprise-grade portals with custom dashboards, role-based access, knowledge bases, mystery-shopper evaluations and training modules. The Knowledge Gate Portal for the Saudi Business Center serves ministries and public-service entities across the Kingdom.",
      
      "fr-CA": "Des portails de calibre entreprise avec tableaux de bord personnalisés, accès fondé sur les rôles, bases de connaissances, évaluations de client mystère et modules de formation. Le portail Knowledge Gate du Saudi Business Center dessert des ministères et des entités de service public dans tout le Royaume.",
      "id-ID": "Portal kelas enterprise dengan dashboard khusus, akses berbasis peran, basis pengetahuan, evaluasi mystery shopper, dan modul pelatihan. Portal Knowledge Gate untuk Saudi Business Center melayani kementerian dan entitas layanan publik di seluruh Kerajaan.",
      ar: "بوابات مؤسسية بمعايير عالية مع لوحات تحكم مخصصة، ووصول حسب الأدوار، وقواعد معرفة، وتقييمات المتسوق الخفي، ووحدات تدريب. تخدم بوابة Knowledge Gate لمركز الأعمال السعودي الوزارات والجهات الحكومية في جميع أنحاء المملكة.",
    },
    outcomes: {
      en: [
        "Government service & knowledge portals",
        "Mystery-shopper evaluations with auto-scoring",
        "Role-based dashboards & access control",
        "Secure cloud or on-premise hosting",
      ],
      
      "fr-CA": [
        "Portails de services et de connaissances gouvernementaux",
        "Évaluations de client mystère avec correction automatique",
        "Tableaux de bord et contrôle d'accès fondés sur les rôles",
        "Hébergement cloud sécurisé ou sur site",
      ],
      "id-ID": [
        "Portal layanan & pengetahuan pemerintah",
        "Evaluasi mystery shopper dengan penilaian otomatis",
        "Dashboard & kontrol akses berbasis peran",
        "Hosting cloud aman atau on-premise",
      ],
      ar: [
        "بوابات الخدمات الحكومية والمعرفة",
        "تقييمات المتسوق الخفي مع تصحيح تلقائي",
        "لوحات تحكم حسب الأدوار والتحكم بالوصول",
        "استضافة آمنة سحابية أو محلية",
      ],
    },
    caseStudySlugs: ["sbc-knowledge-gate"],
  },
  {
    slug: "feedback-360",
    icon: "chart",
    title: {
      en: "360° Feedback Systems",
      
      "fr-CA": "Systèmes de rétroaction 360°",
      "id-ID": "Sistem Umpan Balik 360°",
      ar: "أنظمة التقييم 360 درجة",
    },
    tagline: {
      en: "Anonymous multi-rater feedback with automated 20-page reports.",
      
      "fr-CA": "Une rétroaction anonyme multi-évaluateurs avec des rapports automatisés de 20 pages.",
      "id-ID": "Umpan balik multi-penilai anonim dengan laporan otomatis 20 halaman.",
      ar: "تغذية راجعة مجهولة من عدة جهات مع تقارير آلية من 20 صفحة.",
    },
    description: {
      en: "User-friendly 360° feedback applications used by Bank Alfalah, K-Electric and Descon. Anonymous multi-rater input, progress-saving, role-based access — and fully automated personalized analytics reports up to 20 pages per employee.",
      
      "fr-CA": "Des applications de rétroaction 360° conviviales utilisées par Bank Alfalah, K-Electric et Descon. Saisie anonyme multi-évaluateurs, sauvegarde de la progression, accès fondé sur les rôles — et des rapports analytiques personnalisés entièrement automatisés allant jusqu'à 20 pages par employé.",
      "id-ID": "Aplikasi umpan balik 360° yang mudah digunakan oleh Bank Alfalah, K-Electric, dan Descon. Input multi-penilai anonim, penyimpanan progres, akses berbasis peran — dan laporan analitik personal yang sepenuhnya otomatis hingga 20 halaman per karyawan.",
      ar: "تطبيقات تقييم 360 درجة سهلة الاستخدام اعتمدتها بنك ألفلاح وK-Electric وDescon. إدخال مجهول من عدة جهات، وحفظ التقدم، ووصول حسب الأدوار — وتقارير تحليلية شخصية آلية تصل إلى 20 صفحة لكل موظف.",
    },
    outcomes: {
      en: [
        "Automated 20-page personalized reports",
        "Anonymous multi-rater feedback",
        "Leadership readiness & gap analytics",
        "Progress saving & role-based review structure",
      ],
      
      "fr-CA": [
        "Rapports personnalisés automatisés de 20 pages",
        "Rétroaction anonyme multi-évaluateurs",
        "Analytique de l'état de préparation au leadership et des écarts",
        "Sauvegarde de la progression et structure d'examen fondée sur les rôles",
      ],
      "id-ID": [
        "Laporan personal otomatis 20 halaman",
        "Umpan balik multi-penilai anonim",
        "Analitik kesiapan kepemimpinan & kesenjangan",
        "Penyimpanan progres & struktur tinjauan berbasis peran",
      ],
      ar: [
        "تقارير آلية شخصية من 20 صفحة",
        "تغذية راجعة مجهولة من عدة جهات",
        "تحليلات جاهزية القيادة والفجوات",
        "حفظ التقدم وهيكل مراجعة حسب الأدوار",
      ],
    },
    caseStudySlugs: ["ba-kelectric-360", "kelectric-360"],
  },
  {
    slug: "ar-vr-simulation",
    icon: "vr",
    title: {
      en: "AR/VR Simulation",
      
      "fr-CA": "Simulation RA/RV",
      "id-ID": "Simulasi AR/VR",
      ar: "محاكاة الواقع المعزز والافتراضي",
    },
    tagline: {
      en: "Fully immersive 3D training and assessment environments.",
      
      "fr-CA": "Des environnements 3D de formation et d'évaluation entièrement immersifs.",
      "id-ID": "Lingkungan pelatihan dan asesmen 3D yang sepenuhnya imersif.",
      ar: "بيئات تدريب وتقييم ثلاثية الأبعاد غامرة بالكامل.",
    },
    description: {
      en: "Immersive AR/VR that re-imagines how business gets done. From Pakistan's first 3D recruitment simulation (HBL) to Shell's fleet-wide driver safety training, we build simulated realities that assess judgment, teach procedures and scale across thousands of users.",
      
      "fr-CA": "Une RA/RV immersive qui repense la façon dont le travail se fait. De la première simulation de recrutement 3D au Pakistan (HBL) à la formation à la sécurité des conducteurs pour toute la flotte de Shell, nous créons des réalités simulées qui évaluent le jugement, enseignent les procédures et passent à l'échelle de milliers d'utilisateurs.",
      "id-ID": "AR/VR imersif yang membayangkan ulang cara bisnis berjalan. Dari simulasi rekrutmen 3D pertama di Pakistan (HBL) hingga pelatihan keselamatan pengemudi seluruh armada Shell, kami membangun realitas simulasi yang menilai penilaian, mengajarkan prosedur, dan berskala hingga ribuan pengguna.",
      ar: "واقع معزز وافتراضي غامر يعيد تصور طريقة العمل. من أول محاكاة توظيف ثلاثية الأبعاد في باكستان (HBL) إلى تدريب سلامة السائقين لأسطول شل بالكامل، نبني عوالم محاكاة تقيّم الحكم وتعلّم الإجراءات وتتسع لآلاف المستخدمين.",
    },
    outcomes: {
      en: [
        "First 3D recruitment simulation in Pakistan",
        "Fleet-wide driver safety training (Shell)",
        "Role-play & scenario engines",
        "VR/AR re-imagined business processes",
      ],
      
      "fr-CA": [
        "Première simulation de recrutement 3D au Pakistan",
        "Formation à la sécurité des conducteurs pour toute la flotte (Shell)",
        "Moteurs de jeu de rôle et de scénarios",
        "Processus d'affaires repensés en RV/RA",
      ],
      "id-ID": [
        "Simulasi rekrutmen 3D pertama di Pakistan",
        "Pelatihan keselamatan pengemudi seluruh armada (Shell)",
        "Mesin bermain peran & skenario",
        "Proses bisnis yang dibayangkan ulang dalam VR/AR",
      ],
      ar: [
        "أول محاكاة توظيف ثلاثية الأبعاد في باكستان",
        "تدريب سلامة السائقين للأسطول كاملاً (شل)",
        "محركات لعب الأدوار والسيناريوهات",
        "إعادة تصور العمليات عبر الواقع المعزز والافتراضي",
      ],
    },
    caseStudySlugs: ["hbl-3d-simulation", "shell-driver-training"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
