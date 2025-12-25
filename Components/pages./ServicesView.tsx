
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap, Layout, Code } from 'lucide-react';

const SERVICES = [
  { icon: Globe, title: 'Strategic Architecture', desc: 'Enterprise-grade system design capable of handling millions of concurrent operations globally.' },
  { icon: Cpu, title: 'Vibe Coding', desc: 'Our proprietary methodology blending intuitive design logic with rigid algorithmic performance.' },
  { icon: Code, title: 'Full-Stack Implementation', desc: 'Next.js 14, React 19, and scalable backend infrastructures built for the high-end B2B market.' },
  { icon: Shield, title: 'Cyber Resilience', desc: 'Advanced threat modeling and security audits that harden your digital assets against evolving threats.' },
  { icon: Layout, title: 'Corporate Identity', desc: 'Visual storytelling that commands authority through minimalism and monochromatic precision.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Extreme latency reduction and edge computing strategies for real-time business critical data.' },
];

export const ServicesView: React.FC = () => (
  <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <header className="mb-32">
        <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">Capabilities</span>
        <h1 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-12">
          SERVICES.
        </h1>
        <p className="text-metallic text-xl md:text-2xl font-light leading-relaxed max-w-3xl italic">
          We provide the blueprints for the next generation of corporate giants. 
          Architecture that doesn't just work—it dominates.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-16 bg-charcoal group hover:bg-zinc-950 transition-colors duration-700"
          >
            <s.icon className="w-12 h-12 text-white mb-10 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-6">{s.title}</h3>
            <p className="text-metallic text-sm leading-relaxed font-light">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
