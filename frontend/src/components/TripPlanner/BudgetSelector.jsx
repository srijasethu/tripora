import React from 'react';
import { IndianRupee } from 'lucide-react';

const BUDGET_PRESETS = [
  { label: '₹3,000', value: 3000 },
  { label: '₹5,000', value: 5000 },
  { label: '₹10,000', value: 10000 },
  { label: '₹20,000+', value: 20000 },
  { label: 'Custom', value: 'custom' }
];

export default function BudgetSelector({
  budget,
  setBudget,
  customBudget,
  setCustomBudget,
  isCustom,
  setIsCustom
}) {
  const handlePresetClick = (preset) => {
    if (preset.value === 'custom') {
      setIsCustom(true);
      if (!customBudget) {
        setCustomBudget(12000);
        setBudget(12000);
      } else {
        setBudget(customBudget);
      }
    } else {
      setIsCustom(false);
      setBudget(preset.value);
    }
  };

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setCustomBudget(val);
    setBudget(val);
  };

  return (
    <div className="flex flex-col gap-3.5 p-6 rounded-2xl bg-[#FAF6F0] border border-black/10 shadow-sm transition-all duration-300 hover:border-[#C85A32]/40">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#C85A32] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
          YOUR BUDGET
        </label>

        <span className="text-sm font-extrabold text-[#141518] font-mono bg-[#C85A32]/10 text-[#C85A32] px-3 py-1 rounded-full border border-[#C85A32]/25">
          ₹{budget.toLocaleString('en-IN')} / person
        </span>
      </div>

      {/* Preset Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {BUDGET_PRESETS.map((preset) => {
          const isActive =
            (preset.value === 'custom' && isCustom) ||
            (!isCustom && budget === preset.value);

          return (
            <button
              key={preset.label}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 ${
                isActive
                  ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/30 scale-[1.02] border border-transparent'
                  : 'bg-[#F7F4EE] text-[#4A4D5A] hover:bg-white hover:text-[#141518] border border-black/10'
              }`}
            >
              <span>{preset.label}</span>
            </button>
          );
        })}
      </div>

      {/* Custom Slider Input */}
      {isCustom && (
        <div className="mt-2 pt-3 border-t border-black/10 flex flex-col gap-2 animate-fadeIn">
          <div className="flex items-center justify-between text-xs text-[#5A5E6D] font-mono">
            <span>Range: ₹1,000</span>
            <span className="font-bold text-[#141518]">Selected: ₹{customBudget.toLocaleString('en-IN')}</span>
            <span>₹50,000</span>
          </div>

          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={customBudget || 12000}
            onChange={handleSliderChange}
            className="w-full accent-[#C85A32] h-2 bg-[#EFEADF] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
