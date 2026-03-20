import { motion } from "framer-motion";
import {
  Languages, Mic, FileText, Copy, Trash2, Download,
  MicOff, Upload, CheckCircle2, AlertCircle, Loader2
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

declare global {
  interface Window {
    enableTransliteration?: (el: HTMLElement, lang: string) => void;
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

// Local type aliases for speech recognition
type ISpeechRecognition = any;
type ISpeechRecognitionEvent = any;

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  });
}

function downloadText(text: string, filename: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/* ─── English → Kannada Transliteration Tool ─── */
function TransliterationTool() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.enableTransliteration) {
      if (textareaRef.current) {
        window.enableTransliteration(textareaRef.current, "kn");
        setLoaded(true);
      }
      return;
    }
    const script = document.createElement("script");
    script.src = "/tools/ats-eng-to-kan.js";
    script.async = true;
    script.onload = () => {
      if (window.enableTransliteration && textareaRef.current) {
        window.enableTransliteration(textareaRef.current, "kn");
        setLoaded(true);
      }
    };
    document.head.appendChild(script);
    return () => {};
  }, []);

  const handleCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="md:col-span-2 lg:col-span-2 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col gap-8"
      style={{ background: "var(--brand-dark)" }}
    >
      <div className="absolute top-0 right-0 p-6 md:p-10 opacity-[0.06] select-none pointer-events-none">
        <Languages className="w-48 h-48 md:w-64 md:h-64" />
      </div>

      <div className="relative z-10">
        <span className="inline-flex px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 italic font-headline"
          style={{ background: "rgba(58,181,73,0.2)", color: "#3AB549" }}>
          Most Popular
        </span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline mb-3">
          English → Kannada Typing
        </h3>
        <p className="text-white/80 text-sm font-light leading-relaxed font-body max-w-lg">
          {loaded
            ? "Type phonetically in English — your words will automatically transliterate to Kannada Unicode."
            : "Loading transliteration engine…"}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => setText(e.target.value)}
          rows={6}
          placeholder={loaded ? "Type here: e.g., 'kannada' → ಕನ್ನಡ" : "Loading…"}
          spellCheck={false}
          className="w-full rounded-2xl p-5 text-lg font-body resize-none outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#fff",
          }}
        />
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-headline transition-all"
            style={{ background: copied ? "#3AB549" : "rgba(255,255,255,0.1)", color: "#fff" }}
          >
            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={() => downloadText(text, "ATS-Kannada.txt")}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-headline transition-all"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          >
            <Download className="w-4 h-4" /> Download .txt
          </button>
          <button
            onClick={() => setText("")}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-headline transition-all"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
          >
            <Trash2 className="w-4 h-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Speech to Text Tool ─── */
