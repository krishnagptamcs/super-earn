import CategoryPage from "@/components/CategoryPage/CategoryPage";
import { popularCategories } from "@/data/brand";
import React from "react";

const Page = ({
  params,
}: {
  params: {
    cate_type: string;
  };
}) => {
    console.log(params.cate_type);
  // Filter the popularCategories array based on the cate_type parameter
  const filteredCategories = popularCategories.filter(
    (category) => category.type === params.cate_type[0]
  );

  return (
    <div>
      
      <CategoryPage name={params.cate_type} data={filteredCategories} />
    </div>
  );
};

export default Page;
