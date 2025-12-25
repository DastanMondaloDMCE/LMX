
import React from 'react';
import { motion } from 'framer-motion';

export const BrandsView: React.FC = () => (
  <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <header className="mb-32 text-center">
        <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">Perception Engineering</span>
        <h1 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-12 italic">
          BRANDS.
        </h1>
        <p className="text-metallic text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          We transform corporate entities into global icons. Through rigorous aesthetic discipline, 
          we build brands that signify power, stability, and future-readiness.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-[16/9] bg-white border border-white/10 flex items-center justify-center overflow-hidden group">
          <span className="text-black font-display font-black text-8xl md:text-9xl opacity-10 group-hover:scale-125 transition-transform duration-1000">ICON</span>
        </div>
        <div className="flex flex-col justify-center space-y-8 p-12 bg-white/5">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Identity Framework</h3>
          <p className="text-metallic text-sm leading-relaxed font-light italic opacity-70">
            "A brand is not a logo. It is a psychological absolute."
          </p>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/50">
            <li>• Visual Archetyping</li>
            <li>• Strategic Positioning</li>
            <li>• Emotional Resonance Logic</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
