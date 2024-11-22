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
<<<<<<< Updated upstream
        ))}
=======
          <div
            ref={lineRef}
            className="bg-white h-[15px] w-[70rem] transform scale-x-0"
          />
        </div>
        <TestimonyCard
          quotes=""
          name="Mochammad Moreno"
          title="Chemistry Student @ Bandung Institute of Technology"
          image="bg-[url('/images/Moreno_3.jpg')]"
        />
        <TestimonyCard
          quotes="gacor kang"
          name="Harits Daffa Muzaki"
          title="Information System Student @ University of Malaya"
          image="bg-[url('/images/Harits.jpg')]"
          classname="mt-36"
        />
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Testimony;
