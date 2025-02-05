import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";

const HomeView = () => {
  const toRotate = ["Web Developer", "Full-stack Engineer", "Informatics Student", "Tech Enthusiast"];
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
        
        <main className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 mt-24">
            <div className="text-center md:text-left">
            <p className="text-amber-400 text-lg">Hello World, I'm</p>
            <h1 className="text-5xl font-bold">Bagas Rakha</h1>
            <h2 className="text-xl font-semibold text-amber-400 mt-2">
                <span className="border-r-2 border-white pr-1">{text}</span>
            </h2>
            <p className="text-gray-300 mt-4">Welcome to My personal website. <span className="inline-block animate-wave">👋🏼</span></p>
            </div>
            <div className="relative">
            <img
                alt="avatar"
                width="300"
                height="300"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-amber-400 shadow-[0_0_20px_amber-400]"
                src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-amber-400 blur-xl opacity-40"></div>
            </div>
        </main>
        </div>
    </>
  );
};

export default HomeView;
