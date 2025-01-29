import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function About() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 pb-10 px-5">
        <p className="text-center text-4xl font-semibold font-ubuntu text-or1 dark:text-gray-100 my-8 pt-5">
          About Me
        </p>
        <div className="main font-ubuntu flex flex-col lg:flex-row justify-center items-center h-auto mb-10 gap-10">
          {/* Left Section - Image */}
          <div className="lft flex items-center justify-center p-2 border-[1px] border-or1 rounded-xl">
            <img
              src="mee.svg"
              className="md:h-[390px] md:w-[300px] h-[290px] w-[200px] object-cover rounded-lg"
              alt="About Me"
            />
          </div>
         
          {/* Right Section - Text */}
          <div className="rgt lg:ml-10 lg:pl-20 lg:border-l-[2px] border-or1 flex flex-col justify-center h-auto w-auto px-4 lg:h-[390px] lg:w-[500px]">
            <p className="text-lg font-normal text-or1 dark:text-gray-100 text-justify leading-relaxed">
            Hi, I'm Sumedh Sawant, a Computer Science student and Frontend Developer. I have a passion for creating visually appealing and user-friendly applications. I enjoy combining my love for drawing with my skills in development to craft creative and engaging digital experiences, while also making cool notes to help others learn.
            </p>
            <button className='bg-or1 text-white rounded-3xl py-1 px-2 mt-4 h-12 w-40 text-xl'>
              <a 
                href='https://buymeacoffee.com/summ05' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                Support
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
