"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import moment from "moment";
import RelatedPost from "./RelatedPost";
import { useSelector } from "react-redux";
import Link from "next/link";
import SideNews from "./SideNews";

export default function NewsDetailsClient({ fetchnews, newsCategory }) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full sm:w-9/12 md:overflow-y-auto md:no-scrollbar">
        <div className="bg-white p-4">
          {fetchnews.news.map((item) => (
            <div key={item._id}>
              <h1 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? item.newsTitleInTelugu
                  : item.newsTitleInEnglish}
              </h1>

              {/* Author Info */}
              <p className="text-sm text-gray-600 mt-2">
                By <span className="font-semibold">{item.reporterName}</span>,
                Webdesk | Updated:{" "}
                {moment(item.createdAt).format("MMM DD, YYYY")}
              </p>

              {/* Image Section */}
              <div className="mt-4">
                <Image
                  src={item.slider[0] || item.thumbnail}
                  alt="News Image"
                  width={800}
                  height={400}
                  className="w-full rounded-lg shadow"
                />
              </div>

              {/* Content */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                {language === "en"
                  ? item.newsContentInTelugu
                  : item.newsContentInEnglish}
              </p>
            </div>
          ))}
        </div>
        <RelatedPost newsCategory={newsCategory} />
      </div>
      <div className="w-full sm:w-3/12  border border-gray-300 md:sticky md:top-0">
        <SideNews newsCategory={newsCategory} />
      </div>
    </div>
  );
}
