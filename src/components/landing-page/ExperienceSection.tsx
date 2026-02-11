import React from 'react'
import { inter } from '../../constants/data'
import ExperienceList from './ExperienceList'

function ExperienceSection() {
    return (
        <section
            className="py-10 px-[15px] lg:px-[100px] lg:w-11/12  lg:mx-auto"
            id="experience"
        >
            <div className="flex pt-[10px] pb-[20px]">
                <p
                    className={
                        "text-gray-900 text-[26px] mt-[10px] mb-[20px] font-semibold " +
                        inter.className
                    }
                >
                    <span className="text-blue-600 text-[18px]">02.</span> Experience
                </p>
                <hr className="dark-text-gray-900" />
            </div>
            <ExperienceList />
        </section>
    )
}

export default ExperienceSection
