import React from "react";
import Image from "next/image";
import Link from "next/link";
import { popularCategories } from "@/data/brand";

const MostPopular = () => {
  return (
    <>
      <section className="w-11/12 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">Most Popular Brands</h1>

        {/* categories icons */}
        {/* categories icons */}
        <div className="flex flex-row gap-12 justify-around  h-44 w-10/12 mx-auto ">
          {popularCategories.map((item, index) => (
            <Link
              href={`/offers/${item.link}`}
              className="p-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 hover:border-blue-500 hover:shadow-none transition-all flex flex-col items-center justify-center gap-3"
              key={index}
            >
              <Image
                alt="brands"
                width={100}
                height={100}
                src={item.image}
                className="w-32 h-24 "
                unoptimized
              />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MostPopular;
