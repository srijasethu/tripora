import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MapPin,
  Calendar,
  IndianRupee,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Heart,
  Check,
  X
} from 'lucide-react';
import Button from '../common/Button';
import { useUserSpace } from '../../context/UserContext';

export default function TripRecommendation({
  match,
  onNextMatch,
  onPrevMatch,
  matchIndex,
  totalMatches,
  userDays,
  userVibes
}) {
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const { isVisited, toggleVisited, isWishlisted, toggleWishlist, addPlannedTrip } = useUserSpace();

  if (!match) return null;

  const visited = isVisited(match.id);
  const wishlisted = isWishlisted(match.id);
  const estimatedTotal = match.budgetRaw || match.dailyCost * userDays;

  const handleBookTrip = () => {
    addPlannedTrip(match, userDays, estimatedTotal, userVibes);
    alert(`Added ${match.name} trip to your planned trips in My Space!`);
    setShowItineraryModal(false);
  };

  return (
    <div id="trip-match-result" className="w-full mt-12 animate-fadeIn">
      
      {/* Editorial Recommendation Header with Match Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30">
            <Sparkles className="w-3.5 h-3.5" />
            YOUR TRIPORA MATCH
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-black text-[#141518] tracking-tight uppercase mt-1">
            RECOMMENDED DESTINATIONS
          </h3>
        </div>

        {/* Elegant Match Counter & Controls */}
        <div className="flex items-center gap-3 p-1.5 rounded-full bg-[#FAF6F0] border border-black/10 shadow-sm font-mono text-xs text-[#141518]">
          <button
            onClick={onPrevMatch}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-[#C85A32] hover:text-white border border-black/10 transition-all font-sans font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40"
            title="Previous match"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          <span className="font-bold px-2 text-[#5A5E6D]">
            {matchIndex + 1} / {totalMatches}
          </span>

          <button
            onClick={onNextMatch}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-[#C85A32] hover:text-white border border-black/10 transition-all font-sans font-bold flex items-center gap-1 cursor-pointer"
            title="Next match"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Feature Match Card */}
      <motion.div
        key={match.id}
        initial={{ opacity: 0, x: 20, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="rounded-3xl overflow-hidden border border-black/10 bg-[#FAF6F0] shadow-2xl relative"
      >
        {/* Showcase Banner Image */}
        <div className="relative h-[340px] sm:h-[440px] w-full overflow-hidden">
          <img
            src={match.image}
            alt={match.name}
            className="w-full h-full object-cover filter brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-black/30 to-transparent"></div>

          {/* Top Floating Badges & Quick Action Controls */}
          <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/90 backdrop-blur-md text-[#141518] border border-black/10 shadow-md flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              {match.state}
            </span>

            <div className="flex items-center gap-2">
              {/* Mark as Visited Quick Toggle */}
              <button
                onClick={() => toggleVisited(match)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md border shadow-md cursor-pointer ${
                  visited
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-900/30'
                    : 'bg-white/80 hover:bg-white text-[#141518] border-black/10'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{visited ? '✓ Visited' : 'Mark as Visited'}</span>
              </button>

              {/* Save to Wishlist Quick Toggle */}
              <button
                onClick={() => toggleWishlist(match)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md border shadow-md cursor-pointer ${
                  wishlisted
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-[#C85A32]/40'
                    : 'bg-white/80 hover:bg-white text-[#141518] border-black/10'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-current' : ''}`} />
                <span>{wishlisted ? 'Saved' : 'Save to Wishlist'}</span>
              </button>

              {/* Match Percentage Badge */}
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C85A32] text-white shadow-xl border border-white/20 font-black text-sm">
                <Sparkles className="w-4 h-4" />
                <span>{match.matchScore || 94}% MATCH</span>
              </div>
            </div>
          </div>

          {/* Bottom Card Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="font-serif text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              {match.name}
            </h2>
            <p className="text-base sm:text-xl text-[#D4A359] font-sans font-medium mt-2 drop-shadow">
              "{match.tagline}"
            </p>
          </div>
        </div>

        {/* Details & Key Metrics Bar */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          
          {/* Summary Badges Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#F7F4EE] border border-black/10 font-mono text-xs sm:text-sm text-[#141518]">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span>Est. Budget: <strong className="text-emerald-700 font-extrabold font-sans">₹{estimatedTotal.toLocaleString('en-IN')}</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8C6422]" />
              <span>Duration: <strong className="text-[#141518] font-bold font-sans">{userDays} DAYS</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C85A32]" />
              <span>Vibes: <strong className="text-[#C85A32] font-bold font-sans">{match.vibes ? match.vibes.join(' · ') : match.tags.join(' · ')}</strong></span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#4A4D5A] leading-relaxed font-sans">
            {match.description}
          </p>

          {/* Signature Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#5A5E6D] mb-3">
              SIGNATURE HIGHLIGHTS:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {match.highlights && match.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-black/5 text-xs sm:text-sm text-[#141518] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Visited Action */}
              <button
                onClick={() => toggleVisited(match)}
                className={`flex-1 sm:flex-initial px-4 py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 border cursor-pointer ${
                  visited
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-black/5 hover:bg-black/10 text-[#4A4D5A] border-black/10'
                }`}
              >
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{visited ? '✓ Visited' : 'Mark as Visited'}</span>
              </button>

              {/* Wishlist Action */}
              <button
                onClick={() => toggleWishlist(match)}
                className={`flex-1 sm:flex-initial px-4 py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 border cursor-pointer ${
                  wishlisted
                    ? 'bg-[#C85A32]/10 text-[#C85A32] border-[#C85A32]/30'
                    : 'bg-black/5 hover:bg-black/10 text-[#4A4D5A] border-black/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? 'fill-[#C85A32] text-[#C85A32]' : ''}`} />
                <span>{wishlisted ? '♥ Saved' : 'Save to Wishlist'}</span>
              </button>
            </div>

            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => setShowItineraryModal(true)}
              className="w-full sm:w-auto font-extrabold px-8 py-4 shadow-xl shadow-[#C85A32]/30"
            >
              VIEW ITINERARY
            </Button>

          </div>

        </div>
      </motion.div>

      {/* Interactive Detailed Itinerary Modal */}
      <AnimatePresence>
        {showItineraryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FAF6F0] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-black/10 shadow-2xl relative p-6 sm:p-8 text-[#141518]"
            >
              <button
                onClick={() => setShowItineraryModal(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#141518] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30">
                  {match.state} · ITINERARY PLAN
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#141518] mt-2">
                  {match.name} TRIP PLAN
                </h3>
                <p className="text-sm text-[#5A5E6D] mt-1">
                  Customized for {userDays} Days with ~₹{estimatedTotal.toLocaleString('en-IN')} total budget
                </p>
              </div>

              {/* Day-by-Day Steps */}
              <div className="flex flex-col gap-4 mb-8">
                {match.itinerary ? (
                  match.itinerary.map((dayItem) => (
                    <div key={dayItem.day} className="p-4 rounded-2xl bg-white border border-black/10 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#C85A32] text-white font-extrabold text-xs flex items-center justify-center">
                          {dayItem.day}
                        </span>
                        <h4 className="font-serif font-bold text-[#141518] text-base">
                          Day {dayItem.day}: {dayItem.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A4D5A] pl-8 leading-relaxed">
                        {dayItem.details}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#5A5E6D]">
                    Detailed day-by-day activities are tailored to your chosen starting city and preferences.
                  </p>
                )}
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#5A5E6D]">
                  Estimated Daily Cost: ₹{match.dailyCost || Math.round(match.budgetRaw / match.recommendedDays)}
                </span>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleBookTrip}
                >
                  SAVE TRIP TO MY SPACE →
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
