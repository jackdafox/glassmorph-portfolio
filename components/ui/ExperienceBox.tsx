import React from "react";

const ExperienceBox = ({id, title, location} : { id: number, title: string, location: string}) => {
  return (
    <div className={`${id < 2 ? 'border-y-[1px]' : 'border-b-[1px]'} flex justify-between w-full py-5 text-5xl tracking-tighter text-white border-white`}>
      <h1>{title}</h1>
      <h1>{location}</h1>
    </div>
  );
};

export default ExperienceBox;
