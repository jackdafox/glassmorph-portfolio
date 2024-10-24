"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CircleFollowCursor() {
  const circleRef = useRef<HTMLDivElement>(null);

  const changeGradient = () => {
    if (circleRef.current) {
      const color1 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 1)`;
      const color2 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 1)`;

      gsap.to(circleRef.current, {
        background: `linear-gradient(135deg, ${color1}, ${color2})`,
        duration: 1,
        ease: "none",
      });
    }
  };

  // Change the gradient every 3 seconds
  const gradientInterval = setInterval(changeGradient, 5000);

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
      clearInterval(gradientInterval);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="absolute w-[500px] h-[500px] rounded-[50%] pointer-events-none z-[-1] opacity-45"
      style={{ background: "linear-gradient(135deg, #3498db, #2ecc71)" }}
    ></div>
  );
}
