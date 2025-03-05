import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-5xl text-white">Page not found</p>
        <Link href="/">
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 mt-6 rounded-full">
            Go Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

