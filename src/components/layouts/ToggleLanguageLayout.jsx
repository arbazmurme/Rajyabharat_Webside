"use client";

import React from "react";
import ToggleLanguageComp from "./toggleLanguage";

const ToggleLanguageLayout = ({ children }) => {
  return (
    <>
      <ToggleLanguageComp />
      {children}
    </>
  );
};

export default ToggleLanguageLayout;
