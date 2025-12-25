
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Scale, Landmark } from 'lucide-react';

const AREAS = [
  {
    icon: ShieldCheck,
    title: 'Risk Mitigation',
    desc: 'Advanced threat modeling and cyber-resilience frameworks for global financial networks.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    desc: 'Distributed systems engineering designed to withstand extreme load and cross-border latency.'
  },
  {
    icon: Landmark,
    title: 'Legacy Migration',
    desc: 'Graceful transition of monolithic systems into modern, agile micro-architectures.'
  },
  {
    icon: Scale,
    title: 'Compliance Logic',
    desc: 'Algorithmic governance ensuring regional regulatory adherence across all digital touchpoints.'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-48 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          <div className="md:w-1/3 sticky top-32">
            <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white mb-6 block">Strategic Competency</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white italic leading-tight mb-8">
              Lumora X <br /> <span className="not-italic font-black">Methodology.</span>
            </h2>
            <p className="text-metallic text-sm leading-relaxed font-light mb-12 opacity-80">
              We operate at the intersection of technological absolute and business pragmatism. 
              Our engagement models are built for longevity, not just implementation.
            </p>
            <div className="w-full h-px bg-white/10"></div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {AREAS.map((area, idx) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 hover:border-white/20 group"
              >
                <area.icon className="w-10 h-10 text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4">
                  {area.title}
                </h3>
                <p className="text-metallic text-sm font-light leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
