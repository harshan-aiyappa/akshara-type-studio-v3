import { motion } from "framer-motion";
import { Send, MapPin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/aksharatypestudio/" },
  { name: "X (Twitter)", url: "https://twitter.com/aksharatype" },
  { name: "Facebook", url: "https://www.facebook.com/aksharatypestudio" },
  { name: "Behance", url: "https://www.behance.net/aksharatypestudio" },
  { name: "YouTube", url: "https://www.youtube.com/@aksharatypestudio" },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-[#0A382F] min-h-screen selection:bg-[#EAFDE7]">
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
                  className="text-[clamp(3rem,10vw,8rem)] font-black tracking-[-0.05em] text-[#0A382F] mb-12 leading-[0.8] font-headline"
                >
                  Start a <br />
                  <span className="italic font-light text-[#3AB549]/60 mix-blend-multiply">Dialogue.</span>
                </motion.h1>

                <div className="space-y-10 sm:space-y-16 pt-10 sm:pt-16 border-t border-[#3AB549]/10">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#EAFDE7] flex items-center justify-center group-hover:bg-[#0A382F] group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#3AB549] block mb-2 font-headline">Studio Location</span>
                      <p className="text-xl font-bold text-[#0A382F] font-headline">Tirumakudalu Narasipura<br />Mysuru District, Karnataka, India</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#EAFDE7] flex items-center justify-center group-hover:bg-[#0A382F] group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#3AB549] block mb-2 font-headline">Electronic Mail</span>
                      <a
                        href="mailto:info@aksharatypestudio.in"
                        className="text-xl font-bold text-[#0A382F] font-headline hover:text-[#3AB549] transition-colors"
                      >
                        info@aksharatypestudio.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-[#f7fdf9] rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4rem] p-8 sm:p-12 md:p-20 border border-[#3AB549]/10 shadow-2xl shadow-[#0A382F]/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none">
                  <Send className="w-64 h-64 text-[#0A382F]" />
                </div>

                <form className="relative z-10 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#0A382F]/40 font-headline ml-4">Your Name</label>
                      <input className="w-full bg-white border border-[#3AB549]/10 rounded-[1.5rem] px-8 py-5 text-sm font-body focus:ring-4 focus:ring-[#3AB549]/10 outline-none transition-all placeholder:text-[#0A382F]/20" placeholder="Manjunatha R." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#0A382F]/40 font-headline ml-4">Organization</label>
                      <input className="w-full bg-white border border-[#3AB549]/10 rounded-[1.5rem] px-8 py-5 text-sm font-body focus:ring-4 focus:ring-[#3AB549]/10 outline-none transition-all placeholder:text-[#0A382F]/20" placeholder="Independent" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A382F]/40 font-headline ml-4">Email Address</label>
                    <input type="email" className="w-full bg-white border border-[#3AB549]/10 rounded-[1.5rem] px-8 py-5 text-sm font-body focus:ring-4 focus:ring-[#3AB549]/10 outline-none transition-all placeholder:text-[#0A382F]/20" placeholder="hello@studio.com" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A382F]/40 font-headline ml-4">Message</label>
                    <textarea rows={5} className="w-full bg-white border border-[#3AB549]/10 rounded-[2rem] px-8 py-6 text-sm font-body focus:ring-4 focus:ring-[#3AB549]/10 outline-none transition-all placeholder:text-[#0A382F]/20 resize-none" placeholder="Tell us about your project or inquiry..." />
                  </div>

                  <button className="w-full py-8 bg-[#0A382F] text-white font-bold rounded-[2.5rem] shadow-2xl hover:bg-[#0A382F]/90 transition-all active:scale-95 flex items-center justify-center gap-4 group">
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
                className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A382F]/30 hover:text-[#3AB549] transition-colors"
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
