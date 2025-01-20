"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceBox = ({
  id,
  title,
  location,
  tech,
}: {
  id: number;
  title: string;
  location: string;
  tech: string[];
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLHeadingElement>(null);
  const techRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { borderColor: "transparent" },
        {
          borderColor: "white",
          stagger: 0.2,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        [titleRef.current, techRef.current, locationRef.current],
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`${
        id < 2 ? "border-y-[1px]" : "border-b-[1px]"
      } flex justify-between w-full py-5 text-3xl md:text-5xl leading-[0.75] tracking-tighter border-white gap-4 md:gap-0`}
    >
      <div className="flex gap-3 md:gap-5">
        <h1 ref={titleRef}>{title}</h1>
        <div
          className="hidden lg:flex md:flex-wrap gap-2 md:gap-3"
          ref={techRef}
        >
          {tech.map((t, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-sm md:text-xl tracking-tight bg-white px-2 md:px-3 py-1 text-blue-900 rounded-full border hover:border-white hover:bg-transparent hover:text-white transition-all hover:cursor-pointer"
            >
              <h1>{t}</h1>
            </div>
          ))}
        </div>
      </div>
      <h1 ref={locationRef} className="text-right">
        {location}
      </h1>
    </div>
  );
};

export default ExperienceBox;
