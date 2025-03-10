"use client";
import React, { createContext, useContext, useState } from "react";

// Create Context
const LanguageContext = createContext();

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "te" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy use
export const useLanguage = () => useContext(LanguageContext);
