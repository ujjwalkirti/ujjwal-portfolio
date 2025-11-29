import Link from "next/link";
import React from "react";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { monsterrat } from "../../constants/data";

const NoteWorthyProjectsCard = ({ project }) => {
  return (
		<div className={"py-[25px] px-4 mb-2 lg:mb-0 text-left shadow-xl bg-[#112240] rounded-sm lg:hover:-translate-y-3 transition-all cursor-pointer flex flex-col justify-between "}>
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
			<p className={"font-semibold grayish-text text-[20px] mb-4 hover:text-[#64FFDA] " + monsterrat.className}>{project.title}</p>
			<p className="text-[16px] dark-grayish-text">{project.desc}</p>
			<div className="break-words mt-[25px] mb-[10px] text-[13px] flex flex-wrap grayish-text gap-2">
				{project.tags.map((tag: string, index: number) => (
					<span key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
						{tag}
					</span>
				))}
			</div>
		</div>
  );
};

export default NoteWorthyProjectsCard;
