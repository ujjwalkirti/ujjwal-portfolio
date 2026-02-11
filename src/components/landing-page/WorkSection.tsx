import React from 'react'
import { featuredProjects, pressStart2P, NoteworthyProjects } from '../../constants/data';
import NoteWorthyProjectsCard from './NoteWorthyProjectsCard';
import Link from 'next/link';
import FeaturedProject from './FeaturedProject';

function WorkSection() {
    return (
        <section
            className="py-10 px-[15px] lg:px-[100px] lg:w-11/12  lg:mx-auto"
            id="work"
        >
            <div className="flex pt-[10px] pb-[20px]">
                <p
                    className={
                        "text-gray-900 text-lg mt-[10px] mb-[20px] font-semibold " +
                        pressStart2P.className
                    }
                >
                    <span className="text-orange-600 text-xs">03.</span> Some Things I've Built
                </p>
                <hr className="dark-text-gray-900" />
            </div>

            {/* featured project section */}
            <div className="pb-[60px] lg:flex lg:flex-col lg:gap-4">
                {featuredProjects.map((project, index) => {
                    return (
                        <FeaturedProject
                            key={index}
                            font={[pressStart2P, pressStart2P]}
                            project={project}
                        />
                    );
                })}
            </div>

            {/* other Projects section */}
            <div className={"text-center pb-[60px] " + pressStart2P.className}>
                <p className="text-gray-900 text-base mb-[10px] font-semibold">
                    Other Noteworthy Projects
                </p>
                <p className={"text-xs mb-[50px] text-orange-600 " + pressStart2P.className}>
                    <Link href={`/view-the-archive`} className="hover:underline">
                        view the archive
                    </Link>
                </p>
                <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4">
                    {NoteworthyProjects.map((project, index) => (
                        <NoteWorthyProjectsCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkSection
