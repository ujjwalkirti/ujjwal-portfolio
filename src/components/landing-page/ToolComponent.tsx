import React from "react";

function ToolComponent({ index, tool }) {
  return (
    <li
      key={index}
      className="py-[20px] font-medium flex flex-col text-[15px] items-center gap-2 shadow-lg border m-3 rounded-md"
    >
      <tool.icon className="aqua text-[40px]" />
      <p>{tool.title}</p>
    </li>
  );
}

export default ToolComponent;
