"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getNewsByCategory } from "@/redux/news/NewsSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function NewsDetails({ fetchnews, newsCategory }) {
  const isClient = typeof window !== "undefined";
  const dispatch = useDispatch();
  const { language = "en" } = useLanguage() || {};
  
  // Ensure Redux state is only accessed on client side
  const { allCategorys } = isClient ? useSelector((state) => state.category) : [];
  const { newsByCategory, latestNews } = isClient ? useSelector((state) => state.news) : { newsByCategory: [], latestNews: [] };
  
  const [filteredCategory, setFilteredCategory] = useState(null);
  
  useEffect(() => {
    setFilteredCategory(allCategorys.find((category) => category.slugUrl === newsCategory));
  }, [allCategorys, newsCategory]);
  
  const categoryId = filteredCategory ? filteredCategory._id : null;
  
  useEffect(() => {
    if (categoryId) {
      dispatch(getNewsByCategory({ categoryId }));
    }
  }, [dispatch, categoryId]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full sm:w-9/12 md:overflow-y-auto md:no-scrollbar">
        <div className="bg-white p-4">
          {fetchnews.news.map((item) => (
            <div key={item._id}>
              <h1 className="text-2xl font-bold text-gray-800">
                {language === "en" ? item.newsTitleInTelugu : item.newsTitleInEnglish}
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                By <span className="font-semibold">{item.reporterName}</span>, Webdesk | Updated: {moment(item.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="mt-4">
                <Image
                  src={item.slider[0] || item.thumbnail}
                  alt="News Image"
                  width={800}
                  height={400}
                  className="w-full rounded-lg shadow"
                />
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {language === "en" ? item.newsContentInTelugu : item.newsContentInEnglish}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-semibold mt-6">
            {language === "en" ? "సంబంధిత పోస్ట్" : "Related Posts"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {newsByCategory.map((post) => (
              <div key={post._id} className="flex flex-col">
                <Link href={`/news/${newsCategory}/${post.slugUrl}`}>
                  <Image
                    src={post.thumbnail}
                    alt={post.newsTitleInEnglish}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full h-40 object-cover"
                  />
                  <p className="mt-2 text-gray-800 text-sm font-medium">
                    {language === "en" ? post.newsTitleInTelugu : post.newsTitleInEnglish}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/12 border border-gray-300 md:sticky md:top-0 bg-white p-4">
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
  );
}
