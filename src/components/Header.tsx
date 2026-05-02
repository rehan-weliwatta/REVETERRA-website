import { motion } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <video 
              src="https://dl.dropboxusercontent.com/scl/fi/l7o9ss8opjormug5xu331/logo2.webm?rlkey=b3scq6jm3fvpcbdg6mg697817" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-100 sm:h-50 w-auto object-contain"
            />
          </div>
        </motion.div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 items-center text-[11px] font-bold uppercase tracking-widest">
            <a href="#collections" className="hover:text-cyber-yellow transition-colors">Collections</a>
            <a href="#manifesto" className="hover:text-cyber-yellow transition-colors">Manifesto</a>
            <a href="#community" className="hover:text-cyber-yellow transition-colors">Community</a>
          </nav>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:text-cyber-yellow transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-deep-black flex items-center justify-center p-12"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 p-4 hover:text-cyber-yellow transition-colors"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="text-center space-y-8">
            {[
              { label: "Home", href: "#home" },
              { label: "Collections", href: "#collections" },
              { label: "Manifesto", href: "#manifesto" },
              { label: "Community", href: "#community" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <a 
                  href={item.href} 
                  className="text-6xl md:text-9xl font-brutal uppercase tracking-tighter hover:text-cyber-yellow transition-all duration-300 group-hover:italic"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-10 left-10 font-mono text-[10px] uppercase text-gray-500">
            SYSTEM_REVISION: 1.0.4 <br />
            ACCESS_LEVEL: ADMIN
          </div>
        </motion.div>
      )}
    </>
  );
}
