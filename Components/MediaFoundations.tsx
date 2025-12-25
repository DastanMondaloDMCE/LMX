import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Instagram, Twitter, Youtube, Facebook, Music, AtSign } from 'lucide-react';

export const MediaFoundations: React.FC = () => {
  return (
    <section id="media" className="py-48 px-6 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">Foundations</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white italic leading-tight mb-12">
              The Identity of <br /> <span className="not-italic font-black">Lumora X.</span>
            </h2>
            <p className="text-metallic text-sm leading-relaxed font-light mb-16 max-w-lg">
              Our brand is built on the principles of clarity, authority, and monochromatic precision. 
              We maintain a rigorous visual standard across all global touchpoints.
            </p>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Media Kit 2026</h4>
                  <p className="text-metallic text-[10px] uppercase tracking-wider">Brand Guidelines & Assets (PDF, 42MB)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Press Relations</h4>
                  <p className="text-metallic text-[10px] uppercase tracking-wider">Inquiries: lumoraxagency@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Brand Elements Grid */}
            <div className="aspect-square bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">The Palette</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
                <div className="w-6 h-6 bg-black border border-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="aspect-square bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">The Mark</span>
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src="https://i.ibb.co/wZDXK5X7/CXb-Yf-5x-400x400.png" 
                  alt="Official Mark" 
                  className="w-full h-full object-contain grayscale invert brightness-200 opacity-20 group-hover:opacity-100 transition-opacity duration-1000"
                />
              </div>
            </div>
            
            <div className="aspect-square bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Intelligence</span>
              <div className="flex flex-col gap-4">
                <a href="https://x.com/lumoraxagency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <Twitter className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">X / TWITTER</span>
                </a>
                <a href="https://www.youtube.com/@LumoraXAgency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <Youtube className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">YOUTUBE</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61585287406106" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <Facebook className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">FACEBOOK</span>
                </a>
              </div>
            </div>

            <div className="aspect-square bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Presence</span>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/lumorax_official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <Instagram className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">INSTAGRAM</span>
                </a>
                <a href="https://www.tiktok.com/@lumoraxagency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <Music className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">TIKTOK</span>
                </a>
                <a href="https://www.threads.com/@lumorax_official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-metallic hover:text-white transition-all">
                  <AtSign className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">THREADS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};