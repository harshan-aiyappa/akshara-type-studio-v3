import aksharaLogo from "../assets/akshara-logo.png";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/aksharatypestudio/" },
  { name: "X (Twitter)", url: "https://twitter.com/aksharatype" },
  { name: "Facebook", url: "https://www.facebook.com/aksharatypestudio" },
  { name: "Behance", url: "https://www.behance.net/aksharatypestudio" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCOB7XHf00zmT0s7LkbqVM3Q" },
];

const navLinks = [
  { label: "Fonts", href: "#fonts" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Help Us", href: "https://aksharatypestudio.in/help/", external: true },
  { label: "Blog", href: "https://ats-help.blogspot.com/", external: true },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: "#0A382F", borderTop: "1px solid rgba(58,181,73,0.1)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col gap-6 max-w-xs">
            <img
              src={aksharaLogo}
              alt="Akshara Type Studio"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
            <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(234,253,231,0.4)" }}>
              An independent Kannada type foundry dedicated to the design and distribution of digital fonts in ಕನ್ನಡ (Kannada) and Latin script.
            </p>
            <a
              href="mailto:connect.ats@outlook.com"
              className="text-xs font-bold transition-all hover:opacity-100"
              style={{ color: "rgba(58,181,73,0.6)" }}
            >
              connect.ats@outlook.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-4 sm:gap-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] font-headline transition-all duration-300 hover:opacity-100"
                style={{ color: "rgba(234,253,231,0.35)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] font-headline" style={{ color: "rgba(234,253,231,0.2)" }}>
              Follow
            </span>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold font-body transition-all duration-300 hover:opacity-100"
                  style={{ color: "rgba(234,253,231,0.35)" }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] font-headline text-center sm:text-left" style={{ color: "rgba(234,253,231,0.2)" }}>
            © 2025 Akshara Type Studio · Crafted in Karnataka.
          </p>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] font-headline" style={{ color: "rgba(234,253,231,0.15)" }}>
            T. Narasipura, Mysuru · Est. 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
