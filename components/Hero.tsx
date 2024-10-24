import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-end">
      <div className="flex flex-col justify-start p-5 gap-5">
        <h1 className="font-[500] text-[#807979] text-3xl tracking-tighter">
          Multimedia Student @ Universiti Malaya
        </h1>
        <div className="flex text-[8rem] gap-10 leading-[0.75] -ml-2 font-[500] text-black tracking-tighter">
          <span>
            MUHAMMAD
          </span>
          <span>
            DZAKY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
