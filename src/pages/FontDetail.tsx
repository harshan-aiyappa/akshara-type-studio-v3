import { motion } from "framer-motion";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { getFontBySlug, type FontVariant } from "../lib/fonts";

interface Props {
  fontSlug: string;
  onBack: () => void;
}

export default function FontDetailPage({ fontSlug, onBack }: Props) {
  const font = getFontBySlug(fontSlug);
  const [previewText, setPreviewText] = useState(font?.previewText ?? "ಕನ್ನಡ ಲಿಪಿ.");
  const [fontSize, setFontSize] = useState(80);
  const [activeVariant, setActiveVariant] = useState<FontVariant | null>(
    font?.variants?.[0] ?? null
  );
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (font?.variants?.[0]) setActiveVariant(font.variants[0]);
    setShowcaseIndex(0);
    setPreviewText(font?.previewText ?? "ಕನ್ನಡ ಲಿಪಿ.");
  }, [fontSlug, font]);

  useEffect(() => {
    if (!font?.showcaseImages || font.showcaseImages.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setShowcaseIndex(prev => (prev + 1) % (font.showcaseImages?.length ?? 1));
    }, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [font]);

  if (!font) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}>
        <div className="text-center">
          <p className="text-2xl font-black font-headline mb-4" style={{ color: "var(--text-primary)" }}>Font not found</p>
          <button onClick={onBack} className="flex items-center gap-2 mx-auto font-bold text-xs uppercase tracking-widest"
            style={{ color: "var(--brand)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Archive
          </button>
        </div>
      </div>
    );
  }

  const images = font.showcaseImages ?? [];

  const prevImage = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setShowcaseIndex(prev => (prev - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setShowcaseIndex(prev => (prev + 1) % images.length);
  };

  const previewStyle: React.CSSProperties = activeVariant
    ? {
        fontFamily: `"${activeVariant.cssFamily}", "Noto Sans Kannada", sans-serif`,
        fontWeight: activeVariant.weight,
        fontSize: `${fontSize}px`,
        lineHeight: 1.2,
      }
    : { fontSize: `${fontSize}px`, lineHeight: 1.2 };

  const waterfallSizes = [
    { pt: 96, label: "Hero Display",      text: "ಅಕ್ಷರ ವಿನ್ಯಾಸ" },
    { pt: 60, label: "Headline Large",    text: "ಕನ್ನಡ ಲಿಪಿಯ ವೈಭವ" },
    { pt: 36, label: "Sub-Title",         text: "ಬರಿಗೆ ಮತ್ತು ಮಾತು" },
    { pt: 20, label: "Body Display",      text: "ಒಂದು ಭಾಷೆಯ ಆತ್ಮ" },
    { pt: 13, label: "Caption",           text: "ಕರ್ನಾಟಕದ ಐತಿಹ್ಯ ಮತ್ತು ಆಧುನಿಕ ಅಕ್ಷರ ವಿನ್ಯಾಸ." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest mb-12 hover:-translate-x-2 transition-all"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </button>

        {/* ─── Hero Header ─── */}
        <section className="mb-16 md:mb-24 relative overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.3em] uppercase mb-4 block font-headline font-bold"
            style={{ color: "var(--brand)" }}
          >
            Specimen Explorer · {font.year}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-extrabold tracking-tighter leading-[0.9] font-headline mb-8 break-words"
            style={{ fontSize: "clamp(2.5rem,8vw,8rem)", color: "var(--text-primary)", maxWidth: "100%" }}
          >
            {font.name}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase font-headline"
              style={{ background: "var(--brand)", color: "#fff" }}>
              {font.tag ?? font.status}
            </span>
            <span className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest font-headline"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              {typeof font.styles === "number" ? `${font.styles} Style${font.styles !== 1 ? "s" : ""}` : font.styles}
            </span>
          </div>

          <p className="text-base sm:text-lg font-light max-w-2xl font-body leading-relaxed"
            style={{ color: "var(--text-muted)" }}>
            {font.desc}
          </p>
        </section>

        {/* ─── Showcase Gallery ─── */}
        {images.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-headline" style={{ color: "var(--brand)" }}>
                Specimen Gallery
              </span>
              {images.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevImage}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)" }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-bold font-headline" style={{ color: "var(--text-faint)" }}>
                    {showcaseIndex + 1} / {images.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)" }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "16/7", background: "var(--bg-card)" }}>
              {images.map((src, idx) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`${font.name} specimen ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === showcaseIndex ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => { if (intervalRef.current) clearInterval(intervalRef.current); setShowcaseIndex(idx); }}
                    className="flex-shrink-0 rounded-xl overflow-hidden transition-all"
                    style={{
                      width: 72,
                      height: 44,
                      border: idx === showcaseIndex ? "2px solid var(--brand)" : "2px solid transparent",
                      opacity: idx === showcaseIndex ? 1 : 0.45,
                    }}
                  >
                    <img src={src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ─── Type Tester / Micro-Playground ─── */}
        <section className="mb-20 md:mb-32">
          <div
            className="rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 md:mb-12 gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Type Playground
                </h2>
                <p className="text-sm font-light font-body" style={{ color: "var(--text-muted)" }}>
                  Edit the text below to test {font.name} in real-time.
                </p>
              </div>

              {/* Variant Selector */}
              {font.variants && font.variants.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {font.variants.map(v => (
                    <button
                      key={v.label}
                      onClick={() => setActiveVariant(v)}
                      className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider font-headline transition-all"
                      style={{
                        background: activeVariant?.label === v.label ? "var(--brand-dark)" : "var(--bg)",
                        color: activeVariant?.label === v.label ? "#fff" : "var(--text-muted)",
                        border: `1px solid ${activeVariant?.label === v.label ? "transparent" : "var(--border)"}`,
                      }}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Preview Area */}
            <div
              className="rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 min-h-[280px] md:min-h-[380px] flex flex-col justify-center mb-8 md:mb-12"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
            >
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 resize-none outline-none text-center"
                style={{ ...previewStyle, color: "var(--text-primary)" }}
                value={previewText}
                onChange={e => setPreviewText(e.target.value)}
                spellCheck={false}
                rows={3}
                placeholder="Type Kannada here..."
              />
            </div>

            {/* Controls + Download */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline flex-shrink-0" style={{ color: "var(--text-faint)" }}>Size</span>
                <input
                  type="range"
                  min="20"
                  max="160"
                  value={fontSize}
                  onChange={e => setFontSize(parseInt(e.target.value))}
                  className="flex-1 lg:w-56 h-1 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "var(--brand)", background: "var(--border)" }}
                />
                <span className="text-xs font-bold w-12 flex-shrink-0 font-headline" style={{ color: "var(--text-primary)" }}>{fontSize}px</span>
              </div>

              {font.downloadUrl && (
                <a
                  href={font.downloadUrl}
                  download
                  className="mt-2 lg:mt-0 lg:ml-auto flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg hover:opacity-90 transition-all active:scale-95 text-white"
                  style={{ background: "var(--brand-dark)" }}
                >
                  <Download className="w-4 h-4" /> Download Free Font
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ─── Character Waterfall ─── */}
        <section className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div>
              <h2 className="font-extrabold tracking-tighter mb-4 font-headline" style={{ fontSize: "clamp(2rem,6vw,5rem)", color: "var(--text-primary)" }}>
                Character Waterfall
              </h2>
              <p className="font-light leading-relaxed max-w-md font-body" style={{ color: "var(--text-muted)" }}>
                Legibility observed across optical sizes — from display to caption.
              </p>
            </div>
            <span className="text-6xl lg:text-[7rem] font-bold leading-none select-none italic hidden md:block font-headline"
              style={{ color: "var(--text-faint)", opacity: 0.3 }}>
              Specimen.01
            </span>
          </div>

          <div className="space-y-10 md:space-y-16" style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}>
            {waterfallSizes.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group cursor-default"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-md font-headline"
                    style={{ background: "var(--bg-card)", color: "var(--text-faint)", border: "1px solid var(--border)" }}>
                    {row.pt}pt · {row.label}
                  </span>
                  <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                </div>
                <p
                  className="leading-tight transition-all duration-700 break-words"
                  style={{
                    ...previewStyle,
                    fontSize: `clamp(${Math.max(14, row.pt * 0.4)}pt, ${row.pt * 0.7}pt, ${row.pt}pt)`,
                    color: "var(--text-primary)",
                  }}
                >
                  {row.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Specs & Download ─── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <div className="md:col-span-2 rounded-[3rem] p-12 md:p-16 border shadow-sm"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 font-headline" style={{ color: "var(--text-primary)" }}>
              <Terminal className="w-6 h-6" style={{ color: "var(--brand)" }} /> Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-10 gap-x-10">
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Year</p>
                <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>{font.year}</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Styles</p>
                <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>
                  {typeof font.styles === "number" ? `${font.styles} Style${font.styles !== 1 ? "s" : ""}` : font.styles}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Format</p>
                <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>WOFF2, OTF</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Script</p>
                <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>Kannada + Latin</p>
              </div>
              {font.designer && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Designer</p>
                  <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>{font.designer}</p>
                </div>
              )}
              {font.version && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline" style={{ color: "var(--text-faint)" }}>Version</p>
                  <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>{font.version}</p>
                </div>
              )}
              <div className="col-span-2 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 font-headline" style={{ color: "var(--text-faint)" }}>Features</p>
                <div className="flex flex-wrap gap-3">
                  {font.features.map(feat => (
                    <span key={feat} className="px-4 py-2 rounded-xl text-xs font-bold font-headline"
                      style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 font-headline" style={{ color: "var(--text-faint)" }}>Inspiration</p>
                <p className="text-sm font-light font-body" style={{ color: "var(--text-muted)" }}>{font.inspiration}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] p-12 md:p-16 text-white flex flex-col justify-between overflow-hidden relative group"
            style={{ background: "var(--brand-dark)" }}>
            <div className="absolute -bottom-10 -right-10 text-[12rem] font-kannada text-white/5 group-hover:text-white/10 transition-colors duration-1000 select-none pointer-events-none">
              {font.char}
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest font-headline block mb-6" style={{ color: "var(--brand)" }}>
                Free Download
              </span>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter font-headline">Ready to use.</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8 font-body">
                {font.name} is free for personal and commercial use. Download the complete font package.
              </p>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest font-headline">
                {font.nameKannada}
              </p>
            </div>
            {font.downloadUrl && (
              <div className="space-y-4 mt-16 relative z-10">
                <a
                  href={font.downloadUrl}
                  download
                  className="w-full py-5 bg-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{ color: "var(--brand-dark)" }}
                >
                  <Download className="w-4 h-4" /> Download ZIP
                </a>
                <button
                  onClick={onBack}
                  className="w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-widest font-headline transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
                >
                  Back to Archive
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
