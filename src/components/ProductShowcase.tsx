import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  backImage: string;
  tag: string;
}

const PRODUCTS: Product[] = [
  {
    id: "tee-01",
    name: "MOONLIES ASTRO TEE",
    price: "Rs.3590.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/s86r2mnabwgcs9avmqu7w/1.png?rlkey=4lfjyjlfowp54r0ft3xmfni6r",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/xvrfx27wo0g6wrratcr68/2.png?rlkey=gy2m70ljkzjj58eoio8fmrrnh",
    tag: "LIMITED EDITION",
  },
  {
    id: "tee-02",
    name: "RORONOA's RAGE TEE",
    price: "Rs.3990.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/gywqmdjv4dn2uvez4hso3/3.png?rlkey=qbqwwlzp97ilwvy0zx6wpms1d",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/il6gl0ixsmm6t1shdi1bv/4.png?rlkey=2nzreven0d7jise8qs4ly3jpq",
    tag: "STRICTLY 1/20",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-card-bg border border-white/10 overflow-hidden shadow-2xl"
    >
      {/* Badge */}
      <div className="absolute top-0 left-0 z-20">
        <span className="bg-cyber-yellow text-black text-[10px] font-brutal italic px-3 py-1.5 uppercase">
          {product.tag}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
        
        {/* Back Image Reveal On Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 cursor-pointer">
          <img
            src={product.backImage}
            alt={`${product.name} back`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-8 space-y-6 border-t border-white/5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-3xl font-brutal italic leading-none">{product.name}</h3>
            <div className="text-cyber-yellow font-mono text-sm tracking-widest">{product.price}</div>
          </div>
          <div className="text-[9px] font-mono opacity-20 text-right uppercase tracking-[0.2em] leading-relaxed">
            RE_ID: {product.id.split('-')[1]}<br />
            BATCH: 01A
          </div>
        </div>

        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-full">
          <button className="w-full py-4 bg-transparent border border-white/10 hover:border-cyber-yellow hover:text-cyber-yellow transition-all duration-300 font-brutal italic uppercase text-sm tracking-tighter">
            Order via WhatsApp
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-brutal uppercase mb-4">
             THE <span className="text-stroke text-white">GENESIS</span>
          </h2>
          <p className="max-w-md text-gray-500 uppercase text-xs tracking-widest font-medium">
            Hand-crafted graphics inspired by late-90s cyber-noir aesthetics. 
            Printed on 300GSM premium heavyweight cotton.
          </p>
        </div>
        <div className="text-right">
          <span className="text-cyber-yellow font-mono text-xs">AVAILABLE_ITEMS: 02</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
