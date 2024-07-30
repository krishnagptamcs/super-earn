"use client";
import React from "react";
import { reviews } from "@/data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// SWIPER MODULE
import {
  Autoplay,
  FreeMode,
  Pagination,
  Navigation,
  A11y,
} from "swiper/modules";
import Image from "next/image";

const Reviews = () => {
  return (
    <>
      <section className="w-11/12 mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          Meet Our Customers
        </h1>

        {/* categories icons */}
        <div className="w-10/12 mx-auto p-4">
          <div>
            {/* Customer testimonials */}
            <div className="p-2">
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
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  1020: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 },
                  1281: { slidesPerView: 3 },
                }}
              >
                <div className="p-2">
                  {reviews.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div
                          key={item?.id}
                          className="p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border-2 border-black/45 rounded-lg h-64 space-y-4"
                        >
                          <Image src={item.pic} alt="image" className="w-20 h-20 rounded-md" />
                          <p className="text-sm tracking-tight italic text-black/45">
                            {item.data}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
