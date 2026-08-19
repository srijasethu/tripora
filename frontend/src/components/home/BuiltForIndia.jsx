import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSPORT_ROUTES } from '../../data/transportRoutes';
import { Train, Bus, Car, MapPin, ShieldCheck } from 'lucide-react';

const ICON_MAP = {
  Train: Train,
  Bus: Bus,
  Car: Car,
  MapPin: MapPin
};

export default function BuiltForIndia() {
  const [selectedRouteId, setSelectedRouteId] = useState('erode-munnar');
  const activeRoute = TRANSPORT_ROUTES.find((r) => r.id === selectedRouteId) || TRANSPORT_ROUTES[0];

  const TICKER_ITEMS = [
    '🚆 TRAINS',
    '🚌 STATE BUSES',
    '🛺 AUTOS',
    '🚕 CABS',
    '₹ REAL BUDGETS',
    '🌧 MONSOONS',
    '🪔 FESTIVALS',
    '🗣 LOCAL CULTURE',
    '🏔 GHAT ROADS',
    '☕ CHAI STOPS'
  ];

  return (
    <section id="transport" className="py-24 bg-[#162E22] text-[#FAF6F0] relative overflow-hidden">
      
      {/* Bold Statement Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[#D4A359] border border-white/20 mb-4"
        >
          India-Specific Logistics
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4"
        >
          BUILT FOR INDIA. <br />
          <span className="text-[#D4A359]">NOT ADAPTED TO INDIA.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#D9C3A3] max-w-2xl mx-auto font-normal"
        >
          Tripora understands that getting from A to B in India isn't always one Uber ride away.
        </motion.p>
      </div>

      {/* Smooth Horizontally Moving Marquee Ticker */}
      <div className="w-full overflow-hidden bg-black/20 py-4 border-y border-white/10 mb-16">
        <div className="flex w-max gap-8 animate-[marquee_25s_linear_infinite]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-sm sm:text-base font-bold font-mono text-[#FAF6F0] whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Multimodal Transport Visualizer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Realistic Indian Multimodal Journeys
          </h3>
          <p className="text-sm text-[#D9C3A3]">
            Select a sample route to see how Tripora stitches train, bus, and local auto logistics seamlessly:
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TRANSPORT_ROUTES.map((route) => (
            <button
              key={route.id}
              onClick={() => setSelectedRouteId(route.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedRouteId === route.id
                  ? 'bg-[#D4A359] text-[#162E22] shadow-lg font-extrabold'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              {route.title}
            </button>
          ))}
        </div>

        {/* Transport Flow Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-black/25 border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md"
          >
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4A359] font-semibold">
                  Multimodal Route Breakdown
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeRoute.title}
                </h4>
              </div>

              <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-2xl border border-white/15">
                <div>
                  <span className="text-[10px] text-[#D9C3A3] uppercase block">Est. Time</span>
                  <span className="text-base font-bold text-white">{activeRoute.totalTime}</span>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div>
                  <span className="text-[10px] text-[#D9C3A3] uppercase block">Approx Cost</span>
                  <span className="text-base font-bold text-[#D4A359]">{activeRoute.totalCost}</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Flow Line */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              {activeRoute.steps.map((step, idx) => {
                const IconComponent = ICON_MAP[step.icon] || Train;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.12 }}
                    className="relative flex flex-col gap-3 p-5 rounded-2xl bg-white/10 border border-white/10 hover:border-[#D4A359]/60 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#D4A359]/20 border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-[#D4A359] font-bold">
                        STEP 0{idx + 1}
                      </span>
                    </div>

                    <h5 className="font-sans font-bold text-white text-base mt-2">
                      {step.location}
                    </h5>

                    <p className="text-xs text-[#D9C3A3] font-semibold">
                      {step.modeName}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#FAF6F0]/80 font-mono">
                      <span>{step.duration}</span>
                      <span className="text-[#D4A359] font-bold">{step.fare}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Logistics Banner */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#D9C3A3]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4A359]" />
                Factored with real IRCTC train buffers & local Ghat bus frequency.
              </span>
              <span className="hidden sm:inline-block text-[#D4A359] font-mono">
                {activeRoute.carbonFootprint}
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
