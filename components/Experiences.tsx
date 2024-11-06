"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/utils/data";
import ExperienceBox from "./ui/ExperienceBox";
import CircleNumber from "./ui/CircleNumber";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
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
      {experiences.map((experience) => (
        <ExperienceBox
          key={experience.id}
          id={experience.id}
          title={experience.title}
          location={experience.location}
        />
      ))}
    </div>
  );
};

export default Experiences;
