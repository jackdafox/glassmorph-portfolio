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
      { opacity: 0 },
      {
        opacity: 1,
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
    <div className="flex flex-col items-start px-4 md:px-20 mt-20 md:mt-56 gap-5 md:gap-10">
      <div
        className="flex items-center gap-4 md:gap-10 overflow-hidden"
        ref={titleRef}
      >
        <h1 className="text-4xl md:text-[6.5rem] tracking-tighter font-medium leading-[0.75] text-white">
          ABOUT ME
        </h1>
        <CircleNumber
          order={3}
          className="aspect-square w-[50px] md:w-[100px] h-full"
          margin="-ml-1"
        />
      </div>
      <div
        ref={lineRef}
        className="bg-white h-[2px] md:h-[15px] w-full transform scale-x-0"
      />
      <div
        className="flex flex-col md:flex-row justify-center w-full h-full gap-8 md:gap-24"
        id="white"
      >
        <div
          className="bg-gray-700 w-full md:w-[40rem] h-[20rem] md:h-[48rem]"
          ref={imageRef}
        ></div>
        <div className="flex flex-col gap-8 md:gap-16 text-white">
          <h1
            ref={nameRef}
            className="font-medium tracking-tighter text-5xl md:text-[8rem] leading-[1]"
          >
            {profile.name}
          </h1>
          <p
            ref={descriptionRef}
            className="font-normal tracking-tight text-base md:text-xl max-w-full md:max-w-[40rem]"
          >
            {profile.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
