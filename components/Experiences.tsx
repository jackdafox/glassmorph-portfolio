"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleNumber from "./ui/CircleNumber";
import { experiences } from "@/utils/data";
import ProjectCard from "./ui/ProjectCard";
import CategoryPill from "./common/CategoryPill";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
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
      className="mt-20 md:mt-56 flex flex-col gap-5 md:gap-10 px-4 md:px-20"
      id="white"
    >
      <div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 md:mb-5"
        ref={titleRef}
      >
        <div className="flex items-center md:gap-10 gap-2">
          <h1 className="text-4xl md:text-[8rem] font-medium tracking-tighter leading-[0.75] cursor-default text-white">
            EXPERIENCES
          </h1>
          <CircleNumber
            order={2}
            className="aspect-square w-[36px] md:w-[100px] h-full"
            margin="md:-ml-1"
          />
        </div>
      </div>
      <div
        ref={lineRef}
        className="bg-white h-[2px] md:h-[15px] w-full transform scale-x-0"
      />
      {experiences.map((experience) => (
        <div key={experience.id} className="w-full">
          <ProjectCard title={experience.title} year={experience.year}>
            <div className="relative h-full">
              <video
                className="object-cover w-full h-full absolute top-0 left-0 z-0"
                src={experience.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative z-10 flex flex-wrap gap-2 md:gap-3 p-2 md:p-3">
                {experience.category.map((category, index) => (
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

export default Experiences;
