import React, { useState } from "react";
import { useDarkMode } from '../context/DarkModeContext';

function Y2ppt() {
  const { darkMode } = useDarkMode();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [semester, setSemester] = useState(3);

  const prevSem = () => {
    setSemester(semester === 3 ? 4 : 3);
    setSelectedSubject(null);
  };

  const nextSem = () => {
    setSemester(semester === 4 ? 3 : 4);
    setSelectedSubject(null);
  };

  // Semester 3 Subjects
  const semester3Subjects = [
    {
      id: 1,
      name: "Math",
      icon: "/1icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 2,
      name: "COA",
      icon: "/2icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "COA Unit-1", url: "/notes/year2/ppt/coa/coa1.pdf" },
        { name: "COA Unit-2", url: "/notes/year2/ppt/coa/coa2.pdf" },
        { name: "COA Unit-3", url: "/notes/year2/ppt/coa/coa3.pdf" },
        { name: "COA Unit-4", url: "/notes/year2/ppt/coa/coa4.pdf" },
        { name: "COA Unit-5", url: "/notes/year2/ppt/coa/coa5.pdf" },
      ],
    },
    {
      id: 3,
      name: "DSA",
      icon: "/3icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 4,
      name: "APP",
      icon: "/4icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 5,
      name: "OS",
      icon: "/5icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "OS Unit-1", url: "/notes/year2/ppt/os/os1.pdf" },
        { name: "OS Unit-2", url: "/notes/year2/ppt/os/os2.pptx" },
        { name: "OS Unit-3", url: "/notes/year2/ppt/os/os3.pdf" },
        { name: "OS Unit-4", url: "/notes/year2/ppt/os/os4.ppt" },
        { name: "OS Unit-5", url: "/notes/year2/ppt/os/os5.pptx" },
      ],
    },
  ];

  // Semester 4 Subjects
  const semester4Subjects = [
    {
      id: 6,
      name: "DBMS",
      icon: "/5icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "DBMS Unit-1", url: "/notes/year2/sem4/ppt/dbms/dbmsp.pdf" },
        { name: "DBMS Unit-2.1", url: "/notes/year2/sem4/ppt/dbms/dbmsp2.1.pdf" },
        { name: "DBMS Unit-2.2", url: "/notes/year2/sem4/ppt/dbms/dbmsp2.2.pdf" },
        { name: "DBMS Unit-4", url: "/notes/year2/sem4/ppt/dbms/dbmsp3.pdf" },
        { name: "DBMS Unit-5", url: "/notes/year2/sem4/ppt/dbms/dbmsp5.pdf" },
      ],
    },
    {
      id: 7,
      name: "DAA",
      icon: "/4icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "DAA Unit-1", url: "/notes/year2/sem4/ppt/daa/daap1.pdf" },
        { name: "DAA Unit-2", url: "/notes/year2/sem4/ppt/daa/daap2.pdf" },
        { name: "DAA Unit-3", url: "/notes/year2/sem4/ppt/daa/daap3.pdf" },
        { name: "DAA Unit-4", url: "/notes/year2/sem4/ppt/daa/daap4.pdf" },
        { name: "DAA Unit-5", url: "/notes/year2/sem4/ppt/daa/daap5.pdf" },
      ],
    },
    {
      id: 8,
      name: "PQT (Math)",
      icon: "/1icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
    {
      id: 9,
      name: "Social Engineering",
      icon: "/icn9.svg",
      details: "Year 2 | Units-3",
      color: "bg-p1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "SE Unit-1 2 3", url: "/notes/year2/sem4/ppt/se/sepall.pdf" },
      ],
    },
    {
      id: 10,
      name: "AI",
      icon: "/2icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [
        { name: "AI Unit-1", url: "/notes/year2/sem4/ppt/ai/aip1.pdf" },
        { name: "AI Unit-2", url: "/notes/year2/sem4/ppt/ai/aip2.pdf" },
        { name: "AI Unit-3", url: "/notes/year2/sem4/ppt/ai/aip3.pdf" },
        { name: "AI Unit-4", url: "/notes/year2/sem4/ppt/ai/aip4.pdf" },
        
      ],
    },
    {
      id: 11,
      name: "DIP",
      icon: "/icn3.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1 dark:bg-transparent dark:border-4 dark:border-or1",
      notes: [],
    },
  ];

  // Get current subjects based on semester
  const currentSubjects = semester === 3 ? semester3Subjects : semester4Subjects;

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 px-5 pb-10 font-ubuntu">
        {/* Title */}
        <div className="flex justify-center mr-16">
          <div className="text-center text-or1 dark:text-gray-100 font-semibold pt-10 ml-16 md:ml-0 h-full pb-8 rounded-3xl md:w-[450px] w-[350px] text-4xl">
            Year 2 [PPT's]
          </div>
        </div>

        {/* Semester Change Section */}
        <div className="semcng pb-10 flex justify-center items-center ">
          <button 
            onClick={prevSem}
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-3xl md:text-4xl hover:bg-opacity-80"
          >
            {"<"}
          </button>
          <div className="text-2xl md:text-3xl text-or1 dark:text-gray-100 font-bold mx-4">
            {`Semester ${semester}`}
          </div>
          <button 
            onClick={nextSem}
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-3xl md:text-4xl hover:bg-opacity-80"
          >
            {">"}
          </button>
        </div>

        {/* Subject List */}
        <div className="main flex flex-col space-y-4 mb-10 md:px-72 px-5">
          {currentSubjects.map((subject) => (
            <div key={subject.id}>
              {/* Subject Item */}
              <div className={`flex flex-row justify-between items-center ${subject.color} rounded-xl p-4 dark:hover:bg-or1`}>
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
                  <p className="md:text-3xl text-2xl text-white font-semibold">
                    {subject.name}
                  </p>
                  <p className="md:text-xl text:md text-white font-light">
                    {subject.details}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  className="md:text-4xl text-2xl text-white font-bold"
                  onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
                >
                  {selectedSubject === subject.id ? "▲" : "▶"}
                </button>
              </div>

              {/* Notes Section */}
              {selectedSubject === subject.id && (
                <div className="notes mt-6 h-auto w-full rounded-2xl">
                  {subject.notes.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-52 gap-y-5 mt-4">
                      {subject.notes.map((note, index) => (
                        <li key={index}>
                          <a
                            href={note.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#008080] dark:text-gray-100"
                          >
                            <div className="n font-ubuntu h-24 font-medium text-xl border-[#008080] dark:border-gray-400 border-[2px] pt-6 rounded-2xl text-center p-4 w-40 hover:text-white hover:bg-[#008080] mx-auto">
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
  );
}

export default Y2ppt;
