import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-start bg-black opacity-90 px-20 pt-24 pb-5 text-white gap-32">
      <div className="flex text-white gap-10 text-2xl tracking-tight font-light">
        <div className="flex flex-col gap-1">
          <h1>Home</h1>
          <h1>Experiences</h1>
          <h1>Works</h1>
          <h1>About</h1>
          <h1>Testimonials</h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1>LinkedIn</h1>
          <h1>Instagram</h1>
          <h1>E-Mail</h1>
        </div>
      </div>
      <h1 className="font-semibold tracking-tighter text-5xl">
        © Developed By Dzaky
      </h1>
    </div>
  );
};

export default Footer;
