
import React from 'react';
import { motion } from 'framer-motion';
import { Metrics } from '../Metrics';

export const BusinessesView: React.FC = () => (
  <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <header className="mb-32">
        <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">Enterprise Partnerships</span>
        <h1 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-12">
          BUSINESSES.
        </h1>
      </header>

      <Metrics />

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="p-16 border border-white/5 bg-zinc-950/20">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-8 underline underline-offset-8">Global Operations</h3>
          <p className="text-metallic text-sm leading-relaxed font-light">
            We partner with businesses at the scale of continents. Our infrastructure ensures that as you expand, 
            your digital heart beats with absolute consistency.
          </p>
        </div>
        <div className="p-16 border border-white/5 bg-zinc-950/20">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-8 underline underline-offset-8">ROI Absolute</h3>
          <p className="text-metallic text-sm leading-relaxed font-light">
            Every implementation is measured against a rigorous set of KPIs. We don't build for vanity—we build for valuation.
          </p>
        </div>
      </div>
    </div>
  </section>
);
