import React from "react";

const DevelopedMark = () => {
  return (
    <div>
      <div className="group flex cursor-pointer text-2xl font-medium tracking-tighter">
        <p className="m-0 transition duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg]">
          ©
        </p>
        <div className="flex whitespace-nowrap relative overflow-hidden ml-[5px] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]">
          <p className="relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full right-[1px]">
            Code by
          </p>
          <p className="relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.2em] group-hover:-translate-x-[90px]">
            Muhammad
          </p>
          <p className="absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] left-[215px] group-hover:-translate-x-[90px]">
            Dzaky
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopedMark;
