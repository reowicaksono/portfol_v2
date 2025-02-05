import { Route, Routes } from 'react-router';
import Home from './views/home/HomeView.jsx';
import About from './views/about/AboutView.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Portfolio from './views/portfolio/PortfolioView.jsx';
import Experience from './views/experience/ExperienceView.jsx';
import Ceritification from './views/certification/CertificationView.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Waktu animasi dalam ms
      once: true, // Animasi hanya muncul sekali saat scroll
    });
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="certification" element={<Ceritification />} />
    </Routes>
  );
}

export default App;
