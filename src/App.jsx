import { Route, Routes } from 'react-router';
import Home from './views/home/HomeView.jsx';
import About from './views/about/AboutView.jsx';


function App() {

  return (
   <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

    </Routes>

  )
}

export default App
