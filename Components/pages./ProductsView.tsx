
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const PRODUCTS = [
  { id: 'MB-01', name: 'Masterbase Core', desc: 'The fundamental OS for enterprise data orchestration.', tag: 'LATEST' },
  { id: 'MB-02', name: 'Nexus Logic', desc: 'Predictive modeling for global market fluctuations.', tag: 'STABLE' },
  { id: 'MB-03', name: 'Titan Flow', desc: 'High-frequency transaction monitoring and security.', tag: 'ENTERPRISE' },
];

export const ProductsView: React.FC = () => (
  <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <header className="mb-32">
        <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">The Masterbase Series</span>
        <h1 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-12">
          PRODUCTS.
        </h1>
      </header>

      <div className="space-y-6">
        {PRODUCTS.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-12 border border-white/5 bg-zinc-950/50 hover:bg-zinc-950 transition-all duration-700 hover:border-white/20"
          >
            <div>
              <span className="text-mono text-[9px] text-white/30 uppercase tracking-widest block mb-2">{p.id} — {p.tag}</span>
              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-4">{p.name}</h3>
              <p className="text-metallic text-sm font-light max-w-md">{p.desc}</p>
            </div>
            <div className="mt-8 md:mt-0 flex gap-6">
              <Button variant="ghost" className="text-[10px]">Documentation</Button>
              <Button size="sm" className="px-8 border border-white">Deploy</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
