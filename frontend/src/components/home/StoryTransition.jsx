import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Clock, Mountain, ArrowDown } from 'lucide-react';

export default function StoryTransition() {
  return (
    <section id="story-transition" className="py-24 md:py-36 bg-[#FAF6F0] border-t border-b border-black/5 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {/* Intro Badge */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest text-[#C85A32] mb-4"
        >
          Rethinking Indian Travel
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#141518] tracking-tight max-w-4xl mx-auto leading-[1.12]"
        >
          You shouldn't need a destination <br className="hidden sm:inline" />
          to start travelling.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#5A5E6D] font-sans max-w-xl mx-auto font-normal"
        >
          Just tell Tripora what you've got.
        </motion.p>

        {/* Oversized Information Cards on Warm Cream */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 md:my-20">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#F7F4EE] border border-black/10 flex flex-col items-center justify-center hover:border-[#C85A32]/60 transition-all duration-300 group shadow-md hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] mb-6 group-hover:scale-110 transition-transform">
              <IndianRupee className="w-7 h-7" />
            </div>
            <span className="font-serif text-4xl sm:text-5xl font-black text-[#141518] tracking-tight mb-2">
              ₹6,000
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              YOUR BUDGET
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl bg-[#F7F4EE] border border-black/10 flex flex-col items-center justify-center hover:border-[#D4A359]/60 transition-all duration-300 group shadow-md hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#D4A359]/15 border border-[#D4A359]/40 flex items-center justify-center text-[#8C6422] mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <span className="font-serif text-4xl sm:text-5xl font-black text-[#141518] tracking-tight mb-2">
              03 DAYS
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6422]">
              YOUR TIME
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-3xl bg-[#F7F4EE] border border-black/10 flex flex-col items-center justify-center hover:border-[#C85A32]/60 transition-all duration-300 group shadow-md hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] mb-6 group-hover:scale-110 transition-transform">
              <Mountain className="w-7 h-7" />
            </div>
            <span className="font-serif text-4xl sm:text-5xl font-black text-[#141518] tracking-tight mb-2">
              🏔 CHILL
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              YOUR VIBE
            </span>
          </motion.div>

        </div>

        {/* Big Statement Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="inline-flex flex-col items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-[#C85A32] animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#141518] tracking-widest uppercase">
            WE FIND THE TRIP.
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
