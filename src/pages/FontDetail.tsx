import { motion } from "framer-motion";
import { ArrowLeft, Download, ShoppingBag, Terminal, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function FontDetailPage({ onBack }: { onBack: () => void }) {
  const [previewText, setPreviewText] = useState("ಕನ್ನಡಿಗರ ಹೆಮ್ಮೆಯ ಅಕ್ಷರ ವಿನ್ಯಾಸ ಸ್ಟುಡಿಯೋ - ಅಕ್ಷರ.");
  const [weight, setWeight] = useState(400);
  const [fontSize, setFontSize] = useState(72);

  return (
    <div className="bg-[#EAFDE7] text-[#0A382F] min-h-screen selection:bg-[#EAFDE7]">
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <button 
           onClick={onBack}
           className="flex items-center gap-2 text-emerald-800/60 hover:text-emerald-900 font-bold text-xs uppercase tracking-widest mb-12 hover:-translate-x-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </button>

        {/* Hero Specimen Header (AI Layout) */}
        <section className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-end relative">
          <div className="lg:col-span-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-tertiary font-headline text-[10px] tracking-[0.3em] uppercase mb-4 md:mb-6 block"
            >
              Specimen Explorer / Series 01
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(3.5rem,12vw,10rem)] font-extrabold tracking-tighter text-primary leading-[0.9] mb-6 md:mb-8"
            >
              Chikkamagaluru
            </motion.h1>
          </div>
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-light"
            >
              A high-contrast Kannada typeface designed for editorial excellence. Inspired by the flowing currents of heritage Karnataka and traditional stone inscriptions found in the Western Ghats.
            </motion.p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3 mt-6 md:mt-8">
            <span className="px-4 md:px-6 py-2 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[10px] tracking-widest uppercase italic">Variable Font</span>
            <span className="px-4 md:px-6 py-2 rounded-full border border-emerald-100 text-emerald-900/40 text-[10px] font-bold uppercase tracking-widest">12 Weights</span>
          </div>
          <div className="absolute -right-10 md:-right-20 -top-10 md:-top-20 text-[15rem] md:text-[25rem] font-kannada text-emerald-600/5 select-none pointer-events-none">ಕ</div>
        </section>

        {/* Micro-Playground Section (AI Layout) */}
        <section className="mb-20 md:mb-32">
          <div className="bg-emerald-50/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-emerald-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 md:mb-12 gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">Micro-Playground</h2>
                  <p className="text-on-surface-variant text-sm font-light">Experience the fluid rendering of Chikkamagaluru Serif in real-time.</p>
                </div>
                <div className="flex bg-white/50 backdrop-blur-xl p-1.5 rounded-full border border-emerald-100">
                  <button className="px-5 md:px-6 py-2 bg-emerald-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl">Text Mode</button>
                  <button className="px-5 md:px-6 py-2 text-emerald-900/60 hover:text-emerald-900 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">Glyph Map</button>
                </div>
              </div>
              
              <div className="bg-[#f7fdf9] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-20 min-h-[300px] md:min-h-[450px] flex flex-col justify-center shadow-lg shadow-[#0A382F]/5 border border-[#3AB549]/10 transition-all">
                <textarea 
                  className="w-full bg-transparent border-none focus:ring-0 kannada-text text-on-surface leading-tight resize-none placeholder-on-surface-variant/20 transition-all text-center outline-none"
                  style={{ fontWeight: weight, fontSize: fontSize + "px" }}
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  spellCheck="false"
                />
              </div>

              <div className="mt-8 md:mt-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Weight</span>
                  <input 
                    type="range" 
                    min="100" 
                    max="900" 
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="accent-emerald-900 flex-1 lg:w-48 h-1 bg-emerald-100 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs font-bold text-emerald-900 w-8">{weight}</span>
                </div>
                <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Size</span>
                  <input 
                    type="range" 
                    min="16" 
                    max="120" 
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="accent-emerald-900 flex-1 lg:w-48 h-1 bg-emerald-100 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs font-bold text-emerald-900 w-8">{fontSize}px</span>
                </div>
                <button className="mt-4 lg:mt-0 lg:ml-auto w-full lg:w-auto flex items-center justify-center gap-3 bg-emerald-950 text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-800 transition-all active:scale-95">
                  <Download className="w-4 h-4" /> Download Sample PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Character Waterfall (AI Layout) */}
        <section className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4 md:mb-6 tracking-tighter">Character Waterfall</h2>
              <p className="text-on-surface-variant max-w-md leading-relaxed font-light">Observing legibility across various optical sizes, from display to micro-captioning at the highest fidelity.</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-6xl lg:text-[8rem] font-bold text-emerald-100/50 leading-none select-none italic">Specimen.01</span>
            </div>
          </div>
          
          <div className="space-y-12 md:space-y-20 border-l-[1px] border-emerald-100 pl-8 md:pl-24">
            {[
              { size: "120pt", text: "ಅಕ್ಷರ ವಿನ್ಯಾಸ", sub: "Hero Display" },
              { size: "72pt", text: "ಸೃಜನಶೀಲತೆಯ ಹೊಸ ಆಯಾಮ", sub: "Headline Large" },
              { size: "48pt", text: "ಕನ್ನಡ ಲಿಪಿಯ ವೈಭವ ಮತ್ತು ಪರಂಪರೆ.", sub: "Sub-Title Bold" },
              { size: "24pt", text: "ಒಂದು ಭಾಷೆಯ ಆತ್ಮವು ಅದರ ಲಿಪಿಯಲ್ಲಿ ಅಡಗಿದೆ.", sub: "Article Title" },
              { size: "12pt", text: "ಇದು ಅಕ್ಷರ ಸ್ಟುಡಿಯೋದ ಕಾವೇರಿ ಅಕ್ಷರ ವಿನ್ಯಾಸದ ಒಂದು ಚಿಕ್ಕ ಉದಾಹರಣೆ. ಈ ವಿನ್ಯಾಸವು ಓದುಗರಿಗೆ ಸುಲಭವಾಗುವಂತೆ ಮತ್ತು ಅಂದವಾಗಿ ಕಾಣುವಂತೆ ರೂಪಿಸಲಾಗಿದೆ.", sub: "Body Copy (Regular)" },
            ].map((row, i) => {
              // Calculate responsive font sizes for the waterfall
              const ptValue = parseInt(row.size);
              const mobileSize = Math.max(16, ptValue * 0.5) + "pt";
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-700/40 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">{row.size} · {row.sub}</span>
                    <div className="h-[1px] flex-1 bg-emerald-50 group-hover:bg-emerald-200 transition-colors"></div>
                  </div>
                  <p 
                    className="font-kannada text-on-surface transition-all duration-700 group-hover:text-emerald-900 group-hover:translate-x-4 break-words" 
                    style={{ fontSize: `clamp(${mobileSize}, ${ptValue}pt, ${ptValue}pt)`, lineHeight: 1.1 }}
                  >
                    {row.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Specimen Table (Bento Style AI Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-40">
          <div className="md:col-span-2 bg-[#f7fdf9] rounded-[3rem] p-12 md:p-16 border border-[#3AB549]/10 shadow-sm hover:shadow-[#3AB549]/10 transition-all">
            <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-emerald-950">
              <Terminal className="w-6 h-6 text-emerald-500" /> Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-12 gap-x-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Archive Version</p>
                <p className="text-on-surface text-xl font-bold">v1.2.0 Build 2024</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Glyph Capacity</p>
                <p className="text-on-surface text-xl font-bold">842 Unique Characters</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Encoding Standard</p>
                <p className="text-on-surface text-xl font-bold">Unicode 15.0 Compliant</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40">Distro Formats</p>
                <p className="text-on-surface text-xl font-bold italic">OTF, WOFF2, SVG-V</p>
              </div>
              <div className="col-span-2 pt-8 border-t border-emerald-50">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40 mb-8">OpenType Features</p>
                <div className="flex flex-wrap gap-3">
                  {["Standard Ligatures", "Optical Kerning", "Oldstyle Figures", "Stylistic Alternates", "Contextual Swashes"].map((feat) => (
                    <span key={feat} className="px-5 py-2 bg-emerald-50 rounded-xl text-xs font-bold text-emerald-900/70 border border-emerald-100/50">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-16 text-white flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-8" />
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">Ready to Deploy?</h3>
              <p className="text-emerald-100/60 text-base font-light leading-relaxed mb-auto">Professional licensing available for web, print, and mobile creative workflows.</p>
            </div>
            <div className="space-y-4 mt-20 relative z-10">
              <button className="w-full py-5 bg-white text-emerald-950 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Secure License
              </button>
              <button className="w-full py-5 bg-emerald-800/50 border border-emerald-700 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all">
                Request Custom Trial
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-kannada text-white/5 group-hover:text-white/10 transition-colors duration-1000 select-none">ಅ</div>
          </div>
        </section>
      </main>
    </div>
  );
}
