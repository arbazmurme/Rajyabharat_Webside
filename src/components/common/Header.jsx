"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { MenuIcon } from "lucide-react";
import { Drawer } from "antd";
import FullScreenDrawer from "./FullScreenDrawer";
import { useSelector } from "react-redux";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const Header = () => {
  const { allCategorys } = useSelector((state) => state.category);
  const [showButton, setShowButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState(allCategorys);
  const [moreItems, setMoreItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchIcon, setSerchIcon] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const navRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);

      const topBar = document.getElementById("top-bar");
      const header = document.getElementById("myHeader");

      if (!topBar || !header) return;

      let topBarBottom = topBar.getBoundingClientRect().bottom;

      if (topBarBottom <= 0) {
        header.classList.add(
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-white",
          "shadow-md",
          "transition-all",
          "duration-300"
        );
        setSerchIcon(true);
      } else {
        header.classList.remove(
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-white",
          "shadow-md",
          "transition-all",
          "duration-300"
        );
        setSerchIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return;

      const containerWidth = navRef.current.clientWidth;
      let totalWidth = 0;
      let visible = [];
      let extra = [];

      for (let item of allCategorys) {
        totalWidth += 100;
        if (totalWidth < containerWidth - 150) {
          visible.push(item);
        } else {
          extra.push(item);
        }
      }

      setVisibleItems(visible);
      setMoreItems(extra);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseOld = () => {
    setAnchorEl(null);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpen = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Topbar Start */}
      <div id="top-bar">
        <div className="absolute top-0 left-0 flex flex-col md:flex-row  px-4 md:px-8 py-4 w-full md:hidden">
          <MenuIcon onClick={() => setOpen(true)} />
        </div>
        <div className="hidden md:flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 text-sm bg-gray-100 w-full">
          <span className="text-gray-700 text-center md:text-left">
            {new Date().toLocaleString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </span>
          <div className="flex space-x-4 text-blue-600 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Google News
            </a>
            <a href="#" className="hover:underline">
              Web Stories
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 w-full  bg-gray-50">
          {/* Logo */}
          <Link href="/" className="mb-4 ml-4 md:ml-0 md:mb-0 flex flex-row items-center">
            <img
              src="/logo-removebg-preview.png"
              alt="Rajyabharat Logo"
              className="h-16 md:h-20 mx-auto md:mx-0"
            />
            <h1
              className="text-4xl md:text-7xl font-extrabold text-center md:text-left 
  bg-gradient-to-r from-[#472fe6] to-[#0072FF] text-transparent bg-clip-text 
  drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)] tracking-wide"
            >
              RAJYABHARAT
            </h1>
          </Link>
        </div>
      </div>
      {/* Topbar End */}

      {/* Main Nav Start */}
      <div id="myHeader" className="z-50">
        <nav
          ref={navRef}
          className="bg-yellow-400 py-3 px-5 md:flex items-center justify-between hidden"
        >
          {/* Left Side (Logo & Nav Items) */}
          <div
            className={`flex items-center ${
              searchIcon ? "space-x-8" : "space-x-9"
            }`}
          >
            <Link href="/" className="text-xl font-bold cursor-pointer">
              🏠
            </Link>
            {visibleItems.map((item) => (
              <Link
                href={`/news/${item.slugUrl}`}
                key={item._id}
                className="font-semibold text-black cursor-pointer hover:underline hidden md:inline hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                {language === "en" ? item.nameInTelugu : item.nameInEnglish}
              </Link>
            ))}
          </div>

          {/* More Dropdown (If needed) */}
          {moreItems.length > 0 && (
            <div>
              <button
                onClick={handleClick}
                className="text-black font-semibold flex items-center space-x-4"
              >
                <span>More</span>
              </button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseOld}
              >
                {moreItems.map((item) => (
                  <MenuItem key={item._id} onClick={handleCloseOld}>
                    <Link
                      className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
                      href={`/news/${item.slugUrl}`}
                    >
                      {language === "en"
                        ? item.nameInTelugu
                        : item.nameInEnglish}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
          {searchIcon && (
            <span
              className="font-semibold text-black cursor-pointer hover:underline hidden md:inline "
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          )}
        </nav>
        <nav className="bg-yellow-400 py-2 px-2 flex items-center md:hidden relative shadow-md">
          <Link href="/" className="text-xl font-bold cursor-pointer bg-yellow-400 px-2">
            🏠
          </Link>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide w-full"
          >
            {allCategorys.map((item) => (
              <Link
                href={`/news/${item.slugUrl}`}
                key={item._id}
                className="font-bold text-black cursor-pointer hover:text-gray-800 whitespace-nowrap px-2 py-1 transition"
              >
                {language === "en" ? item.nameInTelugu : item.nameInEnglish}
              </Link>
            ))}
          </div>
          {searchIcon && (
            <span
              className="font-semibold text-black cursor-pointer hover:underline md:hidden inline"
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          )}
        </nav>
      </div>
      {/* Main Nav End */}

      {/* Back to Top Button */}
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
          onClick={handleScrollTop}
          title="Back to Top"
        >
          ↑
        </button>
      )}
      <div>
        <Drawer
          title="Navigation"
          placement="left"
          width="60vw"
          onClose={() => setOpen(false)}
          open={open}
          className="p-4 bg-gradient-to-r from-white to-gray-100 shadow-2xl rounded-r-lg backdrop-blur-lg"
        >
          <div className="flex flex-col gap-y-4">
            {allCategorys.map((item) => (
              <Link
                href={`/news/${item.slugUrl}`}
                key={item._id}
                className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-all duration-300 
        hover:scale-105 hover:underline underline-offset-4 border-b border-gray-300 pb-2"
              >
                {language === "en" ? item.nameInTelugu : item.nameInEnglish}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>

      <FullScreenDrawer
        open={drawerOpen}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default Header;
