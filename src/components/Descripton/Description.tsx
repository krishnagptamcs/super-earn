import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Button from "./Button";
import { popularCategories } from "@/data/brand";

const Description = ({ data, p_id }: { data: any; p_id: string }) => {
  const { userId } = auth();
  // console.log("p_id", p_id);

  // console.log("data", data);

  // Modify the short_description to include line breaks after specific tags and replace "CashKaro" with "Super Earn"
  const modifiedShortDescription = data?.attributes?.short_description
    ?.replace(/<\/em>/g, "</em><br>")
    ?.replace(/<\/span>/g, "</span><br>")
    ?.replace(/<\/strong>/g, "</strong><br>")
    ?.replace(/CashKaro/g, "Super Earn");

  // Function to find the matching category based on p_id
  const findWebsite = (id: string) => {
    const cleanedId = id;
    const category = popularCategories.find(
      (category) => category.link.replace(/\//g, "") === cleanedId
    );
    return category ? category.website : "";
  };

  const website = findWebsite(p_id);

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

          <Button
            btnData={data?.attributes}
            user={userId}
            website_link={website}
          />
        </div>
      </section>
    </>
  );
};

export default Description;
