"use client";

import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useDispatch } from "react-redux";
import { getCategory } from "@/redux/category/CategorySlice";
import { getNewsAdmin } from "@/redux/news/NewsSlice";
// import { fetchDistricts } from "@/redux/district/districtSlice";

const Mainlayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCategory());
      dispatch(getNewsAdmin());
      // dispatch(fetchDistricts());
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Mainlayout;
