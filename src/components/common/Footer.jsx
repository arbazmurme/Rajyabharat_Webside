"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 bg-violet-900 pt-9 text-white">
      <div className="mx-auto w-full px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-6 md:flex-row md:px-10">
          {/* Left Section - Logo & Description */}
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold text-2xl">
              <span className="text-rose-600">RAIYA</span>BHARAT
            </h1>
            <p className="mt-4 text-[15px] text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio
              facere officiis enim.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="md:w-[316px] mt-6 md:mt-0">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-2 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <a href="tel:+911800123444" className="text-[14px] font-medium">
                  +91 1800123444
                </a>
                <p className="text-[12px]">Support Number</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <div className="bg-white/20 p-2 rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div>
                <a
                  href="mailto:help@lorem.com"
                  className="text-[14px] font-medium"
                >
                  help@lorem.com
                </a>
                <p className="text-[12px]">Support Email</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <div className="bg-white/20 p-2 rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-[14px] font-medium">
                  Sub Nerul, Mumbai, India, 123456
                </p>
                <p className="text-[12px]">Address</p>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="mt-6 mb-2 md:mb-0 md:mt-0 md:max-w-[341px] ">
            <div>
              <p className="text-[18px] font-medium">Pages</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link className="hover:text-gray-300" href="/">
                    📄 E Paper
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300" href="/news">
                    📄 TS Dynamic
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 mb" href="/contact">
                    📄 AP Dynamic
                  </Link>
                </li>
              </ul>
            </div>
              {/* App Download Section */}
              <div className="mt-6 mb-4">
                <p className="text-[18px] font-medium">Download the App</p>
                <div className="mt-3 flex gap-4">
                  <a href="#">
                    <img
                      src="./gat-app-now.png"
                      alt="Google Play"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
