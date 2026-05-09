import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

/**
 * BRAN_VIDEO_URL: Replace this URL with your actual brand video.
 * Ensure it is a direct link to an MP4 file that supports browser playback.
 */
const BRAND_VIDEO_URL = "https://dl.dropboxusercontent.com/scl/fi/i97d1qlaq7vasyvgyknpc/BG.mp4?rlkey=t2oq7ngedtdormzv6n3mj0k3b";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover grayscale brightness-70"
        >
          <source
            src={BRAND_VIDEO_URL}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="absolute w-full flex justify-center items-center pointer-events-none -translate-y-12">
            <h1 className="text-[10vw] sm:text-[12vw] md:text-[180px] font-brutal italic uppercase leading-none text-transparent text-stroke-solid opacity-20">
              SHIBUYA SOUL
            </h1>
          </div>

          <div className="relative mt-20 sm:mt-24">
            <a href="#collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-yellow text-black px-8 sm:px-12 py-4 sm:py-5 font-brutal italic uppercase tracking-tighter text-xl sm:text-2xl hover:bg-white transition-colors"
              >
                Shop the Drop
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Callouts from Design */}
      <div className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 w-56 flex-col gap-4 z-30">
        <a href="#collections">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="bg-white/5 backdrop-blur-md p-5 border-l-2 border-cyber-yellow cursor-pointer transition-colors"
          >
            <div className="text-cyber-yellow text-[10px] font-bold tracking-widest uppercase mb-1">DROP 01 EXCLUSIVES</div>
            <div className="text-xl font-brutal italic leading-tight hover:text-cyber-yellow transition-colors">MOONLIES ASTRO TEE</div>
            <div className="text-sm font-mono opacity-50 mt-2">Rs.3590.00</div>
          </motion.div>
        </a>
      </div>

      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 w-56 flex-col gap-4 z-30 text-right">
        <a href="#collections">
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="bg-white/5 backdrop-blur-md p-5 border-r-2 border-cyber-yellow cursor-pointer transition-colors"
          >
            <div className="text-cyber-yellow text-[10px] font-bold tracking-widest uppercase mb-1">LIMITED 20PCS</div>
            <div className="text-xl font-brutal italic leading-tight hover:text-cyber-yellow transition-colors">RORONOA's RAGE TEE</div>
            <div className="text-sm font-mono opacity-50 mt-2">Rs.3990.00</div>
          </motion.div>
        </a>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] font-medium opacity-50 uppercase">Scroll to enter</span>
          <ArrowDown className="w-4 h-4 text-cyber-yellow" />
        </motion.div>
      </div>

      {/* Side Metadata */}
      <div className="hidden lg:block absolute left-10 bottom-10 z-20 font-mono text-[10px] space-y-1 opacity-40">
        <div>LAT: 35.6895° N</div>
        <div>LON: 139.6917° E</div>
        <div>SYS_ONLINE: TRUE</div>
      </div>
    </section>
  );
}
