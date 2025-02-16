import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = {
    main: ["Home", "Works", "Experiences", "About", "Testimonials"],
    social: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/muhammad-dzaky-892351220/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/dzxky_/",
      },
      {
        name: "GitHub",
        link: "https://github.com/jackdafox",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-between items-start px-4 md:px-20 pt-12 md:pt-24 pb-5 text-white gap-16 md:gap-32">
      <div className="flex flex-col md:flex-row text-white gap-5 md:gap-10 text-xl md:text-2xl tracking-tight font-light">
        <div className="flex flex-col">
          {links.main.map((link, index) => (
            <Link key={index} href={`/${"#" + link.toLowerCase()}`}>
              <h1 className="text-[#0a1338] hover:text-white transition-colors duration-300 cursor-pointer">
                {link}
              </h1>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {links.social.map((link, index) => (
            <Link href={link.link} key={index}>
              <h1
                key={index}
                className="text-[#0a1338] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      <h1 className="font-semibold tracking-tighter text-3xl md:text-5xl">
        © Developed By Dzaky
      </h1>
    </div>
  );
};

export default Footer;
