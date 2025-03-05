"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { FaSearch, FaRedo, FaShare } from "react-icons/fa";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { TfiCommentAlt, TfiShare } from "react-icons/tfi";
import { CiMenuKebab } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";

import { TiThMenu } from "react-icons/ti";
import { BiSolidHide } from "react-icons/bi";
import ReportStory from "./draver/ReporetStory";
import ShareThisStory from "./ShareComponent/ShareComponent";
import CommentSection from "./Comment/CommentSection";

const WheelControls = (slider, changeNavigationStatus) => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
    changeNavigationStatus(); // Hide navigation when scrolling starts
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export default function App() {
  const [showNavigation, setShowNavigation] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showShareModal, setshowShareModal] = useState(false);

  const changeNavigationStatus = () => {
    setShowNavigation(false);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: true,
      vertical: true,
    },
    [(slider) => WheelControls(slider, changeNavigationStatus())]
  );

  return (
    <>
      {/* Keen Slider - Click to Toggle Navigation */}
      <div ref={sliderRef} className="keen-slider mobile_slider">
        <div className="keen-slider__slide number-slide1">
          <div className="slider_container">
            <div className="slider_top_box">
              <div
                className="slider_responsive_image_container"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dfoquniuy/image/upload/v1680864822/News/Slider/c9zdr1xqncouptx4ubyr.jpg')`,
                }}
              ></div>
            </div>
            <div className="slider_bottom_box">
              <span onClick={() => setShowNavigation((prev) => !prev)}>
                <h3> పార్టీలు వేరైనా మనం అంత ఒక్కటే </h3>
                <p>
                  అలికిడి న్యూస్, ఎల్లారెడ్డిపేట: ఎల్లారెడ్డిపేట మండల కేంద్రంలో
                  బిఆర్ఎస్, కాంగ్రెస్, బిజెపి, బిఎస్పీ కార్య కర్తలు పెద్ద బడి
                  పోలింగ్ కేంద్రం ఎదురుగా పోలింగ్ అనంతరం గురువారం సాయంత్రం
                  పార్టీలు వేరైనా మనం అంత ఒక్కేటే అని పార్టీ కార్యకర్తలు కలిసి
                  ఫోటో దిగారు. దీనిని అందరు ఆదర్శంగా తీసుకోవాలని పలువురు వారిని
                  కొనియాడారు.
                </p>
              </span>
              <div className="slider_bottom_box_bar">
                <div className="slider_bottom_box_bar_date">
                  <CiTimer className="time_icon" />
                  <span> 12:00 PM </span>
                  <span className="time_icon">1/2 Pages</span>
                </div>
                <div className="slider_bottom_box_bar_all_icons">
                  <div className="slider_bottom_box_bar_left_icons">
                    <span className="">
                      <FiThumbsUp className="icon" />
                      <span> 21 </span>
                    </span>
                    <span>
                      <FiThumbsDown className="icon" />
                      <span> 21 </span>
                    </span>
                    <span>
                      <CommentSection />
                      <span> 21 </span>
                    </span>
                  </div>
                  <div className="slider_bottom_box_bar_right_icons">
                    <ReportStory isOpen={isOpen} setIsOpen={setIsOpen} />
                    <ShareThisStory
                      showShareModal={showShareModal}
                      setshowShareModal={setshowShareModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Hide/Show based on State */}
      {showNavigation && (
        <div className="slider_navigation">
          <div className="slider_header">
            <div className="left-column">
              <span className="slider_header_Active">समाचार</span>
            </div>
            <div className="right-column">
              <span>वायरल</span>
            </div>
          </div>

          <div className="slider_footer">
            <span className="slider_items">
              <TiThMenu className="icon" />
              <span>Menu</span>
            </span>

            <span className="slider_items">
              <FaSearch className="icon" />
              <span>Search</span>
            </span>

            <span className="slider_items">
              <BiSolidHide className="icon icon_big" />
              <span>Hide</span>
            </span>

            <span className="slider_items">
              <FaRedo className="icon" />
              <span>Refresh</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
