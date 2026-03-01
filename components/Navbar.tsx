"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Matières",        href: "/matieres"        },
  { label: "Concours",        href: "/concours"        },
  { label: "Tarifs",          href: "/tarifs"          },
];

const APP_LINKS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Cours",     href: "/cours"     },
  { label: "Quiz",      href: "/quiz"      },
  { label: "Examens",   href: "/examens"   },
  { label: "Concours",  href: "/concours"  },
];

export default function Navbar({ type = "public" }: { type?: "public" | "app" }) {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();
  const links           = type === "app" ? APP_LINKS : NAV_LINKS;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 max-w-7xl mx-auto">

          {/* LOGO */}
          <a href="/" className="text-xl font-bold text-slate-900 flex-shrink-0">
            LAU<span className="text-[#3b82f6]">REA</span>
          </a>

          {/* LIENS DESKTOP */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(item => (
              <a key={item.label} href={item.href}
                className={`text-sm px-4 py-2 rounded-xl transition font-medium ${
                  pathname === item.href
                    ? "bg-[#dbeafe] text-[#1d4ed8] border-2 border-[#93c5fd]"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}>
                {item.label}
              </a>
            ))}
          </div>

          {/* DROITE DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            {type === "public" ? (
              <>
                <a href="/connexion" className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2 rounded-xl hover:bg-slate-100 transition">
                  Connexion
                </a>
                <a href="/inscription" className="text-sm font-bold bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-xl transition shadow-md">
                  S'inscrire
                </a>
              </>
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold shadow-sm">A</div>
            )}
          </div>

          {/* BOUTON HAMBURGER MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition"
            aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen border-t-2 border-slate-200" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1 bg-white">
            {links.map(item => (
              <a key={item.label} href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition ${
                  pathname === item.href
                    ? "bg-[#dbeafe] text-[#1d4ed8] border-2 border-[#93c5fd]"
                    : "text-slate-700 hover:bg-slate-100 border-2 border-transparent"
                }`}>
                {item.label}
              </a>
            ))}

            {/* Séparateur */}
            <div className="border-t-2 border-slate-100 my-3"></div>

            {type === "public" ? (
              <div className="flex flex-col gap-2">
                <a href="/connexion"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition">
                  Connexion
                </a>
                <a href="/inscription"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm shadow-md transition">
                  S'inscrire gratuitement
                </a>
              </div>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold">A</div>
                <span className="text-sm font-semibold text-slate-700">Mon compte</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* OVERLAY pour fermer le menu en cliquant dehors */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}