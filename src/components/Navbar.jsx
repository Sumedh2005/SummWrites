import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { dark } from "@mui/material/styles/createPalette";
import { useDarkMode } from '../context/DarkModeContext';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const navigate = useNavigate(); // React Router navigation
  const location = useLocation(); // Current path

  // Function to handle the "Study" button click
  const handleStudyClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false }); // Navigate to the home page
    }
    setTimeout(() => {
      const yearSection = document.getElementById("year-section");
      if (yearSection) {
        yearSection.scrollIntoView({ behavior: "smooth" });
      }
    }, location.pathname !== "/" ? 100 : 0); // Add delay if navigating to home
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>

    
    <div className="font-ubuntu bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')]   pt-6 px-5">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 xl:px-16 lg:px-12 md:px-8 h-20 border-b-[2px] border-or1 relative">
        {/* Home Route (Left-Aligned) */}
        <Link
          to="/"
          className="xl:text-5xl lg:text-4xl md:text-[33px] text-[33px] text-or1 dark:text-gray-100 font-bold"
        >
          Summ
        </Link>

        {/* Center Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          {/* Study Section (Hidden in Mobile View) */}
          <div
            onClick={handleStudyClick}
            className="hidden xl:block md:block lg:block bg-or1 xl:w-44 xl:h-12 lg:w-40 lg:h-10 md:w-32 md:h-10 rounded-full cursor-pointer"
          >
            <p className="text-center text-white dark:text-gray-100 font-medium pt-1 xl:text-3xl lg:text-2xl md:text-2xl text-2xl ">
              Study
            </p>
          </div> 

          {/* Dark Mode Icon (Visible in All Views) */}
          <div className="dm flex justify-center sm:justify-center md:ml-4 lg:ml-4 xl:ml-4">
            {darkMode ? (
              <WbSunnyRoundedIcon
                className="text-or1 hover:text-blue-700 cursor-pointer"
                style={{ fontSize: "36px" }}
                onClick={toggleDarkMode}
              />
            ) : (
              <DarkModeIcon
                className="text-or1 hover:text-blue-700 cursor-pointer"
                style={{ fontSize: "36px" }}
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>

        {/* Desktop View Links (Right-Aligned) */}
        <div className="md:mr-[-50px] hidden xl:flex lg:flex  space-x-2 items-center">
          <Link
            to="/about"
            className="text-center dark:text-gray-100 font-medium xl:text-4xl lg:text-3xl md:text-2xl md: text-or1 rounded-2xl p-2 hover:border-[2px] hover:border-or1"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-center font-medium xl:text-4xl dark:text-gray-100 lg:text-3xl md:text-2xl text-or1 rounded-2xl p-2 hover:border-[2px] hover:border-or1"
          >
            Contact
          </Link>
          <Link
            to="/notifs"
            className="flex items-center  text-center font-medium xl:text-4xl lg:text-3xl md:text-2xl text-or1 rounded-2xl p-2 hover:border-[2px] hover:border-or1"
          >
            <NotificationsActiveIcon
              className="mr-1"
              style={{ fontSize: "38px" }}
            />
          </Link>
        </div>

        {/* Menu Button for Mobile View */}
        <button
          className="text-3xl sm:text-2xl text-or1 xl:hidden lg:hidden "
          onClick={() => setSidebarOpen(true)}
        >
          <img src="hb1.svg" className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed  inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setSidebarOpen(false)} // Close sidebar when clicking outside
        >
          <div
            className="w-64 h-full bg-white dark:bg-[#333333] shadow-lg z-50"
            onClick={(e) => e.stopPropagation()} // Prevent sidebar close when clicking inside
          >
            {/* Close Button */}
            <button
              className="text-2xl text-or1 p-4"
              onClick={() => setSidebarOpen(false)}
            >
              ✖
            </button>

            {/* Sidebar Content */}
            <div className="flex flex-col items-start p-6 space-y-6">
              {/* Study Section */}
              <div
                onClick={() => {
                  handleStudyClick();
                  setSidebarOpen(false); // Close sidebar after clicking
                }}
                className="bg-or1 w-full text-center py-3 rounded-full text-white text-xl cursor-pointer"
              >
                Study
              </div>

              {/* About and Contact */}
              <Link
                to="/about"
                onClick={() => setSidebarOpen(false)} // Close sidebar after clicking
                className="text-or1 text-xl hover:underline"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setSidebarOpen(false)} // Close sidebar after clicking
                className="text-or1 text-xl hover:underline"
              >
                Contact
              </Link>
              <Link
                to="/notifs"
                onClick={() => setSidebarOpen(false)} // Close sidebar after clicking
                className="text-or1 text-xl hover:underline"
              >
                Notifs
              </Link>
              <div className="support">
                <a href="https://buymeacoffee.com/summ05" className="text-or1 text-xl font-semibold">Support </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Navbar;
