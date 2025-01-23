"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExperienceBox = ({
  id,
  title,
  location,
  link,
  tech,
}: {
  id: number;
  title: string;
  location: string;
  link: string;
  tech: string[];
}) => {
  const boxRef = useRef<HTMLAnchorElement>(null);
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
        [titleRef.current, techRef.current, locationRef.current?.children],
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Link
      href={link}
      ref={boxRef}
      className={`${
        id < 2 ? "border-y-[1px]" : "border-b-[1px]"
      } flex justify-between w-full py-5 text-3xl md:text-5xl leading-[0.75] tracking-tighter border-white gap-4 md:gap-0 group overflow-hidden`}
    >
      <div className="flex gap-3 md:gap-5">
        <h1 ref={titleRef} className="text-md leading-none lg:text-5xl">{title}</h1>
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
      <div className="max-h-full flex lg:block lg:max-h-0 lg:-translate-y-[5.6rem]" ref={locationRef}>
        <div className="group-hover:translate-y-[5.5rem] ease-in-out transition-all lg:mb-8 bg-white p-1 rounded-full px-7 hidden lg:block">
          <h1 className="text-right text-black">GO TO PAGE</h1>
        </div>
        <h1 className="h-fit items-center text-right group-hover:translate-y-[5.5rem] ease-in-out transition-all">
          {location}
        </h1>
      </div>
    </Link>
  );
};

export default ExperienceBox;
