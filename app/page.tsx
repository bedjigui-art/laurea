export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b-2 border-slate-200 bg-slate-50/90 backdrop-blur-xl shadow-sm">
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/fonctionnalites" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Fonctionnalités</a>
          <a href="/matieres" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Matières</a>
          <a href="/concours" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Concours</a>
          <a href="/tarifs" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Tarifs</a>
        </div>
        <div className="flex gap-3">
          <a href="/connexion" className="text-sm text-slate-700 hover:text-slate-900 font-medium transition px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-[#3b82f6] bg-white">Connexion</a>
          <a href="/inscription" className="text-sm bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2 rounded-xl transition shadow-md shadow-[#3b82f6]/30">Inscription gratuite</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse inline-block"></span>
          Plateforme N°1 — Concours ARES Belgique 🇧🇪
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
          Réussis le concours<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">ARES en Belgique</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Cours structurés, quiz adaptatifs, simulateurs d'examen officiels et concours trimestriel avec classement réel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl text-base transition shadow-xl shadow-[#3b82f6]/30">Commencer gratuitement</a>
          <a href="/cours" className="bg-white hover:bg-slate-100 border-2 border-slate-300 hover:border-[#3b82f6] text-slate-800 font-semibold px-8 py-4 rounded-xl text-base transition shadow-sm">Voir les cours</a>
        </div>
        <p className="text-xs text-slate-500 mt-5">Gratuit · Sans carte bancaire · Accès immédiat</p>

        {/* MOCKUP */}
        <div className="mt-20 w-full max-w-4xl mx-auto bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-2xl shadow-slate-300/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="flex-1 bg-slate-100 border border-slate-200 rounded-lg h-6 ml-2"></div>
          </div>
          <div className="grid grid-cols-4 gap-3 h-48">
            <div className="col-span-1 bg-slate-900 rounded-xl p-3 flex flex-col gap-2">
              {[
                { label: "📚 Cours", href: "/cours" },
                { label: "⚡ Quiz", href: "/quiz" },
                { label: "🎯 Examens", href: "/examens" },
                { label: "🏆 Concours", href: "/concours" },
                { label: "📊 Stats", href: "/dashboard" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="text-xs text-slate-300 bg-white/10 hover:bg-white/20 rounded-lg px-2 py-1.5 transition">{item.label}</a>
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
              <div className="mt-4 flex gap-2">
                <div className="bg-green-500/25 border border-green-500/40 text-green-600 text-xs px-2 py-1 rounded-lg font-medium">🟢 Maîtrisé</div>
                <div className="bg-red-500/25 border border-red-500/40 text-red-600 text-xs px-2 py-1 rounded-lg font-medium">🔴 À retravailler</div>
                <div className="bg-yellow-500/25 border border-yellow-500/40 text-yellow-700 text-xs px-2 py-1 rounded-lg font-medium">🟡 À consolider</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "7", label: "Matières ARES", icon: "📚", href: "/cours" },
            { number: "7 800+", label: "Questions de quiz", icon: "⚡", href: "/quiz" },
            { number: "4x/an", label: "Concours trimestriel", icon: "🏆", href: "/concours" },
            { number: "100%", label: "Gratuit au démarrage", icon: "🎯", href: "/inscription" },
          ].map((stat) => (
            <a key={stat.label} href={stat.href} className="bg-white border-2 border-slate-200 hover:border-[#3b82f6]/50 rounded-2xl p-6 text-center transition shadow-sm hover:shadow-md cursor-pointer">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </a>
          ))}
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section id="fonctionnalites" className="max-w-6xl mx-auto px-6 mb-28">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Fonctionnalités</div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Tout ce qu'il te faut pour réussir</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Une plateforme complète, conçue spécifiquement pour le concours ARES belge</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "📚", title: "Cours structurés", desc: "105 chapitres couvrant les 7 matières officielles. Schémas interactifs, fiches mémo téléchargeables.", color: "blue", href: "/cours" },
            { icon: "⚡", title: "Quiz adaptatifs", desc: "7 800+ questions QCM avec corrections détaillées. Système feux tricolores pour identifier tes lacunes.", color: "yellow", href: "/quiz" },
            { icon: "🎯", title: "Simulateur officiel", desc: "Reproduit fidèlement le format, le barème et la durée réelle de l'examen ARES. Annales 2019-2025 incluses.", color: "green", href: "/examens" },
            { icon: "🏆", title: "Concours trimestriel", desc: "4 sessions par an. Affronte tous les candidats inscrits et découvre ton classement réel.", color: "orange", href: "/concours" },
            { icon: "📊", title: "Suivi de progression", desc: "Dashboard complet : score par matière, feux tricolores, calendrier de révision automatique.", color: "purple", href: "/dashboard" },
            { icon: "📱", title: "PWA Mobile", desc: "Installe LAUREA sur ton téléphone comme une vraie app. Mode hors-ligne disponible.", color: "pink", href: "/inscription" },
          ].map((f) => {
            const colors: Record<string, { border: string; icon: string; text: string }> = {
              blue:   { border: "border-[#3b82f6]/30 hover:border-[#3b82f6]/70",   icon: "bg-[#3b82f6]/10",   text: "text-[#3b82f6]"  },
              yellow: { border: "border-yellow-400/40 hover:border-yellow-400/80", icon: "bg-yellow-50",      text: "text-yellow-600" },
              green:  { border: "border-green-400/40 hover:border-green-400/80",   icon: "bg-green-50",       text: "text-green-600"  },
              orange: { border: "border-orange-400/40 hover:border-orange-400/80", icon: "bg-orange-50",      text: "text-orange-600" },
              purple: { border: "border-purple-400/40 hover:border-purple-400/80", icon: "bg-purple-50",      text: "text-purple-600" },
              pink:   { border: "border-pink-400/40 hover:border-pink-400/80",     icon: "bg-pink-50",        text: "text-pink-600"   },
            };
            return (
              <a key={f.title} href={f.href} className={`bg-white border-2 ${colors[f.color].border} rounded-2xl p-6 hover:shadow-md transition cursor-pointer group`}>
                <div className={`w-12 h-12 ${colors[f.color].icon} rounded-xl flex items-center justify-center text-2xl mb-4`}>{f.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${colors[f.color].text}`}>{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* MATIERES */}
      <section id="matieres" className="max-w-5xl mx-auto px-6 mb-28">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Programme</div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Les 7 matières du concours ARES</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Contenu 100% aligné sur le programme officiel belge</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "📐", name: "Mathématiques", chapters: 18, questions: "1 500+", topics: "Analyse, algèbre, probabilités, statistiques" },
            { icon: "⚗️", name: "Chimie", chapters: 20, questions: "1 500+", topics: "Chimie générale, organique, électrochimie" },
            { icon: "🔬", name: "Biologie", chapters: 15, questions: "1 200+", topics: "Cellule, génétique, évolution, métabolisme" },
            { icon: "⚡", name: "Physique", chapters: 16, questions: "1 200+", topics: "Mécanique, thermodynamique, électricité, optique" },
            { icon: "📖", name: "Compréhension de texte", chapters: 10, questions: "800+", topics: "Textes scientifiques FR et EN, analyse critique" },
            { icon: "🧩", name: "Raisonnement logique", chapters: 12, questions: "1 000+", topics: "Séries, matrices, syllogismes, déduction" },
            { icon: "📈", name: "Sensibilité scientifique", chapters: 8, questions: "600+", topics: "Graphiques, interprétation de données" },
          ].map((m, i) => (
            <a key={m.name} href="/cours" className={`bg-white border-2 border-slate-200 hover:border-[#3b82f6]/50 rounded-2xl p-5 flex items-center gap-4 transition shadow-sm hover:shadow-md cursor-pointer ${i === 6 ? "md:col-span-2" : ""}`}>
              <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-xl flex-shrink-0">{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900">{m.name}</h3>
                  <span className="text-xs text-[#3b82f6] font-bold bg-[#3b82f6]/10 px-2 py-0.5 rounded-full">{m.questions}</span>
                </div>
                <p className="text-slate-500 text-xs mb-2">{m.topics}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-full h-2 border border-slate-200">
                    <div className="bg-[#3b82f6] h-2 rounded-full" style={{ width: `${(m.chapters / 20) * 100}%` }}></div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{m.chapters} ch.</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONCOURS */}
      <section id="concours" className="max-w-5xl mx-auto px-6 mb-28">
        <div className="relative bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#bfdbfe] rounded-3xl p-12 overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/8 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-block bg-[#3b82f6]/15 border-2 border-[#3b82f6]/40 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Fonctionnalité exclusive</div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-slate-900">Le Mode Concours Trimestriel</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">4 fois par an, LAUREA organise un examen blanc officiel de 4h ouvert à tous les inscrits.</p>
                <div className="space-y-3 mb-8">
                  {["Examen de 4h sur fenêtre de 48h", "Questions inédites à chaque session", "Classement général + par matière", "Certificat PDF téléchargeable"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3b82f6]/20 border-2 border-[#3b82f6]/50 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/concours" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30">Participer au prochain concours</a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { session: "Session 1", date: "Octobre 2026" },
                  { session: "Session 2", date: "Janvier 2027" },
                  { session: "Session 3", date: "Mars 2027" },
                  { session: "Session 4", date: "Juin 2027" },
                ].map((s) => (
                  <a key={s.session} href="/concours" className="bg-white border-2 border-slate-200 hover:border-[#3b82f6]/50 rounded-2xl p-4 text-center transition shadow-sm hover:shadow-md">
                    <div className="text-xs text-[#3b82f6] font-bold mb-1">{s.session}</div>
                    <div className="text-sm font-bold text-slate-900 mb-2">{s.date}</div>
                    <div className="text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 font-medium">À venir</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="max-w-5xl mx-auto px-6 mb-28">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Tarifs</div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Simple et transparent</h2>
          <p className="text-slate-500">Commence gratuitement, passe au niveau supérieur quand tu veux</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Gratuit", price: "0€", period: "pour toujours", desc: "Pour découvrir la plateforme", features: ["3 chapitres de démonstration", "20 questions/jour", "1 simulation/mois", "Dashboard basique"], cta: "Commencer gratuitement", href: "/inscription", highlight: false },
            { name: "Standard", price: "15€", period: "par mois", desc: "Pour une préparation sérieuse", features: ["Toutes les matières complètes", "Quiz illimités", "5 simulations/mois", "Annales 2019-2024", "1 concours/an", "FAQ intelligente"], cta: "Choisir Standard", href: "/inscription", highlight: true },
            { name: "Premium", price: "29€", period: "par mois", desc: "Pour viser le top du classement", features: ["Tout Standard inclus", "Simulations illimitées", "Toutes les annales", "Tous les concours", "Mode hors-ligne PWA", "Support prioritaire"], cta: "Choisir Premium", href: "/inscription", highlight: false },
          ].map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-7 flex flex-col shadow-md ${plan.highlight ? "bg-[#3b82f6] border-2 border-[#2563eb]" : "bg-white border-2 border-slate-200 hover:border-slate-400 transition"}`}>
              {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#3b82f6] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md border border-[#3b82f6]/20">⭐ Le plus populaire</div>}
              <div className="mb-6">
                <div className={`text-sm font-bold mb-1 ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>{plan.name}</div>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>{plan.period}</span>
                </div>
                <p className={`text-xs ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>{plan.desc}</p>
              </div>
              <div className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-white/25" : "bg-[#3b82f6]/15"}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? "bg-white" : "bg-[#3b82f6]"}`}></div>
                    </div>
                    <span className={`text-sm font-medium ${plan.highlight ? "text-white" : "text-slate-700"}`}>{feature}</span>
                  </div>
                ))}
              </div>
              <a href={plan.href} className={`text-center font-bold px-6 py-3 rounded-xl transition text-sm ${plan.highlight ? "bg-white text-[#3b82f6] hover:bg-blue-50 shadow-md" : "bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-md"}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-3xl mx-auto px-6 mb-28 text-center">
        <div className="bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#bfdbfe] rounded-3xl p-12 shadow-md">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Prêt à décrocher ta place en médecine ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto font-medium">Rejoins des centaines d'étudiants qui préparent le concours ARES avec LAUREA.</p>
          <a href="/inscription" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-10 py-4 rounded-xl text-lg transition shadow-xl shadow-[#3b82f6]/30">Commencer gratuitement</a>
          <p className="text-xs text-slate-500 mt-4">Sans carte bancaire · Accès immédiat · Annulable à tout moment</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-200 px-8 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex gap-6">
            {[
              { label: "Fonctionnalités", href: "/fonctionnalites" },
              { label: "Matières", href: "/matieres" },
              { label: "Cours", href: "/cours" },
              { label: "Concours", href: "/concours" },
              { label: "Tarifs", href: "/tarifs" },
              { label: "Connexion", href: "/connexion" },
            ].map(link => (
              <a key={link.label} href={link.href} className="text-xs text-slate-500 hover:text-[#3b82f6] font-medium transition">{link.label}</a>
            ))}
          </div>
          <p className="text-xs text-slate-500 font-medium">© 2026 LAUREA · Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}