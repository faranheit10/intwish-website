import type { Localized } from "./types";

/** Company-wide facts (contacts, entities, socials). */
export const company = {
  name: "Intwish",
  tagline: "DefineYourWish();",
  email: "info@intwish.com",
  url: "https://intwish.com",
  phones: {
    dubai: "+971 55 552 9973",
    karachi: "+92 334 337 5919",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/intwish",
    facebook: "https://www.facebook.com/intwish",
  },
};

/** Known client names — shown as a text trust strip. */
export const clientNames: string[] = [
  "Bank Alfalah",
  "HBL",
  "PTCL",
  "Shell",
  "K-Electric",
  "Daraz",
  "ICI Pakistan",
  "Faysal Bank",
  "Descon",
  "Saudi Competitiveness & Business Center (SCBC)",
  "Foundation Public School",
  "IRD",
];

/** Logo images served from /img/logos (1..28). */
export const clientLogos: string[] = Array.from(
  { length: 28 },
  (_, i) => `/img/logos/${i + 1}.jpg`
);

export interface TeamMember {
  name: string;
  role: Localized<string>;
  bio: Localized<string>;
  image: string;
  linkedin: string;
  email: string;
}

export const team: TeamMember[] = [
  {
    name: "Khurram Izhar Siddiqui",
    role: {
      en: "Chief Executive Officer",
      
      "fr-CA": "Chef de la direction",
      "id-ID": "Chief Executive Officer",
      ar: "الرئيس التنفيذي",
    },
    bio: {
      en: "Tech advisor with 25+ years in Big4, now leading innovation in AI, Metaverse, AR and VR.",
      
      "fr-CA": "Conseiller technologique fort de plus de 25 ans d'expérience dans les Big4, il pilote aujourd'hui l'innovation en IA, en métavers, en RA et en RV.",
      "id-ID": "Penasihat teknologi dengan 25+ tahun pengalaman di Big4, kini memimpin inovasi dalam AI, Metaverse, AR, dan VR.",
      ar: "مستشار تقني بخبرة تتجاوز 25 عاماً في الشركات الكبرى، يقود الابتكار في الذكاء الاصطناعي والميتافيرس والواقع المعزز والافتراضي.",
    },
    image: "/img/team/4.webp",
    linkedin: "https://www.linkedin.com/in/khurramizhar/",
    email: "khurram.siddiqui@intwish.com",
  },
  {
    name: "Zaid Izhar Siddiqui",
    role: {
      en: "Chief Strategy Officer",
      
      "fr-CA": "Chef de la stratégie",
      "id-ID": "Chief Strategy Officer",
      ar: "كبير مسؤولي الاستراتيجية",
    },
    bio: {
      en: "Business strategist & product innovator behind Pakistan's most impactful gamification projects.",
      
      "fr-CA": "Stratège d'affaires et innovateur de produits derrière les projets de ludification les plus marquants du Pakistan.",
      "id-ID": "Strategis bisnis dan inovator produk di balik proyek gamifikasi paling berdampak di Pakistan.",
      ar: "استراتيجي أعمال ومبتكر منتجات، صاحب أبرز مشاريع الألعاب التفاعلية في باكستان.",
    },
    image: "/img/team/1.webp",
    linkedin: "https://www.linkedin.com/in/zaid-siddiqui-16a05138/",
    email: "zaidizhar@intwish.com",
  },
  {
    name: "Mateen Ahmed",
    role: {
      en: "Chief Technical Officer",
      
      "fr-CA": "Chef de la technologie",
      "id-ID": "Chief Technical Officer",
      ar: "كبير مسؤولي التقنية",
    },
    bio: {
      en: "UX master & system architect, building gamified platforms that scale to thousands.",
      
      "fr-CA": "Maître de l'expérience utilisateur et architecte de systèmes, il bâtit des plateformes ludifiées qui passent à l'échelle de milliers d'utilisateurs.",
      "id-ID": "Master UX dan arsitek sistem, membangun platform gamifikasi yang berskala hingga ribuan pengguna.",
      ar: "خبير تجربة المستخدم ومعماري الأنظمة، يبني منصات تفاعلية تتسع لآلاف المستخدمين.",
    },
    image: "/img/team/2.webp",
    linkedin: "https://www.linkedin.com/in/ma3ahmed/",
    email: "mateen.ahmed@intwish.com",
  },
  {
    name: "Muhammad Faran",
    role: {
      en: "Chief Operating Officer",
      
      "fr-CA": "Chef de l'exploitation",
      "id-ID": "Chief Operating Officer",
      ar: "كبير مسؤولي العمليات",
    },
    bio: {
      en: "Gamification expert leading content transformation, game design and deployment strategy.",
      
      "fr-CA": "Expert en ludification qui dirige la transformation du contenu, la conception de jeux et la stratégie de déploiement.",
      "id-ID": "Ahli gamifikasi yang memimpin transformasi konten, desain game, dan strategi deployment.",
      ar: "خبير ألعاب تفاعلية يقود تحويل المحتوى وتصميم الألعاب واستراتيجية التنفيذ.",
    },
    image: "/img/team/3.webp",
    linkedin: "https://www.linkedin.com/in/muhammad-faran/",
    email: "faran@intwish.com",
  },
];

