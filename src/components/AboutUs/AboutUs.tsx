import Image from "next/image";
import React from "react";
import about from "../../../public/assets/about-us.webp";

const AboutUs = () => {
  return (
    <section className="w-10/12 mx-auto my-10 py-6 shadow-xl p-4">
      <h1 className="text-3xl  font-semibold  text-center mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>Super Earn</strong>, where your journey to smarter
        savings and greater financial rewards begins. We are not just a cashback
        platform; we are your dedicated partner in optimizing every penny you
        spend. Our mission is to turn everyday purchases into valuable savings
        and rewards, making your financial journey smoother and more rewarding.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
      <p className="text-lg mb-4">
        At Super Earn, we are a diverse team of financial experts, technology
        innovators, and customer-centric professionals, united by a shared
        vision of transforming the cashback experience. Our team combines deep
        industry knowledge with cutting-edge technology to deliver an intuitive
        and user-friendly platform. Each member of our team is driven by a
        passion for helping you achieve more with your spending.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
      <p className="text-lg mb-4">
        Our journey began with a simple yet powerful idea: to make saving money
        and earning rewards effortless and accessible for everyone. Over the
        years, we have continuously evolved and expanded our platform to offer a
        comprehensive range of cashback opportunities across numerous categories
        and brands. Our success is built on a foundation of trust, innovation,
        and a relentless focus on delivering real value to our users.
      </p>

      <div className="flex gap-8">
        {/* our mission */}
        <div className="w-[50%]">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to empower you with the tools and opportunities to
            make the most out of your spending. At Super Earn, we are dedicated
            to providing you with:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-lg">
              Exceptional Cashback Offers: Access exclusive deals and high-value
              cashback opportunities from a wide range of brands and retailers.
            </li>
            <li className="text-lg">
              User-Friendly Experience: Enjoy a seamless and intuitive platform
              designed to make earning and redeeming rewards easy and enjoyable.
            </li>
            <li className="text-lg">
              Transparency and Trust: Benefit from clear and honest
              communication about our cashback offers, terms, and policies.
            </li>
            <li className="text-lg">
              Ongoing Innovation: Stay ahead with our commitment to continuously
              improve and adapt our platform based on your feedback and market
              trends.
            </li>

            <li className="text-lg">
              {" "}
              We believe that every purchase should be an opportunity to earn
              and save. By choosing Super Earn, you’re not just joining a
              cashback program; you’re becoming part of a community dedicated to
              smarter financial choices and greater rewards.
            </li>
          </ul>
        </div>

        {/* image */}
        <div className="w-[50%] p-4">
          <Image
            alt="about-us"
            src={about}
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
