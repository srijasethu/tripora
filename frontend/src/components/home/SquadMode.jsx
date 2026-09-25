import { useState } from 'react';
import { motion } from 'framer-motion';
import { SQUAD_DESTINATIONS } from '../../data/squadVotes';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Heart, X, Users, MessageSquare } from 'lucide-react';

export default function SquadMode() {
  const [selectedSquadId, setSelectedSquadId] = useState('dudhsagar');
  const activeSquadTrip = SQUAD_DESTINATIONS.find((s) => s.id === selectedSquadId) || SQUAD_DESTINATIONS[0];

  return (
    <section id="squad" className="py-24 bg-[#F7F4EE] border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <SectionHeading
          badge="Collaborative Group Planning"
          title="PLANNING WITH FRIENDS SHOULDN'T REQUIRE 476 WHATSAPP MESSAGES."
          subtitle="Tripora Squad Mode lets your friends vote on vibes, budgets, and destinations — then calculates your squad's exact overlap."
          light={true}
        />

        {/* Voting Interface Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#FAF6F0] border border-black/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-mono font-bold flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                WHERE SHOULD WE GO?
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#141518] mt-1">
                {activeSquadTrip.name}
              </h3>
              <p className="text-xs text-[#5A5E6D]">{activeSquadTrip.state}</p>
            </div>

            {/* Match Circle Badge */}
            <div className="flex items-center gap-3 bg-[#F7F4EE] px-5 py-3 rounded-2xl border border-black/10">
              <div className="w-12 h-12 rounded-full border-2 border-[#C85A32] flex items-center justify-center font-mono font-extrabold text-[#C85A32] text-sm bg-[#C85A32]/10">
                {activeSquadTrip.matchPercentage}%
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-[#5A5E6D] font-medium">Squad Consensus</span>
                <span className="text-xs font-bold text-[#8C6422]">HIGH OVERLAP</span>
              </div>
            </div>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 py-6 border-b border-black/5">
            {SQUAD_DESTINATIONS.map((trip) => (
              <button
                key={trip.id}
                onClick={() => setSelectedSquadId(trip.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedSquadId === trip.id
                    ? 'bg-[#C85A32] text-white shadow-sm'
                    : 'bg-[#F7F4EE] text-[#4A4D5A] hover:text-[#141518] border border-black/5'
                }`}
              >
                {trip.name}
              </button>
            ))}
          </div>

          {/* Friend Avatar Voting Grid */}
          <div className="py-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5A5E6D] mb-4">
              Real-time Squad Votes:
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeSquadTrip.votes.map((vote, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-2xl bg-[#F7F4EE] border border-black/10 flex flex-col items-center justify-center gap-3 relative group shadow-sm"
                >
                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                    vote.choice === 'heart' ? 'bg-[#C85A32]' : 'bg-gray-400'
                  }`}>
                    {vote.choice === 'heart' ? <Heart className="w-3.5 h-3.5 fill-current" /> : <X className="w-3.5 h-3.5" />}
                  </div>

                  <img
                    src={vote.avatar}
                    alt={vote.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-black/10 shadow-sm group-hover:border-[#C85A32] transition-colors"
                  />

                  <div className="text-center">
                    <span className="text-sm font-bold text-[#141518] block">{vote.name}</span>
                    <span className="text-[10px] text-[#8C6422] font-mono font-semibold">
                      {vote.choice === 'heart' ? 'Voted YES ❤️' : 'Voted NO ✕'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Squad Consensus Summary */}
          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#141518]">YOUR SQUAD AGREES ON:</span>
              {activeSquadTrip.agreements.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#8C6422]/10 text-[#8C6422] border border-[#8C6422]/30">
                  {item}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              icon={MessageSquare}
              onClick={() => alert('Invite link copied! Share on WhatsApp to start squad voting.')}
              className="text-[#141518] border-black/20 hover:bg-black/5"
            >
              Share WhatsApp Poll →
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
