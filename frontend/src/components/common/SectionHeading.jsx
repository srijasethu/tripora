import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col ${alignmentClass} ${className} max-w-4xl mx-auto mb-12 md:mb-16 px-4`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#C85A32]/15 text-[#C85A32] border border-[#C85A32]/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
            light ? 'text-[#0E0F12]' : 'text-[#F5F2EB]'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg md:text-xl font-sans max-w-2xl font-normal leading-relaxed ${
            light ? 'text-[#4A4D5A]' : 'text-[#9DA0AE]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
