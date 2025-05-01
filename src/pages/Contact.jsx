import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex items-center justify-center text-white p-10 md:p-12 min-h-screen"
    >
      {/* Inner Container */}
      <div className="flex flex-col items-center bg-gradient-to-r from-gray-800 to-gray-900 justify-center gap-8 bg-opacity-10 p-8 rounded-lg shadow-xl w-4/5">
        {/* Contact Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-sm md:text-lg font-light">
            I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, 
            feel free to reach out. I'm always open to discussing new opportunities, collaborations, or sharing insights. 
            Connect with me via email, LinkedIn, or GitHub, and let’s create something amazing together!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 text-sm md:text-base truncate"
          >
            <MdOutlineEmail className="w-15 md:w-0" size={24} /> 
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              priyanshubodana9@gmail.com
            </span>
          </button>
          <a
            href="https://www.linkedin.com/in/priyanshubodana9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            <CiLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://github.com/Priyanshu0017"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            <FaGithub size={24} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;