import React from 'react';
import img1 from '../assets/21004063-removebg-preview.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiBootstrap, SiExpress } from 'react-icons/si';
import { MdOutlineWork, MdOutlineChat } from 'react-icons/md';

const About = () => {
  return (
    <div id="About" className="text-white mt-5 bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-xl mx-0 md:mx-20 bg-opacity-30 md:rounded-lg p-12">
      {/* About Myself Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6">About Myself</h2>
        <div className="md:flex items-center gap-8">
          <img className="md:h-80 rounded-lg shadow-lg" src={img1} alt="About Myself" />
          <p className="text-sm md:text-lg leading-relaxed mt-6 md:mt-0">
            I’m a dedicated and passionate individual from Ujjain, Madhya Pradesh, recently graduated with a B.Tech in Computer Science and Engineering from Malwa Institute of Science and Technology, Indore. Throughout my academic journey, I have cultivated a strong interest in web development, which I continue to pursue beyond the classroom. Currently, I’m gaining real-world experience as a Web Developer Intern at E-Skills Web, where I’m sharpening my skills and contributing to meaningful projects. I’m always eager to learn, grow, and build impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6">Education</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="text-cyan-400 text-2xl font-bold">🎓</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Secondary Education (10th) </h3>
              <p className="text-sm md:text-lg text-gray-400">Mahadji Scindia H.S School, Ujjain (M.P.), 2018 - 2019</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-cyan-400 text-2xl font-bold">🎓</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Senior Secondary Education (12th) </h3>
              <p className="text-sm md:text-lg text-gray-400">Mahadji Scindia H.S School, Ujjain (M.P.), 2020 - 2021</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-cyan-400 text-2xl font-bold">🎓</span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-sm md:text-lg text-gray-400">Malwa Institute of Science and Technology, Indore (M.P.), 2021 - 2025</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Technical Skills Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">HTML</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">CSS</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <FaJsSquare className="text-4xl text-yellow-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <FaReact className="text-4xl text-cyan-400 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">React.js</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <FaNodeJs className="text-4xl text-green-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Node.js</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <SiExpress className="text-4xl text-gray-400 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Express.js</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <SiMongodb className="text-4xl text-green-400 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">MongoDB</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <SiTailwindcss className="text-4xl text-cyan-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Tailwind CSS</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <SiBootstrap className="text-4xl text-purple-500 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Bootstrap</h3>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <MdOutlineChat className="text-4xl text-blue-400 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Good Communication</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <MdOutlineWork className="text-4xl text-yellow-400 mx-auto mb-2" />
            <h3 className="text-l md:text-xl font-semibold">Smart Working</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;