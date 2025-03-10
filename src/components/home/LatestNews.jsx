import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function LatestNews({ allCategorys }) {
  const { language } = useLanguage();
  const { latestNews } = useSelector((state) => state.news);

  return (
    <div className="  rounded-sm p-1">
      <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
        {language === "en" ? "తాజా వార్తలు" : "Latest News"}
      </h2>
      <ul className="list-disc align-middle mt-1 space-y-3 pl-4">
        {latestNews.map((item, index) => {
          const category = allCategorys.find(
            (cat) => cat._id === item.categoryId
          );
          const slugUrl = category ? category.slugUrl : "unknown";

          return (
            <li key={index} className="border-b pb-2">
              <Link
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                href={`/news/${slugUrl}/${item.slugUrl}`}
              >
                {language === "en"
                  ? item.newsTitleInTelugu
                  : item.newsTitleInEnglish}
              </Link>
            </li>
          );
        })}
      </ul>

      <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
        More »
      </button>
    </div>
  );
}

export default LatestNews;
