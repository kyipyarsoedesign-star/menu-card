import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-rich-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1000&auto=format&fit=crop"
              alt="Our Story"
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold italic">Since 1998</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Crafting Culinary <br />
                <span className="text-gold italic">Excellence</span>
              </h2>
            </div>
            
            <p className="text-white/60 leading-relaxed max-w-lg">
              At Lumina Grill, we believe that dining is more than just eating—it's an immersive 
              sensory journey. Our chefs combine traditional techniques with modern innovation to 
              create dishes that are as beautiful as they are delicious.
            </p>
            
            <p className="text-white/60 leading-relaxed max-w-lg">
              Every ingredient is hand-picked from local organic farms to ensure the highest 
              quality. Experience the perfect harmony of taste, texture, and atmosphere.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <div className="text-center p-4 border border-white/10 flex-1">
                <p className="text-2xl font-serif text-gold">25+</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Years of Trust</p>
              </div>
              <div className="text-center p-4 border border-white/10 flex-1">
                <p className="text-2xl font-serif text-gold">15</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Michelin Stars</p>
              </div>
              <div className="text-center p-4 border border-white/10 flex-1">
                <p className="text-2xl font-serif text-gold">100%</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Organic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
