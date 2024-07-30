import React from "react";
import Image from "next/image";
import Link from "next/link";
import { topCategories } from "@/data/brand";

const TopCategories = () => {
  return (
    <>
      <section className="w-11/12 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">Top Categories</h1>

        {/* categories icons */}
        <div className="flex flex-row gap-12 justify-around  h-44  w-10/12 mx-auto ">
          {topCategories.map((item, index) => (
            <Link
              href={`/offers/${item.link}`}
              className="p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-none transition-all rounded-xl flex flex-col items-center justify-center gap-3"
              key={index}
            >
              <Image
                alt="brands"
                width={100}
                height={100}
                src={item.image}
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

export default TopCategories;
