import React from "react";
import { firamono, inter } from "../data";
import Link from "next/link";
import { linkedin_url } from "@/urls";
import Image from "next/image";

const Header = () => {
  const [removeWrapper, setRemoveWrapper] = React.useState(false);

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center lg:h-[85vh] lg:w-10/12 mx-auto">
      <div className="flex flex-col justify-start lg:justify-center gap-y-4 items-start pt-[20px] lg:px-[100px] lg:mx-auto w-full lg:w-3/5 fade-in-from-bottom px-[25px]">
        {" "}
        <p
          className={
            "font-normal text-[#64FFDA] text-[16px] lg:ml-[4px] lg:mb-[2px] " +
            firamono.className
          }
        >
          👋 Hi, my name is
        </p>
        <p
          className={
            "text-[40px] lg:text-[60px] font-semibold text-[#CCD6f6] my-[2px] " +
            inter.className
          }
        >
          Ujjwal Kirti.
        </p>
        <p
          className={
            "text-[40px] lg:text-[52px] text-[#8892B0] mt-[5px] font-semibold leading-[1.2] lg:leading-none " +
            inter.className
          }
        >
          I build things for the web.🌐
        </p>
        <div
          className={
            "mt-[10px] text-justify text-[14px] lg:text-[16px] text-[#8892B0] " +
            firamono.className
          }
        >
          <p>
            My apps are generally made using{" "}
            <span className="aqua font-semibold">Next.js</span>,{" "}
            <span className="aqua font-semibold">Firebase</span>,{" "}
            <span className="aqua font-semibold">Express</span>,{" "}
            <span className="aqua font-semibold">MongoDB</span>,{" "}
            <span className="aqua font-semibold">React.js</span>, and{" "}
            <span className="aqua font-semibold">Redux</span>.<br />
            And, I am learning Machine learning these days (inspired by{" "}
            <span className="aqua">george hotz</span>).
          </p>
        </div>
        <Link
          href={linkedin_url}
          className={
            "text-[#64FFDA] border border-[#64FFDA] rounded-lg text-[14px] mt-[30px] py-[10px] px-[18px] hover:bg-[#64ffda1a] " +
            firamono.className
          }
        >
          Let's connect!
        </Link>
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
          <div className="relative z-20">
            <Image
              className="rounded-lg w-[279.52px] z-20 h-[279.52px] object-contain"
              alt="Ujjwal Kirti's image"
              src={`/me.png`}
              height={259.52}
              width={259.52}
            />
            <div
              className={`h-[279.52px] w-[279.52px] absolute border-2 border-[#64ffda] top-4   left-4 rounded-lg -z-10 ${
                removeWrapper
                  ? "-translate-y-2 -translate-x-2 duration-300"
                  : "translate-y-2 translate-x-2 duration-300"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
