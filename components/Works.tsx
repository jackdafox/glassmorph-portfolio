import React from "react";
import CategoryPill from "./common/CategoryPill";
import ProjectCard from "./ui/ProjectCard";
import { works } from "@/utils/data";

const Works = () => {
  return (
    <div className="mt-56 flex flex-col gap-10 px-20" id="white">
      <h1 className="text-[8rem] font-medium tracking-tighter leading-[0.75] -ml-2 mb-10 cursor-default">
        WORKS
      </h1>
      {works.map((work) => (
        <div key={work.id}>
          <ProjectCard title={work.title} year={work.year}>
            {work.category.map((category, index) => (
              <CategoryPill category={category} key={index} />
            ))}
          </ProjectCard>
        </div>
      ))}
    </div>
  );
};

export default Works;
