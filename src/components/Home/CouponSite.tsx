import Image from "next/image";
import React from "react";
import cb from "../../../public/assets/cashback_1.avif";

const CouponSite = () => {
  return (
    <>
      <section className="w-11/12 mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          India&apos;s Best Cashback & <span className="text-blue-600">Coupons Site</span>
        </h1>

        {/* categories icons */}
        <div className="flex gap-2 w-10/12 mx-auto p-4">
          {/* text */}
          <div className="w-[70%] flex items-center justify-center">
            <p className="text-lg font-medium">
              Welcome to Super Earn, India&apos;s best cashback coupon site! 🎉 Get
              ready to unlock unbeatable savings and incredible deals with just
              a click. From everyday essentials to luxury splurges, Super Earn
              ensures you get the best bang for your buck. Don&apos;t miss out –
              start earning cashback today and experience shopping like never
              before! 🚀💸
            </p>
          </div>

          {/* images */}
          <div className="w-[30%]">
            <Image alt="cashback" src={cb} unoptimized className="rounded-full w-56 aspect-square " />
          </div>
        </div>
      </section>
    </>
  );
};

export default CouponSite;
