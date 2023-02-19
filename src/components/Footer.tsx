import { Fira_Mono } from "@next/font/google";
import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const iconStyle = "text-[24px] hover:aqua mb-6";
const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const Footer = () => {
  return (
    <div
      className={
        "mt-[40px] px-[25px] pb-10 dark-grayish-text text-center text-[16px]  " +
        firamono.className
      }
    >
      {/* socials icons */}
      <div className="flex justify-evenly items-center dark-grayish-text ">
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
      </div>
      <p>
        Above page is based on the portfolio page designed by{" "}
        <Link href="https://brittanychiang.com/" className="aqua">
          Brittany Chiang
        </Link>{" "}
        for her own use.
      </p>
      <p>
        But I thought of replicating the same, and I have developed it from
        scratch based on her design.
      </p>
    </div>
  );
};

export default Footer;
