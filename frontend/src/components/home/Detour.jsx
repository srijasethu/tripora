import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DETOUR_LOCATIONS } from '../../data/detours';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { MapPin, Clock, Coffee, Utensils, Camera, ShoppingBag, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';

export default function Detour() {
  const [selectedLocationId, setSelectedLocationId] = useState('fort-kochi');
  const [selectedMood, setSelectedMood] = useState('Chill');
  const [isGenerating, setIsGenerating] = useState(false);

  const activeLocation = DETOUR_LOCATIONS.find((l) => l.id === selectedLocationId) || DETOUR_LOCATIONS[0];
  const detourItems = activeLocation.detours[selectedMood] || activeLocation.detours['Chill'];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section id="detour" className="py-24 bg-[#FAF6F0] border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Signature Capability"
          title="TWO HOURS FREE? THAT'S ENOUGH FOR AN ADVENTURE."
          subtitle="Already somewhere in India and suddenly have free time? Tripora Detour generates instant micro-experiences based on your exact location, mood, and available window."
          light={true}
        />

        {/* Integrated Travel Story Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Spot Selector */}
            <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-black/10 shadow-sm">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-[#5A5E6D] flex items-center gap-1.5 mb-3">
                <MapPin className="w-4 h-4 text-[#C85A32]" />
                Select Current Spot
              </label>

              <div className="flex flex-col gap-2">
                {DETOUR_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`p-3 rounded-xl text-left text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      selectedLocationId === loc.id
                        ? 'bg-[#C85A32] text-white shadow-md'
                        : 'bg-[#FAF6F0] text-[#141518] hover:bg-black/5 border border-black/5'
                    }`}
                  >
                    <span>📍 {loc.name}, {loc.state}</span>
                    <span className="text-xs font-mono opacity-80">{loc.timeAvailable}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Window Card */}
            <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-black/10 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-[#8C6422]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#5A5E6D] block">Time Window</span>
                  <span className="text-sm font-bold text-[#141518]">Available Now</span>
                </div>
              </div>

              <div className="font-mono text-xl font-black text-[#8C6422] tracking-wider px-3 py-1 rounded-xl bg-[#FAF6F0] border border-black/10">
                {activeLocation.timeAvailable}
              </div>
            </div>

            {/* Mood Filters */}
            <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-black/10 shadow-sm">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-[#5A5E6D] block mb-3">
                Current Mood:
              </label>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Chill', label: '☕ Chill', icon: Coffee },
                  { id: 'Eat', label: '🍛 Eat', icon: Utensils },
                  { id: 'Explore', label: '📷 Explore', icon: Camera },
                  { id: 'Shop', label: '🛍 Shop', icon: ShoppingBag }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMood(m.id)}
                    className={`p-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                      selectedMood === m.id
                        ? 'bg-[#8C6422] text-white shadow-md'
                        : 'bg-[#FAF6F0] text-[#141518] hover:bg-black/5 border border-black/10'
                    }`}
                  >
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              icon={Sparkles}
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full text-base font-bold shadow-md"
            >
              {isGenerating ? 'Curating Detour...' : 'FIND A DETOUR →'}
            </Button>

          </div>

          {/* Right Destination Route Feature */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F7F4EE] border border-black/10 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C85A32]">
                    📍 {activeLocation.name} Micro-Adventure
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#141518] mt-0.5">
                    {selectedMood} Trail
                  </h4>
                </div>

                <span className="text-xs font-mono font-bold text-[#8C6422] bg-black/5 px-3 py-1 rounded-full border border-black/10">
                  Est 1h 40m total
                </span>
              </div>

              {/* Timeline Flow */}
              <div className="py-6 flex flex-col gap-4 relative pl-6 border-l-2 border-[#C85A32]">
                {detourItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="relative p-4 rounded-2xl bg-[#FAF6F0] border border-black/10 hover:border-[#C85A32]/60 transition-all group shadow-sm"
                  >
                    {/* Bullet */}
                    <div className="absolute -left-[33px] top-5 w-4 h-4 rounded-full bg-[#C85A32] border-2 border-[#F7F4EE]"></div>

                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-[#141518] text-base group-hover:text-[#C85A32] transition-colors">
                        {item.name}
                      </h5>
                      <span className="text-xs font-mono text-[#8C6422] bg-[#8C6422]/10 px-2 py-0.5 rounded-full border border-[#8C6422]/20 font-semibold">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-xs text-[#5A5E6D]">
                      {item.desc}
                    </p>

                    <div className="mt-2 text-[11px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                      <Navigation className="w-3 h-3" />
                      <span>Cost: {item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-[#5A5E6D]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Live GPS proximity checked
                </span>
                <span className="text-[#C85A32] font-bold cursor-pointer hover:underline" onClick={() => alert('Navigation launched!')}>
                  Start Navigation →
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
