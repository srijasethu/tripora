import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, IndianRupee, Calendar, Sparkles, ArrowRight, Compass } from 'lucide-react';
import Button from '../common/Button';

export default function TripFinder({ onFindTrip }) {
  const [startingCity, setStartingCity] = useState('Coimbatore');
  const [budget, setBudget] = useState(6000);
  const [duration, setDuration] = useState('3 days');
  const [vibe, setVibe] = useState('Mountains + Chill');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFindTrip) {
      onFindTrip({ startingCity, budget, duration, vibe });
    } else {
      const matchSection = document.getElementById('trip-match');
      if (matchSection) {
        matchSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      id="finder"
      className="w-full max-w-5xl mx-auto px-4"
    >
      <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden backdrop-blur-2xl">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C85A32]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#D4A359]/15 rounded-full blur-3xl pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Field 1: Starting City */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 p-3.5 rounded-2xl focus-within:border-[#C85A32] transition-colors">
              <label className="text-[11px] font-sans uppercase tracking-widest text-[#9DA0AE] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                Starting from
              </label>
              <select
                value={startingCity}
                onChange={(e) => setStartingCity(e.target.value)}
                className="bg-transparent text-white font-sans text-base font-semibold focus:outline-none cursor-pointer [&>option]:bg-[#15171E] [&>option]:text-white"
              >
                <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kochi">Kochi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            {/* Field 2: Budget */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 p-3.5 rounded-2xl focus-within:border-[#C85A32] transition-colors">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-sans uppercase tracking-widest text-[#9DA0AE] font-semibold flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-[#D4A359]" />
                  Budget / Person
                </label>
                <span className="text-xs font-bold text-[#D4A359]">
                  ₹{budget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="25000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C85A32]"
              />
            </div>

            {/* Field 3: Duration */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 p-3.5 rounded-2xl focus-within:border-[#C85A32] transition-colors">
              <label className="text-[11px] font-sans uppercase tracking-widest text-[#9DA0AE] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-transparent text-white font-sans text-base font-semibold focus:outline-none cursor-pointer [&>option]:bg-[#15171E] [&>option]:text-white"
              >
                <option value="2 days">Weekend (2 days)</option>
                <option value="3 days">Long Weekend (3 days)</option>
                <option value="5 days">Extended Escape (5 days)</option>
                <option value="7 days">Full Week (7 days)</option>
              </select>
            </div>

            {/* Field 4: Vibe */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 p-3.5 rounded-2xl focus-within:border-[#C85A32] transition-colors">
              <label className="text-[11px] font-sans uppercase tracking-widest text-[#9DA0AE] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
                Your Vibe
              </label>
              <select
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="bg-transparent text-white font-sans text-base font-semibold focus:outline-none cursor-pointer [&>option]:bg-[#15171E] [&>option]:text-white"
              >
                <option value="Mountains + Chill">Mountains + Chill 🏔</option>
                <option value="Waterfalls + Adventure">Waterfalls + Adventure 🌊</option>
                <option value="Coastal + Heritage">Coastal + Heritage 🏖</option>
                <option value="Spiritual + Food">Spiritual + Food 🪔</option>
                <option value="Broke but Travelling">Broke but Travelling 🎒</option>
              </select>
            </div>

          </div>

          {/* Bottom Action bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
            <p className="text-xs text-[#E5E2DC]/70 italic flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#C85A32]" />
              <span className="font-medium text-white">Don't know where to go? Perfect.</span> We check 1,400+ Indian routes.
            </p>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto text-base font-bold shadow-xl shadow-[#C85A32]/40"
            >
              FIND MY TRIP
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
