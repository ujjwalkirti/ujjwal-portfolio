import React, { useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import GetInTouch from "./GetInTouch";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import FeaturedProject from "./FeaturedProject";
import NoteWorthyProjectsCard from "./NoteWorthyProjectsCard";
import Footer from "../Footer";
import {
  featuredProjects,
  inter,
  navbarOptionStyle,
  NoteworthyProjects,
  smallNavbarOptionStyle,
  tools,
} from "../data";
import { firamono } from "@/components/data";
import { linkedin_url, resume_url } from "@/urls";
import ToolComponent from "./ToolComponent";
import Header from "./Header";

const moveToClass = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const LandingPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let handleScroll = () => {};

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
    <section className=" min-h-screen">
      {/* Navbar section */}
      <section
        className={`h-[80px] px-[25px] text-[#64FFDA] flex items-center justify-between pr-[25px] relative lg:px-[50px] navbar-parent fade-in-from-top bg-[#0a192f] bg-opacity-50 backdrop-filter backdrop-blur ${
          scrollDirection === "up"
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
        >
          <div
            onClick={() => moveToClass("about")}
            className={navbarOptionStyle}
          >
            <span className="aqua">01.</span> About
          </div>
          <div
            onClick={() => moveToClass("work")}
            className={navbarOptionStyle}
          >
            <span className="aqua">02.</span> Work
          </div>
          <div
            onClick={() => moveToClass("contact")}
            className={navbarOptionStyle}
          >
            <span className="aqua">03.</span> Contact
          </div>
          {/* <Link href="/blogs" className={navbarOptionStyle}>
            <span className="aqua">04.</span> Blogs
          </Link> */}
          <Link
            href={`https://drive.google.com/file/d/1I-JqJGe2U9PBaO_GLAcwH_tdCWlc7EUI/view?usp=sharing`}
            className="aqua border-[#64FFDA] border px-6 py-2 rounded-md hover:bg-[#64ffda1a]"
          >
            Resume
          </Link>
        </div>
      </section>

      <Header />

      {/*
        This marks the beginning of about section
      */}

      <section
        className={
          "flex flex-col lg:flex-row items-start gap-10 pb-10 lg:px-[100px] px-[25px] mt-10 lg:w-11/12 lg:mx-auto " +
          inter.className
        }
        id="about"
      >
        <div className="dark-grayish-text text-[18px] lg:text-[16px] flex flex-col justify-start align-top h-full lg:gap-[20px] lg:w-1/2">
          <div className="flex mt-10">
            <p className="grayish-text text-[26px] font-semibold">
              <span className="aqua text-[18px]">01.</span> About Me
            </p>
            <hr className="dark-grayish-text" />
          </div>
          <div className=" lg:flex lg:flex-col lg:justify-center lg:h-full text-[16px] lg:text-md">
            <p className="mb-[15px] ">
              Hello! My name is Ujjwal and I enjoy creating things that live on
              the internet. I recently stumbled across the youtube channel
              called{" "}
              <Link href={"#"} className="hover:underline aqua">
                <span className="aqua">george hotz archive</span>
              </Link>{" "}
              where his streams are uploaded.<br/> I became fascinated by his
              approach and have decided to deep dive into world of ML using
              Tinygrad (ML Library).
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2  text-[13px] w-full lg:w-1/2">
          {tools.map((tool, index) => (
            <ToolComponent
              tool={tool}
              index={index}
              key={tool.title + index.toString()}
            />
          ))}
        </ul>
      </section>

      {/*
        works section
      */}

      <section
        className="py-10 px-[15px] lg:px-[100px] lg:w-11/12  lg:mx-auto"
        id="work"
      >
        <div className="flex pt-[10px] pb-[20px]">
          <p
            className={
              "grayish-text text-[26px] mt-[10px] mb-[20px] font-semibold " +
              inter.className
            }
          >
            <span className="aqua text-[18px]">02.</span> Some Things I've Built
          </p>
          <hr className="dark-grayish-text" />
        </div>

        {/* featured project section */}
        <div className="pb-[60px] lg:flex lg:flex-col">
          {featuredProjects.map((project, index) => {
            let alignment = "right";
            if (index % 2 === 0) {
              alignment = "right";
            } else {
              alignment = "left";
            }

            return (
              <FeaturedProject
                key={index}
                font={[firamono, inter]}
                project={project}
                alignment={alignment}
              />
            );
          })}
        </div>

        {/* other Projects section */}
        <div className={"text-center pb-[60px] " + inter.className}>
          <p className="grayish-text text-[24px] mb-[10px] font-semibold">
            Other Noteworthy Projects
          </p>
          <p className={"text-[14px] mb-[50px] aqua " + firamono.className}>
            <Link href={`/view-the-archive`} className="hover:underline">
              view the archive
            </Link>
          </p>
          <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4">
            {NoteworthyProjects.map((project, index) => (
              <NoteWorthyProjectsCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* <TechStack /> */}
      <div id="contact">
        <GetInTouch font={[inter, firamono]} />
      </div>
      <Footer />
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
              <div
                onClick={() => {
                  moveToClass("about");
                  setShowNavbar(false);
                }}
                className={smallNavbarOptionStyle}
              >
                <span className="aqua">01.</span> About
              </div>
              <div
                onClick={() => {
                  moveToClass("work");
                  setShowNavbar(false);
                }}
                className={smallNavbarOptionStyle}
              >
                <span className="aqua">02.</span> Work
              </div>
              <div
                onClick={() => {
                  moveToClass("contact");
                  setShowNavbar(false);
                }}
                className={smallNavbarOptionStyle}
              >
                <span className="aqua">03.</span> Contact
              </div>
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
    </section>
  );
};

export default LandingPage;
