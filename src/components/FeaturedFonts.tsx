import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { fontData } from "../lib/fonts";

// Pick the featured gallery set — real available fonts first
const galleryFonts = [
  fontData.find(f => f.id === 2)!,  // Bengaluru — dark hero
  fontData.find(f => f.id === 1)!,  // Bandipura
  fontData.find(f => f.id === 3)!,  // Chikkamagaluru
  fontData.find(f => f.id === 10)!, // Tunga Variable — accent
  fontData.find(f => f.id === 4)!,  // Kadamba Display
];

const cardConfig = [
  { span: "sm:col-span-2 lg:col-span-2 lg:row-span-2", dark: true,   accent: false },
  { span: "lg:col-span-1 lg:row-span-1",               dark: false,  accent: false },
  { span: "lg:col-span-1 lg:row-span-1",               dark: false,  accent: false },
  { span: "sm:col-span-2 lg:col-span-2 lg:row-span-1", dark: false,  accent: true  },
  { span: "lg:col-span-1 lg:row-span-1",               dark: false,  accent: false },
];

interface FeaturedFontsProps {
  onSelectFont?: (slug: string) => void;
}

export default function FeaturedFonts({ onSelectFont }: FeaturedFontsProps) {
  return (
    <section className="py-24 md:py-40" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 sm:mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="h-[2px] w-10" style={{ background: "var(--brand)" }} />
              <span className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase font-headline" style={{ color: "var(--brand)" }}>
                The Collection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black tracking-tighter leading-[0.85] font-headline"
              style={{ fontSize: "clamp(2.5rem,8vw,6rem)", color: "var(--text-primary)" }}
            >
              Featured <br />
              <span className="italic font-light" style={{ color: "var(--text-muted)" }}>Typefaces.</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:flex items-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest font-headline transition-all"
            style={{ color: "var(--text-muted)" }}
          >
            View Full Archive
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" style={{ color: "var(--brand)" }} />
          </motion.button>
        </div>

        {/* Bento Gallery Grid — 1col mobile, 2col tablet, 3col lg+ with fixed bento height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 sm:gap-5 lg:h-[1100px]">
          {galleryFonts.map((font, i) => {
            const cfg = cardConfig[i];
            return (
              <motion.div
                key={font.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => font.isReal && onSelectFont?.(font.slug)}
                className={`${cfg.span} rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group transition-all duration-700 ${font.isReal ? "cursor-pointer" : "cursor-default"}`}
                style={{
                  background: cfg.accent
                    ? "var(--brand)"
                    : cfg.dark
                    ? "var(--brand-dark)"
                    : "var(--bg-card)",
                  border: cfg.dark || cfg.accent ? "none" : "1px solid var(--border)",
                  minHeight: "260px",
                }}
              >
                {/* Watermark Glyph */}
                <div
                  className="absolute bottom-0 right-0 font-kannada font-black leading-none select-none pointer-events-none group-hover:scale-110 transition-all duration-1000 ease-out"
                  style={{
                    fontSize: "clamp(8rem,20vw,20rem)",
                    opacity: cfg.dark || cfg.accent ? 0.06 : 0.04,
                    color: cfg.dark || cfg.accent ? "#fff" : "var(--text-primary)",
                    transformOrigin: "bottom right",
                    paddingRight: "1.5rem",
                    paddingBottom: "1rem",
                  }}
                >
                  {font.char}
                </div>

                {/* Top Row */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex flex-col gap-2">
                    {font.tag && (
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-black tracking-widest uppercase font-headline w-max"
                        style={{
                          background: cfg.accent || cfg.dark ? "rgba(255,255,255,0.15)" : "var(--bg)",
                          color: cfg.accent ? "#fff" : cfg.dark ? "#3AB549" : "var(--brand)",
                          border: `1px solid ${cfg.accent || cfg.dark ? "rgba(255,255,255,0.2)" : "var(--border)"}`,
                        }}
                      >
                        {font.tag}
                      </span>
                    )}
                    <span
                      className="text-[9px] sm:text-[10px] font-black tracking-[0.35em] uppercase font-headline"
                      style={{ color: cfg.dark || cfg.accent ? "rgba(255,255,255,0.3)" : "var(--text-faint)" }}
                    >
                      {font.category} · {font.year}
                    </span>
                  </div>
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45"
                    style={{
                      background: cfg.dark || cfg.accent ? "rgba(255,255,255,0.1)" : "var(--bg)",
                      border: "1px solid var(--border)",
                      color: cfg.dark || cfg.accent ? "#fff" : "var(--text-primary)",
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <h3
                    className="font-black tracking-tighter font-headline"
                    style={{
                      fontSize: cfg.span.includes("row-span-2")
                        ? "clamp(2rem,5vw,4rem)"
                        : "clamp(1.5rem,3.5vw,2.25rem)",
                      color: cfg.dark || cfg.accent ? "#fff" : "var(--text-primary)",
                      lineHeight: 0.9,
                    }}
                  >
                    {font.name}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-light leading-relaxed font-body"
                    style={{
                      color: cfg.dark || cfg.accent ? "rgba(255,255,255,0.42)" : "var(--text-muted)",
                      maxWidth: "26ch",
                    }}
                  >
                    {font.desc}
                  </p>
                  <div
                    className="flex items-center justify-between pt-3 sm:pt-4"
                    style={{ borderTop: `1px solid ${cfg.dark || cfg.accent ? "rgba(255,255,255,0.08)" : "var(--border)"}` }}
                  >
                    <span
                      className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest font-headline"
                      style={{ color: cfg.dark || cfg.accent ? "rgba(255,255,255,0.3)" : "var(--text-faint)" }}
                    >
                      {typeof font.styles === "number" ? `${font.styles} Weights` : font.styles}
                    </span>
                    <span
                      className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest font-headline group-hover:underline underline-offset-4"
                      style={{ color: cfg.accent ? "#fff" : cfg.dark ? "#3AB549" : "var(--brand)" }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center sm:hidden">
          <button
            className="flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-widest font-headline"
            style={{ background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            View Full Archive <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
