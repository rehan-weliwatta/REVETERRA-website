import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 mt-24 relative z-10">
      <div className="bg-smoke px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center sm:text-left">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Stay Connected</div>
            <a 
              href="https://chat.whatsapp.com/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-cyber-yellow text-black text-[13px] sm:text-[14px] font-brutal italic uppercase hover:bg-white transition-colors w-full sm:w-auto text-center"
            >
              Join WhatsApp Community_
            </a>
          </div>
          
          <div className="flex gap-6">
            {[
              { label: "IG", href: "https://www.instagram.com/reveterra?igsh=ejRpMm4xcjZlZjNw&utm_source=qr" },
              { label: "FB", href: "https://www.facebook.com/share/1B6BsS1TUG/?mibextid=wwXIfr" },
              { label: "TK", href: "https://www.tiktok.com/@reve_terra" }
            ].map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, borderColor: "#ccff00", color: "#ccff00" }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors"
                >
                  {social.label}
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-8 h-8 bg-cyber-yellow flex items-center justify-center">
              <span className="text-black font-brutal text-lg italic tracking-tighter">RT</span>
            </div>
            <div className="font-brutal text-2xl tracking-tighter italic">© 2026</div>
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.2em] text-center md:text-right max-w-md">
            Designed for the collective // RÊVETERЯA // All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
