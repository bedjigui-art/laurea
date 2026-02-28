export default function Matieres() {
  const matieres = [
    {
      id: "mathematiques",
      nom: "Mathématiques",
      icon: "📐",
      couleur: "blue",
      questions: "1 500+",
      chapitres: 18,
      duree: "~45h de contenu",
      description: "Les mathématiques représentent une part importante du concours ARES. Maîtrise l'analyse, l'algèbre et les probabilités pour maximiser ton score.",
      themes: [
        { titre: "Analyse", sousthemes: ["Fonctions et limites", "Dérivées et applications", "Intégrales définies et indéfinies", "Équations différentielles"] },
        { titre: "Algèbre", sousthemes: ["Matrices et déterminants", "Systèmes d'équations", "Nombres complexes", "Polynômes"] },
        { titre: "Probabilités & Statistiques", sousthemes: ["Probabilités classiques", "Variables aléatoires", "Lois de distribution", "Statistiques descriptives"] },
        { titre: "Suites & Séries", sousthemes: ["Suites arithmétiques et géométriques", "Convergence", "Séries numériques", "Développements limités"] },
      ],
      chapitresList: [
        { num: 1, titre: "Fonctions et limites", score: 85, statut: "🟢" },
        { num: 2, titre: "Dérivées et applications", score: 72, statut: "🟡" },
        { num: 3, titre: "Intégrales", score: 45, statut: "🔴" },
        { num: 4, titre: "Suites numériques", score: 0, statut: "🔒" },
        { num: 5, titre: "Probabilités de base", score: 0, statut: "🔒" },
        { num: 6, titre: "Variables aléatoires", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "chimie",
      nom: "Chimie",
      icon: "⚗️",
      couleur: "yellow",
      questions: "1 500+",
      chapitres: 20,
      duree: "~50h de contenu",
      description: "La chimie est l'une des matières les plus exigeantes du concours ARES. Du niveau atomique à la chimie organique, maîtrise chaque concept clé.",
      themes: [
        { titre: "Chimie générale", sousthemes: ["Structure atomique", "Liaisons chimiques", "États de la matière", "Solutions aqueuses"] },
        { titre: "Cinétique & Équilibres", sousthemes: ["Cinétique chimique", "Équilibres chimiques", "Acides et bases", "Produits de solubilité"] },
        { titre: "Électrochimie", sousthemes: ["Oxydoréduction", "Piles électrochimiques", "Électrolyse", "Potentiels standards"] },
        { titre: "Chimie organique", sousthemes: ["Nomenclature", "Stéréochimie", "Réactions organiques", "Fonctions chimiques"] },
      ],
      chapitresList: [
        { num: 1, titre: "Structure atomique", score: 90, statut: "🟢" },
        { num: 2, titre: "Liaisons chimiques", score: 78, statut: "🟢" },
        { num: 3, titre: "Cinétique chimique", score: 42, statut: "🔴" },
        { num: 4, titre: "Équilibres chimiques", score: 0, statut: "🔒" },
        { num: 5, titre: "Électrochimie", score: 0, statut: "🔒" },
        { num: 6, titre: "Chimie organique", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "biologie",
      nom: "Biologie",
      icon: "🔬",
      couleur: "green",
      questions: "1 200+",
      chapitres: 15,
      duree: "~38h de contenu",
      description: "La biologie au concours ARES couvre du niveau cellulaire jusqu'à l'écosystème. Une compréhension solide des mécanismes du vivant est indispensable.",
      themes: [
        { titre: "Biologie cellulaire", sousthemes: ["Structure cellulaire", "Membranes et transport", "Division cellulaire", "Organites"] },
        { titre: "Génétique", sousthemes: ["ADN et réplication", "Transcription et traduction", "Génétique mendélienne", "Mutations"] },
        { titre: "Métabolisme", sousthemes: ["Respiration cellulaire", "Photosynthèse", "Fermentation", "Régulation enzymatique"] },
        { titre: "Évolution & Écologie", sousthemes: ["Théorie de l'évolution", "Sélection naturelle", "Écosystèmes", "Biodiversité"] },
      ],
      chapitresList: [
        { num: 1, titre: "La cellule", score: 95, statut: "🟢" },
        { num: 2, titre: "ADN et réplication", score: 88, statut: "🟢" },
        { num: 3, titre: "Génétique mendélienne", score: 82, statut: "🟢" },
        { num: 4, titre: "Génétique moléculaire", score: 0, statut: "🔒" },
        { num: 5, titre: "Métabolisme", score: 0, statut: "🔒" },
        { num: 6, titre: "Évolution", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "physique",
      nom: "Physique",
      icon: "⚡",
      couleur: "red",
      questions: "1 200+",
      chapitres: 16,
      duree: "~40h de contenu",
      description: "La physique du concours ARES exige une maîtrise des lois fondamentales et leur application à des problèmes concrets. Rigueur et méthode sont essentielles.",
      themes: [
        { titre: "Mécanique", sousthemes: ["Cinématique", "Dynamique de Newton", "Énergie et travail", "Quantité de mouvement"] },
        { titre: "Thermodynamique", sousthemes: ["Température et chaleur", "Lois des gaz", "Premier principe", "Deuxième principe"] },
        { titre: "Électricité & Magnétisme", sousthemes: ["Champ électrique", "Circuits électriques", "Champ magnétique", "Induction"] },
        { titre: "Ondes & Optique", sousthemes: ["Ondes mécaniques", "Optique géométrique", "Ondes électromagnétiques", "Effet Doppler"] },
      ],
      chapitresList: [
        { num: 1, titre: "Cinématique", score: 55, statut: "🟡" },
        { num: 2, titre: "Dynamique", score: 38, statut: "🔴" },
        { num: 3, titre: "Énergie et travail", score: 0, statut: "🔒" },
        { num: 4, titre: "Thermodynamique", score: 0, statut: "🔒" },
        { num: 5, titre: "Électricité", score: 0, statut: "🔒" },
        { num: 6, titre: "Optique", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "comprehension",
      nom: "Compréhension de texte",
      icon: "📖",
      couleur: "purple",
      questions: "800+",
      chapitres: 10,
      duree: "~25h de contenu",
      description: "La compréhension de texte évalue ta capacité à analyser rapidement des textes scientifiques en français et en anglais. Méthode et vitesse de lecture sont clés.",
      themes: [
        { titre: "Textes en français", sousthemes: ["Lecture rapide et efficace", "Identification des idées clés", "Analyse critique", "Inférences et déductions"] },
        { titre: "Textes en anglais", sousthemes: ["Vocabulaire scientifique EN", "Compréhension globale", "Questions de détail", "Synthèse en français"] },
      ],
      chapitresList: [
        { num: 1, titre: "Méthode de lecture rapide", score: 70, statut: "🟡" },
        { num: 2, titre: "Analyse de textes FR", score: 65, statut: "🟡" },
        { num: 3, titre: "Textes scientifiques EN", score: 0, statut: "🔒" },
        { num: 4, titre: "Inférences et déductions", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "raisonnement",
      nom: "Raisonnement logique",
      icon: "🧩",
      couleur: "orange",
      questions: "1 000+",
      chapitres: 12,
      duree: "~30h de contenu",
      description: "Le raisonnement logique teste ta capacité à identifier des patterns et à raisonner de manière abstraite. Un entraînement intensif est indispensable pour progresser.",
      themes: [
        { titre: "Séries & Patterns", sousthemes: ["Séries numériques", "Séries de figures", "Matrices logiques", "Analogies"] },
        { titre: "Logique formelle", sousthemes: ["Syllogismes", "Déduction logique", "Tables de vérité", "Raisonnement par l'absurde"] },
      ],
      chapitresList: [
        { num: 1, titre: "Séries numériques", score: 60, statut: "🟡" },
        { num: 2, titre: "Matrices et figures", score: 50, statut: "🟡" },
        { num: 3, titre: "Syllogismes", score: 0, statut: "🔒" },
        { num: 4, titre: "Logique formelle", score: 0, statut: "🔒" },
      ],
    },
    {
      id: "sensibilite",
      nom: "Sensibilité scientifique",
      icon: "📈",
      couleur: "pink",
      questions: "600+",
      chapitres: 8,
      duree: "~20h de contenu",
      description: "La sensibilité scientifique évalue ta capacité à interpréter des données, des graphiques et à comprendre la démarche scientifique. Souvent négligée, elle peut faire la différence.",
      themes: [
        { titre: "Analyse de données", sousthemes: ["Lecture de graphiques", "Interprétation de tableaux", "Ordres de grandeur", "Unités et conversions"] },
        { titre: "Méthode scientifique", sousthemes: ["Hypothèses et protocoles", "Analyse de résultats", "Sources d'erreur", "Raisonnement expérimental"] },
      ],
      chapitresList: [
        { num: 1, titre: "Lecture de graphiques", score: 92, statut: "🟢" },
        { num: 2, titre: "Interprétation de données", score: 88, statut: "🟢" },
        { num: 3, titre: "Méthode scientifique", score: 85, statut: "🟢" },
        { num: 4, titre: "Ordres de grandeur", score: 0, statut: "🔒" },
      ],
    },
  ];

  const colorMap = {
    blue:   { border: "border-[#93c5fd]", hoverBorder: "hover:border-[#3b82f6]", text: "text-[#1d4ed8]", bg: "bg-[#dbeafe]", badge: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]", bar: "bg-[#3b82f6]", icon: "bg-[#dbeafe] border-[#93c5fd]", dot: "bg-[#3b82f6]", btn: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8] hover:bg-[#bfdbfe]" },
    yellow: { border: "border-amber-300",  hoverBorder: "hover:border-amber-500",  text: "text-amber-700",  bg: "bg-amber-50",  badge: "bg-amber-50 border-amber-300 text-amber-700",  bar: "bg-amber-500", icon: "bg-amber-50 border-amber-300",  dot: "bg-amber-500", btn: "bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100" },
    green:  { border: "border-emerald-300", hoverBorder: "hover:border-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50", badge: "bg-emerald-50 border-emerald-300 text-emerald-700", bar: "bg-emerald-500", icon: "bg-emerald-50 border-emerald-300", dot: "bg-emerald-500", btn: "bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100" },
    red:    { border: "border-red-300",    hoverBorder: "hover:border-red-500",    text: "text-red-700",    bg: "bg-red-50",    badge: "bg-red-50 border-red-300 text-red-700",    bar: "bg-red-500",    icon: "bg-red-50 border-red-300",    dot: "bg-red-500",    btn: "bg-red-50 border-red-300 text-red-700 hover:bg-red-100" },
    purple: { border: "border-purple-300", hoverBorder: "hover:border-purple-500", text: "text-purple-700", bg: "bg-purple-50", badge: "bg-purple-50 border-purple-300 text-purple-700", bar: "bg-purple-500", icon: "bg-purple-50 border-purple-300", dot: "bg-purple-500", btn: "bg-purple-50 border-purple-300 text-purple-700 hover:bg-purple-100" },
    orange: { border: "border-orange-300", hoverBorder: "hover:border-orange-500", text: "text-orange-700", bg: "bg-orange-50", badge: "bg-orange-50 border-orange-300 text-orange-700", bar: "bg-orange-500", icon: "bg-orange-50 border-orange-300", dot: "bg-orange-500", btn: "bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100" },
    pink:   { border: "border-pink-300",   hoverBorder: "hover:border-pink-500",   text: "text-pink-700",   bg: "bg-pink-50",   badge: "bg-pink-50 border-pink-300 text-pink-700",   bar: "bg-pink-500",   icon: "bg-pink-50 border-pink-300",   dot: "bg-pink-500",   btn: "bg-pink-50 border-pink-300 text-pink-700 hover:bg-pink-100" },
  };

  const getBarColor = (score: number) => {
    if (score >= 75) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const totalChapitres = matieres.reduce((acc, m) => acc + m.chapitres, 0);

  return (
    <main className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b-2 border-slate-300 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/fonctionnalites" className="text-sm text-slate-500 hover:text-slate-900 transition">Fonctionnalités</a>
          <a href="/matieres" className="text-sm text-slate-900 font-medium transition">Matières</a>
          <a href="/#concours" className="text-sm text-slate-500 hover:text-slate-900 transition">Concours</a>
          <a href="/tarifs" className="text-sm text-slate-500 hover:text-slate-900 transition">Tarifs</a>
        </div>
        <div className="flex gap-3">
          <a href="/connexion" className="text-sm text-slate-600 hover:text-slate-900 transition px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-slate-500 bg-white">Connexion</a>
          <a href="/inscription" className="text-sm bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-[#3b82f6]/30">Inscription gratuite</a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Programme officiel ARES</div>
          <h1 className="text-5xl font-extrabold mb-4 text-slate-900">Les 7 matières du<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">concours ARES Belgique</span></h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">Contenu 100% aligné sur le programme officiel. Chaque chapitre est rédigé spécifiquement pour le format et les exigences du concours ARES.</p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: "7", label: "Matières officielles", icon: "📚" },
              { value: totalChapitres.toString(), label: "Chapitres au total", icon: "📝" },
              { value: "7 800+", label: "Questions de quiz", icon: "⚡" },
            ].map((s) => (
              <div key={s.label} className="bg-white border-2 border-slate-300 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">{s.value}</div>
                <div className="text-xs text-slate-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MATIERES */}
        <div className="space-y-8">
          {matieres.map((matiere) => {
            const c = colorMap[matiere.couleur as keyof typeof colorMap];
            return (
              <div key={matiere.id} className={`bg-white border-2 ${c.border} ${c.hoverBorder} rounded-3xl overflow-hidden transition shadow-md`}>

                {/* HEADER MATIERE */}
                <div className={`flex flex-col md:flex-row items-start md:items-center justify-between p-7 border-b-2 border-slate-200 ${c.bg}`}>
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className={`w-14 h-14 rounded-2xl ${c.icon} border-2 flex items-center justify-center text-3xl shadow-sm`}>{matiere.icon}</div>
                    <div>
                      <h2 className={`text-2xl font-extrabold ${c.text}`}>{matiere.nom}</h2>
                      <p className="text-slate-600 text-sm mt-1 max-w-lg">{matiere.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 flex-shrink-0">
                    <div className="text-center">
                      <div className={`text-xl font-extrabold ${c.text}`}>{matiere.chapitres}</div>
                      <div className="text-xs text-slate-600 font-medium">chapitres</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="text-center">
                      <div className={`text-xl font-extrabold ${c.text}`}>{matiere.questions}</div>
                      <div className="text-xs text-slate-600 font-medium">questions</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="text-center">
                      <div className="text-base font-extrabold text-slate-800">{matiere.duree}</div>
                      <div className="text-xs text-slate-600 font-medium">de contenu</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0">

                  {/* PROGRAMME */}
                  <div className="p-7 border-r-2 border-slate-200">
                    <h3 className="font-bold text-xs text-slate-500 mb-5 uppercase tracking-widest">Programme détaillé</h3>
                    <div className="space-y-5">
                      {matiere.themes.map((theme) => (
                        <div key={theme.titre}>
                          <div className={`text-sm font-bold ${c.text} mb-2`}>{theme.titre}</div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {theme.sousthemes.map((st) => (
                              <div key={st} className="flex items-center gap-2 text-xs text-slate-600">
                                <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`}></div>
                                {st}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CHAPITRES */}
                  <div className="p-7">
                    <h3 className="font-bold text-xs text-slate-500 mb-5 uppercase tracking-widest">Aperçu des chapitres</h3>
                    <div className="space-y-2 mb-5">
                      {matiere.chapitresList.map((ch) => (
                        <div key={ch.num} className={`flex items-center gap-3 p-3 rounded-xl transition ${ch.statut === "🔒" ? "opacity-40 bg-slate-50 border border-slate-200" : "bg-slate-50 border-2 border-slate-200 hover:border-slate-300"}`}>
                          <span className="text-xs text-slate-400 w-5 flex-shrink-0 font-semibold">{ch.num}</span>
                          <span className="text-sm text-slate-800 flex-1 font-medium">{ch.titre}</span>
                          {ch.statut !== "🔒" && (
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-slate-200 rounded-full h-2 border border-slate-300">
                                <div className={`h-2 rounded-full ${getBarColor(ch.score)}`} style={{ width: `${ch.score}%` }}></div>
                              </div>
                              <span className="text-xs font-bold text-slate-700 w-8 text-right">{ch.score}%</span>
                            </div>
                          )}
                          <span className="text-sm">{ch.statut}</span>
                        </div>
                      ))}
                      <div className="text-xs text-slate-500 text-center pt-2 font-medium">+ {matiere.chapitres - matiere.chapitresList.length} autres chapitres disponibles</div>
                    </div>
                    <a href="/cours" className={`block text-center font-bold px-5 py-3 rounded-xl transition text-sm border-2 ${c.btn}`}>
                      Accéder aux cours {matiere.nom}
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-white border-2 border-[#93c5fd] rounded-3xl p-16 shadow-md" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)" }}>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Prêt à maîtriser les 7 matières ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Commence gratuitement dès aujourd'hui. Passe au plan Standard pour tout débloquer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-[#3b82f6]/30">Commencer gratuitement</a>
            <a href="/tarifs" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm">Voir les tarifs</a>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-300 px-8 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex gap-6">
            <a href="/matieres" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Matières</a>
            <a href="/cours" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Cours</a>
            <a href="/examens" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Examens</a>
            <a href="/concours" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Concours</a>
            <a href="/tarifs" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Tarifs</a>
          </div>
          <p className="text-xs text-slate-500">© 2026 LAUREA · Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}