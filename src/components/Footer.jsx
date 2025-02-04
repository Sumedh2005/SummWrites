import React, { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function Footer() {
  const { darkMode } = useDarkMode();

  // Set dark mode class on footer element
  useEffect(() => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      if (darkMode) {
        footerElement.classList.add('dark');
      } else {
        footerElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  // Handle theme change for social icons
  useEffect(() => {
    const socialIcons = document.querySelectorAll('.icn img');
    socialIcons.forEach(icon => {
      if (darkMode) {
        icon.classList.add('dark-icon');
      } else {
        icon.classList.remove('dark-icon');
      }
    });
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="main h-auto lg:h-56 p-6 md:px-16 md:bg-[url('/fbg.svg')] dark:md:bg-[url('/try2.svg')] bg-[url('/mbf.svg')]  ">
        <div className="flex flex-col lg:flex-row justify-between font-ubuntu space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="lft text-or1 dark:text-gray-100 flex-col items-center lg:items-start">
            <p className="text-4xl font-bold">Sumedh Sawant</p>
            <p className="text-md">Mumbai | Chennai</p>
            <p className="text-md">SRM Kattankalathur</p>
          </div>

          {/* Right Section */}
          <div className="rgt text-or1 dark:text-gray-100 flex flex-col items-center lg:items-end">
            <p className="md:text-3xl text-2xl font-medium">Follow me on</p>
            <div className="icn mt-2  flex flex-row space-x-4">
              {/* Social Links */}
              <a 
                href="https://www.instagram.com/sumedh__30/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src="ig.svg" className="h-7 w-7" alt="Instagram" />
              </a>

              <a 
                href="https://github.com/Sumedh2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src="gt.svg" className="h-7 w-7" alt="GitHub" />
              </a>

              <a 
                href="https://www.linkedin.com/in/sumedh2005/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src="li.svg" className="h-7 w-7" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center mt-10 lg:mt-[75px] text-xl lg:text-[22px] px-20 md:px-0 font-ubuntu font-light text-white">
          Made with ♡ so I can be the reason you pass your exams next time :)
        </p>
      </div>
    </div>
  );
}

export default Footer;
