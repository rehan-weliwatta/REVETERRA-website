import { ChevronDown, Star, X } from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Accordion({ title, children, defaultOpen = false }: { title: React.ReactNode, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-brutal tracking-widest uppercase text-sm group-hover:text-cyber-yellow transition-colors">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyber-yellow' : 'text-white/50'}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  backImage: string;
  tag: string;
  reviewCount: number;
  description: string;
  features: string[];
  fabric: string;
  material: string;
  care: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "tee-01",
    name: "MOONLIES ASTRO TEE",
    price: "Rs.3999.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/tzyuoh1zfesk3oz4vb0ws/Untitled-design-83.png?rlkey=liyrmppu5gk1p4ntlsb47dcgm",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/xvrfx27wo0g6wrratcr68/2.png?rlkey=gy2m70ljkzjj58eoio8fmrrnh",
    tag: "LIMITED EDITION",
    reviewCount: 7,
    description: "A vintage inspired graphic tee designed for those drawn to the unknown. Featuring bold extraterrestrial artwork with distressed textures and cosmic visuals, this piece blends retro sci-fi aesthetics with modern oversized streetwear energy.",
    features: [
      "100% premium cotton for a soft heavyweight feel.",
      "Oversized unisex fit.",
      "High-definition printed artwork.",
      "Large vintage-inspired back graphic print.",
      "Minimal front chest branding.",
      "Washed dark finish for a timeless streetwear look."
    ],
    fabric: "300GSM",
    material: "100% Cotton",
    care: [
      "Wash and dry inside out.",
      "Hand wash or machine wash cold.",
      "Wash dark colors separately.",
      "Iron inside out.",
      "Do not bleach.",
      "Do not wring.",
      "Do not iron directly on print.",
      "Do not dry clean."
    ]
  },
  {
    id: "tee-02",
    name: "RORONOA's RAGE TEE",
    price: "Rs.4499.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/s1k4naoifckqusz0111sy/Untitled-design-82.png?rlkey=nl0ato8z1o61wm9l58gf2u07j",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/zmb3pixeibebxr8fhxq3l/Untitled-design-80.png?rlkey=0z9giflzea2qg94befekjufgd",
    tag: "STRICTLY 1/20",
    reviewCount: 9,
    description: "A bold fusion of anime inspired artistry and elevated streetwear design. Crafted to stand out with intricate back graphics and refined detailing, this oversized tee blends comfort, culture, and statement aesthetics into one premium essential.",
    features: [
      "100% premium cotton for a soft and heavyweight feel.",
      "Oversized unisex fit.",
      "High-quality printed graphics.",
      "Detailed full-back anime-inspired artwork.",
      "Sleeve and front chest graphic detailing."
    ],
    fabric: "260GSM",
    material: "100% Cotton",
    care: [
      "Wash and dry inside out.",
      "Hand wash or machine wash cold.",
      "Wash dark colors separately.",
      "Iron inside out.",
      "Do not bleach.",
      "Do not wring.",
      "Do not iron directly on print.",
      "Do not dry clean."
    ]
  },
];

const SL_REVIEWS = [
  { author: "Kavindu M.", text: "Quality eka patta. Supiriyata thiyenawa. Highly recommend!", rating: 5, date: "2 days ago" },
  { author: "Shehan D.", text: "Ade patta quality ban. Print eka ehemama thiyenawa wash kalata passe.", rating: 5, date: "1 week ago" },
  { author: "Malith S.", text: "Fast delivery, hodata pack karala thibba. Material eka mara premium.", rating: 5, date: "1 week ago" },
  { author: "Tharindu P.", text: "Worth the price. Size eka perfectly fit una. ", rating: 4, date: "2 weeks ago" },
  { author: "Nimesh F.", text: "Thawa designs danna. Customer service eka hodai.", rating: 5, date: "3 weeks ago" },
  { author: "Dinuka R.", text: "I've bought from many local brands, but this one hits different.", rating: 5, date: "1 month ago" },
  { author: "Pasindu W.", text: "Superb quality t-shirt. Delivery was within 2 days to Kandy.", rating: 5, date: "1 month ago" },
  { author: "Ashan K.", text: "Patta. I was waiting for this drop. Didn't disappoint.", rating: 5, date: "1 month ago" },
  { author: "Heshan L.", text: "Size is a bit large, but good oversized fit. Quality is 10/10.", rating: 4, date: "2 months ago" }
];

