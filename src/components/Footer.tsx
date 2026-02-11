import { github_url, instagram_url, linkedin_url, twitter_url } from "@/constants/urls";
import { Fira_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const iconStyle = "text-[24px] mb-6 hover:-translate-y-2 hover:text-blue-600 transition-all";
const firamono = Fira_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
});
const Footer = () => {
	return (
		<div className={"mt-[180px] lg:mt-[50px] px-[25px] pb-4 lg:pb-10 text-gray-600 text-center text-[16px]  " + firamono.className}>
			{/* socials icons */}
			<div className="flex justify-evenly items-center text-gray-600 link-elements lg:fixed lg:bottom-0 lg:flex-col">
				<Link href={github_url}>
					<FiGithub className={iconStyle} />
				</Link>
				<Link href={instagram_url}>
					<FiInstagram className={iconStyle} />
				</Link>
				{/* <Link href={twitter_url}>
          <FiTwitter className={iconStyle} />
        </Link> */}
				{/* <Link href={linkedin_url}>
          <FiLinkedin className={iconStyle} />
        </Link> */}
				<div className="border-r-2 h-[150px] border-gray-600 hidden lg:flex"></div>
			</div>
			{/* email address link */}
			<div className="hidden text-gray-600 link-elements lg:flex lg:flex-col lg:items-center lg:fixed lg:bottom-0 lg:-right-20">
				<Link href={`mailto:ujjwalkirti2000@gmail.com`} className={"rotate-90 -translate-y-[130px] hover:text-blue-600 transition-all " + firamono.className}>
					ujjwalkirti2000@gmail.com
				</Link>
				<div className="border-r-2 h-[150px] border-gray-600 hidden lg:flex"></div>
			</div>
		</div>
	);
};

export default Footer;
