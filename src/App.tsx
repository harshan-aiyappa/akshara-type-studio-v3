import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
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

// Page component wrapper for animations
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

const FontDetailPageWrapper = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return <FontDetailPage fontSlug={slug || "bandipura"} onBack={() => navigate("/fonts")} />;
};

export default function App() {
  const { isDark, toggleDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }} className="transition-[background-color,color] duration-500 min-h-screen">
      <Navigation
        isDark={isDark}
        toggleDark={toggleDark}
      />
      
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split("/")[1] || "root"}>
            <Route path="/" element={
              <PageWrapper>
                <HeroSection onNavigate={(p) => navigate(p === "home" ? "/" : `/${p}`)} />
                <FeaturedFonts onSelectFont={(slug) => navigate(slug ? `/detail/${slug}` : "/fonts")} />
                <HeritageSection />
                <StudioLife />
                <CTASection onNavigate={(p) => navigate(`/${p}`)} />
              </PageWrapper>
            } />
            <Route path="/home" element={
              <PageWrapper>
                <HeroSection onNavigate={(p) => navigate(p === "home" ? "/" : `/${p}`)} />
                <FeaturedFonts onSelectFont={(slug) => navigate(slug ? `/detail/${slug}` : "/fonts")} />
                <HeritageSection />
                <StudioLife />
                <CTASection onNavigate={(p) => navigate(`/${p}`)} />
              </PageWrapper>
            } />
            <Route path="/fonts" element={<PageWrapper><FontsPage onSelectFont={(slug) => navigate(`/detail/${slug}`)} onNavigate={(p) => navigate(`/${p}`)} /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/tools" element={<PageWrapper><ToolsPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/detail/:slug" element={
              <PageWrapper>
                <FontDetailPageWrapper />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>

        <Footer />
      </SmoothScroll>
    </div>
  );
}
