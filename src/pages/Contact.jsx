import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useDarkMode } from '../context/DarkModeContext';

function Contact() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .send(
        'service_q22ly26',  // Service ID
        'template_3evpy56',  // Template ID
        formData,            // Form data (name, email, message)
        '0WGRXWHpVSALUhzQ0'  // Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          alert('Error sending message: ' + error.text);
        }
      );
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 px-5">
        <p className="text-center text-4xl font-semibold font-ubuntu text-or1 my-5 pt-5">
          Contact Me
        </p>
        <div className="main flex flex-col lg:flex-row h-full justify-center md:mr-40 font-ubuntu">
          {/* Left Section */}
          <div className="lft flex flex-col mb-20 md:ml-40 mt-10 space-y-6 border-r-0 lg:border-r-[3px] lg:pr-40 lg:mr-40 border-or1 items-center lg:items-start mx-auto">
            {/* Name Input */}
            <div className="h-16 border-[1px] border-or1 rounded-2xl w-[90%] lg:w-[396px] flex items-center px-6 space-x-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 placeholder:text-[#c5c5c5] dark:text-gray-100 dark:bg-[#333333] text-lg text-or1 focus:outline-none"
              />
              <img src="/pfle.svg" alt="Profile Icon" className="md:w-8 md:h-8 w-6 h-6" />
            </div>

            {/* Email Input */}
            <div className="h-16 border-[1px] border-or1 rounded-2xl w-[90%] lg:w-[396px] flex items-center px-6 space-x-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="flex-1 placeholder:text-[#c5c5c5]  dark:bg-[#333333] text-lg text-or1 dark:text-gray-100  focus:outline-none"
              />
              <img src="/mail.svg" alt="Email Icon" className="md:w-8 md:h-8 pr-12 md:pr-0" />
            </div>

            {/* Message Input */}
            <div className="h-48 border-[1px] border-or1 dark:bg-[#333333] text-or1 rounded-2xl w-[90%] lg:w-[396px] flex flex-col items-start px-6 py-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="w-full h-44 placeholder:text-[#c5c5c5] dark:text-gray-100 dark:bg-[#333333] text-lg focus:outline-none"
              />
            </div>

            {/* Send Button */} 
            <div
              className="flex justify-center mt-5 md:w-full bg-or1 w-[200px] lg:w-[250px] text-center text-white text-xl lg:text-2xl font-medium pt-2 h-12 rounded-3xl cursor-pointer"
              onClick={handleSubmit}
            >
              Send
            </div>
          </div>

          {/* Right Section */}
          <div className="rgt hidden lg:flex ">
            <img src="/cnfse.svg" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
