import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function Y1sn() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 px-5">
        <div className="flex justify-center mr-16">
          <div className="text-center text-or1 dark:text-gray-100 font-bold pt-10 ml-16 md:ml-28 h-28 md:h-28 rounded-3xl md:w-[450px] w-[350px] md:text-4xl text-2xl">
            Year 1 [Short Notes]
          </div>
        </div>

        <div className="main md:h-[50vh] h-[30vh] font-ubuntu text-center mt-20 mx-auto w-[500px]">
          <p className='text-white bg-[#008080] dark:bg-gray-700 md:h-52 w-80 h-36 md:w-full md:text-4xl pt-12 ml-6 text-xl font-bold md:pt-20 rounded-3xl'>  
            Will Upload Soon.... 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Y1sn;