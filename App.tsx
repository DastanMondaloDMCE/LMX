import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ClientTicker } from './components/ClientTicker';
import { BentoGrid } from './components/BentoGrid';
import { Expertise } from './components/Expertise';
import { Metrics } from './components/Metrics';
import { MediaFoundations } from './components/MediaFoundations';
import { LegalContent } from './components/LegalContent';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

// Page Components
import { ServicesView } from './components/pages/ServicesView';
import { ProductsView } from './components/pages/ProductsView';
import { BrandsView } from './components/pages/BrandsView';
import { BusinessesView } from './components/pages/BusinessesView';
import { AboutView } from './components/pages/AboutView';
import { InquiryView } from './components/pages/InquiryView';

type Page = 'home' | 'services' | 'products' | 'brands' | 'businesses' | 'about' | 'inquiry' | 'contact';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [legalView, setLegalView] = useState<'tos' | 'privacy' | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Logo URL (Direct PNG for transparency/performance)
  const directLogoUrl = "https://i.ibb.co/wZDXK5X7/CXb-Yf-5x-400x400.png"; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    if (legalView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [legalView]);

  const handlePageChange = (page: string) => {
    if (page === 'contact') {
      setCurrentPage('inquiry');
    } else {
      setCurrentPage(page as Page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <ServicesView />;
      case 'products': return <ProductsView />;
      case 'brands': return <BrandsView />;
      case 'businesses': return <BusinessesView />;
      case 'about': return <AboutView />;
      case 'contact':
      case 'inquiry': return <InquiryView onBack={() => setCurrentPage('home')} />;
      default: return (
        <>
          <Hero onInquiryOpen={() => setCurrentPage('inquiry')} />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
            <ClientTicker />
          </motion.div>
          <div id="expertise"><Expertise /></div>
          <div id="impact"><Metrics /></div>
          <section id="infrastructure" className="py-24 md:py-48 bg-charcoal"><BentoGrid /></section>
          <MediaFoundations />
          <section className="pb-24 md:pb-48 px-6 bg-charcoal">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto bg-zinc-950 border border-white/5 p-12 md:p-32 text-center relative overflow-hidden group rounded-[1.5rem] md:rounded-[2rem]"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transform skew-x-[-45deg] animate-[shine_12s_infinite]"></div>
              <h2 className="text-4xl md:text-8xl font-display font-medium italic mb-8 md:mb-10 tracking-tight leading-none">
                Command the <br />
                <span className="not-italic font-black text-white group-hover:text-neutral-400 transition-colors duration-1000">Digital Frontier.</span>
              </h2>
              <p className="text-metallic text-base md:text-xl mb-12 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed italic opacity-80">
                Engage with our strategic advisory board to discuss the evolution of your enterprise architecture.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
                <Button 
                  onClick={() => setCurrentPage('inquiry')}
                  size="lg" 
                  className="w-full sm:w-auto px-12 py-6 md:px-16 md:py-8 rounded-none text-[10px] md:text-xs uppercase tracking-formal font-bold hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                >
                  Schedule Review
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-10 py-6 md:px-12 md:py-8 rounded-none text-[10px] md:text-xs uppercase tracking-formal font-bold border-b border-white/5 hover:border-white/20"
                  onClick={() => setCurrentPage('services')}
                >
                  Case Studies
                </Button>
              </div>
            </motion.div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-foreground font-sans selection:bg-white/30 relative">
      
      {/* GLOBAL BRANDING OVERLAY - Corner Signifiers */}
      <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden select-none">
        {/* Top-Right Signifier */}
        <div className="absolute top-12 right-12 hidden md:flex flex-col items-end opacity-20">
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-white">Lumora X</span>
          <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-white/50">Terminal Active</span>
        </div>
        
        {/* Bottom-Right Signifier */}
        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-end opacity-20">
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-white">Private Beta</span>
          <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-white/50">MMXXVI ©</span>
        </div>

        {/* Large Background Watermark Logo (Center-ish) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl opacity-[0.02] flex items-center justify-center pointer-events-none">
          <img 
            src={directLogoUrl} 
            alt="Watermark" 
            className="w-full h-full object-contain grayscale invert brightness-200"
          />
        </div>
      </div>

      <AnimatePresence>
        {legalView && (
          <LegalContent type={legalView} onClose={() => setLegalView(null)} />
        )}
      </AnimatePresence>

      {/* Persistent Lower-Left Brand Signature with Background Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        onClick={() => {
          setLegalView(null);
          setCurrentPage('home');
        }}
        className="fixed bottom-8 left-8 md:bottom-12 md:left-12 z-[90] flex items-center group cursor-pointer"
      >
        <div className="relative p-4 md:p-6 overflow-hidden">
          {/* Logo behind the name */}
          <img 
            src={directLogoUrl} 
            alt="Brand Mark"
            className="absolute -left-2 -top-2 w-20 h-20 md:w-28 md:h-28 object-contain opacity-10 group-hover:opacity-30 invert grayscale transition-all duration-1000 scale-125 group-hover:scale-100"
          />
          <div className="relative z-10 flex flex-col items-start leading-none pl-4 md:pl-6 border-l border-white/10 group-hover:border-white/40 transition-colors duration-700">
            <span className="text-xl md:text-2xl font-display font-black tracking-tight text-white italic group-hover:tracking-widest transition-all duration-700">LUMORA X</span>
            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase mt-1">Private Beta</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Global Navigation Pill */}
      <nav className="fixed top-4 md:top-8 left-0 right-0 z-[100] px-4 md:px-6 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className={`
            pointer-events-auto flex items-center gap-6 md:gap-12 px-8 md:px-12 py-3 md:py-4 
            rounded-full border transition-all duration-700
            ${scrolled 
              ? 'bg-charcoal/90 backdrop-blur-2xl border-white/10 shadow-[0_20px_60px_rgba(255,255,255,0.05)] py-2 md:py-3' 
              : 'bg-zinc-950/20 border-white/5 py-3 md:py-4'
            }
          `}
        >
          <div className="flex items-center gap-6 md:gap-10 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em]">
            {(['services', 'products', 'brands', 'businesses', 'about'] as Page[]).map((p) => (
              <button 
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`transition-colors uppercase hidden sm:block ${currentPage === p ? 'text-white' : 'text-white/30 hover:text-white'}`}
              >
                {p}
              </button>
            ))}
            <Button 
              onClick={() => setCurrentPage('inquiry')}
              variant="outline" 
              size="sm" 
              className={`rounded-none border-white/10 transition-all text-[8px] px-6 py-2 ${currentPage === 'inquiry' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
            >
              Inquiry
            </Button>
          </div>
        </motion.div>
      </nav>

      <main className="pt-0 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={handlePageChange} onLegalChange={(l: 'tos' | 'privacy') => setLegalView(l)} />
      
      <style>{`
        @keyframes shine { 0% { left: -100%; } 15% { left: 100%; } 100% { left: 100%; } }
      `}</style>
    </div>
  );
};

export default App;