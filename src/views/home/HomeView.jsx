import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/navbar";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const HomeView = () => {
  const toRotate = ["Web Developer", "Mobile Developer", "Tech Enthusiast", "Cyber Security Enthusiast"];
  const period = 2000;
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let timer = setTimeout(() => {
      let i = loopNum % toRotate.length;
      let fullTxt = toRotate[i];
      let updatedText = isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullTxt) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setDelta(isDeleting ? 100 : 200);
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, delta]);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <main className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-28 mt-20">
          
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <p className="text-amber-400 text-2xl md:text-3xl font-medium">Hello World, I'm</p>
            <h1 className="text-6xl md:text-7xl font-extrabold">Reo Wicaksono</h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mt-3">
              <span className="border-r-4 border-white pr-2">{text}</span>
            </h2>
            <p className="text-gray-300 mt-6 text-lg md:text-xl">Welcome to My personal website. <span className="inline-block animate-wave">👋🏼</span></p>
            
            {/* Download CV Button */}
            <div className="flex flex-col items-center md:items-start mt-8">
              <button className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                <a target="_blank" href="https://drive.google.com/file/d/12ZftpFJGCs3NnkIVbStLtvjaKkVyOmw4/view?usp=sharing">Download CV</a>
              </button>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/in/reo-wicaksono-9a89ab192/" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full text-white text-2xl transition-all">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/reowicaksono_" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-pink-500 rounded-full text-white text-2xl transition-all">
                  <FaInstagram />
                </a>
                <a href="https://github.com/reowicaksono" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-900 rounded-full text-white text-2xl transition-all">
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img
              alt="avatar"
              width="400"
              height="400"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-amber-400 shadow-[0_0_30px_amber-400]"
              src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-amber-400 blur-2xl opacity-40"></div>
          </motion.div>
        
        </main>
      </div>
    </>
  );
};

export default HomeView;
