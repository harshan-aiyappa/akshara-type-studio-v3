import { motion } from "framer-motion";
import { Type, Star, Edit3, History, ArrowRight, Baseline, Search, Layout, Zap } from "lucide-react";
import { useState } from "react";
import { fontData, type FontCategory } from "../lib/fonts";

const categories: { icon: React.ElementType; label: FontCategory | "All" }[] = [
  { icon: Type,     label: "All"         },
  { icon: Baseline, label: "Serif"       },
  { icon: Layout,   label: "Sans"        },
  { icon: Star,     label: "Display"     },
  { icon: Edit3,    label: "Calligraphy" },
  { icon: History,  label: "Heritage"    },
  { icon: Zap,      label: "Variable"    },
];

export default function FontsPage({ onSelectFont }: { onSelectFont: () => void }) {
  const [activeCategory, setActiveCategory] = useState<FontCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "year" | "styles">("name");

  const filteredFonts = fontData
    .filter(font => {
      const matchCat = activeCategory === "All" || font.category === activeCategory;
      const matchSearch = font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          font.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "year") return b.year.localeCompare(a.year);
      if (sortBy === "styles") {
        const aS = typeof a.styles === "number" ? a.styles : 999;
        const bS = typeof b.styles === "number" ? b.styles : 999;
        return bS - aS;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      {/* ─── Filter Sidebar ─── */}
      <aside
        className="fixed left-0 top-0 pt-28 h-full w-72 lg:w-80 hidden lg:flex flex-col gap-2 z-40"
        style={{ background: "var(--bg-card)", borderRight: "1px solid var(--border)" }}
      >
        <div className="px-8 mb-8">
          <h2 className="text-xl font-black font-headline tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Filter Specimen
          </h2>
          {/* Search */}
          <div className="relative group mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors" style={{ color: "var(--text-faint)" }} />
            <input
              type="text"
              placeholder="Search typefaces..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs font-body outline-none transition-all"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          {/* Sort */}
          <div className="mb-8">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] mb-3 font-headline" style={{ color: "var(--text-faint)" }}>Sort By</p>
            <div className="flex gap-2 flex-wrap">
              {(["name", "year", "styles"] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider font-headline transition-all"
                  style={{
                    background: sortBy === s ? "var(--brand-dark)" : "var(--bg)",
                    color: sortBy === s ? "var(--bg)" : "var(--text-muted)",
                    border: `1px solid ${sortBy === s ? "transparent" : "var(--border)"}`,
                  }}
                >
                  {s === "styles" ? "Weights" : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.5em] mb-4 font-headline" style={{ color: "var(--text-faint)" }}>
            Style · {filteredFonts.length} Results
          </p>
        </div>
        <nav className="flex flex-col gap-1 px-5 flex-1 overflow-y-auto no-scrollbar">
          {categories.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-400 group"
              style={{
                background: activeCategory === label ? "var(--brand)" : "transparent",
                color: activeCategory === label ? "#fff" : "var(--text-muted)",
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-bold font-headline tracking-tight">{label}</span>
              {activeCategory === label && (
                <span className="ml-auto text-[9px] font-black opacity-60">
                  {label === "All" ? fontData.length : fontData.filter(f => f.category === label).length}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-8 pb-10 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <button
            className="w-full py-5 rounded-2xl text-xs font-bold uppercase tracking-widest font-headline transition-all text-white"
            style={{ background: "var(--brand-dark)" }}
          >
            Commission Custom Type
          </button>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <section className="flex-1 lg:ml-72 xl:ml-80 px-5 sm:px-8 lg:px-14 py-16 pt-28 sm:pt-32">
        {/* Page Header */}
        <div className="mb-16 sm:mb-20 max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10" style={{ background: "var(--brand)" }} />
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase font-headline" style={{ color: "var(--brand)" }}>Studio Archives</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-black tracking-[-0.04em] leading-[0.85] mb-8 font-headline"
            style={{ fontSize: "clamp(2.8rem,10vw,9rem)", color: "var(--text-primary)" }}
          >
            Preserving the soul <br />
            <span className="italic font-light" style={{ color: "var(--text-muted)", opacity: 0.6 }}>of Kannada</span> <br />
            Typography.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-base sm:text-lg font-light max-w-2xl font-body leading-relaxed" style={{ color: "var(--text-muted)" }}
          >
            {fontData.length} curated Kannada typefaces — from 4th-century stone-carved heritage serifs to modern variable fonts for the digital web.
          </motion.p>
        </div>

        {/* Mobile Category Scroll */}
        <div className="flex lg:hidden gap-2 overflow-x-auto no-scrollbar mb-10 pb-2">
          {categories.map(({ label }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className="flex-shrink-0 px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest font-headline transition-all"
              style={{
                background: activeCategory === label ? "var(--brand)" : "var(--bg-card)",
                color: activeCategory === label ? "#fff" : "var(--text-muted)",
                border: `1px solid ${activeCategory === label ? "transparent" : "var(--border)"}`,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Font Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredFonts.map((font, i) => (
            <motion.div
              key={font.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onClick={onSelectFont}
              className="group relative rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-10 lg:p-14 transition-all duration-700 cursor-pointer overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Active left-bar accent */}
              <div
                className="absolute top-0 left-0 w-1.5 h-0 group-hover:h-full transition-all duration-700 ease-out rounded-full"
                style={{ background: "var(--brand)" }}
              />

              {/* Top meta row */}
              <div className="flex justify-between items-start mb-10 sm:mb-14 relative z-10">
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-black tracking-tighter font-headline group-hover:text-[#3AB549] transition-colors"
                    style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "var(--text-primary)", lineHeight: 1 }}
                  >
                    {font.name}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>
                    {typeof font.styles === "number" ? `${font.styles} Weights` : font.styles} · {font.category}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {font.tag && (
                    <span
                      className="px-3 py-1.5 rounded-full text-[8px] sm:text-[9px] font-black tracking-widest uppercase font-headline"
                      style={{ background: "var(--brand-dark)", color: "var(--bg)" }}
                    >
                      {font.tag}
                    </span>
                  )}
                  <span className="text-[9px] font-bold" style={{ color: "var(--text-faint)" }}>{font.year}</span>
                </div>
              </div>

              {/* Large Glyph */}
              <div
                className="font-kannada font-black leading-none mb-10 sm:mb-14 transition-all duration-1000 ease-out group-hover:scale-[1.04] group-hover:-rotate-2 origin-left"
                style={{
                  fontSize: "clamp(7rem,18vw,13rem)",
                  color: "var(--text-primary)",
                  opacity: 0.85,
                }}
              >
                {font.char}
              </div>

              {/* Bottom row */}
              <div
                className="flex justify-between items-end pt-6 sm:pt-8 relative z-10"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div>
                  <p className="text-xs sm:text-sm font-light leading-relaxed font-body max-w-[28ch]" style={{ color: "var(--text-muted)" }}>
                    {font.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {font.usage.slice(0, 3).map(u => (
                      <span key={u} className="px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider font-headline"
                        style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-faint)" }}>
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    color: "var(--text-primary)",
                  }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Promo Block */}
        <div className="mt-24 sm:mt-40 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }}
            className="md:col-span-2 rounded-[3rem] sm:rounded-[4rem] p-12 sm:p-20 text-white flex flex-col justify-end relative overflow-hidden group"
            style={{ background: "var(--brand-dark)", minHeight: "420px" }}
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
              <span className="font-kannada" style={{ fontSize: "clamp(15rem,30vw,35rem)" }}>ಅ</span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] mb-6 font-headline" style={{ color: "#3AB549" }}>Variable Archive</span>
            <h2 className="font-black tracking-tighter leading-[0.85] mb-8 font-headline" style={{ fontSize: "clamp(2rem,7vw,6rem)" }}>
              The Evolution of <br /><span className="italic font-light opacity-40">Kannada Script.</span>
            </h2>
            <p className="text-white/40 max-w-xl mb-10 font-light leading-relaxed font-body text-sm sm:text-base">
              Infinite weights in a single file. Heritage reimagined for fluid screens.
            </p>
            <div className="flex items-center gap-5 cursor-pointer group/btn">
              <div className="w-12 h-[2px] group-hover/btn:w-20 transition-all duration-500" style={{ background: "#3AB549" }}></div>
              <span className="font-bold text-[10px] uppercase tracking-[0.3em] font-headline" style={{ color: "#3AB549" }}>Explore Variable Tech</span>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }}
            className="rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-16 flex flex-col group transition-all duration-700"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mb-10 sm:mb-16 transform group-hover:rotate-[10deg] transition-transform duration-500"
              style={{ background: "var(--brand-dark)" }}
            >
              <History className="text-[#3AB549] w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>
              Palm-Leaf Records
            </h3>
            <p className="text-sm font-light leading-relaxed mb-auto font-body" style={{ color: "var(--text-muted)" }}>
              Access our scanned manuscripts that serve as the blueprint for our digital foundry.
            </p>
            <button
              className="mt-10 sm:mt-16 py-5 font-bold rounded-2xl hover:opacity-90 transition-all text-xs uppercase tracking-widest font-headline"
              style={{ border: "2px solid var(--text-primary)", color: "var(--text-primary)" }}
            >
              Browse Archive
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
