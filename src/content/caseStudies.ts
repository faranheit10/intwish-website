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
    ],
  },
  {
    slug: "ird-epi-rehnuma",
    client: "IRD",
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
      ],
      
      "fr-CA": [
        "Intwish a créé une application d'apprentissage ludifiée pour les vaccinateurs dans le cadre de l'initiative EPI Rehnuma.",
        "L'application comprend des niveaux, des scénarios, des évaluations et des récompenses pour enseigner la gestion des vaccins, les protocoles de dose néonatale, les protocoles COVID-19, l'élimination des déchets et les compétences en communication — avec apprentissage vidéo, quiz interactifs, système de pointage et classement.",
      ],
      "id-ID": [
        "Intwish membuat aplikasi pembelajaran gamifikasi untuk vaksinator dalam inisiatif EPI Rehnuma.",
        "Aplikasi ini mencakup level, alur cerita, asesmen, dan penghargaan untuk mengajarkan manajemen vaksin, protokol dosis lahir, SOP COVID-19, pembuangan limbah, dan keterampilan komunikasi — dengan pembelajaran video, kuis interaktif, sistem penilaian, dan papan peringkat.",
      ],
      ar: [
        "أنشأت إنترويش تطبيقاً تفاعلياً للتعلم للملقّحين ضمن مبادرة EPI Rehnuma.",
        "يتضمن التطبيق مراحل وقصصاً وتقييمات ومكافآت لتعليم إدارة اللقاحات وبروتوكولات جرعة الولادة وإجراءات كوفيد-19 والتخلص من النفايات ومهارات التواصل — مع تعلم بالفيديو واختبارات تفاعلية ونظام تنقيط ولوحة متصدرين.",
      ],
    },
  },
  {
    slug: "hbl-design-thinking",
    client: "HBL",
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
  },
  {
    slug: "shell-driver-training",
    client: "Shell",
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
        value: { en: "Fleet-wide",  "fr-CA": "Toute la flotte", "id-ID": "Seluruh armada", ar: "الأسطول كاملاً" },
        label: {
          en: "Standardized safety training",
          
          "fr-CA": "Formation à la sécurité normalisée",
          "id-ID": "Pelatihan keselamatan terstandarisasi",
          ar: "تدريب سلامة معياري",
        },
      },
    ],
  },
  {
    slug: "sbc-knowledge-gate",
    client: "Saudi Business Center",
    date: "2021",
    industry: {
      en: "Government",
      
      "fr-CA": "Gouvernement",
      "id-ID": "Pemerintahan",
      ar: "القطاع الحكومي",
    },
    image: "/img/portfolio/Portfolio15.webp",
    title: {
      en: "Knowledge Gate Portal",
      
      "fr-CA": "Portail Knowledge Gate",
      "id-ID": "Portal Knowledge Gate",
      ar: "بوابة Knowledge Gate",
    },
    summary: {
      en: "An enterprise-grade modular portal centralizing government service data, performance, training and quality monitoring across Saudi ministries.",
      
      "fr-CA": "Un portail modulaire de calibre entreprise centralisant les données des services gouvernementaux, la performance, la formation et le suivi de la qualité dans les ministères saoudiens.",
      "id-ID": "Portal modular kelas enterprise yang mensentralisasi data layanan pemerintah, performa, pelatihan, dan pemantauan kualitas di kementerian Arab Saudi.",
      ar: "بوابة معيارية بمعايير مؤسسية تتمركز حول بيانات الخدمات الحكومية والأداء والتدريب ومراقبة الجودة في الوزارات السعودية.",
    },
    body: {
      en: [
        "Intwish developed the Knowledge Gate Portal for the Saudi Business Center (SBC) — a modular, enterprise-grade platform centralizing government service data and supporting performance management, training and quality monitoring across Saudi ministries and public service entities.",
        "Core modules: a Knowledge Base & Search Engine with expert-led updates and structured taxonomy; Assessments & Surveys with 15+ question types, access controls and real-time analytics; Mystery Shopper evaluations with customizable criteria, auto-scoring and consolidated reporting; and full Training Management — planning, content delivery, session tracking and external provider integration.",
      ],
      
      "fr-CA": [
        "Intwish a développé le portail Knowledge Gate pour le Saudi Business Center (SBC) — une plateforme modulaire de calibre entreprise centralisant les données des services gouvernementaux et soutenant la gestion de la performance, la formation et le suivi de la qualité dans les ministères et les entités de service public saoudiens.",
        "Modules principaux : une base de connaissances et un moteur de recherche avec des mises à jour menées par des experts et une taxonomie structurée ; des évaluations et sondages avec plus de 15 types de questions, des contrôles d'accès et des analyses en temps réel ; des évaluations de client mystère avec des critères personnalisables, une correction automatique et des rapports consolidés ; et une gestion complète de la formation — planification, diffusion du contenu, suivi des sessions et intégration de fournisseurs externes.",
      ],
      "id-ID": [
        "Intwish mengembangkan Portal Knowledge Gate untuk Saudi Business Center (SBC) — platform modular kelas enterprise yang mensentralisasi data layanan pemerintah dan mendukung manajemen performa, pelatihan, serta pemantauan kualitas di kementerian dan entitas layanan publik Arab Saudi.",
        "Modul inti: Basis Pengetahuan & Mesin Pencari dengan pembaruan yang dipimpin ahli dan taksonomi terstruktur; Asesmen & Survei dengan 15+ tipe pertanyaan, kontrol akses, dan analitik real-time; evaluasi Mystery Shopper dengan kriteria yang dapat disesuaikan, penilaian otomatis, dan pelaporan terpadu; serta Manajemen Pelatihan lengkap — perencanaan, penyampaian konten, pelacakan sesi, dan integrasi penyedia eksternal.",
      ],
      ar: [
        "طورت إنترويش بوابة Knowledge Gate لمركز الأعمال السعودي — منصة معيارية بمعايير مؤسسية تتمركز حول بيانات الخدمات الحكومية وتدعم إدارة الأداء والتدريب ومراقبة الجودة في الوزارات والجهات الحكومية السعودية.",
        "الوحدات الأساسية: قاعدة معرفة ومحرك بحث بتحديثات من الخبراء وتصنيف منظم؛ وتقييمات واستبيانات بأكثر من 15 نوع أسئلة مع ضوابط وصول وتحليلات فورية؛ وتقييمات المتسوق الخفي بمعايير قابلة للتخصيص وتصحيح تلقائي وتقارير موحدة؛ وإدارة تدريب شاملة — تخطيطاً وتسليم محتوى وتتبع جلسات وتكاملاً مع مزودين خارجيين.",
      ],
    },
    metrics: [
      {
        value: { en: "15+",  "fr-CA": "15+", "id-ID": "15+", ar: "+15" },
        label: {
          en: "Question types in survey engine",
          
          "fr-CA": "Types de questions dans le moteur de sondages",
          "id-ID": "Tipe pertanyaan di mesin survei",
          ar: "نوع أسئلة في محرك الاستبيانات",
        },
      },
    ],
  },
  {
    slug: "sbc-reaching-top",
    client: "Saudi Business Center",
    industry: {
      en: "Government",
      
      "fr-CA": "Gouvernement",
      "id-ID": "Pemerintahan",
      ar: "القطاع الحكومي",
    },
    image: "/img/portfolio/Portfolio16.webp",
    title: {
      en: "Reaching the Top — Customer Service Simulation",
      
      "fr-CA": "Reaching the Top — Simulation de service à la clientèle",
      "id-ID": "Reaching the Top — Simulasi Layanan Pelanggan",
      ar: "Reaching the Top — محاكاة خدمة العملاء",
    },
    summary: {
      en: "A career-simulation game taking Saudi government employees from new joiners to service leaders through realistic workplace scenarios.",
      
      "fr-CA": "Un jeu de simulation de carrière qui fait passer les employés du gouvernement saoudien de nouveaux arrivants à leaders du service grâce à des scénarios de travail réalistes.",
      "id-ID": "Game simulasi karier yang membawa karyawan pemerintah Saudi dari karyawan baru menjadi pemimpin layanan melalui skenario kerja yang realistis.",
      ar: "لعبة محاكاة مهنية تنقل موظفي القطاع الحكومي السعودي من موظفين جدد إلى قادة خدمة عبر سيناريوهات عمل واقعية.",
    },
    body: {
      en: [
        "Intwish developed \"Reaching the Top\" — a career-simulation game for government employees under the Saudi Business Center (SBC). Players journey from new joiners to service leaders by navigating realistic workplace scenarios.",
        "The game focuses on teaching key soft skills through immersive challenges that simulate real public service situations — communication, service excellence, handling difficult customers and professional conduct.",
      ],
      
      "fr-CA": [
        "Intwish a développé « Reaching the Top » — un jeu de simulation de carrière pour les employés du gouvernement dans le cadre du Saudi Business Center (SBC). Les joueurs passent de nouveaux arrivants à leaders du service en naviguant dans des scénarios de travail réalistes.",
        "Le jeu se concentre sur l'enseignement de compétences interpersonnelles clés par des défis immersifs qui simulent de véritables situations de service public — communication, excellence du service, gestion des clients difficiles et conduite professionnelle.",
      ],
      "id-ID": [
        "Intwish mengembangkan \"Reaching the Top\" — game simulasi karier untuk karyawan pemerintah di bawah Saudi Business Center (SBC). Pemain berjalan dari karyawan baru menjadi pemimpin layanan dengan menavigasi skenario kerja yang realistis.",
        "Game ini berfokus pada pengajaran keterampilan soft skill utama melalui tantangan imersif yang mensimulasikan situasi layanan publik nyata — komunikasi, keunggulan layanan, menangani pelanggan sulit, dan perilaku profesional.",
      ],
      ar: [
        "طورت إنترويش لعبة \\\"Reaching the Top\\\" — محاكاة مهنية لموظفي القطاع الحكومي ضمن مركز الأعمال السعودي. ينطلق اللاعبون من موظفين جدد إلى قادة خدمة عبر سيناريوهات عمل واقعية.",
        "تركز اللعبة على تعليم المهارات الشخصية الأساسية عبر تحديات غامرة تحاكي مواقف الخدمة العامة الحقيقية — التواصل، وتميز الخدمة، والتعامل مع العملاء الصعبين، والسلوك المهني.",
      ],
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
