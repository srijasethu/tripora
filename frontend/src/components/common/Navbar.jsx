import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, ArrowRight, User } from 'lucide-react';
import Button from './Button';

export default function Navbar({ currentView, setCurrentView, onNavigateToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionOrView) => {
    setMobileMenuOpen(false);
    if (sectionOrView === 'my-space') {
      setCurrentView('my-space');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          onNavigateToSection(sectionOrView);
        }, 100);
      } else {
        onNavigateToSection(sectionOrView);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-4 ${
          scrolled || currentView === 'my-space'
            ? 'py-3 bg-[#FAF6F0]/90 backdrop-blur-xl border-b border-black/10 shadow-lg text-[#141518]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#8C3414] p-0.5 shadow-md shadow-[#C85A32]/20 group-hover:scale-105 transition-transform duration-300">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${scrolled || currentView === 'my-space' ? 'bg-[#FAF6F0]' : 'bg-[#141518]'}`}>
                <Compass className="w-4 h-4 text-[#C85A32] group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-cinzel text-xl font-bold tracking-widest leading-tight ${scrolled || currentView === 'my-space' ? 'text-[#141518]' : 'text-white'}`}>
                TRIPORA
              </span>
              <span className="text-[9px] font-sans tracking-widest text-[#C85A32] uppercase font-bold">
                India Planned
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center gap-7 px-6 py-2 rounded-full border backdrop-blur-md transition-colors ${
            scrolled || currentView === 'my-space' ? 'bg-black/5 border-black/10 text-[#141518]' : 'bg-white/10 border-white/20 text-white'
          }`}>
            <button
              onClick={() => handleNavClick('explore')}
              className="text-sm font-medium hover:text-[#C85A32] transition-colors cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => handleNavClick('trip-match')}
              className="text-sm font-medium hover:text-[#C85A32] transition-colors cursor-pointer"
            >
              Plan
            </button>
            <button
              onClick={() => handleNavClick('detour')}
              className="text-sm font-medium hover:text-[#C85A32] transition-colors cursor-pointer"
            >
              Detour
            </button>
            <button
              onClick={() => handleNavClick('reality-engine')}
              className="text-sm font-medium hover:text-[#C85A32] transition-colors cursor-pointer"
            >
              Reality Engine
            </button>
            <button
              onClick={() => handleNavClick('my-space')}
              className={`text-sm font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                currentView === 'my-space' ? 'text-[#C85A32]' : 'hover:text-[#C85A32]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              My Space
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('my-space')}
              className={`text-sm px-3 py-2 font-medium transition-colors cursor-pointer ${
                scrolled || currentView === 'my-space' ? 'text-[#141518]/80 hover:text-[#141518]' : 'text-white/90 hover:text-white'
              }`}
            >
              Sign In
            </button>

            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={() => handleNavClick('trip-match')}
            >
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border transition-colors ${
              scrolled || currentView === 'my-space' ? 'bg-black/5 border-black/10 text-[#141518]' : 'bg-white/10 border-white/20 text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#FAF6F0]/95 backdrop-blur-2xl border-b border-black/10 p-6 md:hidden shadow-2xl flex flex-col gap-6 text-[#141518]"
          >
            <nav className="flex flex-col gap-4 text-base font-semibold">
              <button
                onClick={() => handleNavClick('explore')}
                className="text-left py-2 border-b border-black/5 hover:text-[#C85A32]"
              >
                Explore Journeys
              </button>
              <button
                onClick={() => handleNavClick('trip-match')}
                className="text-left py-2 border-b border-black/5 hover:text-[#C85A32]"
              >
                Trip Match Engine
              </button>
              <button
                onClick={() => handleNavClick('detour')}
                className="text-left py-2 border-b border-black/5 hover:text-[#C85A32] flex items-center justify-between"
              >
                <span>Tripora Detour</span>
                <span className="px-2 py-0.5 text-xs bg-[#C85A32]/20 text-[#C85A32] rounded-full">Live Demo</span>
              </button>
              <button
                onClick={() => handleNavClick('reality-engine')}
                className="text-left py-2 border-b border-black/5 hover:text-[#C85A32]"
              >
                India Reality Engine
              </button>
              <button
                onClick={() => handleNavClick('my-space')}
                className="text-left py-2 border-b border-black/5 text-[#C85A32] flex items-center justify-between font-bold"
              >
                <span>My Space</span>
                <span className="px-2 py-0.5 text-xs bg-[#C85A32]/20 text-[#C85A32] rounded-full">Personal Hub</span>
              </button>
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => handleNavClick('trip-match')}
                className="w-full"
              >
                Start Planning
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
