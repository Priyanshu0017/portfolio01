import React from "react";
import { FaGoogle, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import img from '../assets/images.png';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>
      <div className="flex flex-col items-center">
        {/* Single Experience Entry */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-950 bg-opacity-45 rounded-lg p-6 w-full max-w-4xl">
          {/* Left Section: Company Name, Job Title, Duration, and Description */}
          <div className="text-white text-center md:text-left w-4/5">
            <h2 className="text-xl md:text-2xl font-semibold">E-skills Web</h2>
            <p className="text-sm md:text-base font-light">Web Developer Intern</p>
            <p className="text-sm md:text-base font-thin">Oct 2024 - Present</p>
            <p className="text-sm md:text-base mt-4">
              I am a full-stack developer currently doing an internship as a web developer at E-skills Web. 
              My role involves building scalable and responsive web applications using modern technologies 
              like React, Tailwind CSS, and the MERN stack. I am passionate about delivering high-quality 
              user experiences and continuously improving my skills.
            </p>
          </div>
          {/* Right Section: Company Logo */}
          <div className="mt-4 md:mt-0">
            <img src={img} alt="Eskills logo" className="rounded-full w-24 h-24" />
          </div>
        </div>
      </div>

      {/* Footer with Icons */}
      <div className="mt-10 flex justify-center gap-6 text-white">
        <FaHtml5 size={40} color="#E34F26" title="HTML5" />
        <FaCss3Alt size={40} color="#1572B6" title="CSS3" />
        <FaJs size={40} color="#F7DF1E" title="JavaScript" />
        <SiMongodb size={40} color="#47A248" title="MongoDB" />
        <SiExpress size={40} color="#FFFFFF" title="Express.js" />
        <FaReact size={40} color="#61DAFB" title="React.js" />
        <SiTailwindcss size={40} color="#38B2AC" title="Tailwind CSS" />
        <FaBootstrap size={40} color="#7952B3" title="Bootstrap" />
      </div>
    </div>
  );
};

export default Experience;