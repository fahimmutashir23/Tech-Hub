/* eslint-disable react/no-unescaped-entities */

import ab1 from '../../assets/asset/about/ab1.png'
import ab2 from '../../assets/asset/about/ab2.png'
import ab3 from '../../assets/asset/about/ab3.png'
import customer1 from '../../assets/asset/about/customer1.jpg'
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaLuggageCart, FaStar } from "react-icons/fa";
import { GiReturnArrow, GiTrophyCup } from 'react-icons/gi';
import { GrShieldSecurity } from 'react-icons/gr';




const Gallery = () => {
    return (
        <div>
          <section className='px-10 mb-10 pt-14' >
          <div className='bg-green-200 h-[150px] text-center'>
          <h1 className='text-4xl font-semibold items-start pb-8 text-text_secondary pt-12'>About Us</h1>   
          </div>  
          <div className='flex bg-slate-100 p-20'>
            <div className="w-[50%] h-[400px]">
                <img className='w-[540px] bg-green-100 p-32' src={ab1} alt="" />
            </div>
            <div className="w-[50%] h-[400px] pt-4">
                <p className='w-[580px]'>E-commerce, short for electronic commerce, refers to the buying and selling of goods or services using the internet. It involves transactions conducted online through websites or mobile apps, and encompasses a wide range of business types, from retail and wholesale to services and digital products. Key components of e-commerce include online shopping platforms, electronic payment systems, digital marketing, and logistics for delivery. E-commerce has transformed traditional business models by providing a global marketplace, enabling businesses to reach a larger audience, and offering consumers the convenience of shopping from anywhere at any time.</p>
                <ul className='font-medium  pt-4'>
                  <li>1. Payment Gateways and Security</li>
                  <li>2. Digital Marketing Strategies</li>
                  <li>3. Global Reach and Scalability</li>
                  </ul>
                  <button className='btn btn-ghost font-medium bg-text_secondary text-white w-32 h-12 mt-4'>Contect Us</button> 
            </div>


          </div>

          </section>

{/* review section */}
          <section className='px-10 mb-10 pt-2' >
          <div className=' h-[150px] text-center'>
          <h1 className='text-4xl font-semibold items-start pb-2 text-text_secondary pt-6'>Customers Feedback</h1>   
          </div>  
       
        
          <div>
          <>
          <Swiper
        slidesPerView={3}
        spaceBetween={150}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
          
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            <SwiperSlide>
            <div className="w-[400px] h-[330px] bg-green-200 items-start px-16 py-6 text-center mt-0">
            <div className='flex gap-x-1'>
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            <FaStar className='text-text_secondary mb-2' />
            </div>
            
            <p className='text-sm font-light  text-start'>"I've been using Tech-Hub for over a year now, and my experience has been fantastic. The website is incredibly user-friendly, making it easy to navigate through various categories and find exactly what I need. The checkout process is seamless, with multiple payment options available, and I've always felt secure when making transactions."</p>
            <div className='flex gap-4 pt-4'>
            <img className="w-[80px] h-[80px] mb-4" src={customer1} alt="" />
            <div className='pt-2'>
              <h3  className='text-xl font-mrdium text-slate-500'>Fahim Muntasir</h3>
              <p className='text-sm font-light text-slate-500 text-start'>Jhinaidah,Jossor</p>
            </div>
            </div>
            </div>
            </SwiperSlide>
           
          
            
           </Swiper>
           </>
           </div>
   
        
          </section>

{/* ad section */}
          <section  className='px-10 mb-20 '>
      <div data-aos="fade-up"
           data-aos-duration="3000"  className='grid lg:grid-cols-4 md:grid-cols-2 bg-slate-200 shadow-xl '>
      <div className='flex gap-4  h-28 p-8'>
         <div className='text-text_secondary text-4xl pt-2'><FaLuggageCart /></div>
         <div>
          <h2 className='text-slate-800 font-bold'>Free Shipping</h2>
          <p className='text-slate-400 font-medium'>When ordering over $100</p>
         </div>
      </div>
      <div className='flex gap-4 bg-slate-200 h-28 p-8'>
         <div className='text-text_secondary text-4xl pt-2'><GiReturnArrow /></div>
         <div>
          <h2 className='text-slate-800 font-bold'>Free Return</h2>
          <p className='text-slate-400 font-medium'>Get Return within 30 days</p>
         </div>
      </div>
      <div className='flex gap-4 bg-slate-200 h-28 py-8 px-2'>
         <div className='text-text_secondary text-4xl pt-2'><GrShieldSecurity /></div>
         <div>
          <h2 className='text-slate-800 font-bold'>Secure Payment</h2>
          <p className='text-slate-400 font-medium'>100% Secure Online Payment</p>
         </div>
      </div>
      <div className='flex gap-4 bg-slate-200 h-28 px-2 py-8'>
         <div className='text-text_secondary text-4xl pt-2'><GiTrophyCup /></div>
         <div>
          <h2 className='text-slate-800 font-bold'>Best Quality</h2>
          <p className='text-slate-400 font-medium'>Original Product Guarenteed</p>
         </div>
      </div>
      </div>
     
          </section>

{/* payment ad section */}
         <section className='px-10 mb-10 pt-10 pb'>
          <div>
         
          <div className=" flex  gap-x-4">
            {/* 1st adv */}
            <div data-aos="fade-right" className="w-[50%] bg-green-100 px-10 py-20 ">
            <img className="w-68 h-[400px] pt-8" src={ab2} alt="" />
            <p className='w-[580px] pt-6'>E-commerce, short for electronic commerce, refers to the buying and selling of goods or services using the internet.</p>
            </div>
            
             {/* 1st adv */}
             <div data-aos="fade-right" className="w-[50%] bg-green-100 px-10 py-20 ">
            <img className="w-[400px] h-[400px] pt-2 ml-12" src={ab3} alt="" />
            <p className='w-[580px] pt-6'>E-commerce, short for electronic commerce, refers to the buying and selling of goods or services using the internet.</p>
            </div>
          
          </div>
          </div>
        </section>

{/* mail section */}
        <section className='pt-10 '>
          <div className="flex gap-x-10  bg-green-200 py-32 px-48">
            <div>
              <img className="w-52" src={mobile3} alt="" />
            </div>
            <div className="text-center">
            <p className='text-3xl font-semibold items-start pb-2 text-black pt-6 px-20'>Get <span className="text-orange-400">20% </span> Off Discount Coupon </p> 
            <p className='text-lg font-light items-start pb-2 text-black pt-1 px-20'>by Subscribe our Newsletter </p> 
            <div className="pt-6">
              <input className="w-96 h-12 px-2" type="email" name="" placeholder='Email Address' id="" />
              <button className="btn btn-ghost bg-orange-400 hover:bg-white hover:text-orange-400 hover:active:text-orange-400 w-52 h-12 text-black font-semibold ">Get A Coupon</button>
            </div>
            </div>

          </div>
  
        </section>

        </div>
    );
};

export default Gallery;