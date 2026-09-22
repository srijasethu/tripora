import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Compass, ArrowRight } from 'lucide-react';

const REGIONS = [
  {
    id: 'kerala',
    name: 'KERALA',
    capital: 'God\'s Own Country',
    image: '/images/destinations/alleppey.jpg',
    tags: ['Backwaters', 'Monsoon Escapes', 'Western Ghats', 'Malabar Food'],
    highlights: ['Varkala Cliff Sunset', 'Kuttanad Canoeing', 'Munnar Tea Trails', 'Wayanad Jungle Homestays'],
    bestTime: 'Oct – Mar / Monsoon (Jun – Aug)',
    avgBudget: '₹4,500 – ₹8,000 / 3 days'
  },
  {
    id: 'rajasthan',
    name: 'RAJASTHAN',
    capital: 'Land of Kings',
    image: '/images/destinations/jaipur.jpg',
    tags: ['Heritage Forts', 'Desert Nights', 'Royal Culture', 'Street Food'],
    highlights: ['Jaisalmer Dune Camping', 'Jaipur Pink City Walk', 'Udaipur Lake Palaces', 'Mehrangarh Fort Citadel'],
    bestTime: 'Oct – Mar',
    avgBudget: '₹5,000 – ₹9,500 / 4 days'
  },
  {
    id: 'himachal',
    name: 'HIMACHAL',
    capital: 'Valley of the Gods',
    image: '/images/destinations/spiti-valley.jpg',
    tags: ['Snow Peaks', 'Cafe Culture', 'Trekking', 'Pinewoods'],
    highlights: ['Spiti Valley High Passes', 'Old Manali Cafe Hopping', 'Bir Billing Paragliding', 'Dharamshala Chants'],
    bestTime: 'Mar – Jun / Sep – Nov',
    avgBudget: '₹4,000 – ₹7,500 / 3 days'
  },
  {
    id: 'meghalaya',
    name: 'MEGHALAYA',
    capital: 'Abode of Clouds',
    image: '/images/destinations/meghalaya.jpg',
    tags: ['Root Bridges', 'Waterfalls', 'Caves', 'Cleanest Village'],
    highlights: ['Nongriat Double Decker Bridge', 'Dawki Crystal River', 'Cherrapunji Waterfalls', 'Mawlynnong Stroll'],
    bestTime: 'Oct – Apr',
    avgBudget: '₹6,000 – ₹11,000 / 4 days'
  },
  {
    id: 'ladakh',
    name: 'LADAKH',
    capital: 'The High Pass Realm',
    image: '/images/destinations/ladakh.jpg',
    tags: ['Stark Deserts', 'High Lakes', 'Monasteries', 'Stargazing'],
    highlights: ['Pangong Tso Blue Lake', 'Nubra Valley Camel Ride', 'Thiksey Morning Chants', 'Magnetic Hill Drive'],
    bestTime: 'May – Sep',
    avgBudget: '₹14,000 – ₹22,000 / 5 days'
  }
];

export default function IndiaExplorer() {
  const [selectedRegionId, setSelectedRegionId] = useState('kerala');
  const activeRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  return (
    <section id="explore" className="py-24 bg-[#EFEADF] border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Interactive Discovery"
          title="ONE COUNTRY. A THOUSAND DIFFERENT JOURNEYS."
          subtitle="Select a region to reveal curated itineraries, real budget ranges, and season insights."
          light={true}
        />

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegionId(region.id)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedRegionId === region.id
                  ? 'bg-[#C85A32] text-white shadow-md border border-white/20 scale-105'
                  : 'bg-[#FAF6F0] text-[#4A4D5A] hover:text-[#141518] border border-black/10'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Region Card Feature */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl bg-[#FAF6F0] border border-black/10 overflow-hidden shadow-xl"
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative h-[360px] lg:h-auto overflow-hidden">
              <img
                src={activeRegion.image}
                alt={activeRegion.name}
                className="w-full h-full object-cover filter brightness-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/70 via-transparent to-transparent lg:hidden"></div>

              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/80 backdrop-blur-md text-[#141518] border border-black/10">
                  {activeRegion.capital}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl sm:text-5xl font-black text-[#141518] tracking-tight mb-4">
                  {activeRegion.name}
                </h3>

                {/* Vibe Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {activeRegion.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-xs font-bold uppercase tracking-widest text-[#5A5E6D] mb-3">
                  Signature Experiences:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeRegion.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F4EE] border border-black/5 text-xs text-[#141518] font-medium">
                      <Compass className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta & Action */}
              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col text-xs text-[#5A5E6D]">
                  <span>Best Season: <strong className="text-[#141518]">{activeRegion.bestTime}</strong></span>
                  <span>Est. Budget: <strong className="text-emerald-700 font-mono font-bold">{activeRegion.avgBudget}</strong></span>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => alert(`Explore ${activeRegion.name} state guide!`)}
                >
                  Explore {activeRegion.name}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
