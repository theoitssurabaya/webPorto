"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default 'en'

  // Persist language in localStorage if available
  useEffect(() => {
    const storedLang = localStorage.getItem('portoLang');
    if (storedLang) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portoLang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
