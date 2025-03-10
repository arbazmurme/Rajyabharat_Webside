"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getNewsByCategory } from "@/redux/news/NewsSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function RelatedPost({ newsCategory }) {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const { allCategorys } = useSelector((state) => state.category);
  const filteredNews = allCategorys.filter(
    (news) => news.slugUrl === newsCategory
  );
  const categoryId = filteredNews.map((item) => item._id).join(",");
  useEffect(() => {
    if (categoryId) {
      dispatch(getNewsByCategory({ categoryId }));
    }
  }, [dispatch, categoryId]);
  const { newsByCategory } = useSelector((state) => state.news);

  return (
    <div className="bg-white p-4 ">
      {/* Tags Section */}
      <div className="flex gap-2 flex-wrap">
        {/* <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded">
          News Category
        </span> */}
        {allCategorys.slice(0, 4).map((tag, index) => (
          <Link
            href={`/news/${tag.slugUrl}`}
            key={index}
            className="border border-gray-400 text-gray-800 text-sm font-medium px-3 py-1 rounded cursor-pointer hover:bg-gray-200"
          >
            {language === "en" ? tag.nameInTelugu : tag.nameInEnglish}
          </Link>
        ))}
      </div>
      {/* Related Posts Section */}
      <h2 className="text-xl font-semibold mt-6">
        {language === "en" ? "సంబంధిత పోస్ట్" : "Related Posts"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {newsByCategory.map((post) => (
          <div key={post._id} className="flex flex-col">
            <Link href={`/news/${newsCategory}/${post.slugUrl}`}>
              <Image
                src={post.thumbnail} // Use 'thumbnail' from API data
                alt={post.newsTitleInEnglish} // Use 'newsTitleInEnglish' from API data
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
              <p className="mt-2 text-gray-800 text-sm font-medium">
                {language === "en"
                  ? post.newsTitleInTelugu
                  : post.newsTitleInEnglish}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPost;
