import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { monsterrat } from "../data";

function styleBasedOnAlignment(alignment: String) {
  if (alignment === "right") {
    return "lg:justify-end lg:text-end";
  } else {
    return "lg:justify-start lg:text-start";
  }
}

const FeaturedProject = ({ font, alignment, project }) => {
  return (
    <div
      className={`shadow-xl lg:shadow-none lg:flex   lg:mb-[120px] lg:min-h-[400px] rounded-md p-[25px] ${" "} ${
        monsterrat.className
      }${" "} ${styleBasedOnAlignment(alignment)}`}
    >
      {/* image showing snip of code opened in vscode */}
      <div className="hidden lg:flex lg:flex-col lg:items-center  lg:bg-[#233554] lg:px-2 lg:py-2 lg:rounded-md  lg:gap-3 lg:w-3/5">
        <p
          className={
            "text-[24px] font-semibold text-orange-400 " + font[0].className
          }
        >
          {project.title}
        </p>
        <p className="text-[14px] text-center dark-grayish-text">
          {project.desc.short}
        </p>
        <Image
          alt="Project Image"
          src={project.image_url}
          height={400}
          width={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:relative  lg:items-end  lg:gap-4 lg:w-2/5">
        <p className={"aqua " + font[1].className}>Featured Project</p>
        {/* name of project */}
        <p className="grayish-text text-[24px] font-semibold leading-tight">
          {project.title}
        </p>
        {/* description of project */}
        <p className="text-justify lg:text-left text-[14px] text-[#A8B2D1] py-[25px] lg:bg-[#112240] lg:px-3 lg:w-[600px] lg:shadow-xl lg:rounded-md">
          {project.desc.long}
        </p>
        {/* tags of project */}
        <div
          className={
            "break-words my-[10px] text-[13px] flex flex-wrap grayish-text "
          }
        >
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="mr-[10px] mb-[5px] bg-gray-500 px-2 py-1 rounded-md text-white "
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="grayish-text flex text-[27px] gap-3">
          <Link href={project.github_link}>
            <AiFillGithub className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
          </Link>
          {project.deployed_link && (
            <Link href={project.deployed_link}>
              <BsLink45Deg className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
