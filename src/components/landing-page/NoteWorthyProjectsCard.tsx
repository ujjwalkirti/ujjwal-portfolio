import React from "react";
import { BsFolder2Open, BsLink45Deg } from "react-icons/bs";

const NoteWorthyProjectsCard = ({ project }) => {
  return (
    <div className="p-[25px] mb-10 text-left shadow-xl bg-[#112240] rounded-sm hover:-translate-y-3 transition-all cursor-pointer">
      <div className="flex justify-between mb-7">
        <BsFolder2Open className="aqua text-[30px] hover:text-[#64FFDA]" />
        <BsLink45Deg className="grayish-text text-[25px] hover:text-[#64FFDA]" />
      </div>
      <p className="font-semibold grayish-text text-[20px] mb-4 hover:text-[#64FFDA]">
        Integrating Algolia Search with WordPress Multisite
      </p>
      <p className="text-[16px] dark-grayish-text">
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia.
      </p>
      <div className="break-words mt-[25px] mb-[10px] text-[13px] flex flex-wrap grayish-text ">
        <span className="mr-[10px] mb-[5px]">Algolia</span>
        <span className="mr-[10px] mb-[5px]">WordPress</span>
        <span className="mr-[10px] mb-[5px]">PHP</span>
      </div>
    </div>
  );
};

export default NoteWorthyProjectsCard;
