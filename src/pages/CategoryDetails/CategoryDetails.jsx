"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getNewsByCategory } from "@/redux/news/NewsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function CategoryNews({ newsCategory }) {
  const isClient = typeof window !== "undefined";
  const { allCategorys } = isClient ? useSelector((state) => state.category) : [];
  const { newsByCategory, latestNews } = isClient ? useSelector((state) => state.news) : { newsByCategory: [], latestNews: [] };
  const [filteredNews, setFilteredNews] = useState([]);
  const dispatch = useDispatch();
  const { language } = useLanguage();

  useEffect(() => {
    setFilteredNews(
      allCategorys.filter((news) => news.slugUrl === newsCategory)
    );
  }, [allCategorys, newsCategory]);

  const categoryId = filteredNews.map((item) => item._id).join(",");

  useEffect(() => {
    if (typeof window !== "undefined" && categoryId) {
      dispatch(getNewsByCategory({ categoryId }));
    }
  }, [dispatch, categoryId]);

  if (!newsByCategory || newsByCategory.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <h1 className="text-2xl font-bold text-red-900">
          No news has been added for <span className="text-blue-500">{newsCategory}</span> yet. Stay tuned!
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold mb-6">{newsCategory.toUpperCase()}</h1>
          {newsByCategory.map((news, index) => (
            <Link href={`/news/${newsCategory}/${news.slugUrl}`} key={index}>
              <div className="flex gap-4 border-b pb-4">
                <Image
                  src={news.thumbnail}
                  alt={news.newsTitleInEnglish}
                  width={120}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {language === "en" ? news.newsTitleInTelugu : news.newsTitleInEnglish}
                  </h2>
                  <p className="text-sm text-gray-600">
                    by {news.reporterName} | {moment(news.createdAt).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Side News Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="bg-blue-700 text-white text-lg font-bold py-2 px-3">
            {language === "en" ? "తాజా వార్తలు" : "Latest News"}
          </h2>
          <div className="mt-2 divide-y divide-gray-300">
            {latestNews.map((news, index) => (
              <Link key={index} href={`/news/${newsCategory}/${news.slugUrl}`}>
                <div className="flex gap-3 py-3">
                  <Image
                    src={news.thumbnail}
                    alt={news.newsTitleInEnglish}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  <p className="text-sm text-gray-800 font-medium">
                    {language === "en" ? news.newsTitleInTelugu : news.newsTitleInEnglish}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
