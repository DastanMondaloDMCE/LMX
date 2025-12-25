
import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../constants';

export const SocialTicker: React.FC = () => {
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-24 bg-zinc-950/50 border-y border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-metallic font-bold uppercase tracking-formal text-[10px]">
          Global Partners in Excellence
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-32 items-center whitespace-nowrap px-10"
        >
          {duplicatedLogos.map((client, idx) => (
            <div key={`${client.id}-${idx}`} className="flex-shrink-0 flex items-center grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 group">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-8 md:h-10 w-auto object-contain transition-all duration-700"
              />
              <span className="ml-4 text-lg font-display italic font-medium text-white/30 group-hover:text-white/80 transition-all duration-700">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
