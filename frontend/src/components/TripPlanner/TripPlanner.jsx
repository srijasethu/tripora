import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '../../data/destinations';
import BudgetSelector from './BudgetSelector';
import DurationSelector from './DurationSelector';
import VibeSelector from './VibeSelector';
import TripRecommendation from './TripRecommendation';
import Button from '../common/Button';
import { ArrowRight, AlertCircle } from 'lucide-react';

export default function TripPlanner() {
  // State for user inputs
  const [budget, setBudget] = useState(5000);
  const [customBudget, setCustomBudget] = useState(12000);
  const [isCustomBudget, setIsCustomBudget] = useState(false);

  const [duration, setDuration] = useState(3);
  const [isCustomDuration, setIsCustomDuration] = useState(false);

  const [selectedVibes, setSelectedVibes] = useState(['Mountains', 'Nature']);

  // Results State
  const [hasPlanned, setHasPlanned] = useState(false);
  const [rankedMatches, setRankedMatches] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [validationError, setValidationError] = useState('');

  // Toggle vibe helper
  const toggleVibe = (vibeId) => {
    setSelectedVibes((prev) =>
      prev.includes(vibeId)
        ? prev.filter((v) => v !== vibeId)
        : [...prev, vibeId]
    );
    if (validationError) setValidationError('');
  };

  // Recommendation Scoring Engine
  const calculateMatches = () => {
    if (!budget || budget <= 0) {
      setValidationError('Please select or enter a valid budget.');
      return;
    }

    if (!duration || duration <= 0) {
      setValidationError('Please select a valid trip duration.');
      return;
    }

    if (selectedVibes.length === 0) {
      setValidationError('Please select at least one vibe for your trip.');
      return;
    }

    setValidationError('');

    // Score every destination in the dataset
    const scored = DESTINATIONS.map((dest) => {
      // 1. Budget Score (40% Weight)
      const userDailyBudget = budget / duration;
      const destDailyCost = dest.dailyCost || (dest.budgetRaw / (dest.recommendedDays || 3));
      const budgetDiffRatio = Math.abs(userDailyBudget - destDailyCost) / userDailyBudget;
      const budgetScore = Math.max(0, 100 - budgetDiffRatio * 100);

      // 2. Vibe Score (40% Weight)
      const destVibes = dest.vibes || dest.tags || [];
      const matchingVibes = selectedVibes.filter((v) =>
        destVibes.some((dv) => dv.toLowerCase() === v.toLowerCase())
      );
      const vibeScore = (matchingVibes.length / Math.max(1, selectedVibes.length)) * 100;

      // 3. Duration Score (20% Weight)
      const destDays = dest.recommendedDays || 3;
      const durationDiff = Math.abs(destDays - duration);
      const durationScore = Math.max(0, 100 - durationDiff * 25);

      // Composite Score Formula: 40% Budget + 40% Vibe + 20% Duration
      const rawScore = 0.4 * budgetScore + 0.4 * vibeScore + 0.2 * durationScore;
      
      // Scale into realistic match percentage scores
      const matchScore = Math.min(98, Math.max(68, Math.round(rawScore)));

      return {
        ...dest,
        matchScore
      };
    });

    // Sort descending by match score
    scored.sort((a, b) => b.matchScore - a.matchScore);

    setRankedMatches(scored);
    setCurrentMatchIndex(0);
    setHasPlanned(true);

    // Smoothly scroll down to recommendation result
    setTimeout(() => {
      const resultElem = document.getElementById('trip-match-result');
      if (resultElem) {
        resultElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleNextMatch = () => {
    if (rankedMatches.length > 0) {
      setCurrentMatchIndex((prev) => (prev + 1) % Math.min(8, rankedMatches.length));
    }
  };

  const handlePrevMatch = () => {
    if (rankedMatches.length > 0) {
      setCurrentMatchIndex((prev) => (prev - 1 + Math.min(8, rankedMatches.length)) % Math.min(8, rankedMatches.length));
    }
  };

  const currentMatch = rankedMatches[currentMatchIndex] || rankedMatches[0];

  return (
    <section
      id="trip-match"
      className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-b border-black/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#C85A32] mb-3"
          >
            RETHINKING INDIAN TRAVEL
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#141518] tracking-tight leading-[1.1]"
          >
            Travel, Your Way.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-[#5A5E6D] font-sans font-normal"
          >
            Tell us what you love. We'll find where to go.
          </motion.p>
        </div>

        {/* Interactive Trip Planner Inputs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6 bg-[#F7F4EE] p-6 sm:p-10 rounded-3xl border border-black/10 shadow-lg"
        >
          {/* 1. Budget Selector */}
          <BudgetSelector
            budget={budget}
            setBudget={setBudget}
            customBudget={customBudget}
            setCustomBudget={setCustomBudget}
            isCustom={isCustomBudget}
            setIsCustom={setIsCustomBudget}
          />

          {/* 2. Duration Selector */}
          <DurationSelector
            duration={duration}
            setDuration={setDuration}
            isCustomDuration={isCustomDuration}
            setIsCustomDuration={setIsCustomDuration}
          />

          {/* 3. Vibe Selector */}
          <VibeSelector
            selectedVibes={selectedVibes}
            toggleVibe={toggleVibe}
          />

          {/* Validation Warning */}
          {validationError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Primary Action Button */}
          <div className="mt-2 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={calculateMatches}
              className="w-full sm:w-auto font-extrabold text-base px-10 py-4 shadow-xl shadow-[#C85A32]/35 scale-100 hover:scale-[1.02] transition-transform"
            >
              PLAN MY TRIP
            </Button>
          </div>
        </motion.div>

        {/* Smooth Reveal of Recommendation Results */}
        <AnimatePresence>
          {hasPlanned && currentMatch && (
            <TripRecommendation
              match={currentMatch}
              onNextMatch={handleNextMatch}
              onPrevMatch={handlePrevMatch}
              matchIndex={currentMatchIndex}
              totalMatches={Math.min(8, rankedMatches.length)}
              userBudget={budget}
              userDays={duration}
              userVibes={selectedVibes}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
