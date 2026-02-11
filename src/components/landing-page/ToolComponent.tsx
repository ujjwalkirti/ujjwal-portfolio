import React from "react";

function ToolComponent({ index, tool }) {
  return (
    <li
      key={index}
      className="py-[10px] font-medium flex flex-col text-xs items-center gap-2 m-2 bg-gray-50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg rounded-md  transform active:scale-90 transition-transform duration-200 cursor-pointer w-52"
    >
      <tool.icon className="text-orange-600 text-3xl" />
      <p className="text-orange-600">{tool.title}</p>
    </li>
  );
}

export default ToolComponent;
