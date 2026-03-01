"use client";
import { useState } from "react";

export default function Fonctionnalites() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Fonctionnalités", href: "/fonctionnalites", active: true },
    { label: "Matières",        href: "/matieres"                      },
    { label: "Concours",        href: "/concours"                      },
    { label: "Tarifs",          href: "/tarifs"                        },
  ];

  // Redirige vers connexion si pas connecté
  const handleProtectedLink = (href: string) => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("laurea_user");
      window.location.href = user ? href : "/connexion";
    }
  };

  return (
    <main className="min-h-screen text-slate-900 font-sans bg-slate-100">

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 max-w-7xl mx-auto gap-3">

          <a href="/" className="text-xl font-bold text-slate-900 flex-shrink-0">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${
                  item.active
                    ? "bg-[#dbeafe] text-[#1d4ed8] border-2 border-[#93c5fd]"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a href="/connexion" className="text-sm font-semibold text-slate-600 px-4 py-2 rounded-xl border-2 border-slate-200 hover:border-slate-300 bg-white transition">
              Connexion
            </a>
            <a href="/inscription" className="text-sm font-bold bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-xl transition shadow-md">
              S'inscrire
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl border-2 border-slate-200 bg-white"
            aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen border-t-2 border-slate-200" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1 bg-white">
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium text-sm transition border-2 ${
                  item.active
                    ? "bg-[#dbeafe] text-[#1d4ed8] border-[#93c5fd]"
                    : "text-slate-700 hover:bg-slate-100 border-transparent"
                }`}>
                {item.label}
              </a>
            ))}
            <div className="border-t-2 border-slate-100 pt-3 mt-3 flex flex-col gap-2">
              <a href="/connexion" onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-sm">
                Connexion
              </a>
              <a href="/inscription" onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#3b82f6] text-white font-bold text-sm shadow-md">
                S'inscrire gratuitement
              </a>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      <div className="pt-28 pb-20 px-5 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Fonctionnalités</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Tout ce qu'il te faut<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">pour réussir le concours ARES</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Une plateforme complète, pensée pour les candidats belges au concours ARES Médecine et Dentisterie.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border-2 border-amber-300 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full">
            🔒 Toutes les fonctionnalités sont accessibles après création de compte
          </div>
        </div>

        {/* ── FEATURE 1 — COURS ─────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div>
            <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">01 — Cours</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Des cours structurés couvrant l'intégralité du programme ARES</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              25 chapitres répartis sur les 6 matières officielles du concours. Chaque leçon est rédigée avec des explications claires, des exemples concrets tirés des vraies annales ARES et des schémas visuels.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "6 matières officielles : Maths, Chimie, Physique, Biologie, Compréhension, Logique, Sensibilité",
                "25 chapitres organisés de façon progressive et structurée",
                "Surlignage et notes personnelles sauvegardées dans ton compte",
                "Barre de progression visible sur chaque chapitre",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleProtectedLink("/cours")}
              className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">
              Voir les cours
            </button>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0"></div>
              <span className="text-xs text-slate-500 ml-2 font-medium">Mathématiques — Chapitre 3 : Dérivées</span>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-slate-100 rounded-full w-full border border-slate-200"></div>
              <div className="h-3 bg-slate-100 rounded-full w-5/6 border border-slate-200"></div>
              <div className="h-3 bg-slate-100 rounded-full w-4/6 border border-slate-200"></div>
              <div className="bg-[#eff6ff] border-2 border-[#93c5fd] rounded-xl p-4 mt-4">
                <div className="text-xs text-[#1d4ed8] font-bold mb-2">💡 Exemple résolu</div>
                <div className="h-2 bg-slate-200 rounded-full w-full mb-2"></div>
                <div className="h-2 bg-slate-200 rounded-full w-4/5"></div>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🟢 Maîtrisé</div>
                <div className="bg-amber-50 border-2 border-amber-300 text-amber-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🟡 À consolider</div>
                <div className="bg-red-50 border-2 border-red-300 text-red-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🔴 À retravailler</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURE 2 — QUIZ ──────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 order-2 md:order-1 shadow-md">
            <div className="text-xs text-slate-500 mb-4 font-semibold uppercase tracking-wide">⚡ Quiz — Cinétique chimique</div>
            <div className="bg-slate-900 text-white rounded-xl p-4 mb-3 border-2 border-slate-700">
              <div className="text-sm font-medium mb-4">Question 3/15 — Quelle est l'unité de la constante de vitesse pour une réaction d'ordre 2 ?</div>
              <div className="space-y-2">
                {["L·mol⁻¹·s⁻¹", "mol·L⁻¹·s⁻¹", "s⁻¹", "mol²·L⁻²·s⁻¹"].map((opt, i) => (
                  <div key={opt} className={`px-4 py-2.5 rounded-xl text-sm border-2 transition ${i === 0 ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-100" : "bg-white/5 border-white/15 text-slate-300"}`}>
                    {opt}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3">
              <div className="text-xs text-emerald-700 font-bold mb-1">✓ Bonne réponse !</div>
              <div className="text-xs text-slate-700">Pour une réaction d'ordre 2, la constante k s'exprime en L·mol⁻¹·s⁻¹ car...</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-amber-50 border-2 border-amber-300 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">02 — Quiz</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">5 000+ questions avec corrections détaillées</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Accède au système de quiz le plus complet couvrant l'intégralité du programme officiel. Chaque réponse est accompagnée d'une explication pédagogique pour transformer chaque erreur en une leçon apprise.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Quiz de Chapitre Complet — Teste tes connaissances avec des dizaines de questions par chapitre pour balayer chaque notion du programme",
                "Suivi de Progression Visuel — Visualise ton avancée matière par matière et identifie d'un coup d'œil les chapitres maîtrisés",
                "Banque de questions complète — 5 000+ questions couvrant tout le programme ARES",
                "Quiz illimités avec corrections détaillées et explications pédagogiques",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleProtectedLink("/quiz")}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-amber-500/30 text-sm">
              Essayer un quiz
            </button>
          </div>
        </div>

        {/* ── FEATURE 3 — EXAMENS ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div>
            <div className="inline-block bg-emerald-50 border-2 border-emerald-300 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">03 — Examens</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Simule l'examen ARES dans des conditions réelles</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Le simulateur reproduit fidèlement le format officiel du concours ARES : même structure, même barème, même durée. Plus de mauvaises surprises le jour J.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Examen complet de 3h respectant le barème officiel ARES",
                "Tous les examens depuis le début du premier concours jusqu'à présent",
                "Examen aléatoire : nouvelles questions à chaque simulation",
                "Analyse post-examen : score par matière, temps par question",
                "Marquage de questions (Drapeaux) : marque une question « à revoir » pour y revenir plus tard sans perdre de temps — une stratégie clé du concours",
                "Stratégie d'Examen : apprends à gérer ton temps par question et identifie quand il vaut mieux s'abstenir pour éviter les points négatifs",
                "Comparaison avec la moyenne des autres utilisateurs",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleProtectedLink("/examens")}
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-600/30 text-sm">
              Lancer une simulation
            </button>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">🎯 Résultats — Simulation #12</span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100 border-2 border-emerald-300 px-2 py-1 rounded-lg">14.5 / 20</span>
            </div>
            <div className="space-y-3">
              {[
                { matiere: "Mathématiques", score: 16, color: "bg-green-500" },
                { matiere: "Chimie",        score: 12, color: "bg-yellow-500" },
                { matiere: "Biologie",      score: 17, color: "bg-green-500" },
                { matiere: "Physique",      score: 9,  color: "bg-red-500"   },
                { matiere: "Compréhension", score: 15, color: "bg-green-500" },
              ].map(m => (
                <div key={m.matiere} className="flex items-center gap-3">
                  <span className="text-xs text-slate-600 w-24 flex-shrink-0 font-medium truncate">{m.matiere}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
                    <div className={`h-2.5 rounded-full ${m.color}`} style={{ width: `${(m.score / 20) * 100}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 w-8 text-right flex-shrink-0">{m.score}/20</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#dbeafe] border-2 border-[#93c5fd] rounded-xl p-3">
              <div className="text-xs text-[#1d4ed8] font-bold mb-1">📊 Rang estimé</div>
              <div className="text-xs text-slate-700">Top 35% des candidats sur cette simulation</div>
            </div>
          </div>
        </div>

        {/* ── FEATURE 4 — CONCOURS BLANC ────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div className="bg-gradient-to-br from-[#eff6ff] to-[#e0f2fe] border-2 border-[#93c5fd] rounded-2xl p-6 order-2 md:order-1 shadow-md">
            <div className="text-xs text-slate-600 mb-4 font-semibold uppercase tracking-wide">🏆 Concours Blanc — Session 1</div>
            <div className="space-y-2 mb-4">
              {[
                { rang: "🥇 1",  nom: "Sophie M.",  score: "18.5/20", badge: "Top 1%",  highlight: false },
                { rang: "🥈 2",  nom: "Thomas K.",  score: "18.2/20", badge: "Top 1%",  highlight: false },
                { rang: "🥉 3",  nom: "Ahmed B.",   score: "17.9/20", badge: "Top 2%",  highlight: false },
                { rang: "   47", nom: "Toi",         score: "14.5/20", badge: "Top 23%", highlight: true  },
              ].map(r => (
                <div key={r.nom} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 ${r.highlight ? "bg-white border-[#93c5fd]" : "bg-white/70 border-slate-200"}`}>
                  <span className="text-sm w-8 text-slate-500 flex-shrink-0">{r.rang}</span>
                  <span className={`text-sm flex-1 min-w-0 truncate ${r.highlight ? "text-[#1d4ed8] font-bold" : "text-slate-900 font-medium"}`}>{r.nom}</span>
                  <span className="text-sm font-bold text-slate-900 flex-shrink-0">{r.score}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${r.highlight ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]" : "bg-slate-100 text-slate-600 border border-slate-300"}`}>{r.badge}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-slate-600 font-medium">482 participants · Résultats publiés après l'épreuve</div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-orange-50 border-2 border-orange-300 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">04 — Concours Blanc</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Affronte tous les candidats belges 4 fois par an</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Ce n'est pas une simple simulation, c'est une répétition générale. Quatre fois par an, LAUREA organise un concours synchronisé à l'échelle nationale. Inscris-toi à l'avance, connecte-toi à l'heure précise et mesure-toi à l'ensemble des futurs médecins et dentistes belges.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Examen de 3h dans des conditions officielles synchronisées",
                "Questions inédites spécialement créées pour chaque session",
                "Barème ARES officiel appliqué à la lettre",
                "Classement national publié après l'épreuve",
                "Correction détaillée pour identifier tes forces par rapport à la moyenne",
                "Certificat PDF officiel avec ton rang et ta note",
                "Suivi de ton évolution session après session",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleProtectedLink("/concours")}
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-orange-500/30 text-sm">
              S'inscrire au concours
            </button>
          </div>
        </div>

        {/* ── FEATURE 5 — FEUX TRICOLORES ───────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div>
            <div className="inline-block bg-purple-50 border-2 border-purple-300 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">05 — Suivi de progression</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Le système feux tricolores qui identifie tes lacunes</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Après chaque quiz, chaque chapitre affiche automatiquement un indicateur coloré. D'un seul coup d'œil, tu sais exactement où concentrer tes révisions.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { color: "bg-green-500",  label: "🟢 Maîtrisé",       desc: "Score supérieur à 75% — Tu peux passer à la suite",                    border: "border-green-300",  bg: "bg-green-50",  text: "text-green-700"  },
                { color: "bg-yellow-500", label: "🟡 À consolider",    desc: "Score entre 50% et 75% — Refais quelques exercices",                   border: "border-yellow-300", bg: "bg-amber-50",  text: "text-amber-700"  },
                { color: "bg-red-500",    label: "🔴 À retravailler",  desc: "Score inférieur à 50% — Reprends le cours depuis le début",            border: "border-red-300",    bg: "bg-red-50",    text: "text-red-700"    },
              ].map(f => (
                <div key={f.label} className={`flex items-center gap-4 ${f.bg} border-2 ${f.border} rounded-xl p-4 shadow-sm`}>
                  <div className={`w-4 h-4 rounded-full ${f.color} flex-shrink-0 shadow-sm`}></div>
                  <div>
                    <div className={`text-sm font-bold ${f.text}`}>{f.label}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleProtectedLink("/dashboard")}
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-purple-600/30 text-sm">
              Voir mon tableau de bord
            </button>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="text-xs text-slate-500 mb-5 font-semibold uppercase tracking-wide">📊 Ton tableau de bord — Vue globale</div>
            <div className="space-y-3">
              {[
                { nom: "Mathématiques", icon: "📐", score: 72, feu: "🟡" },
                { nom: "Chimie",        icon: "⚗️", score: 45, feu: "🔴" },
                { nom: "Biologie",      icon: "🔬", score: 88, feu: "🟢" },
                { nom: "Physique",      icon: "⚡", score: 31, feu: "🔴" },
                { nom: "Compréhension", icon: "📖", score: 60, feu: "🟡" },
                { nom: "Raisonnement",  icon: "🧩", score: 55, feu: "🟡" },
                { nom: "Sensibilité",   icon: "📈", score: 90, feu: "🟢" },
              ].map(m => (
                <div key={m.nom} className="flex items-center gap-2">
                  <span className="text-base w-5 flex-shrink-0">{m.icon}</span>
                  <span className="text-xs text-slate-600 w-20 flex-shrink-0 font-medium truncate">{m.nom}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
                    <div className={`h-2.5 rounded-full ${m.score >= 75 ? "bg-green-500" : m.score >= 50 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${m.score}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 w-8 text-right flex-shrink-0">{m.score}%</span>
                  <span className="text-sm flex-shrink-0">{m.feu}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
              <div className="text-xs text-orange-600 font-bold mb-1">💡 Priorité du jour</div>
              <div className="text-xs text-slate-700">Travaille la Physique et la Chimie — tes 2 matières les plus faibles</div>
            </div>
          </div>
        </div>

        {/* ── FEATURE 6 — PWA ───────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-28">
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 order-2 md:order-1 shadow-md">
            <div className="text-xs text-slate-500 mb-4 font-semibold uppercase tracking-wide">📱 LAUREA sur ton téléphone</div>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-56 bg-slate-900 rounded-2xl border-2 border-slate-600 p-3 relative shadow-xl">
                <div className="w-full h-4 bg-white/10 rounded-full mb-3"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#3b82f6]/50 rounded-full w-full"></div>
                  <div className="h-2 bg-white/10 rounded-full w-4/5"></div>
                  <div className="h-2 bg-white/10 rounded-full w-3/5"></div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  <div className="bg-emerald-500/30 rounded-lg h-8 border border-emerald-500/20"></div>
                  <div className="bg-red-500/30 rounded-lg h-8 border border-red-500/20"></div>
                  <div className="bg-amber-500/30 rounded-lg h-8 border border-amber-500/20"></div>
                  <div className="bg-[#3b82f6]/30 rounded-lg h-8 border border-[#3b82f6]/20"></div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#dbeafe] border-2 border-[#93c5fd] rounded-xl p-3 text-center">
              <div className="text-xs text-[#1d4ed8] font-bold mb-1">Disponible sur iOS & Android</div>
              <div className="text-xs text-slate-700">Sans passer par l'App Store · Installation en 1 clic</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-pink-50 border-2 border-pink-300 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">06 — PWA Mobile</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Révise partout, même sans connexion internet</h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              LAUREA est une Progressive Web App. Tu peux l'installer sur ton téléphone comme une vraie application, sans passer par l'App Store ou le Google Play Store. Zéro frais supplémentaire.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Installation en 1 clic depuis Chrome ou Safari mobile",
                "Icône LAUREA sur ton écran d'accueil comme une vraie app",
                "Mode hors-ligne : révise dans le métro sans connexion",
                "Notifications push : rappels de révision et alertes concours",
                "Interface optimisée pour les écrans tactiles",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-pink-600 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <a href="/inscription"
              className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-pink-600/30 text-sm">
              Essayer gratuitement
            </a>
          </div>
        </div>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <div className="text-center bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#93c5fd] rounded-3xl p-8 md:p-16 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">Convaincu ? Commence dès aujourd'hui.</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Rejoins des étudiants qui préparent le concours ARES avec LAUREA. Gratuit, sans carte bancaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-[#3b82f6]/30 text-sm md:text-base">
              Commencer gratuitement
            </a>
            <a href="/tarifs"
              className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm text-sm md:text-base">
              Voir les tarifs
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Sans carte bancaire · Accès immédiat · Annulable à tout moment</p>
        </div>

      </div>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t-2 border-slate-200 px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { label: "Fonctionnalités", href: "/fonctionnalites" },
              { label: "Cours",           href: "/cours"           },
              { label: "Examens",         href: "/examens"         },
              { label: "Concours",        href: "/concours"        },
              { label: "Tarifs",          href: "/tarifs"          },
            ].map(link => (
              <a key={link.label} href={link.href}
                className="text-xs text-slate-500 hover:text-[#3b82f6] font-medium transition">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">© 2026 LAUREA · Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}