import React from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";

const Testimony = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-transparent to-90% to-black w-screen h-[30rem]"
        id="white"
      />
      <div className="bg-black">
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
