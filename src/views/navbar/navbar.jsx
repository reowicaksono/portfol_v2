import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-80 px-4 py-6 flex justify-between items-center z-50 shadow-lg shadow-[0_0_20px_amber-400]">
      <button className="text-lg text-[#ffdb70] font-semibold hover:text-amber-100 ml-6">
        bagasRakha();
      </button>
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-12 text-gray-300 text-xl font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 border-b-2 ${isActive ? "text-white border-amber-400" : "border-transparent hover:text-white hover:border-amber-400"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pb-1 border-b-2 ${isActive ? "text-white border-amber-400" : "border-transparent hover:text-white hover:border-amber-400"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `pb-1 border-b-2 ${isActive ? "text-white border-amber-400" : "border-transparent hover:text-white hover:border-amber-400"}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `pb-1 border-b-2 ${isActive ? "text-white border-amber-400" : "border-transparent hover:text-white hover:border-amber-400"}`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <a href="https://github.com/rakha-elctrnx" target="_blank" rel="noopener noreferrer" className="mr-6">
        <img
          className="w-9 rounded-full"
          src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
          alt="GitHub"
        />
      </a>
    </nav>
  );
};

export default Navbar;
