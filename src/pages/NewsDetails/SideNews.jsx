import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function SideNews( { newsCategory } ) {
  const { language } = useLanguage();
  const { latestNews } = useSelector((state) => state.news);
  return (

        <div className="bg-white p-4">
          {/* Latest News Header */}
          <h2 className="bg-blue-700 text-white text-lg font-bold py-2 px-3">
            {language === "en" ? "తాజా వార్తలు" : "Latest News"}
          </h2>

          {/* News List */}
          <div className="mt-2 divide-y divide-gray-300">
            {latestNews.map((news, index) => (
              <Link key={index} href={`/news/${newsCategory}/${news.slugUrl}`}>
                <div  className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.thumbnail}
                    alt={news.newsTitleInEnglish}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {language === "en"
                      ? news.newsTitleInTelugu
                      : news.newsTitleInEnglish}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
  );
}

export default SideNews;
