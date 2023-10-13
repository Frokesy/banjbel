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

function App() {
  const location = useLocation();
  return (
    <Container>
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
        </Routes>
      </AnimatePresence>
    </Container>
  );
}

export default App;
