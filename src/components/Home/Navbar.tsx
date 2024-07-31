import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import superear_logo from "../../../public/company_logo/superearn-high-resolution-logo-black-transparent.png";
import Image from "next/image";

const Navbar = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="bg-primary-mainBlue p-2 lg:p-4">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          {/* logo */}
          <Link href={"/"} className="w-44 aspect-auto">
            <Image src={superear_logo} alt="super earn" />
          </Link>

          {/* Tabs  */}

          <div className="flex items-center gap-8 font-semibold">
            <Link
              href={"/"}
              className="hover:border-b-2 pb-p[1px] border-white"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:border-b-2 pb-p[1px] border-white"
            >
              About
            </Link>
            <Link
              href={"/contact-us"}
              className="hover:border-b-2 pb-p[1px] border-white"
            >
              Contact Us
            </Link>
          </div>

          {/* authentication */}
          <div className="flex gap-3 items-center">
            {userId ? (
              <UserButton />
            ) : (
              <>
                {" "}
                <Link
                  href={"/sign-up"}
                  className="bg-transparent  border-2 rounded-md px-3 py-2 border-white"
                >
                  Signup
                </Link>
                <Link
                  href={"/sign-in"}
                  className="bg-transparent  border-2 rounded-md px-3 py-2 border-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
