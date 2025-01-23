"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/utils/data";
import CircleNumber from "./ui/CircleNumber";
import ExperienceBox from "./ui/ExperienceBox";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    ).fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "left center", duration: 3 },
      "-=1"
    );
  }, []);

  return (
    <div
      className="flex flex-col items-start mt-20 p-5 md:px-20 px-4 min-h-[50vh] text-white"
      id="black"
      ref={titleRef}
    >
      <div className="flex items-center gap-4 md:gap-10 mb-6 md:mb-10">
        <h1 className="text-[4rem] md:text-[8rem] tracking-tighter font-medium leading-[0.75] -ml-1 md:-ml-2">
          WORKS
        </h1>
        <CircleNumber
          order={1}
          className="aspect-square w-[50px] md:w-[100px] h-full"
          margin="-ml-1"
        />
      </div>
      <div className="w-full">
        {works.map((work) => (
          <ExperienceBox
            key={work.id}
            id={work.id}
            title={work.title}
            location={work.location}
            tech={work.tech}
            link={work.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
