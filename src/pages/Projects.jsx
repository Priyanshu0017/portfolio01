import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.png";
import img10 from "../img/img10.png";
import img11 from "../img/img11.png";
import img12 from "../img/img12.png";
import img13 from "../img/img13.png";
import img14 from "../img/img14.png";
import img15 from "../img/img15.png";
import img16 from "../img/img16.png";
import img17 from "../img/img17.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Projects</h1>
      <div className="flex flex-col md:flex-row items-center">
      {/* Navigation Buttons */}
      <div className="mb-16 pt-10 flex w-full md:w-3/5 flex-col justify-center gap-6">
        <a
          href="#ui-designs"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
        >
          UI Designs
        </a>
        <a
          href="#clone-websites"
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
        >
          Clone Websites
        </a>
        <a
          href="#frontend-projects"
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
        >
          Frontend Projects
        </a>
        <a
          href="#fullstack-projects"
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300"
        >
          Full Stack Projects
        </a>
      </div>
      <div className="hidden md:inline w-2/5 p-5" >
      <img src={img17} alt="" />
      </div>
      </div>

      {/* UI Designs Section */}
      <div id="ui-designs" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">UI Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Credit UI"
            description="A sleek and modern credit card interface designed using HTML and CSS."
            image={img3}
            demoLink="https://priyanshu0017.github.io/Credit/"
          />
          <ProjectCard
            title="Metafi"
            description="A futuristic UI design for a financial platform, built with HTML and CSS."
            image={img1}
            demoLink="https://priyanshu0017.github.io/Metafi/"
          />
          <ProjectCard
            title="CashBank"
            description="A responsive banking dashboard UI created using HTML and CSS."
            image={img2}
            demoLink="https://priyanshu0017.github.io/Cashbank/"
          />
          <ProjectCard
            title="E-Store"
            description="An elegant e-commerce store UI with a focus on simplicity and usability."
            image={img5}
            demoLink="https://priyanshu0017.github.io/Estore/"
          />
          <ProjectCard
            title="DineIn"
            description="A restaurant booking and menu UI with a clean and modern design."
            image={img4}
            demoLink="https://priyanshu0017.github.io/Dineln/"
          />
          <ProjectCard
            title="Pluralsight Login Page"
            description="A login page inspired by Pluralsight, showcasing a professional design."
            image={img6}
            demoLink="https://priyanshu0017.github.io/Pluralsight-Loginpage/"
          />
        </div>
      </div>

      {/* Clone Websites Section */}
      <div id="clone-websites" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Clone Websites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Starbucks Clone"
            description="A clone of the Starbucks website, built using HTML, CSS, and grid properties for layout."
            image={img7}
            demoLink="https://priyanshu0017.github.io/Starbucks-clone2/"
          />
          <ProjectCard
            title="Panfilla Clone"
            description="A clone of the Panfilla website, showcasing a clean and responsive design using HTML and CSS."
            image={img8}
            demoLink="https://priyanshu0017.github.io/Panfila-clone/"
          />
          <ProjectCard
            title="FruitNuts Clone"
            description="A clone of the FruitNuts website, featuring a vibrant and colorful design created with HTML and CSS."
            image={img9}
            demoLink="https://priyanshu0017.github.io/Fruitnuts/"
          />
          <ProjectCard
            title="FoodZone Clone"
            description="A clone of the FoodZone website, designed with HTML and CSS to highlight food delivery services."
            image={img10}
            demoLink="https://priyanshu0017.github.io/Foodzone/"
          />
          <ProjectCard
            title="Hindustan Pencils Clone"
            description="A clone of the Hindustan Pencils website, built with HTML and CSS to showcase stationery products."
            image={img11}
            demoLink="https://priyanshu0017.github.io/Hindustan-pencils/"
          />
          <ProjectCard
            title="JetCost Clone"
            description="A clone of the JetCost website, featuring a travel booking interface created with HTML and CSS."
            image={img12}
            demoLink="https://priyanshu0017.github.io/Jetcost/"
          />
          <ProjectCard
            title="Krystal Clone"
            description="A clone of the Krystal website, showcasing a modern and responsive design using HTML and CSS."
            image={img13}
            demoLink="https://priyanshu0017.github.io/Krystal/"
          />
        </div>
      </div>

      {/* Frontend Projects Section */}
      <div id="frontend-projects" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frontend Projects</h2>
        <div className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={img14}
              alt="Frontend Project"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frontend Project: Shortify</h2>
            <p className="text-gray-400">
              Shortify is a frontend project built using React.js with Context API and reducers. It is
              a link shortener application that takes a long URL as input and returns a shortened link
              for easy sharing.
            </p>
            <a
              href="https://shortify-amber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-2 px-4 text-sm md:text-lg hover:bg-transparent hover:border hover:border-white hover:opacity-90 duration-300 mt-5 w-full text-center hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              View Demo
            </a>
          </div>
        </div>

        <div className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={img15}
              alt="Frontend Project"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frontend Project: Crypto-Mart</h2>
            <p className="text-gray-400">
              Crypto-Mart is a frontend project built using React, Redux, and Tailwind CSS. It is a
              cryptocurrency tracker web app that allows users to search for any cryptocurrency, add
              them to a cart, and view brief descriptions with links to their official websites. It
              also includes authentication (login/register) and displays trending coins on the home
              page.
            </p>
            <a
              href="https://crypto-mart-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-2 px-4 text-sm md:text-lg hover:bg-transparent hover:border hover:border-white hover:opacity-90 duration-300 mt-5 w-full text-center hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>

      {/* Full Stack Projects Section */}
      <div id="fullstack-projects" className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={img16}
            alt="Full Stack Project"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Full Stack Project: Lapcare</h2>
          <p className="text-gray-400">
            Lapcare is a full-stack project built using the MERN stack (MongoDB, Express.js,
            React.js, Node.js) and Tailwind CSS. It includes user authentication (login/register)
            and allows users to raise complaints about their broken laptops, view their complaints,
            interact with admins via comments, and close complaints. Admins can view all users,
            manage complaints, reply to users, and close complaints.
          </p>
          <a
            href="https://lapcare01.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
           className="inline-block text-white py-2 px-4 text-sm md:text-lg hover:bg-transparent hover:border hover:border-white hover:opacity-90 duration-300 mt-5 w-full text-center hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;