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
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef}>
      <div>
        <div className="flex gap-3 bg-gray-400 min-h-64 p-3">{children}</div>
      </div>
      <div className="flex justify-between text-7xl tracking-tighter font-medium mt-2">
        <h1>{title}</h1>
        <h1>{year}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
