export type Question = {
  id: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type ReponseUtilisateur = number | null;

export type ResultatQuestion = {
  question: Question;
  reponse: ReponseUtilisateur;
  isCorrecte: boolean;
  isPassed: boolean;
  pointsObtenus: number;
};

export type ResultatQuiz = {
  score: number;
  scoreMax: number;
  pourcentage: number;
  bonnes: number;
  mauvaises: number;
  passees: number;
  resultats: ResultatQuestion[];
  feu: "vert" | "jaune" | "rouge";
};

export type ChapitreInfo = {
  matiere: string;
  chapitre: string;
  titre: string;
  icon: string;
};