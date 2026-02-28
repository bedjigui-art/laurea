"use client";
import { useState } from "react";

export default function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const [serie, setSerie] = useState<"medecine" | "dentisterie" | null>(null);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* LOGO + TITRE */}
        <div className="text-center mb-8">
          <a href="/" className="text-3xl font-extrabold tracking-tight text-slate-900">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>
          <h1 className="text-2xl font-bold mt-5 mb-2 text-slate-900">Créer un compte gratuit</h1>
          <p className="text-slate-500 text-sm">Commence ta préparation au concours ARES dès aujourd'hui</p>
        </div>

        {/* CARTE PRINCIPALE */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg shadow-slate-200/60">
          <div className="flex flex-col gap-5">

            {/* NOM + PRÉNOM */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Nom</label>
                <input
                  type="text"
                  placeholder="Ton nom"
                  className="bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#3b82f6] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Prénom</label>
                <input
                  type="text"
                  placeholder="Ton prénom"
                  className="bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#3b82f6] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition text-sm"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                placeholder="ton-email@gmail.com"
                className="bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#3b82f6] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition text-sm"
              />
            </div>

            {/* MOT DE PASSE */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 caractères"
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#3b82f6] rounded-xl px-4 py-3 pr-12 text-slate-900 placeholder-slate-400 focus:outline-none transition text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition text-lg"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* SÉRIE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Série choisie</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "medecine", emoji: "🩺", label: "Médecine", sub: "ARES Médecine" },
                  { value: "dentisterie", emoji: "🦷", label: "Dentisterie", sub: "ARES Dentisterie" },
                ].map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setSerie(s.value as "medecine" | "dentisterie")}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border-2 transition text-left ${
                      serie === s.value
                        ? "border-[#3b82f6] bg-[#3b82f6]/8 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-xl">{s.emoji}</span>
                    <div>
                      <div className={`text-sm font-bold ${serie === s.value ? "text-[#3b82f6]" : "text-slate-800"}`}>{s.label}</div>
                      <div className="text-xs text-slate-500">{s.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RGPD */}
            <div className="flex items-start gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <input
                type="checkbox"
                id="rgpd"
                className="mt-0.5 accent-[#3b82f6] w-4 h-4 flex-shrink-0 cursor-pointer"
              />
              <label htmlFor="rgpd" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                J'accepte que mes données soient traitées pour personnaliser mon parcours d'apprentissage, conformément au{" "}
                <a href="#" className="text-[#3b82f6] font-semibold hover:underline">Règlement RGPD</a>.
                <span className="text-red-500 ml-1 font-bold">*</span>
              </label>
            </div>

            {/* BOUTON SUBMIT */}
            <button
              type="submit"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm tracking-wide"
            >
              Créer mon compte gratuitement →
            </button>

          </div>

          {/* SÉPARATEUR */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-400 text-xs font-medium px-2">ou</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition flex items-center justify-center gap-3 text-sm shadow-sm">
            <span className="text-lg">🔑</span>
            Continuer avec Google
          </button>

          {/* LIEN CONNEXION */}
          <p className="text-center text-slate-500 text-sm mt-6">
            Déjà un compte ?{" "}
            <a href="/connexion" className="text-[#3b82f6] font-bold hover:underline">Se connecter</a>
          </p>
        </div>

        {/* SOCIAL PROOF */}
        <div className="mt-5 bg-white border-2 border-[#bfdbfe] rounded-2xl px-5 py-4 flex items-center justify-center gap-4 shadow-sm">
          <div className="flex -space-x-2">
            {["A", "M", "S", "L", "K"].map((letter) => (
              <div
                key={letter}
                className="w-8 h-8 rounded-full bg-[#3b82f6] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 font-medium">
            Déjà <span className="text-[#3b82f6] font-extrabold">+200 étudiants</span> inscrits pour le concours 2026
          </p>
        </div>

        {/* SÉCURITÉ */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-slate-400 text-sm">🔒</span>
          <p className="text-center text-slate-500 text-xs font-medium">
            Tes données sont protégées et ne seront jamais vendues
          </p>
        </div>

      </div>
    </main>
  );
}