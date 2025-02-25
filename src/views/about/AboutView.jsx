import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutView = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tech = [
    { id: 1, name: 'HTML', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', status: 'Advanced' },
    { id: 2, name: 'CSS', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', status: 'Advanced' },
    { id: 3, name: 'JavaScript', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png', status: 'Advanced' },
    { id: 4, name: 'VueJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp', status: 'Intermediate' },
    { id: 5, name: 'AlpineJS', imageUrl: 'https://avatars.githubusercontent.com/u/59030169?s=200&v=4', status: 'Beginner' },
    { id: 6, name: 'NodeJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png', status: 'Beginner' },
    { id: 7, name: 'Tailwind', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', status: 'Advanced' },
    { id: 8, name: 'Bootstrap', imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png', status: 'Intermediate' },
    { id: 9, name: 'ReactJS', imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', status: 'Beginner' },
    { id: 10, name: 'Flutter', imageUrl: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', status: 'Advanced' }
  ];

  const tools = [
    { id: 1, name: 'Git', imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', status: 'Version Control' },
    { id: 2, name: 'GitHub', imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', status: 'Git Hosting' },
    { id: 3, name: 'NPM', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png', status: 'Package Manager' },
    { id: 4, name: 'MySQL', imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png', status: 'Database' },
  ];

  return (
    <div className="bg-black min-h-screen text-white w-full">
      <Navbar />

      {/* About Me Section */}
      <div className="max-w-[90rem] mx-auto mt-32 p-14 bg-[#1e1e1f] border border-[#383838] rounded-3xl w-full">
        <h2 className="text-5xl font-bold flex items-center gap-4 mb-10"  data-aos="fade-right">
          About Me
          <div className="h-[4px] w-48 bg-amber-400"></div>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-20">
          <img 
            data-aos="fade-right"
            className="w-64 md:w-96 rounded-full shadow-lg border-4 border-amber-400 hover:scale-105 transition-transform"
            src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
            // https://media.licdn.com/dms/image/v2/D5635AQFBg8MY1BoAUA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735277347664?e=1739376000&v=beta&t=MBoQqI0Z2XZpViCKU8FY8T6FuPzLlEVAgvIV6LQpYZ0
            alt="Foto" 
          />
          <p 
            data-aos="fade-left"
            className="text-2xl text-gray-300 text-justify leading-relaxed"
          >
            Hi everyone! My name is <span className="text-amber-400 font-semibold">Reo Wicaksono</span>. I am a Bachelor’s graduate in Informatics Engineering from Universitas Negeri Malang with a strong passion for frontend development,specializing in both web and mobile applications. I am deeply interested in technology and actively keep up with the latest advancements, particularly in Artificial Intelligence (AI) and Machine Learning (ML). I am a disciplined, hardworking, and adaptable individual who thrives both in independent work and team environments. My goal is to continuously learn and grow in the tech field, delivering innovative solutions and creating exceptional user experiences through modern application development.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-[90rem] mx-auto mt-20 p-14 w-full">
        <h2 className="text-5xl font-bold flex items-center gap-4 mb-10">
          <div className="h-[4px] w-40 bg-amber-400"></div> Skills
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 mb-10">
          <button 
            className={`px-8 py-4 rounded-lg cursor-pointer transition-all text-xl ${activeTab === 1 ? 'bg-amber-400 text-black' : 'bg-gray-700 text-white'}`} 
            onClick={() => setActiveTab(1)}
          >
            Tech Stack
          </button>
          <button 
            className={`px-8 py-4 rounded-lg cursor-pointer transition-all text-xl ${activeTab === 2 ? 'bg-amber-400 text-black' : 'bg-gray-700 text-white'}`} 
            onClick={() => setActiveTab(2)}
          >
            Tools
          </button>
        </div>

        {/* Display Tech Stack / Tools */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 cursor-pointer">
          {(activeTab === 1 ? tech : tools).map((item) => (
            <div 
              key={item.id} 
              data-aos="fade-up"
              className="flex items-center gap-6 border border-amber-200 p-8 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 transition-all hover:scale-105"
            >
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 transition-transform transform hover:scale-125" />
              <div>
                <h3 className="text-2xl font-medium text-white">{item.name}</h3>
                <p className="text-lg text-gray-400">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutView;
