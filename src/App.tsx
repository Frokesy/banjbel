import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Pricing from "./components/Pricing";
import Container from "./components/layout/Container";
import Registration from "./components/Registration";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Vision from "./components/Vision";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import Terms from "./components/Terms";
import { useEffect, useState } from "react";
import Popup from "./components/PopUp";
import Baff from "./components/Baff";

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const modalTimeout = setTimeout(openModal, 10000);
    return () => clearTimeout(modalTimeout);
  }, []);
  return (
    <Container>
      <Popup isOpen={isModalOpen} closeModal={closeModal} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/baff" element={<Baff />} />
        </Routes>
      </AnimatePresence>
    </Container>
  );
}

export default App;
