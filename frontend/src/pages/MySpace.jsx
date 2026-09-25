import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Heart,
  Calendar,
  IndianRupee,
  Trash2,
  ArrowRight,
  Sparkles,
  Check,
  Clock,
  X
} from 'lucide-react';
import Button from '../components/common/Button';
import { useUserSpace } from '../context/UserContext';
import { DESTINATIONS } from '../data/destinations';

export default function MySpace({ onNavigateToPlan }) {
  const {
    visitedPlaces,
    wishlist,
    plannedTrips,
    toggleVisited,
    toggleWishlist,
    removePlannedTrip,
    updateTripStatus
  } = useUserSpace();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'visited' | 'wishlist' | 'trips'
  const [selectedDestModal, setSelectedDestModal] = useState(null);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#141518] pt-28 pb-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            MY SPACE
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#141518] tracking-tight leading-tight">
            Your journey, collected.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#5A5E6D] font-sans">
            Every place you've explored, saved, and dream of visiting next.
          </p>
        </div>

        {/* Top Summary Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('visited')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'visited'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#141518] hover:bg-white border border-black/10'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{visitedPlaces.length} Visited</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'wishlist'
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#141518] hover:bg-white border border-black/10'
            }`}
          >
            <Heart className="w-4 h-4 fill-current text-white" />
            <span>{wishlist.length} Saved</span>
          </button>

          <button
            onClick={() => setActiveTab('trips')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'trips'
                ? 'bg-[#8C6422] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#141518] hover:bg-white border border-black/10'
            }`}
          >
            <Calendar className="w-4 h-4 text-yellow-300" />
            <span>{plannedTrips.length} Trips</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#141518] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#5A5E6D] hover:bg-white border border-black/10'
            }`}
          >
            View All
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="flex flex-col gap-16">
          
          {/* SECTION A: VISITED PLACES */}
          {(activeTab === 'all' || activeTab === 'visited') && (
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#141518]">
                    VISITED PLACES
                  </h3>
                  <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                    {visitedPlaces.length}
                  </span>
                </div>
              </div>

              {visitedPlaces.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visitedPlaces.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl overflow-hidden bg-[#FAF6F0] border border-black/10 shadow-md group relative flex flex-col"
                    >
                      <div className="h-48 w-full relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          Visited ✓
                        </span>
                      </div>

                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-xl font-bold text-[#141518]">
                              {item.name}
                            </h4>
                            <span className="text-xs text-[#5A5E6D] font-mono">
                              {item.dateVisited || 'Aug 2026'}
                            </span>
                          </div>
                          <p className="text-xs text-[#C85A32] font-semibold mt-0.5">
                            {item.state}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                          <button
                            onClick={() => toggleVisited(item)}
                            className="text-xs text-red-600 hover:text-red-700 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove from Visited
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-10 rounded-3xl bg-[#F7F4EE] border border-black/10 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#141518]">
                    Your story is waiting to begin.
                  </h4>
                  <p className="text-sm text-[#5A5E6D] max-w-md">
                    The places you visit will live here. Mark destinations as visited while exploring.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={onNavigateToPlan}
                    className="mt-2"
                  >
                    Explore Destinations
                  </Button>
                </div>
              )}
            </section>
          )}

          {/* SECTION B: WISHLIST / SAVED */}
          {(activeTab === 'all' || activeTab === 'wishlist') && (
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-[#C85A32] fill-current" />
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#141518]">
                    WISHLIST & SAVED PLACES
                  </h3>
                  <span className="text-xs font-mono font-bold bg-[#C85A32]/10 text-[#C85A32] px-2.5 py-0.5 rounded-full">
                    {wishlist.length}
                  </span>
                </div>
              </div>

              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => {
                    const fullDest = DESTINATIONS.find((d) => d.id === item.id) || item;

                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl overflow-hidden bg-[#FAF6F0] border border-black/10 shadow-md group relative flex flex-col"
                      >
                        <div className="h-48 w-full relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                          {item.matchScore && (
                            <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black bg-[#C85A32] text-white shadow">
                              {item.matchScore}% MATCH
                            </span>
                          )}

                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#141518] shadow">
                            {item.state}
                          </span>
                        </div>

                        <div className="p-5 flex flex-col justify-between flex-grow">
                          <div>
                            <h4 className="font-serif text-xl font-bold text-[#141518]">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#5A5E6D] mt-1 line-clamp-2">
                              {item.tagline || fullDest.tagline}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between gap-2">
                            <button
                              onClick={() => toggleWishlist(item)}
                              className="text-xs text-red-600 hover:text-red-700 font-medium transition-colors cursor-pointer"
                            >
                              Remove
                            </button>

                            <button
                              onClick={() => setSelectedDestModal(fullDest)}
                              className="text-xs font-bold text-[#C85A32] hover:underline cursor-pointer"
                            >
                              View Details →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-10 rounded-3xl bg-[#F7F4EE] border border-black/10 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32] mb-2">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#141518]">
                    No saved places yet.
                  </h4>
                  <p className="text-sm text-[#5A5E6D] max-w-md">
                    Save your dream Indian destinations while exploring to keep track of where to travel next.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={onNavigateToPlan}
                    className="mt-2"
                  >
                    Explore Destinations
                  </Button>
                </div>
              )}
            </section>
          )}

          {/* SECTION C: PLANNED TRIPS */}
          {(activeTab === 'all' || activeTab === 'trips') && (
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#8C6422]" />
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#141518]">
                    YOUR PLANNED TRIPS
                  </h3>
                  <span className="text-xs font-mono font-bold bg-[#D4A359]/20 text-[#8C6422] px-2.5 py-0.5 rounded-full">
                    {plannedTrips.length}
                  </span>
                </div>
              </div>

              {plannedTrips.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {plannedTrips.map((trip) => (
                    <motion.div
                      key={trip.id}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl p-6 bg-[#FAF6F0] border border-black/10 shadow-md flex flex-col justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={trip.image}
                          alt={trip.name}
                          className="w-20 h-20 rounded-xl object-cover border border-black/10 flex-shrink-0"
                        />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-2xl font-bold text-[#141518]">
                              {trip.name}
                            </h4>

                            {/* Status Selector */}
                            <select
                              value={trip.status}
                              onChange={(e) => updateTripStatus(trip.id, e.target.value)}
                              className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F7F4EE] border border-black/10 text-[#141518] cursor-pointer"
                            >
                              <option value="Planning">Planning</option>
                              <option value="Upcoming">Upcoming</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>

                          <span className="text-xs text-[#C85A32] font-semibold block mt-0.5">
                            {trip.state}
                          </span>

                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#5A5E6D] mt-3">
                            <span className="flex items-center gap-1 font-bold text-[#141518]">
                              <Clock className="w-3.5 h-3.5 text-[#8C6422]" />
                              {trip.duration} Days
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 font-extrabold text-emerald-700">
                              <IndianRupee className="w-3.5 h-3.5" />
                              ₹{trip.budget.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                        <span className="text-xs text-[#5A5E6D]">
                          Vibes: <strong>{trip.vibes ? trip.vibes.join(', ') : 'Custom'}</strong>
                        </span>

                        <button
                          onClick={() => removePlannedTrip(trip.id)}
                          className="text-xs text-red-600 hover:text-red-700 font-medium transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Cancel Trip
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-10 rounded-3xl bg-[#F7F4EE] border border-black/10 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4A359]/20 flex items-center justify-center text-[#8C6422] mb-2">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#141518]">
                    No planned trips yet.
                  </h4>
                  <p className="text-sm text-[#5A5E6D] max-w-md">
                    Use our Trip Match engine to calculate custom budget & duration matches for your next trip.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={onNavigateToPlan}
                    className="mt-2"
                  >
                    Plan a Trip
                  </Button>
                </div>
              )}
            </section>
          )}

        </div>

      </div>

      {/* Selected Destination Itinerary / Detail Modal */}
      <AnimatePresence>
        {selectedDestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <div className="bg-[#FAF6F0] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-black/10 p-6 relative text-[#141518]">
              <button
                onClick={() => setSelectedDestModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#141518] hover:bg-black/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-xs font-bold text-[#C85A32] uppercase tracking-widest">
                {selectedDestModal.state}
              </span>
              <h3 className="font-serif text-3xl font-black text-[#141518] mt-1">
                {selectedDestModal.name}
              </h3>
              <p className="text-sm text-[#D4A359] font-medium mt-1">
                "{selectedDestModal.tagline}"
              </p>

              <img
                src={selectedDestModal.image}
                alt={selectedDestModal.name}
                className="w-full h-48 object-cover rounded-2xl my-4 border border-black/10"
              />

              <p className="text-sm text-[#4A4D5A] leading-relaxed">
                {selectedDestModal.description}
              </p>

              <div className="mt-6 pt-4 border-t border-black/10 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setSelectedDestModal(null);
                    onNavigateToPlan();
                  }}
                >
                  Plan This Trip →
                </Button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
