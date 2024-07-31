import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = ({ name, data }: { name: string; data: any }) => {
  console.log("data is ", data);
  return (
    <section>
      <div className="h-60 flex items-center justify-center  bg-gray-300 uppercase text-2xl font-semibold">
        {name}
      </div>

      {/* categories card */}
      <div className="flex gap-4  w-10/12 mx-auto p-4">
        {data.map((item: any, index: number) => (
          <Link
            href={`/offers/${item.link}`}
            className="p-3  rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 hover:border-blue-500 hover:shadow-none transition-all flex flex-col items-center justify-center gap-3"
            key={index}
          >
            <Image
              alt="brands"
              width={100}
              height={100}
              src={item.image}
              className="w-32 aspect-square"
              unoptimized
            />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
