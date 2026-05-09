import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  backImage: string;
  tag: string;
  reviewCount: number;
}

const PRODUCTS: Product[] = [
  {
    id: "tee-01",
    name: "MOONLIES ASTRO TEE",
    price: "Rs.3590.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/s86r2mnabwgcs9avmqu7w/1.png?rlkey=4lfjyjlfowp54r0ft3xmfni6r",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/xvrfx27wo0g6wrratcr68/2.png?rlkey=gy2m70ljkzjj58eoio8fmrrnh",
    tag: "LIMITED EDITION",
    reviewCount: 7,
  },
  {
    id: "tee-02",
    name: "RORONOA's RAGE TEE",
    price: "Rs.3990.00",
    image: "https://dl.dropboxusercontent.com/scl/fi/gywqmdjv4dn2uvez4hso3/3.png?rlkey=qbqwwlzp97ilwvy0zx6wpms1d",
    backImage: "https://dl.dropboxusercontent.com/scl/fi/il6gl0ixsmm6t1shdi1bv/4.png?rlkey=2nzreven0d7jise8qs4ly3jpq",
    tag: "STRICTLY 1/20",
    reviewCount: 9,
  },
];

const SL_REVIEWS = [
  { author: "Kavindu M.", text: "Quality eka patta. Supiriyata thiyenawa. Highly recommend!", rating: 5, date: "2 days ago" },
  { author: "Shehan D.", text: "Ade patta quality ban. Print eka ehemama thiyenawa wash kalata passe.", rating: 5, date: "1 week ago" },
  { author: "Malith S.", text: "Fast delivery, box eka hodata pack karala thibba. Material eka mara premium.", rating: 5, date: "1 week ago" },
  { author: "Tharindu P.", text: "Worth the price. Size eka perfectly fit una. Niyamai.", rating: 4, date: "2 weeks ago" },
  { author: "Nimesh F.", text: "Meka nam gindara. Thawa designs danna. Customer service eka hodai.", rating: 5, date: "3 weeks ago" },
  { author: "Dinuka R.", text: "I've bought from many local brands, but this one hits different. Sira.", rating: 5, date: "1 month ago" },
  { author: "Pasindu W.", text: "Superb quality t-shirt. Delivery was within 2 days to Kandy.", rating: 5, date: "1 month ago" },
  { author: "Ashan K.", text: "Patta. I was waiting for this drop. Didn't disappoint.", rating: 5, date: "1 month ago" },
  { author: "Lahiru T.", text: "Fabric eka godak loku gathiyak thiyenawa. Ado sirawata patta.", rating: 5, date: "2 months ago" },
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

  useEffect(() => {
    setReviews(getReviewsForProduct(product.reviewCount, product.id));
  }, [product]);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

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
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl h-full max-h-[85vh] flex flex-col md:flex-row shadow-2xl relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-cyber-yellow hover:text-black transition-colors rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="group relative w-full md:w-1/2 h-[30vh] md:h-[85vh] bg-[#e6e6e6] overflow-hidden shrink-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain md:p-8 transition-transform duration-700" 
          />
          
          {/* Back Image Reveal On Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#e6e6e6]">
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

        {/* Reviews Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col h-[55vh] md:h-full overflow-y-auto">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="text-3xl font-brutal leading-none">4.9</div>
              <div className="flex text-cyber-yellow mt-1">
                <Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" /><Star className="w-4 h-4 fill-cyber-yellow" />
              </div>
            </div>
            <div>
              <div className="font-brutal uppercase text-lg">CUSTOMER REVIEWS</div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Based on {product.reviewCount} verified purchases</div>
            </div>
          </div>

          <div className="space-y-6 flex-1">
            {displayedReviews.map((review, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-[#111] border border-white/5 p-5"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="font-brutal uppercase text-sm text-cyber-yellow">{review.author}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-3 h-3 ${idx < review.rating ? 'text-cyber-yellow fill-cyber-yellow' : 'text-white/20'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 font-sans leading-relaxed">"{review.text}"</p>
                <div className="font-mono text-[9px] text-white/30 mt-3">{review.date}</div>
              </motion.div>
            ))}
          </div>

          {reviews.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-8 w-full py-4 border border-white/20 hover:border-cyber-yellow font-brutal uppercase tracking-widest text-sm hover:text-cyber-yellow transition-colors"
            >
              {showAll ? "SHOW LESS" : `VIEW ALL ${product.reviewCount} REVIEWS`}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) {
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

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
        
        {/* Back Image Reveal On Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
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
