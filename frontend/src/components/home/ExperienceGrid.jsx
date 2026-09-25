// ExperienceGrid Component
import { motion } from 'framer-motion';
import { EXPERIENCE_CATEGORIES } from '../../data/experiences';
import SectionHeading from '../common/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceGrid() {
  return (
    <section id="experiences" className="py-24 bg-[#141518] text-[#FAF6F0] border-t border-black/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Editorial Visual Discovery"
          title="WHAT KIND OF INDIA DO YOU WANT TO EXPERIENCE?"
          subtitle="Immerse yourself in distinct travel moods tailored to your state of mind."
          light={false}
        />

        {/* Immersive Large Photographic Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCE_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden h-[460px] bg-[#1A1C23] border border-white/15 cursor-pointer shadow-2xl flex flex-col justify-between p-8"
            >
              {/* Background Photography & Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover filter brightness-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/40 transition-colors"></div>
              </div>

              {/* Top Header Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#D4A359] border border-white/20">
                  {cat.count}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C85A32] group-hover:border-[#C85A32] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Info Row */}
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4A359]">
                  {cat.tagline}
                </span>

                <h3 className="font-serif text-3xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-white transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-white/80 font-sans mt-1">
                  {cat.examples}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32] group-hover:text-white transition-colors">
                  <span>{cat.cta}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
