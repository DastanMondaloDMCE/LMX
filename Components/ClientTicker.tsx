
import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
  { id: '1', name: 'ACME' },
  { id: '2', name: 'LUMINA' },
  { id: '3', name: 'APEX' },
  { id: '4', name: 'VERTEX' },
  { id: '5', name: 'ZENITH' },
  { id: '6', name: 'CATALYST' },
];

export const ClientTicker: React.FC = () => {
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="relative w-full h-[160px] bg-charcoal border-y border-white/[0.03] flex items-center overflow-hidden group">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent"></div>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-24 whitespace-nowrap"
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center gap-4 transition-all duration-700"
            >
              <span className="text-4xl md:text-5xl font-display font-black italic tracking-tighter text-white/10 group-hover:text-white transition-colors duration-700">
                {client.name}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
