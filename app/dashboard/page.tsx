export default function Dashboard() {
  const matieres = [
    { nom: "Mathématiques", icon: "📐", score: 72, chapitres: 12, total: 18, couleur: "blue" },
    { nom: "Chimie", icon: "⚗️", score: 45, chapitres: 7, total: 20, couleur: "yellow" },
    { nom: "Biologie", icon: "🔬", score: 88, chapitres: 13, total: 15, couleur: "green" },
    { nom: "Physique", icon: "⚡", score: 31, chapitres: 4, total: 16, couleur: "red" },
    { nom: "Compréhension", icon: "📖", score: 60, chapitres: 6, total: 10, couleur: "purple" },
    { nom: "Raisonnement", icon: "🧩", score: 55, chapitres: 7, total: 12, couleur: "orange" },
    { nom: "Sensibilité sci.", icon: "📈", score: 90, chapitres: 8, total: 8, couleur: "green" },
  ];

  const getFeu = (score: number) => {
    if (score >= 75) return { label: "Maîtrisé", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-300", dot: "bg-green-500" };
    if (score >= 50) return { label: "À consolider", color: "text-amber-700", bg: "bg-amber-50 border-amber-300", dot: "bg-yellow-500" };
    return { label: "À retravailler", color: "text-red-700", bg: "bg-red-50 border-red-300", dot: "bg-red-500" };
  };

  const getBarColor = (score: number) => {
    if (score >= 75) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const scoreGlobal = Math.round(matieres.reduce((acc, m) => acc + m.score, 0) / matieres.length);

  const statCards: { label: string; value: string; icon: string; sub: string; color: string }[] = [
    { label: "Score global", value: `${scoreGlobal}%`, icon: "🎯", sub: "+4% cette semaine", color: "blue" },
    { label: "Streak actuel", value: "7 jours", icon: "🔥", sub: "Record : 14 jours", color: "orange" },
    { label: "Questions répondues", value: "1 243", icon: "⚡", sub: "128 cette semaine", color: "yellow" },
    { label: "Prochain concours", value: "Octobre", icon: "🏆", sub: "Session 1 — 2026", color: "green" },
  ];

  const cardColors: Record<string, { card: string; border: string; text: string }> = {
    blue:   { card: "bg-[#dbeafe]", border: "border-[#93c5fd]", text: "text-[#1d4ed8]" },
    orange: { card: "bg-orange-50",  border: "border-orange-300", text: "text-orange-600" },
    yellow: { card: "bg-amber-50",   border: "border-amber-300",  text: "text-amber-700" },
    green:  { card: "bg-emerald-50", border: "border-emerald-300",text: "text-emerald-700" },
  };

  const priorites: { matiere: string; icon: string; action: string; score: number; type: string }[] = [
    { matiere: "Physique", icon: "⚡", action: "Reprendre le chapitre 5 — Électricité", score: 31, type: "red" },
    { matiere: "Chimie", icon: "⚗️", action: "Quiz de révision — Cinétique chimique", score: 45, type: "yellow" },
    { matiere: "Compréhension", icon: "📖", action: "Continuer le chapitre 7 — Textes EN", score: 60, type: "yellow" },
  ];

  const prioriteStyles: Record<string, { card: string; badge: string; icon: string }> = {
    red:    { card: "bg-red-50 border-red-300",    badge: "bg-red-100 border-red-300 text-red-700",    icon: "🔴" },
    yellow: { card: "bg-amber-50 border-amber-300", badge: "bg-amber-100 border-amber-300 text-amber-700", icon: "🟡" },
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b-2 border-slate-300 bg-white shadow-sm">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Dashboard", href: "/dashboard", active: true },
              { label: "Cours", href: "/cours", active: false },
              { label: "Quiz", href: "/quiz", active: false },
              { label: "Examens", href: "/examens", active: false },
              { label: "Concours", href: "/concours", active: false },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${
                  item.active
                    ? "bg-[#dbeafe] text-[#1d4ed8] border border-[#93c5fd]"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
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

      <div className="pt-20 px-6 pb-12 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 mt-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Bon retour, Ahmed 👋</h1>
            <p className="text-slate-600 text-sm mt-1">
              Concours ARES 2026 — Il te reste <span className="text-[#1d4ed8] font-semibold">187 jours</span>
            </p>
          </div>
          <a href="/examens" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm">
            Lancer une simulation
          </a>
        </div>

        {/* CARDS STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((card) => {
            const c = cardColors[card.color];
            return (
              <div key={card.label} className={`border-2 ${c.border} ${c.card} rounded-2xl p-5 shadow-sm`}>
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className={`text-2xl font-extrabold mb-1 ${c.text}`}>{card.value}</div>
                <div className="text-xs text-slate-700 font-semibold mb-1">{card.label}</div>
                <div className="text-xs text-slate-500">{card.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* PROGRESSION PAR MATIERE */}
          <div className="lg:col-span-2 bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg text-slate-900">Progression par matière</h2>
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-emerald-700"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>Maîtrisé</span>
                <span className="flex items-center gap-1.5 text-amber-700"><span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>À consolider</span>
                <span className="flex items-center gap-1.5 text-red-700"><span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>À retravailler</span>
              </div>
            </div>
            <div className="space-y-4">
              {matieres.map((m) => {
                const feu = getFeu(m.score);
                return (
                  <div key={m.nom} className="flex items-center gap-4">
                    <div className="text-xl w-8 text-center">{m.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-slate-900">{m.nom}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${feu.bg} ${feu.color} font-semibold`}>{feu.label}</span>
                          <span className="text-sm font-bold text-slate-900">{m.score}%</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-200 rounded-full h-2.5 border border-slate-300">
                          <div className={`h-2.5 rounded-full transition-all ${getBarColor(m.score)}`} style={{ width: `${m.score}%` }}></div>
                        </div>
                        <span className="text-xs text-slate-500 w-16 text-right font-medium">{m.chapitres}/{m.total} ch.</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="flex flex-col gap-5">

            {/* SIMULATEUR */}
            <div className="bg-white border-2 border-[#93c5fd] rounded-2xl p-5 shadow-md" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)" }}>
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 mb-1">Simulation d'examen</h3>
              <p className="text-slate-600 text-xs mb-4">Lance un examen blanc complet de 4h ou par matière</p>
              <div className="flex flex-col gap-2">
                <a href="/examens" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2.5 rounded-xl transition text-sm text-center shadow-md shadow-[#3b82f6]/20">Examen complet (4h)</a>
                <a href="/examens" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-4 py-2.5 rounded-xl transition text-sm text-center">Par matière</a>
              </div>
            </div>

            {/* PROCHAIN CONCOURS */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900">Prochain concours</h3>
                <span className="text-xs text-orange-700 font-bold bg-orange-100 border border-orange-300 px-2 py-1 rounded-lg">Session 1</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">Octobre 2026</div>
              <p className="text-slate-600 text-xs mb-4">Fenêtre de 48h · Examen de 4h · Classement général</p>
              <a href="/concours" className="block bg-orange-500 hover:bg-orange-400 text-white font-bold px-4 py-2.5 rounded-xl transition text-sm text-center shadow-md shadow-orange-500/20">S'inscrire au concours</a>
            </div>

            {/* STREAK */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Streak de révision</h3>
                <span className="text-orange-500 font-extrabold text-lg">🔥 7</span>
              </div>
              <div className="grid grid-cols-7 gap-1.5 mb-3">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold ${
                      i < 7 ? "bg-orange-100 border-2 border-orange-300 text-orange-600" : "bg-slate-100 border border-slate-200 text-slate-400"
                    }`}>
                      {i < 7 ? "✓" : "·"}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{day}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 text-center font-medium">7 jours consécutifs · Record : 14 jours</p>
            </div>

          </div>
        </div>

        {/* PRIORITES DU JOUR */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-lg text-slate-900">Priorités du jour</h2>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Basé sur tes feux tricolores</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priorites.map((p) => {
              const ps = prioriteStyles[p.type];
              return (
                <div key={p.matiere} className={`border-2 rounded-xl p-4 ${ps.card}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span>{p.icon}</span>
                    <span className="font-bold text-sm text-slate-900">{p.matiere}</span>
                    <span className="ml-auto text-base">{ps.icon}</span>
                  </div>
                  <p className="text-slate-600 text-xs mb-3 leading-relaxed">{p.action}</p>
                  <a
                    href="/cours"
                    className="block bg-slate-900 hover:bg-slate-700 text-white text-xs font-bold px-3 py-2.5 rounded-lg transition text-center"
                  >
                    Commencer
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}