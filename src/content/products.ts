import type { Localized } from "./types";

export interface Product {
  slug: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
}

export const products: Product[] = [
  {
    slug: "intos",
    name: "intOS",
    tagline: {
      en: "The virtual OS assessment platform",
      
      "fr-CA": "La plateforme d'évaluation à OS virtuel",
      "id-ID": "Platform asesmen OS virtual",
      ar: "منصة التقييم بنظام التشغيل الافتراضي",
    },
    description: {
      en: "A live virtual desktop your candidates actually operate — email simulations, team messenger, situational-judgement meetings, e-tray exercises, psychometric games and an interlinked narrative engine. Built for high-volume hiring at any scale.",
      
      "fr-CA": "Un bureau virtuel en direct que vos candidats utilisent réellement — simulations de courriels, messagerie d'équipe, réunions de jugement situationnel, exercices de bac à courrier électronique, jeux psychométriques et moteur narratif interconnecté. Conçu pour l'embauche à grand volume, à toute échelle.",
      "id-ID": "Desktop virtual langsung yang benar-benar dioperasikan kandidat Anda — simulasi email, messenger tim, pertemuan penilaian situasional, latihan e-tray, game psikometri, dan mesin naratif saling terhubung. Dibangun untuk rekrutmen volume tinggi di skala apa pun.",
      ar: "سطح مكتب افتراضي مباشر يعمل عليه مرشحوك فعلياً — محاكاة البريد الإلكتروني ومراسلة الفريق واجتماعات الحكم الظرفي وتمارين الصندوق الإلكتروني وألعاب القياس النفسي ومحرك سردي مترابط. صُمم للتوظيف عالي الحجم على أي نطاق.",
    },
    highlights: {
      en: [
        "Email, messenger, meetings & games in one OS",
        "Interlinked narrative — reply to an email and a team-message fires",
        "25,000+ candidates in a single drive",
      ],
      
      "fr-CA": [
        "Courriels, messagerie, réunions et jeux dans un seul OS",
        "Narratif interconnecté — répondez à un courriel et un message d'équipe s'envole",
        "Plus de 25 000 candidats dans une seule campagne",
      ],
      "id-ID": [
        "Email, messenger, pertemuan & game dalam satu OS",
        "Naratif saling terhubung — balas email dan pesan tim terpicu",
        "25.000+ kandidat dalam satu kampanye",
      ],
      ar: [
        "البريد والمراسلة والاجتماعات والألعاب في نظام واحد",
        "سرد مترابط — ردّ على بريد إلكتروني فتُطلق رسالة فريق",
        "أكثر من 25,000 مرشح في حملة واحدة",
      ],
    },
  },
  {
    slug: "intreview",
    name: "IntReview",
    tagline: {
      en: "AI-assisted interviews & assessments",
      
      "fr-CA": "Entrevues et évaluations assistées par IA",
      "id-ID": "Wawancara & asesmen berbantuan AI",
      ar: "مقابلات وتقييمات مدعومة بالذكاء الاصطناعي",
    },
    description: {
      en: "Asynchronous video interviews scored by AI against your competency rubrics — with proctoring, STAR analysis and instant, data-driven reports. Candidates record once; you review the evidence.",
      
      "fr-CA": "Entrevues vidéo asynchrones évaluées par IA selon vos grilles de compétences — avec surveillance anti-triche, analyse STAR et rapports instantanés fondés sur les données. Les candidats enregistrent une fois ; vous examinez les preuves.",
      "id-ID": "Wawancara video asinkron dinilai oleh AI berdasarkan rubrik kompetensi Anda — dengan proctoring, analisis STAR, dan laporan instan berbasis data. Kandidat merekam sekali; Anda meninjau buktinya.",
      ar: "مقابلات فيديو غير متزامنة يصنّفها الذكاء الاصطناعي وفق معايير الكفاءات لديك — مع مراقبة منع الغش وتحليل STAR وتقارير فورية مبنية على البيانات. يسجل المرشحون مرة واحدة؛ وتستعرض أنت الأدلة.",
    },
    highlights: {
      en: [
        "AI scoring with evidence quotes",
        "18 question types, incl. AI-generated",
        "Anti-cheat proctoring built in",
      ],
      
      "fr-CA": [
        "Évaluation par IA avec citations de preuves",
        "18 types de questions, dont générées par IA",
        "Surveillance anti-triche intégrée",
      ],
      "id-ID": [
        "Penilaian AI dengan kutipan bukti",
        "18 tipe pertanyaan, termasuk yang dihasilkan AI",
        "Proctoring anti-kecurangan bawaan",
      ],
      ar: [
        "تصنيف بالذكاء الاصطناعي مع اقتباسات أدلة",
        "18 نوع أسئلة، بما فيها المولّدة بالذكاء الاصطناعي",
        "مراقبة منع الغش مدمجة",
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
