import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowLeft, Mail, Loader2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface InquiryViewProps {
  onBack: () => void;
}

export const InquiryView: React.FC<InquiryViewProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [transmissionId, setTransmissionId] = useState('');

  // Generate a mock transmission ID on success
  useEffect(() => {
    if (submitted) {
      const id = 'LX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setTransmissionId(id);
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-security transmission delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-charcoal min-h-screen pt-48 pb-32 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-4 text-white/40 hover:text-white mb-16 transition-all uppercase text-[10px] font-bold tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </motion.button>

        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 block"
          >
            Inquiry Protocol v4.0.2
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter mb-8 leading-none"
          >
            INITIATE <br /> CONSULTATION.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-metallic text-lg md:text-xl font-light italic opacity-60 max-w-2xl leading-relaxed mb-8"
          >
            Direct access to the Lumora X strategic advisory board for high-value enterprise partnerships. 
            All transmissions are end-to-end encrypted.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Mail className="w-4 h-4 text-white/20" />
            <a href="mailto:lumoraxagency@gmail.com" className="text-white/40 hover:text-white transition-colors text-xs font-mono tracking-widest uppercase">
              lumoraxagency@gmail.com
            </a>
          </motion.div>
        </header>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-zinc-950/50 border border-white/5 p-8 md:p-16 rounded-2xl md:rounded-3xl backdrop-blur-md relative"
              >
                {isSubmitting && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm rounded-2xl md:rounded-3xl">
                    <Loader2 className="w-12 h-12 text-white animate-spin mb-6" />
                    <span className="text-mono text-[10px] uppercase tracking-[0.5em] text-white animate-pulse">Encrypting Transmission...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Full Identity</label>
                      <input 
                        required 
                        type="text" 
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 placeholder:text-neutral-800 text-lg md:text-xl font-light disabled:opacity-30" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Corporate Email</label>
                      <input 
                        required 
                        type="email" 
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 placeholder:text-neutral-800 text-lg md:text-xl font-light disabled:opacity-30" 
                        placeholder="name@enterprise.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Strategic Requirements</label>
                    <textarea 
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 placeholder:text-neutral-800 resize-none h-40 text-lg md:text-xl font-light leading-relaxed disabled:opacity-30" 
                      placeholder="Outline your digital architecture challenges and enterprise objectives..." 
                    />
                  </div>

                  <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-16 py-8 text-xs tracking-formal rounded-none border border-white relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Transmitting...' : 'Request Board Review'}
                      </span>
                      {isSubmitting && (
                        <motion.div 
                          className="absolute inset-0 bg-white"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ opacity: 0.2 }}
                        />
                      )}
                    </Button>
                    <div className="flex items-center gap-4 text-white/20">
                      <ShieldCheck className="w-5 h-5" />
                      <p className="text-[9px] font-mono tracking-widest uppercase">
                        TLS v1.3 • AES-256 Active
                      </p>
                    </div>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24 md:py-32 bg-zinc-950/50 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden"
              >
                {/* Decorative scanning line */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.div 
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-full h-[1px] bg-white/20 z-0"
                  />
                </div>

                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative z-10"
                >
                  <CheckCircle className="w-12 h-12 text-black" />
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-4">Transmission Received</h3>
                  <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                    <p className="text-[9px] font-mono text-white/50 tracking-widest uppercase">ID: {transmissionId}</p>
                  </div>
                  <p className="text-metallic text-lg font-light max-w-md mx-auto italic opacity-80 leading-relaxed mb-16">
                    Your inquiry has been logged in the Masterbase. Our strategic advisory board will review your credentials and contact you within 48 operational hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button 
                      variant="outline" 
                      onClick={onBack} 
                      className="text-[10px] px-10 py-4 border-white/10 hover:border-white rounded-none"
                    >
                      Return to Home
                    </Button>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors underline underline-offset-8"
                    >
                      New Transmission
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30">
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-xs font-mono tracking-widest uppercase">LUMORA X — CONSULTANCY</span>
            <span className="text-[8px] font-mono tracking-widest uppercase mt-2">Strategic Intelligence Unit</span>
          </div>
          <div className="text-[9px] font-mono tracking-widest uppercase text-center md:text-right">
            Masterbase Logging Active • Node 042-S
          </div>
        </footer>
      </div>
    </section>
  );
};