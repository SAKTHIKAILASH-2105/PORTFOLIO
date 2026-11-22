import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#06070b] text-[#f8fafc] font-sans selection:bg-purple-500/40 selection:text-white overflow-x-hidden">
        {/* Initial Electro-Mechanical Bootloader Screen */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {/* Desktop Precision Custom Cursor */}
        <CustomCursor />

        {/* Interactive Electro-Mechanical Fusion Canvas Background (Meshed Gears + Traces) */}
        <CircuitBackground />

        {/* Global Mechatronics Robotic Backdrop Texture Layer (6-Axis Robotic Arm) */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-[0.16] mix-blend-screen filter contrast-125 brightness-95"
          style={{ backgroundImage: "url('/images/mechatronics-bg.jpg')" }}
        />

        {/* Top Floating Brushed Metallic Navigation */}
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
    </ThemeProvider>
  );
}

export default App;
