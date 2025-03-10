
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const ToggleLanguageComp = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-20 right-4 bg-black text-white border-yellow-500 border-2 rounded-full shadow-md p-2 z-50">
      <button
        onClick={toggleLanguage}
        className="text-lg font-semibold"
      >
        {language === "en" ? "Eng" : "Tel"}
      </button>
    </div>
  );
};

export default ToggleLanguageComp;
