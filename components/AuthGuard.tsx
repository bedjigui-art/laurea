"use client";
import { useAuth } from "@/hooks/useAuth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth(true); // true = redirection auto si non connecté

  if (loading) return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white border-2 border-slate-300 rounded-2xl p-10 shadow-md text-center">
        <div className="text-4xl mb-4 animate-pulse">🔒</div>
        <p className="text-slate-600 font-medium">Vérification de la session...</p>
      </div>
    </div>
  );

  if (!user) return null; // La redirection est gérée par useAuth

  return <>{children}</>;
}