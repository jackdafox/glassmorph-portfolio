"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  title,
  year,
  children,
}: {
  title: string;
  year: number;
  children: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.fromTo(
        card.children,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef}>
      <div>
        <div className="h-[30rem] lg:h-[28rem] md:h-[25rem] sm:h-[22rem] xs:h-[20rem] overflow-hidden">
          {children}
        </div>
      </div>
      <div className="flex justify-between text-2xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl tracking-tighter font-medium mt-2 text-white">
        <h1 className="break-words">{title}</h1>
        <h1>{year}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
