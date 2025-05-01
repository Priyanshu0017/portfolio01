import React from "react";

const ProjectCard = ({ title, description, image, demoLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="rounded-lg mb-4" src={image} alt={title} />
      <h3 className="text-xl md:text-2xl font-bold leading-normal mb-2">{title}</h3>
      <p className="text-sm md:text-md leading-tight text-gray-400 mb-4">{description}</p>
      <div className="mt-auto">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-2 px-4 text-sm md:text-lg hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;