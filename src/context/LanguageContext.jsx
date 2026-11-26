"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const cookieLang = getCookie("portoLang");
    const storedLang = cookieLang || localStorage.getItem("portoLang");
    if (storedLang === "id" || storedLang === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    document.cookie = `portoLang=${encodeURIComponent(lang)}; path=/; max-age=31536000; SameSite=Lax`;
    try {
      localStorage.setItem("portoLang", lang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
