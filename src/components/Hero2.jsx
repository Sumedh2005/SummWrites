import React from "react";
import { useDarkMode } from '../context/DarkModeContext';

function Hero2() {
  const { darkMode } = useDarkMode();
  
  const comps = [
    {
      id: 1,
      img: "/comp1.svg", // Update the path if necessary
      title: "Complete Notes",
      text: "Master every subject with personalized handwritten notes, covering all units and ensuring the entire syllabus from the PPTs is included.",
    },
    {
      id: 2,
      img: "/comp2.svg", // Update the path if necessary
      title: "Unit Ppt's n Test prep",
      text: "Get all unit PPTs, CT papers, and university exam papers in one place for ur reference, so you never have to search anywhere else.",
    },
    {
      id: 3,
      img: "/comp3.svg", // Update the path if necessary
      title: "Shorts Notes for last min",
      text: "Handwritten short notes and formula sheets for most subjects are provided, ensuring quick and effective last-minute revision before CTs.",
    },
  ];

  return (
    <div className={`main flex flex-col space-y-6 px-4 md:px-8 lg:px-16 ${darkMode ? 'dark' : ''}`}>
      {comps.map((comp) => (
        <div
          key={comp.id}
          className={`flex flex-col md:flex-row items-center border-2 rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6 
            ${comp.id === 2 ? "border-p1" : "border-or1"}
            dark:text-gray-100`}
        >
          <img
            src={comp.img}
            alt={comp.title}
            className="w-16 h-16 md:w-24 md:h-24 "
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 dark:text-white">{comp.title}</h2>
            <p className="text-black dark:text-gray-100">{comp.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero2;
