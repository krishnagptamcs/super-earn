"use client";
import React from "react";
import toast from "react-hot-toast";

const Button = ({ btnData, user }: { btnData: any; user: any }) => {
  const verfiyHandler = () => {
    if (user) {
      window.open(btnData?.cashback_url);
    } else {
      toast.error("Please Login ! To grab this offer");
    }
  };

  return (
    <>
      <button
        onClick={() => verfiyHandler()}
        className={`px-4 py-2 rounded-md ${
          user ? "bg-blue-500" : "bg-gray-300"
        }  shadow-md`}
      >
        {btnData?.cashback_button_text}
      </button>
    </>
  );
};

export default Button;
