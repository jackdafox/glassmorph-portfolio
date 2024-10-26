import React from "react";

const Profile = () => {
  return (
    <div
      className="mt-60 flex justify-center w-full h-full px-20 gap-24"
      id="white"
    >
      <div className="bg-gray-700 w-[60rem] h-[48rem]"></div>
      <div className="flex flex-col gap-16">
        <h1 className="font-medium tracking-tighter text-[8rem] leading-[1]">
          Muhammad Dzaky
        </h1>
        <p className="font-normal tracking-tight text-xl max-w-[40rem] opacity-60">
          Aspiring computer scientist with a focus on digital forensics and
          cybersecurity. I am a computer science student passionate about
          understanding how technology impacts our world and constantly seeking
          opportunities to expand my knowledge in security practices and
          forensic analysis. Key areas of interest include digital forensics,
          cybersecurity essentials, data protection, and privacy, as well as
          exploring AI and machine learning. While still building my foundation,
          I am eager to connect with others in the field, learn from real-world
          experiences, and contribute to projects that enhance digital safety.
        </p>
      </div>
    </div>
  );
};

export default Profile;
