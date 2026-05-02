import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { Instagram, Facebook, Smartphone } from "lucide-react";

export default function VibeSection() {
  const socialImages = [
    "https://dl.dropboxusercontent.com/scl/fi/xq0vpf57ktu1bnp6hyt8d/ChatGPT-Image-Apr-4-2026-11_57_07-PM.png?rlkey=3o4rrnxkhzakqb9dzug7yexu3",
    "https://dl.dropboxusercontent.com/scl/fi/h1joquqr1f11a1zg7a2we/Untitled-design.png?rlkey=w738wp551fntd1vw19dixwiwg",
    "https://dl.dropboxusercontent.com/scl/fi/dw2mqsi4zh6ia9n9umqpl/ChatGPT-Image-Apr-4-2026-11_56_32-PM.png?rlkey=7nxm26ga0n3mgskeggatvp63i",
    "https://dl.dropboxusercontent.com/scl/fi/19au922qvy9dw27hexn6m/ChatGPT-Image-Apr-4-2026-09_00_00-PM.png?rlkey=sr49hnmkjln17xbsfi6nlz7qs",
  ];

  return (
    <section id="community" className="py-24 bg-deep-black overflow-hidden relative z-10">
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-brutal leading-[0.8] uppercase">
              SYNC <br /> THE <br /> <span className="text-cyber-yellow">VIBE</span>
            </h2>
            <p className="text-gray-400 max-w-sm uppercase text-sm tracking-wider leading-relaxed">
              Join the collective. Tag #REVETERRA01 on your fits to be featured in the cyber-archive.
            </p>
            <div className="flex gap-8">
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

          <div className="grid grid-cols-2 gap-4">
            {socialImages.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={i % 2 === 0 ? "mt-12" : ""}
              >
                <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                  <img src={src} className="w-full h-full object-cover" alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
