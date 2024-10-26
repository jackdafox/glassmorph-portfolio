import React from "react";
import TestimonyCard from "@/components/ui/TestimonyCard";

const Testimony = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-transparent to-50% to-black w-screen h-[30rem] opacity-90 mt-52" id="white"/>
      <div className="bg-black bg-opacity-90">
        <TestimonyCard
          quotes='"Huy is phenomenal. An absolute pleasure to work with!"'
          name="Pieter Pattyn"
          title="Founder's Associate @Volup"
          image="bg-[url('/images/photo1.jpeg')] bg-center"
        />
        <TestimonyCard
          quotes='"Huy is phenomenal. An absolute pleasure to work with!"'
          name="Pieter Pattyn"
          title="Founder's Associate @Volup"
          image="bg-[url('/images/photo1.jpeg')] bg-center"
          classname="mt-36"
        />
        
      </div>
    </div>
  );
};

export default Testimony;
