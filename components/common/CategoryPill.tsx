import React from "react";

const CategoryPill = ({ category }: { category: string }) => {
  return (
    <div className="border-[1px] border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-150 ease-[cubic-bezier(0.76,0,0.24,1)]">
      <h1 className="font-light tracking-tighter text-sm cursor-pointer">
        {category}
      </h1>
    </div>
  );
};

export default CategoryPill;
