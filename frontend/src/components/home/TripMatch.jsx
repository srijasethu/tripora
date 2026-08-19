import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '../../data/destinations';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { MapPin, Thermometer, Clock, IndianRupee, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TripMatch() {
  const [selectedId, setSelectedId] = useState('kodaikanal');
  const [scenarioCity, setScenarioCity] = useState('Chennai');

  const selectedDestination = DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];
  const alternativeDestinations = DESTINATIONS.filter((d) => d.id !== selectedId);

  return (
    <section id="trip-match" className="py-24 bg-[#F7F4EE] border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Trip Match Engine"
          title="MADE FOR THE TRIP YOU CAN ACTUALLY TAKE."
          subtitle="Tripora evaluates real travel time, budget thresholds, and local logistics to find realistic Indian destinations that match your constraints."
          light={true}
        />

        {/* Matched Scenario Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 p-4 rounded-2xl bg-[#FAF6F0] border border-black/10 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#141518]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
            <span className="text-[#5A5E6D]">Matched Scenario:</span>
            <span className="font-bold text-[#141518]">Starting from {scenarioCity}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-black/5 border border-black/10 text-[#8C6422] font-semibold">
              ₹8,000 / person
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/5 border border-black/10">
              Long weekend
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/5 border border-black/10 text-emerald-700 font-semibold">
              No car needed
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#C85A32]/10 text-[#C85A32] font-semibold">
              Peaceful
            </span>
          </div>
        </motion.div>

        {/* Editorial Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Destination Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDestination.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#FAF6F0] shadow-xl group"
              >
                {/* Image Showcase */}
                <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-black/30"></div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/80 backdrop-blur-md text-[#141518] border border-black/10 shadow">
                      {selectedDestination.state}
                    </span>

                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C85A32] text-white shadow-lg border border-white/20 font-extrabold text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>{selectedDestination.matchPercentage}% MATCH</span>
                    </div>
                  </div>

                  {/* Bottom Headline on Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight drop-shadow-md">
                      {selectedDestination.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#D4A359] font-sans font-medium mt-1">
                      {selectedDestination.tagline}
                    </p>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-6 sm:p-8 flex flex-col gap-6">
                  <p className="text-sm sm:text-base text-[#4A4D5A] leading-relaxed">
                    {selectedDestination.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-black/10 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-[#C85A32]">
                        <Thermometer className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#6C7080] block font-medium">Weather</span>
                        <span className="text-sm sm:text-base font-bold text-[#141518]">{selectedDestination.temp}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-[#8C6422]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#6C7080] block font-medium">Travel Time</span>
                        <span className="text-sm sm:text-base font-bold text-[#141518]">{selectedDestination.travelTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-emerald-600">
                        <IndianRupee className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#6C7080] block font-medium">Est. Budget</span>
                        <span className="text-sm sm:text-base font-bold text-[#141518]">{selectedDestination.budgetPerPerson}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Tags & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedDestination.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 border border-black/10 text-[#4A4D5A]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      onClick={() => alert(`Exploring ${selectedDestination.name} itinerary!`)}
                      className="w-full sm:w-auto font-bold shadow-md"
                    >
                      View this escape →
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Secondary Alternatives */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5A5E6D] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
              Other Top Matched Escapes
            </h4>

            {alternativeDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                whileHover={{ x: 4, scale: 1.01 }}
                className="p-4 rounded-2xl bg-[#FAF6F0] border border-black/10 hover:border-[#C85A32]/60 cursor-pointer transition-all duration-300 flex items-center gap-4 group shadow-sm hover:shadow-md"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="flex flex-col flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-serif font-bold text-[#141518] text-lg truncate group-hover:text-[#C85A32] transition-colors">
                      {dest.name}
                    </h5>
                    <span className="text-xs font-extrabold text-[#C85A32] bg-[#C85A32]/10 px-2 py-0.5 rounded-full border border-[#C85A32]/30">
                      {dest.matchPercentage}%
                    </span>
                  </div>
                  <p className="text-xs text-[#5A5E6D] truncate mt-0.5">
                    {dest.tagline}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#4A4D5A] font-mono mt-2">
                    <span>{dest.temp}</span>
                    <span>•</span>
                    <span>{dest.travelTime}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">{dest.budgetPerPerson}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
