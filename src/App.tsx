/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-gold selection:text-rich-black">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-rich-black flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl md:text-6xl font-serif tracking-tighter flex gap-2"
            >
              <span className="text-gold">LUMINA</span>
              <span className="text-white/90">GRILL</span>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              className="h-px bg-gold/30 relative"
            >
                <motion.div 
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 w-1/3 h-full bg-gold"
                />
            </motion.div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mt-4">Preparing your table...</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={`${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <ThemeToggle />
      </div>

      {/* Floating Reservation Button (Mobile only) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <a 
          href="#contact" 
          className="bg-gold text-rich-black px-6 py-3 rounded-full font-bold shadow-2xl text-xs tracking-widest block"
        >
          RESERVE
        </a>
      </div>
    </main>
  );
}
