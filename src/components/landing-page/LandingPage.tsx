import React from "react";
import { Fira_Mono, Inter } from "@next/font/google";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import GetInTouch from "./GetInTouch";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import FeaturedProject from "./FeaturedProject";
import NoteWorthyProjectsCard from "./NoteWorthyProjectsCard";
import Footer from "../Footer";

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const tools = [
  "JavaScript (ES6+)",
  "Python",
  "React, Next.js",
  "Firebase",
  "Tailwind CSS",
  "Express",
];

const featuredProjects: Array<Object> = [{}, {}];

const NoteworthyProjects: Array<Object> = [{}, {}, {}];

const LandingPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [removeWrapper, setRemoveWrapper] = useState(false);

  function styleOfWrapper() {
    if (removeWrapper) {
      return "hidden";
    } else {
      return "absolute rounded-lg bg-[#64ffda] h-full w-full bg-opacity-30 z-30";
    }
  }

  return (
    <section className=" min-h-screen  px-[25px]">
      <section className="h-[100px] text-[#64FFDA] flex items-center justify-between px-[25px] relative lg:px-[50px]">
        <p className="text-[24px]">Ujjwal Kirti</p>
        <FaHamburger
          className="text-[34px] lg:hidden"
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
          <div>
            <span className="aqua">01.</span> About
          </div>
          <div>
            <span className="aqua">02.</span> Work
          </div>
          <div>
            <span className="aqua">03.</span> Contact
          </div>
          <Link
            href={`#`}
            className="aqua border-[#64FFDA] border px-6 py-2 rounded-md hover:bg-[#64ffda1a]"
          >
            Resume
          </Link>
        </div>
        {showNavbar && (
          <div
            className={
              "absolute top-0 right-0 w-[100%] min-h-screen z-20 flex justify-end filter backdrop-filter backdrop-blur-sm transition-transform translate-x-3"
            }
          >
            <div className="w-[75%] h-screen bg-[#112240] pt-10">
              <MdOutlineClose
                className="text-[40px]"
                onClick={() => {
                  setShowNavbar(false);
                }}
              />
            </div>
          </div>
        )}
      </section>
      <div className="flex flex-col justify-start items-start pt-[90px] h-screen lg:pt-[40px] lg:px-[100px] lg:mx-auto lg:w-11/12">
        {" "}
        <p
          className={
            "font-normal text-[#64FFDA] text-[16px] lg:ml-[4px] lg:mb-[2px] " +
            firamono.className
          }
        >
          Hi, my name is
        </p>
        <p
          className={
            "text-[40px] lg:text-[80px] font-semibold text-[#CCD6f6] my-[2px] " +
            inter.className
          }
        >
          Ujjwal Kirti.
        </p>
        <p
          className={
            "text-[40px] lg:text-[80px] text-[#8892B0] mt-[5px] font-semibold leading-[0.9] " +
            inter.className
          }
        >
          I build things for the web.
        </p>
        <div
          className={
            "mt-[20px] max-w-[540px] lg:max-w-[720px] text-justify text-[16px] lg:text-[18px] text-[#8892B0] " +
            firamono.className
          }
        >
          <p>
            I am a final-year student at NIT Surat. My significant interest lies
            in software development, with web applications being the primary
            focus. <br />
            Currently, I'm looking for entry level{" "}
            <span className="text-[#64FFDA]">SDE</span> /{" "}
            <span className="text-[#64FFDA]">SWE</span> positions.
          </p>
          <p>
            So if you can help me out or assist me in any other way, let's
            connect!
          </p>
        </div>
        <button
          className={
            "text-[#64FFDA] border border-[#64FFDA] rounded-lg text-[14px] mt-[50px] py-[20px] px-[28px] hover:bg-[#64ffda1a] " +
            firamono.className
          }
        >
          Click here!
        </button>
      </div>
      <section
        className={"pb-10 lg:px-[100px] lg:w-4/5 lg:mx-auto " + inter.className}
      >
        <div className="flex pt-[10px] pb-[40px]">
          <p className="grayish-text text-[26px] font-semibold">
            <span className="aqua text-[18px]">01.</span> About Me
          </p>
          <hr className="dark-grayish-text" />
        </div>
        <div className="dark-grayish-text text-[18px] lg:text-[16px] lg:flex lg:items-center lg:gap-[50px] ">
          <div className="lg:w-3/5 lg:flex lg:flex-col lg:justify-center lg:h-full">
            <p className="mb-[15px] ">
              Hello! My name is Ujjwal and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              when I decided to opt for Computer Science as my fifth subject in
              senior secondary!
            </p>
            <p className="mb-[15px]">
              Fast-forward to today, and I’ve had the experience of developing
              multiple <span className="aqua">full stack web applications</span>
              , several <span className="aqua">APIs</span>, developing websites
              as a <span className="aqua">freelancer</span> and working with a{" "}
              <span className="aqua">student led club</span> to build there
              website. My main focus these days is learning{" "}
              <span className="aqua">Graphql</span>.
            </p>
            <p className="mb-[15px]">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 text-[13px]">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="pb-[20px] font-medium flex text-[15px] items-center gap-2"
                >
                  <AiOutlineCaretRight className="aqua text-[10px]" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  lg:items-start relative mt-10 lg:w-2/5">
            <div
              className="relative z-20"
              onMouseEnter={(e) => {
                setRemoveWrapper(!removeWrapper);
              }}
              onMouseLeave={(e) => {
                setRemoveWrapper(!removeWrapper);
              }}
            >
              <div className={styleOfWrapper()}></div>
              <div className="relative z-20">
                <Image
                  className="rounded-lg w-[279.52px] z-20 h-[479.52px]"
                  alt="Ujjwal Kirti"
                  src={`/me.png`}
                  height={259.52}
                  width={259.52}
                />
                <div
                  className={`h-[479.52px] w-[279.52px] absolute border-2 border-[#64ffda] rounded-lg -z-10 ${
                    removeWrapper ? "top-3 left-3" : "top-6 left-5"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:px-[100px] lg:w-11/12  lg:mx-auto">
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
            view the archive
          </p>
          <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4">
            {NoteworthyProjects.map((project, index) => (
              <NoteWorthyProjectsCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <GetInTouch font={[inter, firamono]} />
      <Footer />
    </section>
  );
};

export default LandingPage;
