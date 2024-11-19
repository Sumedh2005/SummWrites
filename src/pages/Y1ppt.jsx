import React, { useState } from "react";

function Y1ppt() {
  const [selectedSubject, setSelectedSubject] = useState(null); // State to track selected subject

  // Data for subjects
  const subjects = [
    {
      id: 1,
      name: "Chemistry",
      icon: "/icn1.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1", // Orange background
      notes: [
        { name: "Chem Unit-1", url: "/notes/year1/ppt/chem/c1.pdf" },
        { name: "Chem Unit-2", url: "/notes/year1/ppt/chem/c2.pdf" },
        { name: "Chem Unit-3", url: "/notes/year1/ppt/chem/c3.pdf" },
        { name: "Chem Unit-4", url: "/notes/year1/ppt/chem/c4.pdf" },
        { name: "Chem Unit-5", url: "/notes/year1/ppt/chem/c5.pdf" },
        { name: "XRD", url: "/notes/year1/ppt/chem/c5xrd.pdf" },
        { name: "XPS", url: "/notes/year1/ppt/chem/c5xps.pdf" },
      ],
    },
    {
      id: 2,
      name: "Math sem-1",
      icon: "/icn2.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1", // Purple background
      notes: [
        { name: "Math Unit-1", url: "/notes/year1/ppt/math/ms11.pdf" },
        { name: "Math Unit-2", url: "/notes/year1/ppt/math/ms12.pdf" },
        { name: "Math Unit-3", url: "/notes/year1/ppt/math/ms13.pdf" },
        { name: "Math Unit-4", url: "/notes/year1/ppt/math/ms14.pdf" },
        { name: "Math Unit-5", url: "/notes/year1/ppt/math/ms15.pdf" },
     
      ],
    },
    {
      id: 3,
      name: "Math sem-2",
      icon: "/icn3.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1",
      notes: [],
    },
    {
      id: 4,
      name: "EEE",
      icon: "/icn4.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1",
      notes: [
        { name: "Eee Unit-1", url: "/notes/year1/ppt/eee/e1.pdf" },
        { name: "Eee Unit-2", url: "/notes/year1/ppt/eee/e2.pdf" },
        { name: "Eee Unit-3", url: "/notes/year1/ppt/eee/e3.pdf" },
        { name: "Eee Unit-4", url: "/notes/year1/ppt/eee/e4.pdf" },
        { name: "Eee Unit-5", url: "/notes/year1/ppt/eee/e5.pdf" },
      ],
    },
    {
      id: 5,
      name: "Semiconductors",
      icon: "/icn5.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1",
      notes: [
        { name: "Semi Unit-1", url: "/notes/year1/ppt/semi/s1.pdf" },
        { name: "Semi Unit-2", url: "/notes/year1/ppt/semi/s2.pdf" },
        { name: "Semi Unit-3", url: "/notes/year1/ppt/semi/s3.pdf" },
        { name: "Semi Unit-4", url: "/notes/year1/ppt/semi/s4.pdf" },
        { name: "Semi Unit-5", url: "/notes/year1/ppt/semi/s5.pdf" },
      ],
    },
    {
      id: 6,
      name: "OOPS",
      icon: "/icn6.svg",
      details: "Year 1 | Units-5",
      color: "bg-p1",
      notes: [
        { name: "OOPS Unit-1", url: "/notes/year1/ppt/oops/o1.pdf" },
        { name: "OOPS Unit-2", url: "/notes/year1/ppt/oops/o2.pdf" },
        { name: "OOPS Unit-3", url: "/notes/year1/ppt/oops/o3.pdf" },
        { name: "OOPS Unit-4", url: "/notes/year1/ppt/oops/o4.pdf" },
        { name: "OOPS Unit-5", url: "/notes/year1/ppt/oops/o5.pdf" },
      ],
    },
    {
      id: 7,
      name: "PPS",
      icon: "/icn7.svg",
      details: "Year 1 | Units-5",
      color: "bg-or1",
      notes: [
        { name: "PPS Unit-1", url: "/notes/year1/ppt/pps/pps1.pdf" },
        { name: "PPS Unit-2", url: "/notes/year1/ppt/pps/pps2.pdf" },
        { name: "PPS Unit-3", url: "/notes/year1/ppt/pps/pps3.pdf" },
        { name: "PPS Unit-4", url: "/notes/year1/ppt/pps/pps4.pdf" },
        { name: "PPS Unit-5", url: "/notes/year1/ppt/pps/pps5.pdf" },
      ],
    },
    {
        id: 8,
        name: "Biology",
        icon: "/icn8.svg",
        details: "Year 1 | Units-5",
        color: "bg-p1",
        notes: [
          { name: "Bio Unit-1", url: "/notes/year1/ppt/bio/b1.pdf" },
          { name: "Bio Unit-2", url: "/notes/year1/ppt/bio/b2.pdf" },
          { name: "Bio Unit-3", url: "/notes/year1/ppt/bio/b3.pdf" },
          { name: "Bio Unit-4", url: "/notes/year1/ppt/bio/b4.pdf" },
          { name: "Bio Unit-5", url: "/notes/year1/ppt/bio/b5.pdf" },
        ],
      },

  ];

  return (
    <div className=" font-ubuntu">
    {/* Title */}
    <div className="flex justify-center mr-16">
      <div className="bg-[url('/bg1.svg')]  text-center text-or1  font-semibold pt-10 ml-16 md:ml-0 h-44 rounded-3xl md:w-[450px] w-[350px] text-4xl">
        Year 1 [PPT's]
      </div>
    </div>

    {/* Subject List */}
    <div className="main flex flex-col space-y-4 mb-10   md:px-72 px-5 ">
      {subjects.map((subject) => (
        <div key={subject.id}>
          {/* Subject Item */}
          <div
            className={`flex flex-row justify-between items-center ${subject.color} rounded-xl p-4`}
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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-52 gap-y-5 mt-4">
        {subject.notes.map((note, index) => (
          <li key={index}>
            <a
              href={note.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080]"
            >
              <div className="n font-ubuntu h-24 font-medium text-xl border-[#008080] border-[2px] pt-6 rounded-2xl text-center p-4 w-40 hover:text-white hover:bg-[#008080] mx-auto">
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
    
  );
}

export default Y1ppt;
