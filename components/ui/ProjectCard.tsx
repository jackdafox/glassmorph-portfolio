import React from "react";

const ProjectCard = ({title, year, children} : {title: string, year: number, children: React.ReactNode}) => {
  return (
    <div>
      <div>
        <div className="flex gap-3 bg-gray-400 min-h-64 p-3">
          {children}
        </div>
      </div>
      <div className="flex justify-between text-7xl tracking-tighter font-medium mt-2">
        <h1>{title}</h1>
        <h1>{year}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
