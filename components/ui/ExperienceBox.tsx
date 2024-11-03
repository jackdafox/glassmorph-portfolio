"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceBox = ({
  id,
  title,
  location,
}: {
  id: number;
  title: string;
  location: string;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLHeadingElement>(null);

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
        [titleRef.current, locationRef.current],
        {opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
      } flex justify-between w-full py-5 text-5xl tracking-tighter border-white`}
    >
      <h1 ref={titleRef}>{title}</h1>
      <h1 ref={locationRef}>{location}</h1>
    </div>
  );
};

export default ExperienceBox;
