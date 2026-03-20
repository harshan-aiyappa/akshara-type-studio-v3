import { motion } from "framer-motion";
import { Globe, Camera, Zap } from "lucide-react";
import showcaseImg from "../assets/showcase.png";

export default function StudioLife() {
  return (
    <section className="py-24 md:py-40" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          <div>
            <span className="font-black tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-headline block mb-3 sm:mb-4" style={{ color: "var(--brand)" }}>
              Behind the Glyphs
            </span>
            <h2
              className="font-black tracking-tighter font-headline"
              style={{ fontSize: "clamp(2.2rem,7vw,5.5rem)", color: "var(--text-primary)" }}
            >
              Studio Life
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-light max-w-xs sm:max-w-xs font-body hidden sm:block sm:text-right" style={{ color: "var(--text-muted)" }}>
            A glimpse into the daily rhythm of an independent Kannada foundry.
          </p>
        </motion.div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Large Feature — full width on mobile, 2-col/2-row on lg */}
          <motion.div
            whileHover={{ y: -8 }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden relative group shadow-2xl"
            style={{ minHeight: "300px" }}
          >
            <img
              className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
              src={showcaseImg}
              alt="The Craft"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16" style={{ background: "linear-gradient(to top, #0A382F 0%, transparent 60%)" }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
                <Zap className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-white font-black font-headline tracking-tighter" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)" }}>The Living Script</h4>
              <p className="text-white/80 mt-3 text-sm sm:text-base font-light font-body">Hand-refining each curve for the retinal digital age.</p>
            </div>
          </motion.div>

          {/* Variable Tech */}
          <motion.div
            whileHover={{ y: -8 }}
            className="sm:col-span-2 lg:col-span-2 rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden group"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", minHeight: "200px" }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
              <Globe className="w-40 h-40 sm:w-56 sm:h-56" style={{ color: "var(--text-primary)" }} />
            </div>
            <div className="relative z-10">
              <div className="w-1 h-10 sm:h-12 mb-6 sm:mb-8 group-hover:h-14 sm:group-hover:h-16 transition-all" style={{ background: "var(--brand)" }} />
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>
                Variable Tech First
              </h4>
              <p className="text-sm md:text-base font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>
                Complete control over weight and optical sizing. Exports to WOFF2/VF standards for a fluid, responsive web.
              </p>
            </div>
          </motion.div>

          {/* Field Trip */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group"
            style={{ background: "var(--brand-dark)", minHeight: "200px" }}
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white text-xl sm:text-2xl font-black font-headline tracking-tighter mb-1">Field Trip</h4>
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest font-headline">Badami Inscriptions</p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{ background: "radial-gradient(circle at center, rgba(58,181,73,0.08) 0%, transparent 70%)" }} />
          </motion.div>

          {/* Glyph Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden relative group flex items-center justify-center p-8 sm:p-12"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", minHeight: "200px" }}
          >
            <div
              className="font-black font-kannada transform group-hover:rotate-[12deg] transition-all duration-700 opacity-10 group-hover:opacity-80 group-hover:scale-125"
              style={{ fontSize: "clamp(5rem,15vw,9rem)", color: "var(--text-primary)" }}
            >
              ಕ
            </div>
            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-black tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-headline" style={{ color: "var(--text-primary)" }}>
                Heritage Foundation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
