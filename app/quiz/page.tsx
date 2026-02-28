"use client";
import { useState, useEffect } from "react";
import type { Question, ReponseUtilisateur, ResultatQuiz } from "@/types/quiz";

const POINTS_CORRECT = 1;
const POINTS_FAUX    = -1 / 3;
const POINTS_PASSE   = 0;

const formatScore = (n: number) =>
  Number.isInteger(n) ? n.toString() : n.toFixed(2);

const MATIERES_META: Record<string, { label: string; icon: string; color: string; chapitres: Record<string, string> }> = {
  biologie: {
    label: "Biologie", icon: "🧬", color: "green",
    chapitres: {
      "1": "La cellule : l'unité fonctionnelle du monde vivant",
      "2": "La génétique et l'hérédité",
      "3": "La diversité, l'évolution et l'adaptabilité",
      "4": "L'écologie",
    },
  },
  chimie: {
    label: "Chimie", icon: "⚗️", color: "yellow",
    chapitres: {
      "1": "Notions de base et états de la matière",
      "2": "Structure de la matière",
      "3": "La réaction chimique : aspect qualitatif",
      "4": "La réaction chimique : aspect quantitatif",
      "5": "L'équilibre chimique",
    },
  },
  physique: {
    label: "Physique", icon: "⚡", color: "red",
    chapitres: {
      "1": "Biomécanique",
      "2": "La statique et la gravitation universelle",
      "3": "Travail, énergie et puissance",
      "4": "Les ondes",
      "5": "Optique géométrique",
      "6": "Électromagnétisme",
    },
  },
  mathematiques: {
    label: "Mathématiques", icon: "📐", color: "blue",
    chapitres: {
      "1": "Algèbre",
      "2": "Géométrie",
      "3": "Trigonométrie",
      "4": "Analyse",
      "5": "Statistique",
    },
  },
  raisonnement: {
    label: "Raisonnement et Synthèse", icon: "🧩", color: "purple",
    chapitres: {
      "1": "Analyse et intégration de données",
      "2": "Raisonnement logique et argumentation",
      "3": "Esprit de synthèse et conceptualisation",
    },
  },
  ethique: {
    label: "Éthique, Empathie et Communication", icon: "💬", color: "pink",
    chapitres: {
      "1": "Habileté communicationnelle et aptitude au dialogue",
      "2": "Dimension sociétale et éthique des décisions",
      "3": "Empathie et compréhension de l'état émotionnel",
    },
  },
};

const COLOR_MAP: Record<string, { text: string; border: string; bg: string; btn: string; headerBg: string }> = {
  green:  { text: "text-emerald-700", border: "border-emerald-300", bg: "bg-emerald-50",  btn: "bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-emerald-700",  headerBg: "bg-emerald-50"  },
  yellow: { text: "text-amber-700",   border: "border-amber-300",   bg: "bg-amber-50",    btn: "bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-700",            headerBg: "bg-amber-50"    },
  red:    { text: "text-red-700",     border: "border-red-300",     bg: "bg-red-50",      btn: "bg-red-50 hover:bg-red-100 border-2 border-red-300 text-red-700",                    headerBg: "bg-red-50"      },
  blue:   { text: "text-[#1d4ed8]",   border: "border-[#93c5fd]",   bg: "bg-[#dbeafe]",   btn: "bg-[#dbeafe] hover:bg-[#bfdbfe] border-2 border-[#93c5fd] text-[#1d4ed8]",           headerBg: "bg-[#eff6ff]"   },
  purple: { text: "text-purple-700",  border: "border-purple-300",  bg: "bg-purple-50",   btn: "bg-purple-50 hover:bg-purple-100 border-2 border-purple-300 text-purple-700",         headerBg: "bg-purple-50"   },
  pink:   { text: "text-pink-700",    border: "border-pink-300",    bg: "bg-pink-50",     btn: "bg-pink-50 hover:bg-pink-100 border-2 border-pink-300 text-pink-700",                 headerBg: "bg-pink-50"     },
};

