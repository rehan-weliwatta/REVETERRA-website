import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare } from "lucide-react";

// Fake initial reviews
const INITIAL_REVIEWS = [
  { id: 1, author: "RYUZAKI_99", text: "Material is insane. Fits like a glove. 10/10 would cop again.", rating: 5, time: "2 mins ago" },
  { id: 2, author: "NEON_SAMURAI", text: "Drop 01 is legendary. The silhouette is exactly what I've been looking for.", rating: 5, time: "15 mins ago" },
  { id: 3, author: "CYBER_PUNK_X", text: "Fast shipping. Box came in perfect condition. The tee is heavy weight and premium.", rating: 5, time: "1 hour ago" },
  { id: 4, author: "GHOST_IN_SHELL", text: "Pricey but worth it. The texture is crazy good.", rating: 4, time: "3 hours ago" },
  { id: 5, author: "AKIRA_BOY", text: "Sizing is a bit oversized as stated, perfect boxy fit.", rating: 5, time: "5 hours ago" },
  { id: 6, author: "TOKYO_DRIFTER", text: "Need more colorways ASAP. The black is pure fire.", rating: 5, time: "1 day ago" },
  { id: 7, author: "MECHA_PILOT", text: "Stitching is flawless. You can tell they put time into this.", rating: 5, time: "1 day ago" },
];

export default function CustomerReviews() {
  const [expanded, setExpanded] = useState(false);
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  // Fake "live" updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newReview = {
        id: Date.now(),
        author: `USER_${Math.floor(Math.random() * 10000)}`,
        text: ["Just copped!", "Restock when??", "Absolutely mental quality.", "Best drop this year."][Math.floor(Math.random() * 4)],
        rating: 5,
        time: "Just now"
      };
      setReviews(prev => [newReview, ...prev]);
    }, 15000); // Add a new review every 15 seconds
    return () => clearInterval(interval);
  }, []);

  const displayedReviews = expanded ? reviews : reviews.slice(0, 5);

  return (
    <section id="reviews" className="relative py-24 z-10 bg-deep-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-l-4 border-cyber-yellow pl-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase font-bold">Live Feed</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-brutal uppercase leading-none">
              COMMUNITY_ <br /> TRANSMISSIONS
            </h2>
          </motion.div>
          <div className="mt-6 md:mt-0 flex items-center gap-4 font-mono text-sm opacity-50">
            <MessageSquare className="w-4 h-4" />
            <span>{reviews.length} VERIFIED REVIEWS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="bg-[#111] border border-white/5 p-6 hover:border-cyber-yellow/50 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-brutal italic text-xl group-hover:text-cyber-yellow transition-colors">{review.author}</h4>
                    <span className="font-mono text-[10px] opacity-40">{review.time}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-3 h-3 ${idx < review.rating ? 'text-cyber-yellow fill-cyber-yellow' : 'text-white/20'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="border border-white/20 hover:border-cyber-yellow px-8 py-4 font-brutal uppercase tracking-widest text-sm hover:text-cyber-yellow transition-colors"
          >
            {expanded ? "COLLAPSE_FEED" : "LOAD_MORE_TRANSMISSIONS"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
