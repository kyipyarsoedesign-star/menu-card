import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../constants';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<typeof MENU_CATEGORIES[number]>('Starters');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold italic">Taste our best</p>
          <h2 className="text-4xl md:text-5xl font-serif">A Feast for the <span className="italic">Senses</span></h2>
          <div className="w-24 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base tracking-[0.2em] uppercase font-medium transition-all duration-300 relative pb-2 ${
                activeCategory === category ? 'text-gold' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-center border-b border-white/5 pb-8 group cursor-pointer"
              >
                <div className="relative overflow-hidden w-24 h-24 shrink-0 rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full"
                  />
                  <div className="absolute inset-0 bg-rich-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-xl font-serif group-hover:text-gold transition-colors">${item.name}</h3>
                    <div className="grow border-b border-dotted border-white/20 mb-1 mx-2"></div>
                    <span className="text-gold font-bold font-serif">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm line-clamp-1 italic">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
            <button className="px-10 py-4 border border-gold/30 text-white/80 hover:border-gold hover:text-gold text-sm font-bold tracking-widest transition-all">
                DOWNLOAD FULL MENU (PDF)
            </button>
        </div>
      </div>
    </section>
  );
}
