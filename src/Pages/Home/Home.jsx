import Banner from "./Banner";
import brand1 from "../../assets/asset/brand/pngwing.com (11).png";
import brand2 from "../../assets/asset/brand/pngwing.com (12).png";
import brand3 from "../../assets/asset/brand/pngwing.com (13).png";
import brand4 from "../../assets/asset/brand/pngwing.com (14).png";
import brand5 from "../../assets/asset/brand/pngwing.com (15).png";
import brand6 from "../../assets/asset/brand/pngwing.com (16).png";
import brand7 from "../../assets/asset/brand/pngwing.com (17).png";
import pay from "../../assets/asset/brand/pngwing.com (25).png";

import banner1 from "../../assets/asset/banner/pngwing.com (6).png";
import banner2 from "../../assets/asset/banner/pngwing.com (3).png";
import banner3 from "../../assets/asset/banner/pngwing.com (4).png";
import banner4 from "../../assets/asset/banner/pngwing.com (5).png";
import banner5 from "../../assets/asset/banner/pngwing.com (26).png";
import mobile1 from "../../assets/asset/mobile and gaget/pngwing.com (9).png";
import mobile2 from "../../assets/asset/mobile and gaget/pngwing.com (7).png";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import mobile4 from "../../assets/asset/mobile and gaget/pngwing.com (8).png";

// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';
import { Pagination } from "swiper/modules";
import "././home.css";
import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home bg-slate-100 ">
      <Banner></Banner>

      {/* shop by brand section */}
      <section className="px-10 mb-10 pt-14">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl font-semibold items-start pb-6  text-text_secondary">
            Shop By Brand
          </h1>

          <div className="flex flex-wrap gap-2 ">
            <img
              className="w-[15%] h-[120px] bg-slate-200 px-10"
              src={brand1}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200 py-10 px-10"
              src={brand2}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"
              src={brand3}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"
              src={brand4}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"
              src={brand5}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"
              src={brand6}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-8"
              src={brand7}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200 px-10"
              src={brand1}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200 py-10 px-10"
              src={brand2}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"
              src={brand3}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"
              src={brand4}
              alt=""
            />
            <img
              className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"
              src={brand5}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* tranding section */}

      <section className="px-10 mb-10 pt-10">
        <div>
          <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
            Tranding Shop
          </h1>

          <>
            <Swiper
              slidesPerView={5}
              spaceBetween={150}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner1}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner2}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner3}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner4}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile1}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile2}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile3}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile4}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

      {/* Advertisment section */}

      <section className="px-10 mb-10 pt-10 pb">
        <div>
          <div className=" flex  gap-x-4">
            {/* 1st adv */}
            <div
              data-aos="fade-right"
              className="w-[50%] bg-green-100 px-10 py-20 "
            >
              <div className="flex gap-5 text-2xl justify-center">
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 52 }}></span>
                  </span>
                  sec
                </div>
              </div>
              <h1 className="text-5xl font-semibold items-start pb-8 text-text_secondary pt-20 text-center">
                WOO ! FLASH SALE
              </h1>
              <div className="flex flex-wrap ml-16 gap-x-32 pt-6 ">
                <div className="flex gap-3">
                  <Link>
                    <p className="text-lg font-medium ml-18 text-text_secondary">
                      Shop Now{" "}
                    </p>
                  </Link>
                  <Link>
                    <FaChevronRight className="text-text_secondary mt-2" />
                  </Link>
                </div>

                <img className="w-52 pt-8" src={banner4} alt="" />
              </div>
            </div>

            {/* 1st adv */}
            <div
              data-aos="fade-left"
              className="w-[50%] bg-green-100 px-10 py-20"
            >
              <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
                Get Our <span className="text-red-600">Mobile App</span>
                <br />
                It’s Make easy for you life !
              </h1>
              <img className="w-32" src={pay} alt="" />

              <img className="w-68 pt-8" src={banner5} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* best seller section */}

      <section className="px-10 mb-10 pt-10 pb">
        <div>
          <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
            Best Seller
          </h1>
          <div
            data-aos="fade-left"
            className="pt-4 grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 "
          >
            <div className=" ">
              <img
                className="w-[180px]  h-[180px]  rounded-xl  bg-slate-200"
                src={mobile3}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-10 pt-4 pb-8 text-text_secondary ">
                Quick Shop
              </h2>
            </div>
            <div className=" ">
              <img
                className="w-[180px]  h-[180px]  rounded-xl  bg-slate-200"
                src={banner2}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-10 pt-4 pb-8 text-text_secondary ">
                Mobile Shop
              </h2>
            </div>
            <div className=" ">
              <img
                className="w-[180px]  h-[180px]  rounded-xl  bg-slate-200"
                src={mobile1}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-10 pt-4 pb-8 text-text_secondary ">
                Smart Watch
              </h2>
            </div>
            <div className=" ">
              <img
                className="w-[180px]  h-[180px]  rounded-xl  bg-slate-200"
                src={banner3}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-6 pt-4 pb-8 text-text_secondary ">
                Computer shop
              </h2>
            </div>
            <div className=" ">
              <img
                className="w-[180px]  h-[180px]  rounded-xl  bg-slate-200"
                src={mobile2}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-10 pt-4 pb-8 text-text_secondary ">
                Quick Shop
              </h2>
            </div>
            <div className=" ">
              <img
                className="w-[180px] h-[180px] rounded-xl  bg-slate-200"
                src={banner4}
                alt=""
              />
              <h2 className="text-xl font-semibold items-center ml-10 pt-4 pb-8 text-text_secondary ">
                Gaget Shop
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ad section */}

      <section className="lg:px-72 md:px-10 sm:px-10 mb-10 pt-10 pb">
        <div
          data-aos="fade-right"
          className="bg-text_secondary h-24 w-[800px] "
        >
          <p className="text-xl font-semibold items-start pb-2 text-white pt-6 px-20">
            Get The Best Deal For Headphones{" "}
          </p>
          <div className="flex gap-3 text-white px-20">
            <Link>
              <p className="text-sm font-medium ml-18 text-white ">Shop Now</p>
            </Link>
            <Link>
              <FaChevronRight className="text-white mt-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* mail section */}
      <section className="pt-10 ">
        <div className="flex gap-x-10  bg-green-200 py-32 px-48">
          <div>
            <img className="w-52" src={mobile3} alt="" />
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold items-start pb-2 text-black pt-6 px-20">
              Get <span className="text-orange-400">20% </span> Off Discount
              Coupon{" "}
            </p>
            <p className="text-lg font-light items-start pb-2 text-black pt-1 px-20">
              by Subscribe our Newsletter{" "}
            </p>
            <div className="pt-6">
              <input
                className="w-96 h-12 px-2"
                type="email"
                name=""
                placeholder="Email Address"
                id=""
              />
              <button className="btn btn-ghost bg-orange-400 hover:bg-white hover:text-orange-400 hover:active:text-orange-400 w-52 h-12 text-black font-semibold ">
                Get A Coupon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
