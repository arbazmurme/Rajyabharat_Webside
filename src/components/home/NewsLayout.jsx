"use client";
import { useState } from "react";

export default function NewsLayout() {
  const [selectedDistrict, setSelectedDistrict] = useState("");

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
    { title: "Examination center as a barrier for drunkards..", img: "./test1.jpg" },
    { title: "Man dies after going fishing in pond", img: "/test2.jpg" },
    { title: "Burglars are on the rise.. Locked houses are their target..", img: "/test3.jpg" },
    { title: "Singer Kalpana's health condition stable..", img: "/test4.jpg" },
    { title: "Inter exams begin peacefully..", img: "./test1.jpg" },
  ];

  return (
    <div className="p-4">
      {/* Breaking News */}
      <div className="bg-yellow-400 text-black font-bold px-4 py-2 inline-block mb-4">
        Breaking News
      </div>
      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Top Stories */}
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">Top stories</h2>
          <div className="relative mt-4">
            <img src="/test4.jpg" alt="Top story" className="w-full h-52 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 text-white">
              <p>Phone Tapping Case: Key turning point in phone tapping case.. Red Corner Notices reach Interpol</p>
            </div>
          </div>

          {/* Movie Section */}
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block mt-6">Movie</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Aishwarya Rai-Abhishek: Aishwarya Rai-Abhishek are trending once again.. Netizens react to their divorce rumors!</li>
            <li>The Paradise Glimpse: Nani's "The Paradise" is facing criticism</li>
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        {/* Center Column: Latest News */}
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">Latest News</h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">{news}</li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        {/* Right Column: District News */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">District News</h2>
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
              <div key={index} className="flex space-x-4 items-center border-b pb-2">
                <img src={news.img} alt={news.title} className="w-20 h-16 object-cover rounded" />
                <p>{news.title}</p>
              </div>
            ))}
          </div>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>

        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">Crime</h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
          <div className="relative mt-4">
            <img src="/test1.jpg" alt="Top story" className="w-full h-52 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
              <p>Phone Tapping Case: Key turning point in phone tapping case.. Red Corner Notices reach Interpol</p>
            </div>
          </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">{news}</li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">Politice</h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
          <div className="relative mt-4">
            <img src="/test2.jpg" alt="Top story" className="w-full h-52 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
              <p>Phone Tapping Case: Key turning point in phone tapping case.. Red Corner Notices reach Interpol</p>
            </div>
          </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">{news}</li>
            ))}
          </ul>

          <button className="bg-gray-300 text-gray-700 px-6 py-2 mt-4 rounded-full flex items-center mx-auto">
            More »
          </button>
        </div>
        <div>
          <h2 className="bg-blue-600 text-white px-4 py-2 inline-block">Career</h2>
          <ul className="list-disc list-inside mt-4 space-y-3">
          <div className="relative mt-4">
            <img src="/test3.jpg" alt="Top story" className="w-full h-52 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4 text-white">
              <p>Phone Tapping Case: Key turning point in phone tapping case.. Red Corner Notices reach Interpol</p>
            </div>
          </div>
            {latestNews.map((news, index) => (
              <li key={index} className="border-b pb-2">{news}</li>
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
