"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonyCard = ({
  quotes,
  name,
  title,
  image,
  classname = "",
}: {
  quotes: string;
  name: string;
  title: string;
  image: string;
  classname?: string;
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      className={`flex w-full h-[48rem] gap-20 text-white ${classname}`}
    >
      <div
        className={`${image} w-[45rem] h-[48rem] bg-cover bg-center grayscale hover:grayscale-0 transition duration-500 ease-in-out`}
      />
      <div className="flex flex-col gap-5 sticky top-0 h-48" ref={textRef}>
        <h1 className="font-medium tracking-tighter text-[3rem] leading-[1] max-w-[50rem] text-wrap">
          {quotes}
        </h1>
        <div className="flex flex-col mt-5 leading-[1] gap-2 text-white">
          <h1 className="tracking-tighter text-[2rem] font-medium opacity-50">
            {name}
          </h1>
          <h1 className="tracking-tighter text-[1.4rem] opacity-25">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
