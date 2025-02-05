import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-80 px-6 py-5 flex justify-between items-center z-50 shadow-lg shadow-[0_0_20px_amber-400]">
      {/* Logo */}
      <button className="text-2xl text-[#ffdb70] font-semibold hover:text-amber-100 ml-2">
        REO WICAKSONO
      </button>

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-12 text-gray-300 text-2xl font-medium">
          {["Home", "About", "Experience", "Portfolio", "Certification"].map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative pb-1 border-b-2 transition-all duration-300 ${
                    isActive
                      ? "text-white border-amber-400"
                      : "border-transparent hover:text-white hover:border-amber-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="md:hidden text-white text-2xl focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-gray-300 text-xl font-medium">
              {["Home", "About", "Experience", "Portfolio"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `relative pb-1 border-b-2 transition-all duration-300 ${
                        isActive
                          ? "text-white border-amber-400"
                          : "border-transparent hover:text-white hover:border-amber-400"
                      }`
                    }
                    onClick={() => setIsOpen(false)} 
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GitHub Icon */}
      <a
        href="https://github.com/reowicaksono"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block mr-6"
      >
        <img
          className="w-14 rounded-full transition-transform duration-300 hover:scale-110"
          src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
          alt="GitHub"
        />
      </a>
    </nav>
  );
};

export default Navbar;
