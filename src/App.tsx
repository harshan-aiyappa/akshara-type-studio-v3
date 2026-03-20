import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import SmoothScroll from "./components/SmoothScroll";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturedFonts from "./components/FeaturedFonts";
import HeritageSection from "./components/HeritageSection";
import StudioLife from "./components/StudioLife";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import FontsPage from "./pages/Fonts";
import AboutPage from "./pages/About";
import ToolsPage from "./pages/Tools";
import FontDetailPage from "./pages/FontDetail";
import ContactPage from "./pages/Contact";

export default function App() {
  const [currentPath, setCurrentPath] = useState("home");
  const [selectedFontSlug, setSelectedFontSlug] = useState<string>("bandipura");
  const { isDark, toggleDark } = useTheme();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      const parts = hash.split("/");
      const path = parts[0];
      if (path === "detail" && parts[1]) {
        setSelectedFontSlug(parts[1]);
      }
      setCurrentPath(path);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleSelectFont = (slug: string) => {
    setSelectedFontSlug(slug);
    navigateTo(`detail/${slug}`);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "fonts":
        return <FontsPage key="fonts" onSelectFont={handleSelectFont} />;
      case "about":
        return <AboutPage key="about" />;
      case "tools":
        return <ToolsPage key="tools" />;
      case "detail":
        return (
          <FontDetailPage
            key={`detail-${selectedFontSlug}`}
            fontSlug={selectedFontSlug}
            onBack={() => navigateTo("fonts")}
          />
        );
      case "contact":
        return <ContactPage key="contact" />;
      default:
        return (
          <div key="home">
            <HeroSection onNavigate={navigateTo} />
            <FeaturedFonts onSelectFont={handleSelectFont} />
            <HeritageSection />
            <StudioLife />
            <CTASection onNavigate={navigateTo} />
          </div>
        );
    }
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }} className="transition-[background-color,color] duration-500 min-h-screen">
      <SmoothScroll>
        <Navigation
          onNavigate={navigateTo}
          currentPath={currentPath}
          isDark={isDark}
          toggleDark={toggleDark}
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={currentPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </SmoothScroll>
    </div>
  );
}
