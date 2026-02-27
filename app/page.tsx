export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">

      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-2xl font-bold tracking-tight text-white">LAU<span className="text-[#3b82f6]">REA</span></span>
        <div className="flex gap-4">
          <a href="#waitlist" className="text-sm text-gray-400 hover:text-white transition">Rejoindre</a>
          <a href="#fonctionnalites" className="text-sm text-gray-400 hover:text-white transition">Fonctionnalités</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-28 max-w-4xl mx-auto">
        <div className="inline-block bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Concours ARES — Médecine et Dentisterie 🇧🇪</div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Prépare le concours ARES <span className="text-[#3b82f6]">comme jamais avant</span></h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-10">LAUREA est la première plateforme belge 100% dédiée au concours ARES. Cours structurés, quiz adaptatifs, simulateurs d'examen et concours trimestriel avec classement réel.</p>
        <a href="#waitlist" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg shadow-[#3b82f6]/30">Rejoindre la liste d'attente gratuite</a>
        <p className="text-xs text-gray-600 mt-4">Gratuit · Pas de carte bancaire · Accès prioritaire au lancement</p>
      </section>

      <section className="grid grid-cols-3 gap-6 max-w-3xl mx-auto px-6 mb-24">
        {[
          { number: "7", label: "Matières couvertes" },
          { number: "7 800+", label: "Questions de quiz" },
          { number: "4x/an", label: "Concours trimestriel" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-extrabold text-[#3b82f6] mb-1">{stat.number}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      <section id="fonctionnalites" className="max-w-5xl mx-auto px-6 mb-28">
        <h2 className="text-3xl font-bold text-center mb-3">Tout ce qu'il te faut pour réussir</h2>
        <p className="text-center text-gray-400 mb-12">Une plateforme complète, pensée pour le concours ARES belge</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "📚", title: "Cours structurés", desc: "105 chapitres couvrant les 7 matières officielles du concours ARES, avec schémas et fiches mémo." },
            { icon: "⚡", title: "Quiz adaptatifs", desc: "7 800+ questions QCM avec corrections détaillées. Système feux tricolores pour identifier tes lacunes." },
            { icon: "🎯", title: "Simulateur officiel", desc: "Reproduit fidèlement le format, le barème et la durée de l'examen ARES réel. Annales 2019-2025 incluses." },
            { icon: "🏆", title: "Concours trimestriel", desc: "4 fois par an, affronte tous les candidats inscrits. Classement général et par matière publié." },
            { icon: "📊", title: "Suivi de progression", desc: "Dashboard complet : score par matière, chapitres maîtrisés, calendrier de révision automatique." },
            { icon: "📱", title: "Application mobile", desc: "Installable sur iOS et Android sans passer par l'App Store. Mode hors-ligne disponible." },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#3b82f6]/50 transition">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-28">
        <div className="bg-gradient-to-br from-[#1e3a8a]/40 to-[#1e40af]/20 border border-[#3b82f6]/30 rounded-3xl p-10 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold mb-4">Le Mode Concours Trimestriel</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">4 fois par an, LAUREA organise un examen blanc officiel ouvert à tous les inscrits. Passe l'examen de 4h et découvre ton classement réel face à tous les autres candidats belges.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { val: "Octobre", label: "Session 1" },
              { val: "Janvier", label: "Session 2" },
              { val: "Mars", label: "Session 3" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl py-3 px-2 text-sm">
                <div className="font-bold text-[#3b82f6]">{s.val}</div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="max-w-2xl mx-auto px-6 mb-28 text-center">
        <h2 className="text-3xl font-bold mb-3">Sois parmi les premiers inscrits</h2>
        <p className="text-gray-400 mb-8">La plateforme est en cours de développement. Inscris-toi maintenant pour obtenir un accès prioritaire gratuit au lancement.</p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" placeholder="ton-email@gmail.com" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition" />
          <button type="submit" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 whitespace-nowrap">Rejoindre</button>
        </form>
        <p className="text-xs text-gray-600 mt-4">Aucun spam. Désabonnement en 1 clic.</p>
      </section>

      <footer className="border-t border-white/10 px-8 py-6 text-center text-gray-600 text-sm">
        <span className="font-bold text-white">LAU<span className="text-[#3b82f6]">REA</span></span>{" "}© 2026 · La plateforme N°1 de préparation au concours ARES en Belgique
      </footer>

    </main>
  );
}