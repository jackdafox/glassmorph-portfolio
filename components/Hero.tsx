"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      ).fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 1.2
        },
        "-=1.5" // Overlap the start of the text animation with the end of the hero animation
      );
    }
  }, []);

  return (
    <div
      className="h-[105vh] flex flex-col justify-end px-20 bg-black opacity-90"
      id="white"
    >
      <div className="flex flex-col justify-start p-5 gap-5 mb-12">
        <h1
          className="font-[500] text-white text-3xl tracking-tighter"
          ref={textRef}
        >
          Multimedia Student @ Universiti Malaya
        </h1>
        <div
          className="flex text-[8rem] gap-10 leading-[0.75] -ml-2 font-[500] text-white tracking-tighter"
          ref={heroRef}
        >
          <span>MUHAMMAD</span>
          <span>DZAKY</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
