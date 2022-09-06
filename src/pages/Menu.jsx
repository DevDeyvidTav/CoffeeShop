import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export function Menu() {
  return (
    <div style={{ backgroundColor: '#8C663C' }} className="flex items-center  lg:h-screen  max-w-full justify-center" >
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper| w-screen lg:flex flex-col absolute items-center justify-center hidden  rounded-md text-2xl font-serif font-bold h-[60%] "

      >
        <SwiperSlide>
          <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
            <img className="w-96 h-80" src="https://st.depositphotos.com/3163695/4402/i/450/depositphotos_44023829-stock-photo-coffee.jpg" alt="" />
            <p className="mx-16">Café expresso</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
            <img className="w-96 h-80" src="https://st.depositphotos.com/2363887/2571/i/450/depositphotos_25717699-stock-photo-cappuccino-mug-close-up-with.jpg" alt="" />
            <p className="mx-16">café com leite</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
            <img className="w-96 h-80" src="https://static5.depositphotos.com/1013073/406/i/450/depositphotos_4069405-stock-photo-latte-macchiato-with-cocoa-and.jpg" alt="" />
            <p className="mx-16">Late macciato</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="lg:hidden Menu-mobile| flex flex-col gap-20 mt-20 ">
        <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
          <img className="w-96 h-80" src="https://st.depositphotos.com/3163695/4402/i/450/depositphotos_44023829-stock-photo-coffee.jpg" alt="" />
          <p className="mx-16">Café expresso</p>
        </div>
        <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
          <img className="w-96 h-80" src="https://st.depositphotos.com/2363887/2571/i/450/depositphotos_25717699-stock-photo-cappuccino-mug-close-up-with.jpg" alt="" />
          <p className="mx-16">café com leite</p>
        </div>
        <div className="bg-white flex items-center justify-center flex-col p-2 rounded-md">
          <img className="w-96 h-80" src="https://static5.depositphotos.com/1013073/406/i/450/depositphotos_4069405-stock-photo-latte-macchiato-with-cocoa-and.jpg" alt="" />
          <p className="mx-16">Late macciato</p>
        </div>
      </div>
    </div>
  )
}
