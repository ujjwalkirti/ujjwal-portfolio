import { List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'
import { LuExternalLink } from 'react-icons/lu';

interface ExperienceCardProps {
    exp: {
        title: string;
        company: string;
        website: string;
        date: string;
        description: string[];
        technologies: string[];
    }
}
function ExperienceCard({ exp }: ExperienceCardProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="mb-12">
            <Link href={exp.website} target="_blank" rel="noopener noreferrer" aria-label={exp.title} title={exp.title} className="group relative grid px-3 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:cursor-pointer">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={exp.date}
                >
                    {exp.date}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className={`font-medium leading-snug  ${isHovered ? 'text-teal-300 focus-visible:text-teal-300' : 'text-slate-200'}`}>
                        <span className="lg:inline-flex items-baseline font-semibold leading-tight  text-xl">
                            <span>{exp.title} ·{" "}</span>
                            <span className="inline-block ml-1">{exp.company}</span> <span>{exp.website ? <Link href={exp.website}><LuExternalLink className="inline-block ml-2" /> </Link> : ""}</span>
                        </span>
                    </h3>
                    <ul className={`mt-2 text-sm list-disc pl-5 leading-normal ${isHovered ? 'grayish-text' : 'dark-grayish-text'}`}>
                        {exp.description.map((desc, descIndex) => (
                            <li className='my-2' key={descIndex}>{desc}</li>
                        ))}
                    </ul>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {exp.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {tech}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Link>
        </li>
    )
}

export default ExperienceCard
