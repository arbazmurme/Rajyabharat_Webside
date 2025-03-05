"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-96 p-6 flex flex-col justify-center items-center">
      <p className="text-gray-600 text-center">
        Copyright {new Date().getFullYear()} Rajyabharat. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

