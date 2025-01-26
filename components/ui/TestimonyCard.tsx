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
  const imageRef = useRef(null);

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
            scrub: true,
          },
        }
      );
    }
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row w-full h-auto md:h-[48rem] gap-10 md:gap-20 text-white md:p-0 ${classname}`}
    >
      <img
        src={image}
        className={`w-full md:w-[35rem] h-[30rem] md:h-[48rem] bg-cover bg-center grayscale hover:grayscale-0 object-cover`}
        ref={imageRef}
      />
      <div
        className="flex flex-col gap-5 md:sticky top-0 h-auto md:h-48"
        ref={textRef}
      >
        <h1 className="font-medium tracking-tighter text-[2rem] md:text-[3rem] leading-[1.2] md:leading-[1] max-w-[50rem] text-wrap">
          {quotes}
        </h1>
        <div className="flex flex-col mt-3 md:mt-5 leading-[1.2] md:leading-[1] gap-2 text-white">
          <h1 className="tracking-tighter text-[1.5rem] md:text-[2rem] font-medium opacity-50">
            {name}
          </h1>
          <h1 className="tracking-tighter text-[1.2rem] md:text-[1.4rem] opacity-25">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
