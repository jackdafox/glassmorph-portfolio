"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  works } from "@/utils/data";
import CircleNumber from "./ui/CircleNumber";
import ProjectCard from "./ui/ProjectCard";
import CategoryPill from "./common/CategoryPill";

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
      className="flex flex-col items-start mt-20 p-5 px-20 min-h-[50vh] text-white"
      id="black"
      ref={titleRef}
    >
      <div className="flex items-center gap-10 mb-10">
        <h1 className="text-[8rem] tracking-tighter font-medium leading-[0.75] -ml-2">
          WORKS
        </h1>
        <CircleNumber
          order={1}
          className="aspect-square w-[100px] h-full"
          margin="-ml-1"
        />
      </div>
      {works.map((work) => (
        <div key={work.id}>
          <ProjectCard title={work.title} year={work.year}>
            <div className="relative h-full">
              <video
                className="object-cover w-full h-full absolute top-0 left-0 z-0"
                src={work.video}
                autoPlay
                loop
                muted
              />
              <div className="relative z-10 flex gap-3 p-3">
                {work.category.map((category, index) => (
                  <CategoryPill category={category} key={index} />
                ))}
              </div>
            </div>
          </ProjectCard>
        </div>
      ))}
    </div>
  );
};

export default Works;
