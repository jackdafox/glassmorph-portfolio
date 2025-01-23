"use client";
import React, { useEffect } from "react";
import DevelopedMark from "../common/DevelopedMark";

const Navbar = () => {
  useEffect(() => {
    const position = window.scrollY;
    console.log(position);
  }, []);

  return (
    <header
      className="flex justify-between items-center fixed px-4 sm:px-8 md:px-16 lg:px-24 py-5 w-full z-[100]"
      id="nav"
    >
      <DevelopedMark />
    </header>
  );
};

export default Navbar;
