"use client";
import { profile } from "@/utils/data";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleNumber from "./ui/CircleNumber";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const lineRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const words = (descriptionRef.current as HTMLElement).innerText.split(
        " "
      );
      descriptionRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      gsap.fromTo(
        ".word",
        { opacity: 0 },
        {
          opacity: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "top 20%",
          },
        }
      );
    }

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
      nameRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: nameRef.current,
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

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
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
    <div className="flex flex-col items-start px-20 mt-56 gap-20">
      <div className="flex items-center gap-10" ref={titleRef}>
        <h1 className="text-[6.5rem] tracking-tighter font-medium leading-[0.75] text-white">
          ABOUT ME
        </h1>
        <CircleNumber order={3} className="aspect-square w-[100px] h-full" margin="-ml-1" />
        <div
          ref={lineRef}
          className="bg-white h-[15px] w-[65rem] transform scale-x-0"
        />
      </div>
      <div className="flex justify-center w-full h-full gap-24" id="white">
        <div className="bg-gray-700 w-[40rem] h-[48rem]" ref={imageRef}></div>
        <div className="flex flex-col gap-16 text-white">
          <h1
            ref={nameRef}
            className="font-medium tracking-tighter text-[8rem] leading-[1]"
          >
            {profile.name}
          </h1>
          <p
            ref={descriptionRef}
            className="font-normal tracking-tight text-xl max-w-[40rem]"
          >
            {profile.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
