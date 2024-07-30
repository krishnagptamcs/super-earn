import Banner from "@/components/Home/Banner";
import CouponSite from "@/components/Home/CouponSite";
import MostPopular from "@/components/Home/MostPopular";
import Refer from "@/components/Home/Refer";
import Reviews from "@/components/Home/Reviews";
import TopCategories from "@/components/Home/TopCategories";

export default function Home() {
  return (
    <>
      <section className="space-y-8"> 
        <Banner />
        <TopCategories />
        <MostPopular />
        <Refer />
        <CouponSite />
        <Reviews />
      </section>
    </>
  );
}