function getReviewsForProduct(count: number, productId: string) {
  // Use product id length as a simple seed to keep reviews consistent per product
  const seed = productId.length;
  const shuffled = [...SL_REVIEWS].sort((a, b) => 0.5 - ((seed * a.text.length) % 100) / 100);
  return shuffled.slice(0, count);
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setReviews(getReviewsForProduct(product.reviewCount, product.id));
  }, [product]);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);
  const waLink = `Message reveterra on WhatsApp. Message reveterra on WhatsApp. https://wa.me/94703370850?text=Hi,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${product.price})`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl h-full max-h-[85vh] flex flex-col md:flex-row shadow-2xl relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-cyber-yellow hover:text-black transition-colors rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div 
          className="group relative w-full md:w-1/2 h-[30vh] md:h-[85vh] bg-[#e6e6e6] overflow-hidden shrink-0 cursor-pointer"
          onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
        >
          {/* Mobile Tap Indicator */}
          {/* <div className="md:hidden absolute top-4 left-4 z-40 bg-black/50 backdrop-blur-md text-cyber-yellow border border-white/10 px-3 py-1.5 text-[9px] font-brutal uppercase tracking-widest rounded-full pointer-events-none flex items-center gap-2">
            <span>Tap to Flip</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div> */}

          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain md:p-8 transition-transform duration-700" 
          />
          
          {/* Back Image Reveal On Hover or Tap */}
          <div className={`absolute inset-0 transition-opacity duration-500 bg-[#e6e6e6] ${isFlipped ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
            <img
              src={product.backImage}
              alt={`${product.name} back`}
              className="w-full h-full object-contain md:p-8 transition-transform duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
             <h3 className="text-3xl sm:text-5xl font-brutal italic leading-none">{product.name}</h3>
             <div className="text-cyber-yellow font-mono mt-2 tracking-widest text-sm">{product.price}</div>
          </div>
        </div>

        {/* Details & Reviews Side */}
        <div className="w-full md:w-1/2 flex flex-col h-[55vh] md:h-full bg-[#0a0a0a] relative">
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10">
             <div className="mb-6">
               <h2 className="text-2xl font-brutal uppercase text-white/90">Product Details</h2>
             </div>

             <Accordion title="Description" defaultOpen={true}>
               <p className="text-white/70 font-sans text-sm leading-relaxed">
                 {product.description}
               </p>
             </Accordion>

             <Accordion title="Details & Care">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-cyber-yellow mb-2 tracking-widest text-[10px] uppercase">Key Features</h4>
                    <ul className="list-disc list-inside text-white/70 text-xs space-y-1">
                      {product.features.map(f => <li key={f} className="pl-1">{f}</li>)}
                      <li className="pl-1">Fabric: {product.fabric}</li>
                    </ul>
                  </div>
                  <div>
                     <h4 className="font-mono text-cyber-yellow mb-2 tracking-widest text-[10px] uppercase">Care Guide ({product.material})</h4>
                     <ul className="list-disc list-inside text-white/70 text-xs space-y-1">
                       {product.care.map(c => <li key={c} className="pl-1">{c}</li>)}
                     </ul>
                  </div>
                </div>
             </Accordion>

             <Accordion title="Size Guide">
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-xs text-white/70 border-collapse">
                   <thead>
                     <tr className="border-b border-white/20">
                       <th className="pb-2 font-mono font-normal tracking-widest">SIZE</th>
                       <th className="pb-2 font-mono font-normal tracking-widest">CHEST</th>
                       <th className="pb-2 font-mono font-normal tracking-widest">LENGTH</th>
                       <th className="pb-2 font-mono font-normal tracking-widest">SLEEVE</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-white/5"><td className="py-3 font-mono text-white">S</td><td className="py-3">42"</td><td className="py-3">28"</td><td className="py-3">9"</td></tr>
                     <tr className="border-b border-white/5"><td className="py-3 font-mono text-white">M</td><td className="py-3">44"</td><td className="py-3">29"</td><td className="py-3">9.5"</td></tr>
                     <tr className="border-b border-white/5"><td className="py-3 font-mono text-white">L</td><td className="py-3">46"</td><td className="py-3">30"</td><td className="py-3">10"</td></tr>
                     <tr className=""><td className="py-3 font-mono text-white">XL</td><td className="py-3">48"</td><td className="py-3">31"</td><td className="py-3">10.5"</td></tr>
                   </tbody>
                 </table>
               </div>
             </Accordion>

             <Accordion title={`Customer Reviews (${product.reviewCount})`}>
                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="text-3xl font-brutal leading-none">4.9</div>
                  <div className="flex text-cyber-yellow">
                    <Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" />
                  </div>
                </div>

                <div className="space-y-4">
                  {displayedReviews.map((review, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="bg-[#111] border border-white/5 p-5"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-brutal uppercase text-xs tracking-wider text-cyber-yellow">{review.author}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className={`w-3 h-3 ${idx < review.rating ? 'text-cyber-yellow fill-cyber-yellow' : 'text-white/20'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-white/80 font-sans leading-relaxed">"{review.text}"</p>
                      <div className="font-mono text-[9px] text-white/30 mt-3">{review.date}</div>
                    </motion.div>
                  ))}
                </div>

                {reviews.length > 3 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-6 w-full py-3 border border-white/20 hover:border-cyber-yellow font-brutal uppercase tracking-widest text-[10px] hover:text-cyber-yellow transition-colors"
                  >
                    {showAll ? "SHOW LESS" : `LOAD MORE REVIEWS`}
                  </button>
                )}
             </Accordion>

             {/* Spacer to ensure scrolling past the sticky footer */}
             <div className="h-40 w-full shrink-0"></div>
          </div>

          {/* Sticky Footer CTA */}
          <div className="absolute bottom-0 left-0 w-full p-6 pt-12 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pointer-events-none flex items-end justify-center">
            <a href={waLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-full pointer-events-auto">
              <button className="w-full py-4 bg-cyber-yellow text-black font-brutal italic uppercase tracking-tighter sm:text-lg hover:bg-white transition-colors shadow-[0_0_30px_rgba(204,255,0,0.15)] flex justify-between items-center px-6 sm:px-8">
                <span>Order via WhatsApp</span>
                <span className="font-mono not-italic text-xs sm:text-sm pt-1 tracking-widest">{product.price}</span>
              </button>
            </a>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const waLink = `https://wa.me/94765251839?text=Hi,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${product.price})`;

  // Auto-flip images on mobile every 3 seconds so users see both sides automatically
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setIsFlipped(prev => !prev);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-card-bg border border-white/10 overflow-hidden shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      {/* Badge */}
      <div className="absolute top-0 left-0 z-20">
        <span className="bg-cyber-yellow text-black text-[10px] font-brutal italic px-3 py-1.5 uppercase">
          {product.tag}
        </span>
      </div>

      {/* Mobile Pagination Dots */}
      <div className="md:hidden absolute bottom-[40%] left-0 right-0 z-30 flex justify-center gap-1.5 pointer-events-none">
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${!isFlipped ? 'bg-cyber-yellow' : 'bg-white/20'}`} />
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isFlipped ? 'bg-cyber-yellow' : 'bg-white/20'}`} />
      </div>

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
        
        {/* Back Image Reveal On Hover or Auto-Flip */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isFlipped ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
          <img
            src={product.backImage}
            alt={`${product.name} back`}
            loading="lazy"
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

        <div className="flex gap-4">
          <button className="flex-1 py-4 bg-transparent border border-white/10 hover:border-cyber-yellow hover:text-cyber-yellow transition-all duration-300 font-brutal italic uppercase text-sm tracking-tighter">
            View Details & Reviews
          </button>
          <a href={waLink} target="_blank" rel="noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
            <button className="w-full py-4 bg-transparent border border-white/10 hover:border-cyber-yellow hover:text-cyber-yellow transition-all duration-300 font-brutal italic uppercase text-sm tracking-tighter">
              Order via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="collections" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-brutal uppercase mb-4">
               THE <span className="text-stroke text-white">GENESIS</span>
            </h2>
            <p className="max-w-lg md:max-w-md text-gray-500 uppercase text-[11px] sm:text-xs tracking-widest font-medium leading-relaxed">
              Hand-crafted graphics inspired by late-90s cyber-noir aesthetics.
              Printed on 300GSM premium heavyweight cotton.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-cyber-yellow font-mono text-[10px] sm:text-xs">AVAILABLE_ITEMS: 02</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
