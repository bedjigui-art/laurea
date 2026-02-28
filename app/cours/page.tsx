export default function Cours() {
  const programme = [
    {
      partie: "PARTIE 1",
      titre: "Connaissances et compréhension des matières scientifiques",
      icon: "🔬",
      couleur: "blue",
      matieres: [
        {
          id: "biologie",
          nom: "Biologie",
          icon: "🧬",
          couleur: "green",
          chapitres: [
            { id: 1, titre: "La cellule : l'unité fonctionnelle du monde vivant" },
            { id: 2, titre: "La génétique et l'hérédité" },
            { id: 3, titre: "La diversité, l'évolution et l'adaptabilité" },
            { id: 4, titre: "L'écologie" },
          ],
        },
        {
          id: "chimie",
          nom: "Chimie",
          icon: "⚗️",
          couleur: "yellow",
          chapitres: [
            { id: 1, titre: "Notions de base et états de la matière" },
            { id: 2, titre: "Structure de la matière" },
            { id: 3, titre: "La réaction chimique : aspect qualitatif" },
            { id: 4, titre: "La réaction chimique : aspect quantitatif" },
            { id: 5, titre: "L'équilibre chimique" },
          ],
        },
        {
          id: "physique",
          nom: "Physique",
          icon: "⚡",
          couleur: "red",
          chapitres: [
            { id: 1, titre: "Biomécanique" },
            { id: 2, titre: "La statique et la gravitation universelle" },
            { id: 3, titre: "Travail, énergie et puissance" },
            { id: 4, titre: "Les ondes" },
            { id: 5, titre: "Optique géométrique" },
            { id: 6, titre: "Électromagnétisme" },
          ],
        },
        {
          id: "mathematiques",
          nom: "Mathématiques",
          icon: "📐",
          couleur: "blue",
          chapitres: [
            { id: 1, titre: "Algèbre" },
            { id: 2, titre: "Géométrie" },
            { id: 3, titre: "Trigonométrie" },
            { id: 4, titre: "Analyse" },
            { id: 5, titre: "Statistique" },
          ],
        },
      ],
    },
    {
      partie: "PARTIE 2",
      titre: "Communication et analyse critique de l'information",
      icon: "🧠",
      couleur: "purple",
      matieres: [
        {
          id: "raisonnement",
          nom: "Raisonnement et Synthèse",
          icon: "🧩",
          couleur: "purple",
          chapitres: [
            { id: 1, titre: "Analyse et intégration de données" },
            { id: 2, titre: "Raisonnement logique et argumentation" },
            { id: 3, titre: "Esprit de synthèse et conceptualisation" },
          ],
        },
        {
          id: "ethique",
          nom: "Éthique, Empathie et Communication",
          icon: "💬",
          couleur: "pink",
          chapitres: [
            { id: 1, titre: "Habileté communicationnelle et aptitude au dialogue" },
            { id: 2, titre: "Dimension sociétale et éthique des décisions" },
            { id: 3, titre: "Empathie et compréhension de l'état émotionnel" },
          ],
        },
      ],
    },
  ];

  const getColors = (couleur: string) => {
    const map: Record<string, { border: string; text: string; bg: string; badge: string; btn: string; headerBg: string; divider: string }> = {
      blue:   { border: "border-[#93c5fd]", text: "text-[#1d4ed8]", bg: "bg-[#dbeafe]", badge: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]", btn: "bg-[#dbeafe] hover:bg-[#bfdbfe] border-[#93c5fd] text-[#1d4ed8]", headerBg: "bg-[#eff6ff]", divider: "border-[#93c5fd]" },
      green:  { border: "border-emerald-300", text: "text-emerald-700", bg: "bg-emerald-50", badge: "bg-emerald-50 border-emerald-300 text-emerald-700", btn: "bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-700", headerBg: "bg-emerald-50", divider: "border-emerald-200" },
      yellow: { border: "border-amber-300", text: "text-amber-700", bg: "bg-amber-50", badge: "bg-amber-50 border-amber-300 text-amber-700", btn: "bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-700", headerBg: "bg-amber-50", divider: "border-amber-200" },
      red:    { border: "border-red-300", text: "text-red-700", bg: "bg-red-50", badge: "bg-red-50 border-red-300 text-red-700", btn: "bg-red-50 hover:bg-red-100 border-red-300 text-red-700", headerBg: "bg-red-50", divider: "border-red-200" },
      purple: { border: "border-purple-300", text: "text-purple-700", bg: "bg-purple-50", badge: "bg-purple-50 border-purple-300 text-purple-700", btn: "bg-purple-50 hover:bg-purple-100 border-purple-300 text-purple-700", headerBg: "bg-purple-50", divider: "border-purple-200" },
      pink:   { border: "border-pink-300", text: "text-pink-700", bg: "bg-pink-50", badge: "bg-pink-50 border-pink-300 text-pink-700", btn: "bg-pink-50 hover:bg-pink-100 border-pink-300 text-pink-700", headerBg: "bg-pink-50", divider: "border-pink-200" },
      orange: { border: "border-orange-300", text: "text-orange-700", bg: "bg-orange-50", badge: "bg-orange-50 border-orange-300 text-orange-700", btn: "bg-orange-50 hover:bg-orange-100 border-orange-300 text-orange-700", headerBg: "bg-orange-50", divider: "border-orange-200" },
    };
    return map[couleur] ?? map.blue;
  };

  const totalChapitres = programme.reduce((acc, p) => acc + p.matieres.reduce((a, m) => a + m.chapitres.length, 0), 0);

  return (
    <div className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Cours", href: "/cours", active: true },
              { label: "Quiz", href: "/quiz" },
              { label: "Examens", href: "/examens" },
              { label: "Concours", href: "/concours" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${"active" in item && item.active ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-orange-50 border-2 border-orange-300 px-3 py-1.5 rounded-xl">
            <span className="text-orange-500 text-sm">🔥</span>
            <span className="text-orange-600 text-sm font-bold">7 jours</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold shadow-sm">A</div>
        </div>
      </nav>

      <div className="pt-20 px-6 pb-16 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mt-8 mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Programme officiel ARES</h1>
              <p className="text-slate-600 text-sm">2 parties · 6 matières · {totalChapitres} chapitres · Conforme au programme officiel belge</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#dbeafe] border-2 border-[#93c5fd] rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-lg font-extrabold text-[#1d4ed8]">{totalChapitres}</div>
                <div className="text-xs text-slate-600 font-medium">Chapitres</div>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-lg font-extrabold text-emerald-700">3</div>
                <div className="text-xs text-slate-600 font-medium">Complétés</div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-lg font-extrabold text-orange-600">🔥 7</div>
                <div className="text-xs text-slate-600 font-medium">Jours streak</div>
              </div>
            </div>
          </div>

          {/* Barre progression globale */}
          <div className="mt-6 bg-white border-2 border-slate-300 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-700">Progression globale</span>
              <span className="text-sm font-bold text-slate-900">3 / {totalChapitres} chapitres</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 border border-slate-300">
              <div className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] h-3 rounded-full transition-all" style={{ width: `${(3 / totalChapitres) * 100}%` }}></div>
            </div>
            <div className="flex items-center gap-5 mt-3 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-emerald-700"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>Maîtrisé (&gt;75%)</span>
              <span className="flex items-center gap-1.5 text-amber-700"><span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>À consolider (50-75%)</span>
              <span className="flex items-center gap-1.5 text-red-700"><span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>À retravailler (&lt;50%)</span>
              <span className="flex items-center gap-1.5 text-slate-500"><span className="w-2 h-2 rounded-full bg-slate-300 inline-block border border-slate-400"></span>Non commencé</span>
            </div>
          </div>
        </div>

        {/* PARTIES */}
        <div className="space-y-12">
          {programme.map((partie) => {
            const pc = getColors(partie.couleur);
            return (
              <div key={partie.partie}>

                {/* HEADER PARTIE */}
                <div className={`flex items-center gap-4 mb-6 pb-4 border-b-2 ${pc.divider}`}>
                  <div className={`w-12 h-12 rounded-2xl ${pc.bg} border-2 ${pc.border} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>{partie.icon}</div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${pc.text} mb-0.5`}>{partie.partie}</div>
                    <h2 className="text-xl font-extrabold text-slate-900">{partie.titre}</h2>
                  </div>
                  <div className={`ml-auto text-xs font-bold px-3 py-1.5 rounded-full border-2 ${pc.badge}`}>
                    {partie.matieres.reduce((a, m) => a + m.chapitres.length, 0)} chapitres
                  </div>
                </div>

                {/* MATIERES */}
                <div className="space-y-6">
                  {partie.matieres.map((matiere, mIdx) => {
                    const mc = getColors(matiere.couleur);
                    const letter = String.fromCharCode(65 + mIdx);
                    return (
                      <div key={matiere.id} className={`bg-white border-2 ${mc.border} rounded-2xl overflow-hidden shadow-md`}>

                        {/* HEADER MATIERE */}
                        <div className={`flex items-center gap-4 px-6 py-4 border-b-2 ${mc.divider} ${mc.headerBg}`}>
                          <div className={`w-10 h-10 rounded-xl ${mc.bg} border-2 ${mc.border} flex items-center justify-center text-xl flex-shrink-0`}>{matiere.icon}</div>
                          <div>
                            <div className={`text-xs font-bold uppercase tracking-widest ${mc.text} mb-0.5`}>Section {letter}</div>
                            <h3 className={`text-lg font-extrabold ${mc.text}`}>{matiere.nom}</h3>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <span className={`text-xs px-2.5 py-1 rounded-full border-2 font-bold ${mc.badge}`}>{matiere.chapitres.length} chapitres</span>
                          </div>
                        </div>

                        {/* CHAPITRES */}
                        <div className="divide-y-2 divide-slate-100">
                          {matiere.chapitres.map((chapitre, cIdx) => {
                            const statuts = ["🟢", "🟡", "🔴", null, null, null];
                            const scores = [88, 62, 34, null, null, null];
                            const statut = statuts[cIdx] ?? null;
                            const score = scores[cIdx] ?? null;
                            return (
                              <div key={chapitre.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition group">

                                {/* NUMERO */}
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold flex-shrink-0 border-2 ${statut ? `${mc.bg} ${mc.border}` : "bg-slate-100 border-slate-300"}`}>
                                  <span className={statut ? mc.text : "text-slate-500"}>{chapitre.id}</span>
                                </div>

                                {/* TITRE */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900 truncate">Chapitre {chapitre.id} — {chapitre.titre}</span>
                                    {statut && <span className="text-sm flex-shrink-0">{statut}</span>}
                                  </div>
                                  {score !== null && (
                                    <div className="flex items-center gap-2 mt-1.5">
                                      <div className="w-24 bg-slate-200 rounded-full h-2 border border-slate-300">
                                        <div className={`h-2 rounded-full ${score >= 75 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${score}%` }}></div>
                                      </div>
                                      <span className={`text-xs font-bold ${score >= 75 ? "text-emerald-700" : score >= 50 ? "text-amber-700" : "text-red-700"}`}>{score}%</span>
                                    </div>
                                  )}
                                  {score === null && (
                                    <div className="text-xs text-slate-400 mt-0.5 font-medium">Non commencé</div>
                                  )}
                                </div>

                                {/* BOUTONS */}
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <a
                                    href={`/cours/${matiere.id}/${chapitre.id}`}
                                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border-2 transition ${mc.btn}`}
                                  >
                                    <span>📖</span>
                                    <span>Leçon</span>
                                  </a>
                                  <a
                                    href={`/quiz?matiere=${matiere.id}&chapitre=${chapitre.id}`}
                                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border-2 bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-700 transition"
                                  >
                                    <span>⚡</span>
                                    <span>Quiz</span>
                                  </a>
                                </div>

                              </div>
                            );
                          })}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BAS */}
        <div className="mt-16 bg-white border-2 border-[#93c5fd] rounded-3xl p-10 text-center shadow-md" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)" }}>
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Continue ta progression 💪</h2>
          <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">Chaque chapitre complété te rapproche du concours. Lance une simulation pour tester ton niveau global.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/examens" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">Lancer une simulation</a>
            <a href="/quiz" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition text-sm">Quiz rapide</a>
          </div>
        </div>

      </div>
    </div>
  );
}