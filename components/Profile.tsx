import { profile } from "@/utils/data";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-start px-20 mt-56 gap-20">
      <h1 className="text-[8rem] tracking-tighter font-medium leading-[0.75] text-white">
        ABOUT ME
      </h1>
      <div
        className="flex justify-center w-full h-full gap-24"
        id="white"
      >
        <div className="bg-gray-700 w-[40rem] h-[48rem]"></div>
        <div className="flex flex-col gap-16 text-white">
          <h1 className="font-medium tracking-tighter text-[8rem] leading-[1]">
            {profile.name}
          </h1>
          <p className="font-normal tracking-tight text-xl max-w-[40rem] opacity-60">
            {profile.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