const QUESTIONS_DEMO: Record<string, Record<string, Question[]>> = {
  biologie: {
    "1": [
      { id: "bio-1-001", text: "Quel organite est responsable de la production d'énergie (ATP) dans la cellule ?", options: ["Le noyau", "La mitochondrie", "Le réticulum endoplasmique", "L'appareil de Golgi"], correct: 1, explanation: "La mitochondrie est la centrale énergétique de la cellule. Elle produit l'ATP via la chaîne respiratoire et la phosphorylation oxydative." },
      { id: "bio-1-002", text: "Quelle est la fonction principale de la membrane plasmique ?", options: ["Produire des protéines", "Réguler les échanges entre la cellule et son milieu", "Stocker l'information génétique", "Synthétiser les lipides"], correct: 1, explanation: "La membrane plasmique est une bicouche lipidique sélectivement perméable qui contrôle les entrées et sorties de la cellule." },
      { id: "bio-1-003", text: "Lors de la mitose, à quelle phase les chromosomes s'alignent-ils au centre de la cellule ?", options: ["Prophase", "Métaphase", "Anaphase", "Télophase"], correct: 1, explanation: "Pendant la métaphase, les chromosomes condensés s'alignent sur la plaque équatoriale, permettant une séparation égale vers les deux pôles." },
      { id: "bio-1-004", text: "Quel type de cellule ne possède pas de membrane nucléaire ?", options: ["Cellule animale", "Cellule végétale", "Cellule procaryote", "Cellule fongique"], correct: 2, explanation: "Les procaryotes (bactéries, archées) n'ont pas de noyau délimité. Leur ADN circulaire flotte dans le cytoplasme au niveau du nucléoïde." },
      { id: "bio-1-005", text: "Quelle molécule constitue la paroi des cellules végétales ?", options: ["Chitine", "Cellulose", "Peptidoglycane", "Collagène"], correct: 1, explanation: "La paroi végétale est composée de cellulose, un polysaccharide de glucose qui confère rigidité et protection à la cellule." },
    ],
    "2": [
      { id: "bio-2-001", text: "Selon la loi de ségrégation de Mendel, que se passe-t-il lors de la formation des gamètes ?", options: ["Les deux allèles restent ensemble", "Les deux allèles se séparent et chaque gamète reçoit un seul allèle", "Les allèles dominants sont transmis en priorité", "Les allèles récessifs disparaissent"], correct: 1, explanation: "La 1ère loi de Mendel : lors de la méiose, les deux allèles d'un gène se séparent. Chaque gamète ne reçoit qu'un seul allèle." },
      { id: "bio-2-002", text: "Croisement Aa × Aa : quelle est la probabilité d'obtenir un individu aa ?", options: ["25%", "50%", "75%", "100%"], correct: 0, explanation: "Carré de Punnett : 1/4 AA, 2/4 Aa, 1/4 aa. Probabilité aa = 25%." },
      { id: "bio-2-003", text: "Lesquelles de ces bases sont des purines ?", options: ["Thymine et Cytosine", "Adénine et Guanine", "Adénine et Thymine", "Guanine et Cytosine"], correct: 1, explanation: "Purines (double cycle) : Adénine (A) et Guanine (G). Pyrimidines (simple cycle) : Thymine (T), Cytosine (C), Uracile (U)." },
    ],
    "3": [
      { id: "bio-3-001", text: "Quel mécanisme est à la base de la théorie synthétique de l'évolution ?", options: ["La génération spontanée", "La sélection naturelle combinée à la génétique", "L'hérédité des caractères acquis", "La mutation dirigée"], correct: 1, explanation: "La théorie synthétique combine la sélection naturelle de Darwin avec la génétique mendélienne et la génétique des populations." },
    ],
    "4": [
      { id: "bio-4-001", text: "Qu'est-ce qu'un écosystème ?", options: ["Un ensemble d'individus de la même espèce", "L'ensemble des êtres vivants d'une zone", "L'ensemble des êtres vivants et leur milieu abiotique", "La partie minérale d'un milieu naturel"], correct: 2, explanation: "Un écosystème regroupe la biocénose (ensemble des organismes vivants) et le biotope (milieu physico-chimique) en interaction." },
    ],
  },
  chimie: {
    "1": [
      { id: "chi-1-001", text: "Quelle est la charge d'un proton ?", options: ["Négative (-1)", "Neutre (0)", "Positive (+1)", "Variable"], correct: 2, explanation: "Le proton a une charge de +1. Le numéro atomique Z = nombre de protons. L'électron a une charge de -1 et le neutron est neutre." },
      { id: "chi-1-002", text: "À quelle température l'eau pure bout-elle à 1 atm ?", options: ["90°C", "95°C", "100°C", "105°C"], correct: 2, explanation: "L'eau bout à 100°C (373,15 K) à 1 atm. C'est le point de référence de l'échelle Celsius." },
      { id: "chi-1-003", text: "Qu'est-ce que la masse molaire ?", options: ["Le nombre de protons", "La masse d'une mole en g/mol", "Le nombre d'électrons", "La masse d'un seul atome"], correct: 1, explanation: "M (g/mol) = masse de 6,022×10²³ entités. Exemple : M(H₂O) = 2×1 + 16 = 18 g/mol." },
    ],
    "2": [
      { id: "chi-2-001", text: "Combien d'électrons peut contenir la couche L (n=2) ?", options: ["2", "6", "8", "18"], correct: 2, explanation: "La couche L contient les sous-couches 2s (2e) et 2p (6e), soit un maximum de 8 électrons." },
    ],
    "3": [
      { id: "chi-3-001", text: "Lors d'une réaction de neutralisation acide-base, quels produits se forment ?", options: ["Un acide et un oxyde", "Un sel et de l'eau", "Deux sels différents", "Un oxyde et un hydroxyde"], correct: 1, explanation: "HCl + NaOH → NaCl + H₂O. La neutralisation donne toujours un sel et de l'eau." },
    ],
    "4": [
      { id: "chi-4-001", text: "Quelle est la formule de la quantité de matière ?", options: ["n = M/m", "n = m/M", "n = V/Vm", "Les deux réponses B et C sont correctes"], correct: 3, explanation: "n = m/M (en masse) et n = V/Vm (en volume pour un gaz). Les deux formules sont correctes selon le contexte." },
    ],
    "5": [
      { id: "chi-5-001", text: "Que traduit la constante d'équilibre Keq > 1 ?", options: ["La réaction est impossible", "L'équilibre est déplacé vers les réactifs", "L'équilibre est déplacé vers les produits", "La réaction est à l'équilibre exact"], correct: 2, explanation: "Keq > 1 signifie que les produits sont favorisés à l'équilibre. Plus Keq est grand, plus la réaction est avancée." },
    ],
  },
  physique: {
    "1": [
      { id: "phy-1-001", text: "Un muscle exerce une force de 500 N sur un bras de levier de 0,05 m. Quel est le moment de force ?", options: ["10 N·m", "25 N·m", "100 N·m", "2500 N·m"], correct: 1, explanation: "M = F × d = 500 × 0,05 = 25 N·m. Le moment de force est le produit de la force par la distance au pivot." },
    ],
    "2": [
      { id: "phy-2-001", text: "Quelle est la valeur de g (accélération gravitationnelle terrestre) ?", options: ["8,9 m/s²", "9,81 m/s²", "10,5 m/s²", "11,2 m/s²"], correct: 1, explanation: "g ≈ 9,81 m/s² à la surface de la Terre. Par approximation, on utilise souvent g = 10 m/s²." },
    ],
    "3": [
      { id: "phy-3-001", text: "Quelle est l'unité du travail en SI ?", options: ["Newton", "Watt", "Joule", "Pascal"], correct: 2, explanation: "Le travail W = F·d·cos(θ) s'exprime en Joules (J) = N·m = kg·m²·s⁻²." },
    ],
    "4": [
      { id: "phy-4-001", text: "Quelle relation lie la vitesse d'une onde, sa fréquence et sa longueur d'onde ?", options: ["v = f/λ", "v = f·λ", "v = λ/f", "v = f²·λ"], correct: 1, explanation: "v = f·λ. La vitesse de propagation est le produit de la fréquence et de la longueur d'onde." },
    ],
    "5": [
      { id: "phy-5-001", text: "Que se passe-t-il lors de la réfraction d'un rayon lumineux passant dans un milieu plus dense ?", options: ["Il s'éloigne de la normale", "Il se rapproche de la normale", "Il ne change pas de direction", "Il est totalement réfléchi"], correct: 1, explanation: "Loi de Snell-Descartes : n₁sin(θ₁) = n₂sin(θ₂). Si n₂ > n₁, alors θ₂ < θ₁ : le rayon se rapproche de la normale." },
    ],
    "6": [
      { id: "phy-6-001", text: "Quelle est la loi d'Ohm ?", options: ["U = R/I", "U = R·I", "U = I/R", "R = U·I"], correct: 1, explanation: "U = R·I. La tension (U, en V) est égale au produit de la résistance (R, en Ω) par l'intensité (I, en A)." },
    ],
  },
  mathematiques: {
    "1": [
      { id: "mat-1-001", text: "Résoudre : 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 1, explanation: "2x = 14 - 6 = 8 → x = 4. Vérification : 2(4)+6 = 14 ✓" },
      { id: "mat-1-002", text: "Factoriser : x² - 9", options: ["(x-3)²", "(x+3)(x-3)", "(x-9)(x+1)", "(x+9)(x-1)"], correct: 1, explanation: "Identité remarquable : a²-b² = (a+b)(a-b). Ici x²-3² = (x+3)(x-3)." },
    ],
    "2": [
      { id: "mat-2-001", text: "Quel est le périmètre d'un cercle de rayon r ?", options: ["πr²", "2πr", "πr", "4πr"], correct: 1, explanation: "P = 2πr. L'aire est πr². Ne pas confondre les deux formules." },
    ],
    "3": [
      { id: "mat-3-001", text: "Quelle est la valeur de sin(30°) ?", options: ["√3/2", "1/2", "√2/2", "1"], correct: 1, explanation: "sin(30°) = 1/2. À retenir : sin(30°)=1/2, sin(45°)=√2/2, sin(60°)=√3/2." },
    ],
    "4": [
      { id: "mat-4-001", text: "Quelle est la dérivée de f(x) = x³ ?", options: ["f'(x) = x²", "f'(x) = 3x²", "f'(x) = 3x", "f'(x) = x⁴/4"], correct: 1, explanation: "(xⁿ)' = n·xⁿ⁻¹. Donc (x³)' = 3x²." },
    ],
    "5": [
      { id: "mat-5-001", text: "Quelle est la moyenne d'une série de valeurs 4, 8, 6, 10, 12 ?", options: ["7", "8", "9", "10"], correct: 1, explanation: "Moyenne = (4+8+6+10+12)/5 = 40/5 = 8." },
    ],
  },
  raisonnement: {
    "1": [
      { id: "rai-1-001", text: "Compléter la série : 2, 4, 8, 16, ?", options: ["24", "28", "32", "36"], correct: 2, explanation: "Chaque terme est multiplié par 2 : 2×2=4, 4×2=8, 8×2=16, 16×2=32." },
    ],
    "2": [
      { id: "rai-2-001", text: "Tous les A sont B. Tous les B sont C. Donc :", options: ["Tous les C sont A", "Certains A sont C", "Tous les A sont C", "Aucun A n'est C"], correct: 2, explanation: "Syllogisme : si A⊂B et B⊂C, alors A⊂C. Tous les A sont nécessairement C." },
    ],
    "3": [
      { id: "rai-3-001", text: "Laquelle de ces propositions est une conclusion correcte par synthèse ?", options: ["Une observation isolée permet une loi générale", "Plusieurs observations convergentes permettent d'émettre une hypothèse générale", "Une hypothèse prouve un fait", "Un contre-exemple confirme une règle"], correct: 1, explanation: "La synthèse consiste à regrouper plusieurs observations pour en extraire une conclusion générale ou une hypothèse." },
    ],
  },
  ethique: {
    "1": [
      { id: "eth-1-001", text: "Quelle attitude favorise une communication médicale efficace ?", options: ["Utiliser un jargon médical complexe", "Adapter son langage au niveau de compréhension du patient", "Éviter le contact visuel pour rester neutre", "Réduire le temps de consultation au minimum"], correct: 1, explanation: "Une communication efficace passe par l'adaptation du discours à l'interlocuteur, en privilégiant la clarté et l'écoute active." },
    ],
    "2": [
      { id: "eth-2-001", text: "Le principe d'autonomie en éthique médicale signifie :", options: ["Le médecin décide seul du traitement", "Le patient a le droit de prendre ses propres décisions éclairées", "La famille du patient choisit pour lui", "L'équipe soignante vote pour le traitement"], correct: 1, explanation: "L'autonomie est l'un des 4 grands principes de bioéthique (Beauchamp & Childress). Elle garantit le droit du patient à une décision libre et éclairée." },
    ],
    "3": [
      { id: "eth-3-001", text: "L'empathie en médecine se définit comme :", options: ["Partager exactement les mêmes émotions que le patient", "Comprendre et reconnaître l'état émotionnel du patient sans le confondre avec le sien", "Éviter d'aborder les émotions pour rester objectif", "Éprouver de la pitié pour le patient"], correct: 1, explanation: "L'empathie est la capacité à comprendre et à reconnaître les émotions d'autrui, distincte de la sympathie (partager l'émotion) et de la pitié." },
    ],
  },
};

const calculerResultat = (questions: Question[], reponses: ReponseUtilisateur[]): ResultatQuiz => {
  let score = 0, bonnes = 0, mauvaises = 0, passees = 0;
  const resultats = questions.map((q, i) => {
    const rep = reponses[i];
    const isCorrecte = rep === q.correct;
    const isPassed   = rep === null;
    let pts = POINTS_PASSE;
    if (!isPassed) pts = isCorrecte ? POINTS_CORRECT : POINTS_FAUX;
    if (isCorrecte) bonnes++;
    else if (isPassed) passees++;
    else mauvaises++;
    score += pts;
    return { question: q, reponse: rep, isCorrecte, isPassed, pointsObtenus: pts };
  });
  const scoreMax    = questions.length * POINTS_CORRECT;
  const pourcentage = scoreMax > 0 ? Math.round((score / scoreMax) * 100) : 0;
  const feu = pourcentage >= 75 ? "vert" : pourcentage >= 50 ? "jaune" : "rouge";
  return { score, scoreMax, pourcentage, bonnes, mauvaises, passees, resultats, feu } as ResultatQuiz;
};

type Mode = "accueil" | "quiz" | "resultats";

export default function QuizPage() {
  const [mode, setMode]           = useState<Mode>("accueil");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [reponses, setReponses]   = useState<ReponseUtilisateur[]>([]);
  const [current, setCurrent]     = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState<number | null>(null);
  const [resultat, setResultat]   = useState<ResultatQuiz | null>(null);
  const [corrIndex, setCorrIndex] = useState<number | null>(null);
  const [chapActif, setChapActif] = useState<{ matiere: string; chapitre: string } | null>(null);
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const m = params.get("matiere");
      const c = params.get("chapitre");
      if (m && c) lancerChapitre(m, c);
    }
  }, []);

  const chargerQuestions = async (matiere: string, chapitre: string): Promise<Question[]> => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 250));
    const qs = QUESTIONS_DEMO[matiere]?.[chapitre] ?? [];
    setLoading(false);
    return qs;
  };

  const lancerChapitre = async (matiere: string, chapitre: string) => {
    const qs = await chargerQuestions(matiere, chapitre);
    if (qs.length === 0) {
      alert("Aucune question disponible pour ce chapitre. Le contenu arrive très bientôt !");
      return;
    }
    const melangees = [...qs].sort(() => Math.random() - 0.5).slice(0, Math.min(20, qs.length));
    setQuestions(melangees);
    setReponses(new Array(melangees.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setResultat(null);
    setCorrIndex(null);
    setChapActif({ matiere, chapitre });
    setMode("quiz");
  };

  const choisirReponse = (idx: number) => {
    if (confirmed) return;
    setSelected(idx);
    const nr = [...reponses]; nr[current] = idx;
    setReponses(nr);
    setConfirmed(true);
  };

  const passer = () => {
    const nr = [...reponses]; nr[current] = null;
    setReponses(nr);
    avancer(nr);
  };

  const avancer = (rep?: ReponseUtilisateur[]) => {
    const r = rep ?? reponses;
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setConfirmed(false);
    } else {
      setResultat(calculerResultat(questions, r));
      setMode("resultats");
    }
  };

  const getOptionStyle = (idx: number) => {
    if (!confirmed) return selected === idx
      ? "border-2 border-[#3b82f6] bg-[#dbeafe] text-[#1d4ed8]"
      : "border-2 border-slate-300 bg-white text-slate-800 hover:border-[#3b82f6] hover:bg-[#eff6ff] cursor-pointer";
    if (idx === questions[current]?.correct) return "border-2 border-emerald-400 bg-emerald-50 text-emerald-800";
    if (idx === selected)                    return "border-2 border-red-400 bg-red-50 text-red-800";
    return "border-2 border-slate-200 bg-slate-50 text-slate-400";
  };

  const getBadgeStyle = (idx: number) => {
    if (!confirmed) return selected === idx ? "bg-[#3b82f6] text-white" : "bg-slate-100 border-2 border-slate-300 text-slate-600";
    if (idx === questions[current]?.correct) return "bg-emerald-500 text-white";
    if (idx === selected)                    return "bg-red-500 text-white";
    return "bg-slate-100 border border-slate-200 text-slate-400";
  };

  const scoreEnCours = reponses.slice(0, current).reduce(
    (acc: number, rep: ReponseUtilisateur, i: number) => {
      if (rep === null) return acc;
      return acc + (rep === questions[i]?.correct ? POINTS_CORRECT : POINTS_FAUX);
    }, 0
  );

  const NavBar = ({ backFn, titre }: { backFn?: () => void; titre?: string }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center gap-4 px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
      {backFn
        ? <button onClick={backFn} className="text-slate-500 hover:text-slate-900 transition text-xl flex-shrink-0">←</button>
        : <a href="/" className="text-xl font-bold flex-shrink-0 text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
      }
      {backFn && <a href="/" className="text-xl font-bold flex-shrink-0 text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>}
      {titre && <span className="text-sm text-slate-500 hidden md:block font-medium">{titre}</span>}
      <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
        {[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Cours",     href: "/cours"     },
          { label: "Quiz",      href: "/quiz", active: true },
          { label: "Examens",   href: "/examens"   },
          { label: "Concours",  href: "/concours"  },
        ].map(item => (
          <a key={item.label} href={item.href}
            className={`text-sm px-4 py-2 rounded-xl transition font-medium ${"active" in item && item.active ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-sm font-bold text-white shadow-sm flex-shrink-0">A</div>
    </nav>
  );

  // ══════════════════════════════════════════════════════════════════════════
  // VUE ACCUEIL
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === "accueil") return (
    <div className="min-h-screen text-slate-900 font-sans bg-slate-100">
      <NavBar titre="Quiz de préparation ARES" />
      <div className="pt-20 px-6 pb-16 max-w-5xl mx-auto">

        <div className="mt-8 mb-8">
          <h1 className="text-3xl font-extrabold mb-2 text-slate-900">Quiz par chapitre</h1>
          <p className="text-slate-600 text-sm mb-5">Barème officiel ARES · Concours d'entrée en médecine et dentisterie (Belgique)</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-emerald-50 border-2 border-emerald-300 px-4 py-2 rounded-xl">
              <span className="text-emerald-700 font-extrabold text-lg">+1</span>
              <span className="text-emerald-700 text-xs font-semibold">point · Bonne réponse</span>
            </div>
            <div className="flex items-center gap-2 bg-red-50 border-2 border-red-300 px-4 py-2 rounded-xl">
              <span className="text-red-700 font-extrabold text-lg">-⅓</span>
              <span className="text-red-700 text-xs font-semibold">point · Mauvaise réponse</span>
            </div>
            <div className="flex items-center gap-2 bg-white border-2 border-slate-300 px-4 py-2 rounded-xl">
              <span className="text-slate-600 font-extrabold text-lg">0</span>
              <span className="text-slate-600 text-xs font-semibold">point · Abstention</span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-8 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <div className="font-bold text-amber-700 text-sm mb-1">Stratégie importante — Gestion du risque</div>
              <p className="text-slate-700 text-sm leading-relaxed">Avec ce barème, répondre au hasard donne en espérance 0. <span className="text-slate-900 font-semibold">Tu n'as intérêt à répondre que si ta probabilité d'être correct est supérieure à 25%.</span> En cas de doute total, l'abstention est plus rentable.</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {Object.entries(MATIERES_META).map(([matiereId, meta]) => {
            const c = COLOR_MAP[meta.color];
            return (
              <div key={matiereId} className={`bg-white border-2 ${c.border} rounded-2xl overflow-hidden shadow-md`}>
                <div className={`flex items-center gap-3 px-6 py-4 border-b-2 ${c.border} ${c.headerBg}`}>
                  <span className="text-2xl">{meta.icon}</span>
                  <h2 className={`font-extrabold text-lg ${c.text}`}>{meta.label}</h2>
                  <span className={`ml-auto text-xs font-bold px-3 py-1 rounded-full border-2 ${c.bg} ${c.border} ${c.text}`}>
                    {Object.keys(meta.chapitres).length} chapitres
                  </span>
                </div>
                <div className="divide-y-2 divide-slate-100">
                  {Object.entries(meta.chapitres).map(([chapNum, chapTitre]) => {
                    const hasQuestions = !!(QUESTIONS_DEMO[matiereId]?.[chapNum]?.length);
                    return (
                      <div key={chapNum} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold flex-shrink-0 border-2 ${c.bg} ${c.border} ${c.text}`}>{chapNum}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900">Chapitre {chapNum} — {chapTitre}</div>
                          <div className="text-xs mt-0.5 font-medium">
                            {hasQuestions
                              ? <span className="text-emerald-600">✓ {QUESTIONS_DEMO[matiereId][chapNum].length} questions disponibles</span>
                              : <span className="text-slate-400">Questions en cours d'ajout</span>}
                          </div>
                        </div>
                        <button
                          onClick={() => lancerChapitre(matiereId, chapNum)}
                          disabled={!hasQuestions || loading}
                          className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition flex-shrink-0 shadow-sm ${hasQuestions ? c.btn : "bg-slate-100 border-2 border-slate-200 text-slate-400 cursor-not-allowed"}`}>
                          {loading ? "⏳" : "⚡"} {hasQuestions ? "Lancer" : "Bientôt"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════════════════
  // VUE QUIZ
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === "quiz" && questions.length > 0) {
    const q       = questions[current];
    const meta    = chapActif ? MATIERES_META[chapActif.matiere] : null;
    const c       = meta ? COLOR_MAP[meta.color] : COLOR_MAP.blue;
    const letters = ["A", "B", "C", "D"];

    return (
      <div className="min-h-screen text-slate-900 font-sans bg-slate-100">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-slate-300 bg-white shadow-sm px-6 py-3">
          <div className="flex items-center gap-4 mb-2">
            <button onClick={() => setMode("accueil")} className="text-slate-500 hover:text-slate-900 transition text-xl flex-shrink-0">←</button>
            <a href="/" className="text-lg font-bold flex-shrink-0 text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
            {chapActif && meta && (
              <div className={`flex items-center gap-1.5 text-xs font-bold ${c.text} hidden md:flex`}>
                <span>{meta.icon}</span><span>{meta.label} · Ch.{chapActif.chapitre}</span>
              </div>
            )}
            <div className="flex-1"></div>
            <span className={`text-sm font-extrabold px-3 py-1 rounded-lg border-2 ${scoreEnCours >= 0 ? "text-emerald-700 bg-emerald-50 border-emerald-300" : "text-red-700 bg-red-50 border-red-300"}`}>
              {scoreEnCours >= 0 ? "+" : ""}{formatScore(scoreEnCours)} pt
            </span>
            <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-sm font-bold text-white shadow-sm">A</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 w-24 flex-shrink-0 font-medium">Q {current + 1} / {questions.length}</span>
            <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
              <div className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] h-2.5 rounded-full transition-all duration-500" style={{ width: `${(current / questions.length) * 100}%` }}></div>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {questions.map((_, idx) => (
                <div key={idx} className={`h-2.5 rounded-full transition-all border ${
                  idx === current ? "bg-[#3b82f6] border-[#3b82f6] w-5"
                  : idx < current && reponses[idx] === null ? "bg-slate-300 border-slate-400 w-2"
                  : idx < current ? (reponses[idx] === questions[idx]?.correct ? "bg-emerald-500 border-emerald-600 w-2" : "bg-red-500 border-red-600 w-2")
                  : "bg-slate-200 border-slate-300 w-2"
                }`}></div>
              ))}
            </div>
          </div>
        </nav>

        <div className="pt-28 px-6 pb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-700 text-xs font-extrabold px-3 py-1.5 rounded-xl">+1 pt · Bonne</div>
            <div className="bg-red-50 border-2 border-red-300 text-red-700 text-xs font-extrabold px-3 py-1.5 rounded-xl">-⅓ pt · Erreur</div>
            <div className="bg-white border-2 border-slate-300 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-xl">0 pt · Abstention</div>
          </div>

          <div className="bg-white border-2 border-slate-300 rounded-2xl p-7 mb-5 shadow-md">
            <div className="text-xs text-slate-400 mb-3 font-bold uppercase tracking-widest">Question {current + 1}</div>
            <p className="text-lg font-semibold text-slate-900 leading-relaxed">{q.text}</p>
          </div>

          <div className="space-y-3 mb-5">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => choisirReponse(idx)} disabled={confirmed}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition text-left shadow-sm ${getOptionStyle(idx)}`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0 transition ${getBadgeStyle(idx)}`}>{letters[idx]}</div>
                <span className="text-sm leading-relaxed flex-1 font-medium">{opt}</span>
                {confirmed && idx === q.correct && <span className="text-emerald-600 font-extrabold text-sm flex-shrink-0">✓ +1</span>}
                {confirmed && idx === selected && idx !== q.correct && <span className="text-red-600 font-extrabold text-sm flex-shrink-0">✗ -⅓</span>}
              </button>
            ))}
          </div>

          {confirmed && (
            <div className={`rounded-2xl p-5 mb-5 border-2 shadow-sm ${reponses[current] === q.correct ? "bg-emerald-50 border-emerald-300" : "bg-red-50 border-red-300"}`}>
              <div className={`font-extrabold text-sm mb-3 ${reponses[current] === q.correct ? "text-emerald-700" : "text-red-700"}`}>
                {reponses[current] === q.correct ? "✓ Bonne réponse ! +1 point" : "✗ Mauvaise réponse. -⅓ point"}
              </div>
              <div className="bg-white border-2 border-[#93c5fd] rounded-xl p-4">
                <div className="text-xs text-[#1d4ed8] font-extrabold mb-2 uppercase tracking-widest">💡 Explication</div>
                <p className="text-slate-700 text-sm leading-relaxed">{q.explanation}</p>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {!confirmed ? (
              <>
                <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 text-center text-sm text-slate-400 italic font-medium shadow-sm">Clique sur une option pour répondre</div>
                <button onClick={passer} className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-600 font-semibold py-3.5 px-5 rounded-xl transition text-sm flex-shrink-0 shadow-sm">
                  Abstention (0 pt)
                </button>
              </>
            ) : (
              <button onClick={() => avancer()} className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold py-4 rounded-xl transition shadow-lg shadow-[#3b82f6]/30">
                {current < questions.length - 1 ? "Question suivante →" : "Voir mes résultats →"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VUE RÉSULTATS
  // ══════════════════════════════════════════════════════════════════════════
  if (mode === "resultats" && resultat) {

    if (corrIndex !== null) {
      const r       = resultat.resultats[corrIndex];
      const q       = r.question;
      const letters = ["A", "B", "C", "D"];
      return (
        <div className="min-h-screen text-slate-900 font-sans bg-slate-100">
          <NavBar backFn={() => setCorrIndex(null)} titre={`Correction — Q${corrIndex + 1} / ${questions.length}`} />
          <div className="pt-20 px-6 pb-16 max-w-3xl mx-auto mt-6">
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-7 mb-5 shadow-md">
              <div className="text-xs text-slate-400 mb-3 font-bold uppercase tracking-widest">Question {corrIndex + 1}</div>
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">{q.text}</p>
            </div>
            <div className="space-y-3 mb-5">
              {q.options.map((opt, idx) => {
                const isOk  = idx === q.correct;
                const isSel = idx === r.reponse;
                return (
                  <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl border-2 shadow-sm ${isOk ? "border-emerald-400 bg-emerald-50" : isSel ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0 ${isOk ? "bg-emerald-500 text-white" : isSel ? "bg-red-500 text-white" : "bg-slate-100 border-2 border-slate-300 text-slate-500"}`}>{letters[idx]}</div>
                    <span className={`text-sm flex-1 font-medium ${isOk ? "text-emerald-800" : isSel ? "text-red-800" : "text-slate-500"}`}>{opt}</span>
                    {isOk           && <span className="text-emerald-700 font-extrabold text-sm">✓ Correct</span>}
                    {isSel && !isOk && <span className="text-red-700 font-extrabold text-sm">✗ Ta réponse</span>}
                    {r.isPassed && isOk && <span className="text-amber-600 font-extrabold text-sm">← Bonne réponse</span>}
                  </div>
                );
              })}
            </div>
            <div className="bg-white border-2 border-[#93c5fd] rounded-2xl p-5 mb-5 shadow-sm">
              <div className="text-xs text-[#1d4ed8] font-extrabold mb-2 uppercase tracking-widest">💡 Explication</div>
              <p className="text-slate-700 text-sm leading-relaxed">{q.explanation}</p>
            </div>
            <div className="flex gap-3">
              {corrIndex > 0 && <button onClick={() => setCorrIndex(corrIndex - 1)} className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition text-sm shadow-sm">← Précédente</button>}
              <button onClick={() => setCorrIndex(null)} className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition text-sm shadow-sm">↩ Résultats</button>
              {corrIndex < questions.length - 1 && <button onClick={() => setCorrIndex(corrIndex + 1)} className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition text-sm shadow-sm">Suivante →</button>}
            </div>
          </div>
        </div>
      );
    }

    const feuConfig: Record<"vert" | "jaune" | "rouge", { emoji: string; label: string; color: string; border: string; bg: string }> = {
      vert:  { emoji: "🟢", label: "Excellent !",     color: "text-emerald-700", border: "border-emerald-300", bg: "bg-emerald-50" },
      jaune: { emoji: "🟡", label: "À consolider",   color: "text-amber-700",   border: "border-amber-300",   bg: "bg-amber-50"   },
      rouge: { emoji: "🔴", label: "À retravailler",  color: "text-red-700",     border: "border-red-300",     bg: "bg-red-50"     },
    };
    const feu = feuConfig[resultat.feu];

    return (
      <div className="min-h-screen text-slate-900 font-sans bg-slate-100">
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <span className="text-sm text-slate-500 font-medium">Résultats du quiz</span>
          <button onClick={() => setMode("accueil")} className="text-sm text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-xl border-2 border-slate-300 transition font-medium bg-white">Menu</button>
        </nav>

        <div className="pt-20 px-6 pb-16 max-w-3xl mx-auto">

          <div className={`mt-6 text-center border-2 ${feu.border} ${feu.bg} rounded-2xl p-10 mb-6 shadow-md`}>
            <div className="text-5xl mb-3">{feu.emoji}</div>
            <div className={`text-2xl font-extrabold mb-3 ${feu.color}`}>{feu.label}</div>
            <div className="text-6xl font-extrabold text-slate-900 mb-1">
              {formatScore(resultat.score)} <span className="text-2xl text-slate-400">/ {resultat.scoreMax} pts</span>
            </div>
            <div className={`text-xl font-bold ${feu.color} mb-4`}>{resultat.pourcentage}%</div>
            <div className="w-full bg-slate-200 rounded-full h-3.5 max-w-sm mx-auto border border-slate-300">
              <div className={`h-3.5 rounded-full transition-all ${resultat.pourcentage >= 75 ? "bg-emerald-500" : resultat.pourcentage >= 50 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${Math.max(resultat.pourcentage, 2)}%` }}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Bonnes réponses", value: resultat.bonnes,    pts: `+${resultat.bonnes}`,                color: "text-emerald-700", border: "border-emerald-300", bg: "bg-emerald-50" },
              { label: "Mauvaises",       value: resultat.mauvaises, pts: formatScore(-resultat.mauvaises / 3), color: "text-red-700",     border: "border-red-300",     bg: "bg-red-50"     },
              { label: "Abstentions",     value: resultat.passees,   pts: "0",                                  color: "text-slate-600",   border: "border-slate-300",   bg: "bg-white"      },
            ].map(s => (
              <div key={s.label} className={`border-2 ${s.border} ${s.bg} rounded-2xl p-5 text-center shadow-sm`}>
                <div className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
                <div className="text-xs text-slate-500 font-medium mb-1">{s.label}</div>
                <div className={`text-xs font-bold ${s.color}`}>{s.pts} pts</div>
              </div>
            ))}
          </div>

          <div className="bg-white border-2 border-slate-300 rounded-2xl p-5 mb-6 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Détail du calcul</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">Bonnes réponses ({resultat.bonnes} × +1)</span><span className="text-emerald-700 font-bold">+{resultat.bonnes}</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Mauvaises réponses ({resultat.mauvaises} × -⅓)</span><span className="text-red-700 font-bold">{formatScore(-resultat.mauvaises / 3)}</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Abstentions ({resultat.passees} × 0)</span><span className="text-slate-500 font-bold">0</span></div>
              <div className="border-t-2 border-slate-200 pt-2 flex justify-between font-extrabold">
                <span className="text-slate-900">Score final</span>
                <span className={resultat.score >= 0 ? "text-emerald-700" : "text-red-700"}>{formatScore(resultat.score)} / {resultat.scoreMax}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-base mb-1 text-slate-900">Grille de correction</h2>
            <p className="text-xs text-slate-500 mb-4 font-medium">Clique sur une pastille pour revoir la question</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {resultat.resultats.map((r, idx) => (
                <button key={idx} onClick={() => setCorrIndex(idx)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-extrabold border-2 transition ${r.isCorrecte ? "bg-emerald-50 border-emerald-400 text-emerald-700 hover:bg-emerald-100" : r.isPassed ? "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200" : "bg-red-50 border-red-400 text-red-700 hover:bg-red-100"}`}>
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-5 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-700"><span className="w-3 h-3 rounded bg-emerald-50 border-2 border-emerald-400 inline-block"></span>Correcte (+1)</span>
              <span className="flex items-center gap-1.5 text-red-700"><span className="w-3 h-3 rounded bg-red-50 border-2 border-red-400 inline-block"></span>Erreur (-⅓)</span>
              <span className="flex items-center gap-1.5 text-slate-500"><span className="w-3 h-3 rounded bg-slate-100 border-2 border-slate-300 inline-block"></span>Abstention (0)</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { if (chapActif) lancerChapitre(chapActif.matiere, chapActif.chapitre); else setMode("accueil"); }}
              className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold py-4 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">
              🔄 Recommencer
            </button>
            <a href="/cours" className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold py-4 rounded-xl transition text-center text-sm flex items-center justify-center shadow-sm">
              📚 Retour aux cours
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center bg-white border-2 border-slate-300 rounded-2xl p-10 shadow-md">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-slate-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}