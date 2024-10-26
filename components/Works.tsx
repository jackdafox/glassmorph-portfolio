import React from "react";
import CategoryPill from "./common/CategoryPill";
import ProjectCard from "./ui/ProjectCard";

const Works = () => {
  return (
    <div className="mt-56 flex flex-col gap-10 px-20" id="white">
      <h1 className="text-[8rem] font-medium tracking-tighter leading-[0.75] -ml-2 mb-10 cursor-default">WORKS</h1>
      <ProjectCard title="IDFEST" year={2023}>
        <CategoryPill category="DESIGN"/>
        <CategoryPill category="EVENT"/>
        <CategoryPill category="SHOW"/>
      </ProjectCard>
      <ProjectCard title="IDFEST" year={2023}>
        <CategoryPill category="DESIGN"/>
        <CategoryPill category="EVENT"/>
        <CategoryPill category="SHOW"/>
      </ProjectCard>
      <ProjectCard title="IDFEST" year={2023}>
        <CategoryPill category="DESIGN"/>
        <CategoryPill category="EVENT"/>
        <CategoryPill category="SHOW"/>
      </ProjectCard>
    </div>
  );
};

export default Works;
