import { FaTshirt } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiWashingMachine } from "react-icons/pi";
import { BiMaleFemale } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";

export const categories = [
  {
    id: 1,
    icon: FaTshirt,
    title: "Fashion",
    type: "fasion",
    path: "/fashion",
  },
  {
    id: 2,
    icon: CiMobile3,
    title: "Mobiles",
    type: "mobiles",
    path: "/mobiles",
  },
  {
    id: 3,
    icon: FaIndianRupeeSign,
    title: "Banking",
    type: "banking",
    path: "/banking",
  },
  {
    id: 4,
    icon: PiWashingMachine,
    title: "Electronics",
    type: "electronics",
    path: "/electronics",
  },
  {
    id: 5,
    icon: BiMaleFemale,
    title: "Beauty",
    type: "beauty",
    path: "/beauty",
  },
  {
    id: 6,
    icon: MdHealthAndSafety,
    title: "Health",
    type: "health",
    path: "/health",
  },
];
