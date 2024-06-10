import React from "react";

const TodoListing = ({ leftText, rightText }) => {
  return (
    <div className="px-4 text-white text-md justify-between flex flex-row w-[80%] bg-blue-500 h-[60px] rounded-2xl">
      <div className="font-opensans h-full flex items-center ">{leftText}</div>
      <div className="h-full flex items-center">{rightText}</div>
    </div>
  );
};

export default TodoListing;
