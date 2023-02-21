import Link from "next/link";
import React from "react";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const NoteWorthyProjectsCard = ({ project }) => {
  return (
    <div className="p-[25px] mb-10 text-left shadow-xl bg-[#112240] rounded-sm hover:-translate-y-3 transition-all cursor-pointer flex flex-col justify-between">
      <div className="flex justify-between mb-7">
        <BsFolder2Open className="aqua text-[30px] hover:text-[#64FFDA]" />
        <div className="flex gap-4">
          {" "}
          {project.github_link && (
            <Link href={project.github_link}>
              <FiGithub className="grayish-text text-[25px] hover:text-[#64FFDA]" />
            </Link>
          )}
          {project.deployed_link && (
            <Link href={project.deployed_link}>
              <BsLink45Deg className="grayish-text text-[25px] hover:text-[#64FFDA]" />
            </Link>
          )}
        </div>
      </div>
      <p className="font-semibold grayish-text text-[20px] mb-4 hover:text-[#64FFDA]">
        {project.title}
      </p>
      <p className="text-[16px] dark-grayish-text">{project.desc}</p>
      <div className="break-words mt-[25px] mb-[10px] text-[13px] flex flex-wrap grayish-text ">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="mr-[10px] mb-[5px]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoteWorthyProjectsCard;
