import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_ITINERARY, OPTIMIZED_ITINERARY } from '../../data/realityChecks';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { AlertTriangle, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

export default function IndiaReality() {
  const [isOptimized, setIsOptimized] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleFixMyTrip = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setIsOptimized(!isOptimized);
    }, 850);
  };

  return (
    <section id="reality-engine" className="py-24 bg-[#FAF6F0] border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Signature Capability"
          title="PLANS LOOK PERFECT ON PAPER."
          subtitle="Tripora checks whether proposed itineraries will realistically work against travel time, monsoon rain, crowd spikes, and actual budgets."
          light={true}
        />

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#F7F4EE] p-4 rounded-2xl border border-black/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-emerald-600 animate-pulse' : 'bg-[#C85A32] animate-ping'}`}></div>
            <span className="text-sm font-sans font-bold text-[#141518]">
              {isOptimized ? 'STATUS: REALITY ENGINE OPTIMIZED ✓' : 'STATUS: UNOPTIMIZED ITINERARY (4 WARNINGS DETECTED)'}
            </span>
          </div>

          <Button
            variant={isOptimized ? 'outline' : 'primary'}
            size="md"
            icon={isOptimizing ? RefreshCw : Sparkles}
            onClick={handleFixMyTrip}
            disabled={isOptimizing}
            className={isOptimizing ? '[&>svg]:animate-spin' : ''}
          >
            {isOptimized ? 'Reset Initial Plan' : 'FIX MY TRIP →'}
          </Button>
        </div>

        {/* Itinerary Interface Card */}
        <div className="rounded-3xl bg-[#F7F4EE] border border-black/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-mono font-bold">
                Tripora Intelligence Check
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#141518] mt-1">
                {isOptimized ? OPTIMIZED_ITINERARY.title : INITIAL_ITINERARY.title}
              </h3>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                isOptimized ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30'
              }`}>
                {isOptimized ? 'Reality Score: 98/100' : 'Reality Score: 52/100'}
              </span>
            </div>
          </div>

          {/* Days Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {!isOptimized ? (
                // Initial Unoptimized State
                INITIAL_ITINERARY.originalDays.map((dayItem, idx) => (
                  <motion.div
                    key={`initial-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#FAF6F0] border border-black/10 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-[#C85A32]">{dayItem.day}</span>
                        <AlertTriangle className="w-4 h-4 text-[#C85A32]" />
                      </div>

                      <h4 className="font-serif font-bold text-[#141518] text-lg mb-3">
                        {dayItem.subtitle}
                      </h4>

                      <ul className="flex flex-col gap-2 text-xs text-[#4A4D5A] mb-4">
                        {dayItem.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#C85A32]">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/30 text-xs text-[#C85A32] font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{dayItem.issues[0]}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                // Optimized State
                OPTIMIZED_ITINERARY.optimizedDays.map((dayItem, idx) => (
                  <motion.div
                    key={`opt-${idx}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-emerald-700">{dayItem.day}</span>
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>

                      <h4 className="font-serif font-bold text-[#141518] text-lg mb-3">
                        {dayItem.subtitle}
                      </h4>

                      <ul className="flex flex-col gap-2 text-xs text-[#141518]/90 mb-4">
                        {dayItem.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-100 border border-emerald-300 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{dayItem.savings}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Warnings vs Resolutions Banner */}
          <div className="pt-6 border-t border-black/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5A5E6D] mb-3">
              {isOptimized ? 'Reality Checks Resolved:' : 'Active Warnings Identified:'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {!isOptimized ? (
                INITIAL_ITINERARY.warnings.map((warn) => (
                  <div key={warn.id} className="p-3 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/25 text-xs text-[#C85A32] flex items-center gap-2 font-mono">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{warn.text}</span>
                  </div>
                ))
              ) : (
                OPTIMIZED_ITINERARY.resolved.map((res) => (
                  <div key={res.id} className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2 font-mono font-semibold">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-700" />
                    <span>{res.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
