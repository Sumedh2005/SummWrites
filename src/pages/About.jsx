import React from 'react';

function About() {
  return (
    <>
     <p className="text-center text-4xl font-semibold font-ubuntu text-or1 my-8 pt-5">
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
    <p className="text-lg font-normal text-or1 text-justify leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
      nostrum expedita ipsum itaque deserunt iure deleniti ex dolorum
      provident debitis quam fugit cum, quas reprehenderit amet autem.
      Mollitia, sequi. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aperiam quos nostrum expedita ipsum itaque deserunt iure deleniti
      ex dolorum provident debitis quam fugit cum, quas reprehenderit amet
      autem. Mollitia, sequi.
    </p>
  </div>
</div>

    </>
  );
}

export default About;
