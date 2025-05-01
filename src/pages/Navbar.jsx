import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 md:px-20 pt-6 md:shadow-xl">
      <span className="text-xl font-bold tracking-wide">
        <Link to={'/'}>Portfolio</Link>
      </span>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
          className="md:hidden right-10 top-6 transition-all duration-300 cursor-pointer"
        />
      )}
      <ul
        className={`${
          menu ? "block" : "hidden"
        }  top-16 left-0  text-white py-4 md:w-1/4 w-full rounded-lg shadow-lg md:static md:flex md:gap-6 md:bg-transparent md:shadow-none md:py-0`}
      >
        <Link to='About'>
          <li className="text-md transition-all duration-300 p-2 hover:bg-gray-700  rounded-md">
            About
          </li>
        </Link>
        <Link to="/Experience">
          <li className="text-md transition-all duration-300 p-2 hover:bg-gray-700 rounded-md">
            Experience
          </li>
        </Link>
        <Link to="/Projects">
          <li className="text-md transition-all duration-300 p-2 hover:bg-gray-700 rounded-md">
            Projects
          </li>
        </Link>
        <Link to="/Contact">
          <li className="text-md transition-all duration-300 p-2 hover:bg-gray-700 rounded-md">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;