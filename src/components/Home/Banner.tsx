"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// SWIPER MODULE
import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,
} from "swiper/modules";
import Image from "next/image";
import { bannerData } from "@/data/banner";

const Banner = () => {
  return (
    <section className="w-full h-72 ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1020: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
          1281: { slidesPerView: 1 },
        }}
      >
        <div className="w-full h-full ">
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full ">
                <Image src={item.img} alt="banner" className="object-fill max-h-80 w-full "  unoptimized/>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
