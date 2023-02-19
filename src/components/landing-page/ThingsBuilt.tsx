import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";

const featuredProjects: Array<Object> = [{}, {}, {}, {}, {}];

const NoteworthyProjects: Array<Object> = [{}, {}, {}, {}];

const ThingsBuilt = ({ font }) => {
  return (
    <section className="py-10">
      <div className="flex pt-[10px] pb-[20px]">
        <p
          className={
            "grayish-text text-[26px] mt-[10px] mb-[20px] font-semibold " +
            font[0].className
          }
        >
          <span className="aqua text-[18px]">02.</span> Some Things I've Built
        </p>
        <hr className="dark-grayish-text" />
      </div>

      {/* featured project section */}
      <div className="pb-[60px]">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={"shadow-xl mb-10 rounded-md p-[25px] " + font[1].className}
          >
            <p className={"aqua " + font[0].className}>Featured Project</p>
            {/* name of project */}
            <p className="grayish-text text-[24px] font-semibold leading-tight">
              Halcyon Theme
            </p>
            {/* description of project */}
            <p className="text-[16px] text-[#A8B2D1] py-[25px]">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
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
              <AiFillGithub className="cursor-pointer" />
              <BsLink45Deg className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* other Projects section */}
      <div className={"text-center pb-[60px] " + font[0].className}>
        <p className="grayish-text text-[24px] mb-[10px] font-semibold">
          Other Noteworthy Projects
        </p>
        <p className={"text-[14px] mb-[50px] aqua " + font[1].className}>
          view the archive
        </p>
        {NoteworthyProjects.map((project, index) => (
          <div
            key={index}
            className="p-[25px] mb-10 text-left shadow-xl bg-[#112240] rounded-sm"
          >
            <div className="flex justify-between mb-7">
              <BsFolder2Open className="aqua text-[30px]" />
              <BsLink45Deg className="grayish-text text-[25px]" />
            </div>
            <p className="font-semibold grayish-text text-[20px] mb-4">
              Integrating Algolia Search with WordPress Multisite
            </p>
            <p className="text-[16px] dark-grayish-text">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia.
            </p>
            <div className="break-words mt-[25px] mb-[10px] text-[13px] flex flex-wrap grayish-text ">
              <span className="mr-[10px] mb-[5px]">Algolia</span>
              <span className="mr-[10px] mb-[5px]">WordPress</span>
              <span className="mr-[10px] mb-[5px]">PHP</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThingsBuilt;
