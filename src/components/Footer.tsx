import { Fira_Mono } from "@next/font/google";
import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const iconStyle =
  "text-[24px] hover:aqua mb-6 hover:-translate-y-2 hover:text-[#64ffda] transition-all";
const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const Footer = () => {
  return (
    <div
      className={
        "mt-[180px] lg:mt-[50px] px-[15px] pb-4 lg:pb-10 dark-grayish-text text-center text-[16px]  " +
        firamono.className
      }
    >
      {/* socials icons */}
      <div className="flex justify-evenly items-center dark-grayish-text lg:fixed lg:bottom-0 lg:flex-col lg:pl-[15px]">
        <Link href="https://github.com/ujjwalkirti">
          <FiGithub className={iconStyle} />
        </Link>
        <Link href={`https://www.instagram.com/ujjwal_kirti/`}>
          <FiInstagram className={iconStyle} />
        </Link>
        <Link href={`https://twitter.com/kirti_ujjwal`}>
          <FiTwitter className={iconStyle} />
        </Link>
        <Link href={`https://www.linkedin.com/in/ujjwal-kirti/`}>
          <FiLinkedin className={iconStyle} />
        </Link>
        <div className="border-r-2 h-[150px] border-[#8892b0] hidden lg:flex"></div>
      </div>
      {/* email address link */}
      <div className="hidden lg:flex lg:fixed lg:bottom-[00px] lg:right-0  lg:flex-col lg:pr-[70px]">
        <Link
          href={`mailto:ujjwalkirti2000@gmail.com`}
          className={
            "rotate-90 hover:-translate-y-2 fixed bottom-[270px] -right-[51px]  hover:text-[#64ffda] transition-all " +
            firamono.className
          }
        >
          ujjwalkirti2000@gmail.com
        </Link>
        <div className="border-r-2 h-[150px] border-[#8892b0] hidden lg:flex"></div>
      </div>
      {/* credit to the original creator of the this website's design inspiration */}
      <p className=" text-justify lg:text-center pb-2">
        Above page is based on the portfolio page designed by{" "}
        <Link href="https://brittanychiang.com/" className="aqua">
          Brittany Chiang
        </Link>{" "}
        for her own use.
      </p>
      <p className=" text-justify lg:text-center">
        But I thought of replicating the same, and I have developed it from
        scratch based on her design.
      </p>
    </div>
  );
};

export default Footer;
