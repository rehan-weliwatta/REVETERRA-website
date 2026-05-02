import { motion } from "motion/react";

export default function BrandManifesto() {
  const manifestoItems = [
    {
      title: "THE STORY",
      content: "Forged between restless ambition and street-born vision, REVETERRA emerged as a response to the ordinary where raw expression meets calculated design. It’s not just about clothing, it’s about carving identity into fabric, turning movement into meaning. We aren’t just a brand we are a signal.",
      alignment: "left"
    },
    {
      title: "THE VISION",
      content: "To blur the line between imagination and reality, shaping garments that carry identity beyond the surface. Each piece is built as a statement for those moving through evolving worlds where culture, design, and presence collide.",
      alignment: "right"
    },
    {
      title: "THE MISSION",
      content: "Exclusivity without elitism. We produce strictly limited batches, ensuring that every piece remains a rare artifact in an age of mass-production. Quality is our protocol.",
      alignment: "left"
    }
  ];

  return (
    <section id="manifesto" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-brutal italic uppercase tracking-tighter"
          >
            THE <span className="text-cyber-yellow">MANIFESTO</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {manifestoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.alignment === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${item.alignment === "left" ? "items-start" : "items-end text-right"}`}
            >
              <div className="max-w-2xl">
                <span className="text-cyber-yellow font-mono text-[10px] tracking-[0.5em] mb-4 block uppercase leading-none">
                  PHASE_{index + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-brutal italic uppercase mb-6 tracking-tighter">
                  {item.title}
                </h3>
                <div className="h-[1px] w-24 bg-white/20 mb-8" />
                <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed font-light tracking-wide">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
