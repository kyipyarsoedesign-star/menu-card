import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-3xl font-serif font-bold tracking-tighter inline-flex items-center gap-2">
                <span className="text-gold">LUMINA</span>
                <span className="text-white/90">GRILL</span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs italic">
              Redefining the boundaries of luxury dining through innovation, passion, and artistic expression.
            </p>
            <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-gold font-serif text-xl">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-gold font-serif text-xl">Information</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-gold font-serif text-xl">Newsletter</h4>
            <p className="text-white/30 text-sm italic">Join our circle for exclusive events and seasonal specials.</p>
            <div className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="E-mail Address" 
                    className="bg-transparent border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-white"
                />
                <button className="bg-gold text-rich-black text-xs font-bold py-3 tracking-widest uppercase hover:bg-gold-dark transition-all">
                    SUBSCRIBE
                </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            &copy; 2026 Lumina Grill. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-gold transition-colors">Career</a>
            <a href="#" className="hover:text-gold transition-colors">Press Kit</a>
            <a href="#" className="hover:text-gold transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
