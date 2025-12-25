
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface LegalContentProps {
  onClose: () => void;
  type: 'tos' | 'privacy';
}

export const LegalContent: React.FC<LegalContentProps> = ({ onClose, type }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[200] bg-charcoal overflow-y-auto px-6 py-24"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onClose}
          className="flex items-center gap-4 text-metallic hover:text-white mb-20 transition-all uppercase text-[10px] font-bold tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
        </button>

        <header className="mb-24">
          <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block">Regulatory Framework</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-8">
            {type === 'tos' ? 'Terms of Service' : 'Privacy Protocol'}
          </h1>
          <p className="text-metallic text-sm font-mono opacity-50 italic">Last Revision: Q1 MMXXVI</p>
        </header>

        <div className="space-y-16 text-metallic leading-relaxed font-light text-sm border-t border-white/5 pt-16 pb-32">
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">1.0 General Provisions</h3>
            <p>
              Lumora X ("the Agency") provides strategic digital architecture and consultancy services. By accessing our interface, you acknowledge and agree to the proprietary nature of our frameworks. All consultations are governed by the Masterbase License Agreement.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">2.0 Intellectual Property</h3>
            <p>
              All methodologies, "Vibe Coding" techniques, and Infrastructure designs displayed are the exclusive property of Lumora X. Unauthorized replication of our black-and-white aesthetic or strategic logic is strictly prohibited under global intellectual property laws.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">3.0 Liability and Indemnity</h3>
            <p>
              The Agency maintains a standard of absolute technical excellence. However, digital empires are built on shifting landscapes. Lumora X is not liable for fluctuations in market dominance resulting from external volatility or failure to implement strategic advisory protocols.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">4.0 Governing Law</h3>
            <p>
              This agreement is governed by the Digital Sovereignty Act and international business arbitration standards. Any disputes will be settled within the Lumora X Boardroom Jurisdiction.
            </p>
          </section>

          <div className="pt-16 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
              © 2026 LUMORA X • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
