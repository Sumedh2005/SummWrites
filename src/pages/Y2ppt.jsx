import React, { useState } from "react";

function Y2ppt() {
  const [selectedSubject, setSelectedSubject] = useState(null); // State to track selected subject

  // Data for subjects
  const subjects = [
    {
        id: 1,
        name: "Math",
        icon: "/1icn.svg",
        details: "Year 2 | Units-5",
        color: "bg-or1", // Orange background
        notes: [
            
        ], // No notes added
      },
      {
        id: 2,
        name: "COA",
        icon: "/2icn.svg",
        details: "Year 2 | Units-5",
        color: "bg-p1", // Purple background
        notes: [
            { name: "COA Unit-1", url: "/notes/year2/ppt/coa/coa1.pdf" },
            { name: "COA Unit-2", url: "/notes/year2/ppt/coa/coa2.pdf" },
            { name: "COA Unit-3", url: "/notes/year2/ppt/coa/coa3.pdf" },
            { name: "COA Unit-4", url: "/notes/year2/ppt/coa/coa4.pdf" },
            { name: "COA Unit-5", url: "/notes/year2/ppt/coa/coa5.pdf" },
        ], // No notes added
      },
      {
        id: 3,
        name: "DSA",
        icon: "/3icn.svg",
        details: "Year 2 | Units-5",
        color: "bg-or1",
        notes: [
          
           
        ], // No notes added
      },
      {
        id: 4,
        name: "APP",
        icon: "/4icn.svg",
        details: "Year 2 | Units-5",
        color: "bg-p1",
        notes: [], // No notes added
      },
      {
        id: 5,
        name: "OS",
        icon: "/5icn.svg",
        details: "Year 2 | Units-5",
        color: "bg-or1",
        notes: [ 
            { name: "OS Unit-1", url: "/notes/year2/ppt/os/os1.pdf" },
            { name: "OS Unit-2", url: "/notes/year2/ppt/os/os2.pptx" },
            { name: "OS Unit-3", url: "/notes/year2/ppt/os/os3.pdf" },
            { name: "OS Unit-4", url: "/notes/year2/ppt/os/os4.ppt" },
            { name: "OS Unit-5", url: "/notes/year2/ppt/os/os5.pptx" },
        ], // No notes added
      },

  ];

  return (
    <div className="relative h-full pb-20  bg-cover bg-center">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 font-ubuntu">
        {/* Title */}
        <div className="flex justify-center mr-16">
          <div className="bg-[url('/bg1.svg')] w-[550px] text-center text-or1 text-6xl font-semibold pt-10 h-44 rounded-3xl">
            Year 2  [PPT's]
          </div>
        </div>

        {/* Subject List */}
        <div className="main flex flex-col space-y-4  px-96">
          {subjects.map((subject) => (
            <div key={subject.id}>
              {/* Subject Item */}
              <div
                className={`flex flex-row justify-between items-center ${subject.color} rounded-xl p-4`}
              >
                {/* Icon */}
                <div className="icn w-12 h-12">
                  <img
                    src={subject.icon}
                    alt={`${subject.name} Icon`}
                    className="w-full h-full"
                  />
                </div>

                {/* Text */}
                <div className="txt flex flex-col flex-1 px-4">
                  <p className="text-3xl text-white font-semibold">
                    {subject.name}
                  </p>
                  <p className="text-xl text-white font-light">
                    {subject.details}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  className="text-4xl text-white font-bold"
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
    </div>
  );
}

export default Y2ppt;
