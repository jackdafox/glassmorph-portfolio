import React from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";

const Testimony = () => {
  return (
    <div>
      <div className="mt-56 px-20">
        <h1 className="text-[8rem] tracking-tighter font-medium leading-[0.75] text-white mb-20">
          TESTIMONIALS
        </h1>
        <TestimonyCard
          quotes="Huy is phenomenal. An absolute pleasure to work with!"
          name="Pieter Pattyn"
          title="Founder's Associate @Volup"
          image="bg-[url('/images/Moreno.jpg')]"
        />
        <TestimonyCard
          quotes="gacor kang"
          name="Harits Daffa"
          title="Information System Student @ University of Malaya"
          image="bg-[url('/images/Harits.jpg')]"
          classname="mt-36"
        />
      </div>
    </div>
  );
};

export default Testimony;
