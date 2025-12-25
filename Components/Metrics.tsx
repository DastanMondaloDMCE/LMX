
import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { label: 'Asset Valuation', value: '$4.2B+', prefix: 'ROI' },
  { label: 'Global Infrastructure', value: '42', prefix: 'NODES' },
  { label: 'Uptime Reliability', value: '99.99%', prefix: 'SLA' },
  { label: 'Market Dominance', value: '12', prefix: 'YEARS' },
];

export const Metrics: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-mono text-[9px] uppercase tracking-widest text-white/40 font-medium">
                  {stat.prefix}
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-neutral-400 transition-colors duration-500">
                {stat.value}
              </div>
              <p className="text-metallic text-[10px] uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
