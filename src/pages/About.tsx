import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Scroll, Users, Globe } from "lucide-react";
import manjunathaImg from "../assets/manjunatha.png";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const stats = [
    { label: "Fonts Released",  val: "3+"  },
    { label: "State Awards",    val: "02"  },
    { label: "Est.",            val: "2021" },
    { label: "Years Heritage",  val: "2k"  },
  ];

  const values = [
    { icon: Scroll, title: "Epigraphic Fidelity",  desc: "Every glyph is cross-referenced with stone inscriptions from 4th-century Karnataka." },
    { icon: Globe,  title: "Digital First",         desc: "Built for WOFF2 and variable font runtimes — from 4K displays to smartwatch faces." },
    { icon: Users,  title: "Community Custodians",  desc: "Working directly with scholars, historians, and Karnataka's literary communities." },
  ];

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <main className="pt-24 sm:pt-32">

        {/* ─── Hero ─── */}
        <section className="relative min-h-[75vh] sm:min-h-[90vh] flex items-center justify-center px-5 sm:px-8 overflow-hidden">
          <motion.div
            style={{ y: yParallax }}
            className="absolute inset-0 z-0 opacity-[0.025] flex items-center justify-center pointer-events-none select-none"
          >
            <span className="font-kannada font-black leading-none" style={{ fontSize: "clamp(15rem,60vw,60rem)", color: "var(--text-primary)" }}>ಅ</span>
          </motion.div>

          <div className="relative z-10 max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-8 sm:mb-12">
              <span
                className="px-5 py-2 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase font-headline"
                style={{ border: "1px solid var(--border)", color: "var(--brand)" }}
              >
                Est. 2021 · T. Narasipura
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.05em] leading-[0.84] mb-8 sm:mb-12 font-headline"
              style={{ fontSize: "clamp(3rem,13vw,11rem)", color: "var(--text-primary)" }}
            >
              The Genesis <br />
              <span className="italic font-light premium-gradient-text">of Modern</span> <br />
              Heritage.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-base sm:text-xl lg:text-2xl font-light leading-relaxed mx-auto pt-8 sm:pt-12"
              style={{ color: "var(--text-muted)", maxWidth: "52ch", borderTop: "1px solid var(--border)" }}
            >
              Akshara is a custodial journey of the Kannada script, bridging two millennia of heritage with the precision of modern digital design.
            </motion.p>
          </div>
        </section>

        {/* ─── Narrative Grid ─── */}
        <section className="py-16 sm:py-24 lg:py-40 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Dark Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-7 rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-16 lg:p-24 text-white flex flex-col justify-between relative overflow-hidden group"
              style={{ background: "var(--brand-dark)", minHeight: "clamp(360px, 55vw, 600px)" }}
            >
              <div className="absolute top-0 right-0 p-10 sm:p-20 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-1000 select-none pointer-events-none">
                <span className="font-kannada" style={{ fontSize: "clamp(10rem,25vw,30rem)", color: "var(--brand)" }}>ಕ</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.5em] uppercase mb-6 sm:mb-10 block font-headline" style={{ color: "var(--brand)" }}>
                  The Blueprint
                </span>
                <h2 className="font-black tracking-tighter leading-[0.9] font-headline" style={{ fontSize: "clamp(2rem,6vw,5rem)" }}>
                  Stone Carved <br />Logic.
                </h2>
              </div>
              <p className="text-white/70 text-base sm:text-xl max-w-md font-light leading-relaxed font-body mt-8 sm:mt-12">
                Founded by Manjunatha R., we began by cataloging vanishing stone-cut scripts across Karnataka, translating their physical gravity into digital weight.
              </p>
            </motion.div>

            {/* Award Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}
              className="lg:col-span-5 rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-16 flex flex-col justify-between group transition-all duration-700"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-10 sm:mb-16 transform group-hover:rotate-12 transition-transform"
                style={{ background: "var(--brand-dark)" }}
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "var(--brand)" }} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Rajyotsava Honors
                </h3>
                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <p className="text-sm font-bold font-headline" style={{ color: "var(--text-primary)" }}>Taluk Kannada Rajyotsava Prashasti · 2022</p>
                    <p className="text-xs font-light font-body mt-1" style={{ color: "var(--text-muted)" }}>Govt. of Karnataka · T Narasipura Taluku, Mysuru District</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold font-headline" style={{ color: "var(--text-primary)" }}>District Kannada Rajyotsava Prashasti · 2023</p>
                    <p className="text-xs font-light font-body mt-1" style={{ color: "var(--text-muted)" }}>Govt. of Karnataka · Zilla Adalitha, Mysuru</p>
                  </div>
                </div>
                <div className="h-[1px] w-20" style={{ background: "var(--brand)", opacity: 0.3 }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Founder Narrative ─── */}
        <section className="py-16 sm:py-24 lg:py-40 overflow-hidden" style={{ background: "var(--bg-card)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            {/* Portrait — shown below text on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Aspect ratio container */}
              <div className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl relative">
                <img
                  src={manjunathaImg}
                  alt="Manjunatha R., Founder"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-40"
                style={{ background: "var(--brand)" }}
              />
            </motion.div>

            {/* Text */}
            <div className="space-y-10 sm:space-y-16 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="h-[2px] w-14 mb-6 sm:mb-8" style={{ background: "var(--brand)" }} />
                <h2 className="font-black tracking-tighter leading-[0.9] mb-8 sm:mb-12 font-headline" style={{ fontSize: "clamp(2.2rem,7vw,6rem)", color: "var(--text-primary)" }}>
                  Manjunatha R.
                </h2>
                <div className="flex flex-col gap-6 sm:gap-8">
                  <p className="text-lg sm:text-2xl font-light leading-relaxed font-body italic" style={{ color: "var(--text-primary)" }}>
                    "I began drawing Kannada letters when I was ten years old, and I continue to be fascinated with Painting and Letter Design."
                  </p>
                  <p className="text-sm sm:text-lg font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>
                    Born and raised in Tirumakudalu Narasipura, Mysuru, Karnataka. Type Designer, Conceptual Photographer, and Graphic Designer. That passion led him to digital Typeface Design and the founding of Akshara Type Studio in 2021.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 sm:gap-12 pt-10 sm:pt-16" style={{ borderTop: "1px solid var(--border)" }}>
                {[{ label: "Founded", val: "2021" }, { label: "Location", val: "T. Narasipura, Mysuru" }].map(({ label, val }) => (
                  <div key={label} className="space-y-3 font-headline">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest block" style={{ color: "var(--brand)" }}>{label}</span>
                    <span className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-primary)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Values Grid ─── */}
        <section className="py-16 sm:py-24 lg:py-40 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-20">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] font-headline block mb-4" style={{ color: "var(--brand)" }}>
                Our Principles
              </span>
              <h2 className="font-black tracking-tighter font-headline" style={{ fontSize: "clamp(2rem,6vw,5rem)", color: "var(--text-primary)" }}>
                What drives every curve.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="rounded-[2.5rem] p-8 sm:p-12 flex flex-col gap-6 sm:gap-8 group transition-all duration-700"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                    style={{ background: "var(--brand-dark)" }}
                  >
                    <Icon className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: "var(--brand)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-black mb-3 sm:mb-4 font-headline tracking-tight" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    <p className="text-sm sm:text-base font-light leading-relaxed font-body" style={{ color: "var(--text-muted)" }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="py-16 sm:py-24 lg:py-40 px-5 sm:px-8 lg:px-12" style={{ background: "var(--brand-dark)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              >
                <span
                  className="font-black block leading-none mb-3 sm:mb-4 font-headline"
                  style={{ fontSize: "clamp(3rem,10vw,7rem)", color: "rgba(234,253,231,0.15)" }}
                >
                  {stat.val}
                </span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] font-headline" style={{ color: "rgba(234,253,231,0.6)" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
