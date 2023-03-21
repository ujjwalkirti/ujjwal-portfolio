import { Fira_Mono, Inter } from "@next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import { languages, otherSkills, skills } from "../data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const TechStack = () => {
  // useEffect(() => {
  //   console.log(skills[0].proficiency.toString() + "px");
  // }, []);
  return (
    <div className="grayish-text mb-10 md:w-10/12 md:mx-auto">
      <p className={"aqua text-center " + firamono.className}>More about me!</p>
      <p className={"text-center font-semibold text-3xl " + inter.className}>
        Frameworks and tools I use
      </p>
      <div className="lg:w-3/5 lg:mx-auto lg:my-4">
        {skills.map((skill, index) => (
          <div key={index} className="px-3">
            <p
              className={
                "text-center font-medium pt-2 pb-1 text-lg " +
                firamono.className
              }
            >
              {skill.name}
            </p>
            {/* <div className="bg-white w-full rounded-full mx-auto h-[20px]">
              <div
                style={{
                  width: skill.proficiency.toString() + "%",
                  backgroundColor: "#8892b0",
                }}
                className="h-[20px] rounded-full"
              ></div>
            </div> */}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {otherSkills.map((skill, index) => (
          <div
            key={index}
            className="w-4/5 mx-auto my-4 bg-[#112240] rounded-t-lg"
          >
            {/* <div className="bg-white  rounded-t-lg">
              <Image
                alt={`${skill.name}'s image`}
                src={skill.imgUrl}
                height={100}
                width={80}
                className=" h-[90px] w-[296px] object-contain px-2"
              />
            </div> */}
            <p
              className={
                "text-lg py-3 text-center font-medium " + firamono.className
              }
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <p
        className={
          "font-medium px-4 text-2xl text-justify md:text-center md:my-5 " +
          inter.className
        }
      >
        Some of the languages that I know!
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="w-4/5 mx-auto my-4 bg-[#112240] rounded-t-lg"
          >
            {/* <div className="bg-white rounded-t-lg py-1">
              <Image
                alt={`${lang.name}'s image`}
                src={lang.imgUrl}
                height={100}
                width={80}
                className="mx-auto object-contain px-2 h-[60px] rounded-t-lg"
              />
            </div> */}
            <p
              className={
                "text-lg flex items-center justify-center py-3 text-center font-medium " +
                firamono.className
              }
            >
              {lang.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
