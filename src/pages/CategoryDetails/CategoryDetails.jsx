"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getNewsByCategory } from "@/redux/news/NewsSlice";
import moment from "moment";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNews from "../NewsDetails/SideNews";
import Link from "next/link";

export default function CategoryDetails({ newsCategory }) {
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

  if (!newsByCategory || newsByCategory.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <h1 className="text-2xl font-bold text-red-900 -800">
          No news has been added for{" "}
          <span className="font-semibold text-blue-500"> {newsCategory} </span>{" "}
          yet. Stay tuned for updates!
        </h1>
      </div>
    );
  }

  const latestNews = [
    {
      title: "Women's Day celebrated in Pebbere",
      img: "/test1.jpg",
    },
    {
      title:
        "Discrimination against women still continues.. Star heroine's sensational comments reveal the real truth",
      img: "/test1.jpg",
    },
    {
      title:
        "The hunger strike was called off with the minister's assurance.. What happened so far..?",
      img: "/test1.jpg",
    },
    {
      title: "'Minister Lokesh was moved by the video'..",
      img: "/test1.jpg",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold mb-6">
            {newsCategory.toUpperCase()}
          </h1>
          {newsByCategory.map((news, index) => (
            <Link href={`/news/${newsCategory}/${news.slugUrl}`} key={index}>
              <div key={index} className="flex gap-4 border-b pb-4">
                <Image
                  src={news.thumbnail} // Use 'thumbnail' from API data
                  alt={news.newsTitleInEnglish} // Use 'newsTitleInEnglish' from API data
                  width={120}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {" "}
                    {language === "en"
                      ? news.newsTitleInTelugu
                      : news.newsTitleInEnglish}
                  </h2>

                  {/* {language === "en" ? news.nameInTelugu : tag.nameInEnglish} */}
                  <p className="text-sm text-gray-600">
                    by {news.reporterName} |{" "}
                    {moment(news.createdAt).format("MMM DD, YYYY")}{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <SideNews newsCategory={newsCategory} />
        </div>
      </div>
    </div>
  );
}
