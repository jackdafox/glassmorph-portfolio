import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DevelopedMark = () => {
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY < 900 || window.scrollY > 4700) {
        setTextColor("text-white");
      } else {
        setTextColor("text-black");
      }

      setTextColor("text-white");
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${textColor} group flex cursor-pointer text-2xl font-medium tracking-tighter`}
      >
        <p className="m-0 transition duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg]">
          ©
        </p>
        <div
          className={`flex whitespace-nowrap relative overflow-hidden ml-[5px] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]`}
        >
          <p
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full right-[1px] ${textColor}`}
          >
            Code by
          </p>
          <p
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.2em] group-hover:-translate-x-[90px] ${textColor}`}
          >
            Muhammad
          </p>
          <p
            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] left-[215px] group-hover:-translate-x-[90px] ${textColor}`}
          >
            Dzaky
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopedMark;
