import { useState, useEffect, Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import BrandManifesto from "./components/BrandManifesto";
import VibeSection from "./components/VibeSection";
import Footer from "./components/Footer";

export default function App() {
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

