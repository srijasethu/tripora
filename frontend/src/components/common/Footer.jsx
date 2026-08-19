import React from 'react';
import { Compass, Heart, ArrowUpRight, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101216] border-t border-white/10 text-[#9DA0AE] pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#8C3414] p-0.5 shadow-md shadow-[#C85A32]/20">
              <div className="w-full h-full bg-[#101216] rounded-[10px] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#C85A32]" />
              </div>
            </div>
            <span className="font-cinzel text-2xl font-bold tracking-widest text-white">
              TRIPORA
            </span>
          </div>
          <p className="text-sm font-sans text-[#8C8F9E] leading-relaxed">
            India, actually planned. The intelligent trip platform tailored to your starting point, real budget, time and vibe.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#globe" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C85A32] hover:border-[#C85A32]/40 transition-colors" title="Tripora Web">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#share" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C85A32] hover:border-[#C85A32]/40 transition-colors" title="Share Tripora">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#community" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#C85A32] hover:border-[#C85A32]/40 transition-colors" title="Tripora Community">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links: Explore */}
        <div>
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#explore" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span>Discover India</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span>Choose Your Vibe</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#detour" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span>Tripora Detour</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#transport" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span>Multimodal Transport</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        {/* Links: Tripora */}
        <div>
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
            Tripora
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition-colors">About Tripora</a>
            </li>
            <li>
              <a href="#reality-engine" className="hover:text-white transition-colors">India Reality Engine</a>
            </li>
            <li>
              <a href="#squad" className="hover:text-white transition-colors">Squad Mode</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); alert('Tripora Support: hello@tripora.in'); }} className="hover:text-white transition-colors">Contact Team</a>
            </li>
          </ul>
        </div>

        {/* Links: Legal & Badge */}
        <div>
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
            Legal & Trust
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm mb-6">
            <li>
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of Service</a>
            </li>
            <li>
              <a href="#trust" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Real Data Guarantee</a>
            </li>
          </ul>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
            <span>Made for India</span>
            <span>🇮🇳</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6C6F7E] gap-4">
        <p>© {new Date().getFullYear()} Tripora Technologies Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-[#C85A32] fill-current" /> for Indian travelers
        </p>
      </div>
    </footer>
  );
}
