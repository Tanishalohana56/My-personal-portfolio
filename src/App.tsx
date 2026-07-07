import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black selection:bg-pink-500/20 selection:text-pink-300" id="app-root">
      {/* Dynamic Ambient Background Vector Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec489908_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none -z-20" />
      
      {/* Custom Global Background Color Halos */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-pink-950/15 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* Floating Glass Navbar */}
      <Navbar onDownloadResume={() => setIsResumeOpen(true)} />

      {/* Structured Sections Grid */}
      <main className="relative z-10">
        {/* Section 1: Hero Cover */}
        <Hero />

        {/* Section 2: Personal Journey and Credentials */}
        <About />

        {/* Section 3: Technical Skills Matrix */}
        <Skills />

        {/* Section 4: Work History Timeline */}
        <Experience />

        {/* Section 5: Dynamic Sandbox Projects */}
        <Projects />

        {/* Section 6: Connect with Me form */}
        <Contact />
      </main>

      {/* Corporate Professional Footer */}
      <Footer />

      {/* Double Layer Printable CV Overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
