"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CircleNumber = ({
  order,
  className,
  margin,
}: {
  order: number;
  className?: string;
  margin?: string;
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && currentNumber < order) {
      const timer = setTimeout(() => {
        setCurrentNumber(currentNumber + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, currentNumber, order]);

  return (
    <div
      ref={ref}
      className={`${className} rounded-[50%] flex justify-center items-center bg-white`}
    >
      <h1
        className={`text-7xl leading-[0.75] ${margin} text-blue-900 transition-all ease-out`}
      >
        {currentNumber}
      </h1>
    </div>
  );
};

export default CircleNumber;
