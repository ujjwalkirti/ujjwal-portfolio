import React from "react";
import { Fira_Mono, Inter } from "@next/font/google";
import AboutMe from "./AboutMe";
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

const LandingPage = () => {
  return (
    <section className=" min-h-screen  px-[25px]">
      <div className="flex flex-col justify-start items-start pt-[90px] h-screen">
        {" "}
        <p
          className={
            "font-normal text-[#64FFDA] text-[16px] " + firamono.className
          }
        >
          Hi, my name is
        </p>
        <p
          className={
            "text-[40px] font-semibold text-[#CCD6f6] my-[2px] " +
            inter.className
          }
        >
          Ujjwal Kirti.
        </p>
        <p
          className={
            "text-[40px] text-[#8892B0] mt-[5px] font-semibold leading-[0.9] " +
            inter.className
          }
        >
          I build things for the web.
        </p>
        <div
          className={
            "mt-[20px] max-w-[540px] text-justify text-[16px] text-[#8892B0] " +
            inter.className
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
            "text-[#64FFDA] border border-[#64FFDA] rounded-lg text-[14px] mt-[50px] py-[20px] px-[28px] " +
            firamono.className
          }
        >
          Click here!
        </button>
      </div>
      <AboutMe font={inter} />
    </section>
  );
};

export default LandingPage;
