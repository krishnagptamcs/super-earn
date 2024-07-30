import React from "react";
import refer from "../../../public/assets/referal_banner.png";
import Image from "next/image";

const Refer = () => {
  return (
    <>
      <section className="w-11/12 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold text-center">
          Refer Friends & Earn Forever
        </h1>

        {/* categories icons */}
        <div className="w-8/12 mx-auto">
          <Image src={refer} alt="banner" unoptimized />
        </div>
      </section>
    </>
  );
};

export default Refer;
