export default function Concours() {
  const classement = [
    { rang: 1, nom: "Sophie M.", ville: "Bruxelles", score: 18.5, math: 19, chimie: 18, bio: 19, physique: 17, comprehension: 18, logique: 19, sensibilite: 20, badge: "🥇" },
    { rang: 2, nom: "Thomas K.", ville: "Liège", score: 18.2, math: 18, chimie: 19, bio: 17, physique: 18, comprehension: 19, logique: 18, sensibilite: 18, badge: "🥈" },
    { rang: 3, nom: "Camille D.", ville: "Gand", score: 17.9, math: 17, chimie: 18, bio: 18, physique: 17, comprehension: 18, logique: 17, sensibilite: 20, badge: "🥉" },
    { rang: 4, nom: "Ahmed B.", ville: "Namur", score: 17.4, math: 16, chimie: 17, bio: 18, physique: 16, comprehension: 18, logique: 19, sensibilite: 18, badge: "" },
    { rang: 5, nom: "Laura V.", ville: "Mons", score: 17.1, math: 18, chimie: 16, bio: 17, physique: 17, comprehension: 17, logique: 17, sensibilite: 18, badge: "" },
    { rang: 47, nom: "Toi", ville: "—", score: 14.5, math: 16, chimie: 12, bio: 17, physique: 9, comprehension: 15, logique: 14, sensibilite: 18, badge: "⭐", highlight: true },
  ];

  const sessions = [
    { num: 1, mois: "Octobre", annee: "2026", statut: "upcoming", date_ouverture: "Vendredi 3 oct. à 18h00", date_cloture: "Dimanche 5 oct. à 18h00", inscrits: 312, description: "Première session de l'année académique 2026-2027. Idéale pour évaluer ton niveau de départ.", color: "blue" },
    { num: 2, mois: "Janvier", annee: "2027", statut: "upcoming", date_ouverture: "Vendredi 9 jan. à 18h00", date_cloture: "Dimanche 11 jan. à 18h00", inscrits: 0, description: "Session de mi-parcours. Mesure ta progression depuis octobre.", color: "purple" },
    { num: 3, mois: "Mars", annee: "2027", statut: "upcoming", date_ouverture: "Vendredi 6 mars à 18h00", date_cloture: "Dimanche 8 mars à 18h00", inscrits: 0, description: "Session pré-finale. Le moment critique pour identifier tes dernières lacunes.", color: "orange" },
    { num: 4, mois: "Juin", annee: "2027", statut: "upcoming", date_ouverture: "Vendredi 5 juin à 18h00", date_cloture: "Dimanche 7 juin à 18h00", inscrits: 0, description: "Session finale avant le vrai concours. Simule les conditions exactes du jour J.", color: "green" },
  ];

  const etapes = [
    { num: "01", titre: "Inscription au concours", desc: "Clique sur 'S'inscrire' dans la session de ton choix. L'inscription ferme 48h avant l'ouverture de la fenêtre.", icon: "📝" },
    { num: "02", titre: "Préparation", desc: "Tu reçois un email de confirmation avec toutes les informations. Prépare-toi comme pour le vrai concours.", icon: "📚" },
    { num: "03", titre: "Fenêtre de 48h", desc: "Le vendredi soir, la fenêtre s'ouvre. Tu peux démarrer l'examen quand tu veux dans ces 48h.", icon: "⏱" },
    { num: "04", titre: "Examen de 4h", desc: "Une fois démarré, tu as exactement 4h. Le timer est lancé. Pas de pause possible, comme le vrai concours.", icon: "🎯" },
    { num: "05", titre: "Résultats & Certificat", desc: "Dès la fermeture de la fenêtre, le classement est publié. Tu reçois ton rang, ta note et ton certificat PDF.", icon: "🏆" },
  ];

  const sessionColors: Record<string, { card: string; border: string; text: string; btn: string }> = {
    blue:   { card: "bg-[#dbeafe]", border: "border-[#93c5fd]", text: "text-[#1d4ed8]", btn: "bg-[#3b82f6] hover:bg-[#2563eb] shadow-[#3b82f6]/30" },
    purple: { card: "bg-purple-50",  border: "border-purple-300", text: "text-purple-700", btn: "bg-purple-500 hover:bg-purple-400 shadow-purple-500/30" },
    orange: { card: "bg-orange-50",  border: "border-orange-300", text: "text-orange-600", btn: "bg-orange-500 hover:bg-orange-400 shadow-orange-500/30" },
    green:  { card: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700", btn: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30" },
  };

  return (
    <main className="min-h-screen text-slate-900 font-sans" style={{ backgroundColor: "#f1f4f8" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b-2 border-slate-300 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/fonctionnalites" className="text-sm text-slate-500 hover:text-slate-900 transition">Fonctionnalités</a>
          <a href="/matieres" className="text-sm text-slate-500 hover:text-slate-900 transition">Matières</a>
          <a href="/concours" className="text-sm text-slate-900 font-medium transition">Concours</a>
          <a href="/tarifs" className="text-sm text-slate-500 hover:text-slate-900 transition">Tarifs</a>
        </div>
        <div className="flex gap-3">
          <a href="/connexion" className="text-sm text-slate-600 hover:text-slate-900 transition px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-slate-500 bg-white">Connexion</a>
          <a href="/inscription" className="text-sm bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-[#3b82f6]/30">Inscription gratuite</a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-50 border-2 border-orange-300 text-orange-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block"></span>
            Fonctionnalité exclusive LAUREA
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
            Le Concours Trimestriel<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#3b82f6]">qui change tout</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">4 fois par an, affronte tous les candidats belges au concours ARES dans un examen blanc officiel de 4h. Découvre ton vrai classement avant le jour J.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="/inscription" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-orange-500/30">S'inscrire à la Session 1</a>
            <a href="#comment-ca-marche" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm">Comment ça marche ?</a>
          </div>
          <div className="flex items-center justify-center gap-8">
            {[
              { val: "482", label: "participants session pilote" },
              { val: "4h", label: "durée de l'examen" },
              { val: "48h", label: "fenêtre de passage" },
              { val: "4×/an", label: "sessions organisées" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-extrabold text-orange-500">{s.val}</div>
                <div className="text-xs text-slate-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SESSIONS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Sessions 2026-2027</h2>
          <p className="text-slate-600 text-center mb-10">4 sessions par an calées sur le calendrier académique belge</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sessions.map((session, idx) => {
              const sc = sessionColors[session.color];
              return (
                <div key={session.num} className={`border-2 ${sc.border} ${sc.card} rounded-2xl p-6 shadow-sm`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${sc.text}`}>Session {session.num}</div>
                      <div className="text-2xl font-extrabold text-slate-900">{session.mois} {session.annee}</div>
                    </div>
                    <div className="bg-white border-2 border-slate-300 text-xs text-slate-600 px-3 py-1.5 rounded-full font-semibold shadow-sm">
                      {idx === 0 ? `${session.inscrits} inscrits` : "Bientôt"}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm mb-5 leading-relaxed">{session.description}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="text-emerald-600">▶</span>
                      <span>Ouverture : {session.date_ouverture}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="text-red-500">■</span>
                      <span>Clôture : {session.date_cloture}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span>⏱</span>
                      <span>Durée : 4h · Format officiel ARES</span>
                    </div>
                  </div>
                  <a href="/inscription" className={`block text-center text-white font-bold px-5 py-3 rounded-xl transition shadow-lg text-sm ${sc.btn}`}>
                    {idx === 0 ? "S'inscrire maintenant" : "Être notifié"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMMENT CA MARCHE */}
        <div id="comment-ca-marche" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Comment ça marche ?</h2>
          <p className="text-slate-600 text-center mb-12">5 étapes simples du début à la fin</p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block"></div>
            <div className="space-y-6">
              {etapes.map((etape) => (
                <div key={etape.num} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#dbeafe] border-2 border-[#93c5fd] flex flex-col items-center justify-center z-10 relative shadow-sm">
                      <span className="text-xl">{etape.icon}</span>
                      <span className="text-xs text-[#1d4ed8] font-bold">{etape.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white border-2 border-slate-300 rounded-2xl p-5 hover:border-[#93c5fd] transition shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">{etape.titre}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{etape.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CLASSEMENT DEMO */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Le classement en détail</h2>
          <p className="text-slate-600 text-center mb-10">Aperçu du classement de la session pilote — 482 participants</p>
          <div className="bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-md">

            {/* HEADER TABLE */}
            <div className="grid grid-cols-10 gap-2 px-5 py-3 bg-slate-100 border-b-2 border-slate-300 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <div className="col-span-1">Rang</div>
              <div className="col-span-2">Candidat</div>
              <div className="col-span-1 text-center">Global</div>
              <div className="col-span-1 text-center">Math</div>
              <div className="col-span-1 text-center">Chimie</div>
              <div className="col-span-1 text-center">Bio</div>
              <div className="col-span-1 text-center">Phys</div>
              <div className="col-span-1 text-center">Compr.</div>
              <div className="col-span-1 text-center">%ile</div>
            </div>

            {classement.map((c, idx) => {
              const isHighlight = "highlight" in c && c.highlight;
              const isSeparator = idx === 5;
              return (
                <div key={c.rang}>
                  {isSeparator && (
                    <div className="flex items-center gap-3 px-5 py-2 border-y border-slate-200 bg-slate-50">
                      <div className="flex-1 h-px border-t-2 border-dashed border-slate-300"></div>
                      <span className="text-xs text-slate-500 font-medium">· · · 43 candidats · · ·</span>
                      <div className="flex-1 h-px border-t-2 border-dashed border-slate-300"></div>
                    </div>
                  )}
                  <div className={`grid grid-cols-10 gap-2 px-5 py-3.5 border-b border-slate-200 items-center ${isHighlight ? "bg-[#dbeafe] border-[#93c5fd]" : idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <div className="col-span-1 flex items-center gap-2">
                      <span className={`text-sm font-bold ${isHighlight ? "text-[#1d4ed8]" : "text-slate-500"}`}>{c.rang}</span>
                      {c.badge && <span className="text-base">{c.badge}</span>}
                    </div>
                    <div className="col-span-2">
                      <div className={`text-sm font-semibold ${isHighlight ? "text-[#1d4ed8]" : "text-slate-900"}`}>{c.nom}</div>
                      <div className="text-xs text-slate-500">{c.ville}</div>
                    </div>
                    <div className="col-span-1 text-center">
                      <span className={`text-sm font-extrabold ${isHighlight ? "text-[#1d4ed8]" : "text-slate-900"}`}>{c.score}</span>
                    </div>
                    {[c.math, c.chimie, c.bio, c.physique, c.comprehension].map((score, i) => (
                      <div key={i} className="col-span-1 text-center">
                        <span className={`text-xs font-semibold ${score >= 16 ? "text-emerald-700" : score >= 12 ? "text-amber-600" : "text-red-600"}`}>{score}/20</span>
                      </div>
                    ))}
                    <div className="col-span-1 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${isHighlight ? "bg-[#dbeafe] border-[#93c5fd] text-[#1d4ed8]" : c.rang <= 3 ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-100 border-slate-300 text-slate-600"}`}>
                        {c.rang === 1 ? "Top 1%" : c.rang <= 3 ? "Top 1%" : c.rang <= 5 ? "Top 2%" : "Top 23%"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="px-5 py-3 text-center text-xs text-slate-600 bg-slate-50 border-t-2 border-slate-200 font-medium">
              Classement complet visible après inscription · 482 participants au total
            </div>
          </div>
        </div>

        {/* CERTIFICAT */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-amber-50 border-2 border-amber-300 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Certificat officiel</div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Un certificat PDF à partager</h2>
              <p className="text-slate-600 leading-relaxed mb-6">À la fin de chaque session, tu reçois un certificat PDF avec ton rang, ta note globale, ton score par matière et ton percentile parmi tous les participants.</p>
              <div className="space-y-3">
                {[
                  "Rang général parmi tous les participants",
                  "Note globale et note par matière sur 20",
                  "Percentile : Top X% des candidats",
                  "Comparaison avec la session précédente",
                  "Partage direct sur LinkedIn et Instagram",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-8 text-center shadow-md">
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-lg font-bold text-amber-600 mb-1">Certificat de participation</div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">Ahmed Bedjigui</div>
              <div className="text-sm text-slate-600 mb-5">Concours Trimestriel LAUREA · Session 1 · Octobre 2026</div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Rang", value: "47 / 482" },
                  { label: "Note globale", value: "14.5 / 20" },
                  { label: "Percentile", value: "Top 23%" },
                ].map((s) => (
                  <div key={s.label} className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3">
                    <div className="text-base font-extrabold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-600 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-slate-200 pt-4 text-xs text-slate-500 font-medium">
                Vérifié et certifié par LAUREA · laurea.be
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Dois-je être abonné pour participer au concours ?", r: "Le plan Standard inclut 1 concours par an. Le plan Premium inclut toutes les sessions. Le plan Gratuit ne donne pas accès au concours trimestriel." },
              { q: "Que se passe-t-il si je dépasse les 4h ?", r: "Le timer s'arrête automatiquement et ta copie est soumise telle quelle. Comme au vrai concours, impossible de continuer après la limite de temps." },
              { q: "Les questions sont-elles les mêmes pour tout le monde ?", r: "Oui, tous les participants reçoivent exactement le même examen. Pour garantir l'équité, les questions sont inédites et créées spécifiquement pour chaque session." },
              { q: "Puis-je voir les corrections après l'examen ?", r: "Oui, une correction détaillée est publiée 48h après la clôture de la fenêtre. Tu peux réviser chaque question et comprendre tes erreurs." },
              { q: "Comment est calculé le classement ?", r: "Le classement est basé sur la note totale (barème officiel ARES). En cas d'égalité, l'ordre d'arrivée de la soumission détermine le rang final." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-sm hover:border-slate-400 transition">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center border-2 border-orange-300 rounded-3xl p-16 shadow-md" style={{ background: "linear-gradient(135deg, #fff7ed 0%, #eff6ff 100%)" }}>
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Prêt à découvrir ton vrai niveau ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">La Session 1 d'Octobre 2026 approche. 312 étudiants sont déjà inscrits. Rejoins-les et découvre où tu en es vraiment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscription" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-orange-500/30">S'inscrire à la Session 1</a>
            <a href="/tarifs" className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition shadow-sm">Voir les tarifs</a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Inclus dans le plan Standard et Premium · Inscription ouverte jusqu'au 1er octobre</p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-300 px-8 py-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold text-slate-900">LAU<span className="text-[#3b82f6]">REA</span></a>
          <div className="flex gap-6">
            <a href="/matieres" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Matières</a>
            <a href="/cours" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Cours</a>
            <a href="/concours" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Concours</a>
            <a href="/tarifs" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Tarifs</a>
            <a href="/inscription" className="text-xs text-slate-500 hover:text-slate-900 transition font-medium">Inscription</a>
          </div>
          <p className="text-xs text-slate-500">© 2026 LAUREA · Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}