import Banner from "./Banner";
import brand1 from "../../assets/asset/brand/pngwing.com (11).png"
import brand2 from "../../assets/asset/brand/pngwing.com (12).png"
import brand3 from "../../assets/asset/brand/pngwing.com (13).png"
import brand4 from "../../assets/asset/brand/pngwing.com (14).png"
import brand5 from "../../assets/asset/brand/pngwing.com (15).png"
import brand6 from "../../assets/asset/brand/pngwing.com (16).png"
import brand7 from "../../assets/asset/brand/pngwing.com (17).png"

import banner1 from '../../assets/asset/banner/pngwing.com (6).png'
import banner2 from '../../assets/asset/banner/pngwing.com (3).png'
import banner3 from '../../assets/asset/banner/pngwing.com (4).png'
import banner4 from '../../assets/asset/banner/pngwing.com (5).png'
import mobile1 from "../../assets/asset/mobile and gaget/pngwing.com (9).png";
import mobile2 from "../../assets/asset/mobile and gaget/pngwing.com (7).png";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import mobile4 from "../../assets/asset/mobile and gaget/pngwing.com (8).png";

// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import '././home.css';


const Home = () => {
    return (
        <div className="home bg-slate-100 ">
           <Banner></Banner>
           
    {/* shop by brand section */}
        <section className='px-10 mb-10 pt-14'>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
        <h1 className='text-3xl font-semibold items-start pb-6  text-text_secondary'>Shop By Brand</h1> 
      
        <div className="flex flex-wrap gap-2 " > 
        <img className="w-[15%] h-[120px] bg-slate-200 px-10"src={brand1} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200 py-10 px-10"src={brand2} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"src={brand3} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"src={brand4} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"src={brand5} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"src={brand6} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-8"src={brand7} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200 px-10"src={brand1} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200 py-10 px-10"src={brand2} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"src={brand3} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-12"src={brand4} alt="" /> 
        <img className="w-[15%] h-[120px] bg-slate-200  px-10 py-10"src={brand5} alt="" /> 
         </div>
        </div>   
        
        </section>

    {/* tranding section */}

        <section className='px-10 mb-10 pt-14'>
          <div>
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
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={banner1} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
      
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={banner2} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>

            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={banner3} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
    
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={banner4} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={mobile1} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={mobile2} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={mobile3} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
            <img className="w-[100px] h-[120px] mb-4" src={mobile4} alt="" />
            <p className='text-sm font-light  items-start pb-2'>Xoggle aute et pariatur adipisicing nostrud et...</p>
            <p className='text-sm font-semibold text-text_secondary  items-start pb-4'>$ 20.08</p>
            <button className='btn w-[100px] h-10 bg-text_secondary text-white '>Add to Cart</button>
            </div>
            </SwiperSlide>
            
      </Swiper>
    </>
          </div>
        </section>





        </div>
    );
};

export default Home;