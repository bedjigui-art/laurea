"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type UserData = {
  nom: string;
  prenom: string;
  email: string;
  serie: "medecine" | "dentisterie";
};

const STORAGE_KEY = "laurea_user";

export function useAuth(requireAuth = false) {
  const [user, setUser]       = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router                = useRouter();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setUser(JSON.parse(saved));
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && requireAuth && !user) {
      router.push("/connexion");
    }
  }, [loading, user, requireAuth, router]);

  const login = (data: UserData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    router.push("/");
  };

  return { user, loading, login, logout };
}