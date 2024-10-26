import React from "react";
import ExperienceBox from "./ui/ExperienceBox";
import { experiences } from "@/utils/data";

const Experiences = () => {
  return (
    <div className="flex flex-col items-start mt-96 p-5 px-20 min-h-[50vh] text-white" id="black">
      <h1 className="text-[8rem] tracking-tighter font-medium leading-[0.75] -ml-2 mb-10">
        MY EXPERIENCES
      </h1>
      {experiences.map((experience) => (
        <ExperienceBox
          key={experience.id}
          id={experience.id}
          title={experience.title}
          location={experience.location}
        />
      ))}
    </div>
  );
};

export default Experiences;
