
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC<{ onInquiryOpen?: () => void }> = ({ onInquiryOpen }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);
  const shimmerX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-charcoal perspective-3d"
    >
      {/* Background Ambience - Monochromatic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[1200px] h-[1200px] bg-white/5 rounded-full blur-[150px]"
        />
      </div>

      {/* Floating System Status Micro-UI */}
      <div className="absolute top-32 left-12 hidden xl:block pointer-events-none opacity-40">
        <div className="flex flex-col gap-6">
          {[
            { label: 'Latency', val: '12ms', color: 'bg-white' },
            { label: 'Active Nodes', val: '1,402', color: 'bg-white' },
            { label: 'Security', val: 'Lvl 4', color: 'bg-white' }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="flex items-center gap-4 border-l border-white/10 pl-4 py-1"
            >
              <div className={`w-1 h-1 ${item.color} rounded-full animate-pulse`}></div>
              <div>
                <p className="text-mono text-[8px] uppercase tracking-widest text-white/40">{item.label}</p>
                <p className="text-mono text-[10px] font-medium text-white">{item.val}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-7xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-3 py-2 px-6 md:px-8 rounded-full border border-white/5 bg-white/[0.02] text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.5em] text-metallic uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            Global Operations Active • 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-tight md:leading-none mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-700"
          style={{ x: shimmerX }}
        >
          BUILDING <br className="hidden md:block" /> DIGITAL EMPIRES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 2 }}
          className="max-w-2xl mx-auto text-base md:text-2xl text-gray-400 mb-12 md:mb-16 font-light leading-relaxed italic"
        >
          Strategic engineering for the world's most sophisticated corporate entities. 
          Architecting digital legacy through technological precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <Button
            onClick={onInquiryOpen}
            size="lg"
            className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 hover:text-black rounded-none border border-white text-[10px] md:text-sm"
          >
            Initiate Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-none border-white/10 hover:border-white/50 backdrop-blur-md text-[10px] md:text-sm"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Review Framework
          </Button>
        </motion.div>
      </motion.div>

      {/* Grid Scan Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute w-full h-[1px] bg-white animate-scan"></div>
      </div>
    </section>
  );
};
