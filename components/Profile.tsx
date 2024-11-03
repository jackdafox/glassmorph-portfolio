import { profile } from "@/utils/data";
import React from "react";

const Profile = () => {
  return (
    <div
      className="mt-60 flex justify-center w-full h-full px-20 gap-24 "
      id="white"
    >
      <div className="bg-gray-700 w-[60rem] h-[48rem] text-white"></div>
      <div className="flex flex-col gap-16">
        <h1 className="font-medium tracking-tighter text-[8rem] leading-[1]">
          {profile.name}
        </h1>
        <p className="font-normal tracking-tight text-xl max-w-[40rem] opacity-60">
          {profile.description}
        </p>
      </div>
    </div>
  );
};

export default Profile;
