import React from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    name: "Detection Vehicle South Korea",
    imageUrl: "",
    status: "React Js - Python - Electron Js - Yolov8",
    tech: "Fulltime - PCN Co, LTD.",
    github: null,
  },
  {
    id: 2,
    name: "Soca Quiz",
    imageUrl: "/img/soca-ai.png",
    status: "React Native",
    tech: "Internship - Soca AI",
    github: null,
  },
  {
    id: 2,
    name: "E-Comsys",
    imageUrl: "",
    status: "Flutter",
    tech: "Internship - Soca AI",
    github: null,
  },
  {
    id: 3,
    name: "My Trip My Style",
    imageUrl: "/img/mtms.png",
    status: "React Native",
    tech: "Internship - PT MTMS",
    github: null,
  },
  {
    id: 4,
    name: "Neko App",
    imageUrl: "/img/neko-app.png",
    status: "Flutter",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/neko_app",
  },
  {
    id: 5,
    name: "E-Kerja",
    imageUrl: "/img/e-kerja.png",
    status: "Laravel",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/ekerja",
  },
  {
    id: 6,
    name: "Travel App",
    imageUrl: "/img/travel.png",
    status: "Flutter",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/travel-app",
  },
  {
    id: 7,
    name: "Apocalypse W",
    imageUrl: "/img/apocalypse.png",
    status: "Unity",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/sir-melon-jr",
  },
  {
    id: 8,
    name: "Dicoding Beginner",
    imageUrl: "/img/dicoding-beginner.png",
    status: "Flutter",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/dicoding_beginner",
  },
  {
    id: 9,
    name: "Code City",
    imageUrl: "/img/code-city.png",
    status: "Unity",
    tech: "Freelance",
    github: "https://github.com/reowicaksono/codecity",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-8 mb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold">Past Project Experience</h2>
          <p className="text-lg text-gray-400 mt-2">
            Explore the <span className="text-amber-400">projects I've worked on so far</span>
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: item.id * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 hover:bg-[#282828] transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{item.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.status}</p>
              <p className="text-amber-400 font-semibold mt-4">{item.tech}</p>

              {/* Action Buttons */}
              <div className="flex justify-end mt-4 space-x-3">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 rounded-full hover:bg-amber-400 transition-all"
                    title="View GitHub Repository"
                  >
                    🔗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
