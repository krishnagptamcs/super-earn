import React from "react";
import CopyRight from "./CopyRight";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import superear_logo from "../../../public/company_logo/superearn-high-resolution-logo-black-transparent.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800  py-8 text-white/50">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
          <Link href={"/"} className="">
            <Image src={superear_logo} alt="super earn" className="w-40 fill-white"/>
          </Link>
            <p className="text-sm">
              We are a company dedicated to providing the best services in the
              industry. Our mission is to enhance the quality of life for our
              customers through exceptional products and services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/terms-condition">
                  <p className="hover:underline">Terms and Conditions</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="hover:underline">Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:underline">About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <p className="hover:underline">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className=" hover:scale-125 transition-all delay-75 hover:text-[#3b5998]"
                aria-label="Facebook"
              >
                <FaFacebook size={30} />
              </a>

              <a
                href="https://instagram.com"
                className=" hover:scale-125 transition-all delay-75 hover:text-[#E1306C]"
                aria-label="Instagram"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:scale-125 transition-all delay-75 hover:text-[#0072b1]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
};

export default Footer;
