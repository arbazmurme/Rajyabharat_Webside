"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { MenuIcon } from "lucide-react";
import { Button, Drawer } from "antd";

const navItems = [
  "Telangana",
  "Andhra Pradesh",
  "Disha Specials",
  "Movie",
  "Crime",
  "Lifestyle",
  "Edit page",
  "Politics",
  "National-International",
  "Business",
  "Sports",
  "District News",
  "Devotion",
];

const Header = () => {
  const [showButton, setShowButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState(navItems);
  const [moreItems, setMoreItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);

      const topBar = document.getElementById("top-bar");
      const header = document.getElementById("myHeader");

      if (!topBar || !header) return;

      const topBarBottom = topBar.getBoundingClientRect().bottom;

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

      for (let item of navItems) {
        totalWidth += 120;
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Topbar Start */}
      <div id="top-bar" className="animate-fade-in">
        <div className="absolute top-0 left-0 flex flex-col md:flex-row  px-4 md:px-8 py-4 w-full md:hidden">
          <MenuIcon  onClick={() => setOpen(true)} />
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
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 w-full  bg-gray-200">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img
              src="./logo.jpeg"
              alt="Rajyabharat Logo"
              className="h-16 md:h-40 mx-auto md:mx-0"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row md:flex-col space-x-1 md:space-y-2">
            <button className="bg-blue-600 text-white px-4 rounded-lg flex items-center justify-center space-x-2">
              <span className=" text-[12px] md:text-[14px] py-2 md:my-0">📄 E Paper</span>
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 md:py-2 rounded-lg flex items-center justify-center space-x-2">
              <span className=" text-[12px] md:text-[14px] md:my-0">📄 TS Dynamic</span>
            </button>
            <button className="bg-blue-600 text-white py-2  px-4 md:py-2 rounded-lg flex items-center justify-center space-x-2">
              <span className=" text-[12px] md:text-[14px] md:my-0">📄 AP Dynamic</span>
            </button>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Main Nav Start */}
      <div id="myHeader" className="animate-fade-in z-50  ">
        <nav
          ref={navRef}
          className="bg-yellow-400 py-3 px-5 flex items-center justify-between"
        >
          {/* Left Side (Logo & Nav Items) */}
          <div className="flex items-center space-x-10">
            <span className="text-xl font-bold cursor-pointer">🏠</span>
            {visibleItems.map((item, index) => (
              <span
                key={index}
                className="font-semibold text-black cursor-pointer hover:underline hidden md:inline"
              >
                {item}
              </span>
            ))}
          </div>

          {/* More Dropdown (If needed) */}
          {moreItems.length > 0 && (
            <div>
              <button
                onClick={handleClick}
                className="text-black font-semibold flex items-center space-x-4"
              >
                <span>More</span> <MenuIcon />
              </button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {moreItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </nav>
      </div>
      {/* Main Nav End */}

      {/* Back to Top Button */}
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={handleScrollTop}
          title="Back to Top"
        >
          ↑
        </button>
      )}
      <div>
        <Drawer
          title="Navigation Drawer"
          placement="left"
          width="60vw"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>Content goes here...</p>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
