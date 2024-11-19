import React from 'react'

function Footer() {
  return (
    <>
      <div className="main h-auto lg:h-56 p-6 md:px-16 md:bg-[url('/fbg.svg')] bg-[url('/mbf.svg')] ">
        <div className="flex flex-col lg:flex-row justify-between font-ubuntu space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="lft text-or1 flex flex-col items-center lg:items-start">
            <p className="text-4xl font-bold">Sumedh Sawant</p>
            <p className="text-md">Mumbai | Chennai</p>
            <p className="text-md">SRM Kattankalathur</p>
          </div>

          {/* Right Section */}
          <div className="rgt text-or1 flex flex-col items-center lg:items-end">
            <p className="md:text-3xl text-2xl font-medium">Follow me on</p>
            <div className="icn mt-2 flex flex-row space-x-4">
  {/* Instagram Link */}
  <a 
    href="https://www.instagram.com/sumedh__30/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src="ig.svg" className="h-7 w-7" alt="Instagram" />
  </a>

  {/* GitHub Link */}
  <a 
    href="https://github.com/Sumedh2005" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src="gt.svg" className="h-7 w-7" alt="GitHub" />
  </a>

  {/* LinkedIn Link */}
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
        <p className="text-center mt-10 lg:mt-[75px] text-xl lg:text-[22px] px-20  md:px-0 font-ubuntu font-light text-white">
          Made with ♡ so I can be the reason you pass your exams next time :)
        </p>
      </div>
    </>
  )
}

export default Footer
