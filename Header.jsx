import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useLanguage();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b border-[#5a1111]/45 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-6">
        <Link to="/" className="text-4xl font-black tracking-[-0.05em]">
          <span className="text-[#ff2020]">Vite</span>Auto
        </Link>

        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="rounded-2xl border border-[#7f2020] bg-[rgba(28,8,8,0.58)] px-7 py-3.5 text-xl text-white shadow-red-glow-soft transition-colors hover:bg-[rgba(40,10,10,0.68)]">
                {t("nav.login")}
              </Link>
              <Link to="/register" className="rounded-2xl border border-[#7f2020] bg-[rgba(88,10,10,0.62)] px-7 py-3.5 text-xl text-white shadow-red-glow-soft transition-colors hover:bg-[rgba(112,12,12,0.72)]">
                {t("nav.register")}
              </Link>
            </>
          ) : (
            <button onClick={logout} className="rounded-2xl border border-[#7f2020] bg-[rgba(88,10,10,0.62)] px-7 py-3.5 text-xl text-white shadow-red-glow-soft">
              Déconnexion
            </button>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-[#7e1d1d]/35" />
    </header>
  );
}
