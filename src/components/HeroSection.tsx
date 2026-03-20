import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function HeroSection({ onNavigate }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const glyphOpacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(58,181,73,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(10,56,47,0.04) 0%, transparent 60%)" }}
      />

      {/* Background Kinetic Glyph — contained in overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none select-none">
        <motion.div
          style={{ y: yLayer1, opacity: glyphOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-[40vw] font-kannada font-black leading-none" style={{ color: "var(--text-primary)", opacity: 0.04 }}>ಅ</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8 sm:mb-10"
          >
            <div className="h-[2px] w-10 sm:w-14" style={{ background: "var(--brand)" }} />
            <span className="font-black tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-headline" style={{ color: "var(--brand)" }}>
              Independent Type Foundry
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] leading-[0.85] mb-10 sm:mb-14 md:mb-16 font-headline"
            style={{
              fontSize: "clamp(3.2rem, 14vw, 13rem)",
              color: "var(--text-primary)",
            }}
          >
            Designing <br />
            <span className="italic font-light mix-blend-multiply" style={{ color: "var(--brand)", opacity: 0.7 }}>Kannada</span> <br />
            Form.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            style={{ opacity: opacityText, color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-xl md:text-2xl font-light leading-relaxed mb-12 sm:mb-16 md:mb-20 pl-4 sm:pl-8 max-w-xs sm:max-w-md md:max-w-2xl font-body"
          >
            Elevating the script of Karnataka through high-end editorial specimens and digital-first font families. Crafted for the modern web with centuries of stone-carved heritage.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 items-start sm:items-center w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate("fonts")}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-headline text-white flex items-center justify-center gap-4 group transition-all"
              style={{ background: "var(--brand-dark)", boxShadow: "0 20px 50px -15px rgba(10,56,47,0.35)" }}
            >
              The Collection
              <div className="w-5 sm:w-6 h-[1px] bg-white group-hover:w-8 sm:group-hover:w-10 transition-all" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate("about")}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-headline transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            >
              Studio Story
            </motion.button>
          </div>
        </div>
      </div>

      {/* Float Card — visible on large screens only */}
      <motion.div
        style={{ y: yLayer2 }}
        className="absolute bottom-16 right-6 xl:right-24 hidden xl:block z-20 group"
      >
        <div className="relative">
          <div className="absolute inset-0 blur-[80px] opacity-10 rounded-full" style={{ background: "var(--brand)" }} />
          <div
            className="w-56 h-72 xl:w-72 xl:h-88 rounded-[3rem] p-8 xl:p-12 flex flex-col justify-between shadow-2xl"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", backdropFilter: "blur(24px)" }}
          >
            <span className="text-7xl xl:text-9xl font-kannada font-black" style={{ color: "var(--text-primary)" }}>ಕ</span>
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] font-bold mb-2 font-headline" style={{ color: "var(--text-faint)" }}>Foundry Proof</p>
              <h4 className="text-lg xl:text-2xl font-bold tracking-tighter font-headline" style={{ color: "var(--text-primary)" }}>Bandipura Family</h4>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <div className="w-[1px] h-10 sm:h-14" style={{ background: `linear-gradient(to bottom, var(--brand), transparent)` }} />
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase font-headline" style={{ color: "var(--text-faint)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
