import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useCursorPosition } from "./hooks/useCursorPosition";
import { generatePDF } from "./utils/generatePDF";

import Navbar from "./components/Navbar";
import CursorEffect from "./components/CursorEffect";
import PdfButton from "./components/PdfButton";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  const [isVisible, registerRef] = useIntersectionObserver({ threshold: 0.1 });
  const containerRef = useCursorPosition();

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden"
    >
      <CursorEffect />
      <Navbar />
      <PdfButton onClick={generatePDF} />

      <Hero
        sectionRef={registerRef("hero")}
        isVisible={isVisible["hero"]}
        onDownloadPdf={generatePDF}
      />
      <About
        sectionRef={registerRef("about")}
        isVisible={isVisible["about"]}
      />
      <Experience
        sectionRef={registerRef("experience")}
        isVisible={isVisible["experience"]}
      />
      <Education
        sectionRef={registerRef("education")}
        isVisible={isVisible["education"]}
      />
      <Skills
        sectionRef={registerRef("skills")}
        isVisible={isVisible["skills"]}
      />
      <Contact
        sectionRef={registerRef("contact")}
        isVisible={isVisible["contact"]}
        onDownloadPdf={generatePDF}
      />

      <Footer />
    </div>
  );
};

export default App;