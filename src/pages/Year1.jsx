import React, { useState } from "react";
import { useDarkMode } from '../context/DarkModeContext';

function Year1() {
  const { darkMode } = useDarkMode();
  const [selectedSubject, setSelectedSubject] = useState(null); // State to track selected subject

  // Data for subjects
  const subjects = [
    {
      id: 1,
      name: "Chemistry",
      icon: "/icn1.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1 ", // Modified for dark mode
      notes: [
        { name: "Chem Unit-1", url: "/notes/year1/handw/chem/Chem Unit-1.pdf" },
        { name: "Chem Unit-2", url: "/notes/year1/handw/chem/Chem Unit-2.pdf" },
        { name: "Chem Unit-3", url: "/notes/year1/handw/chem/Chem Unit-3.pdf" },
        { name: "Chem Unit-4", url: "/notes/year1/handw/chem/Chem Unit-4.pdf" },
        { name: "Chem Unit-5", url: "/notes/year1/handw/chem/Chem Unit-5.pdf" },
      ],
    },
    {
      id: 2,
      name: "Math sem-1",
      icon: "/icn2.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1", // Modified for dark mode
      notes: [
        { name: "Math Unit-1", url: "/notes/year1/handw/math/Math Unit-1.pdf" },
        { name: "Math Unit-2", url: "/notes/year1/handw/math/Math Unit-2.pdf" },
        { name: "Math Unit-3", url: "/notes/year1/handw/math/Math Unit-3.pdf" },
        { name: "Math Unit-4", url: "/notes/year1/handw/math/Math Unit-4.pdf" },
        { name: "Math Unit-5", url: "/notes/year1/handw/math/Math Unit-5.pdf" },
      ],
    },
    {
      id: 3,
      name: "Math sem-2",
      icon: "/icn3.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 4,
      name: "EEE",
      icon: "/icn4.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "Eee Unit-1", url: "/notes/year1/handw/eee/Eee Unit-1.pdf" },
        { name: "Eee Unit-2", url: "/notes/year1/handw/eee/Eee Unit-2.pdf" },
        { name: "Eee Unit-3", url: "/notes/year1/handw/eee/Eee Unit-3.pdf" },
        { name: "Eee Unit-4", url: "/notes/year1/handw/eee/Eee Unit-4.pdf" },
        { name: "Eee Unit-5", url: "/notes/year1/handw/eee/Eee Unit-5.pdf" },
      ],
    },
    {
      id: 5,
      name: "Semiconductors",
      icon: "/icn5.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "Semi Unit-1", url: "/notes/year1/handw/semi/sn1.pdf" },
        { name: "Semi Unit-2", url: "/notes/year1/handw/semi/sn2.pdf" },
        { name: "Semi Unit-3", url: "/notes/year1/handw/semi/sn3.pdf" },
        { name: "Semi Unit-4", url: "/notes/year1/handw/semi/sn4.pdf" },
        { name: "Semi Unit-5", url: "/notes/year1/handw/semi/sn5.pdf" },
      ],
    },
    {
      id: 6,
      name: "OOPS",
      icon: "/icn6.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 7,
      name: "PPS",
      icon: "/icn7.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "C Program", url: "/notes/year1/handw/pps/C.pdf" },
        { name: "Python", url: "/notes/year1/handw/pps/Python.pdf" },
      ],
    },
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 pb-10 px-5">
        <div className="font-ubuntu">
          {/* Title */}
          <div className="flex justify-center mr-16">
            <div className="dark:text-gray-100  text-center text-or1  font-semibold pt-10 ml-16 md:ml-0 h-44 rounded-3xl md:w-[450px] w-[350px] text-4xl">
              Year 1 [Notes]
            </div>
          </div>

          {/* Subject List */}
          <div className="main flex flex-col space-y-4 mb-10   md:px-72 px-5  ">
            {subjects.map((subject) => (
              <div key={subject.id}>
                {/* Subject Item */}
                <div
                  className={`flex flex-row justify-between items-center ${subject.color} rounded-3xl p-4 dark:hover:bg-or1`}
                >
                  {/* Icon */}
                  <div className="icn md:w-12 md:h-12 h-8 w-8">
                    <img
                      src={subject.icon}
                      alt={`${subject.name} Icon`}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text */}
                  <div className="txt flex flex-col flex-1 px-4">
                    <p className="md:text-3xl text-2xl text-white font-semibold ">
                      {subject.name}
                    </p>
                    <p className="md:text-xl text:md text-white font-light ">
                      {subject.details}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <button
                    className="md:text-4xl text-2xl text-white font-bold"
                    onClick={() =>
                      setSelectedSubject(
                        selectedSubject === subject.id ? null : subject.id
                      )
                    }
                  >
                    {selectedSubject === subject.id ? "▲" : "▶"}
                  </button>
                </div>

                {/* Notes Section */}
                {selectedSubject === subject.id && (
                    <div className="notes mt-6 h-auto w-full rounded-2xl">
                      {subject.notes.length > 0 ? (
                        <ul className="flex md:flex-row flex-col  md:space-x-6 gap-y-2 ml-16 md:ml-0 mt-4">
                          {subject.notes.map((note, index) => (
                            <li key={index} className="flex-shrink-0">
                              <a
                                href={note.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#008080] dark:text-white"
                              >
                                <div className="n font-ubuntu h-20 font-medium text-xl border-[#008080] dark:border-white  border-[2px] pt-6 rounded-2xl text-center p-2 w-48 md:w-36 hover:text-white hover:bg-[#008080]">
                                  {note.name}
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center text-xl py-4 px-10 bg-[#008080] text-white rounded-2xl mx-auto w-72 md:w-96 mt-4 font-semibold">
                          Will Upload Soon
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Year1;
