import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from "../../assets/Slider/slider1.jpg"
import slide2 from "../../assets/Slider/slider2.jpg"
import slide3 from "../../assets/Slider/slider3.jpg"
import slide4 from "../../assets/Slider/slider4.jpg"
import slide5 from "../../assets/Slider/slider5.jpg"
import slide6 from "../../assets/Slider/slider6.jpg"
import slide7 from "../../assets/Slider/slider7.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Slider() {
  return (
    <div className='w-[1488px] mx-4 mt-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide1} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide2} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide3} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide4} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide5} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide6} className='block w-full h-full object-cover'/></SwiperSlide>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'><img src={slide7} className='block w-full h-full object-cover'/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider