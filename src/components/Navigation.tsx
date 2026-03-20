import { useState } from "react";
import { ShoppingBag, Menu, Search, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aksharaLogo from "../assets/akshara-logo.png";

interface NavProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navigation({ onNavigate, currentPath, isDark, toggleDark }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home",    path: "home"    },
    { name: "Fonts",   path: "fonts"   },
    { name: "Tools",   path: "tools"   },
    { name: "About",   path: "about"   },
    { name: "Contact", path: "contact" },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ─── Main Nav Bar ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500"
        style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        {/* Logo */}
        <motion.div
          onClick={() => handleNavigate("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <img
              src={aksharaLogo}
              alt="Akshara Type Studio"
              className="h-9 md:h-11 w-auto group-hover:rotate-[5deg] transition-transform duration-500"
            />
        </motion.div>

        {/* Desktop Nav Links — Floating pill */}
        <div className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1 px-2 py-2 rounded-full"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className="relative px-5 py-2 rounded-full text-[11px] font-black tracking-[0.3em] uppercase font-headline transition-all duration-300"
                style={{
                  background: currentPath === item.path ? "var(--brand-dark)" : "transparent",
                  color: currentPath === item.path ? "var(--bg)" : "var(--text-muted)",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 220, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="relative hidden lg:block overflow-hidden"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-faint)" }} />
                <input
                  autoFocus
                  className="w-full pl-11 pr-4 py-3 rounded-2xl text-xs font-body outline-none transition-all"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  placeholder="Search foundry..."
                  onBlur={() => setIsSearchOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300 hidden lg:flex"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
            aria-label="Toggle dark mode"
          >
            <motion.div
              key={isDark ? "moon" : "sun"}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.div>
          </button>

          {/* Cart */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>

          {/* Get Fonts CTA (Desktop only) */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNavigate("fonts")}
            className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-2xl text-[11px] font-bold tracking-[0.2em] uppercase font-headline transition-all duration-300 group"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            Get Fonts
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300 md:hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* ─── Mobile Full-Screen Drawer ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 md:hidden"
              style={{ background: "rgba(10,56,47,0.7)", backdropFilter: "blur(12px)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm z-[60] shadow-2xl p-12 flex flex-col md:hidden"
              style={{ background: "var(--bg)", borderLeft: "1px solid var(--border)" }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-20">
                <div className="flex items-center gap-3">
                  <img src={aksharaLogo} alt="Akshara Type Studio" className="h-10 w-auto" />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl transition-colors"
                  style={{ background: "var(--bg-card)", color: "var(--text-primary)" }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavigate(item.path)}
                    className="text-5xl font-black tracking-tighter text-left font-headline transition-all"
                    style={{ color: currentPath === item.path ? "var(--brand)" : "var(--text-faint)" }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="mt-auto pt-10" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] font-headline" style={{ color: "var(--text-faint)" }}>Appearance</p>
                  <button
                    onClick={toggleDark}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-headline transition-all"
                    style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {isDark ? "Light" : "Dark"}
                  </button>
                </div>
                <p className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>T. Narasipura, Mysuru · Est. 2021</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
