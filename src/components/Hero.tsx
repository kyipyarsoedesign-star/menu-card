import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&auto=format&fit=crop")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/40 via-rich-black/60 to-rich-black"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 font-semibold"
        >
          Welcome to Lumina Grill
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-light mb-8 leading-tight tracking-tight"
        >
          The Art of <br />
          <span className="italic">Fine Dining</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-gold text-rich-black font-bold tracking-widest hover:bg-gold-dark transition-all duration-300 w-full md:w-auto text-center"
          >
            VIEW MENU
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-white font-bold tracking-widest hover:bg-white hover:text-rich-black transition-all duration-300 w-full md:w-auto text-center"
          >
            BOOK A TABLE
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer hidden md:block"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
