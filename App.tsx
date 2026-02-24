import React, { useEffect } from 'react';
import { TopBar } from './components/sections/TopBar';
import { Hero } from './components/sections/Hero';
import { VideoSection } from './components/sections/VideoSection';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark-950">
      <TopBar />
      <Hero />
      <VideoSection />
      <Features />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;