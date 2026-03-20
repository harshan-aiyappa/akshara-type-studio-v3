import { motion } from "framer-motion";
import { Download, CheckCircle2, Languages, Mic, FileText, Keyboard, ArrowRight } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="bg-[#EAFDE7] text-[#0A382F] min-h-screen selection:bg-[#EAFDE7]">
      <main className="pt-32 lg:ml-0"> {/* Adjusted for full width layout per AI tools design */}
        {/* Main Content (Canvas) */}
        <section className="max-w-7xl mx-auto px-8 py-20 pb-40">
          {/* Hero Header */}
          <div className="mb-24 max-w-4xl text-center mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-[10px] block mb-6"
            >
              Type Lab (v4.0)
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-bold tracking-tighter text-emerald-950 mb-10 leading-[0.9]"
            >
              Digital <span className="italic font-light text-emerald-900/40">Alchemies.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mx-auto font-light"
            >
              A suite of specialized utilities designed to bridge the gap between traditional Kannada input and modern digital workflows.
            </motion.p>
          </div>

          {/* Tools Grid (Bento Style AI Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Tool: English to Kannada */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="lg:col-span-2 bg-emerald-950 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
            >
              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 select-none pointer-events-none">
                <Languages className="w-48 h-48 md:w-64 md:h-64 text-white" />
              </div>
              <div>
                <span className="inline-flex px-4 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 italic">Most Popular</span>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">English to <br/>Kannada Transliteration.</h3>
                <p className="text-emerald-50/60 text-base md:text-lg max-w-md font-light leading-relaxed mb-8 md:mb-10">Type phonetically in English and see your thoughts bloom into perfect Unicode Kannada in real-time.</p>
              </div>
              <button className="flex items-center gap-3 w-max px-8 md:px-10 py-4 md:py-5 bg-white text-emerald-950 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-emerald-50 transition-colors">
                Launch Type Lab <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Smaller Tool 1: Speech */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-[#f7fdf9] rounded-[2.5rem] md:rounded-[4rem] p-10 border border-[#3AB549]/10 shadow-sm flex flex-col group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 md:10 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                <Mic className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Speech to Text</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-auto">Narrate your creative thoughts. Our AI-driven engine converts your spoken Kannada into ready-to-use digital text.</p>
              <button className="mt-10 py-4 bg-emerald-50 text-emerald-900 font-bold rounded-xl text-xs uppercase tracking-[0.2em]">Open Mic</button>
            </motion.div>

            {/* Smaller Tool 2: OCR */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-emerald-50 rounded-[2.5rem] md:rounded-[4rem] p-10 border border-emerald-100 flex flex-col group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-8 md:10 group-hover:bg-emerald-950 group-hover:text-white transition-colors duration-500 shadow-sm">
                <FileText className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Image to Text (OCR)</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-auto">Extract text from scanned heritage documents or modern images with 99.8% Unicode accuracy.</p>
              <button className="mt-10 py-4 bg-white text-emerald-950 font-bold rounded-xl text-xs uppercase tracking-[0.2em]">Upload Document</button>
            </motion.div>

            {/* Large Feature: Keyboard Layout (AI Style) */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="lg:col-span-2 bg-surface rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 border border-emerald-200 relative overflow-hidden flex flex-col xl:flex-row gap-12 items-center"
            >
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-2">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                     <Keyboard className="text-emerald-900 w-6 h-6" />
                   </div>
                   <span className="text-xs font-bold text-emerald-900/60 uppercase tracking-widest leading-none pt-1">Mac OS Compatible</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-950 tracking-tighter leading-tight">Akshara Siri <br/><span className="text-emerald-900/30">ಕನ್ನಡ Layout.</span></h3>
                <p className="text-on-surface-variant font-light leading-relaxed">A professional QWERTY-based Unicode layout for flawless typing across all creative applications.</p>
                <button className="flex items-center gap-3 px-10 py-5 bg-emerald-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl">
                  <Download className="w-5 h-5" /> Download (Mac OS)
                </button>
              </div>

              <div className="w-full md:w-80 bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-emerald-100">
                <h4 className="font-bold text-emerald-950 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Install Guide
                </h4>
                <div className="space-y-6">
                  {["Unzip archive", "Drag to Layouts folder", "Activate in Settings"].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-bold flex items-center justify-center pt-px">0{idx + 1}</span>
                      <span className="text-sm font-medium text-emerald-900/70">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
