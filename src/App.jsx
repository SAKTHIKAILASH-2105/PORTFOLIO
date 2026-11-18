import React, { useState } from 'react';
import { CircuitBackground } from './components/CircuitBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';
import { LoadingScreen } from './components/LoadingScreen';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { CadShowcase } from './sections/CadShowcase';
import { Journey } from './sections/Journey';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyber-cyan/30 selection:text-cyber-neon overflow-x-hidden">
      {/* Initial High-Tech Bootloader Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Interactive Circuit Canvas Background */}
      <CircuitBackground />

      {/* Top Floating Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <CadShowcase />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      {/* Global Engineering Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
