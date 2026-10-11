import Hero from '../components/home/Hero';
import TripPlanner from '../components/TripPlanner/TripPlanner';
import IndiaReality from '../components/home/IndiaReality';
import WeatherRadar from '../components/home/WeatherRadar';
import IndiaExplorer from '../components/home/IndiaExplorer';
import ExperienceGrid from '../components/home/ExperienceGrid';
import Detour from '../components/home/Detour';
import SquadMode from '../components/home/SquadMode';
import FinalCTA from '../components/home/FinalCTA';

export default function Home({ onOpenWeatherModal }) {
  const handleFindTrip = () => {
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

      {/* 2. Interactive Trip Planner Section */}
      <TripPlanner />

      {/* 3. Signature Feature: India Reality Engine */}
      <IndiaReality />

      {/* 4. Live Atmospheric Intelligence: Weather & Climate Radar */}
      <WeatherRadar onOpenFullModal={onOpenWeatherModal} />

      {/* 5. Interactive India Explorer */}
      <IndiaExplorer />

      {/* 6. Choose Your India Editorial Tiles */}
      <ExperienceGrid />

      {/* 7. Signature Feature: Tripora Detour */}
      <Detour />

      {/* 8. Squad Mode Collaborative Planning */}
      <SquadMode />

      {/* 9. Final Cinematic CTA */}
      <FinalCTA />
    </main>
  );
}
