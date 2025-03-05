"use client";

import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Mainlayout;
