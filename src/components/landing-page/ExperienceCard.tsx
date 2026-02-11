import { List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

interface ExperienceDescription {
    text: string;
    link?: string;
}

interface ExperienceCardProps {
    exp: {
        title: string;
        company: string;
        website: string;
        date: string;
        description: ExperienceDescription[];
        technologies: string[];
    }
}
function ExperienceCard({ exp }: ExperienceCardProps) {
    return (
		<li className="mb-12">
			<div className="group relative grid px-3 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

				<div className="z-10">
					<div className="font-medium leading-snug text-gray-900 flex justify-between items-center">
						<h3 className="lg:inline-flex items-baseline font-semibold leading-tight text-xl">
							<span>{exp.title} · </span>
							<Link href={exp.website} target="_blank" rel="noopener noreferrer" aria-label={exp.company} title={exp.company} className="inline-block ml-1 hover:text-orange-600">
								{exp.company}
								{exp.website && <LuExternalLink className="inline-block ml-2" />}
							</Link>
						</h3>

						<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2" aria-label={exp.date}>
							{exp.date}
						</header>
					</div>
					<ul className="mt-2 text-sm list-disc pl-5 leading-relaxed text-gray-600">
						{exp.description.map((desc, descIndex) => (
							<li className="my-2" key={descIndex}>
								{desc.text}
								{desc.link && (
									<Link href={desc.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-orange-600 hover:underline" onClick={(e) => e.stopPropagation()}>
										<LuExternalLink className="inline-block w-3 h-3" />
									</Link>
								)}
							</li>
						))}
					</ul>
					<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
						{exp.technologies.map((tech, techIndex) => (
							<li key={techIndex} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-orange-50 px-2 py-1 text-xs font-medium leading-5 text-orange-600">{tech}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}

export default ExperienceCard
