export default function Fonctionnalites() {
  return (
    <main className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b-2 border-slate-300 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/fonctionnalites" className="text-sm text-slate-900 font-medium transition">Fonctionnalités</a>
          <a href="/#matieres" className="text-sm text-slate-500 hover:text-slate-900 transition">Matières</a>
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
        <div className="text-center mb-20">
          <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Fonctionnalités</div>
          <h1 className="text-5xl font-extrabold mb-4 text-slate-900">Tout ce qu'il te faut<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">pour réussir le concours ARES</span></h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Une plateforme complète, pensée pour les candidats belges au concours ARES Médecine et Dentisterie.</p>
        </div>

        {/* FEATURE 1 — COURS */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <div className="inline-block bg-[#dbeafe] border-2 border-[#93c5fd] text-[#1d4ed8] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">01 — Cours</div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Des cours structurés couvrant l'intégralité du programme ARES</h2>
            <p className="text-slate-600 leading-relaxed mb-6">99 chapitres répartis sur les 7 matières officielles du concours. Chaque leçon est rédigée avec des explications claires, des exemples concrets tirés des vraies annales ARES et des schémas visuels.</p>
            <div className="space-y-3 mb-8">
              {[
                "7 matières officielles : Maths, Chimie, Physique, Biologie, Compréhension, Logique, Sensibilité",
                "99 chapitres organisés de façon progressive et structurée",
                "Fiches mémo téléchargeables en PDF à la fin de chaque chapitre",
                "Surlignage et notes personnelles sauvegardées dans ton compte",
                "Barre de progression visible sur chaque chapitre",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/cours" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30">Voir les cours</a>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
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
              <div className="flex gap-2 mt-4">
                <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🟢 Maîtrisé</div>
                <div className="bg-amber-50 border-2 border-amber-300 text-amber-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🟡 À consolider</div>
                <div className="bg-red-50 border-2 border-red-300 text-red-700 text-xs px-3 py-1.5 rounded-lg font-semibold">🔴 À retravailler</div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE 2 — QUIZ */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 order-2 md:order-1 shadow-md">
            <div className="text-xs text-slate-500 mb-4 font-semibold uppercase tracking-wide">⚡ Quiz — Cinétique chimique</div>
            <div className="bg-slate-900 text-white rounded-xl p-4 mb-3 border-2 border-slate-700">
              <div className="text-sm font-medium mb-4">Question 3/15 — Quelle est l'unité de la constante de vitesse pour une réaction d'ordre 2 ?</div>
              <div className="space-y-2">
                {["L·mol⁻¹·s⁻¹", "mol·L⁻¹·s⁻¹", "s⁻¹", "mol²·L⁻²·s⁻¹"].map((opt, i) => (
                  <div key={opt} className={`px-4 py-2.5 rounded-xl text-sm cursor-pointer border-2 transition ${i === 0 ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-100" : "bg-white/5 border-white/15 text-slate-300"}`}>{opt}</div>
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">7 800+ questions avec corrections détaillées</h2>
            <p className="text-slate-600 leading-relaxed mb-6">Un système de quiz complet couvrant les 7 matières. Chaque réponse est accompagnée d'une explication détaillée qui t'aide à comprendre ton erreur et ne plus la répéter.</p>
            <div className="space-y-3 mb-8">
              {[
                "Quiz de chapitre : 10 à 20 questions à la fin de chaque leçon",
                "Quiz flash : 5 questions rapides pour réviser en 5 minutes",
                "Quiz de révision : généré automatiquement sur tes chapitres faibles",
                "Quiz chronométré : même ratio temps/questions que l'examen réel",
                "Défi ami : envoie un lien de défi à un ami et compare vos scores",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/quiz" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-amber-500/30">Essayer un quiz</a>
          </div>
        </div>

        {/* FEATURE 3 — SIMULATEUR */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <div className="inline-block bg-emerald-50 border-2 border-emerald-300 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">03 — Simulateur</div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Simule l'examen ARES dans des conditions réelles</h2>
            <p className="text-slate-600 leading-relaxed mb-6">Le simulateur reproduit fidèlement le format officiel du concours ARES : même structure, même barème, même durée. Plus de mauvaises surprises le jour J.</p>
            <div className="space-y-3 mb-8">
              {[
                "Examen complet de 4h respectant le barème officiel ARES",
                "Annales authentiques de 2019 à 2025 avec corrections",
                "Examen aléatoire : nouvelles questions à chaque simulation",
                "Analyse post-examen : score par matière, temps par question",
                "Comparaison avec la moyenne des autres utilisateurs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/examens" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-600/30">Lancer une simulation</a>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">🎯 Résultats — Simulation #12</span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100 border-2 border-emerald-300 px-2 py-1 rounded-lg">14.5 / 20</span>
            </div>
            <div className="space-y-3">
              {[
                { matiere: "Mathématiques", score: 16, color: "bg-green-500" },
                { matiere: "Chimie", score: 12, color: "bg-yellow-500" },
                { matiere: "Biologie", score: 17, color: "bg-green-500" },
                { matiere: "Physique", score: 9, color: "bg-red-500" },
                { matiere: "Compréhension", score: 15, color: "bg-green-500" },
              ].map((m) => (
                <div key={m.matiere} className="flex items-center gap-3">
                  <span className="text-xs text-slate-600 w-28 flex-shrink-0 font-medium">{m.matiere}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
                    <div className={`h-2.5 rounded-full ${m.color}`} style={{ width: `${(m.score / 20) * 100}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 w-8 text-right">{m.score}/20</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#dbeafe] border-2 border-[#93c5fd] rounded-xl p-3">
              <div className="text-xs text-[#1d4ed8] font-bold mb-1">📊 Rang estimé</div>
              <div className="text-xs text-slate-700">Top 35% des candidats sur cette simulation</div>
            </div>
          </div>
        </div>

        {/* FEATURE 4 — CONCOURS */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div className="bg-white border-2 border-[#93c5fd] rounded-2xl p-6 order-2 md:order-1 shadow-md" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)" }}>
            <div className="text-xs text-slate-600 mb-4 font-semibold uppercase tracking-wide">🏆 Concours Trimestriel — Session 1 · Octobre 2026</div>
            <div className="space-y-2 mb-4">
              {[
                { rang: "🥇 1", nom: "Sophie M.", score: "18.5/20", badge: "Top 1%" },
                { rang: "🥈 2", nom: "Thomas K.", score: "18.2/20", badge: "Top 1%" },
                { rang: "🥉 3", nom: "Ahmed B.", score: "17.9/20", badge: "Top 2%" },
                { rang: "   47", nom: "Toi", score: "14.5/20", badge: "Top 23%", highlight: true },
              ].map((r) => (
                <div key={r.nom} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 ${r.highlight ? "bg-white border-[#93c5fd]" : "bg-white/70 border-slate-200"}`}>
                  <span className="text-sm w-8 text-slate-500">{r.rang}</span>
                  <span className={`text-sm flex-1 ${r.highlight ? "text-[#1d4ed8] font-bold" : "text-slate-900 font-medium"}`}>{r.nom}</span>
                  <span className="text-sm font-bold text-slate-900">{r.score}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.highlight ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]" : "bg-slate-100 text-slate-600 border border-slate-300"}`}>{r.badge}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-slate-600 font-medium">482 participants · Résultats publiés le 15 octobre</div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-orange-50 border-2 border-orange-300 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">04 — Concours Trimestriel</div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Affronte tous les candidats belges 4 fois par an</h2>
            <p className="text-slate-600 leading-relaxed mb-6">La fonctionnalité la plus unique de LAUREA. 4 fois par an, un examen blanc officiel est organisé sur une fenêtre de 48h. Tu passes l'examen quand tu veux dans ce créneau et découvres ton vrai classement.</p>
            <div className="space-y-3 mb-8">
              {[
                "Examen de 4h à passer librement dans une fenêtre de 48h",
                "Questions inédites spécialement créées pour chaque session",
                "Classement général + classement détaillé par matière",
                "Certificat PDF officiel avec ton rang et ta note",
                "Suivi de ton évolution session après session",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/concours" className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-orange-500/30">S'inscrire au concours</a>
          </div>
        </div>

        {/* FEATURE 5 — FEUX TRICOLORES */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <div className="inline-block bg-purple-50 border-2 border-purple-300 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">05 — Suivi de progression</div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Le système feux tricolores qui identifie tes lacunes</h2>
            <p className="text-slate-600 leading-relaxed mb-6">Après chaque quiz, chaque chapitre affiche automatiquement un indicateur coloré. D'un seul coup d'œil, tu sais exactement où concentrer tes révisions.</p>
            <div className="space-y-4 mb-8">
              {[
                { color: "bg-green-500", label: "🟢 Maîtrisé", desc: "Score supérieur à 75% — Tu peux passer à la suite", border: "border-green-300", bg: "bg-green-50", text: "text-green-700" },
                { color: "bg-yellow-500", label: "🟡 À consolider", desc: "Score entre 50% et 75% — Refais quelques exercices", border: "border-yellow-300", bg: "bg-amber-50", text: "text-amber-700" },
                { color: "bg-red-500", label: "🔴 À retravailler", desc: "Score inférieur à 50% — Reprends le cours depuis le début", border: "border-red-300", bg: "bg-red-50", text: "text-red-700" },
              ].map((f) => (
                <div key={f.label} className={`flex items-center gap-4 ${f.bg} border-2 ${f.border} rounded-xl p-4 shadow-sm`}>
                  <div className={`w-4 h-4 rounded-full ${f.color} flex-shrink-0 shadow-sm`}></div>
                  <div>
                    <div className={`text-sm font-bold ${f.text}`}>{f.label}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/dashboard" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-purple-600/30">Voir mon tableau de bord</a>
          </div>
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="text-xs text-slate-500 mb-5 font-semibold uppercase tracking-wide">📊 Ton tableau de bord — Vue globale</div>
            <div className="space-y-3">
              {[
                { nom: "Mathématiques", icon: "📐", score: 72, feu: "🟡" },
                { nom: "Chimie", icon: "⚗️", score: 45, feu: "🔴" },
                { nom: "Biologie", icon: "🔬", score: 88, feu: "🟢" },
                { nom: "Physique", icon: "⚡", score: 31, feu: "🔴" },
                { nom: "Compréhension", icon: "📖", score: 60, feu: "🟡" },
                { nom: "Raisonnement", icon: "🧩", score: 55, feu: "🟡" },
                { nom: "Sensibilité", icon: "📈", score: 90, feu: "🟢" },
              ].map((m) => (
                <div key={m.nom} className="flex items-center gap-3">
                  <span className="text-base w-6">{m.icon}</span>
                  <span className="text-xs text-slate-600 w-24 flex-shrink-0 font-medium">{m.nom}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
                    <div className={`h-2.5 rounded-full ${m.score >= 75 ? "bg-green-500" : m.score >= 50 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${m.score}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 w-8 text-right">{m.score}%</span>
                  <span className="text-sm">{m.feu}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
              <div className="text-xs text-orange-600 font-bold mb-1">💡 Priorité du jour</div>
              <div className="text-xs text-slate-700">Travaille la Physique et la Chimie — tes 2 matières les plus faibles</div>
            </div>
          </div>
        </div>

        {/* FEATURE 6 — PWA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Révise partout, même sans connexion internet</h2>
            <p className="text-slate-600 leading-relaxed mb-6">LAUREA est une Progressive Web App. Tu peux l'installer sur ton téléphone comme une vraie application, sans passer par l'App Store ou le Google Play Store. Zéro frais supplémentaire.</p>
            <div className="space-y-3 mb-8">
              {[
                "Installation en 1 clic depuis Chrome ou Safari mobile",
                "Icône LAUREA sur ton écran d'accueil comme une vraie app",
                "Mode hors-ligne : révise dans le métro sans connexion",
                "Notifications push : rappels de révision et alertes concours",
                "Interface optimisée pour les écrans tactiles",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-pink-600 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/inscription" className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-pink-600/30">Essayer gratuitement</a>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center bg-white border-2 border-[#93c5fd] rounded-3xl p-16 shadow-lg" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)" }}>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Convaincu ? Commence dès aujourd'hui.</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Rejoins +200 étudiants qui préparent le concours ARES 2026 avec LAUREA. Gratuit, sans carte bancaire.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-[#3b82f6]/30">Commencer gratuitement</a>
            <a href="/tarifs" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm">Voir les tarifs</a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Sans carte bancaire · Accès immédiat · Annulable à tout moment</p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-300 px-8 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex gap-6">
            <a href="/fonctionnalites" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Fonctionnalités</a>
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