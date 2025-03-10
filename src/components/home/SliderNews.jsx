"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

function SliderNewsComp({ allCategorys }) {
  const { sliderNews } = useSelector((state) => state.news);
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="rounded-sm p-1">
      <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
        { language === "en" ? "టాప్ స్టోరీస్" : "Top Stories"}
      </h2>

      {/* Swiper Slider */}
      <div className="relative w-full max-w-[21rem] md:max-w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 0);
          }}
          className="w-full"
        >
          {sliderNews.map((slide, index) => {
            const category = allCategorys.find(
              (cat) => cat._id === slide.categoryId
            );
            const slugUrl = category ? category.slugUrl : "unknown";

            return (
              <SwiperSlide key={index}>
                <Link
                  className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  href={`/news/${slugUrl}/${slide.slugUrl}`}
                >
                  <div className="relative mt-1 cursor-pointer">
                    <img
                      src={slide.thumbnail}
                      alt="Top story"
                      className="w-full max-w-[600px] mx-auto h-52 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-end">
                      <p className="bg-gradient-to-t from-black/80 to-transparent text-white px-4 pb-4 pt-12 rounded">
                        {language === "en"
                          ? slide.newsTitleInTelugu
                              .split(" ")
                              .splice(0, 15)
                              .join(" ")
                          : slide.newsTitleInEnglish
                              .split(" ")
                              .splice(0, 15)
                              .join(" ")}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* News List */}
      <ul className="list-disc align-middle mt-1 space-y-2 pl-4">
        {sliderNews.map((slide, index) => {
          const category = allCategorys.find(
            (cat) => cat._id === slide.categoryId
          );
          const slugUrl = category ? category.slugUrl : "unknown";
          return (
            <li key={index}>
              <Link
                className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                href={`/news/${slugUrl}/${slide.slugUrl}`}
              >
                {language === "en"
                  ? slide.newsTitleInTelugu
                  : slide.newsTitleInEnglish}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* More Button */}
      <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
        More »
      </button>
    </div>
  );
}

export default SliderNewsComp;
