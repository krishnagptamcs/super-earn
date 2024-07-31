"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { popularCategories } from "@/data/brand";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// SWIPER MODULE
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

const MostPopular = () => {
  return (
    <>
      <section className="w-11/12 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">
          Most Popular <span className="text-blue-600">Brands</span>
        </h1>

        {/* categories icons */}

        <div className="py-4 px-2">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
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
              1281: { slidesPerView: 6 },
            }}
          >
            {popularCategories.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={`/offers/${item.link}`}
                  className="p-2 rounded-lg  border-2 hover:border-blue-500 hover:shadow-none transition-all flex flex-col items-center justify-center gap-3 "
                  key={index}
                >
                  <Image
                    alt="brands"
                    width={100}
                    height={100}
                    src={item.image}
                    className="w-40 aspect-square"
                    unoptimized
                  />

                  <button className="tailwind-style">
                    {item.savings}
                    <span className="shine"></span>
                  </button>
                  <p className="font-medium">{item.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MostPopular;
