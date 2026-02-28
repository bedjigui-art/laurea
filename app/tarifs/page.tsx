export default function Tarifs() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b-2 border-slate-200 bg-slate-50/90 backdrop-blur-xl shadow-sm">
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/fonctionnalites" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Fonctionnalités</a>
          <a href="/matieres" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Matières</a>
          <a href="/concours" className="text-sm text-slate-600 hover:text-[#3b82f6] font-medium transition">Concours</a>
          <a href="/tarifs" className="text-sm text-[#3b82f6] font-bold transition">Tarifs</a>
        </div>
        <div className="flex gap-3">
          <a href="/connexion" className="text-sm text-slate-700 font-medium transition px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-[#3b82f6] bg-white">Connexion</a>
          <a href="/inscription" className="text-sm bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2 rounded-xl transition shadow-md shadow-[#3b82f6]/30">Inscription gratuite</a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3b82f6]/10 border-2 border-[#3b82f6]/30 text-[#3b82f6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">Tarifs</div>
          <h1 className="text-5xl font-extrabold mb-4 text-slate-900">Simple et transparent</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">Commence gratuitement, passe au niveau supérieur quand tu veux. Annulable à tout moment.</p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-700 text-sm font-bold px-5 py-2.5 rounded-full mt-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            Paiement annuel : économise 20% sur tous les plans
          </div>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              name: "Gratuit", emoji: "🎓", price: "0€", period: "pour toujours",
              desc: "Pour découvrir la plateforme et tester le contenu",
              highlight: false, gradient: false,
              features: [
                { ok: true,  text: "3 chapitres de démonstration" },
                { ok: true,  text: "20 questions de quiz par jour" },
                { ok: true,  text: "1 simulation d'examen par mois" },
                { ok: true,  text: "Dashboard de progression basique" },
                { ok: true,  text: "Accès à la FAQ par chapitre" },
                { ok: false, text: "Toutes les matières complètes" },
                { ok: false, text: "Annales officielles ARES" },
                { ok: false, text: "Concours trimestriel" },
                { ok: false, text: "Mode hors-ligne PWA" },
                { ok: false, text: "Support prioritaire" },
              ],
              cta: "Commencer gratuitement",
            },
            {
              name: "Standard", emoji: "🚀", price: "15€", prixAnnuel: "12€", period: "par mois",
              desc: "Pour une préparation sérieuse et structurée",
              highlight: true, gradient: false,
              features: [
                { ok: true,  text: "Toutes les matières complètes (99 chapitres)" },
                { ok: true,  text: "Quiz illimités avec corrections détaillées" },
                { ok: true,  text: "5 simulations d'examen par mois" },
                { ok: true,  text: "Annales ARES 2019 à 2024" },
                { ok: true,  text: "1 concours trimestriel par an" },
                { ok: true,  text: "FAQ intelligente par chapitre" },
                { ok: true,  text: "Commentaires par chapitre" },
                { ok: true,  text: "Dashboard complet + feux tricolores" },
                { ok: false, text: "Simulations illimitées" },
                { ok: false, text: "Mode hors-ligne PWA" },
              ],
              cta: "Choisir Standard",
            },
            {
              name: "Premium", emoji: "🏆", price: "29€", prixAnnuel: "23€", period: "par mois",
              desc: "Pour viser le top du classement et tout débloquer",
              highlight: false, gradient: true,
              features: [
                { ok: true, text: "Tout ce qui est inclus dans Standard" },
                { ok: true, text: "Simulations d'examen illimitées" },
                { ok: true, text: "Toutes les annales ARES disponibles" },
                { ok: true, text: "Tous les concours trimestriels inclus" },
                { ok: true, text: "Mode hors-ligne PWA (réviser sans internet)" },
                { ok: true, text: "Calendrier de révision IA automatique" },
                { ok: true, text: "Export PDF de ta progression" },
                { ok: true, text: "Support prioritaire par email" },
                { ok: true, text: "Accès anticipé aux nouvelles fonctionnalités" },
                { ok: true, text: "Badge Premium sur ton profil concours" },
              ],
              cta: "Choisir Premium",
            },
          ].map((plan) => {
            const isBlue = plan.highlight;
            const isPurple = plan.gradient;
            const cardBg = isBlue ? "bg-[#3b82f6] border-[#2563eb]" : isPurple ? "bg-gradient-to-br from-purple-600 to-[#3b82f6] border-purple-400" : "bg-white border-slate-200";
            const textMuted = isBlue || isPurple ? "text-blue-100" : "text-slate-500";
            const textMain = isBlue || isPurple ? "text-white" : "text-slate-900";
            const featureText = (ok: boolean) => ok ? (isBlue || isPurple ? "text-white" : "text-slate-700") : "text-slate-400 line-through";
            const ctaStyle = isBlue ? "bg-white text-[#3b82f6] hover:bg-blue-50 font-extrabold shadow-md" : isPurple ? "bg-white text-purple-600 hover:bg-purple-50 font-extrabold shadow-md" : "bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold shadow-md";

            return (
              <div key={plan.name} className={`relative rounded-2xl border-2 ${cardBg} p-8 flex flex-col shadow-lg`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1d4ed8] text-xs font-extrabold px-5 py-1.5 rounded-full shadow-md border border-[#3b82f6]/20">
                    ⭐ Le plus populaire
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-3xl mb-3">{plan.emoji}</div>
                  <div className={`text-sm font-bold mb-2 ${textMuted}`}>{plan.name}</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`text-5xl font-extrabold ${textMain}`}>{plan.price}</span>
                    <span className={`text-sm mb-2 ${textMuted}`}>{plan.period}</span>
                  </div>
                  {"prixAnnuel" in plan && (
                    <div className="inline-block bg-emerald-50 border-2 border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {plan.prixAnnuel}/mois en annuel — économise 20%
                    </div>
                  )}
                  <p className={`text-xs mt-2 ${textMuted}`}>{plan.desc}</p>
                </div>

                <div className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 text-sm font-bold ${f.ok ? (isBlue || isPurple ? "text-white" : "text-emerald-600") : "text-slate-300"}`}>
                        {f.ok ? "✓" : "✗"}
                      </span>
                      <span className={`text-sm leading-relaxed ${featureText(f.ok)}`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                <a href="/inscription" className={`text-center px-6 py-3.5 rounded-xl transition text-sm ${ctaStyle}`}>
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* COMPARAISON DÉTAILLÉE */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Comparaison détaillée</h2>
          <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md">
            <div className="grid grid-cols-4 gap-0">
              <div className="p-4 border-b-2 border-slate-200 bg-slate-100">
                <span className="text-sm font-bold text-slate-600">Fonctionnalité</span>
              </div>
              {["Gratuit", "Standard ⭐", "Premium"].map((p, i) => (
                <div key={p} className={`p-4 border-b-2 border-slate-200 text-center ${i === 1 ? "bg-[#3b82f6]" : "bg-slate-100"}`}>
                  <span className={`text-sm font-extrabold ${i === 1 ? "text-white" : "text-slate-700"}`}>{p}</span>
                </div>
              ))}
            </div>
            {[
              { feature: "Cours disponibles",    values: ["3 chapitres", "99 chapitres", "99 chapitres"] },
              { feature: "Questions de quiz",    values: ["20/jour", "Illimitées", "Illimitées"] },
              { feature: "Simulations d'examen", values: ["1/mois", "5/mois", "Illimitées"] },
              { feature: "Annales ARES",         values: ["✗", "2019-2024", "Toutes"] },
              { feature: "Concours trimestriel", values: ["✗", "1/an", "Tous"] },
              { feature: "Feux tricolores",      values: ["✗", "✓", "✓"] },
              { feature: "Calendrier révision",  values: ["✗", "✓", "✓ Avancé"] },
              { feature: "FAQ intelligente",     values: ["Partielle", "Complète", "Complète"] },
              { feature: "Commentaires cours",   values: ["✗", "✓", "✓"] },
              { feature: "Mode hors-ligne PWA",  values: ["✗", "✗", "✓"] },
              { feature: "Export PDF progression", values: ["✗", "✗", "✓"] },
              { feature: "Support",              values: ["Email", "Email", "Prioritaire"] },
            ].map((row, idx) => (
              <div key={row.feature} className={`grid grid-cols-4 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <div className="p-4 border-b border-slate-200 text-sm text-slate-700 font-medium">{row.feature}</div>
                {row.values.map((val, i) => (
                  <div key={i} className={`p-4 border-b border-slate-200 text-center text-sm font-semibold ${
                    val === "✗" ? "text-slate-300" :
                    val === "✓" ? "text-emerald-600" :
                    i === 1 ? "text-[#1d4ed8]" : "text-slate-800"
                  } ${i === 1 ? "bg-[#eff6ff]" : ""}`}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Puis-je annuler mon abonnement à tout moment ?", r: "Oui, sans engagement. Tu peux annuler depuis ton espace compte à tout moment. Tu conserves l'accès jusqu'à la fin de la période payée." },
              { q: "Y a-t-il une période d'essai gratuite ?", r: "Le plan Gratuit est disponible sans limite de temps. Tu peux tester les cours, quiz et fonctionnalités de base avant de passer à un plan payant." },
              { q: "Comment fonctionne le paiement annuel ?", r: "En choisissant le paiement annuel, tu paies en une fois pour 12 mois et économises 20% par rapport au tarif mensuel. Le renouvellement est automatique sauf annulation." },
              { q: "Le contenu est-il vraiment aligné sur le programme ARES officiel ?", r: "Oui, tout le contenu de LAUREA est conçu spécifiquement pour le concours ARES belge. Les 7 matières, les types de questions et le barème correspondent exactement au format officiel." },
              { q: "Qu'est-ce que le Concours Trimestriel ?", r: "4 fois par an, LAUREA organise un examen blanc en conditions réelles sur une fenêtre de 48h. Chaque participant reçoit son classement général et par matière, ainsi qu'un certificat PDF." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-200 hover:border-[#3b82f6]/40 rounded-2xl p-6 shadow-sm transition">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f9ff] border-2 border-[#bfdbfe] rounded-3xl p-12 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">Prêt à commencer ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto font-medium">Rejoins +200 étudiants qui préparent le concours ARES 2026 avec LAUREA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-[#3b82f6]/30">Commencer gratuitement</a>
            <a href="/connexion" className="bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-[#3b82f6] text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm">J'ai déjà un compte</a>
          </div>
          <p className="text-xs text-slate-500 mt-4 font-medium">Sans carte bancaire · Accès immédiat · Annulable à tout moment</p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-200 px-8 py-10 bg-white mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex gap-6">
            {[
              { label: "Fonctionnalités", href: "/fonctionnalites" },
              { label: "Matières", href: "/matieres" },
              { label: "Cours", href: "/cours" },
              { label: "Concours", href: "/concours" },
              { label: "Tarifs", href: "/tarifs" },
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