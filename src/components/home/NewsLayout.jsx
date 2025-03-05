"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function NewsLayout() {
  const latestNews = [
    "Rahul, who won the semi-final match, is worried about his place in the team.",
    "AP Assembly: Violating the law is a habit for Jagan.. Nara Lokesh's hot comments in the Assembly",
    "Examination center as a barrier for drunkards..",
    "Man dies after going fishing in pond",
    "Gold Price: The price of gold will soon cross one lakh mark.. Is it profitable to buy now?",
    "Burglars are on the rise.. Locked houses are their target..",
    "AAI: Airports Authority of India Recruitment Notification Released",
  ];
  const districtNews = [
    {
      title: "Examination center as a barrier for drunkards..",
      img: "./test1.jpg",
    },
    { title: "Man dies after going fishing in pond", img: "/test2.jpg" },
    {
      title: "Burglars are on the rise.. Locked houses are their target..",
      img: "/test3.jpg",
    },
    { title: "Singer Kalpana's health condition stable..", img: "/test4.jpg" },
    { title: "Inter exams begin peacefully..", img: "./test1.jpg" },
  ];
  const newsTitles = [
    "Stock markets hit record highs!",
    "New AI breakthrough in healthcare!",
    "Massive storm approaching the east coast!",
    "Tech giants announce major layoffs!",
    "Sports: Local team wins championship!",
  ];
  const slides = [
    {
      img: "/test1.jpg",
      title:
        "Phone Tapping Case: Key turning point in phone tapping case.. Red Corner Notices reach Interpol",
    },
    {
      img: "/test2.jpg",
      title:
        "New AI breakthrough in healthcare.. Experts say it will revolutionize treatments!",
    },
    {
      img: "/test3.jpg",
      title: "Tech giants announce major layoffs amid economic slowdown.",
    },
  ];
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [news, setNews] = useState(newsTitles);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setNews((prev) => [...prev, ...prev]);
  }, []);

  return (
    <div className="animate-fade-in p-2 md:p-4">
      {/* Breaking News */}
      <div className="font-bold px- py-2 flex items-center overflow-hidden whitespace-nowrap">
        <span className="bg-yellow-400 text-black z-10 p-2">
          Breaking News:
        </span>
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {news.map((item, index) => (
            <span key={index} className="inline-block">
              {item} •
            </span>
          ))}
        </motion.div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Top Stories */}
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
            Top stories
          </h2>
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onInit={(swiper) => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
              className="w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mt-4">
                    <img
                      src={slide.img}
                      alt="Top story"
                      className="w-full h-52 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-end">
                      <p className="bg-gradient-to-t from-black/80 to-transparent text-white px-4 pb-4 pt-12 rounded">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left Navigation Button */}
            <button
              ref={prevRef}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Right Navigation Button */}
            <button
              ref={nextRef}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Movie Section */}
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block mt-6">
            Movie
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Aishwarya Rai-Abhishek: Aishwarya Rai-Abhishek are trending once
              again.. Netizens react to their divorce rumors!
            </li>
            <li>
              The Paradise Glimpse: Nani's "The Paradise" is facing criticism
            </li>
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        {/* Center Column: Latest News */}
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
            Latest News
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">
                {news}
              </li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        {/* Right Column: District News */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
              District News
            </h2>
            <select
              className="border px-3 py-1"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option>Select District</option>
              <option>Hyderabad</option>
              <option>Vijayawada</option>
              <option>Visakhapatnam</option>
            </select>
          </div>

          <div className="mt-4 space-y-4">
            {districtNews.map((news, index) => (
              <div
                key={index}
                className="flex space-x-4 items-center border-b pb-2"
              >
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-20 h-16 object-cover rounded"
                />
                <p>{news.title}</p>
              </div>
            ))}
          </div>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>

        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
            Crime
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
            <div className="relative mt-4">
              <img
                src="/test1.jpg"
                alt="Top story"
                className="w-full h-52 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
                <p>
                  Phone Tapping Case: Key turning point in phone tapping case..
                  Red Corner Notices reach Interpol
                </p>
              </div>
            </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">
                {news}
              </li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
            Politice
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
            <div className="relative mt-4">
              <img
                src="/test2.jpg"
                alt="Top story"
                className="w-full h-52 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
                <p>
                  Phone Tapping Case: Key turning point in phone tapping case..
                  Red Corner Notices reach Interpol
                </p>
              </div>
            </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">
                {news}
              </li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">
            Career
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
            <div className="relative mt-4">
              <img
                src="/test3.jpg"
                alt="Top story"
                className="w-full h-52 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
                <p>
                  Phone Tapping Case: Key turning point in phone tapping case..
                  Red Corner Notices reach Interpol
                </p>
              </div>
            </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">
                {news}
              </li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
      </div>
    </div>
  );
}
