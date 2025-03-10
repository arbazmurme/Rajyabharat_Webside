import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

function BrackingNews({ allCategorys }) {
  const { language } = useLanguage();
  const { brackingNewsAll } = useSelector((state) => state.news);

  const [news, setNews] = useState([]);

  // Update news state when brackingNewsAll changes
  useEffect(() => {
    if (brackingNewsAll && brackingNewsAll.length > 0) {
      setNews([...brackingNewsAll]);
    }
  }, [brackingNewsAll]);

  return (
    <div className="font-bold px- py-2 flex items-center overflow-hidden whitespace-nowrap">
      <span className="bg-yellow-400 text-black z-10 p-2">Breaking News:</span>

      <motion.div
        className="flex space-x-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {news.map((item, index) => {
          const category = allCategorys.find(cat => cat._id === item.categoryId);
          const slugUrl = category ? category.slugUrl : "unknown";

          return (
            <Link
              href={`/news/${slugUrl}/${item.slugUrl}`}
              key={index}
              className="inline-block mx-3 hover:underline text-blue-600"
            >
              {language === "en"
                ? item.newsTitleInTelugu
                : item.newsTitleInEnglish}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}

export default BrackingNews;
