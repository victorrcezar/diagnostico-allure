import React, { useEffect, useState, Suspense, lazy } from 'react';
import { TopBar } from './components/sections/TopBar';
import { VideoSection } from './components/sections/VideoSection';

// Lazy load below-the-fold components to reduce initial JS payload
const Features = lazy(() => import('./components/sections/Features').then(module => ({ default: module.Features })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Process = lazy(() => import('./components/sections/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(module => ({ default: module.FAQ })));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));

function App() {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    // Load below-the-fold content after a short delay or on first scroll/interaction
    const handleInteraction = () => setLoadBelowFold(true);
    
    // Fallback: load anyway after 15 seconds if no interaction
    const timeoutId = setTimeout(() => setLoadBelowFold(true), 15000);

    window.addEventListener('scroll', handleInteraction, { passive: true, once: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once revealed to save CPU
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' }); // Add rootMargin to start revealing slightly earlier

    // Observe existing elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Observe future lazy-loaded elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('reveal')) {
              observer.observe(node);
            }
            const childReveals = node.querySelectorAll('.reveal');
            childReveals.forEach(el => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [loadBelowFold]); // Re-run when below fold content loads

  return (
    <main className="min-h-screen bg-dark-950">
      <TopBar />
      <VideoSection />
      
      {loadBelowFold && (
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Features />
          <About />
          <Process />
          <Testimonials />
          <FAQ />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}

export default App;
