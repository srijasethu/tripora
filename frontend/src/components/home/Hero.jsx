import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_DESTINATIONS } from '../../data/destinations';
import Button from '../common/Button';
import { MapPin, ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [destIndex, setDestIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDestIndex((prev) => (prev + 1) % HERO_DESTINATIONS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentDest = HERO_DESTINATIONS[destIndex];

  const handleNext = (e) => {
    e.stopPropagation();
    setDestIndex((prev) => (prev + 1) % HERO_DESTINATIONS.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setDestIndex((prev) => (prev - 1 + HERO_DESTINATIONS.length) % HERO_DESTINATIONS.length);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#141518]">
      {/* Bright & Vivid Full-Bleed Cinematic Travel Visual Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDest.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentDest.bg}
              alt={currentDest.name}
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Gradient Overlays Strictly Behind Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Full-Bleed Editorial Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 my-auto pt-12 pb-8 flex flex-col items-start justify-center">
        
        {/* Left-Aligned Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] bg-white/20 backdrop-blur-md text-[#FAF6F0] border border-white/30 mb-5 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
          INDIA ISN'T A DESTINATION.
        </motion.div>

        {/* Oversized Cinematic Title Sequence Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(3.2rem,7.5vw,9.2rem)] font-black text-white tracking-tight uppercase leading-[0.92] max-w-[85vw] md:max-w-[75vw] lg:max-w-[68vw] mb-6 drop-shadow-2xl"
        >
          IT'S A THOUSAND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FAF6F0] to-[#D4A359]">
            JOURNEYS.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-white/95 font-sans max-w-xl font-normal leading-relaxed mb-8 drop-shadow"
        >
          Tell us your time, budget and vibe. <br className="hidden sm:inline" />
          <span className="font-semibold text-white">We'll figure out the trip.</span>
        </motion.p>

        {/* Compact Editorial CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={() => scrollToSection('trip-match')}
            className="text-sm font-bold px-8 py-4 shadow-2xl shadow-[#C85A32]/40"
          >
            START YOUR JOURNEY
          </Button>

          <Button
            variant="glass"
            size="lg"
            icon={ArrowDown}
            onClick={() => scrollToSection('story-transition')}
            className="text-sm font-semibold text-white hover:bg-white/20 px-8 py-4"
          >
            EXPLORE INDIA
          </Button>
        </motion.div>

      </div>

      {/* Bottom Row (Magazine Destination Indicator Right) */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 flex items-end justify-end gap-4">

        {/* Right Destination Magazine Metadata */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-2 p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/25 max-w-xs text-left ml-auto sm:ml-0 shadow-2xl group"
        >
          <div className="flex items-center justify-between text-xs text-[#D4A359] font-mono">
            <span className="flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              {currentDest.coord}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Previous Destination"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Next Destination"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentDest.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <h4 className="font-cinzel text-lg font-bold text-white tracking-widest">
                {currentDest.name}
              </h4>
              <p className="text-xs text-white/90 font-sans mt-0.5 leading-snug">
                {currentDest.tagline}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
