import React, { useState } from "react";

function Y2sn() {
  const [selectedSubject, setSelectedSubject] = useState(null); // State to track selected subject

  const subjects = [
    {
      id: 1,
      name: "Math",
      icon: "/1icn.svg",
      details: "Year 2 | Units-5",
      color: "bg-or1", // Orange background
      notes: [
        { name: "Math [Complete Formulae]", url: "/notes/year2/sn/Mathc.pdf" },
        { name: "Trigo Basics", url: "/notes/year2/sn/trigo.pdf" },
    

      ], // No notes added
    },
   
  ];

  return (
    <div className=" font-ubuntu">
    {/* Title */}
    <div className="flex justify-center mr-16">
      <div className="bg-[url('/bg1.svg')]  text-center text-or1  font-semibold pt-10 ml-16 md:ml-0 h-28 rounded-3xl md:w-[450px] w-[350px] text-2xl">
        Year 2  [Short Notes]
      </div>
      
    </div>

    {/* Subject List */}
    <div className="main flex flex-col  h-[30vh] md:h-[50vh] space-y-4 mb-10   md:px-72 px-5 ">
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
                    <ul className="flex md:flex-row flex-col md:space-x-6 gap-y-2 ml-16 md:ml-0 mt-4">
                      {subject.notes.map((note, index) => (
                        <li key={index} className="flex-shrink-0">
                          <a
                            href={note.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#008080]"
                          >
                            <div className="n font-ubuntu h-20 font-medium text-xl border-[#008080] border-[2px] pt-5  rounded-2xl text-center p-2 w-48 md:w-48 hover:text-white hover:bg-[#008080]">
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

export default Y2sn;
