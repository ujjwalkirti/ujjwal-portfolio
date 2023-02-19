import Link from "next/link";
import React from "react";

const GetInTouch = ({ font }) => {
  return (
    <div className="text-center pb-10">
      <p className={"aqua text-[20px] "+font[1].className}>03. What's Next?</p>
      <p className="grayish-text font-semibold text-[30px]">Get In Touch</p>
      <p className="mb-10 mt-2 dark-grayish-text font-medium ">
        I’m currently looking for any new opportunities and my inbox is always
        open. Whether you want to consider for a position at your organisation
        or just want to say hi, I’ll try my best to get back to you!
      </p>
      <Link
        href={`mailto:ujjwalkirti2000@gmail.com`}
        className={
          "aqua border border-[#64ffda] rounded-md mt-[50px] px-[28px] py-[20px] " +
          font[1].className
        }
      >
        Say Hello!
      </Link>
    </div>
  );
};

export default GetInTouch;
