// Vibe selector component
import {
  Sparkles,
  Check,
  Mountain,
  Palmtree,
  Trees,
  Landmark,
  Castle,
  Compass,
  Utensils,
  Palette,
  Building2
} from 'lucide-react';

const VIBE_OPTIONS = [
  { id: 'Mountains', label: 'Mountains', icon: Mountain },
  { id: 'Beaches', label: 'Beaches', icon: Palmtree },
  { id: 'Nature', label: 'Nature', icon: Trees },
  { id: 'Spiritual', label: 'Spiritual', icon: Landmark },
  { id: 'Heritage', label: 'Heritage', icon: Castle },
  { id: 'Adventure', label: 'Adventure', icon: Compass },
  { id: 'Food', label: 'Food', icon: Utensils },
  { id: 'Culture', label: 'Culture', icon: Palette },
  { id: 'City', label: 'City', icon: Building2 }
];

export default function VibeSelector({ selectedVibes, toggleVibe }) {
  return (
    <div className="flex flex-col gap-3.5 p-6 rounded-2xl bg-[#FAF6F0] border border-black/10 shadow-sm transition-all duration-300 hover:border-[#C85A32]/40">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#C85A32] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          YOUR VIBE
        </label>

        <span className="text-xs font-semibold text-[#5A5E6D]">
          {selectedVibes.length > 0
            ? `${selectedVibes.length} selected`
            : 'Select one or more'}
        </span>
      </div>

      {/* Vibe Chips Grid */}
      <div className="flex flex-wrap gap-2.5">
        {VIBE_OPTIONS.map((vibe) => {
          const isSelected = selectedVibes.includes(vibe.id);
          const Icon = vibe.icon;

          return (
            <button
              key={vibe.id}
              type="button"
              onClick={() => toggleVibe(vibe.id)}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/30 scale-[1.03] border border-transparent'
                  : 'bg-[#F7F4EE] text-[#4A4D5A] hover:bg-white hover:text-[#141518] border border-black/10'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#C85A32]'}`} />
              <span>{vibe.label}</span>
              {isSelected && <Check className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

