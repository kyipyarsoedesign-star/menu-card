import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', guests: '2', date: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-rich-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-bold italic">Visit us</p>
              <h2 className="text-4xl md:text-5xl font-serif">Contact <span className="italic">Information</span></h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">Our Location</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    123 Culinary Avenue, Gourmet District<br />
                    Manhattan, New York 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">Reservations</h4>
                  <p className="text-white/40 text-sm italic">+1 (555) 789-1234</p>
                  <p className="text-white/40 text-sm italic">reservations@lumina.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">General Inquiries</h4>
                  <p className="text-white/40 text-sm italic">hello@lumina.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold">Opening Hours</h4>
              <div className="flex justify-between text-sm text-white/50 italic">
                <span>Mon - Fri</span>
                <span>17:00 - 23:00</span>
              </div>
              <div className="flex justify-between text-sm text-white/80 font-medium">
                <span>Sat - Sun</span>
                <span>12:00 - 00:00</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-[#0c0c0c] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-[#0c0c0c] flex flex-col items-center justify-center text-center p-6"
              >
                <CheckCircle2 size={64} className="text-gold mb-4" />
                <h3 className="text-3xl font-serif mb-2">Request Received</h3>
                <p className="text-white/40 max-w-sm">
                  Thank you for choosing Lumina Grill. Our team will contact you shortly to confirm your reservation.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-gold text-xs uppercase tracking-widest font-bold hover:underline"
                >
                  SEND ANOTHER REQUEST
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-[#0c0c0c] border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n.toString()}>{n} Persons</option>
                    ))}
                    <option value="9+">9+ Persons (Contact us)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Preferred Date</label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Special Requests</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-white/10"
                  placeholder="Tell us about allergies, birthdays, or specific seating preferences..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-5 bg-gold text-rich-black font-bold tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-rich-black/30 border-t-rich-black rounded-full animate-spin"></div>
                ) : (
                  <>
                    CONFIRM RESERVATION
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
