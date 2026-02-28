export default function Lecon({ params }: { params: { matiere: string; chapitre: string } }) {
    const { matiere, chapitre } = params;
  
    const titres: Record<string, Record<string, string>> = {
      biologie: { "1": "La cellule : l'unité fonctionnelle du monde vivant", "2": "La génétique et l'hérédité", "3": "La diversité, l'évolution et l'adaptabilité", "4": "L'écologie" },
      chimie: { "1": "Notions de base et états de la matière", "2": "Structure de la matière", "3": "La réaction chimique : aspect qualitatif", "4": "La réaction chimique : aspect quantitatif", "5": "L'équilibre chimique" },
      physique: { "1": "Biomécanique", "2": "La statique et la gravitation universelle", "3": "Travail, énergie et puissance", "4": "Les ondes", "5": "Optique géométrique", "6": "Électromagnétisme" },
      mathematiques: { "1": "Algèbre", "2": "Géométrie", "3": "Trigonométrie", "4": "Analyse", "5": "Statistique" },
      raisonnement: { "1": "Analyse et intégration de données", "2": "Raisonnement logique et argumentation", "3": "Esprit de synthèse et conceptualisation" },
      ethique: { "1": "Habileté communicationnelle et aptitude au dialogue", "2": "Dimension sociétale et éthique des décisions", "3": "Empathie et compréhension de l'état émotionnel" },
    };
  
    const icons: Record<string, string> = { biologie: "🧬", chimie: "⚗️", physique: "⚡", mathematiques: "📐", raisonnement: "🧩", ethique: "💬" };
    const titre = titres[matiere]?.[chapitre] ?? "Chapitre introuvable";
    const icon = icons[matiere] ?? "📚";
  
    return (
      <div className="min-h-screen bg-white text-slate-900 font-sans">
  
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
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
                <a key={item.label} href={item.href} className={`text-sm px-4 py-2 rounded-xl transition ${"active" in item && item.active ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}>{item.label}</a>
              ))}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold">A</div>
        </nav>
  
        <div className="pt-20 px-6 pb-16 max-w-4xl mx-auto">
  
          {/* BREADCRUMB */}
          <div className="mt-6 mb-8 flex items-center gap-2 text-xs text-slate-500">
            <a href="/cours" className="hover:text-slate-900 transition">Cours</a>
            <span>/</span>
            <span className="capitalize">{matiere}</span>
            <span>/</span>
            <span className="text-slate-900">Chapitre {chapitre}</span>
          </div>
  
          {/* HEADER LECON */}
          <div className="bg-gradient-to-br from-[#eff6ff] to-white border border-[#bfdbfe] rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{icon}</span>
              <div>
                <div className="text-xs text-[#3b82f6] font-bold uppercase tracking-widest mb-1 capitalize">{matiere} · Chapitre {chapitre}</div>
                <h1 className="text-2xl font-extrabold text-slate-900">{titre}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-xl">⏱ 45 min de lecture</div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-xl">📝 20 questions de quiz</div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-xl">📄 Fiche mémo PDF</div>
            </div>
          </div>
  
          {/* CONTENU PLACEHOLDER */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <div className="w-8 h-8 rounded-xl bg-[#eff6ff] flex items-center justify-center text-sm font-bold text-[#3b82f6]">1</div>
              <h2 className="font-bold text-lg text-slate-900">Introduction</h2>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-slate-100 rounded-full w-full animate-pulse"></div>
              <div className="h-3 bg-slate-100 rounded-full w-5/6 animate-pulse"></div>
              <div className="h-3 bg-slate-100 rounded-full w-4/6 animate-pulse"></div>
              <div className="h-3 bg-slate-100 rounded-full w-full animate-pulse"></div>
              <div className="h-3 bg-slate-100 rounded-full w-3/6 animate-pulse"></div>
            </div>
            <div className="mt-6 bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-4">
              <div className="text-xs text-[#3b82f6] font-bold mb-2">💡 Contenu en cours de rédaction</div>
              <p className="text-slate-600 text-sm">Le contenu complet de ce chapitre sera disponible très prochainement. En attendant, tu peux t'entraîner avec les quiz disponibles.</p>
            </div>
          </div>
  
          {/* NAVIGATION */}
          <div className="flex items-center justify-between gap-4">
            <a href="/cours" className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium px-5 py-3 rounded-xl transition text-sm">
              ← Retour aux cours
            </a>
            <a href={`/quiz?matiere=${matiere}&chapitre=${chapitre}`} className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-5 py-3 rounded-xl transition shadow-lg shadow-[#3b82f6]/20 text-sm">
              ⚡ Faire le quiz de ce chapitre →
            </a>
          </div>
  
        </div>
      </div>
    );
  }