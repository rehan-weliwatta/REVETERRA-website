/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TeeModelViewer from "./components/TeeModelViewer";
import ProductShowcase from "./components/ProductShowcase";
import BrandManifesto from "./components/BrandManifesto";
import VibeSection from "./components/VibeSection";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  // Smooth out the scroll value for the 3D rotation
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return smoothScroll.on("change", (latest) => {
      setScrollValue(latest);
    });
  }, [smoothScroll]);

  return (
    <main className="relative min-h-screen bg-deep-black selection:bg-cyber-yellow selection:text-black overflow-x-hidden">
      {/* Background Graphic Layer */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #ccff00 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
        <motion.div
          style={{ rotate: -5 }}
          className="absolute top-[10%] left-[5%] text-[280px] font-brutal leading-none tracking-tighter text-white/5 uppercase select-none"
        >
          01 DROP
        </motion.div>
        <motion.div
          style={{ rotate: 10 }}
          className="absolute bottom-[10%] right-[5%] text-[200px] font-brutal leading-none tracking-tighter text-white/5 uppercase select-none"
        >
          
        </motion.div>
      </div>

      <Header />

      {/* Cinematic Hero */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Interactive 3D Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-cyber-yellow pl-8"
          >
            <h2 className="text-4xl md:text-6xl font-brutal uppercase leading-none">
              PHYSICAL_ <br /> MANIFESTATION
            </h2>
            <p className="mt-4 text-gray-500 font-mono text-xs tracking-widest uppercase">
              Interact with the genesis silhouette below. Scroll to rotate.
            </p>
          </motion.div>
        </div>

        <Suspense fallback={
          <div className="h-[60vh] flex items-center justify-center font-brutal text-cyber-yellow uppercase animate-pulse">
            Loading Virtual Asset...
          </div>
        }>
          <TeeModelViewer scrollProgress={scrollValue} />
        </Suspense>
      </section>

      {/* Main Product Showcase */}
      <ProductShowcase />

      {/* Brand Story, Vision, Mission */}
      <BrandManifesto />

      {/* Brand Vibes & Socials */}
      <VibeSection />

      {/* Newsletter & Links */}
      <Footer />

      {/* Global Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-[999] border-[1px] border-white/5" />
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </main>
  );
}

