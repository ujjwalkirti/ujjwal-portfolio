import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

function styleBasedOnAlignment(alignment: String) {
  return alignment === "right"
    ? "lg:justify-end lg:text-end"
    : "lg:justify-start lg:text-start";
}

const FeaturedProject = ({ font, alignment, project }) => {
    console.log(alignment)
  return (
    <div
      className={`shadow-xl lg:shadow-none lg:flex lg:relative lg:mb-[120px] lg:h-[400px] rounded-md p-[25px] ${
        font[0].className
      } ${styleBasedOnAlignment(alignment)}`}
    >
      {/* image showing snip of code opened in vscode */}
      <div className="hidden lg:flex lg:flex-col lg:items-center  lg:bg-[#233554] lg:px-2 lg:py-2 lg:rounded-md lg:absolute lg:gap-3 lg:top-0 lg:left-0 lg:w-[50%] lg:z-10">
        <p className="text-[24px] font-semibold text-orange-400">Halcyon</p>
        <p className="text-[14px] text-center dark-grayish-text">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, and more.
        </p>
        <Image
          alt="Project Image"
          src="/wallpaper.jpg"
          height={400}
          width={400}
          className="h-full w-full"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:h-full lg:items-end lg:gap-4 lg:z-10">
        <p className={"aqua " + font[1].className}>Featured Project</p>
        {/* name of project */}
        <p className="grayish-text text-[24px] font-semibold leading-tight">
          Halcyon Theme
        </p>
        {/* description of project */}
        <p className="text-[12px] text-[#A8B2D1] py-[25px] lg:bg-[#112240] lg:px-10 lg:w-[65%] lg:shadow-xl lg:rounded-md">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        {/* tags of project */}
        <div
          className={
            "break-words my-[10px] text-[13px] flex flex-wrap grayish-text "
          }
        >
          <span className="mr-[10px] mb-[5px]">VS Code</span>
          <span className="mr-[10px] mb-[5px]">Sublime Text</span>
          <span className="mr-[10px] mb-[5px]">Atom</span>
          <span className="mr-[10px] mb-[5px]">iTerm2</span>
          <span className="mr-[10px] mb-[5px]">Hyper</span>
        </div>
        {/* Links */}
        <div className="grayish-text flex text-[27px] gap-3">
          <AiFillGithub className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
          <BsLink45Deg className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
