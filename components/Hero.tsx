"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && spansRef.current) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      tl.fromTo(
        spansRef.current.children,
        { y: 100 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      ).fromTo(
        textRef.current.children,
        { yPercent: 130 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        },
        "1"
      );
    }
  }, []);

  return (
    <div
      className="h-[105vh] flex flex-col justify-end px-16"
      id="home"
      ref={heroRef}
    >
      <div className="flex flex-col justify-start p-5 gap-5 mb-12">
        <div ref={textRef} className="flex gap-2 overflow-hidden">
          <span className="font-[500] text-white text-3xl tracking-tighter">
            Multimedia Student
          </span>
          <span className="font-[500] text-white text-3xl tracking-tighter">
            @
          </span>
          <span className="font-[500] text-white text-3xl tracking-tighter">
            Universiti Malaya
          </span>
        </div>
        <div
          className="flex text-[8rem] gap-10 leading-[0.75] -ml-2 font-[500] text-white tracking-tighter overflow-hidden"
          ref={spansRef}
        >
          <span>MUHAMMAD</span>
          <span>DZAKY</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
