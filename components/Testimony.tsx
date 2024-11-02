import React from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { testimonials } from "@/utils/data";

const Testimony = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-transparent to-50% to-black w-screen h-[30rem] opacity-90 mt-52"
        id="white"
      />
      <div className="bg-black bg-opacity-90">
        {testimonials.map((testimony) => (
          <TestimonyCard
            key={testimony.id}
            quotes={testimony.quotes}
            name={testimony.name}
            title={testimony.title}
            image={testimony.image}
            classname={testimony.classname}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
