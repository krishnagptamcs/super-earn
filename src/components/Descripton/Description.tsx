import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Button from "./Button";

const Description = ({ data }: { data: any }) => {
  const { userId } = auth();
  
  // Modify the short_description to include line breaks after specific tags and replace "CashKaro" with "Super Earn"
  const modifiedShortDescription = data?.attributes?.short_description
    ?.replace(/<\/em>/g, "</em><br>")
    ?.replace(/<\/span>/g, "</span><br>")
    ?.replace(/<\/strong>/g, "</strong><br>")
    ?.replace(/CashKaro/g, "Super Earn");

  return (
    <>
      <section className="mb-6">
        {/* Top part with blue bg */}
        <div className="bg-blue-300 p-8">
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* image */}
            <div>
              <Image
                alt="brand image"
                src={data?.attributes?.image_url}
                width={200}
                height={200}
                unoptimized
                className="rounded-lg object-contain"
              />
            </div>
            {/* brand name */}
            <h1 className="text-2xl font-semibold">
              {data?.attributes?.seo_h1_tag}
            </h1>

            {/* description */}
            <div className="w-7/12 mx-auto">
              <p className="text-center italic tracking-tight">
                {data?.attributes?.seo_description}
              </p>
            </div>
          </div>
        </div>

        {/* middle part */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="text-center space-y-5 text-lg italic ">
            <div
              dangerouslySetInnerHTML={{ __html: modifiedShortDescription }}
            />
          </div>

          <Button btnData={data?.attributes} user={userId} />
        </div>
      </section>
    </>
  );
};

export default Description;
