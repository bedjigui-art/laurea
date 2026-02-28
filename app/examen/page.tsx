"use client";
import { useState, useEffect, useRef, useCallback } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────
type Session = "scientifique" | "humaine";
type ExamMode = "setup" | "exam" | "results";
type Answer = number | null;

interface ExamQuestion {
  id: string;
  matiere: string;
  matiereLabel: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

// ─── CONSTANTES ───────────────────────────────────────────────────────────
const POINTS_CORRECT  = 1;
const POINTS_FAUX     = -0.33;
const DURATION_SEC    = 180 * 60; // 3 heures
const ALERT_SEC       = 15 * 60;  // 15 minutes restantes
const STORAGE_KEY     = "laurea_exam_state";

// ─── BANQUE DE QUESTIONS ──────────────────────────────────────────────────
const QUESTIONS_POOL: Record<string, ExamQuestion[]> = {
  biologie: [
    { id: "b01", matiere: "biologie", matiereLabel: "Biologie", text: "Quel organite produit l'ATP dans la cellule eucaryote ?", options: ["Le noyau", "La mitochondrie", "Le réticulum endoplasmique", "L'appareil de Golgi"], correct: 1, explanation: "La mitochondrie est la centrale énergétique via la phosphorylation oxydative." },
    { id: "b02", matiere: "biologie", matiereLabel: "Biologie", text: "Lors de la mitose, les chromosomes s'alignent au centre à quelle phase ?", options: ["Prophase", "Métaphase", "Anaphase", "Télophase"], correct: 1, explanation: "En métaphase, les chromosomes s'alignent sur la plaque équatoriale." },
    { id: "b03", matiere: "biologie", matiereLabel: "Biologie", text: "Quelle molécule constitue la paroi des cellules végétales ?", options: ["Chitine", "Cellulose", "Peptidoglycane", "Collagène"], correct: 1, explanation: "La cellulose est un polysaccharide de glucose formant la paroi végétale." },
    { id: "b04", matiere: "biologie", matiereLabel: "Biologie", text: "Quelle est la base azotée présente dans l'ARN mais pas dans l'ADN ?", options: ["Adénine", "Cytosine", "Uracile", "Guanine"], correct: 2, explanation: "L'ARN contient l'uracile à la place de la thymine présente dans l'ADN." },
    { id: "b05", matiere: "biologie", matiereLabel: "Biologie", text: "Quel type de cellule ne possède pas de membrane nucléaire ?", options: ["Cellule animale", "Cellule végétale", "Cellule procaryote", "Cellule fongique"], correct: 2, explanation: "Les procaryotes n'ont pas de noyau délimité par une membrane." },
    { id: "b06", matiere: "biologie", matiereLabel: "Biologie", text: "La photosynthèse se déroule dans quel organite ?", options: ["La mitochondrie", "Le chloroplaste", "Le ribosome", "Le vacuome"], correct: 1, explanation: "Le chloroplaste contient la chlorophylle et est le siège de la photosynthèse." },
    { id: "b07", matiere: "biologie", matiereLabel: "Biologie", text: "Croisement Aa × Aa : probabilité d'un individu aa ?", options: ["25%", "50%", "75%", "100%"], correct: 0, explanation: "Carré de Punnett : 1/4 AA, 2/4 Aa, 1/4 aa → 25%." },
    { id: "b08", matiere: "biologie", matiereLabel: "Biologie", text: "Lesquelles sont des purines ?", options: ["Thymine et Cytosine", "Adénine et Guanine", "Adénine et Thymine", "Guanine et Cytosine"], correct: 1, explanation: "Purines (double cycle) : Adénine (A) et Guanine (G)." },
    { id: "b09", matiere: "biologie", matiereLabel: "Biologie", text: "Qu'est-ce qu'un écosystème ?", options: ["Un groupe d'individus de même espèce", "L'ensemble des êtres vivants d'une zone", "Les êtres vivants et leur milieu abiotique", "La partie minérale d'un milieu"], correct: 2, explanation: "Un écosystème = biocénose + biotope en interaction." },
    { id: "b10", matiere: "biologie", matiereLabel: "Biologie", text: "Quel mécanisme est à la base de la théorie synthétique de l'évolution ?", options: ["Génération spontanée", "Sélection naturelle + génétique", "Hérédité des caractères acquis", "Mutation dirigée"], correct: 1, explanation: "La théorie synthétique combine sélection naturelle et génétique mendélienne." },
  ],
  chimie: [
    { id: "c01", matiere: "chimie", matiereLabel: "Chimie", text: "Quelle est la charge d'un proton ?", options: ["Négative (-1)", "Neutre (0)", "Positive (+1)", "Variable"], correct: 2, explanation: "Le proton a une charge de +1, l'électron -1, le neutron 0." },
    { id: "c02", matiere: "chimie", matiereLabel: "Chimie", text: "À quelle température l'eau pure bout-elle à 1 atm ?", options: ["90°C", "95°C", "100°C", "105°C"], correct: 2, explanation: "L'eau bout à 100°C (373,15 K) à pression atmosphérique standard." },
    { id: "c03", matiere: "chimie", matiereLabel: "Chimie", text: "Qu'est-ce que la masse molaire ?", options: ["Le nombre de protons", "La masse d'une mole en g/mol", "Le nombre d'électrons", "La masse d'un seul atome"], correct: 1, explanation: "M (g/mol) = masse de 6,022×10²³ entités." },
    { id: "c04", matiere: "chimie", matiereLabel: "Chimie", text: "Combien d'électrons peut contenir la couche L (n=2) ?", options: ["2", "6", "8", "18"], correct: 2, explanation: "Couche L : sous-couches 2s (2e) + 2p (6e) = 8 électrons max." },
    { id: "c05", matiere: "chimie", matiereLabel: "Chimie", text: "Lors d'une neutralisation acide-base, quels produits se forment ?", options: ["Un acide et un oxyde", "Un sel et de l'eau", "Deux sels", "Un oxyde et un hydroxyde"], correct: 1, explanation: "HCl + NaOH → NaCl + H₂O. Toujours sel + eau." },
    { id: "c06", matiere: "chimie", matiereLabel: "Chimie", text: "Que traduit une constante d'équilibre Keq > 1 ?", options: ["Réaction impossible", "Équilibre vers réactifs", "Équilibre vers produits", "Réaction à l'équilibre exact"], correct: 2, explanation: "Keq > 1 : les produits sont favorisés à l'équilibre." },
    { id: "c07", matiere: "chimie", matiereLabel: "Chimie", text: "Quelle est la formule de la quantité de matière ?", options: ["n = M/m", "n = m/M", "n = V/Vm", "B et C sont correctes"], correct: 3, explanation: "n = m/M (masse) et n = V/Vm (volume gaz) sont toutes deux correctes." },
    { id: "c08", matiere: "chimie", matiereLabel: "Chimie", text: "Dans une oxydoréduction, que fait le réducteur ?", options: ["Il se réduit", "Il s'oxyde", "Il reste neutre", "Il capte des électrons"], correct: 1, explanation: "Le réducteur donne des électrons et s'oxyde. L'oxydant les reçoit et se réduit." },
    { id: "c09", matiere: "chimie", matiereLabel: "Chimie", text: "Quelle loi relie pression, volume et température d'un gaz parfait ?", options: ["Loi de Newton", "PV = nRT", "E = mc²", "F = ma"], correct: 1, explanation: "PV = nRT est l'équation d'état des gaz parfaits (R = 8,314 J/mol·K)." },
    { id: "c10", matiere: "chimie", matiereLabel: "Chimie", text: "Un acide faible de pKa 4,75 à pH 4,75 : quel est le rapport [A⁻]/[HA] ?", options: ["0,5", "1", "2", "10"], correct: 1, explanation: "À pH = pKa, Henderson-Hasselbalch : pH = pKa + log([A⁻]/[HA]) → log(1) = 0 → rapport = 1." },
  ],
  physique: [
    { id: "p01", matiere: "physique", matiereLabel: "Physique", text: "Un muscle exerce 500 N sur un bras de levier de 0,05 m. Moment de force ?", options: ["10 N·m", "25 N·m", "100 N·m", "2500 N·m"], correct: 1, explanation: "M = F × d = 500 × 0,05 = 25 N·m." },
    { id: "p02", matiere: "physique", matiereLabel: "Physique", text: "Valeur de g à la surface de la Terre ?", options: ["8,9 m/s²", "9,81 m/s²", "10,5 m/s²", "11,2 m/s²"], correct: 1, explanation: "g ≈ 9,81 m/s² (souvent approché à 10 m/s² en exercice)." },
    { id: "p03", matiere: "physique", matiereLabel: "Physique", text: "Unité du travail en SI ?", options: ["Newton", "Watt", "Joule", "Pascal"], correct: 2, explanation: "W = F·d·cos(θ), exprimé en Joules (J = N·m)." },
    { id: "p04", matiere: "physique", matiereLabel: "Physique", text: "Relation entre vitesse d'onde, fréquence et longueur d'onde ?", options: ["v = f/λ", "v = f·λ", "v = λ/f", "v = f²·λ"], correct: 1, explanation: "v = f·λ. Vitesse = produit fréquence × longueur d'onde." },
    { id: "p05", matiere: "physique", matiereLabel: "Physique", text: "Rayon lumineux passant dans un milieu plus dense : que se passe-t-il ?", options: ["S'éloigne de la normale", "Se rapproche de la normale", "Ne change pas", "Totalement réfléchi"], correct: 1, explanation: "Loi de Snell : si n₂ > n₁, θ₂ < θ₁ → rapprochement de la normale." },
    { id: "p06", matiere: "physique", matiereLabel: "Physique", text: "Loi d'Ohm ?", options: ["U = R/I", "U = R·I", "U = I/R", "R = U·I"], correct: 1, explanation: "U = R·I (tension = résistance × intensité)." },
    { id: "p07", matiere: "physique", matiereLabel: "Physique", text: "Énergie cinétique d'un objet de masse m et de vitesse v ?", options: ["Ec = mv", "Ec = mv²", "Ec = ½mv²", "Ec = m²v"], correct: 2, explanation: "Ec = ½mv². C'est l'énergie liée au mouvement." },
    { id: "p08", matiere: "physique", matiereLabel: "Physique", text: "Unité de pression en SI ?", options: ["Newton", "Pascal", "Joule", "Bar"], correct: 1, explanation: "La pression s'exprime en Pascal (Pa = N/m²)." },
    { id: "p09", matiere: "physique", matiereLabel: "Physique", text: "Quelle est la vitesse de la lumière dans le vide ?", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"], correct: 1, explanation: "c = 3×10⁸ m/s = 300 000 km/s dans le vide." },
    { id: "p10", matiere: "physique", matiereLabel: "Physique", text: "1er principe de la thermodynamique : ΔU = ?", options: ["W - Q", "Q + W", "Q × W", "Q/W"], correct: 1, explanation: "ΔU = Q + W (chaleur reçue + travail reçu). Convention IUPAC." },
  ],
  mathematiques: [
    { id: "m01", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Résoudre : 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 1, explanation: "2x = 8 → x = 4." },
    { id: "m02", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Factoriser : x² - 9", options: ["(x-3)²", "(x+3)(x-3)", "(x-9)(x+1)", "(x+9)(x-1)"], correct: 1, explanation: "a²-b² = (a+b)(a-b) → x²-3² = (x+3)(x-3)." },
    { id: "m03", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Périmètre d'un cercle de rayon r ?", options: ["πr²", "2πr", "πr", "4πr"], correct: 1, explanation: "P = 2πr. L'aire est πr²." },
    { id: "m04", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "sin(30°) = ?", options: ["√3/2", "1/2", "√2/2", "1"], correct: 1, explanation: "sin(30°) = 1/2. À retenir : sin(30)=½, sin(45)=√2/2, sin(60)=√3/2." },
    { id: "m05", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Dérivée de f(x) = x³ ?", options: ["x²", "3x²", "3x", "x⁴/4"], correct: 1, explanation: "(xⁿ)' = n·xⁿ⁻¹ → (x³)' = 3x²." },
    { id: "m06", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Moyenne de : 4, 8, 6, 10, 12 ?", options: ["7", "8", "9", "10"], correct: 1, explanation: "(4+8+6+10+12)/5 = 40/5 = 8." },
    { id: "m07", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Que vaut log₁₀(1000) ?", options: ["2", "3", "4", "10"], correct: 1, explanation: "log₁₀(10³) = 3." },
    { id: "m08", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Intégrale de f(x) = 2x ?", options: ["2x²", "x² + C", "2 + C", "x + C"], correct: 1, explanation: "∫2x dx = x² + C (règle de puissance)." },
    { id: "m09", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Résoudre x² - 5x + 6 = 0", options: ["x=1 et x=6", "x=2 et x=3", "x=−2 et x=−3", "x=0 et x=5"], correct: 1, explanation: "(x-2)(x-3)=0 → x=2 ou x=3." },
    { id: "m10", matiere: "mathematiques", matiereLabel: "Mathématiques", text: "Combien y a-t-il de façons d'ordonner 4 objets distincts ?", options: ["4", "8", "24", "16"], correct: 2, explanation: "4! = 4×3×2×1 = 24 (factorielle)." },
  ],
  raisonnement: [
    { id: "r01", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Compléter : 2, 4, 8, 16, ?", options: ["24", "28", "32", "36"], correct: 2, explanation: "×2 à chaque terme → 32." },
    { id: "r02", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Tous A sont B. Tous B sont C. Donc :", options: ["Tous C sont A", "Certains A sont C", "Tous A sont C", "Aucun A n'est C"], correct: 2, explanation: "Si A⊂B et B⊂C, alors A⊂C." },
    { id: "r03", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Conclusion correcte par synthèse ?", options: ["1 observation → loi générale", "Observations convergentes → hypothèse générale", "Une hypothèse prouve un fait", "Un contre-exemple confirme une règle"], correct: 1, explanation: "La synthèse regroupe plusieurs observations pour une conclusion générale." },
    { id: "r04", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Série : 1, 1, 2, 3, 5, 8, ?", options: ["10", "12", "13", "15"], correct: 2, explanation: "Suite de Fibonacci : chaque terme = somme des deux précédents. 5+8=13." },
    { id: "r05", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Marie est plus grande que Lucie. Lucie est plus grande que Sara. Qui est la plus petite ?", options: ["Marie", "Lucie", "Sara", "Impossible à dire"], correct: 2, explanation: "Marie > Lucie > Sara donc Sara est la plus petite." },
    { id: "r06", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Série : 100, 50, 25, 12,5, ?", options: ["6", "6,25", "7", "10"], correct: 1, explanation: "÷2 à chaque terme → 12,5/2 = 6,25." },
    { id: "r07", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Si P → Q et non-Q, alors :", options: ["P est vrai", "Non-P", "Q est vrai", "Rien à conclure"], correct: 1, explanation: "Modus tollens : si P→Q et ¬Q alors ¬P." },
    { id: "r08", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Un graphique montre une corrélation. Cela implique :", options: ["Une causalité directe", "Pas nécessairement une causalité", "Une relation inverse", "Une erreur de données"], correct: 1, explanation: "Corrélation ≠ causalité. D'autres facteurs peuvent expliquer la relation." },
    { id: "r09", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Quelle est la suite logique de 3, 6, 12, 24 ?", options: ["36", "48", "72", "96"], correct: 1, explanation: "×2 à chaque étape → 24×2 = 48." },
    { id: "r10", matiere: "raisonnement", matiereLabel: "Raisonnement", text: "Quel est le contraire logique de 'Tous les étudiants sont présents' ?", options: ["Aucun étudiant n'est présent", "Au moins un étudiant est absent", "La moitié sont absents", "Tous sont absents"], correct: 1, explanation: "La négation de 'Tous sont P' est 'Au moins un n'est pas P'." },
  ],
  ethique: [
    { id: "e01", matiere: "ethique", matiereLabel: "Éthique", text: "Quelle attitude favorise une communication médicale efficace ?", options: ["Jargon médical complexe", "Adapter son langage au patient", "Éviter le contact visuel", "Réduire le temps de consultation"], correct: 1, explanation: "Adapter son discours favorise clarté et compréhension." },
    { id: "e02", matiere: "ethique", matiereLabel: "Éthique", text: "Le principe d'autonomie en éthique médicale ?", options: ["Le médecin décide seul", "Le patient décide librement et de façon éclairée", "La famille choisit", "L'équipe vote"], correct: 1, explanation: "L'autonomie garantit le droit du patient à une décision libre et éclairée." },
    { id: "e03", matiere: "ethique", matiereLabel: "Éthique", text: "L'empathie en médecine se définit comme :", options: ["Partager les mêmes émotions", "Comprendre l'état émotionnel sans le confondre avec le sien", "Éviter d'aborder les émotions", "Éprouver de la pitié"], correct: 1, explanation: "L'empathie = comprendre sans fusionner. Distincte de la sympathie." },
    { id: "e04", matiere: "ethique", matiereLabel: "Éthique", text: "Qu'est-ce que le consentement éclairé ?", options: ["Signature d'un formulaire", "Accord du patient après information complète", "Accord de la famille", "Décision du médecin validée par le patient"], correct: 1, explanation: "Le consentement éclairé requiert information complète + décision libre du patient." },
    { id: "e05", matiere: "ethique", matiereLabel: "Éthique", text: "Quel principe éthique impose de 'ne pas nuire' ?", options: ["Autonomie", "Bienfaisance", "Non-malfaisance", "Justice"], correct: 2, explanation: "Primum non nocere : le principe de non-malfaisance interdit de causer du tort." },
    { id: "e06", matiere: "ethique", matiereLabel: "Éthique", text: "Le secret médical peut-il être levé ?", options: ["Jamais", "Toujours si le patient le demande", "Dans certains cas prévus par la loi", "À la demande de la famille"], correct: 2, explanation: "Cas légaux : maladies contagieuses, maltraitance d'enfant, menace grave..." },
    { id: "e07", matiere: "ethique", matiereLabel: "Éthique", text: "Qu'implique le principe de justice en éthique médicale ?", options: ["Punir les erreurs médicales", "Distribuer équitablement les ressources de santé", "Toujours dire la vérité", "Respecter l'autonomie"], correct: 1, explanation: "La justice implique équité dans l'accès aux soins et la distribution des ressources." },
    { id: "e08", matiere: "ethique", matiereLabel: "Éthique", text: "Face à un patient qui refuse un traitement vital, le médecin doit :", options: ["Imposer le traitement", "Respecter le refus après s'être assuré de son caractère éclairé", "Appeler la police", "Contacter la famille sans l'accord du patient"], correct: 1, explanation: "Le respect de l'autonomie prime, sauf si le patient est incapable de décider." },
    { id: "e09", matiere: "ethique", matiereLabel: "Éthique", text: "Qu'est-ce que la bienveillance en médecine ?", options: ["Être gentil avec les patients", "Agir dans le meilleur intérêt du patient", "Éviter tout risque", "Toujours guérir"], correct: 1, explanation: "La bienfaisance = agir dans le meilleur intérêt du patient, même si difficile." },
    { id: "e10", matiere: "ethique", matiereLabel: "Éthique", text: "Un médecin découvre une erreur médicale d'un collègue. Que doit-il faire ?", options: ["Ne rien dire pour protéger le collègue", "En informer le patient et le signaler", "Corriger discrètement sans en parler", "Attendre que le patient se plaigne"], correct: 1, explanation: "Le médecin a l'obligation déontologique d'informer le patient et de signaler l'erreur." },
  ],
};

// ─── GÉNÉRATION EXAMEN ────────────────────────────────────────────────────
const generateExam = (session: Session): ExamQuestion[] => {
  if (session === "scientifique") {
    const matieres = ["biologie", "chimie", "physique", "mathematiques"];
    return matieres.flatMap(m =>
      [...(QUESTIONS_POOL[m] || [])].sort(() => Math.random() - 0.5).slice(0, 10)
    );
  } else {
    const rais = [...QUESTIONS_POOL.raisonnement].sort(() => Math.random() - 0.5).slice(0, 10);
    const eth  = [...QUESTIONS_POOL.ethique].sort(() => Math.random() - 0.5).slice(0, 10);
    const sci1 = [...QUESTIONS_POOL.biologie].sort(() => Math.random() - 0.5).slice(0, 10);
    const sci2 = [...QUESTIONS_POOL.chimie].sort(() => Math.random() - 0.5).slice(0, 10);
    return [...rais, ...eth, ...sci1, ...sci2];
  }
};

// ─── CALCUL SCORE ─────────────────────────────────────────────────────────
const calculateScore = (questions: ExamQuestion[], answers: Answer[]) => {
  let correct = 0; let wrong = 0; let skipped = 0;
  let rawScore = 0;
  questions.forEach((q, i) => {
    const a = answers[i];
    if (a === null) { skipped++; }
    else if (a === q.correct) { correct++; rawScore += POINTS_CORRECT; }
    else { wrong++; rawScore += POINTS_FAUX; }
  });
  const finalScore = Math.max(0, rawScore);
  const scoreOn20  = Math.round((finalScore / questions.length) * 20 * 100) / 100;
  const pct        = Math.round((finalScore / questions.length) * 100);
  return { correct, wrong, skipped, rawScore, finalScore, scoreOn20, pct };
};

// ─── FORMAT TIMER ─────────────────────────────────────────────────────────
const fmt = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════
export default function ExamenPage() {
  const [mode, setMode]         = useState<ExamMode>("setup");
  const [session, setSession]   = useState<Session | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers]   = useState<Answer[]>([]);
  const [doubts, setDoubts]     = useState<boolean[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_SEC);
  const [confirmed, setConfirmed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ── PERSISTANCE LOCALSTORAGE ─────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const s = JSON.parse(saved);
        if (s.mode === "exam" && s.questions?.length > 0 && s.timeLeft > 0) {
          setMode("exam");
          setSession(s.session);
          setQuestions(s.questions);
          setAnswers(s.answers);
          setDoubts(s.doubts);
          setCurrentQ(s.currentQ ?? 0);
          setTimeLeft(s.timeLeft);
        }
      }
    } catch {}
  }, []);

  const saveState = useCallback(() => {
    if (mode === "exam") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, session, questions, answers, doubts, currentQ, timeLeft }));
      } catch {}
    }
  }, [mode, session, questions, answers, doubts, currentQ, timeLeft]);

  // ── TIMER ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (mode !== "exam") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setConfirmed(true);
          setMode("results");
          localStorage.removeItem(STORAGE_KEY);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [mode]);

  useEffect(() => { saveState(); }, [answers, doubts, currentQ, timeLeft]);

  // ── LANCER EXAMEN ────────────────────────────────────────────────────
  const startExam = (s: Session) => {
    const qs = generateExam(s);
    setSession(s);
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setDoubts(new Array(qs.length).fill(false));
    setCurrentQ(0);
    setTimeLeft(DURATION_SEC);
    setConfirmed(false);
    setMode("exam");
  };

  // ── RÉPONDRE ─────────────────────────────────────────────────────────
  const selectAnswer = (idx: number) => {
    setAnswers(prev => {
      const n = [...prev];
      n[currentQ] = n[currentQ] === idx ? null : idx; // toggle = abstention
      return n;
    });
  };

  const toggleDoubt = () => {
    setDoubts(prev => { const n = [...prev]; n[currentQ] = !n[currentQ]; return n; });
  };

  // ── VALIDER ──────────────────────────────────────────────────────────
  const submitExam = () => {
    clearInterval(timerRef.current!);
    setConfirmed(true);
    setMode("results");
    localStorage.removeItem(STORAGE_KEY);
  };

  // ── RÉINITIALISER ────────────────────────────────────────────────────
  const reset = () => {
    clearInterval(timerRef.current!);
    setMode("setup");
    setSession(null);
    setQuestions([]);
    setAnswers([]);
    setDoubts([]);
    setCurrentQ(0);
    setConfirmed(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isTimerRed = timeLeft <= ALERT_SEC && mode === "exam";

  // ════════════════════════════════════════════════════════════════════════
  // VUE : SETUP
  // ════════════════════════════════════════════════════════════════════════
  if (mode === "setup") return (
    <div className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Cours", href: "/cours" },
              { label: "Quiz", href: "/quiz" },
              { label: "Examens", href: "/examens", active: true },
              { label: "Concours", href: "/concours" },
            ].map(item => (
              <a key={item.label} href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${"active" in item && item.active ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold shadow-sm">A</div>
      </nav>

      <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Mode Lauréat</div>
          <h1 className="text-4xl font-extrabold mb-3 text-slate-900">Simulation d'examen ARES</h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">Reproduit fidèlement les conditions officielles du concours. Pas de feedback, navigation libre, chronomètre réel.</p>
        </div>

        {/* RÈGLES */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4 text-base flex items-center gap-2">📋 Règles du concours ARES 2026</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {[
              { icon: "✅", label: "Bonne réponse", pts: "+1 point", color: "bg-emerald-50 border-emerald-300 text-emerald-700" },
              { icon: "❌", label: "Mauvaise réponse", pts: "−0,33 point", color: "bg-red-50 border-red-300 text-red-700" },
              { icon: "⬜", label: "Abstention", pts: "0 point", color: "bg-slate-50 border-slate-300 text-slate-600" },
            ].map(r => (
              <div key={r.label} className={`border-2 ${r.color} rounded-xl p-4 text-center`}>
                <div className="text-2xl mb-2">{r.icon}</div>
                <div className="text-sm font-semibold">{r.label}</div>
                <div className="text-lg font-extrabold">{r.pts}</div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div className="text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-amber-700">Stratégie clé :</span> Ne réponds que si tu as plus de 25% de certitude. En cas de doute total, l'abstention est plus rentable que le hasard. Le score final ne peut pas descendre en dessous de 0.
              </div>
            </div>
          </div>
        </div>

        {/* CHOIX SESSION */}
        <h2 className="font-bold text-slate-900 mb-4 text-lg">Choisir ta session</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {([
            {
              id: "scientifique" as Session,
              titre: "Session Scientifique",
              emoji: "🔬",
              desc: "40 questions · 10 par matière",
              matieres: ["10 Biologie", "10 Chimie", "10 Physique", "10 Mathématiques"],
              color: "border-[#93c5fd] bg-[#eff6ff]",
              btnColor: "bg-[#3b82f6] hover:bg-[#2563eb]",
              badge: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]",
            },
            {
              id: "humaine" as Session,
              titre: "Session Humaine",
              emoji: "🧠",
              desc: "40 questions · 4 blocs thématiques",
              matieres: ["10 Raisonnement", "10 Éthique & Communication", "10 Biologie", "10 Chimie"],
              color: "border-purple-300 bg-purple-50",
              btnColor: "bg-purple-600 hover:bg-purple-500",
              badge: "bg-purple-50 border-purple-300 text-purple-700",
            },
          ] as const).map(s => (
            <div key={s.id} className={`bg-white border-2 ${s.color} rounded-2xl p-6 shadow-md`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{s.titre}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border-2 ${s.badge}`}>{s.desc}</span>
                </div>
              </div>
              <div className="space-y-1.5 mb-5">
                {s.matieres.map(m => (
                  <div key={m} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                    {m}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-5 font-medium">
                <span>⏱</span>
                <span>180 minutes · 3 heures</span>
                <span className="mx-1">·</span>
                <span>40 questions</span>
              </div>
              <button onClick={() => startExam(s.id)}
                className={`w-full ${s.btnColor} text-white font-bold px-5 py-3 rounded-xl transition shadow-lg text-sm`}>
                Entrer dans la salle d'examen →
              </button>
            </div>
          ))}
        </div>

        {/* CONSEILS */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Avant de commencer</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Prévois 3h sans interruption — le timer ne s'arrête pas",
              "Assure-toi d'une connexion stable (tes réponses sont sauvegardées en local)",
              "Tu peux marquer des questions d'un 🚩 pour y revenir plus tard",
              "Le score apparaît uniquement à la fin — aucun feedback pendant l'épreuve",
              "Navigation libre : passe une question difficile, reviens-y après",
              "Seuil d'admission : 10/20 (barème ARES officiel 2026)",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="text-[#3b82f6] font-bold flex-shrink-0 mt-0.5">→</span>
                {tip}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

  // ════════════════════════════════════════════════════════════════════════
  // VUE : EXAMEN
  // ════════════════════════════════════════════════════════════════════════
  if (mode === "exam" && questions.length > 0) {
    const q          = questions[currentQ];
    const totalQ     = questions.length;
    const answered   = answers.filter(a => a !== null).length;
    const inDoubt    = doubts[currentQ];
    const letters    = ["A", "B", "C", "D"];
    const matieres   = [...new Set(questions.map(q => q.matiereLabel))];

    return (
      <div className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f3f4f6" }}>

        {/* BARRE SUPÉRIEURE EXAMEN */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-300 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2.5">
            {/* Logo + session */}
            <div className="flex items-center gap-3">
              <a href="/" className="text-lg font-bold text-slate-900 flex-shrink-0">LAU<span className="text-[#3b82f6]">REA</span></a>
              <span className="hidden md:block text-xs text-slate-500 font-semibold uppercase tracking-widest border-l-2 border-slate-200 pl-3">
                {session === "scientifique" ? "Session Scientifique" : "Session Humaine"}
              </span>
            </div>

            {/* TIMER */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-mono text-lg font-extrabold ${isTimerRed ? "bg-red-50 border-red-400 text-red-700 animate-pulse" : "bg-slate-50 border-slate-300 text-slate-900"}`}>
              {isTimerRed && <span className="text-sm">⚠️</span>}
              {fmt(timeLeft)}
            </div>

            {/* Progress + Valider */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-600">
                <div className="w-24 bg-slate-200 rounded-full h-2 border border-slate-300">
                  <div className="h-2 rounded-full bg-[#3b82f6] transition-all" style={{ width: `${(answered / totalQ) * 100}%` }}></div>
                </div>
                <span>{answered}/{totalQ} répondues</span>
              </div>
              <button onClick={() => {
                if (window.confirm(`Valider l'examen maintenant ? (${totalQ - answered} question(s) non répondues)`)) submitExam();
              }}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2 rounded-xl transition text-sm shadow-md">
                Valider l'examen
              </button>
            </div>
          </div>

          {/* Barre matières */}
          <div className="flex border-t border-slate-200 overflow-x-auto">
            {matieres.map(mat => {
              const matiereQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.matiereLabel === mat);
              const matAnswered = matiereQs.filter(({ i }) => answers[i] !== null).length;
              const matTotal    = matiereQs.length;
              return (
                <div key={mat} className="flex-1 min-w-fit px-3 py-1.5 border-r last:border-r-0 border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold truncate">{mat}</div>
                  <div className="text-xs font-bold text-slate-700">{matAnswered}/{matTotal}</div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* CORPS : GRILLE + QUESTION */}
        <div className="pt-28 flex h-screen">

          {/* GRILLE LATÉRALE */}
          <div className="hidden lg:flex flex-col w-52 flex-shrink-0 bg-white border-r-2 border-slate-300 overflow-y-auto p-3 pt-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Navigation</div>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((_, i) => {
                const isAnswered = answers[i] !== null;
                const isDoubt    = doubts[i];
                const isCurrent  = i === currentQ;
                return (
                  <button key={i} onClick={() => setCurrentQ(i)}
                    className={`w-8 h-8 rounded-lg text-xs font-extrabold transition border-2 ${
                      isCurrent
                        ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                        : isDoubt
                        ? "bg-orange-50 border-orange-400 text-orange-700"
                        : isAnswered
                        ? "bg-emerald-50 border-emerald-400 text-emerald-700"
                        : "bg-white border-slate-300 text-slate-500 hover:border-slate-400"
                    }`}>
                    {i + 1}
                  </button>
                );
              })}
            </div>

            {/* Légende */}
            <div className="mt-4 space-y-1.5 px-1">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-4 h-4 rounded border-2 border-[#3b82f6] bg-[#3b82f6] flex-shrink-0"></div> En cours
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-4 h-4 rounded border-2 border-emerald-400 bg-emerald-50 flex-shrink-0"></div> Répondue
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-4 h-4 rounded border-2 border-orange-400 bg-orange-50 flex-shrink-0"></div> En doute
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-4 h-4 rounded border-2 border-slate-300 bg-white flex-shrink-0"></div> Non répondue
              </div>
            </div>

            {/* Résumé */}
            <div className="mt-4 bg-slate-50 border-2 border-slate-200 rounded-xl p-3">
              <div className="text-xs font-bold text-slate-600 mb-2">Résumé</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-700"><span>Répondues</span><span className="font-bold text-emerald-700">{answered}</span></div>
                <div className="flex justify-between text-slate-700"><span>En doute</span><span className="font-bold text-orange-600">{doubts.filter(Boolean).length}</span></div>
                <div className="flex justify-between text-slate-700"><span>Non répondues</span><span className="font-bold text-slate-500">{totalQ - answered}</span></div>
              </div>
            </div>
          </div>

          {/* QUESTION PRINCIPALE */}
          <div className="flex-1 overflow-y-auto px-6 py-6 max-w-3xl mx-auto w-full">

            {/* HEADER QUESTION */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Question {currentQ + 1} / {totalQ}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-slate-600 font-semibold">{q.matiereLabel}</span>
              </div>
              <button onClick={toggleDoubt}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border-2 transition ${inDoubt ? "bg-orange-50 border-orange-400 text-orange-700" : "bg-white border-slate-300 text-slate-600 hover:border-orange-300"}`}>
                🚩 {inDoubt ? "Doute marqué" : "Marquer un doute"}
              </button>
            </div>

            {/* ÉNONCÉ */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-7 mb-5 shadow-sm">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">{q.text}</p>
            </div>

            {/* OPTIONS — PAS DE FEEDBACK COULEUR */}
            <div className="space-y-3 mb-6">
              {q.options.map((opt, idx) => {
                const isSelected = answers[currentQ] === idx;
                return (
                  <button key={idx} onClick={() => selectAnswer(idx)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition text-left shadow-sm ${
                      isSelected
                        ? "border-[#3b82f6] bg-[#dbeafe]"
                        : "border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50"
                    }`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0 border-2 transition ${
                      isSelected ? "bg-[#3b82f6] border-[#3b82f6] text-white" : "bg-slate-100 border-slate-300 text-slate-600"
                    }`}>
                      {letters[idx]}
                    </div>
                    <span className={`text-sm leading-relaxed font-medium flex-1 ${isSelected ? "text-[#1d4ed8]" : "text-slate-800"}`}>{opt}</span>
                    {isSelected && <span className="text-[#3b82f6] font-extrabold text-sm flex-shrink-0">✓</span>}
                  </button>
                );
              })}
            </div>

            {/* INFO ABSTENTION */}
            {answers[currentQ] !== null && (
              <div className="text-xs text-slate-500 text-center mb-4 font-medium">
                Clique à nouveau sur ta réponse pour l'annuler (abstention = 0 point)
              </div>
            )}

            {/* NAVIGATION */}
            <div className="flex gap-3 mt-4">
              <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}
                className="bg-white border-2 border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-xl transition hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed text-sm shadow-sm">
                ← Précédente
              </button>
              <button onClick={() => setCurrentQ(Math.min(totalQ - 1, currentQ + 1))} disabled={currentQ === totalQ - 1}
                className="flex-1 bg-slate-900 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl transition text-sm shadow-sm disabled:opacity-40">
                Suivante →
              </button>
            </div>

            {/* GRILLE MOBILE */}
            <div className="lg:hidden mt-6 bg-white border-2 border-slate-300 rounded-2xl p-4 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Navigation rapide</div>
              <div className="flex flex-wrap gap-1.5">
                {questions.map((_, i) => {
                  const isAns = answers[i] !== null;
                  const isDbt = doubts[i];
                  const isCur = i === currentQ;
                  return (
                    <button key={i} onClick={() => setCurrentQ(i)}
                      className={`w-8 h-8 rounded-lg text-xs font-extrabold border-2 transition ${
                        isCur ? "bg-[#3b82f6] border-[#3b82f6] text-white" : isDbt ? "bg-orange-50 border-orange-400 text-orange-700" : isAns ? "bg-emerald-50 border-emerald-400 text-emerald-700" : "bg-white border-slate-300 text-slate-500"
                      }`}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // VUE : RÉSULTATS
  // ════════════════════════════════════════════════════════════════════════
  if (mode === "results" && questions.length > 0) {
    const result   = calculateScore(questions, answers);
    const admis    = result.scoreOn20 >= 10;
    const timePct  = Math.round(((DURATION_SEC - timeLeft) / DURATION_SEC) * 100);

    // Analyse stratégique IA
    const wrongRate   = result.wrong   / questions.length;
    const skippedRate = result.skipped / questions.length;
    let strategyTitle = "";
    let strategyText  = "";
    let strategyColor = "";

    if (wrongRate > 0.35) {
      strategyTitle = "⚡ Trop audacieux(se)";
      strategyText  = `Tu as pris trop de risques : ${result.wrong} mauvaises réponses ont coûté ${Math.abs(result.wrong * POINTS_FAUX).toFixed(2)} points de pénalité. À l'ARES, une réponse fausse coûte plus que 3 abstentions ne rapportent. Entraîne-toi à identifier tes zones de doute et à t'abstenir sur les questions incertaines.`;
      strategyColor = "bg-red-50 border-red-300 text-red-800";
    } else if (skippedRate > 0.5) {
      strategyTitle = "🛡️ Trop prudent(e)";
      strategyText  = `Tu t'es abstenu(e) sur ${result.skipped} questions (${Math.round(skippedRate * 100)}%). Si certaines étaient sur des sujets que tu maîtrises, c'est du potentiel non exploité. Travaille ta confiance et apprends à distinguer le doute réel de la simple hésitation.`;
      strategyColor = "bg-amber-50 border-amber-300 text-amber-800";
    } else {
      strategyTitle = "🎯 Stratégie équilibrée";
      strategyText  = `Bonne gestion du risque : tu as trouvé un équilibre entre réponses et abstentions. Continue à affiner ta capacité à distinguer ce que tu sais de ce que tu ne sais pas — c'est la clé du score ARES.`;
      strategyColor = "bg-emerald-50 border-emerald-300 text-emerald-800";
    }

    // Stats par matière
    const statsByMatiere: Record<string, { correct: number; wrong: number; skipped: number; total: number }> = {};
    questions.forEach((q, i) => {
      if (!statsByMatiere[q.matiereLabel]) statsByMatiere[q.matiereLabel] = { correct: 0, wrong: 0, skipped: 0, total: 0 };
      const s = statsByMatiere[q.matiereLabel];
      s.total++;
      const a = answers[i];
      if (a === null) s.skipped++;
      else if (a === q.correct) s.correct++;
      else s.wrong++;
    });

    return (
      <div className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <span className="text-sm text-slate-500 font-semibold">Résultats de la simulation</span>
          <button onClick={reset} className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-4 py-2 rounded-xl transition text-sm">Nouvel examen</button>
        </nav>

        <div className="pt-20 px-6 pb-16 max-w-4xl mx-auto">

          {/* VERDICT */}
          <div className={`mt-8 text-center border-2 rounded-3xl p-10 mb-6 shadow-md ${admis ? "bg-emerald-50 border-emerald-400" : "bg-red-50 border-red-400"}`}>
            <div className="text-6xl mb-4">{admis ? "🎉" : "📚"}</div>
            <div className={`text-3xl font-extrabold mb-2 ${admis ? "text-emerald-700" : "text-red-700"}`}>
              {admis ? "ADMIS(E)" : "AJOURNÉ(E)"}
            </div>
            <div className="text-5xl font-extrabold text-slate-900 mb-1">{result.scoreOn20}<span className="text-2xl text-slate-400">/20</span></div>
            <div className={`text-base font-semibold mb-4 ${admis ? "text-emerald-600" : "text-red-600"}`}>
              {admis ? "Score au-dessus du seuil de 10/20" : "Seuil d'admission : 10/20 minimum"}
            </div>
            <div className="w-full max-w-sm mx-auto bg-white/60 rounded-full h-4 border-2 border-white">
              <div className={`h-4 rounded-full transition-all ${admis ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${Math.min(result.scoreOn20 / 20 * 100, 100)}%` }}></div>
            </div>
            <div className="flex justify-between text-xs font-bold mt-1 max-w-sm mx-auto">
              <span className="text-slate-500">0</span>
              <span className={`${admis ? "text-emerald-700" : "text-red-700"}`}>⬆ Seuil : 10</span>
              <span className="text-slate-500">20</span>
            </div>
          </div>

          {/* STATS GLOBALES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Bonnes réponses", value: result.correct,  pts: `+${result.correct}`,               color: "bg-emerald-50 border-emerald-300 text-emerald-700" },
              { label: "Mauvaises",       value: result.wrong,    pts: `${(result.wrong * POINTS_FAUX).toFixed(2)}`, color: "bg-red-50 border-red-300 text-red-700"         },
              { label: "Abstentions",     value: result.skipped,  pts: "0",                                color: "bg-slate-50 border-slate-300 text-slate-600"   },
              { label: "Temps utilisé",   value: `${timePct}%`,   pts: fmt(DURATION_SEC - timeLeft),        color: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]"  },
            ].map(s => (
              <div key={s.label} className={`border-2 ${s.color} rounded-2xl p-4 text-center shadow-sm`}>
                <div className={`text-3xl font-extrabold mb-1`}>{s.value}</div>
                <div className="text-xs font-semibold mb-1 opacity-75">{s.label}</div>
                <div className="text-xs font-bold">{s.pts} pts</div>
              </div>
            ))}
          </div>

          {/* DÉTAIL SCORE */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-4 text-base">Calcul détaillé du score</h2>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Score brut ({result.correct} × +1)</span>
                <span className="text-emerald-700 font-bold">+{result.correct}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Pénalités ({result.wrong} × −0,33)</span>
                <span className="text-red-700 font-bold">{(result.wrong * POINTS_FAUX).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Abstentions ({result.skipped} × 0)</span>
                <span className="text-slate-500 font-bold">0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b-2 border-slate-300">
                <span className="text-slate-600 font-medium">Score net (min. 0)</span>
                <span className="text-slate-900 font-bold">{result.finalScore.toFixed(2)} / {questions.length}</span>
              </div>
              <div className="flex justify-between items-center py-2 pt-3">
                <span className="text-slate-900 font-extrabold text-base">Note finale /20</span>
                <span className={`text-2xl font-extrabold ${admis ? "text-emerald-700" : "text-red-700"}`}>{result.scoreOn20}/20</span>
              </div>
            </div>
          </div>

          {/* ANALYSE PAR MATIÈRE */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-5 text-base">Performance par matière</h2>
            <div className="space-y-4">
              {Object.entries(statsByMatiere).map(([mat, s]) => {
                const pct = Math.round((s.correct / s.total) * 100);
                const feuColor = pct >= 75 ? "bg-emerald-500" : pct >= 50 ? "bg-yellow-500" : "bg-red-500";
                const feuBadge = pct >= 75 ? "bg-emerald-50 border-emerald-300 text-emerald-700" : pct >= 50 ? "bg-amber-50 border-amber-300 text-amber-700" : "bg-red-50 border-red-300 text-red-700";
                const feuLabel = pct >= 75 ? "🟢 Maîtrisé" : pct >= 50 ? "🟡 À consolider" : "🔴 À retravailler";
                return (
                  <div key={mat} className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-800 w-32 flex-shrink-0">{mat}</span>
                    <div className="flex-1 bg-slate-200 rounded-full h-3 border border-slate-300">
                      <div className={`h-3 rounded-full ${feuColor}`} style={{ width: `${pct}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 w-12 text-right">{s.correct}/{s.total}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border-2 w-28 text-center ${feuBadge}`}>{feuLabel}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ANALYSE STRATÉGIQUE */}
          <div className={`border-2 ${strategyColor} rounded-2xl p-6 mb-6 shadow-sm`}>
            <h2 className="font-extrabold mb-3 text-base">{strategyTitle}</h2>
            <p className="text-sm leading-relaxed">{strategyText}</p>
          </div>

          {/* CORRECTION QUESTION PAR QUESTION */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-1 text-base">Correction complète</h2>
            <p className="text-xs text-slate-500 mb-4 font-medium">Clique sur une question pour voir sa correction</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {questions.map((q, i) => {
                const a = answers[i];
                const isOk  = a !== null && a === q.correct;
                const isErr = a !== null && a !== q.correct;
                return (
                  <details key={i} className="w-full">
                    <summary className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer list-none transition ${isOk ? "bg-emerald-50 border-emerald-300 hover:bg-emerald-100" : isErr ? "bg-red-50 border-red-300 hover:bg-red-100" : "bg-slate-50 border-slate-300 hover:bg-slate-100"}`}>
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold border-2 flex-shrink-0 ${isOk ? "bg-emerald-500 border-emerald-500 text-white" : isErr ? "bg-red-500 border-red-500 text-white" : "bg-slate-100 border-slate-300 text-slate-500"}`}>{i + 1}</span>
                      <span className="text-sm font-medium text-slate-800 flex-1 truncate">{q.text}</span>
                      <span className="text-xs font-bold flex-shrink-0 mr-2">{isOk ? "+1 pt" : isErr ? "−0,33 pt" : "0 pt"}</span>
                      <span className="text-slate-400 text-xs flex-shrink-0">▼</span>
                    </summary>
                    <div className="mt-2 ml-11 space-y-2 pb-3">
                      {q.options.map((opt, idx) => {
                        const sel = answers[i] === idx;
                        const ok  = idx === q.correct;
                        return (
                          <div key={idx} className={`flex items-center gap-3 p-2.5 rounded-xl border-2 text-sm ${ok ? "bg-emerald-50 border-emerald-300" : sel ? "bg-red-50 border-red-300" : "bg-white border-slate-200"}`}>
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold ${ok ? "bg-emerald-500 text-white" : sel ? "bg-red-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                              {["A","B","C","D"][idx]}
                            </span>
                            <span className={`flex-1 ${ok ? "text-emerald-800 font-semibold" : sel && !ok ? "text-red-800" : "text-slate-500"}`}>{opt}</span>
                            {ok  && <span className="text-emerald-700 font-extrabold text-xs">✓ Correcte</span>}
                            {sel && !ok && <span className="text-red-700 font-extrabold text-xs">✗ Ta réponse</span>}
                          </div>
                        );
                      })}
                      <div className="bg-[#dbeafe] border-2 border-[#93c5fd] rounded-xl p-3 mt-2">
                        <div className="text-xs text-[#1d4ed8] font-extrabold mb-1 uppercase tracking-widest">💡 Explication</div>
                        <p className="text-sm text-slate-700">{q.explanation}</p>
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <button onClick={() => session && startExam(session)}
              className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold py-4 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">
              🔄 Recommencer cette session
            </button>
            <button onClick={reset}
              className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold py-4 rounded-xl transition shadow-sm text-sm">
              📋 Choisir une autre session
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f1f4f8" }}>
      <div className="text-center bg-white border-2 border-slate-300 rounded-2xl p-10 shadow-md">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-slate-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}