import React from "react";

const CategoryPill = ({category} : {category: string}) => {
  return (
    <div className="border-[1px] border-black px-5 py-2 w-fit h-fit rounded-full hover:bg-black hover:text-white transition-all duration-150 ease-[cubic-bezier(0.76,0,0.24,1)]">
      <h1 className="font-light tracking-tighter text-sm cursor-pointer">{category}</h1>
    </div>
  );
};

export default CategoryPill;
