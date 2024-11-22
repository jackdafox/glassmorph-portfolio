"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleNumber from "./ui/CircleNumber";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
<<<<<<< HEAD
    gsap.fromTo(
    gsap.fromTo(
=======
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
>>>>>>> dad1ca54d0a5db9438cb9f387b8efff165202478
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    ).fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "left center", duration: 3 },
      "-=1"
    );
    
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="mt-56 flex flex-col gap-10 px-20" id="white">
      <div className="flex items-center gap-10 mb-10" ref={titleRef}>
        <h1 className="text-[8rem] font-medium tracking-tighter leading-[0.75] cursor-default text-white">
          EXPERIENCES
        </h1>
        <CircleNumber
          order={2}
          className="aspect-square w-[250px] h-full"
          margin="-ml-1"
        />
        <div
          ref={lineRef}
          className="bg-white h-[15px] w-full transform scale-x-0"
        />
      </div>
      {works.map((work) => (
        <div key={work.id}>
          <ProjectCard title={work.title} year={work.year}>
            <div className="relative h-full">
              <video
                className="object-cover w-full h-full absolute top-0 left-0 z-0"
                src={work.video}
                autoPlay
                loop
                muted
              />
              <div className="relative z-10 flex gap-3 p-3">
                {work.category.map((category, index) => (
                  <CategoryPill category={category} key={index} />
                ))}
              </div>
            </div>
          </ProjectCard>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
