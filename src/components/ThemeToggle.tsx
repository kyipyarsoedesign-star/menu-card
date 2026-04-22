import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border overflow-hidden ${
        isDark ? 'bg-white/10 border-white/20 text-gold' : 'bg-rich-black/10 border-rich-black/20 text-gold'
      } hover:scale-110 active:scale-95 group`}
    >
        <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transition-transform duration-500 ${isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <Moon size={24} />
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ${!isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <Sun size={24} />
            </div>
        </div>
    </button>
  );
}
