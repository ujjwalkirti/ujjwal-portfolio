import React, { useEffect, useRef } from "react";
import { Fira_Mono, Inter } from "@next/font/google";
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
import { featuredProjects, NoteworthyProjects } from "../data";

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

const navbarOptionStyle = "hover:text-[#64ffda] cursor-pointer";
const smallNavbarOptionStyle =
  "hover:text-[#64ffda] cursor-pointer flex flex-col items-center text-[18px] px-[20px] pb-[20px] pt-[3px] " +
  firamono.className;

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
  const [removeWrapper, setRemoveWrapper] = useState(false);
  const about_ref = useRef(null);
  const work_ref = useRef(null);
  const contact_ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-from-bottom");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (about_ref.current) {
      observer.observe(about_ref.current);
    }
    if (work_ref.current) {
      observer.observe(work_ref.current);
    }
    if (contact_ref.current) {
      observer.observe(contact_ref.current);
    }
    return () => {
      if (about_ref.current) {
        observer.unobserve(about_ref.current);
      }
      if (work_ref.current) {
        observer.unobserve(work_ref.current);
      }
      if (contact_ref.current) {
        observer.unobserve(contact_ref.current);
      }
    };
  }, []);

  function styleOfWrapper() {
    if (removeWrapper) {
      return "hidden";
    } else {
      return "absolute rounded-lg bg-[#64ffda] h-full w-full bg-opacity-30 z-30";
    }
  }

  return (
    <section className=" min-h-screen  ">
      <section className="h-[100px] px-[25px] text-[#64FFDA] flex items-center justify-between pr-[25px] relative lg:px-[50px] navbar-parent fade-in-from-top">
        <Link href={`/`}>
          <Image alt="my logo" src={`/UK.png`} height={60} width={60} />
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
          <Link
            href={`https://drive.google.com/file/d/1Yeheadg5C0nkEJ2_ZqSJPyibcW8By3lz/view?usp=share_link`}
            className="aqua border-[#64FFDA] border px-6 py-2 rounded-md hover:bg-[#64ffda1a]"
          >
            Resume
          </Link>
        </div>
        {showNavbar && (
          <div
            className={
              "absolute top-0 right-0  w-screen min-h-screen z-20 flex justify-end filter backdrop-filter backdrop-blur-sm "
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
                  href={`https://drive.google.com/file/d/1Yeheadg5C0nkEJ2_ZqSJPyibcW8By3lz/view?usp=share_link`}
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
      <div className="flex flex-col justify-start items-start pt-[90px] h-screen lg:pt-[40px] lg:px-[100px] lg:mx-auto lg:w-11/12 fade-in-from-bottom px-[25px]">
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
        <Link
          href={`https://www.linkedin.com/in/ujjwal-kirti/`}
          className={
            "text-[#64FFDA] border border-[#64FFDA] rounded-lg text-[14px] mt-[50px] py-[20px] px-[28px] hover:bg-[#64ffda1a] " +
            firamono.className
          }
        >
          Click here!
        </Link>
      </div>

      {/* 
        This marks the beginning of about section
      */}

      <section
        className={
          "pb-10 lg:px-[100px] px-[25px] lg:w-4/5 lg:mx-auto " + inter.className
        }
        ref={about_ref}
        id="about"
      >
        <div className="flex pt-[10px] pb-[20px]">
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
          <div className="flex justify-center lg:items-start relative mt-10 lg:w-2/5">
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
                  alt="Ujjwal Kirti's image"
                  src={`https://firebasestorage.googleapis.com/v0/b/fir-react-native-expo-bbbae.appspot.com/o/me.jpg?alt=media&token=69b3f08f-1df9-4125-a94e-4c017acef623`}
                  height={259.52}
                  width={259.52}
                />
                <div
                  className={`h-[479.52px] w-[279.52px] absolute border-2 border-[#64ffda] top-5 left-4 rounded-lg -z-10 ${
                    removeWrapper
                      ? "-translate-y-2 -translate-x-2 duration-300"
                      : "translate-y-2 translate-x-2 duration-300"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        works section 
      */}

      <section
        className="py-10 px-[25px] lg:px-[100px] lg:w-11/12  lg:mx-auto"
        id="work"
        ref={work_ref}
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
          <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4">
            {NoteworthyProjects.map((project, index) => (
              <NoteWorthyProjectsCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* <TechStack /> */}
      <div id="contact" ref={contact_ref}>
        <GetInTouch font={[inter, firamono]} />
      </div>
      <Footer />
    </section>
  );
};

export default LandingPage;
