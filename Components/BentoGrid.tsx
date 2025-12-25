
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Zap, Shield, Cpu } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-4 block"
        >
          Intelligence Layers
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white italic"
        >
          The Infrastructure
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr md:auto-rows-[320px]">
        {/* Card 1: The Services Masterbase (Span 2 cols) */}
        <motion.div
          className="md:col-span-2 aspect-[4/3] md:aspect-auto"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Card className="h-full relative overflow-hidden group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-white/30">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
              alt="Services" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block">Systems Architecture</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">The Services Masterbase</h3>
            </div>
          </Card>
        </motion.div>

        {/* Card 2: Vibe Coding (Span 1 col) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="aspect-square md:aspect-auto"
        >
          <Card className="h-full flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-white/30 text-center relative overflow-hidden">
            <div className="relative z-10">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 mx-auto group-hover:bg-white/10 transition-colors border border-white/5"
              >
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-white fill-white/10" />
              </motion.div>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block">Methodology</span>
              <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-tight">Vibe Coding</h3>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </Card>
        </motion.div>

        {/* Card 4: Product Masterbase (Span 2 cols) */}
        <motion.div
          className="md:col-span-2 aspect-[4/3] md:aspect-auto"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Card className="h-full relative overflow-hidden group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-white/30">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="Products" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/95 via-transparent to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block">Product Ecosystem</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">Product Masterbase</h3>
            </div>
            <div className="absolute top-6 md:top-10 right-6 md:right-10 flex gap-2 md:gap-4">
              <div className="p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-colors">
                <Cpu className="w-4 h-4 md:w-5 md:h-5 text-white/60" />
              </div>
              <div className="p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-colors">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-white/60" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Card 3: The Figure (Span 1 col, Span 2 rows - Vertical) */}
        <motion.div
          className="md:row-span-2 md:col-start-3 md:row-start-1 aspect-[4/5] md:aspect-auto"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Card className="h-full relative overflow-hidden group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-white/30">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="The Figure" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-charcoal/95" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block">Leadership</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">The Figure</h3>
              <p className="text-metallic text-[10px] md:text-xs mt-3 md:mt-4 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 italic">
                Architecting legacy through strategic foresight and technological mastery.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
