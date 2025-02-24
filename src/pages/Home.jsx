import React, { useState, useRef } from "react";
import Query from "../components/Query";
import { Link } from "react-router-dom";
import Hero2 from "../components/Hero2";
import { useDarkMode } from '../context/DarkModeContext';

function Home() {
  const { darkMode } = useDarkMode();
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
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="main justify-center font-ubuntu pt-10 overflow-x-hidden bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] px-5">
        <div className="hero mb-10 flex flex-col sm:flex-row justify-center items-center space-y-4 md:space-y-0 px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="1 hidden sm:block">
            <img src="hero.svg" alt="Hero" className="w-full max-w-sm xl:max-w-none h-auto" />
          </div>
          <div className="2 flex flex-col text-or1 justify-center space-y-1 items-center text-center">
            <p className="text-[42px] dark:text-gray-100 md:text-6xl lg:text-[80px] xl:text-8xl r-40 font-bold font-ubuntu whitespace-nowrap">
              Summ Writes...
            </p>
            <p className="text-[20px] md:text-[25px] dark:text-gray-100 lg:text-[30px] xl:text-[33px] ml-2 md:mr-8 lg:mr-20 xl:mr-36 font-light whitespace-nowrap">
              Handwritten notes for 1st n 2nd yrs
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center mt-5">
          <div
            onClick={scrollToTypes}
            className="bg-or1 xl:w-[500px] lg:w-[450px] md:w-[400px] w-[350px] text-center text-white text-2xl md:text-3xl font-medium pt-1 h-12 rounded-2xl mb-4 md:mb-0 cursor-pointer"
          >
            Get Started 
          </div>
          <a
            href="https://buymeacoffee.com/summ05"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-4"
          >
            <div
              className="bg-or1 xl:w-[500px] lg:w-[450px] md:w-[400px] w-[350px] text-center text-white text-2xl md:text-3xl font-medium pt-1 h-12 rounded-2xl mb-4 md:mb-0 cursor-pointer"
            >
              Support
            </div>
          </a>
        </div>

        <div className="mbimg w-full sm:hidden ">
          <img src="hero.svg" alt="Hero" className="w-full h-auto" />
        </div>

        <div className="comps h-full justify-between flex flex-col md:flex-row md:mt-28 p-4">
          <div className="1 w-full md:w-[800px]">
            <Hero2 />
          </div>
          <div className="ipic">
            <img src="herose.svg" alt="Hero" className="w-full max-w-md md:h-[800px] md:w-[500px] md:pb-32 md:mr-20" />
          </div>
        </div>

        <p className="text-center text-p1 font-ubuntu text-base md:text-2xl font-normal">
          [click arrow to switch b/w yrs]
        </p>
        <div id="year-section" className="yr pb-10 flex justify-center items-center mt-10">
          <button 
            onClick={prevYear} // Connect the prevYear function
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-3xl md:text-4xl"
          >
            {"<"}
          </button>
          <div className="text-2xl md:text-3xl text-or1 dark:text-gray-100 font-bold mx-4">
            {year === 1 ? "1st Year" : "2nd Year"}
          </div>
          <button 
            onClick={nextYear} // Connect the nextYear function
            className="bg-or1 rounded-full px-3 text-white py-1 font-bold text-3xl md:text-4xl"
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
                    <img 
                      src={darkMode ? "/dnotes.svg" : "/notes.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/year2">
                  <button>
                    <img 
                      src={darkMode ? "/dnotes.svg" : "/notes.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              )}
            </div>
            <div className="2">
              {year === 1 ? (
                <Link to="/year1ppr">
                  <button>
                    <img 
                      src={darkMode ? "/dpprs.svg" : "/pprs.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/year2ppr">
                  <button>
                    <img 
                      src={darkMode ? "/dpprs.svg" : "/pprs.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
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
                    <img 
                      src={darkMode ? "/dsn.svg" : "/sn.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/year2sn">
                  <button>
                    <img 
                      src={darkMode ? "/dsn.svg" : "/sn.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              )}
            </div>
            <div className="2">
              {year === 1 ? (
                <Link to="/year1ppt">
                  <button>
                    <img 
                      src={darkMode ? "/dup.svg" : "/up.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/year2ppt">
                  <button>
                    <img 
                      src={darkMode ? "/dup.svg" : "/up.svg"} 
                      className="h-[288px] w-[421px]" 
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Query />
      </div>
    </div>
  );
}

export default Home;
