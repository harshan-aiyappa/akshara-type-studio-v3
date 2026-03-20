import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-40" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] sm:rounded-[3.5rem] p-10 sm:p-14 md:p-24 relative overflow-hidden text-center"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {/* Decorative background glyph */}
          <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-[0.03] select-none pointer-events-none">
            <span className="font-kannada" style={{ fontSize: "clamp(8rem,20vw,15rem)", color: "var(--brand)" }}>ಅ</span>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6 sm:mb-8">
              <span
                className="px-5 py-2 rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase font-headline"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--brand)" }}
              >
                Commission Your Script
              </span>
            </div>

            <h2
              className="font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8 font-headline"
              style={{ fontSize: "clamp(2rem,7vw,4rem)", color: "var(--text-primary)" }}
            >
              Ready to define your <br />
              <span className="italic font-light" style={{ color: "var(--text-muted)" }}>brand's voice?</span>
            </h2>

            <p className="text-sm sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 sm:mb-12 font-body" style={{ color: "var(--text-muted)" }}>
              License our retail fonts or partner with us for a bespoke typographic identity that resonates with Karnataka's rich culture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-full text-sm font-bold uppercase tracking-widest font-headline text-white transition-all"
                style={{ background: "var(--brand-dark)", boxShadow: "0 20px 50px -15px rgba(10,56,47,0.3)" }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-full text-sm font-bold uppercase tracking-widest font-headline transition-all"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              >
                Browse Licenses
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
