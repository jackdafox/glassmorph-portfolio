import React from "react";

const TestimonyCard = ({
  quotes,
  name,
  title,
  image,
  classname = "",
}: {
  quotes: string;
  name: string;
  title: string;
  image: string;
  classname?: string;
}) => {
  return (
    <div className={`flex w-full h-full px-20 gap-28 text-white ${classname}`}>
      <div className={`${image} w-[45rem] h-[48rem] bg-cover`}/>
      <div className="flex flex-col gap-16 sticky top-20 self-start">
        <h1 className="font-medium tracking-tighter text-[3rem] leading-[1] max-w-[50rem] text-wrap">
          {quotes}
        </h1>
        <div className="flex flex-col mt-5 leading-[1] gap-2 text-white">
          <h1 className="tracking-tighter text-[2rem] font-medium">{name}</h1>
          <h1 className="tracking-tighter text-[1.4rem]">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
