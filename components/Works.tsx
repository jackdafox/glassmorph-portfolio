"use client";
import React, { useEffect, useRef } from "react";
import CategoryPill from "./common/CategoryPill";
import ProjectCard from "./ui/ProjectCard";
import { works } from "@/utils/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="mt-56 flex flex-col gap-10 px-20" id="white">
      <h1
        className="text-[8rem] font-medium tracking-tighter leading-[0.75] -ml-2 mb-10 cursor-default text-white"
        ref={titleRef}
      >
        EXPERIENCES
      </h1>
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
