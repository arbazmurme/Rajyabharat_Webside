"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDistrictNews } from "@/redux/news/NewsSlice";

function DistrictNews({ allCategorys }) {
  const { language } = useLanguage();
  const dispatch = useDispatch();

  const [selectedDistrict, setSelectedDistrict] = useState("Telangana");
  const { districtNews } = useSelector((state) => state.news);
  
  useEffect(() => {
    if (selectedDistrict) {
      dispatch(fetchDistrictNews(selectedDistrict));
    }
  }, [selectedDistrict, dispatch]);

  return (
    <div className="rounded-sm p-1">
      <div className="flex justify-between items-center">
        <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
          {language === "en" ? "జిల్లా వార్తలు" : "District News"}
        </h2>
        <select
          className="border px-3 py-1"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option>Telangana</option>
          <option>Andhrapradesh</option>
        </select>
      </div>

      <div className="mt-1 space-y-4">
        {districtNews.map((item, index) => {
          const category = allCategorys.find(
            (cat) => cat._id === item.categoryId
          );
          const slugUrl = category ? category.slugUrl : "unknown";

          return (
            <div
              key={index}
              className="flex space-x-4 items-center border-b pb-2"
            >
              <img
                src={item.thumbnail}
                alt={item.newsTitleInEnglish}
                className="w-20 h-16 object-cover rounded"
              />
              <Link
                href={`/news/${slugUrl}/${item.slugUrl}`}
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                {language === "en"
                  ? item.newsTitleInTelugu
                  : item.newsTitleInEnglish}
              </Link>
            </div>
          );
        })}
      </div>

      <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
        More »
      </button>
    </div>
  );
}

export default DistrictNews;
