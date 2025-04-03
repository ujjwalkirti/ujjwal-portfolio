import { experiences } from "@/constants";
import React from "react";
import ExperienceCard from "./ExperienceCard";


const ExperienceList = () => {
    return (
        <ol className="">
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
            ))}
        </ol>
    );
};

export default ExperienceList;
