import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
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
    <div className="font-ubuntu">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-16 h-20 border-b-[2px] border-or1">
        {/* Home Route */}
        <Link
          to="/"
          className="md:text-5xl ml-28 md:ml-2 text-4xl text-or1 font-bold"
        >
          Summ
        </Link>

        {/* Menu Button for Mobile View */}
        <button
          className="text-3xl text-or1 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          ▶
        </button>

        {/* Desktop View Links */}
        <div className="hidden md:flex space-x-8">
          {/* Study Section */}
          <div
            onClick={handleStudyClick}
            className="bg-or1 w-44 h-12 md:mr-80 rounded-full cursor-pointer"
          >
            <p className="text-center text-white font-medium pt-1 text-3xl">
              Study
            </p>
          </div>

          {/* About and Contact */}
          <Link
            to="/about"
            className="text-center font-medium text-4xl text-or1 rounded-2xl p-2 hover:border-[2px] hover:border-or1"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-center font-medium text-4xl text-or1 rounded-2xl p-2 hover:border-[2px] hover:border-or1"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setSidebarOpen(false)} // Close sidebar when clicking outside
        >
          <div
            className="w-64 h-full bg-white shadow-lg z-50"
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
