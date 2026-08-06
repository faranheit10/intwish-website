import type { Localized } from "./types";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: Localized<string>;
  image: string;
  title: Localized<string>;
  summary: Localized<string>;
  body: Localized<string[]>;
  /** Deployment year (ISO date) — sourced from our public timeline. */
  date?: string;
  /** Impact metrics shown as cards on the detail page. */
  metrics?: {
    value: Localized<string>;
    label: Localized<string>;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bank-alfalah-training",
    client: "Bank Alfalah",
    date: "2016",
    industry: {
      en: "Banking",
      
      "fr-CA": "Secteur bancaire",
      "id-ID": "Perbankan",
      ar: "القطاع المصرفي",
    },
    image: "/img/portfolio/Portfolio1.webp",
    title: {
      en: "Gamification of Employee Training",
      
      "fr-CA": "Ludification de la formation des employés",
      "id-ID": "Gamifikasi Pelatihan Karyawan",
      ar: "تحويل تدريب الموظفين إلى لعبة",
    },
    summary: {
      en: "AML/CFT, Branch Transformation and Fair Treatment training for 7,000+ Bank Alfalah employees — delivered through an immersive detective role-play.",
      
      "fr-CA": "Formation en LBC/FAT, transformation des succursales et traitement équitable pour plus de 7 000 employés de la Bank Alfalah — offerte par un jeu de rôle policier immersif.",
      "id-ID": "Pelatihan AML/CFT, Transformasi Cabang, dan Perlakuan Wajar untuk 7.000+ karyawan Bank Alfalah — disampaikan melalui permainan peran detektif yang imersif.",
      ar: "تدريب مكافحة غسل الأموال والتحول الفرعي والمعاملة العادلة لأكثر من 7,000 موظف في بنك ألفلاح — عبر قصة محقق غامرة.",
    },
    body: {
      en: [
        "Intwish gamified the Anti-Money Laundering, Combatting Financing of Terrorism, Branch Transformation and Fair Treatment to Customers trainings for Bank Alfalah — mandatory for over 7,000 employees of the bank nationwide.",
        "Users were immersed in a detective role-playing storyline developed by Intwish that helped employees understand global laws, regulations and procedures related to money laundering — in a way a slide deck never could.",
        "The result: a compliance drive completed at national scale, with engagement and completion the bank could measure, track and report.",
      ],
      
      "fr-CA": [
        "Intwish a ludifié les formations en lutte contre le blanchiment d'argent (LBC), en lutte contre le financement du terrorisme (FAT), en transformation des succursales et en traitement équitable des clients pour Bank Alfalah — obligatoires pour plus de 7 000 employés de la banque à l'échelle nationale.",
        "Les utilisateurs ont été plongés dans un scénario de jeu de rôle policier développé par Intwish qui a aidé les employés à comprendre les lois, règlements et procédures mondiaux liés au blanchiment d'argent — d'une manière qu'un diaporama n'aurait jamais pu.",
        "Le résultat : une campagne de conformité menée à l'échelle nationale, avec un engagement et un achèvement mesurables, traçables et rapportables par la banque.",
      ],
      "id-ID": [
        "Intwish menggamifikasi pelatihan Anti Pencucian Uang (AML), Pemberantasan Pendanaan Terorisme (CFT), Transformasi Cabang, dan Perlakuan Wajar kepada Nasabah untuk Bank Alfalah — wajib bagi lebih dari 7.000 karyawan bank di seluruh negeri.",
        "Pengguna dibenamkan dalam alur cerita bermain peran detektif yang dikembangkan Intwish, membantu karyawan memahami hukum, regulasi, dan prosedur global terkait pencucian uang — dengan cara yang tidak pernah bisa dilakukan slide presentasi.",
        "Hasilnya: kampanye kepatuhan yang tuntas dalam skala nasional, dengan keterlibatan dan penyelesaian yang dapat diukur, dilacak, dan dilaporkan oleh bank.",
      ],
      ar: [
        "حوّلت إنترويش تدريبات مكافحة غسل الأموال وتمويل الإرهاب والتحول الفرعي والمعاملة العادلة للعملاء لدى بنك ألفلاح إلى لعبة — وهي تدريبات إلزامية لأكثر من 7,000 موظف في جميع فروع البنك.",
        "انغمس المستخدمون في قصة لعب أدوار بوليسية طورتها إنترويش ساعدت الموظفين على فهم القوانين واللوائح والإجراءات العالمية المتعلقة بغسل الأموال — بطريقة لا تقدمها أي شرائح عرض.",
        "النتيجة: حملة امتثال أُنجزت على مستوى وطني، بمشاركة وإكمال تمكن البنك من قياسها وتتبعها والإبلاغ عنها.",
      ],
    },
    metrics: [
      {
        value: { en: "7,000+",  "fr-CA": "7 000+", "id-ID": "7.000+", ar: "+7,000" },
        label: {
          en: "Employees trained",
          
          "fr-CA": "Employés formés",
          "id-ID": "Karyawan dilatih",
          ar: "موظف تلقى التدريب",
        },
      },
      {
        value: { en: "1",  "fr-CA": "1", "id-ID": "1", ar: "1" },
        label: {
          en: "Nationwide campaign",
          
          "fr-CA": "Campagne nationale",
          "id-ID": "Kampanye nasional",
          ar: "حملة وطنية واحدة",
        },
      },
    ],
  },
  {
    slug: "ici-recruitment",
    client: "ICI Pakistan",
    date: "2017",
    industry: {
      en: "Chemicals / FMCG",
      
      "fr-CA": "Chimie / BGC",
      "id-ID": "Kimia / FMCG",
      ar: "المواد الكيميائية / الاستهلاكية",
    },
    image: "/img/portfolio/Portfolio2.webp",
    title: {
      en: "Gamification of MT Recruitment",
      
      "fr-CA": "Ludification du recrutement des stagiaires en gestion",
      "id-ID": "Gamifikasi Rekrutmen MT",
      ar: "تحويل توظيف المتدربين الإداريين إلى لعبة",
    },
    summary: {
      en: "A traditional test replaced by real-life work scenarios — 4,000+ applicants for ICI Pakistan's management trainee program.",
      
      "fr-CA": "Un test traditionnel remplacé par des scénarios de travail réels — plus de 4 000 candidats au programme de stagiaires en gestion d'ICI Pakistan.",
      "id-ID": "Tes tradisional digantikan skenario kerja nyata — 4.000+ pelamar untuk program management trainee ICI Pakistan.",
      ar: "اختبار تقليدي استُبدل بسيناريوهات عمل واقعية — أكثر من 4,000 متقدم لبرنامج المتدربين الإداريين لدى ICI باكستان.",
    },
    body: {
      en: [
        "Intwish gamified ICI Pakistan's recruitment process, moving it from a traditional test to a highly engaging experience for potential management trainees.",
        "The idea was simple: put applicants through real-life work scenarios to get the best out of them. Over 4,000 applicants completed the game.",
        "The result was an authentic pool of candidates who demonstrated problem-solving skills in a creative environment — a more reliable signal than a paper test.",
      ],
      
      "fr-CA": [
        "Intwish a ludifié le processus de recrutement d'ICI Pakistan, passant d'un test traditionnel à une expérience très engageante pour les futurs stagiaires en gestion.",
        "L'idée était simple : soumettre les candidats à des scénarios de travail réels pour en tirer le meilleur. Plus de 4 000 candidats ont complété le jeu.",
        "Le résultat : un bassin authentique de candidats ayant démontré leurs compétences en résolution de problèmes dans un environnement créatif — un signal plus fiable qu'un test papier.",
      ],
      "id-ID": [
        "Intwish menggamifikasi proses rekrutmen ICI Pakistan, mengubahnya dari tes tradisional menjadi pengalaman yang sangat menarik bagi calon management trainee.",
        "Idenya sederhana: berikan pelamar skenario kerja nyata untuk mengeluarkan kemampuan terbaik mereka. Lebih dari 4.000 pelamar menyelesaikan game tersebut.",
        "Hasilnya adalah kumpulan kandidat autentik yang menunjukkan keterampilan pemecahan masalah di lingkungan kreatif — sinyal yang lebih andal daripada tes kertas.",
      ],
      ar: [
        "حوّلت إنترويش عملية توظيف ICI باكستان من اختبار تقليدي إلى تجربة تفاعلية جذابة للمتقدمين لبرنامج المتدربين الإداريين.",
        "الفكرة بسيطة: وضع المتقدمين في سيناريوهات عمل واقعية لاستخراج أفضل ما لديهم. أكمل أكثر من 4,000 متقدم اللعبة.",
        "النتيجة: مجموعة مرشحين أصيلة أظهروا مهارات حل المشكلات في بيئة إبداعية — إشارة أكثر موثوقية من الاختبار الورقي.",
      ],
    },
    metrics: [
      {
        value: { en: "4,000+",  "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" },
        label: {
          en: "Applicants completed the game",
          
          "fr-CA": "Candidats ayant complété le jeu",
          "id-ID": "Pelamar menyelesaikan game",
          ar: "متقدم أكملوا اللعبة",
        },
      },
    ],
  },
  {
    slug: "ptcl-recruitment",
    client: "PTCL",
    date: "2017",
    industry: {
      en: "Telecom",
      
      "fr-CA": "Télécommunications",
      "id-ID": "Telekomunikasi",
      ar: "الاتصالات",
    },
    image: "/img/portfolio/Portfolio3.webp",
    title: {
      en: "Gamification of MT Recruitment",
      
      "fr-CA": "Ludification du recrutement des stagiaires en gestion",
      "id-ID": "Gamifikasi Rekrutmen MT",
      ar: "تحويل توظيف المتدربين الإداريين إلى لعبة",
    },
    summary: {
      en: "The largest gamified MT recruitment in Pakistan — 25,000+ candidates assessed in a matter of days.",
      
      "fr-CA": "Le plus grand recrutement de stagiaires en gestion ludifié au Pakistan — plus de 25 000 candidats évalués en quelques jours.",
      "id-ID": "Rekrutmen MT gamifikasi terbesar di Pakistan — 25.000+ kandidat dinilai dalam hitungan hari.",
      ar: "أكبر حملة توظيف تفاعلية للمتدربين الإداريين في باكستان — أكثر من 25,000 مرشح تم تقييمهم في أيام معدودة.",
    },
    body: {
      en: [
        "Intwish conducted the largest gamified MT recruitment for PTCL in Pakistan for the year 2017.",
        "Over 25,000 candidates across the country played the game and completed the process in only a few days — at a scale traditional testing could never absorb.",
        "The game assessed cognitive abilities and looked for relevant competencies under challenging, real-world situations, giving PTCL a ranked, data-rich talent pool.",
      ],
      
      "fr-CA": [
        "Intwish a mené le plus grand recrutement ludifié de stagiaires en gestion pour PTCL au Pakistan pour l'année 2017.",
        "Plus de 25 000 candidats à travers le pays ont joué au jeu et complété le processus en quelques jours à peine — à une échelle que les tests traditionnels ne pouvaient jamais absorber.",
        "Le jeu évaluait les capacités cognitives et recherchait les compétences pertinentes dans des situations réelles exigeantes, offrant à PTCL un bassin de talents classé et riche en données.",
      ],
      "id-ID": [
        "Intwish menyelenggarakan rekrutmen MT gamifikasi terbesar untuk PTCL di Pakistan pada tahun 2017.",
        "Lebih dari 25.000 kandidat di seluruh negeri memainkan game dan menyelesaikan prosesnya hanya dalam beberapa hari — pada skala yang tidak pernah bisa ditampung tes tradisional.",
        "Game tersebut menilai kemampuan kognitif dan mencari kompetensi yang relevan dalam situasi dunia nyata yang menantang, memberikan PTCL kumpulan talenta berperingkat yang kaya data.",
      ],
      ar: [
        "نفذت إنترويش أكبر حملة توظيف تفاعلية للمتدربين الإداريين لصالح PTCL في باكستان لعام 2017.",
        "لعب أكثر من 25,000 مرشح من جميع أنحاء البلاد اللعبة وأكملوا العملية في أيام معدودة فقط — على نطاق لا تستطيع الاختبارات التقليدية استيعابه.",
        "قيّمت اللعبة القدرات المعرفية وبحثت عن الكفاءات ذات الصلة في مواقف واقعية صعبة، لتقدم لـ PTCL مجموعة مواهب مصنفة وغنية بالبيانات.",
      ],
    },
    metrics: [
      {
        value: { en: "25,000+",  "fr-CA": "25 000+", "id-ID": "25.000+", ar: "+25,000" },
        label: {
          en: "Candidates in days",
          
          "fr-CA": "Candidats en quelques jours",
          "id-ID": "Kandidat dalam hitungan hari",
          ar: "مرشح في أيام",
        },
      },
    ],
  },
  {
    slug: "faysal-bank-recruitment",
    client: "Faysal Bank & Others",
    date: "2018",
    industry: {
      en: "Banking / Telecom / FMCG",
      
      "fr-CA": "Banque / Télécom / BGC",
      "id-ID": "Perbankan / Telekom / FMCG",
      ar: "البنوك / الاتصالات / الاستهلاكية",
    },
    image: "/img/portfolio/Portfolio4.webp",
    title: {
      en: "Gamified Recruitment Platforms",
      
      "fr-CA": "Plateformes de recrutement ludifiées",
      "id-ID": "Platform Rekrutmen Gamifikasi",
      ar: "منصات التوظيف التفاعلية",
    },
    summary: {
      en: "Recruitment platforms for banking, telecom, FMCG and supply chain — with Faysal Bank the first in the industry to launch gamified hiring in 2018.",
      
      "fr-CA": "Des plateformes de recrutement pour la banque, les télécoms, les BGC et la chaîne d'approvisionnement — Faysal Bank étant la première du secteur à lancer l'embauche ludifiée en 2018.",
      "id-ID": "Platform rekrutmen untuk perbankan, telekomunikasi, FMCG, dan rantai pasok — dengan Faysal Bank sebagai yang pertama di industrinya meluncurkan rekrutmen gamifikasi pada 2018.",
      ar: "منصات توظيف للبنوك والاتصالات والسلع الاستهلاكية وسلاسل الإمداد — وكان بنك فيصل أول من أطلق التوظيف التفاعلي في القطاع عام 2018.",
    },
    body: {
      en: [
        "Intwish developed gamified recruitment platforms for organizations in banking, telecom, FMCG and supply chain — helping companies scale and enhance hiring while delivering engaging candidate experiences.",
        "One of the earliest success stories was Faysal Bank in 2018, the first in the industry to launch gamified recruitment. The platform worked seamlessly across desktop and mobile, letting candidates play from anywhere and climb the leaderboard for a shot at recruitment.",
        "Platform features: assessment games evaluating cognitive ability, problem-solving and job fit; automated reports and candidate profiles; live dashboards with funnel stats, performance heatmaps and engagement data; and leaderboards to showcase top talent.",
        "These simulations have been used by 4,000 to 25,000 candidates per organization — making hiring more data-driven, scalable and immersive.",
      ],
      
      "fr-CA": [
        "Intwish a développé des plateformes de recrutement ludifiées pour des organisations des secteurs bancaire, télécom, BGC et chaîne d'approvisionnement — aidant les entreprises à faire évoluer et améliorer l'embauche tout en offrant des expériences engageantes aux candidats.",
        "L'une des premières réussites fut Faysal Bank en 2018, la première du secteur à lancer le recrutement ludifié. La plateforme fonctionnait parfaitement sur ordinateur et mobile, permettant aux candidats de jouer de n'importe où et de gravir le classement pour décrocher un poste.",
        "Fonctionnalités de la plateforme : jeux d'évaluation mesurant les capacités cognitives, la résolution de problèmes et l'adéquation au poste ; rapports automatisés et profils de candidats ; tableaux de bord en direct avec statistiques d'entonnoir, cartes thermiques de performance et données d'engagement ; et classements pour mettre en valeur les meilleurs talents.",
        "Ces simulations ont été utilisées par 4 000 à 25 000 candidats par organisation — rendant l'embauche plus axée sur les données, plus évolutive et plus immersive.",
      ],
      "id-ID": [
        "Intwish mengembangkan platform rekrutmen gamifikasi untuk organisasi di sektor perbankan, telekomunikasi, FMCG, dan rantai pasok — membantu perusahaan meningkatkan skala dan kualitas rekrutmen sambil memberikan pengalaman kandidat yang menarik.",
        "Salah satu kisah sukses paling awal adalah Faysal Bank pada 2018, yang pertama di industrinya meluncurkan rekrutmen gamifikasi. Platform ini bekerja mulus di desktop dan mobile, memungkinkan kandidat bermain dari mana saja dan menaiki papan peringkat untuk meraih kesempatan rekrutmen.",
        "Fitur platform: game asesmen yang mengevaluasi kemampuan kognitif, pemecahan masalah, dan kesesuaian pekerjaan; laporan otomatis dan profil kandidat; dashboard langsung dengan statistik funnel, heatmap performa, dan data keterlibatan; serta papan peringkat untuk menampilkan talenta terbaik.",
        "Simulasi ini telah digunakan oleh 4.000 hingga 25.000 kandidat per organisasi — membuat rekrutmen lebih berbasis data, berskala, dan imersif.",
      ],
      ar: [
        "طوّرت إنترويش منصات توظيف تفاعلية لمؤسسات في البنوك والاتصالات والسلع الاستهلاكية وسلاسل الإمداد — مما ساعد الشركات على توسيع عمليات التوظيف وتحسينها مع تقديم تجارب مرشحين جذابة.",
        "من أقدم قصص النجاح: بنك فيصل عام 2018، أول من أطلق التوظيف التفاعلي في القطاع. عملت المنصة بسلاسة على أجهزة الكمبيوتر والجوال، مما أتاح للمرشحين اللعب من أي مكان والتقدم في لوحة المتصدرين للفوز بفرصة التوظيف.",
        "مزايا المنصة: ألعاب تقييم للقدرات المعرفية وحل المشكلات وملاءمة الوظيفة؛ وتقارير آلية وملفات مرشحين؛ ولوحات تحكم حية تعرض إحصاءات قمع التوظيف وخرائط الأداء وبيانات التفاعل؛ ولوحات متصدرين لعرض أفضل المواهب.",
        "استُخدمت هذه المحاكاة من 4,000 إلى 25,000 مرشح لكل مؤسسة — مما جعل التوظيف أكثر اعتماداً على البيانات وقابلية للتوسع وغمراً.",
      ],
    },
    metrics: [
      {
        value: { en: "4–25k",  "fr-CA": "4–25 k", "id-ID": "4–25rb", ar: "4–25 ألف" },
        label: {
          en: "Candidates per organization",
          
          "fr-CA": "Candidats par organisation",
          "id-ID": "Kandidat per organisasi",
          ar: "مرشح لكل مؤسسة",
        },
      },
      {
        value: { en: "2018",  "fr-CA": "2018", "id-ID": "2018", ar: "2018" },
        label: {
          en: "First in industry (Faysal Bank)",
          
          "fr-CA": "Première du secteur (Faysal Bank)",
          "id-ID": "Pertama di industri (Faysal Bank)",
          ar: "الأول في القطاع (بنك فيصل)",
        },
      },
    ],
  },
  {
    slug: "hbl-3d-simulation",
    client: "HBL",
    date: "2018-03",
    industry: {
      en: "Banking",
      
      "fr-CA": "Secteur bancaire",
      "id-ID": "Perbankan",
      ar: "القطاع المصرفي",
    },
    image: "/img/portfolio/Portfolio5.webp",
    title: {
      en: "3D Simulation for MT Recruitment",
      
      "fr-CA": "Simulation 3D pour le recrutement des stagiaires en gestion",
      "id-ID": "Simulasi 3D untuk Rekrutmen MT",
      ar: "محاكاة ثلاثية الأبعاد لتوظيف المتدربين الإداريين",
    },
    summary: {
      en: "Pakistan's first 3D recruitment simulation — 4,000+ candidates assessed, with top performers hired as HBL management trainees in 2018 and again in 2019.",
      
      "fr-CA": "La première simulation de recrutement 3D au Pakistan — plus de 4 000 candidats évalués, les meilleurs étant embauchés comme stagiaires en gestion à HBL en 2018 puis de nouveau en 2019.",
      "id-ID": "Simulasi rekrutmen 3D pertama di Pakistan — 4.000+ kandidat dinilai, dengan performer terbaik direkrut sebagai management trainee HBL pada 2018 dan lagi pada 2019.",
      ar: "أول محاكاة توظيف ثلاثية الأبعاد في باكستان — أكثر من 4,000 مرشح تم تقييمهم، وأفضلهم عُينوا متدربين إداريين في HBL عامي 2018 و2019.",
    },
    body: {
      en: [
        "Intwish launched the first 3D recruitment simulation in Pakistan for HBL, assessing thousands of candidates with cognitive games and real-life situations.",
        "Played by more than 4,000 candidates across the country, the top performers were hired as Management Trainees for 2018 — and HBL reused the assessment for the same program in 2019 because it proved more effective and had national reach.",
      ],
      
      "fr-CA": [
        "Intwish a lancé la première simulation de recrutement 3D au Pakistan pour HBL, évaluant des milliers de candidats avec des jeux cognitifs et des situations réelles.",
        "Jouée par plus de 4 000 candidats à travers le pays, les meilleurs ont été embauchés comme stagiaires en gestion pour 2018 — et HBL a réutilisé l'évaluation pour le même programme en 2019, car elle s'est révélée plus efficace et avait une portée nationale.",
      ],
      "id-ID": [
        "Intwish meluncurkan simulasi rekrutmen 3D pertama di Pakistan untuk HBL, menilai ribuan kandidat dengan game kognitif dan situasi kehidupan nyata.",
        "Dimainkan oleh lebih dari 4.000 kandidat di seluruh negeri, para performer terbaik direkrut sebagai Management Trainee untuk 2018 — dan HBL menggunakan kembali asesmen tersebut untuk program yang sama pada 2019 karena terbukti lebih efektif dan menjangkau nasional.",
      ],
      ar: [
        "أطلقت إنترويش أول محاكاة توظيف ثلاثية الأبعاد في باكستان لصالح HBL، قيّمنا بها آلاف المرشحين بألعاب معرفية ومواقف واقعية.",
        "لعبها أكثر من 4,000 مرشح من جميع أنحاء البلاد، وعُين الأفضل أداءً متدربين إداريين لعام 2018 — وأعادت HBL استخدام التقييم للبرنامج نفسه عام 2019 لأنه أثبت فعاليته ووصل إلى مستوى وطني.",
      ],
    },
    metrics: [
      {
        value: { en: "4,000+",  "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" },
        label: {
          en: "Candidates assessed",
          
          "fr-CA": "Candidats évalués",
          "id-ID": "Kandidat dinilai",
          ar: "مرشح تم تقييمهم",
        },
      },
      {
        value: { en: "2×",  "fr-CA": "2×", "id-ID": "2×", ar: "مرتين" },
        label: {
          en: "Reused by HBL (2018–19)",
          
          "fr-CA": "Réutilisé par HBL (2018-19)",
          "id-ID": "Digunakan kembali oleh HBL (2018–19)",
          ar: "أُعيد استخدامه في HBL (2018–19)",
        },
      },
    ],
  },
  {
    slug: "fps-entry-test",
    client: "Foundation Public School",
    date: "2018",
    industry: {
      en: "Education",
      
      "fr-CA": "Éducation",
      "id-ID": "Pendidikan",
      ar: "التعليم",
    },
    image: "/img/portfolio/Portfolio6.webp",
    title: {
      en: "Gamification of O/A Level Entry Test",
      
      "fr-CA": "Ludification du test d'admission aux niveaux O/A",
      "id-ID": "Gamifikasi Tes Masuk O/A Level",
      ar: "تحويل اختبار القبول (O/A Level) إلى لعبة",
    },
    summary: {
      en: "A breakthrough for gamification in education — the O/A Level entry test reimagined as an engaging assessment experience.",
      
      "fr-CA": "Une percée pour la ludification en éducation — le test d'admission aux niveaux O/A repensé comme une expérience d'évaluation engageante.",
      "id-ID": "Terobosan gamifikasi di bidang pendidikan — tes masuk O/A Level dibayangkan ulang sebagai pengalaman asesmen yang menarik.",
      ar: "نقلة نوعية للألعاب التفاعلية في التعليم — اختبار القبول (O/A Level) أعيد تصوره كتجربة تقييم جذابة.",
    },
    body: {
      en: [
        "Intwish performed a breakthrough in the emerging industry of gamification in education by reimagining the O/A Level entry test for Foundation Public School.",
        "The assessment moved from a high-pressure exam to an experience students could engage with naturally — reducing anxiety while preserving measurement integrity.",
      ],
      
      "fr-CA": [
        "Intwish a réalisé une percée dans le secteur émergent de la ludification en éducation en repensant le test d'admission aux niveaux O/A pour Foundation Public School.",
        "L'évaluation est passée d'un examen à haute pression à une expérience que les élèves pouvaient vivre naturellement — réduisant l'anxiété tout en préservant l'intégrité de la mesure.",
      ],
      "id-ID": [
        "Intwish melakukan terobosan dalam industri gamifikasi pendidikan yang sedang berkembang dengan membayangkan ulang tes masuk O/A Level untuk Foundation Public School.",
        "Asesmen berubah dari ujian bertekanan tinggi menjadi pengalaman yang bisa dijalani siswa secara alami — mengurangi kecemasan sambil menjaga integritas pengukuran.",
      ],
      ar: [
        "حققت إنترويش نقلة نوعية في صناعة الألعاب التفاعلية في التعليم بإعادة تصور اختبار القبول (O/A Level) لمدارس Foundation Public School.",
        "انتقل التقييم من امتحان عالي الضغط إلى تجربة يمكن للطلاب التفاعل معها بشكل طبيعي — مما قلل القلق مع الحفاظ على نزاهة القياس.",
      ],
    },
  },
  {
    slug: "ba-kelectric-360",
    client: "Bank Alfalah & K-Electric",
    date: "2018-08",
    industry: {
      en: "Banking / Energy",
      
      "fr-CA": "Banque / Énergie",
      "id-ID": "Perbankan / Energi",
      ar: "البنوك / الطاقة",
    },
    image: "/img/portfolio/Portfolio7.webp",
    title: {
      en: "360° Feedback System",
      
      "fr-CA": "Système de rétroaction 360°",
      "id-ID": "Sistem Umpan Balik 360°",
      ar: "نظام التقييم 360 درجة",
    },
    summary: {
      en: "A scalable 360° feedback system for 7,000+ employees each at Bank Alfalah and K-Electric — with automated 20-page reports.",
      
      "fr-CA": "Un système de rétroaction 360° évolutif pour plus de 7 000 employés chacun chez Bank Alfalah et K-Electric — avec des rapports automatisés de 20 pages.",
      "id-ID": "Sistem umpan balik 360° yang berskala untuk 7.000+ karyawan di Bank Alfalah dan K-Electric masing-masing — dengan laporan otomatis 20 halaman.",
      ar: "نظام تقييم 360 درجة قابل للتوسع لأكثر من 7,000 موظف في كل من بنك ألفلاح وK-Electric — مع تقارير آلية من 20 صفحة.",
    },
    body: {
      en: [
        "Intwish designed and implemented a scalable 360° feedback system used by both Bank Alfalah and K-Electric to support leadership development, performance evaluation and self-awareness.",
        "Platform features: used by over 7,000 employees in each organization; a simple, user-friendly interface to encourage participation and completion; fully automated report generation with 20-page personalized analytics per employee; and progress saving, role-based access and a multi-level review structure.",
        "The system helped both organizations identify leadership readiness, strengths and gaps while streamlining internal feedback cycles with data-driven insight.",
      ],
      
      "fr-CA": [
        "Intwish a conçu et mis en œuvre un système de rétroaction 360° évolutif utilisé par Bank Alfalah et K-Electric pour soutenir le développement du leadership, l'évaluation de la performance et la conscience de soi.",
        "Fonctionnalités de la plateforme : utilisée par plus de 7 000 employés dans chaque organisation ; une interface simple et conviviale encourageant la participation et l'achèvement ; une génération de rapports entièrement automatisée avec des analyses personnalisées de 20 pages par employé ; et sauvegarde de la progression, accès fondé sur les rôles et structure d'examen à plusieurs niveaux.",
        "Le système a aidé les deux organisations à cerner l'état de préparation au leadership, les forces et les écarts, tout en simplifiant les cycles de rétroaction internes grâce à des informations fondées sur les données.",
      ],
      "id-ID": [
        "Intwish merancang dan mengimplementasikan sistem umpan balik 360° berskala yang digunakan oleh Bank Alfalah dan K-Electric untuk mendukung pengembangan kepemimpinan, evaluasi kinerja, dan kesadaran diri.",
        "Fitur platform: digunakan oleh lebih dari 7.000 karyawan di setiap organisasi; antarmuka sederhana dan ramah pengguna untuk mendorong partisipasi dan penyelesaian; pembuatan laporan sepenuhnya otomatis dengan analitik personal 20 halaman per karyawan; serta penyimpanan progres, akses berbasis peran, dan struktur tinjauan bertingkat.",
        "Sistem ini membantu kedua organisasi mengidentifikasi kesiapan kepemimpinan, kekuatan, dan kesenjangan sambil merampingkan siklus umpan balik internal dengan wawasan berbasis data.",
      ],
      ar: [
        "صممت إنترويش ونفذت نظام تقييم 360 درجة قابلاً للتوسع استخدمه كل من بنك ألفلاح وK-Electric لدعم تطوير القيادة وتقييم الأداء والوعي الذاتي.",
        "مزايا المنصة: استخدام من أكثر من 7,000 موظف في كل مؤسسة؛ وواجهة بسيطة وسهلة تشجع المشاركة والإكمال؛ وتوليد تقارير آلية بالكامل مع تحليلات شخصية من 20 صفحة لكل موظف؛ وحفظ التقدم ووصولاً حسب الأدوار وهيكل مراجعة متعدد المستويات.",
        "ساعد النظام المؤسستين على تحديد جاهزية القيادة ونقاط القوة والفجوات مع تبسيط دورات التغذية الراجعة برؤى مبنية على البيانات.",
      ],
    },
    metrics: [
      {
        value: { en: "7,000+",  "fr-CA": "7 000+", "id-ID": "7.000+", ar: "+7,000" },
        label: {
          en: "Employees per organization",
          
          "fr-CA": "Employés par organisation",
          "id-ID": "Karyawan per organisasi",
          ar: "موظف في كل مؤسسة",
        },
      },
      {
        value: { en: "20",  "fr-CA": "20", "id-ID": "20", ar: "20" },
        label: {
          en: "Pages per automated report",
          
          "fr-CA": "Pages par rapport automatisé",
          "id-ID": "Halaman per laporan otomatis",
          ar: "صفحة في كل تقرير آلي",
        },
      },
    ],
  },
  {
    slug: "kelectric-hipo",
    client: "K-Electric",
    date: "2019",
    industry: {
      en: "Energy",
      
      "fr-CA": "Énergie",
      "id-ID": "Energi",
      ar: "الطاقة",
    },
    image: "/img/portfolio/Portfolio8.webp",
    title: {
      en: "Gamification for HiPo Identification",
      
      "fr-CA": "Ludification pour l'identification des hauts potentiels",
      "id-ID": "Gamifikasi untuk Identifikasi HiPo",
      ar: "ألعاب تفاعلية لتحديد المواهب الواعدة",
    },
    summary: {
      en: "Games that assess cognitive skills and personality traits to highlight the exact capabilities K-Electric leadership was looking for.",
      
      "fr-CA": "Des jeux qui évaluent les compétences cognitives et les traits de personnalité pour mettre en lumière les capacités exactes que recherchait la direction de K-Electric.",
      "id-ID": "Game yang menilai keterampilan kognitif dan sifat kepribadian untuk menyoroti kapabilitas persis yang dicari kepemimpinan K-Electric.",
      ar: "ألعاب تقيّم المهارات المعرفية والسمات الشخصية لتبرز القدرات التي تبحث عنها قيادة K-Electric تحديداً.",
    },
    body: {
      en: [
        "Intwish developed several games that assess different candidate capabilities — including cognitive skills and unique personality traits.",
        "With these games, K-Electric could highlight the desired skills and traits leadership was looking for, directing high-potential development with data instead of gut feel.",
      ],
      
      "fr-CA": [
        "Intwish a développé plusieurs jeux qui évaluent différentes capacités des candidats — notamment les compétences cognitives et des traits de personnalité uniques.",
        "Grâce à ces jeux, K-Electric a pu mettre en lumière les compétences et les traits recherchés par la direction, orientant le développement des hauts potentiels avec des données plutôt qu'à l'intuition.",
      ],
      "id-ID": [
        "Intwish mengembangkan beberapa game yang menilai berbagai kapabilitas kandidat — termasuk keterampilan kognitif dan sifat kepribadian yang unik.",
        "Dengan game-game ini, K-Electric dapat menyoroti keterampilan dan sifat yang dicari kepemimpinan, mengarahkan pengembangan potensi tinggi dengan data, bukan perasaan.",
      ],
      ar: [
        "طورت إنترويش عدة ألعاب تقيّم قدرات مختلفة لدى المرشحين — بما في ذلك المهارات المعرفية والسمات الشخصية الفريدة.",
        "بفضل هذه الألعاب، تمكنت K-Electric من إبراز المهارات والسمات التي تبحث عنها القيادة، وتوجيه تطوير المواهب الواعدة بالبيانات بدلاً من التقدير الشخصي.",
      ],
    },
  },
  {
    slug: "kelectric-360",
    client: "K-Electric",
    date: "2019",
    industry: {
      en: "Energy",
      
      "fr-CA": "Énergie",
      "id-ID": "Energi",
      ar: "الطاقة",
    },
    image: "/img/portfolio/Portfolio9.webp",
    title: {
      en: "360° Feedback for Higher Management",
      
      "fr-CA": "Rétroaction 360° pour la haute direction",
      "id-ID": "Umpan Balik 360° untuk Manajemen Senior",
      ar: "التقييم 360 درجة للإدارة العليا",
    },
    summary: {
      en: "The 360° feedback application used by K-Electric's higher management — simple interface, always saving progress, with 20 pages of automated analysis.",
      
      "fr-CA": "L'application de rétroaction 360° utilisée par la haute direction de K-Electric — interface simple, sauvegarde constante de la progression, avec 20 pages d'analyse automatisée.",
      "id-ID": "Aplikasi umpan balik 360° yang digunakan manajemen senior K-Electric — antarmuka sederhana, selalu menyimpan progres, dengan 20 halaman analisis otomatis.",
      ar: "تطبيق التقييم 360 درجة المستخدم من الإدارة العليا في K-Electric — واجهة بسيطة تحفظ التقدم دائماً، مع 20 صفحة من التحليل الآلي.",
    },
    body: {
      en: [
        "The 360° feedback application created by Intwish was also utilized by K-Electric for their higher management.",
        "The application has a very simple interface and saves user progress at all times. The feedback analysis is spread over 20 pages of automated report, offering key leadership insights.",
      ],
      
      "fr-CA": [
        "L'application de rétroaction 360° créée par Intwish a également été utilisée par K-Electric pour sa haute direction.",
        "L'application possède une interface très simple et sauvegarde la progression de l'utilisateur en tout temps. L'analyse de la rétroaction s'étend sur 20 pages de rapport automatisé, offrant des informations clés sur le leadership.",
      ],
      "id-ID": [
        "Aplikasi umpan balik 360° yang dibuat Intwish juga digunakan oleh K-Electric untuk manajemen senior mereka.",
        "Aplikasi ini memiliki antarmuka yang sangat sederhana dan selalu menyimpan progres pengguna. Analisis umpan balik tersebar di 20 halaman laporan otomatis, menawarkan wawasan kepemimpinan utama.",
      ],
      ar: [
        "استُخدم تطبيق التقييم 360 درجة الذي طورته إنترويش أيضاً لدى K-Electric للإدارة العليا.",
        "يتميز التطبيق بواجهة بسيطة للغاية ويحفظ تقدم المستخدم في جميع الأوقات. يتوزع تحليل التغذية الراجعة على 20 صفحة من تقرير آلي يقدم رؤى قيادية رئيسية.",
      ],
    },
    metrics: [
      {
        value: { en: "20",  "fr-CA": "20", "id-ID": "20", ar: "20" },
        label: {
          en: "Pages of automated analysis",
          
          "fr-CA": "Pages d'analyse automatisée",
          "id-ID": "Halaman analisis otomatis",
          ar: "صفحة من التحليل الآلي",
        },
      },
      {
        value: { en: "100",  "fr-CA": "100", "id-ID": "100", ar: "100" },
        label: {
          en: "Higher management employees",
          
          "fr-CA": "Employés de la haute direction",
          "id-ID": "Karyawan manajemen senior",
          ar: "موظف من الإدارة العليا",
        },
      },
    ],
  },
  {
    slug: "ird-epi-rehnuma",
    client: "IRD",
    date: "2021",
    industry: {
      en: "Public Health",
      
      "fr-CA": "Santé publique",
      "id-ID": "Kesehatan Masyarakat",
      ar: "الصحة العامة",
    },
    image: "/img/portfolio/Portfolio10.webp",
    title: {
      en: "EPI Rehnuma — Vaccinator Training App",
      
      "fr-CA": "EPI Rehnuma — Application de formation des vaccinateurs",
      "id-ID": "EPI Rehnuma — Aplikasi Pelatihan Vaksinator",
      ar: "EPI Rehnuma — تطبيق تدريب المُلقّحين",
    },
    summary: {
      en: "A gamified learning app for vaccinators — levels, storylines, assessments and rewards covering vaccine management and COVID-19 SOPs.",
      
      "fr-CA": "Une application d'apprentissage ludifiée pour les vaccinateurs — niveaux, scénarios, évaluations et récompenses couvrant la gestion des vaccins et les protocoles COVID-19.",
      "id-ID": "Aplikasi pembelajaran gamifikasi untuk vaksinator — level, alur cerita, asesmen, dan penghargaan yang mencakup manajemen vaksin dan SOP COVID-19.",
      ar: "تطبيق تعلم تفاعلي للملقّحين — مراحل وقصص وتقييمات ومكافآت تغطي إدارة اللقاحات وإجراءات كوفيد-19.",
    },
    body: {
      en: [
        "Intwish created a gamified learning application for vaccinators under the EPI Rehnuma initiative.",
        "The app includes levels, storylines, assessments and rewards to teach vaccine management, birth dose protocols, COVID-19 SOPs, waste disposal and communication skills — with video learning, interactive quizzes, a scoring system and a leaderboard.",
        "Launched in 2021 with 6 learning modules, a seventh module was added in 2022 and a further five by 2024 — bringing the app to 13 modules covering vaccine stock management, zero dose, adverse events following immunization, cold chain, outbreak response and caregiver counselling.",
      ],
      
      "fr-CA": [
        "Intwish a créé une application d'apprentissage ludifiée pour les vaccinateurs dans le cadre de l'initiative EPI Rehnuma.",
        "L'application comprend des niveaux, des scénarios, des évaluations et des récompenses pour enseigner la gestion des vaccins, les protocoles de dose néonatale, les protocoles COVID-19, l'élimination des déchets et les compétences en communication — avec apprentissage vidéo, quiz interactifs, système de pointage et classement.",
        "Lancée en 2021 avec 6 modules de formation, un septième module a été ajouté en 2022 et cinq de plus d'ici 2024 — portant l'application à 13 modules couvrant la gestion des stocks de vaccins, la dose zéro, les manifestations post-vaccinales indésirables, la chaîne du froid, la réponse aux flambées et le conseil aux proches aidants.",
      ],
      "id-ID": [
        "Intwish membuat aplikasi pembelajaran gamifikasi untuk vaksinator dalam inisiatif EPI Rehnuma.",
        "Aplikasi ini mencakup level, alur cerita, asesmen, dan penghargaan untuk mengajarkan manajemen vaksin, protokol dosis lahir, SOP COVID-19, pembuangan limbah, dan keterampilan komunikasi — dengan pembelajaran video, kuis interaktif, sistem penilaian, dan papan peringkat.",
        "Diluncurkan pada 2021 dengan 6 modul pembelajaran, modul ketujuh ditambahkan pada 2022 dan lima modul lagi pada 2024 — menjadikan aplikasi memiliki 13 modul yang mencakup manajemen stok vaksin, zero dose, kejadian ikutan pasca imunisasi (KIPI), rantai dingin, respons wabah, dan konseling pengasuh.",
      ],
      ar: [
        "أنشأت إنترويش تطبيقاً تفاعلياً للتعلم للملقّحين ضمن مبادرة EPI Rehnuma.",
        "يتضمن التطبيق مراحل وقصصاً وتقييمات ومكافآت لتعليم إدارة اللقاحات وبروتوكولات جرعة الولادة وإجراءات كوفيد-19 والتخلص من النفايات ومهارات التواصل — مع تعلم بالفيديو واختبارات تفاعلية ونظام تنقيط ولوحة متصدرين.",
        "أُطلق التطبيق في 2021 بعدة وحدات تعليمية (6)، وأُضيفت وحدة سابعة في 2022 ثم خمس وحدات إضافية بحلول 2024 — ليصل إلى 13 وحدة تغطي إدارة مخزون اللقاحات والجرعة الصفرية والآثار الجانبية التالية للتمنيع وحفظ سلسلة التبريد والاستجابة للفاشيات وإرشاد مقدّمي الرعاية.",
      ],
    },
    metrics: [
      {
        value: { en: "2,000+",  "fr-CA": "2 000+", "id-ID": "2.000+", ar: "+2,000" },
        label: {
          en: "Vaccinators trained",
          
          "fr-CA": "Vaccinateurs formés",
          "id-ID": "Vaksinator dilatih",
          ar: "مُلقّح تلقى التدريب",
        },
      },
    ],
  },
  {
    slug: "hbl-design-thinking",
    client: "HBL",
    date: "2022",
    industry: {
      en: "Banking",
      
      "fr-CA": "Secteur bancaire",
      "id-ID": "Perbankan",
      ar: "القطاع المصرفي",
    },
    image: "/img/portfolio/Portfolio11.webp",
    title: {
      en: "Design Thinking Learning Game",
      
      "fr-CA": "Jeu d'apprentissage du design thinking",
      "id-ID": "Game Pembelajaran Design Thinking",
      ar: "لعبة تعلم التفكير التصميمي",
    },
    summary: {
      en: "A design-thinking module integrated into HBL's Oracle Taleo LMS, reaching over 20,000 employees.",
      
      "fr-CA": "Un module de design thinking intégré au LMS Oracle Taleo de HBL, touchant plus de 20 000 employés.",
      "id-ID": "Modul design thinking yang terintegrasi ke LMS Oracle Taleo milik HBL, menjangkau lebih dari 20.000 karyawan.",
      ar: "وحدة تفكير تصميمي مدمجة في منصة Oracle Taleo لدى HBL، وصلت إلى أكثر من 20,000 موظف.",
    },
    body: {
      en: [
        "Intwish developed a gamified learning experience for HBL on the Design Thinking methodology.",
        "Integrated into the Oracle Taleo LMS, the module reached over 20,000 employees and covered the five components of Design Thinking plus its core problem-solving tools and techniques.",
      ],
      
      "fr-CA": [
        "Intwish a développé une expérience d'apprentissage ludifiée pour HBL sur la méthodologie du design thinking.",
        "Intégré au LMS Oracle Taleo, le module a touché plus de 20 000 employés et couvrait les cinq composantes du design thinking ainsi que ses outils et techniques fondamentaux de résolution de problèmes.",
      ],
      "id-ID": [
        "Intwish mengembangkan pengalaman pembelajaran gamifikasi untuk HBL tentang metodologi Design Thinking.",
        "Terintegrasi ke LMS Oracle Taleo, modul ini menjangkau lebih dari 20.000 karyawan dan mencakup lima komponen Design Thinking plus alat dan teknik inti pemecahan masalahnya.",
      ],
      ar: [
        "طورت إنترويش تجربة تعلم تفاعلية لصالح HBL حول منهجية التفكير التصميمي.",
        "بدمجها في منصة Oracle Taleo، وصلت الوحدة إلى أكثر من 20,000 موظف وغطت المكونات الخمسة للتفكير التصميمي إضافة إلى أدواته وتقنياته الأساسية لحل المشكلات.",
      ],
    },
    metrics: [
      {
        value: { en: "20,000+",  "fr-CA": "20 000+", "id-ID": "20.000+", ar: "+20,000" },
        label: {
          en: "Employees reached via LMS",
          
          "fr-CA": "Employés touchés via le LMS",
          "id-ID": "Karyawan yang terjangkau via LMS",
          ar: "موظف عبر منصة التعلم",
        },
      },
    ],
  },
  {
    slug: "hbl-agile",
    client: "HBL",
    date: "2022",
    industry: {
      en: "Banking",
      
      "fr-CA": "Secteur bancaire",
      "id-ID": "Perbankan",
      ar: "القطاع المصرفي",
    },
    image: "/img/portfolio/Portfolio12.webp",
    title: {
      en: "Agile Project Management Learning Game",
      
      "fr-CA": "Jeu d'apprentissage de la gestion de projet agile",
      "id-ID": "Game Pembelajaran Manajemen Proyek Agile",
      ar: "لعبة تعلم إدارة المشاريع الرشيقة",
    },
    summary: {
      en: "A hands-on agile learning module for 20,000+ HBL employees — clarity on agile, Scrum and real-world success stories.",
      
      "fr-CA": "Un module d'apprentissage agile pratique pour plus de 20 000 employés de HBL — clarté sur l'agile, Scrum et des réussites réelles.",
      "id-ID": "Modul pembelajaran agile yang praktis untuk 20.000+ karyawan HBL — kejelasan tentang agile, Scrum, dan kisah sukses dunia nyata.",
      ar: "وحدة تعلم عملية في المنهجية الرشيقة لأكثر من 20,000 موظف في HBL — وضوح في مفهوم الرشاقة وScrum وقصص نجاح واقعية.",
    },
    body: {
      en: [
        "Intwish developed a gamified learning module on Agile Project Management for HBL, integrated into the bank's Oracle Taleo LMS and designed for over 20,000 employees.",
        "Learning objectives: attain clarity on what it means to be agile; learn the basics of agile project management; understand the Scrum framework; and get inspired by agile success stories.",
      ],
      
      "fr-CA": [
        "Intwish a développé un module d'apprentissage ludifié sur la gestion de projet agile pour HBL, intégré au LMS Oracle Taleo de la banque et conçu pour plus de 20 000 employés.",
        "Objectifs d'apprentissage : acquérir de la clarté sur ce que signifie être agile ; apprendre les bases de la gestion de projet agile ; comprendre le cadre Scrum ; et s'inspirer des réussites agiles.",
      ],
      "id-ID": [
        "Intwish mengembangkan modul pembelajaran gamifikasi tentang Manajemen Proyek Agile untuk HBL, terintegrasi ke LMS Oracle Taleo bank tersebut dan dirancang untuk lebih dari 20.000 karyawan.",
        "Tujuan pembelajaran: mencapai kejelasan tentang apa artinya menjadi agile; mempelajari dasar-dasar manajemen proyek agile; memahami kerangka kerja Scrum; dan terinspirasi oleh kisah sukses agile.",
      ],
      ar: [
        "طورت إنترويش وحدة تعلم تفاعلية في إدارة المشاريع الرشيقة لصالح HBL، مدمجة في منصة Oracle Taleo ومصممة لأكثر من 20,000 موظف.",
        "أهداف التعلم: تحقيق الوضوح حول معنى الرشاقة؛ وتعلم أساسيات إدارة المشاريع الرشيقة؛ وفهم إطار عمل Scrum؛ والاستلهام من قصص نجاح المنهجية.",
      ],
    },
    metrics: [
      {
        value: { en: "20,000+",  "fr-CA": "20 000+", "id-ID": "20.000+", ar: "+20,000" },
        label: {
          en: "Employees trained",
          
          "fr-CA": "Employés formés",
          "id-ID": "Karyawan dilatih",
          ar: "موظف تلقى التدريب",
        },
      },
    ],
  },
  {
    slug: "daraz-academy",
    client: "Daraz",
    date: "2022",
    industry: {
      en: "E-commerce & Logistics",
      
      "fr-CA": "Commerce électronique et logistique",
      "id-ID": "E-commerce & Logistik",
      ar: "التجارة الإلكترونية واللوجستيات",
    },
    image: "/img/portfolio/Portfolio13.webp",
    title: {
      en: "Daraz Express Academy — Onboarding Training",
      
      "fr-CA": "Académie Daraz Express — Formation d'intégration",
      "id-ID": "Akademi Daraz Express — Pelatihan Onboarding",
      ar: "أكاديمية داراز إكسبرس — التدريب التعريفي",
    },
    summary: {
      en: "Gamified learning and assessment for Daraz's delivery workforce — modules, scoring and a live dashboard tracking every delivery hero.",
      
      "fr-CA": "Apprentissage et évaluation ludifiés pour la main-d'œuvre de livraison de Daraz — modules, pointage et tableau de bord en direct suivant chaque héros de la livraison.",
      "id-ID": "Pembelajaran dan asesmen gamifikasi untuk tenaga pengiriman Daraz — modul, penilaian, dan dashboard langsung yang melacak setiap pahlawan pengiriman.",
      ar: "تعلم وتقييم تفاعلي لقوة توصيل داراز — وحدات وتنقيط ولوحة تحكم حية تتابع كل بطل توصيل.",
    },
    body: {
      en: [
        "Intwish developed a gamified learning and assessment app for Daraz's delivery workforce.",
        "The app included modules on route preparation, customer interaction and professional conduct. Scores and progress were tracked on an online dashboard to monitor the training effectiveness and readiness of each delivery hero across Pakistan.",
      ],
      
      "fr-CA": [
        "Intwish a développé une application d'apprentissage et d'évaluation ludifiées pour la main-d'œuvre de livraison de Daraz.",
        "L'application comprenait des modules sur la préparation des itinéraires, l'interaction client et la conduite professionnelle. Les scores et la progression étaient suivis sur un tableau de bord en ligne pour surveiller l'efficacité de la formation et l'état de préparation de chaque héros de la livraison à travers le Pakistan.",
      ],
      "id-ID": [
        "Intwish mengembangkan aplikasi pembelajaran dan asesmen gamifikasi untuk tenaga pengiriman Daraz.",
        "Aplikasi ini mencakup modul persiapan rute, interaksi pelanggan, dan perilaku profesional. Skor dan progres dilacak di dashboard online untuk memantau efektivitas pelatihan dan kesiapan setiap pahlawan pengiriman di seluruh Pakistan.",
      ],
      ar: [
        "طورت إنترويش تطبيقاً تفاعلياً للتعلم والتقييم لقوة التوصيل لدى داراز.",
        "شمل التطبيق وحدات عن تجهيز المسار والتفاعل مع العملاء والسلوك المهني. وتم تتبع الدرجات والتقدم على لوحة تحكم إلكترونية لمراقبة فعالية التدريب وجاهزية كل بطل توصيل في جميع أنحاء باكستان.",
      ],
    },
    metrics: [
      {
        value: { en: "2,000+",  "fr-CA": "2 000+", "id-ID": "2.000+", ar: "+2,000" },
        label: {
          en: "Riders trained & hired since",
          
          "fr-CA": "Coursiers formés et embauchés depuis",
          "id-ID": "Pengendara dilatih & direkrut sejak",
          ar: "سائق تدرب وعُيّن منذ ذلك الحين",
        },
      },
    ],
  },
  {
    slug: "shell-driver-training",
    client: "Shell",
    date: "2021",
    industry: {
      en: "Energy",
      
      "fr-CA": "Énergie",
      "id-ID": "Energi",
      ar: "الطاقة",
    },
    image: "/img/portfolio/Portfolio14.webp",
    title: {
      en: "3D Driver Training Simulation",
      
      "fr-CA": "Simulation 3D de formation des conducteurs",
      "id-ID": "Simulasi Pelatihan Pengemudi 3D",
      ar: "محاكاة ثلاثية الأبعاد لتدريب السائقين",
    },
    summary: {
      en: "Standardized, engaging 3D safety training for Shell's commercial drivers across Pakistan — from defensive driving to emergency response.",
      
      "fr-CA": "Une formation 3D à la sécurité normalisée et engageante pour les conducteurs commerciaux de Shell partout au Pakistan — de la conduite défensive à l'intervention d'urgence.",
      "id-ID": "Pelatihan keselamatan 3D yang terstandarisasi dan menarik untuk pengemudi komersial Shell di seluruh Pakistan — dari mengemudi defensif hingga respons darurat.",
      ar: "تدريب سلامة ثلاثي الأبعاد معياري وجذاب لسائقي شل التجاريين في جميع أنحاء باكستان — من القيادة الدفاعية إلى الاستجابة للطوارئ.",
    },
    body: {
      en: [
        "Intwish introduced a 3D simulation-based training program for Shell's commercial drivers across Pakistan.",
        "Topics included defensive driving, road regulations, vehicle rollover prevention, fire safety, emergency response, PPE usage and safe loading procedures — ensuring standardized and engaging safety training across Shell's entire fleet.",
      ],
      
      "fr-CA": [
        "Intwish a introduit un programme de formation basé sur la simulation 3D pour les conducteurs commerciaux de Shell partout au Pakistan.",
        "Les sujets comprenaient la conduite défensive, les règlements de la route, la prévention du renversement des véhicules, la sécurité incendie, l'intervention d'urgence, l'utilisation des EPI et les procédures de chargement sécuritaire — garantissant une formation à la sécurité normalisée et engageante pour toute la flotte de Shell.",
      ],
      "id-ID": [
        "Intwish memperkenalkan program pelatihan berbasis simulasi 3D untuk pengemudi komersial Shell di seluruh Pakistan.",
        "Topiknya mencakup mengemudi defensif, regulasi jalan, pencegahan terguling kendaraan, keselamatan kebakaran, respons darurat, penggunaan APD, dan prosedur pemuatan yang aman — memastikan pelatihan keselamatan yang terstandarisasi dan menarik di seluruh armada Shell.",
      ],
      ar: [
        "قدمت إنترويش برنامج تدريب قائماً على محاكاة ثلاثية الأبعاد لسائقي شل التجاريين في جميع أنحاء باكستان.",
        "شملت الموضوعات القيادة الدفاعية وقواعد الطريق والوقاية من انقلاب المركبات والسلامة من الحرائق والاستجابة للطوارئ واستخدام معدات الوقاية وإجراءات التحميل الآمن — لضمان تدريب سلامة معياري وجذاب لأسطول شل بالكامل.",
      ],
    },
    metrics: [
      {
        value: { en: "2,000",  "fr-CA": "2 000", "id-ID": "2.000", ar: "2,000" },
        label: {
          en: "Truck drivers trained",
          
          "fr-CA": "Conducteurs de camions formés",
          "id-ID": "Pengemudi truk dilatih",
          ar: "سائق شاحنة تلقى التدريب",
        },
      },
    ],
  },
  {
    slug: "sbc-knowledge-gate",
    client: "Saudi Competitiveness & Business Center (SCBC)",
    date: "2021",
    industry: {
      en: "Government",
      "fr-CA": "Gouvernement",
      "id-ID": "Pemerintahan",
      ar: "القطاع الحكومي",
    },
    image: "/img/portfolio/Portfolio15.webp",
    title: {
      en: "Knowledge Gate Portal — Enterprise Knowledge & Performance Engine",
      "fr-CA": "Portail Knowledge Gate — Moteur de connaissances et de performance d'entreprise",
      "id-ID": "Portal Knowledge Gate — Mesin Pengetahuan & Performa Enterprise",
      ar: "بوابة Knowledge Gate — المنظومة المؤسسية لإدارة المعرفة والأداء",
    },
    summary: {
      en: "An enterprise-grade modular portal centralizing service procedures, performance management, training, and quality monitoring across 10+ Saudi government entities for all SCBC employees nationwide.",
      "fr-CA": "Un portail modulaire de calibre entreprise centralisant les procédures de service, la gestion de la performance, la formation et le suivi de la qualité dans plus de 10 entités gouvernementales saoudiennes pour tous les employés de SCBC à l'échelle nationale.",
      "id-ID": "Portal modular kelas enterprise yang mensentralisasi prosedur layanan, manajemen performa, pelatihan, dan pemantauan kualitas di 10+ entitas pemerintah Arab Saudi untuk seluruh karyawan SCBC secara nasional.",
      ar: "بوابة معيارية بمعايير مؤسسية تتمركز حول إجراءات الخدمات الحكومية وإدارة الأداء والتدريب ومراقبة الجودة عبر أكثر من 10 جهات حكومية لكافة موظفي المركز السعودي للتنافسية والأعمال على مستوى المملكة.",
    },
    body: {
      en: [
        "Intwish developed the Knowledge Gate Portal for the Saudi Competitiveness & Business Center (SCBC, formerly SBC) — a modular, enterprise-grade digital platform commissioned to centralize government service data, elevate public service delivery standards, and support operational decision-making across Saudi ministries and public service entities in line with Saudi Vision 2030.",
        "Engineered around a Google-inspired smart search engine, Knowledge Gate integrates service data across 10+ partner entities — including the Ministry of Commerce, ZATCA, Qiwa, MISA, MOMRAH, MHRSD, and the Federation of Saudi Chambers. The engine features predictive search-as-you-type, automated query suggestion algorithms, personalized recently searched items, and organization-wide common query highlights. By structuring complex government procedures, fees, documentation requirements, and SLAs into intuitive digital taxonomy cards, the portal drastically reduces query resolution Turn-Around-Time (TAT) for front-desk staff and call center representatives.",
        "To maintain content accuracy in a dynamic regulatory environment, the platform incorporates a Wikipedia-style community content update framework. Frontline representatives can suggest updates, submit procedural clarifications, and recommend helpful shortcuts, which pass through a multi-stage administrative review workflow before live publication. Complementing search capability is an integrated Online Assessment & Survey Suite capable of rendering 15+ question types — enabling L&D administrators to deploy knowledge checks, survey employee operational feedback, track individual skill gaps, and export granular demographic analytics.",
        "Knowledge Gate serves as a unified digital ecosystem by offering single sign-on (SSO) integration with the SCBC gamified training suite ('Reaching the Top'). Employees maintain a single profile tracking both reference activity and training achievements, skill badges, trust meters, and workshop schedules. Built on a resilient Node.js, Express, and MongoDB multi-tier architecture with JWT/RSA security, the solution supports 300+ concurrent active sessions with zero latency across browser and government intranet environments.",
      ],
      "fr-CA": [
        "Intwish a développé le portail Knowledge Gate pour le Saudi Competitiveness & Business Center (SCBC, anciennement SBC) — une plateforme numérique modulaire de calibre entreprise conçue pour centraliser les données des services gouvernementaux, élever les normes de prestation des services publics et soutenir la prise de décision opérationnelle dans les ministères et entités publiques saoudiens conformément à la Vision 2030 saoudienne.",
        "Conçu autour d'un moteur de recherche intelligent inspiré de Google, Knowledge Gate intègre les données de service de plus de 10 entités partenaires — notamment le ministère du Commerce, ZATCA, Qiwa, MISA, MOMRAH, MHRSD et la Fédération des chambres saoudiennes. Le moteur intègre la saisie intuitive prédictive, des algorithmes de suggestion automatique de requêtes, des éléments récents personnalisés et des raccourcis de requêtes courantes. En structurant les procédures complexes, frais, documents requis et SLA en cartes taxonomiques numériques, le portail réduit drastiquement le temps de traitement (TAT) des demandes pour le personnel de réception et les agents du centre d'appels.",
        "Pour maintenir l'exactitude du contenu dans un environnement réglementaire dynamique, la plateforme intègre un cadre de mise à jour communautaire de style Wikipédia. Les représentants de première ligne peuvent suggérer des mises à jour, soumettre des clarifications de procédure et recommander des raccourcis utiles, qui passent par un flux de travail d'approbation administrative multi-étapes avant publication. Complétant la recherche, une suite d'évaluations et de sondages en ligne prend en charge plus de 15 types de questions — permettant aux administrateurs RH de déployer des tests de connaissances, sonder le personnel et exporter des analyses démographiques.",
        "Knowledge Gate sert d'écosystème numérique unifié en offrant une intégration à authentification unique (SSO) avec la suite de formation ludifiée de SCBC (« Reaching the Top »). Les employés conservent un profil unique suivant à la fois l'activité de référence et les réalisations de formation, badges de compétences, métriques de confiance et calendriers d'ateliers. Conçue sur une architecture multi-niveaux résiliente Node.js, Express et MongoDB avec sécurité JWT/RSA, la solution prend en charge 300+ sessions actives simultanées sans latence.",
      ],
      "id-ID": [
        "Intwish mengembangkan Portal Knowledge Gate untuk Saudi Competitiveness & Business Center (SCBC, sebelumnya SBC) — platform digital modular kelas enterprise yang dipesan untuk mensentralisasi data layanan pemerintah, meningkatkan standar layanan publik, dan mendukung pengambilan keputusan operasional di seluruh kementerian dan entitas publik Arab Saudi sejalan dengan Visi Saudi 2030.",
        "Dirancang di sekitar mesin pencari cerdas terinspirasi Google, Knowledge Gate mengintegrasikan data layanan di 10+ entitas mitra — termasuk Kementerian Perdagangan, ZATCA, Qiwa, MISA, MOMRAH, MHRSD, dan Federasi Kamar Saudi. Mesin ini memiliki pencarian prediktif saat mengetik, algoritma saran kueri otomatis, item yang baru saja dicari secara personal, dan sorotan kueri umum seluruh organisasi. Dengan menyusun prosedur pemerintah yang kompleks, biaya, persyaratan dokumen, dan SLA ke dalam kartu taksonomi digital yang intuitif, portal ini secara drastis mengurangi waktu penyelesaian kueri (TAT) untuk staf meja depan dan perwakilan pusat panggilan.",
        "Untuk mempertahankan akurasi konten dalam lingkungan regulasi yang dinamis, platform ini menggabungkan kerangka kerja pembaruan konten komunitas bergaya Wikipedia. Perwakilan garis depan dapat menyarankan pembaruan, mengajukan klarifikasi prosedur, dan merekomendasikan pintasan yang berguna, yang melalui alur kerja peninjauan administratif multi-tahap sebelum publikasi langsung. Melengkapi kemampuan pencarian adalah Suite Asesmen & Survei Online terintegrasi yang mampu menampilkan 15+ tipe pertanyaan — memungkinkan administrator L&D menerapkan pemeriksaan pengetahuan, mengukur umpan balik operasional karyawan, dan mengekspor analitik demografis terperinci.",
        "Knowledge Gate berfungsi sebagai ekosistem digital terpadu dengan menawarkan integrasi single sign-on (SSO) dengan suite pelatihan gamifikasi SCBC ('Reaching the Top'). Karyawan mempertahankan satu profil yang melacak aktivitas referensi dan pencapaian pelatihan, lencana keterampilan, meteran kepercayaan, dan jadwal lokakarya. Dibangun di atas arsitektur multi-tingkat Node.js, Express, dan MongoDB yang tangguh dengan keamanan JWT/RSA, solusi ini mendukung 300+ sesi aktif bersamaan dengan nol latensi di seluruh lingkungan browser dan intranet pemerintah.",
      ],
      ar: [
        "طورت إنترويش بوابة Knowledge Gate لصالح المركز السعودي للتنافسية والأعمال (SCBC) — وهي منصة رقمية معيارية بمعايير مؤسسية صُممت لمركزة بيانات الخدمات الحكومية، ورفع معايير تقديم الخدمات العامة، ودعم اتخاذ القرارات التشغيلية في كافة الوزارات والجهات الحكومية السعودية تماشياً مع رؤية السعودية 2030.",
        "بُنيت المنصة وحول محرك بحث ذكي مستوحى من تقنيات Google، حيث تجعل بوابة Knowledge Gate بيانات الخدمات متاحة ومترابطة عبر أكثر من 10 جهات حكومية شريكة — تشمل وزارة التجارة، وهيئة الزكاة والضريبة والجمارك (ZATCA)، ومنصة قوى، ووزارة الاستثمار، ووزارة الشؤون البلدية والقروية والإسكان، ووزارة الموارد البشرية، وإتحاد الغرف السعودية. ويتضمن محرك البحث خاصية الإكمال التلقائي والتنبؤ بالاستعلامات، والبحث السريع، والروابط السريعة بناءً على عمليات البحث الأخيرة والبحث الشائع. ومن خلال تنظيم الإجراءات الحكومية المعقدة، والرسوم، والمتطلبات، والمدد الزمنية في بطاقات تصنيف رقمية منظمة، تساهم المنصة في خفض زمن الاستجابة (TAT) لموظفي الخطوط الأمامية ومراكز الاتصال بشكل حاسم.",
        "ولضمان دقة واستمرارية تحديث البيانات في البيئة التنظيمية والتشريعية، تتضمن المنصة إطار عمل مجتمعي لتحديث المحتوى مستوحى من نظام Wikipedia، حيث يمكن لموظفي الخطوط الأمامية اقتراح التعديلات وإضافة الملاحظات التوضيحية والتي تمر عبر مسار تدقيق واعتماد إداري محكم قبل نشرها. وتتكامل البوابة مع محرك تقييمات واستبيانات إلكتروني متطور يغطي أكثر من 15 نوعاً من الأسئلة — مما يتيح لإدارات التطوير والتدريب قياس المعرفة، وتتبع الفجوات المهارية، واستخراج تقارير التحليلات الديموغرافية والتنظيمية بصيغ متعددة (Excel/PDF).",
        "وتشكل البوابة بيئة رقمية موحدة بفضل تكاملها عبر نظام الدخول الموحد (SSO) مع منصة التدريب والتأهيل اللعبي التابعة للمركز ('Reaching the Top'). حيث يمتلك كل موظف ملفاً شخصياً موحداً يربط بين الأداء المعرفي وإنجازات التدريب، والشارات المهارية، ومؤشرات الثقة، وجدول الدورات. بُنيت المنصة على بنية تحتية مؤسسية متعددة الطبقات باستخدام Node.js وExpress وMongoDB مع حماية عالية عبر بروتوكولات JWT/RSA، لتدعم أكثر من 300 جلسة نشطة متزامنة بدون أي تأخير عبر شبكة المتصفحات والشبكات الداخلية الحكومية.",
      ],
    },
    metrics: [
      {
        value: { en: "10+", "fr-CA": "10+", "id-ID": "10+", ar: "+10" },
        label: {
          en: "Integrated Saudi ministries & government entities",
          "fr-CA": "Ministères saoudiens & entités gouvernementales intégrés",
          "id-ID": "Kementerian & entitas pemerintah Arab Saudi terintegrasi",
          ar: "وزارة وجهة حكومية سعودية مرتبطة بالمنظومة",
        },
      },
      {
        value: { en: "15+", "fr-CA": "15+", "id-ID": "15+", ar: "+15" },
        label: {
          en: "Question types in survey & assessment engine",
          "fr-CA": "Types de questions dans le moteur d'évaluation",
          "id-ID": "Tipe pertanyaan di mesin survei & asesmen",
          ar: "نوع أسئلة في محرك التقييمات والاستبيانات",
        },
      },
      {
        value: { en: "TAT Reduction", "fr-CA": "Réduction du TAT", "id-ID": "Reduksi TAT", ar: "خفض زمن الاستجابة" },
        label: {
          en: "Instant query resolution via smart search & autosuggest",
          "fr-CA": "Résolution instantanée grâce à la recherche intelligente",
          "id-ID": "Resolusi kueri instan via pencarian cerdas & autosuggest",
          ar: "حل فوري للاستفسارات عبر البحث الذكي والإكمال التلقائي",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Unified SSO & profile integration for all SCBC staff",
          "fr-CA": "Intégration SSO & profil unifié pour tout le personnel SCBC",
          "id-ID": "Integrasi SSO & profil terpadu untuk seluruh staf SCBC",
          ar: "ربط موحد للدخول والملفات الشخصية لكافة موظفي المركز",
        },
      },
    ],
  },
  {
    slug: "sbc-reaching-top",
    client: "Saudi Competitiveness & Business Center (SCBC)",
    date: "2023",
    industry: {
      en: "Government & Customer Service",
      "fr-CA": "Gouvernement et service à la clientèle",
      "id-ID": "Pemerintahan & Layanan Pelanggan",
      ar: "القطاع الحكومي وخدمة العملاء",
    },
    image: "/img/portfolio/Portfolio16.webp",
    title: {
      en: "Reaching the Top — Mandatory Gamified Customer Service Training Suite",
      "fr-CA": "Reaching the Top — Suite ludifiée de formation obligatoire au service client",
      "id-ID": "Reaching the Top — Suite Pelatihan Layanan Pelanggan Gamifikasi Wajib",
      ar: "Reaching the Top — منصة التدريب والتأهيل اللعبي الإلزامي لخدمة العملاء",
    },
    summary: {
      en: "Reaching the Top — A 3-part 30-day gamified career simulation transforming mandatory customer service training for all Saudi Competitiveness & Business Center (SCBC) employees nationwide into an interactive learning journey.",
      "fr-CA": "Reaching the Top — Une simulation de carrière ludifiée de 30 jours en 3 parties transformant la formation obligatoire au service client pour tous les employés du Saudi Competitiveness & Business Center (SCBC) à l'échelle nationale.",
      "id-ID": "Reaching the Top — Simulasi karir gamifikasi 30 hari 3 bagian yang mengubah pelatihan layanan pelanggan wajib untuk seluruh karyawan Saudi Competitiveness & Business Center (SCBC) secara nasional.",
      ar: "Reaching the Top — محاكاة مهنية تفاعلية مقسمة إلى 3 أجزاء على مدار 30 يوماً تحول التدريب الإلزامي لخدمة العملاء لكافة موظفي المركز السعودي للتنافسية والأعمال على مستوى المملكة إلى رحلة تعلم غامرة.",
    },
    body: {
      en: [
        "Intwish developed 'Reaching the Top' — a comprehensive digital customer service training transformation commissioned by the Saudi Competitiveness & Business Center (SCBC, formerly SBC). Deployed as mandatory onboarding and operational training for all customer service personnel across Saudi Arabia, the platform replaced traditional lectures and static manuals with a multi-phase gamified career simulation designed to elevate public service delivery standards.",
        "The core experience unfolds over a 3-part, 30-day narrative simulation arc. In Part 1 (Days 1–14), new recruits step into the SCBC building under the guidance of line manager Abdullah, mastering foundational service etiquette, customer personality assessment, data privacy protocols, and handling complex inquiries to qualify for promotion to Branch Manager. In Part 2 (Days 15–21), players manage branch operations independently while peer-training junior staff. In Part 3 (Days 22–30), players enter an 8-day friendly leadership competition against Abdullah to earn the Regional Branch Manager role.",
        "Engineered around real-world Saudi public sector interactions, the simulation incorporates Situational Judgment Questions (SJQs), interactive dialogue trees with 4 distinct customer personality types, crisis de-escalation scenarios, and data security compliance. Gamification mechanics — including custom avatar creation, an in-game skill shop, performance points, and achievement badges like 'Survived a Sunday' — drive engagement, backed by 100% bilingual story scripts in Modern Standard Arabic and English.",
        "Built using HTML5 and JavaScript for seamless cross-platform performance across browser and intranet environments, the platform integrates directly into Active Directory and SCORM-compliant Learning Management Systems (LMS). A real-time Admin Analytics Dashboard gives HR and L&D leaders full visibility into employee completion status, skill competency scores, and regional branch performance benchmarks.",
      ],
      "fr-CA": [
        "Intwish a développé « Reaching the Top » — une transformation numérique complète de la formation au service client commandée par le Saudi Competitiveness & Business Center (SCBC, anciennement SBC). Déployée en tant que formation initiale et opérationnelle obligatoire pour tout le personnel du service client en Arabie Saoudite, la plateforme a remplacé les cours traditionnels et les manuels statiques par une simulation de carrière ludifiée à plusieurs phases conçue pour élever les normes de prestation de services publics.",
        "L'expérience principale se déroule sur un arc de simulation narrative en 3 parties et 30 jours. Dans la partie 1 (jours 1 à 14), les nouvelles recrues découvrent le centre SCBC sous la direction du responsable Abdullah, maîtrisant l'étiquette du service, l'évaluation des personnalités des clients, les protocoles de confidentialité des données et la gestion des demandes complexes pour être promus au poste de gestionnaire de succursale. Dans la partie 2 (jours 15 à 21), les joueurs gèrent de manière autonome les opérations de succursale tout en formant de jeunes collaborateurs. Dans la partie 3 (jours 22 à 30), les joueurs s'engagent dans un défi de leadership amical de 8 jours contre Abdullah pour obtenir le poste de directeur régional.",
        "Conçue autour d'interactions réelles du secteur public saoudien, la simulation intègre des questions de jugement situationnel (SJQ), des arbres de dialogue interactifs avec 4 types de personnalité de clients, des scénarios de désescalade de crise et le respect de la sécurité des données. Les mécaniques de ludification — créations d'avatars, boutique de compétences, points de performance et badges d'accomplissement — stimulent l'engagement, soutenues par des scripts de story 100 % bilingues en arabe moderne et en anglais.",
        "Développée en HTML5 et JavaScript pour des performances fluides sur les navigateurs et intranets, la plateforme s'intègre directement à Active Directory et aux systèmes LMS compatibles SCORM. Un tableau de bord d'analyse d'administration en temps réel offre aux responsables RH une visibilité complète sur le statut d'achèvement, les scores de compétences et les benchmarks régionaux.",
      ],
      "id-ID": [
        "Intwish mengembangkan 'Reaching the Top' — transformasi pelatihan layanan pelanggan digital komprehensif yang dipesan oleh Saudi Competitiveness & Business Center (SCBC, sebelumnya SBC). Diimplementasikan sebagai pelatihan onboarding dan operasional wajib bagi seluruh personel layanan pelanggan di Saudi Arabia, platform ini menggantikan kuliah tradisional dan manual statis dengan simulasi karir gamifikasi multi-fase yang dirancang untuk meningkatkan standar layanan publik.",
        "Pengalaman utama berlangsung dalam alur simulasi naratif 3 bagian selama 30 hari. Pada Bagian 1 (Hari 1–14), rekrutan baru memasuki gedung SCBC di bawah bimbingan manajer linis Abdullah, menguasai etika layanan dasar, penilaian kepribadian pelanggan, protokol privasi data, dan penanganan pertanyaan kompleks hingga dipromosikan menjadi Manajer Cabang. Pada Bagian 2 (Hari 15–21), pemain mengelola operasi cabang secara independen sambil melatih staf junior. Pada Bagian 3 (Hari 22–30), pemain mengikuti kompetisi kepemimpinan 8 hari melawan Abdullah untuk meraih posisi Manajer Cabang Regional.",
        "Dirancang di sekitar interaksi sektor publik Saudi dunia nyata, simulasi ini menggabungkan Pertanyaan Penilaian Situasi (SJQ), pohon dialog interaktif dengan 4 tipe kepribadian pelanggan, skenario de-eskalasi krisis, dan kepatuhan keamanan data. Mekanika gamifikasi — pembuatan avatar kustom, toko keterampilan in-game, poin kinerja, dan lencana pencapaian seperti 'Survived a Sunday' — mendorong keterlibatan, didukung oleh skrip cerita 100% bilingual dalam Bahasa Arab Standar Modern dan Bahasa Inggris.",
        "Berasaskan HTML5 dan JavaScript untuk kinerja lintas platform yang lancar di lingkungan browser dan intranet, platform ini terintegrasi langsung ke Active Directory dan LMS yang kompatibel dengan SCORM. Panel Analitik Admin real-time memberikan kepemimpinan SDM visibilitas penuh atas status penyelesaian karyawan, skor kompetensi keterampilan, dan tolok ukur kinerja cabang regional.",
      ],
      ar: [
        "طورت إنترويش برنامج \"Reaching the Top\" — وهو التحول الرقمي الشامل لتدريب خدمة العملاء بتكليف من المركز السعودي للتنافسية والأعمال (SCBC). تم إطلاقه كتدريب إلزامي للتأهيل والعمليات لجميع موظفي خدمة العملاء في جميع أنحاء المملكة العربية السعودية، حيث استبدلت المنظومة المحاضرات التقليدية والأدولة الثابتة بمحاكاة مهنية معبأة بالألعاب متعددة المراحل لرفع أداء الخدمة الحكومية.",
        "تتوزع التجربة عبر محاكاة سردية مقسمة إلى 3 أجزاء على مدار 30 يوماً. في الجزء الأول (الأيام 1–14)، يبدأ الموظفون الجدد رحلتهم في مقر المركز السعودي للتنافسية والأعمال تحت إشراف المدير المباشر عبدالله، ويتعلمون قواعد اللياقة والتعامل مع العملاء، وتقييم شخصيات المراجعين، وحماية البيانات، وإدارة الحالات المعقدة حتى الترقي لمنصب مدير فرع. في الجزء الثاني (الأيام 15–21)، يدير الموظفون العمليات اليومية للفرع باستقلالية مع تدريب زميل جديد. في الجزء الثالث (الأيام 22–30)، يدخل اللاعبون تحدي قيادة ودياً لمدة 8 أيام ضد عبدالله للفوز بمنصب مدير الفرع الإقليمي.",
        "صُممت المحاكاة بناءً على سيناريوهات واقعية من القطاع الحكومي السعودي، وتضمنت أسئلة تقييم المواقف (SJQs)، وشجرات حوار تفاعلية تغطي 4 شخصيات مختلفة للعملاء، وسيناريوهات احتواء الأزمات، والامتثال لأمن المعلومات. وتعمل آليات التحفيز باللعب — كإنشاء الصور الرمزية (Avatar)، ومتجر المهارات، ونقاط الأداء، وأوسمة الإنجاز — على تعزيز المشاركة، مع دعم كامل للغتين العربية والإنجليزية بنسبة 100%.",
        "بُنيت المنصة باستخدام HTML5 وJavaScript لضمان أداء عالي السرعة عبر المتصفحات والشبكة الداخلية، وتتكامل مباشرة مع Active Directory وأنظمة إدارة التعلم LMS المتوافقة مع SCORM. وتوفر لوحة تحكم الإدارة تحليلات فورية تمنح قيادات الموارد البشرية والتدريب رؤية شاملة لمعدلات الإكمال، ودرجات الكفاءة، ومؤشرات الأداء عبر فروع المركز السعودي للتنافسية والأعمال.",
      ],
    },
    metrics: [
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Mandatory training for all SCBC CS employees",
          "fr-CA": "Formation obligatoire pour tous les employés SC de SCBC",
          "id-ID": "Pelatihan wajib untuk semua karyawan CS SCBC",
          ar: "تدريب إلزامي لجميع موظفي خدمة العملاء بالمركز",
        },
      },
      {
        value: { en: "30 Days", "fr-CA": "30 jours", "id-ID": "30 Hari", ar: "30 يوماً" },
        label: {
          en: "3-part gamified career simulation journey",
          "fr-CA": "Simulation de carrière ludifiée en 3 parties",
          "id-ID": "Perjalanan simulasi karir gamifikasi 3 bagian",
          ar: "رحلة محاكاة مهنية تفاعلية من 3 أجزاء",
        },
      },
      {
        value: { en: "4", "fr-CA": "4", "id-ID": "4", ar: "4" },
        label: {
          en: "Customer personality types & scenario SJQs",
          "fr-CA": "Types de personnalité client & SJQs de scénario",
          "id-ID": "Tipe kepribadian pelanggan & SJQ skenario",
          ar: "أنماط شخصيات العملاء وسيناريوهات تقييم المواقف",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Bilingual Arabic & English LMS tracking",
          "fr-CA": "Suivi LMS bilingue arabe et anglais",
          "id-ID": "Pelacakan LMS bilingual Arab & Inggris",
          ar: "تتبع أنظمة التعلم ثنائي اللغة (عربي وإنجليزي)",
        },
      },
    ],
  },
  {
    slug: "parco-internship",
    client: "PARCO",
    date: "2020",
    industry: {
      en: "Oil & Gas / Energy",
      "fr-CA": "Pétrole et gaz / Énergie",
      "id-ID": "Minyak & Gas / Energi",
      ar: "النفط والغاز / الطاقة",
    },
    image: "/img/case_studies/parco-internship.png",
    title: {
      en: "Elevate — Gamified Internship Recruitment Assessment",
      "fr-CA": "Elevate — Évaluation ludifiée de recrutement des stagiaires",
      "id-ID": "Elevate — Asesmen Rekrutmen Magang Gamifikasi",
      ar: "Elevate — تقييم توظيف المتدربين التفاعلي",
    },
    summary: {
      en: "Elevate — A customized digital internship assessment drive for PAK-ARAB REFINERY LIMITED (PARCO), evaluating engineering and business interns across refinery scenarios, cognitive games, and E-Tray simulations.",
      "fr-CA": "Elevate — Une campagne d'évaluation numérique des stages pour PAK-ARAB REFINERY LIMITED (PARCO), évaluant les stagiaires ingénieurs et de gestion.",
      "id-ID": "Elevate — Kampanye asesmen magang digital kustom untuk PAK-ARAB REFINERY LIMITED (PARCO), menilai pemagang teknik dan bisnis.",
      ar: "Elevate — حملة تقييم رقمية مخصصة لاختيار المتدربين في شركة PARCO عبر سيناريوهات التكرير وألعاب كوجنيتيف ومحاكاة الصندوق الإلكتروني.",
    },
    body: {
      en: [
        "Intwish developed 'Elevate', a gamified internship recruitment platform for Pak-Arab Refinery Limited (PARCO), Pakistan's premier energy and logistics joint venture. The initiative transformed their internship selection into a high-engagement digital workplace assessment.",
        "The candidate journey immersed applicants in refinery logistics, pipeline operations, and energy management scenarios. The experience opened with timed cognitive mini-games measuring numerical agility, spatial reasoning, and analytical problem-solving.",
        "Applicants then completed energy sector Situational Judgment Tests (SJTs) measuring operational safety, environmental compliance, and cross-functional collaboration, followed by an E-Tray Inbox Simulation for high-volume task prioritization.",
        "The system streamed real-time evaluation metrics into PARCO's HR Portal, featuring automated psychometric scoring, university benchmarking, and ranked intern profiles for data-driven selection.",
      ],
      "fr-CA": [
        "Intwish a développé « Elevate », une plateforme de recrutement ludifiée de stagiaires pour Pak-Arab Refinery Limited (PARCO). L'initiative a transformé la sélection des stagiaires en une évaluation numérique engageante.",
        "Le parcours des candidats plongeait les postulants dans des scénarios de logistique de raffinerie et d'exploitation de pipelines. L'évaluation s'ouvrait sur des mini-jeux cognitifs chrono-métrés.",
        "Les candidats complétaient ensuite des tests de jugement situationnel (SJT) axés sur la sécurité opérationnelle et la conformité environnementale, suivis d'une simulation E-Tray.",
        "Le système transmettait les métriques d'évaluation en temps réel vers le portail RH de PARCO, fournissant un classement automatisé des candidats.",
      ],
      "id-ID": [
        "Intwish mengembangkan 'Elevate', platform rekrutmen magang gamifikasi untuk Pak-Arab Refinery Limited (PARCO). Inisiatif ini mengubah seleksi magang menjadi asesmen digital yang imersif.",
        "Perjalanan kandidat membenamkan pelamar dalam skenario logistik kilang, operasi pipa, dan manajemen energi. Pengalaman dibuka dengan mini-game kognitif berbatas waktu.",
        "Pelamar kemudian menyelesaikan Tes Penilaian Situasi (SJT) sektor energi yang mengukur keselamatan operasional dan kepatuhan lingkungan, diikuti oleh Simulasi E-Tray.",
        "Sistem mengalirkan metrik evaluasi real-time ke Portal SDM PARCO, menyediakan penilaian psikometri otomatis dan pemeringkatan kandidat.",
      ],
      ar: [
        "طورت إنترويش منصة 'Elevate' للتوظيف التفاعلي لاختيار المتدربين لصالح شركة مصفاة الباكستان والعرب المحدودة (PARCO). وجددت المبادرة اختيار المتدربين عبر بيئة تقييم رقمية.",
        "خاض المتدربون المتقدمون سيناريوهات عمليات تكرير النفط والخدمات اللوجستية للأنابيب. وأطلقت المنظومة ألعاباً معرفية مؤطرة بزمن لقياس التحليل والرؤية الهندسية.",
        "ثم أكمل المتقدمون اختبارات تقييم المواقف (SJQs) في السلامة التشغيلية والامتثال البيئي، متبوعة بمحاكاة الصندوق الإلكتروني E-Tray.",
        "وضخت المنصة البيانات فورياً إلى لوحة تحكم الموارد البشرية لتصنيف خريجي الهندسة وإدارة الأعمال بدقة متناهية.",
      ],
    },
    metrics: [
      {
        value: { en: "Elevate", "fr-CA": "Elevate", "id-ID": "Elevate", ar: "Elevate" },
        label: {
          en: "Flagship internship assessment platform",
          "fr-CA": "Plateforme d'évaluation des stages phare",
          "id-ID": "Platform asesmen magang unggulan",
          ar: "منصة تقييم المتدربين التفاعلية",
        },
      },
      {
        value: { en: "50%", "fr-CA": "50 %", "id-ID": "50%", ar: "50%" },
        label: {
          en: "Faster candidate shortlisting turnaround",
          "fr-CA": "Présélection plus rapide des candidats",
          "id-ID": "Proses seleksi kandidat lebih cepat",
          ar: "تسريع فرز وتصفية المتقدمين",
        },
      },
      {
        value: { en: "3", "fr-CA": "3", "id-ID": "3", ar: "3" },
        label: {
          en: "Assessment modules (Cognitive, SJT, E-Tray)",
          "fr-CA": "Modules d'évaluation (Cognitif, SJT, E-Tray)",
          "id-ID": "Modul asesmen (Kognitif, SJT, E-Tray)",
          ar: "وحدات تقييم (معرفي، مواقف، صندوق إلكتروني)",
        },
      },
      {
        value: { en: "100%", "fr-CA": "100 %", "id-ID": "100%", ar: "100%" },
        label: {
          en: "Automated candidate ranking engine",
          "fr-CA": "Moteur de classement automatisé",
          "id-ID": "Mesin pemeringkat kandidat otomatis",
          ar: "محرك تصنيف آلي للمرشحين",
        },
      },
    ],
  },
  {
    slug: "ubl-recruitment",
    client: "UBL",
    industry: {
      en: "Banking",
      
      "fr-CA": "Secteur bancaire",
      "id-ID": "Perbankan",
      ar: "القطاع المصرفي",
    },
    image: "/img/case_studies/ubl-recruitment.png",
    title: {
      en: "Gamification of Management Trainee Recruitment",
      
      "fr-CA": "Ludification du recrutement des stagiaires en gestion",
      "id-ID": "Gamifikasi Rekrutmen Management Trainee",
      ar: "تحويل توظيف المتدربين الإداريين إلى لعبة",
    },
    summary: {
      en: "A gamified management trainee recruitment drive for UBL — 4,000+ applicants assessed through real-life work scenarios.",
      
      "fr-CA": "Une campagne de recrutement ludifiée de stagiaires en gestion pour UBL — plus de 4 000 candidats évalués via des scénarios de travail réels.",
      "id-ID": "Rekrutmen management trainee bergamifikasi untuk UBL — 4.000+ pelamar dinilai melalui skenario kerja nyata.",
      ar: "حملة توظيف تفاعلية للمتدربين الإداريين لصالح بنك UBL — تم تقييم أكثر من 4,000 متقدم عبر سيناريوهات عمل واقعية.",
    },
    body: {
      en: [
        "Intwish gamified United Bank Limited's (UBL) management trainee recruitment, replacing the traditional test with an engaging, scenario-driven assessment.",
        "Applicants were immersed in real-life work situations designed to surface the competencies and judgment UBL's talent team wanted to see.",
        "Over 4,000 assessments were completed, giving UBL a ranked, data-rich talent pool to shortlist from.",
      ],
      
      "fr-CA": [
        "Intwish a ludifié le recrutement des stagiaires en gestion d'United Bank Limited (UBL), remplaçant le test traditionnel par une évaluation engageante fondée sur des scénarios.",
        "Les candidats ont été plongés dans des situations de travail réelles conçues pour révéler les compétences et le jugement recherchés par l'équipe des talents d'UBL.",
        "Plus de 4 000 évaluations ont été complétées, offrant à UBL un vivier de talents classé et riche en données.",
      ],
      "id-ID": [
        "Intwish menggamifikasi rekrutmen management trainee United Bank Limited (UBL), menggantikan tes tradisional dengan asesmen berbasis skenario yang menarik.",
        "Pelamar dibenamkan dalam situasi kerja nyata yang dirancang untuk mengungkap kompetensi dan penilaian yang diinginkan tim talenta UBL.",
        "Lebih dari 4.000 asesmen diselesaikan, memberi UBL kumpulan talenta berperingkat dan kaya data untuk disaring.",
      ],
      ar: [
        "حوّلت إنترويش توظيف المتدربين الإداريين لدى بنك يونايتد ليمتد (UBL) إلى لعبة، فاستبدلت الاختبار التقليدي بتقييم تفاعلي قائم على سيناريوهات.",
        "انغمس المتقدمون في مواقف عمل واقعية صُممت لإبراز الكفاءات والحكم الذي تريده فرقة المواهب في UBL.",
        "أُنجز أكثر من 4,000 تقييم، مما منح UBL مجموعة مواهب مصنّفة وغنية بالبيانات لاختيار المرشحين.",
      ],
    },
    metrics: [
      {
        value: { en: "4,000+",  "fr-CA": "4 000+", "id-ID": "4.000+", ar: "+4,000" },
        label: {
          en: "Completed assessments",
          
          "fr-CA": "Évaluations complétées",
          "id-ID": "Asesmen selesai",
          ar: "تقييم مكتمل",
        },
      },
    ],
  },
  {
    slug: "abu-dawood-recruitment",
    client: "Abu Dawood",
    industry: {
      en: "FMCG / Consumer Goods",
      
      "fr-CA": "BGC / Biens de consommation",
      "id-ID": "FMCG / Barang Konsumen",
      ar: "السلع الاستهلاكية سريعة الحركة",
    },
    image: "/img/case_studies/abu-dawood-recruitment.png",
    title: {
      en: "Gamification of Management Trainee Recruitment",
      
      "fr-CA": "Ludification du recrutement des stagiaires en gestion",
      "id-ID": "Gamifikasi Rekrutmen Management Trainee",
      ar: "تحويل توظيف المتدربين الإداريين إلى لعبة",
    },
    summary: {
      en: "A gamified management trainee recruitment drive for Abu Dawood — 2,500+ applicants assessed through immersive real-life work scenarios.",
      
      "fr-CA": "Une campagne de recrutement ludifiée de stagiaires en gestion pour Abu Dawood — plus de 2 500 candidats évalués via des scénarios de travail immersifs.",
      "id-ID": "Rekrutmen management trainee bergamifikasi untuk Abu Dawood — 2.500+ pelamar dinilai melalui skenario kerja nyata yang imersif.",
      ar: "حملة توظيف تفاعلية للمتدربين الإداريين لصالح أبو داود — تم تقييم أكثر من 2,500 متقدم عبر سيناريوهات عمل واقعية غامرة.",
    },
    body: {
      en: [
        "Intwish gamified Abu Dawood's management trainee recruitment, moving it from a traditional test to an engaging, scenario-driven assessment.",
        "Candidates were placed in real-life work situations that revealed the competencies, judgment and fit Abu Dawood's talent team was looking for.",
        "More than 2,500 assessments were completed, delivering a ranked, high-quality candidate pool for final selection.",
      ],
      
      "fr-CA": [
        "Intwish a ludifié le recrutement des stagiaires en gestion d'Abu Dawood, passant d'un test traditionnel à une évaluation engageante fondée sur des scénarios.",
        "Les candidats ont été placés dans des situations de travail réelles qui ont révélé les compétences, le jugement et l'adéquation recherchés par l'équipe des talents d'Abu Dawood.",
        "Plus de 2 500 évaluations ont été complétées, offrant un vivier de candidats classé et de grande qualité pour la sélection finale.",
      ],
      "id-ID": [
        "Intwish menggamifikasi rekrutmen management trainee Abu Dawood, mengubahnya dari tes tradisional menjadi asesmen berbasis skenario yang menarik.",
        "Kandidat ditempatkan dalam situasi kerja nyata yang mengungkap kompetensi, penilaian, dan kesesuaian yang dicari tim talenta Abu Dawood.",
        "Lebih dari 2.500 asesmen diselesaikan, menghasilkan kumpulan kandidat berperingkat dan berkualitas tinggi untuk seleksi akhir.",
      ],
      ar: [
        "حوّلت إنترويش توظيف المتدربين الإداريين لدى أبو داود إلى لعبة، فاستبدلت الاختبار التقليدي بتقييم تفاعلي قائم على سيناريوهات.",
        "وُضع المرشحون في مواقف عمل واقعية كشفت عن الكفاءات والحكم والتوافق الذي تسعى إليه فرقة المواهب في أبو داود.",
        "أُنجز أكثر من 2,500 تقييم، مما وفّر مجموعة مرشحين مصنّفة وعالية الجودة للاختيار النهائي.",
      ],
    },
    metrics: [
      {
        value: { en: "2,500+",  "fr-CA": "2 500+", "id-ID": "2.500+", ar: "+2,500" },
        label: {
          en: "Completed assessments",
          
          "fr-CA": "Évaluations complétées",
          "id-ID": "Asesmen selesai",
          ar: "تقييم مكتمل",
        },
      },
    ],
  },
  {
    slug: "parco-recruitment",
    client: "PARCO (Parco-Gunvor)",
    date: "2024",
    industry: {
      en: "Oil & Gas / Energy",
      
      "fr-CA": "Pétrole et gaz / Énergie",
      "id-ID": "Minyak & Gas / Energi",
      ar: "النفط والغاز / الطاقة",
    },
    image: "/img/case_studies/parco-recruitment.png",
    title: {
      en: "Gamified Graduate Recruitment — Parco-Gunvor",
      
      "fr-CA": "Recrutement ludifié des diplômés — Parco-Gunvor",
      "id-ID": "Rekrutmen Lulusan Bergamifikasi — Parco-Gunvor",
      ar: "توظيف تفاعلي للخريجين — Parco-Gunvor",
    },
    summary: {
      en: "A gamified graduate recruitment drive run annually by Parco-Gunvor — 3,000 completed assessments every year across three consecutive years.",
      
      "fr-CA": "Une campagne de recrutement ludifiée des diplômés menée annuellement par Parco-Gunvor — 3 000 évaluations complétées chaque année durant trois années consécutives.",
      "id-ID": "Rekrutmen lulusan bergamifikasi yang dijalankan setiap tahun oleh Parco-Gunvor — 3.000 asesmen selesai setiap tahun selama tiga tahun berturut-turut.",
      ar: "حملة توظيف تفاعلية للخريجين تجري سنوياً لدى Parco-Gunvor — 3,000 تقييم مكتمل سنوياً على مدى ثلاث سنوات متتالية.",
    },
    body: {
      en: [
        "Intwish delivered Parco-Gunvor's gamified graduate recruitment assessment, run once a year for three consecutive years from 2024 to 2026.",
        "Each annual drive took thousands of applicants through immersive work scenarios, aptitude items and situational-judgement assessments aligned to the energy sector.",
        "With 3,000 completions every year, Parco-Gunvor gained a consistent, comparable and data-rich candidate pool for shortlisting and selection.",
      ],
      
      "fr-CA": [
        "Intwish a livré l'évaluation de recrutement ludifiée des diplômés de Parco-Gunvor, menée une fois par an durant trois années consécutives, de 2024 à 2026.",
        "Chaque campagne annuelle a fait passer des milliers de candidats par des scénarios de travail immersifs, des items d'aptitude et des évaluations de jugement situationnel adaptés au secteur de l'énergie.",
        "Avec 3 000 complétions chaque année, Parco-Gunvor a obtenu un vivier de candidats cohérent, comparable et riche en données pour la sélection.",
      ],
      "id-ID": [
        "Intwish menghadirkan asesmen rekrutmen lulusan bergamifikasi Parco-Gunvor, yang dijalankan setahun sekali selama tiga tahun berturut-turut dari 2024 hingga 2026.",
        "Setiap drive tahunan membawa ribuan pelamar melalui skenario kerja imersif, item aptitude, dan asesmen penilaian situasional yang selaras dengan sektor energi.",
        "Dengan 3.000 penyelesaian setiap tahun, Parco-Gunvor memperoleh kumpulan kandidat yang konsisten, sebanding, dan kaya data untuk disaring dan dipilih.",
      ],
      ar: [
        "قدّمت إنترويش تقييم التوظيف التفاعلي للخريجين لدى Parco-Gunvor، ويُجرى مرة كل عام على مدى ثلاث سنوات متتالية من 2024 إلى 2026.",
        "أخذت كل حملة سنوية آلاف المتقدمين عبر سيناريوهات عمل غامرة وبنود قدرات وتقييمات حكم مواقف تماشياً مع قطاع الطاقة.",
        "ومع 3,000 إكمال كل عام، حصل Parco-Gunvor على مجموعة مرشحين متسقة وقابلة للمقارنة وغنية بالبيانات لاختيارهم.",
      ],
    },
    metrics: [
      {
        value: { en: "3,000",  "fr-CA": "3 000", "id-ID": "3.000", ar: "3,000" },
        label: {
          en: "Completions per year",
          
          "fr-CA": "Complétions par an",
          "id-ID": "Penyelesaian per tahun",
          ar: "إكمال سنوي",
        },
      },
      {
        value: { en: "3",  "fr-CA": "3", "id-ID": "3", ar: "3" },
        label: {
          en: "Consecutive years run (2024–2026)",
          
          "fr-CA": "Trois années consécutives (2024-2026)",
          "id-ID": "Berturut-turut (2024–2026)",
          ar: "ثلاث سنوات متتالية (2024–2026)",
        },
      },
    ],
  },
  {
    slug: "descon-360",
    client: "Descon",
    industry: {
      en: "Engineering / Industrial",
      
      "fr-CA": "Ingénierie / Industriel",
      "id-ID": "Teknik / Industri",
      ar: "الهندسة / الصناعة",
    },
    image: "/img/case_studies/descon-360.png",
    title: {
      en: "360° Feedback System",
      
      "fr-CA": "Système de rétroaction 360°",
      "id-ID": "Sistem Umpan Balik 360°",
      ar: "نظام التقييم 360 درجة",
    },
    summary: {
      en: "A 360° feedback system for Descon — 300 employees assessed through a guided interface with automated, insight-rich reports.",
      
      "fr-CA": "Un système de rétroaction 360° pour Descon — 300 employés évalués via une interface guidée avec des rapports automatisés et riches en insights.",
      "id-ID": "Sistem umpan balik 360° untuk Descon — 300 karyawan dinilai melalui antarmuka terpandu dengan laporan otomatis yang kaya wawasan.",
      ar: "نظام تقييم 360 درجة لصالح Descon — تم تقييم 300 موظف عبر واجهة موجّهة مع تقارير آلية غنية بالرؤى.",
    },
    body: {
      en: [
        "Intwish deployed its 360° feedback platform for Descon, supporting leadership development, performance evaluation and self-awareness.",
        "The system offered a simple, guided experience for raters, automated report generation and assured progress saving.",
        "Used by 300 employees, it helped Descon identify leadership readiness, strengths and gaps with data-driven insight.",
      ],
      
      "fr-CA": [
        "Intwish a déployé sa plateforme de rétroaction 360° pour Descon, soutenant le développement du leadership, l'évaluation de la performance et la conscience de soi.",
        "Le système offrait une expérience simple et guidée pour les évaluateurs, une génération automatisée de rapports et une sauvegarde garantie de la progression.",
        "Utilisé par 300 employés, il a aidé Descon à identifier l'état de préparation au leadership, les forces et les lacunes avec des données.",
      ],
      "id-ID": [
        "Intwish menerapkan platform umpan balik 360° untuk Descon, mendukung pengembangan kepemimpinan, evaluasi kinerja, dan kesadaran diri.",
        "Sistem menawarkan pengalaman sederhana dan terpandu bagi penilai, pembuatan laporan otomatis, dan penyimpanan progres yang terjamin.",
        "Digunakan oleh 300 karyawan, membantu Descon mengidentifikasi kesiapan kepemimpinan, kekuatan, dan kesenjangan dengan wawasan berbasis data.",
      ],
      ar: [
        "طرحت إنترويش منصة التقييم 360 درجة لصالح Descon، لدعم تطوير القيادة وتقييم الأداء والوعي الذاتي.",
        "أوفّر النظام تجربة بسيطة وموجّهة للمقيّمين وتوليداً آلياً للتقارير وحفظاً مضموناً للتقدم.",
        "استخدمه 300 موظف، فساعد Descon على تحديد الجاهزية القيادية ونقاط القوة والفجوات برؤى قائمة على البيانات.",
      ],
    },
    metrics: [
      {
        value: { en: "300",  "fr-CA": "300", "id-ID": "300", ar: "300" },
        label: {
          en: "Employees assessed",
          
          "fr-CA": "Employés évalués",
          "id-ID": "Karyawan dinilai",
          ar: "موظف تم تقييمهم",
        },
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