export interface TimelineEntry {
  period: string;
  title: Localized<string>;
  body: Localized<string>;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2015",
    title: {
      en: "Our Humble Beginnings",
      
      "fr-CA": "Nos modestes débuts",
      "id-ID": "Awal yang Sederhana",
      ar: "بدايات متواضعة",
    },
    body: {
      en: "Intwish was formed with the vision to bring games to the corporate world — to automate tedious tasks and change traditional methods for achieving results.",
      
      "fr-CA": "Intwish a été fondée avec la vision d'apporter les jeux au monde de l'entreprise — pour automatiser les tâches fastidieuses et transformer les méthodes traditionnelles d'obtention de résultats.",
      "id-ID": "Intwish dibentuk dengan visi membawa game ke dunia korporat — untuk mengotomatiskan tugas-tugas monoton dan mengubah metode tradisional dalam mencapai hasil.",
      ar: "تأسست إنترويش برؤية نقل الألعاب إلى عالم الشركات — لأتمتة المهام المملة وتغيير الأساليب التقليدية لتحقيق النتائج.",
    },
  },
  {
    period: "2016",
    title: {
      en: "Innovation's Wheels Are Set in Motion",
      
      "fr-CA": "L'innovation se met en marche",
      "id-ID": "Roda Inovasi Mulai Berputar",
      ar: "عجلات الابتكار تنطلق",
    },
    body: {
      en: "Intwish launched gamification in Pakistan by gamifying Bank Alfalah's AML-CFT training for more than 4,000 employees — the first of many trainings gamified to date.",
      
      "fr-CA": "Intwish a lancé la ludification au Pakistan en transformant la formation en LBC-FAT de la Bank Alfalah pour plus de 4 000 employés — la première de nombreuses formations ludifiées à ce jour.",
      "id-ID": "Intwish meluncurkan gamifikasi di Pakistan dengan menggamifikasi pelatihan AML-CFT Bank Alfalah untuk lebih dari 4.000 karyawan — yang pertama dari banyak pelatihan gamifikasi hingga saat ini.",
      ar: "أطلقت إنترويش الألعاب التفاعلية في باكستان بتحويل تدريب مكافحة غسل الأموال لبنك ألفلاح إلى لعبة لأكثر من 4,000 موظف — الأولى من بين تدريبات كثيرة منذ ذلك الحين.",
    },
  },
  {
    period: "2017",
    title: {
      en: "Transition to Full Service",
      
      "fr-CA": "Transition vers le service complet",
      "id-ID": "Transisi ke Layanan Penuh",
      ar: "الانتقال إلى الخدمة الكاملة",
    },
    body: {
      en: "Launched the first MT recruitment game in Pakistan, used by ICI Pakistan — the first of many for PTCL, Faysal Bank, HBL, FPS and others. Over 50,000 candidates assessed in total.",
      
      "fr-CA": "Lancement du premier jeu de recrutement de stagiaires en gestion au Pakistan, utilisé par ICI Pakistan — le premier d'une longue série pour PTCL, Faysal Bank, HBL, FPS et d'autres. Plus de 50 000 candidats évalués au total.",
      "id-ID": "Meluncurkan game rekrutmen MT pertama di Pakistan, digunakan oleh ICI Pakistan — yang pertama dari banyak untuk PTCL, Faysal Bank, HBL, FPS, dan lainnya. Lebih dari 50.000 kandidat dinilai secara total.",
      ar: "أطلقنا أول لعبة توظيف للمتدربين الإداريين في باكستان، استخدمتها شركة ICI باكستان — الأولى ضمن ألعاب كثيرة لصالح PTCL وبنك فيصل وHBL ومدارس FPS وغيرهم، بأكثر من 50,000 مرشح.",
    },
  },
  {
    period: "Mar 2018",
    title: {
      en: "Exploring New Territories",
      
      "fr-CA": "Exploration de nouveaux territoires",
      "id-ID": "Menjelajahi Wilayah Baru",
      ar: "استكشاف آفاق جديدة",
    },
    body: {
      en: "Launched the first 3D recruitment simulation in Pakistan for HBL, assessing thousands of candidates with cognitive games and real-life situations.",
      
      "fr-CA": "Lancement de la première simulation de recrutement 3D au Pakistan pour HBL, évaluant des milliers de candidats avec des jeux cognitifs et des situations réelles.",
      "id-ID": "Meluncurkan simulasi rekrutmen 3D pertama di Pakistan untuk HBL, menilai ribuan kandidat dengan game kognitif dan situasi kehidupan nyata.",
      ar: "أطلقنا أول محاكاة توظيف ثلاثية الأبعاد في باكستان لصالح HBL، قيّمنا بها آلاف المرشحين بألعاب معرفية ومواقف واقعية.",
    },
  },
  {
    period: "Aug 2018",
    title: {
      en: "Exploring New Territories II",
      
      "fr-CA": "Exploration de nouveaux territoires II",
      "id-ID": "Menjelajahi Wilayah Baru II",
      ar: "استكشاف آفاق جديدة II",
    },
    body: {
      en: "Launched the 360° feedback application with automated report generation for more than 4,000 employees at Bank Alfalah — since reused by multiple companies.",
      
      "fr-CA": "Lancement de l'application de rétroaction 360° avec génération automatisée de rapports pour plus de 4 000 employés de la Bank Alfalah — réutilisée depuis par de nombreuses entreprises.",
      "id-ID": "Meluncurkan aplikasi umpan balik 360° dengan pembuatan laporan otomatis untuk lebih dari 4.000 karyawan di Bank Alfalah — sejak itu digunakan kembali oleh banyak perusahaan.",
      ar: "أطلقنا تطبيق التقييم 360 درجة مع توليد تقارير آلية لأكثر من 4,000 موظف في بنك ألفلاح — واستُخدم لاحقاً من عدة شركات.",
    },
  },
  {
    period: "2019",
    title: {
      en: "Expanding Horizons",
      
      "fr-CA": "Élargir les horizons",
      "id-ID": "Memperluas Cakrawala",
      ar: "توسيع الآفاق",
    },
    body: {
      en: "Launched a gamified assessment to identify high-potential employees for K-Electric.",
      
      "fr-CA": "Lancement d'une évaluation ludifiée pour cerner les employés à haut potentiel chez K-Electric.",
      "id-ID": "Meluncurkan asesmen gamifikasi untuk mengidentifikasi karyawan berpotensi tinggi bagi K-Electric.",
      ar: "أطلقنا تقييماً تفاعلياً لتحديد الموظفين ذوي الإمكانات العالية لدى K-Electric.",
    },
  },
  {
    period: "2021",
    title: {
      en: "Strategy 2.0",
      
      "fr-CA": "Stratégie 2.0",
      "id-ID": "Strategi 2.0",
      ar: "الاستراتيجية 2.0",
    },
    body: {
      en: "Headquarters moved to Dubai, UAE — with a strategic win in a Middle East public-sector client and a renewed global strategy.",
      
      "fr-CA": "Le siège social déménage à Dubaï (EAU) — avec une victoire stratégique auprès d'un client du secteur public au Moyen-Orient et une stratégie mondiale renouvelée.",
      "id-ID": "Kantor pusat pindah ke Dubai, UEA — dengan kemenangan strategis pada klien sektor publik Timur Tengah dan strategi global yang diperbarui.",
      ar: "انتقل المقر الرئيسي إلى دبي، الإمارات — مع فوز استراتيجي بعميل من القطاع العام في الشرق الأوسط واستراتيجية عالمية متجددة.",
    },
  },
];
