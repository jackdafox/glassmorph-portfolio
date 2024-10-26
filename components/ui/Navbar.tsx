"use client"
import React, { useEffect } from "react";
import DevelopedMark from "../common/DevelopedMark";
import ContactButton from "../common/ContactButton";

const Navbar = () => {
  useEffect(() => {
    const position = window.scrollY;
    console.log(position);
  }, []);

  return (
    <header className="flex justify-between items-center fixed px-24 py-3 w-full z-[100]" id="nav">
      <DevelopedMark />
      <ContactButton />
    </header>
  );
};

export default Navbar;
