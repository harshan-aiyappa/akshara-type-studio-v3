import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Flame, Gem, History } from "lucide-react";

export default function HeritageSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft  = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xRight = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 lg:py-60 overflow-hidden relative" style={{ background: "var(--bg)" }}>
      {/* Kinetic Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.025]">
        <motion.div style={{ x: xLeft, fontSize: "clamp(6rem,18vw,22rem)", color: "var(--text-primary)" }} className="font-kannada font-black whitespace-nowrap">
          ಕನ್ನಡ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆ ವಿಕಾಸ ಪಥ
        </motion.div>
        <motion.div style={{ x: xRight, fontSize: "clamp(6rem,18vw,22rem)", color: "var(--text-primary)" }} className="font-kannada font-black whitespace-nowrap text-right mt-8">
          ಶಾಸನಗಳ ಸಂಸ್ಕೃತಿ ಪರಂಪರೆ ವೈಭವ
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">

          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[3rem] md:rounded-[4rem] relative overflow-hidden flex items-center justify-center group"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="absolute bottom-0 right-0 font-kannada font-black leading-none opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000 select-none"
                style={{ fontSize: "clamp(12rem,35vw,36rem)", color: "var(--text-primary)" }}>
                ಕ
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full absolute"
                style={{ border: "1px dashed var(--border)" }}
              />
              <div
                className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center shadow-2xl"
                style={{ background: "var(--brand-dark)" }}
              >
                <History className="w-8 h-8 sm:w-12 sm:h-12" style={{ color: "var(--brand)" }} />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="space-y-10 sm:space-y-14 order-1 lg:order-2">
            <div>
              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="h-[2px] w-10 sm:w-12" style={{ background: "var(--brand)" }} />
                <span className="font-black tracking-[0.5em] uppercase text-[9px] sm:text-[10px] font-headline" style={{ color: "var(--brand)" }}>The Blueprint</span>
              </motion.div>
              <h2
                className="font-black tracking-tighter leading-[0.85] mb-8 sm:mb-12 font-headline"
                style={{ fontSize: "clamp(2.5rem,8vw,7rem)", color: "var(--text-primary)" }}
              >
                Heritage in <br />
                <span className="italic font-light" style={{ color: "var(--brand)", opacity: 0.6 }}>Every Pixel.</span>
              </h2>
              <p className="text-base sm:text-xl leading-relaxed font-light font-body max-w-lg" style={{ color: "var(--text-muted)" }}>
                Our studio bridges the gap between ancient stone inscriptions and modern mobile screens. Every glyph is hand-refined to ensure the rhythmic balance of Kannada remains intact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-10 sm:pt-14" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { icon: Flame, title: "Epigraphical Soul", desc: "Sourcing weights from 4th-century Kadamba Vishnuvardhana inscriptions." },
                { icon: Gem,   title: "Digital Precision",  desc: "Optimized for retina displays while retaining the gravity of stone." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="space-y-4 group">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-colors"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-headline" style={{ color: "var(--text-primary)" }}>{title}</h4>
                  <p className="text-sm font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
