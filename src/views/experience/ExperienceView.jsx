import React from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";

const professionalExperiences = [
  {
    id: 1,
    company: "Career Network",
    role: "Backend Developer",
    type: "Internship",
    date: "Feb 2022 - Jun 2022",
    url: "https://career-network.com",
    tasks: [
      "Development Web Company",
      "Scrum",
      "Managing deployment processes and backend administration, ensuring smooth application operation",
    ],
  },
  {
    id: 2,
    company: "Soca AI",
    role: "Mobile Developer",
    type: "Internship",
    url: "https://soca.ai",
    date: "Feb 2023 - Jun 2023",
    tasks: [
      "Designing and developing quiz in Android application with React Native",
      "Designing and developing Partnership in Android & iOS with Flutter",
      "Ensuring smooth application operation",
      "Conducting project management for internal teams using Agile methodology to ensure timely project delivery.",
    ],
  },
  {
    id: 3,
    company: "PT MY TRIP MY STYLE",
    role: "Mobile Developer",
    type: "Freelance",
    url: "https://mytripmystyle.com",
    date: "Aug 2023 - Feb 2024",
    tasks: [
      "Designing and developing user Android application for travel agency with React Native",
      "Designing and developing mitra Android application for travel agency with React Native",
      "Migrating tech stack from React Native to Flutter for mitra app (for scalable maintenance)",
      "Ensuring smooth application operation",
      "Conducting project management for internal teams using Scrum methodology to ensure timely project delivery.",
    ],
  },
  {
    id: 4,
    company: "Robo Edu",
    role: "Lecture Coding Kids",
    type: "Freelance",
    url: "https://roboedu.id/",
    date: "May 2024 - July 2024",
    tasks: [
      "Teaching coding lessons for kids",
      "Designing and developing game projects using Scratch",
    ],
  },
  {
    id: 5,
    company: "PCN Co, LTD.",
    role: "Frontend Developer",
    type: "Full-time",
    url: "https://pcnict.com/",
    date: "May 2024 - Sept 2024",
    tasks: [
      "Do project management planning using Trello",
      "Do frontend development using Electron.js, React.js, and Tailwind CSS",
      "Do backend development using Python for data communication side",
      "Training YOLO v8 machine learning models on vehicle detection objects",
      "Perform migration protocols from Windows to Linux, ensuring applications run smoothly",
    ],
  },
];

const education = [
  {
    id: 1,
    institution: "Universitas Negeri Malang",
    degree: "Bachelor of Computer Science",
    date: "Sept 2020 - Apr 2024",
    gpa: "GPA: 3.78",
    thesis: "Data Science for My Thesis",
    url: "https://um.ac.id/",
  },
];

const ExperienceView = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto pt-32 px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-lg text-gray-400 mt-2">
            My past internships & work experiences
          </p>
        </motion.div>

        {/* Professional Experience Section */}
        <h3 className="text-3xl font-bold text-amber-400 mb-6">Professional Experience</h3>
        <div className="relative flex flex-col items-center">
          {/* Garis Timeline */}
          <div className="absolute left-10 top-0 w-[4px] bg-amber-400 h-full"></div>

          {professionalExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center mb-12 w-full"
            >
              {/* Titik Lokasi */}
              <div className="absolute left-5 bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                📍
              </div>

              {/* Konten Experience */}
              <div className="ml-20 w-[80%] p-6 bg-[#1e1e1f] border border-[#383838] rounded-xl shadow-lg hover:bg-[#282828] transition-all">
                <p className="text-gray-300">{exp.date}</p>
                <h3 className="text-2xl font-semibold text-white">
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700">
                    {exp.company}
                  </a>
                </h3>
                <h4 className="text-xl text-amber-400">
                  {exp.role} <span className="font-bold">({exp.type})</span>
                </h4>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <h3 className="text-3xl font-bold text-amber-400 mt-16 mb-6">Education</h3>
        <div className="relative flex flex-col items-center">
          {/* Garis Timeline */}
          <div className="absolute left-10 top-0 w-[4px] bg-amber-400 h-full"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center mb-12 w-full"
            >
              {/* Titik Lokasi */}
              <div className="absolute left-5 bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                🎓
              </div>

              {/* Konten Education */}
              <div className="ml-20 w-[80%] p-6 bg-[#1e1e1f] border border-[#383838] rounded-xl shadow-lg hover:bg-[#282828] transition-all">
                <p className="text-gray-300">{edu.date}</p>
                <h3 className="text-2xl font-semibold text-white">
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700">
                    {edu.institution}
                  </a>
                </h3>
                <h4 className="text-xl text-amber-400">{edu.degree}</h4>
                <p className="text-gray-300">{edu.gpa}</p>
                <p className="text-gray-300">{edu.thesis}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExperienceView;
