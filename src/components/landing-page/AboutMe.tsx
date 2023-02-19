import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const AboutMe = ({ font }) => {
  const [removeWrapper, setRemoveWrapper] = useState(false);

  function styleOfWrapper() {
    if (removeWrapper) {
      return "hidden";
    } else {
      return "absolute rounded-lg bg-[#64ffda] h-full w-full bg-opacity-30";
    }
  }

  const tools = [
    "JavaScript (ES6+)",
    "Python",
    "React, Next.js",
    "Firebase",
    "Tailwind CSS",
    "Express",
  ];
  return (
    <section className={"pb-10 " + font.className}>
      <div className="flex pt-[10px] pb-[40px]">
        <p className="grayish-text text-[26px] font-semibold">
          <span className="aqua text-[18px]">01.</span> About Me
        </p>
        <hr className="dark-grayish-text" />
      </div>
      <div className="dark-grayish-text text-[18px] font-medium ">
        <p className="mb-[15px]">
          Hello! My name is Ujjwal and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to opt for Computer Science as my fifth subject in senior
          secondary!
        </p>
        <p className="mb-[15px]">
          Fast-forward to today, and I’ve had the experience of developing
          multiple <span className="aqua">full stack web applications</span>,
          several <span className="aqua">APIs</span>, developing websites as a{" "}
          <span className="aqua">freelancer</span> and working with a{" "}
          <span className="aqua">student led club</span> to build there website.
          My main focus these days is learning{" "}
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
        <div className="flex justify-center relative mt-10">
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
            <Image
              className="rounded-lg w-[279.52px] z-20 h-[479.52px]"
              alt="Ujjwal Kirti"
              src={`/me.png`}
              height={259.52}
              width={259.52}
            />
          </div>
          <div
            className={`h-[479.52px] w-[279.52px] absolute border-2 border-[#64ffda] rounded-lg z-10 ${
              removeWrapper ? "top-3 right-5" : "top-6 right-3"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