function SpeechToTextTool() {
  const [text, setText] = useState("");
  const [interim, setInterim] = useState("");
  const [recording, setRecording] = useState(false);
  const [status, setStatus] = useState<"idle" | "listening" | "error" | "unsupported">("idle");
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  const SpeechRecognitionAPI =
    typeof window !== "undefined"
      ? ((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition)
      : undefined;

  const supported = !!SpeechRecognitionAPI;

  const addPunctuationKeywords = (t: string) => {
    return t
      .replace(/ ರೂಪಾಯಿ ಚಿಹ್ನೆ/gi, "₹")
      .replace(/ ಅಲ್ಪವಿರಾಮ/gi, ",")
      .replace(/ ಅರ್ಧವಿರಾಮ/gi, ";")
      .replace(/ ಪೂರ್ಣವಿರಾಮ/gi, ".")
      .replace(/ ಪ್ರಶ್ನಾರ್ಥಕ ಚಿಹ್ನೆ/gi, "?")
      .replace(/ ವಿಸ್ಮಯ ಬೋಧಕ ಚಿಹ್ನೆ/gi, "!")
      .replace(/ ನಕ್ಷತ್ರ ಚಿಹ್ನೆ/gi, "*");
  };

  const startRecording = useCallback(() => {
    if (!SpeechRecognitionAPI) { setStatus("unsupported"); return; }
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "kn-IN";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = () => { setRecording(true); setStatus("listening"); };
    recognition.onend = () => { setRecording(false); setStatus("idle"); setInterim(""); };
    recognition.onerror = () => { setRecording(false); setStatus("error"); setInterim(""); };
    recognition.onresult = (e: ISpeechRecognitionEvent) => {
      let fin = "";
      let int = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) fin += t;
        else int += t;
      }
      if (fin) {
        const cleaned = addPunctuationKeywords(fin);
        setText(prev => (prev + " " + cleaned).trim().replace(/\s{2,}/g, " "));
      }
      setInterim(int);
    };
    recognitionRef.current = recognition;
    recognition.start();
  }, [SpeechRecognitionAPI]);

  const stopRecording = () => {
    recognitionRef.current?.stop();
  };

  const handleCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-[2.5rem] md:rounded-[4rem] p-10 flex flex-col gap-6"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500"
        style={{ background: recording ? "#3AB549" : "var(--bg-elevated)", border: "1px solid var(--border)" }}
      >
        {recording ? <Mic className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6" style={{ color: "var(--text-muted)" }} />}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>Speech to Text</h3>
        <p className="text-sm font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>
          Speak in Kannada and watch your words appear as Unicode text.
        </p>
      </div>

      {!supported && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444" }}>
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Speech recognition is not supported in this browser. Please use Chrome.
        </div>
      )}

      {status === "listening" && (
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-headline" style={{ color: "#3AB549" }}>
          <span className="w-2 h-2 rounded-full bg-[#3AB549] animate-pulse" />
          Listening for Kannada speech…
        </div>
      )}

      <textarea
        readOnly
        rows={5}
        value={text + (interim ? " " + interim : "")}
        placeholder="Your Kannada speech will appear here…"
        className="w-full rounded-2xl p-4 text-base font-body resize-none outline-none"
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
      />

      <div className="flex flex-col gap-3">
        {supported && (
          <button
            onClick={recording ? stopRecording : startRecording}
            className="flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest font-headline transition-all active:scale-95"
            style={{
              background: recording ? "#ef4444" : "var(--brand-dark)",
              color: "#fff",
            }}
          >
            {recording ? (
              <><MicOff className="w-5 h-5" /> Stop Recording</>
            ) : (
              <><Mic className="w-5 h-5" /> Start Recording</>
            )}
          </button>
        )}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-headline transition-all"
            style={{ background: copied ? "#3AB549" : "var(--bg-elevated)", color: copied ? "#fff" : "var(--text-muted)", border: "1px solid var(--border)" }}
          >
            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={() => setText("")}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-headline transition-all"
            style={{ background: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
          >
            <Trash2 className="w-4 h-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Image to Text (OCR) Tool ─── */
function OcrTool() {
  const [result, setResult] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setResult("");
    setStatus("loading");
    setProgress(0);

    const reader = new FileReader();
    reader.onload = e => setImageSrc(e.target?.result as string ?? null);
    reader.readAsDataURL(file);

    try {
      const Tesseract = await import("tesseract.js");
      const { data } = await Tesseract.recognize(file, "kan+eng", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round((m.progress ?? 0) * 100));
          }
        },
      });
      setResult(data.text.trim());
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const handleCopy = () => {
    copyToClipboard(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-[2.5rem] md:rounded-[4rem] p-10 flex flex-col gap-6"
      style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
    >
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <FileText className="w-6 h-6" style={{ color: "var(--text-muted)" }} />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>Image to Text (OCR)</h3>
        <p className="text-sm font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>
          Extract Kannada text from images, scanned documents, or screenshots.
        </p>
      </div>

      {/* Upload Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => fileRef.current?.click()}
        className="rounded-2xl flex flex-col items-center justify-center gap-3 py-8 cursor-pointer transition-all group"
        style={{ border: "2px dashed var(--border)", background: "var(--bg-card)" }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt="Uploaded" className="max-h-36 rounded-xl object-contain" />
        ) : (
          <>
            <Upload className="w-8 h-8 group-hover:scale-110 transition-transform" style={{ color: "var(--text-faint)" }} />
            <p className="text-xs font-bold uppercase tracking-widest font-headline" style={{ color: "var(--text-faint)" }}>
              Drop image or click to upload
            </p>
            <p className="text-[10px] font-body" style={{ color: "var(--text-faint)" }}>JPG, PNG, WebP supported</p>
          </>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>

      {/* Progress */}
      {status === "loading" && (
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm font-body" style={{ color: "var(--text-muted)" }}>
            <Loader2 className="w-4 h-4 animate-spin" style={{ color: "var(--brand)" }} />
            Extracting text… {progress}%
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: "var(--brand)" }} />
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444" }}>
          <AlertCircle className="w-4 h-4 flex-shrink-0" /> OCR failed. Please try a clearer image.
        </div>
      )}

      {/* Result */}
      {result && (
        <textarea
          readOnly
          rows={5}
          value={result}
          className="w-full rounded-2xl p-4 text-sm font-body resize-none outline-none"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
        />
      )}

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => fileRef.current?.click()}
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text- xs uppercase tracking-widest font-headline transition-all"
          style={{ background: "var(--brand-dark)", color: "#fff" }}
        >
          <Upload className="w-4 h-4" />
          {imageSrc ? "New Image" : "Upload Image"}
        </button>
        {result && (
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest font-headline transition-all"
            style={{ background: copied ? "#3AB549" : "var(--bg-card)", color: copied ? "#fff" : "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy Text"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ToolsPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 pb-40">
        {/* Hero Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10" style={{ background: "var(--brand)" }} />
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase font-headline" style={{ color: "var(--brand)" }}>
              Type Lab · Free Tools
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black tracking-tighter font-headline leading-[0.9] mb-8"
            style={{ fontSize: "clamp(3rem,10vw,8rem)", color: "var(--text-primary)" }}
          >
            Digital <span className="italic font-light premium-gradient-text">Alchemies.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl font-body"
            style={{ color: "var(--text-muted)" }}
          >
            A suite of free utilities for Kannada digital workflows — transliterate, transcribe, and extract text with ease.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <TransliterationTool />
          <SpeechToTextTool />
          <OcrTool />
        </div>

        {/* Info strip */}
        <div className="mt-16 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 font-headline" style={{ color: "var(--brand)" }}>
              Tip
            </p>
            <p className="text-sm font-light font-body leading-relaxed" style={{ color: "var(--text-muted)" }}>
              The transliteration tool uses phonetic mapping — type English sounds to get Kannada script.
              For example, type <strong className="theme-text">"namma"</strong> to get <strong className="theme-text">ನಮ್ಮ</strong>.
              Press <strong className="theme-text">Space</strong> to confirm each word.
            </p>
          </div>
          <div className="flex-shrink-0 text-5xl font-kannada select-none" style={{ color: "var(--brand)", opacity: 0.6 }}>
            ನಮ್ಮ
          </div>
        </div>
      </section>
    </div>
  );
}
