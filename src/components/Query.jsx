import React, { useState } from "react";
import emailjs from "emailjs-com";

function Query() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_q22ly26", // Your Service ID
        "template_2j80f04", // Your Template ID
        {
          email: formData.email,
          message: formData.message,
        },
        "0WGRXWHpVSALUhzQ0" // Your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.text);
          alert("Your query has been sent. Thank you!");
          setFormData({ email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send your query. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="main font-ubuntu mt-10 h-[50vh] flex flex-col items-center space-y-6">
      {/* Title */}
      <p className="text-center font-semibold text-4xl text-or1 md:text-5xl ">
        Any Queries?
      </p>
      <p className="text-center font-light md:text-2xl text-lg text-or1 w-[500px] md:w-[650px] px-20 md:px-0 ">
        If you have any questions related to the notes, please feel free to
        email me
      </p>

      {/* Email Input */}
      <div className="h-12 border-[1px] border-or1 rounded-2xl w-[300px] md:w-[350px] sm:w-[280px] flex items-center px-4 space-x-2">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 placeholder:text-[#c5c5c5] text-lg focus:outline-none"
          required
        />
        <img src="/mail.svg" alt="Email Icon" className="w-6 h-6 " />
      </div>

      {/* Message Input */}
      <div className="h-20 md:border-[3px] border-[2px] border-or1 rounded-2xl w-[300px] md:w-[450px] flex items-center">
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className="flex-1 h-full pt-2 resize-none placeholder:text-[#c5c5c5] text-lg px-4 focus:outline-none rounded-l-2xl"
          required
        ></textarea>
        <button
          onClick={handleSubmit}
          className="h-full w-16 flex items-center justify-center rounded-r-2xl"
          disabled={isSending}
        >
          {isSending ? (
            <div className="loader w-6 h-6 border-2 border-t-transparent text-or1 rounded-full animate-spin"></div>
          ) : (
            <img src="/send.svg" alt="Send Icon" className="w-10 h-10" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Query;
