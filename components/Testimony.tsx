"use client";
import React, { useEffect, useRef } from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleNumber from "./ui/CircleNumber";
import { testimonials } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

const Testimony = () => {
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div id="testimonials">
      <div className="mt-24 xl:mt-56 px-4 md:px-20">
        <div
          className="flex items-center gap-4 md:gap-10 overflow-hidden"
          ref={titleRef}
        >
          <h1 className="text-4xl md:text-[6.5rem] tracking-tighter font-medium leading-[0.75] text-white">
            TESTIMONY
          </h1>
          <CircleNumber
            order={4}
            margin="-ml-[0.1rem]"
          />
        </div>
        <div
          ref={lineRef}
          className="bg-white h-[2px] md:h-[15px] w-full transform scale-x-0 my-5 xl:my-10"
        />
        <TestimonyCard
          quotes={testimonials[0].quotes}
          name={testimonials[0].name}
          title={testimonials[0].title}
          image={testimonials[0].image}
        />
        <TestimonyCard
          quotes={testimonials[1].quotes}
          name={testimonials[1].name}
          title={testimonials[1].title}
          image={testimonials[1].image}
          classname="mt-20"
        />
      </div>
    </div>
  );
};

export default Testimony;
