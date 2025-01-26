"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      heroRef.current &&
      textRef.current &&
      spansRef.current &&
      videoRef.current
    ) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      tl.fromTo(
        spansRef.current.children,
        { y: 200 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      ).fromTo(
        textRef.current.children,
        { y: 130 },
        {
          y: 0,
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
      className="h-[105vh] flex flex-col justify-end px-4 sm:px-8 xl:px-16 overflow-hidden"
      id="home"
      ref={heroRef}
    >
      <video
        src="https://zwlkygzhrcaonnqpwpcv.supabase.co/storage/v1/object/public/medias/Idfest.mp4?t=2025-01-23T23%3A55%3A02.695Z"
        autoPlay
        loop
        muted
        className="absolute left-0 bottom-0 w-full h-full object-cover -z-10 opacity-50"
        ref={videoRef}
      />
      <div className="flex flex-col justify-start p-3 sm:p-5 gap-3 sm:gap-5 mb-8 sm:mb-12">
        <div ref={textRef} className="flex flex-wrap overflow-hidden">
          <span className="font-[500] text-white text-lg sm:text-2xl lg:text-3xl tracking-tighter">
            Multimedia Student
          </span>
          <span className="font-[500] text-white text-lg sm:text-2xl lg:text-3xl tracking-tighter mx-2">
            @
          </span>
          <span className="font-[500] text-white text-lg sm:text-2xl lg:text-3xl tracking-tighter">
            Universiti Malaya
          </span>
        </div>
        <div
          className="flex flex-col sm:flex-row text-[3rem] sm:text-[5rem] xl:text-[8rem] gap-2 sm:gap-5 lg:gap-10 leading-[0.75] -ml-1 sm:-ml-2 font-[500] text-white tracking-tighter overflow-hidden pb-10"
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
