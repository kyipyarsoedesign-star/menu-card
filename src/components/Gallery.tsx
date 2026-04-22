import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedImage = GALLERY_IMAGES.find(img => img.id === selectedId);

  return (
    <section id="gallery" className="py-24 bg-rich-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold italic mb-4">Capturing Moments</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Visual <span className="italic">Excellence</span></h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              layoutId={image.id}
              onClick={() => setSelectedId(image.id)}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              whileHover={{ scale: 0.98 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-rich-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Search className="text-gold mb-3" size={32} />
                <p className="text-white text-lg font-serif">{image.title}</p>
                <p className="text-gold/80 text-xs uppercase tracking-widest mt-1">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Lightbox */}
        <AnimatePresence>
          {selectedId && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-rich-black/95 backdrop-blur-xl"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                className="relative max-w-5xl w-full h-[80vh] bg-transparent flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gold transition-colors block"
                  onClick={() => setSelectedId(null)}
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain shadow-2xl rounded-sm"
                />
                <div className="mt-6 text-center space-y-2">
                    <h3 className="text-2xl font-serif text-gold">{selectedImage.title}</h3>
                    <p className="text-white/40 uppercase tracking-[0.2em] text-xs">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
