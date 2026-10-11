import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CloudSun,
  Sun,
  CloudRain,
  Cloud,
  Wind,
  Droplets,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { WEATHER_DESTINATIONS, WEATHER_CATEGORIES } from '../../data/weatherData';

function getWeatherIcon(iconType, className = 'w-6 h-6') {
  switch (iconType) {
    case 'sun':
      return <Sun className={`${className} text-amber-500`} />;
    case 'cloud-rain':
      return <CloudRain className={`${className} text-blue-500`} />;
    case 'cloud-fog':
      return <Cloud className={`${className} text-stone-400`} />;
    case 'wind':
      return <Wind className={`${className} text-cyan-500`} />;
    case 'cloud':
      return <Cloud className={`${className} text-stone-500`} />;
    case 'cloud-sun':
    default:
      return <CloudSun className={`${className} text-amber-500`} />;
  }
}

export default function WeatherRadar({ onOpenFullModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedId, setSelectedId] = useState('munnar');

  const filtered = WEATHER_DESTINATIONS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const activeDest =
    WEATHER_DESTINATIONS.find((d) => d.id === selectedId) ||
    filtered[0] ||
    WEATHER_DESTINATIONS[0];

  return (
    <section id="weather-radar" className="py-24 bg-[#FAF6F0] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Live Atmospheric Intelligence"
          title="WEATHER DECIDES THE JOURNEY."
          subtitle="Real-time Indian destination climate telemetry, rain probabilities, mountain fog advisories, and packing reality checks."
          light={true}
        />

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {WEATHER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#C85A32] text-white shadow-md border border-black/10 scale-105'
                  : 'bg-[#F7F4EE] text-[#4A4D5A] hover:text-[#141518] border border-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Weather Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Destination Live Weather Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 max-h-[560px] overflow-y-auto pr-1">
            {filtered.map((item) => {
              const isSelected = item.id === activeDest.id;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#C85A32] shadow-lg ring-2 ring-[#C85A32]/20'
                      : 'bg-[#F7F4EE] hover:bg-white border-black/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-black/10 flex items-center justify-center flex-shrink-0">
                      {getWeatherIcon(item.iconType, 'w-6 h-6')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif font-bold text-base text-[#141518]">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#5A5E6D] mt-0.5">{item.condition}</p>
                      <span className="text-[10px] font-mono font-semibold text-[#C85A32]">
                        {item.state} • AQI {item.aqi}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-black font-mono text-[#141518]">
                      {item.currentTemp}°C
                    </span>
                    <span className="block text-[10px] font-sans text-[#5A5E6D]">
                      Rain {item.rainfallProb}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Featured Telemetry Board */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-black/10 p-6 sm:p-9 shadow-xl relative overflow-hidden flex flex-col gap-6"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-bold">
                        {activeDest.category} • {activeDest.state}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#141518] mt-1">
                      {activeDest.name}
                    </h3>
                    <p className="text-sm text-[#5A5E6D] font-medium mt-0.5">
                      {activeDest.condition} • Feels like {activeDest.feelsLike}°C
                    </p>
                  </div>

                  <div className="flex items-center gap-4 bg-[#FAF6F0] p-4 rounded-2xl border border-black/10">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      {getWeatherIcon(activeDest.iconType, 'w-7 h-7')}
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-black font-mono text-[#141518] leading-none">
                        {activeDest.currentTemp}°
                      </span>
                      <span className="block text-[11px] font-mono text-emerald-700 font-bold mt-1">
                        AQI {activeDest.aqi} ({activeDest.aqiStatus})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Atmospheric Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-black/5">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-[#5A5E6D] font-bold">
                      <Droplets className="w-3.5 h-3.5 text-blue-600" />
                      Precipitation
                    </span>
                    <p className="text-lg font-bold font-mono text-[#141518] mt-1">
                      {activeDest.rainfallProb}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-black/5">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-[#5A5E6D] font-bold">
                      <Wind className="w-3.5 h-3.5 text-cyan-600" />
                      Wind Speed
                    </span>
                    <p className="text-lg font-bold font-mono text-[#141518] mt-1">
                      {activeDest.windSpeed}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-black/5">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-[#5A5E6D] font-bold">
                      <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                      Humidity
                    </span>
                    <p className="text-lg font-bold font-mono text-[#141518] mt-1">
                      {activeDest.humidity}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-black/5">
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-[#5A5E6D] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      UV Index
                    </span>
                    <p className="text-lg font-bold font-mono text-[#141518] mt-1">
                      {activeDest.uvIndex} / 10
                    </p>
                  </div>
                </div>

                {/* 5-Day Visual Forecast Strip */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A5E6D] font-mono mb-2.5">
                    5-Day Weather Outlook
                  </h4>
                  <div className="grid grid-cols-5 gap-2.5">
                    {activeDest.fiveDayForecast.map((f, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-[#FAF6F0] border border-black/5 text-center flex flex-col items-center justify-between"
                      >
                        <span className="text-xs font-bold text-[#141518]">{f.day}</span>
                        <div className="my-2">{getWeatherIcon(f.icon, 'w-5 h-5')}</div>
                        <span className="text-sm font-bold font-mono text-[#141518]">{f.temp}°</span>
                        <span className="text-[10px] font-mono text-[#5A5E6D]">{f.low}°</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reality Advisory Banner */}
                <div className="p-4 rounded-2xl bg-[#C85A32]/10 border border-[#C85A32]/25 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-[#C85A32]">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Travel Reality Climate Advisory</span>
                  </div>
                  <p className="text-xs text-[#141518] leading-relaxed">
                    {activeDest.advisory}
                  </p>
                  <div className="text-[11px] text-[#4A4D5A] pt-1.5 border-t border-[#C85A32]/20 flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span>
                      <strong>🎒 Packing:</strong> {activeDest.packingTip}
                    </span>
                    <span>
                      <strong>⏰ Best Window:</strong> {activeDest.bestTimeOfDay}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-black/10">
                  {onOpenFullModal && (
                    <button
                      onClick={onOpenFullModal}
                      className="text-xs font-bold text-[#C85A32] hover:text-[#8C3414] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Open Interactive Weather Radar Modal</span>
                    </button>
                  )}

                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => {
                      const planner = document.getElementById('trip-match');
                      if (planner) {
                        planner.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto"
                  >
                    Plan Trip for {activeDest.name}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
