
import React from 'react';
import { motion } from 'framer-motion';

export const AboutView: React.FC = () => (
  <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-32">
        <header>
          <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">The Collective</span>
          <h1 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-0">
            ABOUT.
          </h1>
        </header>
        <p className="text-metallic text-xl font-light italic leading-relaxed opacity-60">
          Lumora X was founded in 2024 to bridge the gap between aggressive technological scaling 
          and the aesthetic requirement of the high-end B2B market.
        </p>
      </div>

      <div className="aspect-[21/9] bg-white/5 border border-white/10 mb-32 relative overflow-hidden flex items-center justify-center group">
         <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="HQ" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-10000 ease-linear"
          />
          <h2 className="relative z-10 text-white font-display font-bold text-4xl md:text-6xl tracking-widest italic opacity-50">LUMORA X HQ</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 border-t border-white/5 pt-24">
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">The Philosophy</h4>
          <p className="text-metallic text-sm font-light leading-relaxed">
            Minimalism is not the absence of things. It is the perfect concentration of the things that matter. 
            We apply this to every line of code.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">The Team</h4>
          <p className="text-metallic text-sm font-light leading-relaxed">
            Known internally as "The Figure", our leadership is a collective of architects, engineers, 
            and strategists from the world's most disciplined industries.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">The Legacy</h4>
          <p className="text-metallic text-sm font-light leading-relaxed">
            We don't build products. We build digital empires. Our legacy is written in the 
            uptime and ROI of the entities we represent.
          </p>
        </div>
      </div>
    </div>
  </section>
);
