import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/aksharatypestudio/" },
  { name: "X (Twitter)", url: "https://twitter.com/aksharatype" },
  { name: "Facebook", url: "https://www.facebook.com/aksharatypestudio" },
  { name: "Behance", url: "https://www.behance.net/aksharatypestudio" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCOB7XHf00zmT0s7LkbqVM3Q" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen selection:bg-[var(--brand-faint)]" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <main className="pt-24 sm:pt-32">
        <section className="py-16 sm:py-24 md:py-40 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="max-w-xl">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-10">
                  <div className="h-[2px] w-12 bg-[#3AB549]" />
                  <span className="text-[#0A382F] font-black tracking-[0.5em] uppercase text-[10px] font-headline">Inquiries</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(3rem,10vw,8rem)] font-black tracking-[-0.05em] mb-12 leading-[0.8] font-headline"
                  style={{ color: "var(--text-primary)" }}
                >
                  Start a <br />
                  <span className="italic font-light premium-gradient-text">Dialogue.</span>
                </motion.h1>

                <div className="space-y-10 sm:space-y-16 pt-10 sm:pt-16 border-t border-[#3AB549]/10">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[var(--brand-dark)] group-hover:text-white transition-all shadow-sm flex-shrink-0" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand)] block mb-2 font-headline">Studio Location</span>
                      <p className="text-xl font-bold font-headline" style={{ color: "var(--text-primary)" }}>Tirumakudalu Narasipura</p>
                      <p className="text-sm font-body mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>Near Court Compound, Nanjangud Road,<br />opp. to APMC, Mysuru Dist., Karnataka 571124.</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[var(--brand-dark)] group-hover:text-white transition-all shadow-sm flex-shrink-0" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand)] block mb-2 font-headline">Call or Message</span>
                      <a
                        href="tel:+919945382898"
                        className="text-xl font-bold font-headline transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        +91 99453 82898
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[var(--brand-dark)] group-hover:text-white transition-all shadow-sm flex-shrink-0" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand)] block mb-2 font-headline">Electronic Mail</span>
                      <a
                        href="mailto:connect.ats@outlook.com"
                        className="text-xl font-bold font-headline transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        connect.ats@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4rem] p-8 sm:p-12 md:p-20 shadow-2xl relative overflow-hidden"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none">
                  <Send className="w-64 h-64" style={{ color: "var(--text-primary)" }} />
                </div>

                <form className="relative z-10 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest font-headline ml-4" style={{ color: "var(--text-faint)" }}>Your Name</label>
                      <input className="w-full rounded-[1.5rem] px-8 py-5 text-sm font-body outline-none transition-all placeholder:opacity-50" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-primary)" }} placeholder="Manjunatha R." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest font-headline ml-4" style={{ color: "var(--text-faint)" }}>Organization</label>
                      <input className="w-full rounded-[1.5rem] px-8 py-5 text-sm font-body outline-none transition-all placeholder:opacity-50" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-primary)" }} placeholder="Independent" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest font-headline ml-4" style={{ color: "var(--text-faint)" }}>Email Address</label>
                    <input type="email" className="w-full rounded-[1.5rem] px-8 py-5 text-sm font-body outline-none transition-all placeholder:opacity-50" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-primary)" }} placeholder="hello@studio.com" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest font-headline ml-4" style={{ color: "var(--text-faint)" }}>Message</label>
                    <textarea rows={5} className="w-full rounded-[2rem] px-8 py-6 text-sm font-body outline-none transition-all resize-none placeholder:opacity-50" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-primary)" }} placeholder="Tell us about your project or inquiry..." />
                  </div>

                  <button className="w-full py-8 text-white font-bold rounded-[2.5rem] shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-4 group" style={{ background: "var(--brand-dark)" }}>
                    <span className="text-sm uppercase tracking-[0.3em] font-headline">Send Message</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-t border-[#3AB549]/10 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 font-headline">
            {socials.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.4em] transition-colors"
                style={{ color: "var(--text-faint)" }}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
