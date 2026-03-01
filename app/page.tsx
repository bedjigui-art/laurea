"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const SEARCH_INDEX = [
    { title: "Cours de Biologie", desc: "Cellule, génétique, évolution, métabolisme", href: "/cours", icon: "🔬" },
    { title: "Cours de Chimie", desc: "Chimie générale, organique, électrochimie", href: "/cours", icon: "⚗️" },
    { title: "Cours de Physique", desc: "Mécanique, thermodynamique, électricité, optique", href: "/cours", icon: "⚡" },
    { title: "Cours de Mathématiques", desc: "Analyse, algèbre, probabilités, statistiques", href: "/cours", icon: "📐" },
    { title: "Cours de Raisonnement logique", desc: "Séries, matrices, syllogismes, déduction", href: "/cours", icon: "🧩" },
    { title: "Cours de Compréhension de texte", desc: "Textes scientifiques FR et EN, analyse critique", href: "/cours", icon: "📖" },
    { title: "Cours de Sensibilité scientifique", desc: "Graphiques, interprétation de données", href: "/cours", icon: "📈" },
    { title: "Quiz adaptatifs", desc: "7 800+ questions QCM avec corrections détaillées", href: "/quiz", icon: "⚡" },
    { title: "Simulateur d'examen ARES", desc: "Format officiel, barème réel, chronomètre", href: "/examens", icon: "🎯" },
    { title: "Concours trimestriel", desc: "Examen blanc officiel, classement réel", href: "/concours", icon: "🏆" },
    { title: "Dashboard & progression", desc: "Suivi par matière, feux tricolores", href: "/dashboard", icon: "📊" },
    { title: "Tarifs et abonnements", desc: "Plans Découverte, Candidat, Lauréat", href: "/tarifs", icon: "💳" },
    { title: "Inscription gratuite", desc: "Crée ton compte sans carte bancaire", href: "/inscription", icon: "🎓" },
    { title: "Connexion", desc: "Accède à ton espace personnel", href: "/connexion", icon: "🔑" },
    { title: "Barème ARES", desc: "+1 bonne réponse, -1/3 mauvaise, 0 abstention", href: "/examens", icon: "📋" },
    { title: "Annales ARES", desc: "Archives des examens officiels belges", href: "/examens", icon: "📁" },
  ];

  const searchResults = searchQuery.length >= 2
    ? SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const NAV_LINKS = [
    { label: "Fonctionnalités", href: "/fonctionnalites" },
    { label: "Matières",        href: "/matieres"        },
    { label: "Concours",        href: "/concours"        },
    { label: "Tarifs",          href: "/tarifs"          },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 max-w-7xl mx-auto gap-3">

          <a href="/" className="text-xl font-bold text-slate-900 flex-shrink-0">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href}
                className="text-sm px-4 py-2 rounded-xl transition font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex relative flex-1 max-w-xs">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher un cours, quiz..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#3b82f6] rounded-xl px-4 py-2 text-sm outline-none text-slate-800 placeholder-slate-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            </div>
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden">
                {searchResults.map((r, i) => (
                  <a key={i} href={r.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition border-b last:border-b-0 border-slate-100">
                    <span className="text-lg flex-shrink-0">{r.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{r.title}</div>
                      <div className="text-xs text-slate-500">{r.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
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
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#3b82f6] rounded-xl px-4 py-2.5 text-sm outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
            {searchQuery.length >= 2 && searchResults.length > 0 && (
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden mb-3">
                {searchResults.map((r, i) => (
                  <a key={i} href={r.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-100 transition border-b last:border-b-0 border-slate-200">
                    <span>{r.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{r.title}</div>
                      <div className="text-xs text-slate-500">{r.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl font-medium text-sm text-slate-700 hover:bg-slate-100 border-2 border-transparent transition">
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

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse inline-block"></span>
          LA PLATEFORME N°1 DES ÉTUDIANTS BELGES 🇧🇪
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
          Réussis le concours d'entrée<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">en Médecine et Dentisterie</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mb-3 leading-relaxed">
          Cours structurés, quiz adaptatifs, simulateurs d'examen officiels et concours trimestriel avec classement réel.
        </p>
        <p className="text-sm md:text-base text-[#3b82f6] font-semibold max-w-xl mb-10">
          Tout le programme de l'ARES Belgique résumé et testé pour toi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl text-base transition shadow-xl shadow-[#3b82f6]/30">
            Commencer gratuitement
          </a>
          <a href="/cours" className="bg-white hover:bg-slate-100 border-2 border-slate-300 hover:border-[#3b82f6] text-slate-800 font-semibold px-8 py-4 rounded-xl text-base transition shadow-sm">
            Voir les cours
          </a>
        </div>
        <p className="text-xs text-slate-500 mt-5">Gratuit · Sans carte bancaire · Accès immédiat</p>

        <div className="mt-16 w-full max-w-4xl mx-auto bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-2xl shadow-slate-300/60 hidden sm:block">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="flex-1 bg-slate-100 border border-slate-200 rounded-lg h-6 ml-2"></div>
          </div>
          <div className="grid grid-cols-4 gap-3 h-48">
            <div className="col-span-1 bg-slate-900 rounded-xl p-3 flex flex-col gap-2">
              {[
                { label: "📚 Cours",    href: "/cours"     },
                { label: "⚡ Quiz",     href: "/quiz"      },
                { label: "🎯 Examens",  href: "/examens"   },
                { label: "🏆 Concours", href: "/concours"  },
                { label: "📊 Stats",    href: "/dashboard" },
              ].map(item => (
                <a key={item.label} href={item.href}
                  className="text-xs text-slate-300 bg-white/10 hover:bg-white/20 rounded-lg px-2 py-1.5 transition">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="col-span-3 bg-slate-800 rounded-xl p-4">
              <div className="text-xs font-bold text-white mb-3">Mathématiques — Chapitre 3 : Dérivées</div>
              <div className="space-y-2">
                <div className="h-2 bg-white/15 rounded-full w-full"></div>
                <div className="h-2 bg-white/15 rounded-full w-4/5"></div>
                <div className="h-2 bg-white/15 rounded-full w-3/5"></div>
                <div className="h-2 bg-[#3b82f6]/60 rounded-full w-2/3 mt-4"></div>
                <div className="h-2 bg-white/15 rounded-full w-1/2"></div>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <div className="bg-green-500/25 border border-green-500/40 text-green-400 text-xs px-2 py-1 rounded-lg font-medium">🟢 Maîtrisé</div>
                <div className="bg-red-500/25 border border-red-500/40 text-red-400 text-xs px-2 py-1 rounded-lg font-medium">🔴 À retravailler</div>
                <div className="bg-yellow-500/25 border border-yellow-500/40 text-yellow-400 text-xs px-2 py-1 rounded-lg font-medium">🟡 À consolider</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "7",      label: "Matières ARES",        icon: "📚", href: "/cours"       },
            { number: "7 800+", label: "Questions de quiz",    icon: "⚡", href: "/quiz"        },
            { number: "4x/an",  label: "Concours trimestriel", icon: "🏆", href: "/concours"    },
            { number: "100%",   label: "Gratuit au démarrage", icon: "🎯", href: "/inscription" },
          ].map(stat => (
            <a key={stat.label} href={stat.href}
              className="bg-white border-2 border-slate-200 hover:border-[#3b82f6]/50 rounded-2xl p-5 text-center transition shadow-sm hover:shadow-md">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FONCTIONNALITES ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Fonctionnalités</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Tout ce qu'il te faut pour réussir</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">Une plateforme complète, conçue spécifiquement pour le concours ARES belge</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "📚", title: "Cours structurés",     desc: "105 chapitres couvrant les 7 matières officielles. Schémas interactifs, fiches mémo téléchargeables.", color: "blue",   href: "/cours"       },
            { icon: "⚡", title: "Quiz adaptatifs",      desc: "7 800+ questions QCM avec corrections détaillées. Système feux tricolores pour identifier tes lacunes.", color: "yellow", href: "/quiz"        },
            { icon: "🎯", title: "Simulateur officiel",  desc: "Reproduit fidèlement le format, le barème et la durée réelle de l'examen ARES.", color: "green",  href: "/examens"    },
            { icon: "🏆", title: "Concours trimestriel", desc: "4 sessions par an. Affronte tous les candidats inscrits et découvre ton classement réel.", color: "orange", href: "/concours"    },
            { icon: "📊", title: "Suivi de progression", desc: "Dashboard complet : score par matière, feux tricolores, calendrier de révision automatique.", color: "purple", href: "/dashboard"   },
            { icon: "📱", title: "PWA Mobile",           desc: "Installe LAUREA sur ton téléphone comme une vraie app. Mode hors-ligne disponible.", color: "pink",   href: "/inscription" },
          ].map(f => {
            const colors: Record<string, { border: string; icon: string; text: string }> = {
              blue:   { border: "border-[#3b82f6]/30 hover:border-[#3b82f6]/70", icon: "bg-[#3b82f6]/10", text: "text-[#3b82f6]"  },
              yellow: { border: "border-yellow-400/40 hover:border-yellow-500",  icon: "bg-yellow-50",    text: "text-yellow-600" },
              green:  { border: "border-green-400/40 hover:border-green-500",    icon: "bg-green-50",     text: "text-green-600"  },
              orange: { border: "border-orange-400/40 hover:border-orange-500",  icon: "bg-orange-50",    text: "text-orange-600" },
              purple: { border: "border-purple-400/40 hover:border-purple-500",  icon: "bg-purple-50",    text: "text-purple-600" },
              pink:   { border: "border-pink-400/40 hover:border-pink-500",      icon: "bg-pink-50",      text: "text-pink-600"   },
            };
            return (
              <a key={f.title} href={f.href}
                className={`bg-white border-2 ${colors[f.color].border} rounded-2xl p-6 hover:shadow-md transition`}>
                <div className={`w-12 h-12 ${colors[f.color].icon} rounded-xl flex items-center justify-center text-2xl mb-4`}>{f.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${colors[f.color].text}`}>{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── MATIERES ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Programme</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Les 7 matières du concours ARES</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Contenu 100% aligné sur le programme officiel belge</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "📐", name: "Mathématiques",           chapters: 18, questions: "1 500+", topics: "Analyse, algèbre, probabilités, statistiques" },
            { icon: "⚗️", name: "Chimie",                  chapters: 20, questions: "1 500+", topics: "Chimie générale, organique, électrochimie" },
            { icon: "🔬", name: "Biologie",                chapters: 15, questions: "1 200+", topics: "Cellule, génétique, évolution, métabolisme" },
            { icon: "⚡", name: "Physique",                chapters: 16, questions: "1 200+", topics: "Mécanique, thermodynamique, électricité, optique" },
            { icon: "📖", name: "Compréhension de texte",  chapters: 10, questions: "800+",   topics: "Textes scientifiques FR et EN, analyse critique" },
            { icon: "🧩", name: "Raisonnement logique",    chapters: 12, questions: "1 000+", topics: "Séries, matrices, syllogismes, déduction" },
            { icon: "📈", name: "Sensibilité scientifique", chapters: 8, questions: "600+",   topics: "Graphiques, interprétation de données" },
          ].map((m, i) => (
            <a key={m.name} href="/cours"
              className={`bg-white border-2 border-slate-200 hover:border-[#3b82f6]/50 rounded-2xl p-5 flex items-center gap-4 transition shadow-sm hover:shadow-md ${i === 6 ? "md:col-span-2" : ""}`}>
              <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-xl flex-shrink-0">{m.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1 gap-2">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base truncate">{m.name}</h3>
                  <span className="text-xs text-[#3b82f6] font-bold bg-[#3b82f6]/10 px-2 py-0.5 rounded-full flex-shrink-0">{m.questions}</span>
                </div>
                <p className="text-slate-500 text-xs mb-2 truncate">{m.topics}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-full h-2 border border-slate-200">
                    <div className="bg-[#3b82f6] h-2 rounded-full" style={{ width: `${(m.chapters / 20) * 100}%` }}></div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium flex-shrink-0">{m.chapters} ch.</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CONCOURS ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#bfdbfe] rounded-3xl p-8 md:p-12 overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/8 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-block bg-[#3b82f6]/15 border-2 border-[#3b82f6]/40 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Fonctionnalité exclusive</div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Le Mode Concours Trimestriel</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">4 fois par an, LAUREA organise un examen blanc officiel ouvert à tous les inscrits, dans les conditions réelles du concours.</p>
                <div className="space-y-3 mb-8">
                  {[
                    "Examen blanc de type concours officiel, organisé dans le respect du format ARES",
                    "Questions inédites et originales à chaque session",
                    "Classement général et détaillé par matière",
                    "Certificat de participation PDF téléchargeable",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3b82f6]/20 border-2 border-[#3b82f6]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/concours" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">
                  Participer au prochain concours
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { session: "Session 1", mois: "Janvier"  },
                  { session: "Session 2", mois: "Mars"     },
                  { session: "Session 3", mois: "Juin"     },
                  { session: "Session 4", mois: "Juillet"  },
                ].map(s => (
                  <a key={s.session} href="/concours"
                    className="bg-white border-2 border-slate-200 hover:border-[#3b82f6]/60 rounded-2xl p-4 text-center transition shadow-sm hover:shadow-md group">
                    <div className="text-xs text-[#3b82f6] font-bold mb-1">{s.session}</div>
                    <div className="text-sm font-bold text-slate-900 mb-2">{s.mois}</div>
                    <div className="text-xs text-white bg-[#3b82f6] group-hover:bg-[#2563eb] rounded-full px-2 py-0.5 font-medium transition">
                      S'inscrire
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS BENTO ───────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Tarifs</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Simple et transparent</h2>
          <p className="text-slate-500 text-sm">Commence gratuitement, passe au niveau supérieur quand tu veux</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PLAN DÉCOUVERTE */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-7 flex flex-col shadow-sm hover:shadow-md hover:border-slate-300 transition">
            <div className="mb-2">
              <span className="inline-block bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Découverte</span>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-extrabold text-slate-900">0€</span>
                <span className="text-sm text-slate-400 mb-1">pour toujours</span>
              </div>
              <p className="text-xs text-slate-500 mb-5">Pour explorer la plateforme à ton rythme</p>
            </div>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              {[
                "Accès au Chapitre 1 de chaque matière",
                "1 Quiz complet par matière",
                "1 Simulation d'examen en mode réel",
              ].map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  </div>
                  <span className="text-sm text-slate-600 font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <a href="/inscription"
              className="text-center font-bold px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition text-sm">
              Commencer gratuitement
            </a>
          </div>

          {/* PLAN CANDIDAT */}
          <div className="relative bg-[#3b82f6] border-2 border-[#2563eb] rounded-2xl p-7 flex flex-col shadow-xl shadow-[#3b82f6]/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#3b82f6] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md border border-[#3b82f6]/20 whitespace-nowrap">
              ⭐ Le plus populaire
            </div>
            <div className="mb-2">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Candidat</span>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-extrabold text-white">15€</span>
                <span className="text-sm text-blue-100 mb-1">/ mois</span>
              </div>
              <p className="text-xs text-blue-100 mb-5">Pour une préparation sérieuse et structurée</p>
            </div>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              {[
                "Accès illimité à toutes les matières",
                "Tous les chapitres débloqués",
                "Banque de questions complète",
                "Quiz illimités avec corrections",
                "Simulateur d'examen en mode réel",
              ].map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-white/25 border-2 border-white/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm text-white font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <a href="/inscription"
              className="text-center font-bold px-6 py-3 rounded-xl bg-white text-[#3b82f6] hover:bg-blue-50 shadow-md transition text-sm">
              Choisir Candidat
            </a>
          </div>

          {/* PLAN LAURÉAT */}
          <div className="relative bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-slate-900 border-2 border-yellow-500/60 rounded-2xl p-7 flex flex-col shadow-xl shadow-slate-900/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
              👑 Meilleure valeur
            </div>
            <div className="mb-2">
              <span className="inline-block bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Lauréat</span>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-extrabold text-white">99€</span>
                <span className="text-sm text-slate-300 mb-1">/ an</span>
              </div>
              <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                Soit ~8€/mois — économise 81€
              </div>
              <p className="text-xs text-slate-400 mb-5">Pour viser le sommet du classement</p>
            </div>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              {[
                "Tout le plan Candidat inclus",
                "Accès illimité sans aucune restriction",
                "Banque de questions complète",
                "Quiz et simulateurs illimités",
                "Support prioritaire — réponse directe de l'équipe",
              ].map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 border-2 border-yellow-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="text-sm text-slate-200 font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <a href="/inscription"
              className="text-center font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-300 hover:to-yellow-400 shadow-lg shadow-yellow-500/30 transition text-sm">
              Choisir Lauréat
            </a>
          </div>

        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 mb-24 text-center">
        <div className="bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#bfdbfe] rounded-3xl p-8 md:p-12 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Prêt à décrocher ta place en<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Médecine ou en Dentisterie ?</span>
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Rejoins des centaines d'étudiants qui préparent le concours ARES avec la méthode LAUREA. Accède à tout le programme officiel pour réussir ton entrée en sciences médicales et dentaires.
          </p>
          <a href="/inscription"
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-10 py-4 rounded-xl text-lg transition shadow-xl shadow-[#3b82f6]/30">
            Commencer gratuitement
          </a>
          <p className="text-xs text-slate-500 mt-4">Sans carte bancaire · Accès immédiat · Annulable à tout moment</p>
        </div>
      </section>

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
              <a key={link.label} href={link.href}
                className="text-xs text-slate-500 hover:text-[#3b82f6] font-medium transition">
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