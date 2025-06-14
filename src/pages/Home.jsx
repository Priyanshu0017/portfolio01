import React from "react";
import Img from "../assets/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut-removebg-preview.png";
import TextChanger from "../components/TextChanger";
import { FaDownload } from "react-icons/fa";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-start mt-10 p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className=" text-sm md:text-xl tracking-tight">
          I'm a passionate Full Stack Web Developer with hands-on experience in
          building responsive websites and modern UI designs using the MERN
          stack (MongoDB, Express.js, React.js, Node.js). I love turning ideas
          into real-world web applications that are fast, functional, and
          user-friendly. From frontend interfaces to backend logic, I bring
          complete web solutions to life.
        </p>

        <div className="flex flex-col md:flex-row mt-10 md:mt-10">
          <button className="mt-5 md:m-4 w-full md:w-2/4 text-white py-2 px-3 text-sm md:text-lg md:py-3 md:px-5 hover:opacity-85 duration-300 hover:bg-transparent hover:border hover:border-white hover:scale-105 font-semibold rounded-3xl bg-[#465997]">
            FullStack Developer
          </button>
          <button className="mt-5 md:m-4 gap-3 w-full md:w-2/4 flex items-center justify-center text-white py-2 px-3 text-sm md:text-lg md:py-3 md:px-5 hover:opacity-85 duration-300 hover:bg-transparent hover:border hover:border-white hover:scale-105 font-semibold rounded-3xl bg-green-600">
            <a
              href="https://drive.google.com/uc?export=download&id=1VrlQCGB3aKOwwKmW36aerBouYIvKd_ZS"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
            <FaDownload size={20} />
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img className="" src={Img} alt="" />
      </div>
    </div>
  );
};
export default Home;
