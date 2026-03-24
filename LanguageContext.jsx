import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  fr: { nav: { login: "Connexion", register: "S'inscrire" } },
  nl: { nav: { login: "Inloggen", register: "Registreren" } },
  es: { nav: { login: "Iniciar sesión", register: "Registrarse" } },
  en: { nav: { login: "Login", register: "Sign up" } },
  de: { nav: { login: "Anmelden", register: "Registrieren" } }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("viteauto_language") || "fr");

  useEffect(() => {
    localStorage.setItem("viteauto_language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const parts = key.split(".");
    let value = translations[language];
    for (const p of parts) value = value?.[p];
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage: setLanguage, t, languages: ["fr","nl","es","en","de"] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export default LanguageContext;
