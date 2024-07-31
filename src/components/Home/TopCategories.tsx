import React from "react";
import Link from "next/link";

import { categories } from "@/data/categores";

const TopCategories = () => {
  return (
    <>
      <section className="w-11/12 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">
          Top <span className="text-blue-600">Categories</span>
        </h1>

        {/* categories icons */}
        <div className="flex flex-row gap-8 justify-around   w-10/12 mx-auto ">
          {categories.map((item, index) => (
            <Link
              href={`${item.path}`}
              className="py-5 px-8 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 hover:border-blue-500 hover:shadow-none transition-all flex flex-col items-center justify-center gap-3"
              key={index}
            >
              <i className="text-7xl">{<item.icon />}</i>
              <p className="font-medium">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopCategories;
