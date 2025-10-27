import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Teleconsultation from './pages/Teleconsultation';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teleconsultation" element={<Teleconsultation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default App;
