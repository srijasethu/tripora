// Duration selector component

const DURATION_PRESETS = [
  { label: '1–2 DAYS', min: 1, max: 2, defaultVal: 2 },
  { label: '3–4 DAYS', min: 3, max: 4, defaultVal: 3 },
  { label: '5–7 DAYS', min: 5, max: 7, defaultVal: 5 },
  { label: '1 WEEK+', min: 8, max: 14, defaultVal: 8 },
  { label: 'Custom', value: 'custom' }
];

export default function DurationSelector({
  duration,
  setDuration,
  isCustomDuration,
  setIsCustomDuration
}) {
  const handlePresetClick = (preset) => {
    if (preset.value === 'custom') {
      setIsCustomDuration(true);
    } else {
      setIsCustomDuration(false);
      setDuration(preset.defaultVal);
    }
  };

  const isPresetActive = (preset) => {
    if (isCustomDuration) return preset.value === 'custom';
    if (preset.value === 'custom') return false;
    return duration >= preset.min && duration <= preset.max;
  };

  return (
    <div className="flex flex-col gap-3.5 p-6 rounded-2xl bg-[#FAF6F0] border border-black/10 shadow-sm transition-all duration-300 hover:border-[#8C6422]/40">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6422] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8C6422]"></span>
          YOUR TIME
        </label>

        <span className="text-sm font-extrabold text-[#141518] font-mono bg-[#D4A359]/15 text-[#8C6422] px-3 py-1 rounded-full border border-[#D4A359]/30">
          {duration} {duration === 1 ? 'DAY' : 'DAYS'}
        </span>
      </div>

      {/* Preset Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {DURATION_PRESETS.map((preset) => {
          const isActive = isPresetActive(preset);

          return (
            <button
              key={preset.label}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'bg-[#8C6422] text-white shadow-md shadow-[#8C6422]/30 scale-[1.02] border border-transparent'
                  : 'bg-[#F7F4EE] text-[#4A4D5A] hover:bg-white hover:text-[#141518] border border-black/10'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Custom Duration Input */}
      {isCustomDuration && (
        <div className="mt-2 pt-3 border-t border-black/10 flex flex-col gap-2 animate-fadeIn">
          <div className="flex items-center justify-between text-xs text-[#5A5E6D] font-mono">
            <span>1 Day</span>
            <span className="font-bold text-[#141518]">Selected: {duration} Days</span>
            <span>14 Days</span>
          </div>

          <input
            type="range"
            min="1"
            max="14"
            step="1"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-[#8C6422] h-2 bg-[#EFEADF] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
