"use client";
import { useState } from "react";

export default function Matieres() {

  const [menuOpen, setMenuOpen] = useState(false);

  const SESSIONS = [
    {
      bloc: "🌅 Matin — Sciences",
      subtitle: "4 matières · 40 QCM au total · 10 questions par matière",
      bgBloc: "bg-blue-50 border-blue-200",
      matieres: [
        {
          id: "biologie",
          nom: "Biologie",
          icon: "🔬",
          couleur: "green",
          questions: "1 200+",
          chapitres: 5,
          poids: "10 QCM",
          description: "Du niveau cellulaire à la génétique et à l'évolution. Maîtrise les mécanismes fondamentaux du vivant.",
          themes: [
            { titre: "Biologie cellulaire", sousthemes: ["Théorie cellulaire", "Structure procaryote/eucaryote", "Organites et membranes"] },
            { titre: "Division cellulaire", sousthemes: ["Cycle cellulaire", "Mitose", "Méiose"] },
            { titre: "Génétique moléculaire", sousthemes: ["ADN et réplication", "Transcription", "Traduction"] },
            { titre: "Génétique mendélienne", sousthemes: ["Lois de Mendel", "Hérédité", "Arbres généalogiques"] },
            { titre: "Évolution et diversité", sousthemes: ["Mécanismes de l'évolution", "Sélection naturelle", "Biodiversité"] },
          ],
          chapitresList: [
            { num: 1, titre: "La cellule", score: 95, statut: "🟢" },
            { num: 2, titre: "Cycle cellulaire et division", score: 80, statut: "🟢" },
            { num: 3, titre: "Génétique moléculaire", score: 60, statut: "🟡" },
            { num: 4, titre: "Génétique mendélienne et humaine", score: 0, statut: "🔒" },
            { num: 5, titre: "Évolution et diversité", score: 0, statut: "🔒" },
          ],
        },
        {
          id: "chimie",
          nom: "Chimie",
          icon: "⚗️",
          couleur: "yellow",
          questions: "1 500+",
          chapitres: 6,
          poids: "10 QCM",
          description: "De la structure atomique à la chimie organique. La chimie exige rigueur et maîtrise des calculs.",
          themes: [
            { titre: "Constitution de la matière", sousthemes: ["Atome et tableau périodique", "Liaisons chimiques", "Modèles atomiques"] },
            { titre: "États de la matière & Stœchiométrie", sousthemes: ["Gaz parfaits", "Moles et concentrations", "Calculs stœchiométriques"] },
            { titre: "Équilibres chimiques", sousthemes: ["Constante K", "pH et acides/bases", "Solutions tampons"] },
            { titre: "Oxydoréduction", sousthemes: ["Nombres d'oxydation", "Réactions redox", "Piles électrochimiques"] },
            { titre: "Chimie organique", sousthemes: ["Fonctions principales", "Nomenclature IUPAC", "Réactions organiques"] },
            { titre: "Thermodynamique & Cinétique", sousthemes: ["Enthalpie", "Vitesse de réaction", "Énergie d'activation"] },
          ],
          chapitresList: [
            { num: 1, titre: "Constitution de la matière", score: 90, statut: "🟢" },
            { num: 2, titre: "États de la matière et stœchiométrie", score: 75, statut: "🟢" },
            { num: 3, titre: "Équilibres chimiques", score: 42, statut: "🔴" },
            { num: 4, titre: "Réactions d'oxydoréduction", score: 0, statut: "🔒" },
            { num: 5, titre: "Chimie organique", score: 0, statut: "🔒" },
            { num: 6, titre: "Thermodynamique et Cinétique", score: 0, statut: "🔒" },
          ],
        },
        {
          id: "physique",
          nom: "Physique",
          icon: "⚡",
          couleur: "red",
          questions: "1 200+",
          chapitres: 5,
          poids: "10 QCM",
          description: "Des lois de Newton à la radioactivité. La physique ARES exige rigueur et application concrète.",
          themes: [
            { titre: "Mécanique", sousthemes: ["Cinématique", "Dynamique de Newton", "Statique, travail et énergie"] },
            { titre: "Optique géométrique", sousthemes: ["Miroirs et lentilles", "Réfraction et réflexion", "Systèmes optiques"] },
            { titre: "Électricité et Magnétisme", sousthemes: ["Loi d'Ohm", "Circuits électriques", "Champ magnétique"] },
            { titre: "Ondes", sousthemes: ["Acoustique", "Lumière et ondes EM", "Effet Doppler"] },
            { titre: "Physique nucléaire", sousthemes: ["Radioactivité", "Désintégration", "Applications médicales"] },
          ],
          chapitresList: [
            { num: 1, titre: "Mécanique", score: 55, statut: "🟡" },
            { num: 2, titre: "Optique géométrique", score: 38, statut: "🔴" },
            { num: 3, titre: "Électricité et Magnétisme", score: 0, statut: "🔒" },
            { num: 4, titre: "Ondes", score: 0, statut: "🔒" },
            { num: 5, titre: "Physique nucléaire et Radioactivité", score: 0, statut: "🔒" },
          ],
        },
        {
          id: "mathematiques",
          nom: "Mathématiques",
          icon: "📐",
          couleur: "blue",
          questions: "1 500+",
          chapitres: 5,
          poids: "10 QCM",
          description: "Algèbre, analyse, trigonométrie et probabilités. Les maths ARES nécessitent précision et rapidité.",
          themes: [
            { titre: "Algèbre", sousthemes: ["Polynômes", "Équations et inéquations", "Systèmes d'équations"] },
            { titre: "Analyse", sousthemes: ["Fonctions et limites", "Dérivées", "Intégrales"] },
            { titre: "Trigonométrie", sousthemes: ["Cercle trigonométrique", "Formules fondamentales", "Équations trigonométriques"] },
            { titre: "Géométrie", sousthemes: ["Géométrie plane", "Vecteurs", "Droites et cercles analytiques"] },
            { titre: "Probabilités & Statistiques", sousthemes: ["Combinatoire", "Probabilités classiques", "Moyenne et écart-type"] },
          ],
          chapitresList: [
            { num: 1, titre: "Algèbre", score: 85, statut: "🟢" },
            { num: 2, titre: "Analyse", score: 70, statut: "🟡" },
            { num: 3, titre: "Trigonométrie", score: 50, statut: "🟡" },
            { num: 4, titre: "Géométrie plane et analytique", score: 0, statut: "🔒" },
            { num: 5, titre: "Probabilités et Statistiques", score: 0, statut: "🔒" },
          ],
        },
      ],
    },
    {
      bloc: "🌆 Après-midi — Humanités",
      subtitle: "2 matières · 40 QCM au total",
      bgBloc: "bg-purple-50 border-purple-200",
      matieres: [
        {
          id: "raisonnement",
          nom: "Raisonnement et Analyse Critique",
          icon: "🧩",
          couleur: "purple",
          questions: "600+",
          chapitres: 1,
          poids: "10 QCM",
          description: "Analyse de textes longs, synthèse d'informations, logique verbale et validité d'arguments. Concentration et méthode sont essentielles.",
          themes: [
            { titre: "Analyse et Synthèse", sousthemes: ["Lecture de textes longs", "Identification des idées clés", "Synthèse d'informations"] },
            { titre: "Logique verbale", sousthemes: ["Validité d'arguments", "Raisonnement déductif", "Détection de sophismes"] },
          ],
          chapitresList: [
            { num: 1, titre: "Raisonnement et analyse critique", score: 60, statut: "🟡" },
          ],
        },
        {
          id: "communication",
          nom: "Communication et Éthique",
          icon: "💬",
          couleur: "pink",
          questions: "1 000+",
          chapitres: 3,
          poids: "30 QCM ⚠️ Poids x3",
          description: "La matière la plus importante en nombre de questions. Communication, éthique médicale et psychologie de la santé sont au cœur de cette épreuve.",
          themes: [
            { titre: "Communication interpersonnelle", sousthemes: ["Empathie et écoute active", "Communication non-verbale", "Relation soignant-soigné"] },
            { titre: "Éthique médicale & Déontologie", sousthemes: ["Autonomie et bienfaisance", "Secret médical", "Consentement éclairé"] },
            { titre: "Psychologie de la santé", sousthemes: ["Gestion du stress", "Comportements de santé", "Soutien psychologique"] },
          ],
          chapitresList: [
            { num: 1, titre: "Communication interpersonnelle", score: 70, statut: "🟡" },
            { num: 2, titre: "Éthique médicale et déontologie", score: 55, statut: "🟡" },
            { num: 3, titre: "Psychologie de la santé", score: 0, statut: "🔒" },
          ],
        },
      ],
    },
  ];

  const colorMap: Record<string, {
    border: string; hoverBorder: string; text: string; bg: string;
    badge: string; bar: string; icon: string; dot: string; btn: string; headerBorder: string;
  }> = {
    blue:   { border: "border-[#93c5fd]", hoverBorder: "hover:border-[#3b82f6]", text: "text-[#1d4ed8]",   bg: "bg-[#eff6ff]",  badge: "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]",       bar: "bg-[#3b82f6]",   icon: "bg-[#dbeafe] border-[#93c5fd]",   dot: "bg-[#3b82f6]",   btn: "bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] hover:bg-[#bfdbfe]",   headerBorder: "border-[#bfdbfe]" },
    yellow: { border: "border-amber-300",  hoverBorder: "hover:border-amber-500",  text: "text-amber-700",  bg: "bg-amber-50",   badge: "bg-amber-50 border-amber-300 text-amber-700",         bar: "bg-amber-500",   icon: "bg-amber-50 border-amber-300",    dot: "bg-amber-500",   btn: "bg-amber-50 border-2 border-amber-300 text-amber-700 hover:bg-amber-100",    headerBorder: "border-amber-200"  },
    green:  { border: "border-emerald-300",hoverBorder: "hover:border-emerald-500",text: "text-emerald-700",bg: "bg-emerald-50", badge: "bg-emerald-50 border-emerald-300 text-emerald-700",   bar: "bg-emerald-500", icon: "bg-emerald-50 border-emerald-300",dot: "bg-emerald-500", btn: "bg-emerald-50 border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-100", headerBorder: "border-emerald-200"},
    red:    { border: "border-red-300",    hoverBorder: "hover:border-red-500",    text: "text-red-700",    bg: "bg-red-50",     badge: "bg-red-50 border-red-300 text-red-700",               bar: "bg-red-500",     icon: "bg-red-50 border-red-300",        dot: "bg-red-500",     btn: "bg-red-50 border-2 border-red-300 text-red-700 hover:bg-red-100",           headerBorder: "border-red-200"    },
    purple: { border: "border-purple-300", hoverBorder: "hover:border-purple-500", text: "text-purple-700", bg: "bg-purple-50",  badge: "bg-purple-50 border-purple-300 text-purple-700",      bar: "bg-purple-500",  icon: "bg-purple-50 border-purple-300",  dot: "bg-purple-500",  btn: "bg-purple-50 border-2 border-purple-300 text-purple-700 hover:bg-purple-100", headerBorder: "border-purple-200" },
    pink:   { border: "border-pink-300",   hoverBorder: "hover:border-pink-500",   text: "text-pink-700",   bg: "bg-pink-50",    badge: "bg-pink-50 border-pink-300 text-pink-700",            bar: "bg-pink-500",    icon: "bg-pink-50 border-pink-300",      dot: "bg-pink-500",    btn: "bg-pink-50 border-2 border-pink-300 text-pink-700 hover:bg-pink-100",       headerBorder: "border-pink-200"   },
  };

  const getBarColor = (score: number) => {
    if (score >= 75) return "bg-emerald-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const totalChapitres = SESSIONS.flatMap(s => s.matieres).reduce((acc, m) => acc + m.chapitres, 0);

  const NAV_LINKS = [
    { label: "Fonctionnalités", href: "/fonctionnalites" },
    { label: "Matières",        href: "/matieres", active: true },
    { label: "Concours",        href: "/concours"        },
    { label: "Tarifs",          href: "/tarifs"          },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans">

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 max-w-7xl mx-auto gap-3">
          <a href="/" className="text-xl font-bold text-slate-900 flex-shrink-0">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${"active" in item && item.active ? "bg-[#dbeafe] text-[#1d4ed8] border-2 border-[#93c5fd]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a href="/connexion" className="text-sm font-semibold text-slate-600 px-4 py-2 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 transition">Connexion</a>
            <a href="/inscription" className="text-sm font-bold bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-xl transition shadow-md">S'inscrire</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl border-2 border-slate-200 bg-white" aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen border-t-2 border-slate-200" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1 bg-white">
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium text-sm transition border-2 ${"active" in item && item.active ? "bg-[#dbeafe] text-[#1d4ed8] border-[#93c5fd]" : "text-slate-700 hover:bg-slate-100 border-transparent"}`}>
                {item.label}
              </a>
            ))}
            <div className="border-t-2 border-slate-100 pt-3 mt-3 flex flex-col gap-2">
              <a href="/connexion" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-sm">Connexion</a>
              <a href="/inscription" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-xl bg-[#3b82f6] text-white font-bold text-sm shadow-md">S'inscrire gratuitement</a>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setMenuOpen(false)} />}

      <div className="pt-24 pb-20 px-4 md:px-6 max-w-6xl mx-auto">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Programme Officiel du Concours
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Les matières du<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">concours ARES Belgique</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto mb-8">
            Contenu 100% aligné sur le programme officiel. 2 sessions par jour — Sciences le matin, Humanités l'après-midi.
          </p>

          {/* Barème info */}
          <div className="inline-flex flex-wrap justify-center gap-3 bg-white border-2 border-slate-200 rounded-2xl px-5 py-3 mb-8 shadow-sm">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">✓ Bonne réponse : +1 pt</span>
            <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">✗ Mauvaise réponse : -⅓ pt</span>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">— Abstention : 0 pt</span>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto">
            {[
              { value: "6",                label: "Matières officielles",   icon: "📚" },
              { value: totalChapitres.toString(), label: "Chapitres au total", icon: "📝" },
              { value: "80",               label: "QCM par session totale", icon: "⚡" },
            ].map(s => (
              <div key={s.label} className="bg-white border-2 border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-xl md:text-2xl font-extrabold text-slate-900 mb-1">{s.value}</div>
                <div className="text-xs text-slate-600 font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SESSIONS ───────────────────────────────────────────── */}
        {SESSIONS.map(session => (
          <div key={session.bloc} className="mb-14">

            {/* Label de session */}
            <div className={`flex flex-col sm:flex-row sm:items-center gap-2 bg-white border-2 ${session.bgBloc.split(" ")[1]} rounded-2xl px-5 py-4 mb-6 shadow-sm`}>
              <h2 className="text-base md:text-lg font-extrabold text-slate-900">{session.bloc}</h2>
              <span className="text-xs text-slate-500 font-medium sm:ml-2">{session.subtitle}</span>
            </div>

            {/* Matières */}
            <div className="space-y-6">
              {session.matieres.map(matiere => {
                const c = colorMap[matiere.couleur];
                return (
                  <div key={matiere.id} className={`bg-white border-2 ${c.border} rounded-2xl overflow-hidden shadow-md`}>

                    {/* Header matière */}
                    <div className={`${c.bg} border-b-2 ${c.headerBorder} p-5`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-2xl ${c.icon} border-2 flex items-center justify-center text-2xl shadow-sm flex-shrink-0`}>
                            {matiere.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h2 className={`text-lg font-extrabold ${c.text}`}>{matiere.nom}</h2>
                              <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full border ${c.badge}`}>
                                {matiere.poids}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{matiere.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="text-center">
                            <div className={`text-lg font-extrabold ${c.text}`}>{matiere.chapitres}</div>
                            <div className="text-xs text-slate-500 font-medium">chapitres</div>
                          </div>
                          <div className="w-px h-8 bg-slate-300 hidden sm:block"></div>
                          <div className="text-center">
                            <div className={`text-lg font-extrabold ${c.text}`}>{matiere.questions}</div>
                            <div className="text-xs text-slate-500 font-medium">questions</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corps : Programme + Chapitres */}
                    <div className="grid grid-cols-1 md:grid-cols-2">

                      {/* Programme */}
                      <div className="p-5 md:border-r-2 md:border-slate-200 border-b-2 md:border-b-0 border-slate-100">
                        <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase tracking-widest">Programme détaillé</h3>
                        <div className="space-y-4">
                          {matiere.themes.map(theme => (
                            <div key={theme.titre}>
                              <div className={`text-xs font-bold ${c.text} mb-1.5`}>{theme.titre}</div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {theme.sousthemes.map(st => (
                                  <div key={st} className="flex items-center gap-1.5 text-xs text-slate-600">
                                    <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`}></div>
                                    {st}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chapitres */}
                      <div className="p-5">
                        <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase tracking-widest">Aperçu des chapitres</h3>
                        <div className="space-y-2 mb-4">
                          {matiere.chapitresList.map(ch => (
                            <div key={ch.num}
                              className={`flex items-center gap-3 p-3 rounded-xl transition ${ch.statut === "🔒" ? "opacity-40 bg-slate-50 border border-slate-200" : "bg-slate-50 border-2 border-slate-200 hover:border-slate-300"}`}>
                              <span className="text-xs text-slate-400 w-5 flex-shrink-0 font-bold">{ch.num}</span>
                              <span className="text-sm text-slate-800 flex-1 font-medium leading-tight">{ch.titre}</span>
                              {ch.statut !== "🔒" && (
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <div className="w-12 md:w-16 bg-slate-200 rounded-full h-2 border border-slate-300">
                                    <div className={`h-2 rounded-full ${getBarColor(ch.score)}`} style={{ width: `${ch.score}%` }}></div>
                                  </div>
                                  <span className="text-xs font-bold text-slate-700 w-8 text-right">{ch.score}%</span>
                                </div>
                              )}
                              <span className="text-sm flex-shrink-0">{ch.statut}</span>
                            </div>
                          ))}
                        </div>
                        <a href="/cours" className={`block text-center font-bold px-5 py-3 rounded-xl transition text-sm ${c.btn}`}>
                          Accéder aux cours →
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* ── NOTE ANNALES ───────────────────────────────────────── */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">📁</span>
            <div>
              <div className="font-bold text-amber-700 text-sm mb-1">Annales disponibles</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Les annales couvrent les épreuves officielles des sessions de <strong>Juillet et Août</strong> organisées par l'ARES. Elles sont intégrées directement dans les simulateurs d'examen.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <div className="text-center bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#93c5fd] rounded-3xl p-8 md:p-14 shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">Prêt à maîtriser les 6 matières ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Commence gratuitement dès aujourd'hui. Passe au plan Candidat pour tout débloquer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-[#3b82f6]/30 text-sm md:text-base">
              Commencer gratuitement
            </a>
            <a href="/tarifs" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm text-sm md:text-base">
              Voir les tarifs
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="border-t-2 border-slate-200 px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { label: "Fonctionnalités", href: "/fonctionnalites" },
              { label: "Matières",        href: "/matieres"        },
              { label: "Cours",           href: "/cours"           },
              { label: "Concours",        href: "/concours"        },
              { label: "Tarifs",          href: "/tarifs"          },
              { label: "Connexion",       href: "/connexion"       },
            ].map(link => (
              <a key={link.label} href={link.href} className="text-xs text-slate-500 hover:text-[#3b82f6] font-medium transition">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500 font-medium">© 2026 LAUREA · Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}