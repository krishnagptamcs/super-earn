import Description from "@/components/Descripton/Description";
import React from "react";

const page = async ({ params }: { params: { product_id: string } }) => {
  const res = await fetch(
    `https://cashkaro.com/_next/data/arN6GzkiL6ou7FrHkRTtf/stores/${params.product_id}.json`
  );

  if (!res.ok) {
    // Handle error appropriately
    console.error("Failed to fetch data");
    return <div>Failed to load data</div>;
  }

  const result = await res.json();
  const data = result.pageProps.storeAPIData.data;

  console.log("params is ", params.product_id);
  //   console.log("data is ", result);
  // console.log("data is ", data);

  return (
    <div>
      <Description data={data} p_id={params.product_id[0]} />
    </div>
  );
};

export default page;
