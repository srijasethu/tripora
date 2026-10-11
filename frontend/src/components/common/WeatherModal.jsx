import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CloudSun,
  Sun,
  CloudRain,
  Cloud,
  Wind,
  Droplets,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  MapPin,
  Search,
  ArrowRight
} from 'lucide-react';
import { WEATHER_DESTINATIONS, WEATHER_CATEGORIES } from '../../data/weatherData';

function getWeatherIcon(iconType, className = 'w-5 h-5') {
  switch (iconType) {
    case 'sun':
      return <Sun className={`${className} text-amber-400`} />;
    case 'cloud-rain':
      return <CloudRain className={`${className} text-blue-400`} />;
    case 'cloud-fog':
      return <Cloud className={`${className} text-slate-300`} />;
    case 'wind':
      return <Wind className={`${className} text-cyan-300`} />;
    case 'cloud':
      return <Cloud className={`${className} text-slate-400`} />;
    case 'cloud-sun':
    default:
      return <CloudSun className={`${className} text-amber-300`} />;
  }
}

export default function WeatherModal({ isOpen, onClose, onSelectDestination }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDestId, setActiveDestId] = useState('goa');

  if (!isOpen) return null;

  const filteredDestinations = WEATHER_DESTINATIONS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.condition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const activeDestination =
    WEATHER_DESTINATIONS.find((d) => d.id === activeDestId) ||
    filteredDestinations[0] ||
    WEATHER_DESTINATIONS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#141518] text-[#FAF6F0] rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#D4A359] p-0.5 shadow-md flex items-center justify-center">
                <CloudSun className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold font-serif tracking-wide text-white">
                    Tripora Climate & Weather Radar
                  </h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#C85A32]/25 text-[#D4A359] border border-[#C85A32]/40 font-bold">
                    Live Telemetry
                  </span>
                </div>
                <p className="text-xs text-white/60 font-sans">
                  Real-time conditions, 5-day outlooks & India travel reality advisories
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Weather Radar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search destination, state or condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C85A32] focus:bg-white/10 transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {WEATHER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#C85A32] text-white shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Destination Quick Selector List */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[460px] overflow-y-auto pr-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/40 mb-1">
                Destinations ({filteredDestinations.length})
              </span>

              {filteredDestinations.length === 0 ? (
                <div className="p-8 text-center text-white/50 text-sm bg-white/[0.02] rounded-2xl border border-white/5">
                  No destinations match your search.
                </div>
              ) : (
                filteredDestinations.map((dest) => {
                  const isSelected = dest.id === activeDestination.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => setActiveDestId(dest.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#C85A32]/25 to-transparent border-[#C85A32] shadow-lg'
                          : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                          {getWeatherIcon(dest.iconType, 'w-5 h-5')}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                              {dest.name}
                            </h4>
                            <span className="text-[10px] text-white/40 font-sans">
                              {dest.state}
                            </span>
                          </div>
                          <p className="text-xs text-white/60 flex items-center gap-2 mt-0.5">
                            <span>{dest.condition}</span>
                            <span>•</span>
                            <span className="text-emerald-400 font-mono">AQI {dest.aqi}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex flex-col items-end">
                        <span className="text-xl sm:text-2xl font-black font-mono text-white leading-tight">
                          {dest.currentTemp}°C
                        </span>
                        <span className="text-[10px] text-white/40">
                          Feels {dest.feelsLike}°C
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Column: Detailed Telemetry View */}
            <div className="lg:col-span-7 flex flex-col gap-5 bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6">
              {/* Highlight Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C85A32]" />
                    <span className="text-xs uppercase font-mono tracking-widest text-[#D4A359] font-bold">
                      {activeDestination.state}, India
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {activeDestination.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 mt-0.5">
                    {activeDestination.condition}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center">
                    {getWeatherIcon(activeDestination.iconType, 'w-8 h-8')}
                  </div>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                      {activeDestination.currentTemp}°
                    </span>
                    <span className="block text-[10px] uppercase font-mono text-white/50">
                      Feels like {activeDestination.feelsLike}°C
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Atmospheric Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-white/50 font-bold">
                    <Droplets className="w-3 h-3 text-blue-400" />
                    Rain Chance
                  </span>
                  <p className="text-base font-bold font-mono text-white mt-1">
                    {activeDestination.rainfallProb}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-white/50 font-bold">
                    <Wind className="w-3 h-3 text-cyan-400" />
                    Wind Velocity
                  </span>
                  <p className="text-base font-bold font-mono text-white mt-1">
                    {activeDestination.windSpeed}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-white/50 font-bold">
                    <Thermometer className="w-3 h-3 text-amber-400" />
                    Humidity
                  </span>
                  <p className="text-base font-bold font-mono text-white mt-1">
                    {activeDestination.humidity}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-white/50 font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Air Quality
                  </span>
                  <p className="text-base font-bold font-mono text-emerald-400 mt-1">
                    AQI {activeDestination.aqi} ({activeDestination.aqiStatus})
                  </p>
                </div>
              </div>

              {/* 5-Day Forward Outlook */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/50 mb-2 block">
                  5-Day Travel Projection
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {activeDestination.fiveDayForecast.map((fc, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.08] transition-colors"
                    >
                      <span className="text-xs font-bold text-white/80">{fc.day}</span>
                      <div className="my-1.5">{getWeatherIcon(fc.icon, 'w-4 h-4')}</div>
                      <span className="text-sm font-bold font-mono text-white">{fc.temp}°</span>
                      <span className="text-[10px] text-white/40 font-mono">{fc.low}°</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel Reality Engine Intelligence Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#C85A32]/15 to-amber-900/10 border border-[#C85A32]/30 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#D4A359]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Travel Reality Intelligence</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  <strong>Advisory:</strong> {activeDestination.advisory}
                </p>
                <div className="text-[11px] text-white/70 font-sans flex flex-col sm:flex-row gap-1 sm:gap-4 pt-1 border-t border-white/10">
                  <span>
                    🎒 <strong>Pack:</strong> {activeDestination.packingTip}
                  </span>
                  <span>
                    ⏰ <strong>Prime Window:</strong> {activeDestination.bestTimeOfDay}
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-white/50 font-mono">
                  UV Radiation Index: {activeDestination.uvIndex} / 10
                </span>
                <button
                  onClick={() => {
                    if (onSelectDestination) {
                      onSelectDestination(activeDestination.id);
                    }
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#A84522] text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#C85A32]/30"
                >
                  <span>Plan Trip in This Weather</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
