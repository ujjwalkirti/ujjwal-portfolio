import React from 'react'
import ToolComponent from './ToolComponent'
import { tools } from '../../constants/data'
import Link from 'next/link'
import Marquee from "react-fast-marquee";


function AboutMe() {
    return (
        <section
            className={
                "flex flex-col items-center gap-10 py-10 lg:px-[100px] px-[25px] mt-10 lg:w-11/12 lg:mx-auto "
            }
            id="about"
        >
            <div className="dark-grayish-text text-[18px] lg:text-[16px] flex flex-col justify-start align-top h-full lg:gap-[20px]">
                <div className="flex">
                    <p className="grayish-text text-[26px] font-semibold">
                        <span className="aqua text-[18px]">01.</span> About Me
                    </p>
                    <hr className="dark-grayish-text" />
                </div>
                <div className=" flex flex-col lg:flex-row lg:items-center gap-5 lg:h-full text-[16px] lg:text-md">
                    <p className="mb-[15px] lg:w-1/2">
                        I love building and optimizing systems that power the internet.
                        Lately, I've been diving deep into <span className="aqua font-semibold">DevOps</span>, exploring automation, cloud infrastructure, and system reliability.
                        My goal is to create seamless deployment pipelines and scalable architectures that keep applications running efficiently.
                    </p>


                    <div className="lg:w-1/2 border-2 border-[#64ffda] px-3 py-5 rounded-lg relative my-4">
                        <p className="absolute -top-[15px] text-xl font-bold aqua bg-[#0a192f] px-2">
                            My Educational Background:
                        </p>
                        <ul className="list-inside mt-4">
                            <li className="list-item">
                                <span className="aqua">Latest Education</span>: Graduate
                            </li>
                            <li className="list-item">
                                <span className="aqua">Degree</span>: Bachelors of Technology
                            </li>
                            <li className="list-item">
                                <span className="aqua">Major</span>: Civil Engineering{" "}
                            </li>
                            <li className="list-item">
                                <span className="aqua">Institute</span>: National Institute of
                                Technology, Surat (SVNIT){" "}
                                <Link
                                    className="aqua hover:underline"
                                    href={`https://svnit.ac.in/`}
                                >
                                    link
                                </Link>
                            </li>
                            <li className="list-item">
                                <span className="aqua">Duration</span>: 2019-2023
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Marquee gradient gradientWidth={20} gradientColor='#0a192f' pauseOnHover className="w-full">
                {tools.map((tool, index) => (
                    <ToolComponent
                        tool={tool}
                        index={index}
                        key={tool.title + index.toString()}
                    />
                ))}
            </Marquee>
        </section>
    )
}

export default AboutMe
