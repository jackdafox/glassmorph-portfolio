"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CircleFollowCursor() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          x: event.clientX - circleRef.current.offsetWidth / 2,
          y: event.clientY - circleRef.current.offsetHeight / 2,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed w-[20px] h-[20px] rounded-[50%] pointer-events-none z-[1000] brightness-200 bg-blue-900"
    ></div>
  );
}
