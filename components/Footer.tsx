import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = {
    main: ["Home", "Experiences", "Works", "About", "Testimonials"],
    social: ["LinkedIn", "Instagram", "E-Mail"],
  };
  return (
    <div className="flex flex-col justify-between items-start px-20 pt-24 pb-5 text-white gap-32">
      <div className="flex text-white gap-10 text-2xl tracking-tight font-light">
        <div className="flex flex-col">
          {links.main.map((link, index) => (
            <Link key={index} href={`/${link.toLowerCase()}`}>
              <h1 className="text-[#0a1338] hover:text-white transition-colors duration-300 cursor-pointer">
                {link}
              </h1>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {links.social.map((link, index) => (
            <h1
              key={index}
              className="text-[#0a1338] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {link}
            </h1>
          ))}
        </div>
      </div>
      <h1 className="font-semibold tracking-tighter text-5xl">
        © Developed By Dzaky
      </h1>
    </div>
  );
};

export default Footer;
