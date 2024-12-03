import React, { useState, useRef } from "react";
import Query from "../components/Query";
import { Link } from "react-router-dom";

function Home() {
  const [year, setYear] = useState(1); // State for year
  const typesSectionRef = useRef(null); // Create a reference for the types section

  const nextYear = () => {
    if (year < 2) setYear(year + 1); // Increment year up to 2
  };

  const prevYear = () => {
    if (year > 1) setYear(year - 1); // Decrement year down to 1
  };

  const scrollToTypes = () => {
    if (typesSectionRef.current) {
      typesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main justify-center font-ubuntu mt-10 mx-10">
        <div className="hero mb-10 flex flex-row justify-center items-center space-x-4 md:space-x-0 px-4 md:px-16">
          <div className="1">
            <img src="hero.svg" alt="Hero" className="w-full max-w-sm md:max-w-none" />
          </div>
          <div className="2 flex flex-col text-or1 justify-center space-y-1 items-center text-center">
            <p className="text-5xl md:text-8xl r-40 font-bold font-ubuntu whitespace-nowrap">Summ Writes.....</p>
            <p className="text-xl md:text-[33px] ml-2 md:mr-36 font-light whitespace-nowrap">Handwritten notes for 1st n 2nd yrs</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-5">
          {/* Get Started Div - Visible on all screen sizes */}
          <div
            onClick={scrollToTypes} // Add the click handler to scroll to the types section
            className="bg-or1 w-full md:w-[500px] text-center text-white text-3xl font-medium pt-1 h-12 rounded-2xl mb-4 md:mb-0 cursor-pointer"
          >
            Get Started
          </div>

          {/* Image Div - Visible only on mobile (hidden on md and larger) */}
          <div className="mbimg w-full md:hidden">
            <img src="hero.svg" alt="Hero" className="w-full" />
          </div>
        </div>

        <div className="comps h-full justify-between flex md:flex-row flex-col md:mt-28 p-4">
          {/* Comps Image - Increase size in mobile view */}
          <div className="1 w-full md:w-auto">
            <img src="/compog.svg" alt="Comps" className=" " />
          </div>

          {/* Hero Image */}
          <div className="ipic">
            <img src="herose.svg" alt="Hero" className=" md:h-[800px] md:w-[500px] md:pb-28 md:mr-20" />
          </div>
        </div>

        <p className="text-center text-p1 font-ubuntu text-lg md:text-2xl font-normal">[click arrow to switch b/w yrs]</p>
        <div id="year-section" className="yr pb-10 flex justify-center items-center mt-10">
          <button
            onClick={prevYear}
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-4xl"
          >
            {"<"}
          </button>
          <div className="text-3xl text-or1 font-bold mx-4">
            {year === 1 ? "1st Year" : "2nd Year"}
          </div>
          <button
            onClick={nextYear}
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-4xl"
          >
            {">"}
          </button>
        </div>

        <div ref={typesSectionRef} className="types flex flex-col space-y-1">
          {/* Up section */}
          <div className="up flex flex-col md:flex-row justify-center space-y-1 md:space-y-0 md:space-x-40">
            <div className="1">
              {year === 1 ? (
                <Link to="/year1">
                  <button>
                    <img src="/notes.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              ) : (
                <Link to="/year2">
                  <button>
                    <img src="/notes.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              )}
            </div>
            <div className="2">
              {year === 1 ? (
                <Link to="/year1ppr">
                  <button>
                    <img src="/pprs.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              ) : (
                <Link to="/year2ppr">
                  <button>
                    <img src="/pprs.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Down section */}
          <div className="down flex flex-col md:flex-row justify-center space-y-1 md:space-y-0 md:space-x-40">
            <div className="1">
              {year === 1 ? (
                <Link to="/year1sn">
                  <button>
                    <img src="/sn.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              ) : (
                <Link to="/year2sn">
                  <button>
                    <img src="/sn.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              )}
            </div>
            <div className="2">
              {year === 1 ? (
                <Link to="/year1ppt">
                  <button>
                    <img src="/up.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              ) : (
                <Link to="/year2ppt">
                  <button>
                    <img src="/up.svg" className="h-[288px] w-[421px]" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Query />
      </div>
    </>
  );
}

export default Home;
