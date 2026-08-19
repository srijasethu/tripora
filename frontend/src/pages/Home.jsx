import React from 'react';
import Hero from '../components/home/Hero';
import StoryTransition from '../components/home/StoryTransition';
import TripMatch from '../components/home/TripMatch';
import BuiltForIndia from '../components/home/BuiltForIndia';
import IndiaReality from '../components/home/IndiaReality';
import IndiaExplorer from '../components/home/IndiaExplorer';
import ExperienceGrid from '../components/home/ExperienceGrid';
import Detour from '../components/home/Detour';
import SquadMode from '../components/home/SquadMode';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  const handleFindTrip = (searchParams) => {
    // Scroll down smoothly to Trip Match section
    const matchSection = document.getElementById('trip-match');
    if (matchSection) {
      matchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#0E0F12] text-[#E5E2DC] overflow-x-hidden">
      {/* 1. Cinematic Hero & Trip Finder */}
      <Hero onFindTrip={handleFindTrip} />

      {/* 2. Hero -> Content Story Transition */}
      <StoryTransition />

      {/* 3. Signature Feature: Trip Match Engine */}
      <TripMatch />

      {/* 4. Built for India & Multimodal Transport Visualizer */}
      <BuiltForIndia />

      {/* 5. Signature Feature: India Reality Engine */}
      <IndiaReality />

      {/* 6. Interactive India Explorer */}
      <IndiaExplorer />

      {/* 7. Choose Your India Editorial Tiles */}
      <ExperienceGrid />

      {/* 8. Signature Feature: Tripora Detour */}
      <Detour />

      {/* 9. Squad Mode Collaborative Planning */}
      <SquadMode />

      {/* 10. Final Cinematic CTA */}
      <FinalCTA />
    </main>
  );
}
