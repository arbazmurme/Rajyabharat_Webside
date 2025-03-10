"use client";
import SliderNewsComp from "./SliderNews";
import BrackingNews from "./BrackingNews";
import LatestNews from "./LatestNews";
import DistrictNews from "./DistrictNews";
import { useSelector } from "react-redux";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
export default function NewsLayout() {
  const { groupedNews } = useSelector((state) => state.news);
  const { language } = useLanguage();
  const { allCategorys } = useSelector((state) => state.category);

  return (
    <div className="p-2 md:p-4">
      {/* Breaking News */}
      <BrackingNews allCategorys={allCategorys} />

      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Left Column: Top Stories */}
        <SliderNewsComp allCategorys={allCategorys} />

        {/* Center Column: Latest News */}
        <LatestNews allCategorys={allCategorys} />

        {/* Right Column: District News */}
        <DistrictNews allCategorys={allCategorys} />

        {Object.keys(groupedNews).map((categoryId) => {
          const category = allCategorys.find((cat) => cat._id === categoryId);
          const newsCategoryNameInEnglish = category
            ? category.nameInEnglish
            : "Unknown";
          const newsCategoryNameInTelugu = category
            ? category.nameInTelugu
            : "Unknown";
          const slugUrl = category ? category.slugUrl : "unknown";

          return (
            <div key={categoryId} className="rounded-sm">
              <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
                <span >
                  {language === "en"
                    ? newsCategoryNameInTelugu
                    : newsCategoryNameInEnglish}
                </span>
              </h2>
              <div className="relative mt-1">
                <img
                  src={groupedNews[categoryId][0].thumbnail}
                  alt={groupedNews[categoryId][0].newsTitleInEnglish}
                  className="w-full h-52 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
                  <p>
                    {language === "en"
                      ? groupedNews[categoryId][0].newsTitleInTelugu
                      : groupedNews[categoryId][0].newsTitleInEnglish}
                  </p>
                </div>
              </div>
              <ul className="list-disc align-middle mt-4 space-y-3 pl-4">
                {groupedNews[categoryId].map((news, index) => (
                  <li key={index} className="border-b pb-2">
                    <Link
                      href={`/news/${slugUrl}/${news.slugUrl}`}
                      className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                    >
                      {language === "en"
                        ? news.newsTitleInTelugu
                        : news.newsTitleInEnglish}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
                More »
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
