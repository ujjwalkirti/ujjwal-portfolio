import Link from "next/link";
import React from "react";

const GetInTouch = ({ font }) => {
  return (
    <div className="text-center pb-10 px-[25px] lg:max-w-[600px] lg:mx-auto lg:mb-[100px]">
      <p
        className={
          "text-blue-600 lg:text-[16px] lg:mb-[20px] lg:mt-[10px] text-[20px] " +
          font[1].className
        }
      >
        04. What's Next?
      </p>
      <p className="text-gray-900 font-semibold text-[30px] lg:text-[60px] lg:mb-[10px]">
        Get In Touch
      </p>
      <p className="mb-10 mt-2 text-gray-600 font-medium lg:font-[500] lg:text-[18px]">
        I’m currently looking for any new opportunities and my inbox is always
        open. Whether you want to consider for a position at your organisation
        or just want to say hi, I’ll try my best to get back to you!
      </p>
      <Link
        href={`mailto:ujjwalkirti2000@gmail.com`}
        className={
          "text-blue-600 border border-blue-600 hover:bg-blue-50 transition-all rounded-md mt-[50px] px-[28px] py-[20px] " +
          font[1].className
        }
      >
        Say Hello!
      </Link>
    </div>
  );
};

export default GetInTouch;
