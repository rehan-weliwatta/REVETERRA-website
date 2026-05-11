import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { Instagram, Facebook, Smartphone } from "lucide-react";

export default function VibeSection() {
  const socialImages = [
    "https://dl.dropboxusercontent.com/scl/fi/xq0vpf57ktu1bnp6hyt8d/ChatGPT-Image-Apr-4-2026-11_57_07-PM.png?rlkey=3o4rrnxkhzakqb9dzug7yexu3",
    "https://dl.dropboxusercontent.com/scl/fi/s86r2mnabwgcs9avmqu7w/1.png?rlkey=4lfjyjlfowp54r0ft3xmfni6r",
    "https://dl.dropboxusercontent.com/scl/fi/o97kb50tyb78rqoum9swv/ChatGPT-Image-May-9-2026-08_18_17-PM.png?rlkey=0w0wyy7x4w1vpyke0a8ixfj4x",
    "https://dl.dropboxusercontent.com/scl/fi/19au922qvy9dw27hexn6m/ChatGPT-Image-Apr-4-2026-09_00_00-PM.png?rlkey=sr49hnmkjln17xbsfi6nlz7qs",
  ];

  return (
    <section id="community" className="py-20 bg-deep-black overflow-hidden relative z-10">
      {/* Dynamic Marquee */}
      <div className="bg-cyber-yellow text-black py-4 whitespace-nowrap overflow-hidden flex border-y-2 border-black rotate-1">
        <Marquee speed={120} gradient={false}>
          {Array(5).fill("").map((_, i) => (
            <div key={i} className="text-[18px] font-brutal italic uppercase flex gap-12 mx-6">
              <span>RÊVE TERЯA Systems Online // Protocol 01 Initialized // No Returns on Souls // ONE PIECE - RORONOA ZORO // Limited Batch 01</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 sm:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-brutal leading-[0.9] uppercase">
              SYNC <br /> THE <br /> <span className="text-cyber-yellow">VIBE</span>
            </h2>
            <p className="text-gray-400 max-w-full sm:max-w-lg uppercase text-xs sm:text-sm tracking-wider leading-relaxed">
              Join the collective. Tag #REVETERRA01 on your fits to be featured in the cyber-archive.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-8">
              <a href="https://www.instagram.com/reveterra?igsh=ejRpMm4xcjZlZjNw&utm_source=qr" target="_blank" rel="noreferrer">
                <Instagram className="w-8 h-8 hover:text-cyber-yellow transition-colors cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@reve_terra?_r=1&_t=ZS-961I09lqKlp" target="_blank" rel="noreferrer">
                <Smartphone className="w-8 h-8 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/share/1B6BsS1TUG/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <Facebook className="w-8 h-8 hover:text-electric-blue transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialImages.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={i % 2 === 0 ? "mt-8 sm:mt-12" : "mt-0"}
              >
                <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 overflow-hidden">
                  <img src={src} loading="lazy" className="w-full h-full object-cover" alt="Community Image" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
