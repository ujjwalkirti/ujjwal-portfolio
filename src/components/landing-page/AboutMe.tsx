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

  return (
    <section className={"pb-10 " + font.className}>
      <div className="flex pt-[10px] pb-[40px]">
        <p className="grayish-text text-[26px] font-semibold">
          <span className="aqua text-[22px]">01.</span> About Me
        </p>
        <hr className="dark-grayish-text" />
      </div>
      <div className="dark-grayish-text text-[18px] font-medium ">
        <p className="mb-[15px]">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="mb-[15px]">
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p className="mb-[15px]">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="grid grid-cols-2 text-[13px]">
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
          <li className="mb-[10px] pb-[20px] font-medium flex items-center gap-2">
            <AiOutlineCaretRight className="aqua" />
            JavaScript (ES6+)
          </li>
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
