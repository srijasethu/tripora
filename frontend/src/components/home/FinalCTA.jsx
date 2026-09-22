import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const scrollToMatch = () => {
    const match = document.getElementById('trip-match');
    if (match) {
      match.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-[#141518] flex items-center justify-center">
      {/* Background Photography Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/destinations/ladakh.jpg"
          alt="Ladakh Mountains Cinematic"
          className="w-full h-full object-cover filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-black/40 to-[#141518]/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-[#D4A359] border border-white/30 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          You don't need a plan.
        </motion.div>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.95] mb-6 drop-shadow-lg"
        >
          YOU JUST NEED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#F7F4EE] to-[#D4A359]">
            A FEW DAYS.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-white/90 font-sans max-w-lg mb-10 drop-shadow"
        >
          We'll take it from there.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={scrollToMatch}
            className="text-lg font-bold px-10 py-5 shadow-2xl shadow-[#C85A32]/40"
          >
            START YOUR JOURNEY
          </Button>

          <span className="text-xs text-white/80 font-mono tracking-widest uppercase mt-4">
            Made for India 🇮🇳
          </span>
        </motion.div>

      </div>
    </section>
  );
}
