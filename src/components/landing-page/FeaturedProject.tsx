import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const FeaturedProject = ({ font, project }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`shadow-xl lg:shadow-none lg:flex lg:justify-between lg:gap-2 rounded-md p-[25px] my-5 bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg ${
				isHovered ? "transform active:scale-90 transition-transform duration-200 lg:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg" : ""
			}`}
		>
			<div className={`lg:flex lg:flex-col lg:justify-center  lg:gap-4 w-full lg:w-1/2`}>
				<p className={"aqua text-[14px] rounded-md w-fit " + font[1].className}>Featured Project</p>

				{/* name of project */}
				<p className={` text-[24px] font-semibold leading-tight ${isHovered ? "text-teal-300" : "grayish-text"}`}>{project.title}</p>

				{/* description of project */}
				<ul className={`list-disc pl-5 text-justify lg:text-left text-[14px] text-[#A8B2D1] lg:rounded-md ${isHovered ? "grayish-text" : "dark-grayish-text"}`}>
					{project.desc.long.split(". ").map((line: string, index: number) => (
						<li className="px-2" key={index}>
							{line}
							{index === project.desc.long.split(". ").length - 1 ? "" : "."}
							<br />
						</li>
					))}
				</ul>

				{/* tags of project */}
				<div className={"break-words my-[10px] text-[13px] gap-2 flex flex-wrap grayish-text "}>
					{project.tags.map((tag: string, index: number) => (
						<span key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
							{tag}
						</span>
					))}
				</div>

				{/* Links */}
				<div className="grayish-text flex text-[27px] gap-3">
					{project.github_link && (
						<Link href={project.github_link}>
							<AiFillGithub className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
						</Link>
					)}
					{project.deployed_link && (
						<Link href={project.deployed_link}>
							<BsLink45Deg className="cursor-pointer hover:-translate-y-1 hover:text-[#64ffda] transition-all" />
						</Link>
					)}
				</div>
			</div>

			<div className="hidden lg:block lg:relative w-1/2">
				<Image src={project.image_url} alt={project.title} className="rounded-md" fill style={{ objectFit: "cover", objectPosition: "top" }} />
			</div>
		</div>
	);
};

export default FeaturedProject;
