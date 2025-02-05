import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    name: "Soca Ai - MBKM Internship",
    imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQFuzcfpkIRugQ/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1696590955388?e=1739404800&v=beta&t=MFbYWlX3Q5mvDLCwE09iIDn-ZVL2DqdIYMz1U1d1eZ8",
  },
  {
    id: 2,
    name: "Career Network - Internship",
    imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQHXXsmrQrpCBQ/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1696590867213?e=1739379600&v=beta&t=CWWb6-3KmDb9eYugB0dyOvEYsoe2ukhZpYXH4IUDYvg",
  },
  {
    id: 3,
    name: "Hackerrank - Basic Problem Solving",
    imageUrl: "/img/ps-basic.png",
  },
  {
    id: 4,
    name: "Hackerrank - Intermediate Problem Solving",
    imageUrl: "/img/ps-inter.png",
  },
  {
    id: 5,
    name: "Hackerrank - Javascript Basic",
    imageUrl: "/img/js-basic.png",
  },
  {
    id: 6,
    name: "Hackerrank - Javascript Intermediate",
    imageUrl: "/img/js-inter.png",
  },
 
];

const CertificationView = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certifications : certifications.slice(0, 8);

  return (
    <div className=" min-h-screen text-white mb-20">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold">All Certificates</h2>
          <p className="text-lg text-gray-400 mt-2 italic">*From new to old</p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: cert.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#2a2a2c] p-4 rounded-lg shadow-lg hover:bg-[#343438] transition-all text-center"
            >
              <img
                src={cert.imageUrl}
                alt={cert.name}
                className="w-full h-auto rounded-lg object-cover"
              />
              <p className="text-gray-300 text-sm mt-3">{cert.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        {!showAll && (
          <div className="flex justify-center mt-8 ">
            <button
              onClick={() => setShowAll(true)}
              className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-red-600 transition-all"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationView;
