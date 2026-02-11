import Link from "next/link";
import React from "react";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { pressStart2P } from "../../constants/data";

const NoteWorthyProjectsCard = ({ project }) => {
  return (
    <div
      className={
        "py-[25px] px-4 mb-2 lg:mb-0 text-left shadow-xl bg-gray-50 rounded-sm lg:hover:-translate-y-3 transition-all cursor-pointer flex flex-col justify-between " +
        pressStart2P.className
      }
    >
      <div className="flex justify-between mb-7">
        <BsFolder2Open className="text-blue-600 text-[30px] hover:text-blue-600" />
        <div className="flex gap-4">
          {" "}
          {project.github_link && (
            <Link href={project.github_link}>
              <FiGithub className="text-gray-900 text-[25px] hover:text-blue-600" />
            </Link>
          )}
          {project.deployed_link && (
            <Link href={project.deployed_link}>
              <BsLink45Deg className="text-gray-900 text-[25px] hover:text-blue-600" />
            </Link>
          )}
        </div>
      </div>
      <p className="font-semibold text-gray-900 text-sm mb-4 hover:text-blue-600">
        {project.title}
      </p>
      <p className="text-xs leading-relaxed text-gray-600">{project.desc}</p>
      <div className="break-words mt-[25px] mb-[10px] text-xs flex flex-wrap text-gray-900 gap-2">
        {project.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium leading-5 text-blue-600 "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoteWorthyProjectsCard;
