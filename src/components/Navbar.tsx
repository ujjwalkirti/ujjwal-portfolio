import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaHamburger } from 'react-icons/fa';
import { firamono, navbarOptionStyle, smallNavbarOptionStyle } from '../constants/data';
import { navbarLinks } from '@/constants';
import { resume_url } from '@/constants/urls';
import { MdOutlineClose } from 'react-icons/md';

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
        let handleScroll = () => { };

        const navbarParent = document.getElementById("navbar");
        if (navbarParent) {
            handleScroll = () => {
                const currentScrollPosition = window.scrollY;
                const scrollDirection =
                    currentScrollPosition > previousScrollPosition ? "down" : "up";
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
                className={`h-[80px] px-[25px] text-[#64FFDA] flex items-center justify-between pr-[25px] relative lg:px-[50px] navbar-parent fade-in-from-top bg-opacity-50 backdrop-filter backdrop-blur ${scrollDirection === "up"
                    ? "transform-gpu  transition-transform duration-300 top-0 sticky z-30"
                    : ""
                    }`}
                id="navbar"
            >
                <Link href={`/`}>
                    <Image
                        alt="my logo"
                        src={`/UK.png`}
                        height={60}
                        width={60}
                        priority
                    />
                </Link>
                <FaHamburger
                    className="text-[34px] lg:hidden cursor-pointer transi"
                    onClick={() => {
                        setShowNavbar(true);
                    }}
                />
                <div
                    className={
                        firamono.className +
                        " hidden lg:flex items-center gap-4 text-[14px] grayish-text"
                    }
                >{
                        navbarLinks.map((link, index) => (
                            <div
                                key={index}
                                onClick={() => moveToId(link.id)}
                                className={navbarOptionStyle}
                            >
                                <span className="aqua">0{index + 1}.</span> {link.title}
                            </div>
                        ))
                    }
                    <Link
                        href={resume_url}
                        className="aqua border-[#64FFDA] border px-6 py-2 rounded-md hover:bg-[#64ffda1a]"
                    >
                        Resume
                    </Link>
                </div>
            </section>
            {showNavbar && (
                <div
                    className={
                        "fixed top-0 right-0  w-screen min-h-screen z-50 flex justify-end filter backdrop-filter backdrop-blur-sm "
                    }
                >
                    <div className="w-[75%] px-[15px] md:w-[56%] h-screen bg-[#112240] pt-10 grayish-text flex flex-col ">
                        <div className="flex justify-end h-1/6">
                            <MdOutlineClose
                                className="text-[40px] aqua cursor-pointer transition-all transform-gpu hover:rotate-180 duration-300"
                                onClick={() => {
                                    setShowNavbar(false);
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-4 justify-center h-5/6 pb-10">
                            {" "}
                            {
                                navbarLinks.map((link, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            moveToId(link.id);
                                            setShowNavbar(false);
                                        }}
                                        className={smallNavbarOptionStyle}
                                    >
                                        <span className="aqua">0{index + 1}.</span> {link.title}
                                    </div>
                                ))
                            }

                            <Link
                                href={resume_url}
                                className={
                                    "aqua w-[153.4px] text-center mx-auto border-[#64FFDA] text-[14px] border px-[50px] py-[18px] mt-[38px] rounded-md hover:bg-[#64ffda1a] " +
                                    firamono.className
                                }
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
