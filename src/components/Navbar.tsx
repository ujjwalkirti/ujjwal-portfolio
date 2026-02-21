import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { pressStart2P, navbarOptionStyle, smallNavbarOptionStyle } from "../constants/data";
import { navbarLinks } from "@/constants";
import { resume_url } from "@/constants/urls";
import { MdOutlineClose } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

const moveToId = (id: string): void => {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	}
};

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("down");

	useEffect(() => {
		let handleScroll = () => {};

		const navbarParent = document.getElementById("navbar");
		if (navbarParent) {
			handleScroll = () => {
				const currentScrollPosition = window.scrollY;
				const scrollDirection = currentScrollPosition > previousScrollPosition ? "down" : "up";
				setScrollDirection(scrollDirection);
				previousScrollPosition = currentScrollPosition;
			};

			let previousScrollPosition = window.scrollY;
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav>
			<section
				className={`h-[80px] px-[25px] text-orange-600 flex items-center justify-end pr-[25px] relative lg:px-[50px] navbar-parent fade-in-from-top bg-opacity-50 backdrop-filter backdrop-blur ${
					scrollDirection === "up" ? "transform-gpu  transition-transform duration-300 top-0 sticky z-30" : ""
				}`}
				id="navbar"
			>
				<FaHamburger
					className="text-[34px] lg:hidden cursor-pointer transi"
					onClick={() => {
						setShowNavbar(true);
					}}
				/>
				<div className={pressStart2P.className + " hidden lg:flex items-center gap-4 text-xs text-gray-900"}>
					{navbarLinks.map((link, index) => {
						if (link.link) {
							return (
								<Link href={link.link} key={link.id} className={navbarOptionStyle}>
									<span className="text-orange-600">0{index + 1}.</span> {link.title}
								</Link>
							);
						}
						return (
							<div
								key={link.id}
								className={navbarOptionStyle}
								onClick={() => {
									// check if current page is homepage
									if (window.location.pathname === "/") {
										moveToId(link.id);
									} else {
										window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/#${link.id}`;
									}
									setShowNavbar(false);
								}}
							>
								<span className="text-orange-600">0{index + 1}.</span> {link.title}
							</div>
						);
					})}
					<Link href={resume_url} className="text-orange-600 border-orange-600 border px-6 py-2 rounded-md hover:bg-orange-50">
						Resume
					</Link>
				</div>
			</section>
			{showNavbar && (
				<div className={"fixed top-0 right-0  w-screen min-h-screen z-50 flex justify-end filter backdrop-filter backdrop-blur-sm "}>
					<div className="w-[75%] px-[15px] md:w-[56%] h-screen bg-gray-50 pt-10 text-gray-900 flex flex-col ">
						<div className="flex justify-end h-1/6">
							<MdOutlineClose
								className="text-[40px] text-orange-600 cursor-pointer transition-all transform-gpu hover:rotate-180 duration-300"
								onClick={() => {
									setShowNavbar(false);
								}}
							/>
						</div>
						<div className="flex flex-col gap-4 justify-center h-5/6 pb-10">
							{" "}
							{navbarLinks.map((link, index) => {
								if (link.link) {
									return (
										<Link href={link.link} key={link.id} className={smallNavbarOptionStyle}>
											<span className="text-orange-600">0{index + 1}.</span> {link.title} <LuExternalLink className="text-orange-600" />
										</Link>
									);
								} else {
									return (
										<div
											key={link.id}
											onClick={() => {
												// check if current page is homepage
												if (window.location.pathname === "/") {
													moveToId(link.id);
												} else {
													window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/#${link.id}`;
												}
												setShowNavbar(false);
											}}
											className={smallNavbarOptionStyle}
										>
											<span className="text-orange-600">0{index + 1}.</span> {link.title} <LuExternalLink className="text-orange-600" />
										</div>
									);
								}
							})}
							<Link href={resume_url} className={"text-orange-600 flex items-center w-[153.4px] text-center mx-auto border-orange-600 text-xs border px-[50px] py-[18px] mt-[38px] rounded-md hover:bg-orange-50 " + pressStart2P.className}>
								Resume <IoDocumentTextOutline className="text-orange-600" />
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
