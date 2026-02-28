"use client";
import { useState } from "react";

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* LOGO + TITRE */}
        <div className="text-center mb-8">
          <a href="/" className="text-3xl font-extrabold tracking-tight text-slate-900">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>
          <h1 className="text-2xl font-bold mt-5 mb-2 text-slate-900">Bon retour ! 👋</h1>
          <p className="text-slate-500 text-sm">Connecte-toi pour continuer ta préparation</p>
        </div>

        {/* CARTE */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg shadow-slate-200/60">

          <div className="flex flex-col gap-5">

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
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
                <a href="#" className="text-xs text-[#3b82f6] font-semibold hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ton mot de passe"
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

            {/* SE SOUVENIR */}
            <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3">
              <input
                type="checkbox"
                id="remember"
                className="accent-[#3b82f6] w-4 h-4 cursor-pointer flex-shrink-0"
              />
              <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer font-medium">
                Se souvenir de moi
              </label>
            </div>

            {/* BOUTON CONNEXION */}
            <button
              type="submit"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-lg shadow-[#3b82f6]/30 text-sm tracking-wide"
            >
              Se connecter →
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

          {/* LIEN INSCRIPTION */}
          <p className="text-center text-slate-500 text-sm mt-6">
            Pas encore de compte ?{" "}
            <a href="/inscription" className="text-[#3b82f6] font-bold hover:underline">
              Créer un compte gratuit
            </a>
          </p>

        </div>

        {/* BADGE SÉCURITÉ */}
        <div className="mt-5 bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 flex items-center justify-center gap-3 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">🔒</span>
          </div>
          <p className="text-sm text-slate-600 font-medium">
            Connexion <span className="text-green-600 font-bold">sécurisée</span> · Données chiffrées · RGPD
          </p>
        </div>

        {/* RETOUR ACCUEIL */}
        <div className="text-center mt-5">
          <a href="/" className="text-xs text-slate-400 hover:text-[#3b82f6] font-medium transition">
            ← Retour à l'accueil
          </a>
        </div>

      </div>
    </main>
  );
}