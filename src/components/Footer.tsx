import aksharaLogo from "../assets/akshara-logo.png";

export default function Footer() {
  const links = ["Licensing", "Custom Type", "Privacy", "Contact"];
  const socials = ["Instagram", "X (Twitter)", "Behance", "LinkedIn"];

  return (
    <footer className="w-full" style={{ background: "#0A382F", borderTop: "1px solid rgba(58,181,73,0.1)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-8 mb-12 sm:mb-16">
          {/* Logo */}
          <div className="flex flex-col gap-6 max-w-xs">
            <img
              src={aksharaLogo}
              alt="Akshara Type Studio"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
            <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(234,253,231,0.4)" }}>
              An independent Kannada type foundry bridging heritage and the digital future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-4 sm:gap-y-5">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] font-headline transition-all duration-300 hover:opacity-100"
                style={{ color: "rgba(234,253,231,0.35)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] font-headline" style={{ color: "rgba(234,253,231,0.2)" }}>
              Follow
            </span>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-semibold font-body transition-all duration-300 hover:opacity-100"
                  style={{ color: "rgba(234,253,231,0.35)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] font-headline text-center sm:text-left" style={{ color: "rgba(234,253,231,0.2)" }}>
            © 2024 Akshara Type Studio · Crafted in Karnataka.
          </p>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] font-headline" style={{ color: "rgba(234,253,231,0.15)" }}>
            T. Narasipura · Est. 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
