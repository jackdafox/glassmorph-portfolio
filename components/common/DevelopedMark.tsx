import React, { useState, useEffect } from 'react';

const DevelopedMark = () => {
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'section1', color: 'text-white' },
        { id: 'section2', color: 'text-black' },
      ];

      let newColor = 'text-white'; // Default color

      for (const section of sections) {
        const sectionElement = document.getElementById(section.id);
        const rect = sectionElement!.getBoundingClientRect();

        // Check if the section is in view (adjust the thresholds as needed)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newColor = section.color;
          break;
        }
      }

      setTextColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`${textColor} group flex cursor-pointer text-2xl font-medium tracking-tighter mix-blend-multiply`}>
        <p className="m-0 transition duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg]">
          ©
        </p>
        <div className={`flex whitespace-nowrap relative overflow-hidden ml-[5px] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]`}>
          <p className={`relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full right-[1px] ${textColor}`}>
            Code by
          </p>
          <p className={`relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.2em] group-hover:-translate-x-[90px] ${textColor}`}>
            Muhammad
          </p>
          <p className={`absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] left-[215px] group-hover:-translate-x-[90px] ${textColor}`}>
            Dzaky
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopedMark;
