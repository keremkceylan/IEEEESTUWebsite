import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Events } from './components/Events';
import { Sponsors } from './components/Sponsors';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Xtreme } from './components/Xtreme';
import { Footer } from './components/Footer';
import { Button } from './components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Sponsors />
        <Contact />
        <Blog />
        <Xtreme />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#00629B] hover:bg-[#004f7c] text-white shadow-lg hover:shadow-xl dark:shadow-[#00629B]/30 dark:hover:shadow-[#00629B]/50 dark:hover:ring-2 dark:hover:ring-[#00629B]/50 transition-all duration-300 p-0"
          aria-label="Yukarı çık"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}