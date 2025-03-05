"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const FeaturePost = () => {
  const { foodNewsOne, healthNewsOne, sliderNews } = useSelector(
    (store) => store.news
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleclick = (news) => {
    const newsUrl = decodeURIComponent(news.slugUrl);
    router.push(`/news-info/${newsUrl}`);
  };

  return (
    <>
      <section className="utf_featured_post_area pt-4 no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 pad-r mb-1">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
              >
                {sliderNews.map((news) => (
                  <SwiperSlide key={news._id}>
                    <div
                      id="utf_featured_slider"
                      className="utf_featured_slider"
                    >
                      <div
                        className="item"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleclick(news)}
                      >
                        <img src={news.thumbnail} style={{ width: "100%" }} />
                        <div className="utf_featured_post">
                          <div className="utf_post_content">
                            <h2 className="utf_post_title title-extra-large">
                              {news.newsTitle}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-5 col-md-12 pad-l">
              <div className="row">
                <div className="col-md-12">
                  {healthNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop hot-post-top clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="utf_post_thumb">
                        <a>
                          <img
                            className="img-fluid"
                            src={news.thumbnail}
                            alt=""
                          />
                        </a>
                      </div>
                      {/* </Link> */}
                      <div className="utf_post_content">
                        <h2 className="utf_post_title title-large">
                          <a>{news.newsTitle}</a>
                          {/* </Link> */}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 pad-r-small">
                  {foodNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="utf_post_thumb">
                        <a>
                          <img
                            className="img-fluid"
                            src={news.thumbnail}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="utf_post_content">
                        {/* <a className="utf_post_cat">{news.category}</a> */}
                        <h2 className="utf_post_title title-medium">
                          <a>{news.newsTitle.slice(0, 40) + "..."}</a>
                          {/* </Link> */}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 pad-l-small">
                  {foodNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="utf_post_thumb">
                        <a>
                          <img
                            className="img-fluid"
                            src={news.thumbnail}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="utf_post_content">
                        {/* <a className="utf_post_cat">{news.category}</a> */}
                        <h2 className="utf_post_title title-medium">
                          <a>{news.newsTitle.slice(0, 40) + "..."}</a>
                          {/* </Link> */}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePost;
