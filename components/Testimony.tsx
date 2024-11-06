"use client";
import React, { useEffect, useRef } from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleNumber from "./ui/CircleNumber";

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
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div>
      <div className="mt-56 px-20">
        <div className="flex items-center gap-10 mb-20" ref={titleRef}>
          <h1 className="text-[8rem] tracking-tighter font-medium leading-[0.75] text-white">
            TESTIMONIALS
          </h1>
          <CircleNumber
            order={4}
            className="aspect-square w-[200px] h-full"
            margin="-ml-1"
          />
          <div
            ref={lineRef}
            className="bg-white h-[15px] w-[70rem] transform scale-x-0"
          />
        </div>
        <TestimonyCard
          quotes="Huy is phenomenal. An absolute pleasure to work with!"
          name="Pieter Pattyn"
          title="Founder's Associate @Volup"
          image="bg-[url('/images/Moreno.jpg')]"
        />
        <TestimonyCard
          quotes="gacor kang"
          name="Harits Daffa"
          title="Information System Student @ University of Malaya"
          image="bg-[url('/images/Harits.jpg')]"
          classname="mt-36"
        />
      </div>
    </div>
  );
};

export default Testimony;
