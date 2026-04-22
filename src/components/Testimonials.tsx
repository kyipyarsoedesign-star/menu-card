import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-10 text-gold/30" size={60} strokeWidth={1} />
            
            <div className="relative overflow-hidden h-[450px] md:h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-8"
                    >
                        <p className="text-xl md:text-3xl font-serif leading-relaxed italic text-white/90 px-6">
                            "{TESTIMONIALS[current].content}"
                        </p>
                        
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40">
                                <img 
                                    src={TESTIMONIALS[current].image} 
                                    alt={TESTIMONIALS[current].name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="text-gold font-serif text-xl">{TESTIMONIALS[current].name}</h4>
                                <p className="text-white/40 uppercase tracking-widest text-[10px] mt-1">
                                    {TESTIMONIALS[current].role}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                                    <Star key={i} size={12} fill="#D4AF37" className="text-gold" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
                {TESTIMONIALS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            current === i ? 'bg-gold w-8' : 'bg-white/10 hover:bg-white/30'
                        }`}
                    />
                ))}
            </div>
        </div>

        {/* Floating Nav Buttons */}
        <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-gold transition-colors hidden md:block"
        >
            <ChevronLeft size={40} strokeWidth={1} />
        </button>
        <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-gold transition-colors hidden md:block"
        >
            <ChevronRight size={40} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
}
