import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Twitter, Youtube, Facebook, Music, AtSign } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
  onLegalChange?: (type: 'tos' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onLegalChange }) => {
  return (
    <footer className="bg-charcoal pt-24 md:pt-40 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24 mb-24 md:mb-32 relative">
        
        {/* Col 1: Watermark Logo */}
        <div className="relative flex items-center md:items-start justify-center md:justify-start overflow-hidden py-10 md:py-0">
          <div className="w-full h-32 md:h-64 opacity-5 select-none pointer-events-none flex items-center justify-center md:justify-start">
             <img 
                src="https://i.ibb.co/wZDXK5X7/CXb-Yf-5x-400x400.png" 
                alt="Lumora X Watermark" 
                className="h-full object-contain grayscale invert brightness-200"
              />
          </div>
        </div>

        {/* Col 2: Directory */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          <h4 className="text-white text-[10px] font-bold uppercase tracking-formal opacity-30">Directory</h4>
          <ul className="space-y-3 md:space-y-4">
            {['Services', 'Products', 'Brands', 'Businesses', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => onPageChange?.(item.toLowerCase())}
                  className="text-neutral-500 hover:text-white transition-colors duration-500 text-sm font-light text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Social & Presence */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          <h4 className="text-white text-[10px] font-bold uppercase tracking-formal opacity-30">Presence</h4>
          <div className="grid grid-cols-3 gap-4">
            <a href="https://x.com/lumoraxagency" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/lumorax_official/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.youtube.com/@LumoraXAgency" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="https://www.tiktok.com/@lumoraxagency" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Music className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/profile.php?id=61585287406106" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.threads.com/@lumorax_official" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><AtSign className="w-4 h-4" /></a>
          </div>
          <ul className="space-y-3 md:space-y-4 pt-4 border-t border-white/5">
            <li>
              <button 
                onClick={() => onLegalChange?.('privacy')}
                className="text-neutral-500 hover:text-white transition-colors duration-500 text-[10px] font-bold uppercase tracking-widest text-left"
              >
                Privacy Protocol
              </button>
            </li>
            <li>
              <button 
                onClick={() => onLegalChange?.('tos')}
                className="text-neutral-500 hover:text-white transition-colors duration-500 text-[10px] font-bold uppercase tracking-widest text-left"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Intelligence */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          <h4 className="text-white text-[10px] font-bold uppercase tracking-formal opacity-30">Intelligence</h4>
          <div>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[200px] mb-2">
              Strategic inquiries and advisory board transmissions.
            </p>
            <a href="mailto:lumoraxagency@gmail.com" className="text-white hover:underline text-[11px] font-mono tracking-widest transition-colors block mb-6">
              lumoraxagency@gmail.com
            </a>
          </div>
          <form className="relative group flex items-center" onSubmit={(e) => { e.preventDefault(); onPageChange?.('inquiry'); }}>
            <input 
              type="email" 
              placeholder="Operational Briefing" 
              className="w-full bg-transparent border-b border-white/10 rounded-none py-2 md:py-3 text-white focus:outline-none focus:border-white transition-all duration-700 font-light placeholder:text-neutral-700 text-sm"
            />
            <button 
              type="submit" 
              className="absolute right-0 p-2 text-neutral-500 hover:text-white transition-colors duration-500 group-hover:translate-x-1 transform"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-formal text-neutral-600 text-center md:text-left">
          © 2026 LUMORA X. ARCHITECTING DIGITAL EMPIRES.
        </p>
        <div className="flex gap-4 md:gap-8 text-[8px] md:text-[10px] font-bold uppercase tracking-formal text-neutral-600">
          <span className="hover:text-white cursor-pointer transition-colors duration-500">Global Standard</span>
          <span className="hover:text-white cursor-pointer transition-colors duration-500">MMXXVI</span>
        </div>
      </div>
    </footer>
  );
};