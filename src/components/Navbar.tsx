import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileText, Send, User, Award, Code, Briefcase } from "lucide-react";

interface NavbarProps {
  onDownloadResume: () => void;
}

export default function Navbar({ onDownloadResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About & Education", icon: Award },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Interactive Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur transition
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-black/95 backdrop-blur-md border-b border-pink-500/20 shadow-[0_4px_20px_rgba(236,72,153,0.15)]"
            : "py-5 bg-transparent"
        }`}
        id="navbar-root"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center space-x-2 group cursor-pointer"
              id="nav-logo"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center font-display font-bold text-white text-lg shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-200">
                T
              </div>
              <span className="font-display font-semibold text-lg tracking-wider text-white group-hover:text-pink-500 transition-colors duration-200">
                TANISHA
              </span>
            </button>
 
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2" id="nav-desktop-menu">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center space-x-1.5 ${
                      isActive ? "text-pink-500" : "text-slate-300 hover:text-white"
                    }`}
                    id={`nav-item-${item.id}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-pink-500/10 rounded-full border border-pink-500/30 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
 
            {/* Resume button */}
            <div className="hidden md:block" id="nav-resume-wrapper">
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-sans text-sm font-semibold hover:opacity-95 shadow-md shadow-pink-500/25 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                id="btn-nav-resume"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>
 
            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center" id="nav-mobile-trigger">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-zinc-900 focus:outline-none cursor-pointer"
                id="btn-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
 
        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 border-b border-pink-500/20 backdrop-blur-lg overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-sans text-base font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-pink-500/10 text-pink-500 border-l-4 border-pink-500 pl-3"
                          : "text-slate-300 hover:text-white hover:bg-zinc-900/50"
                      }`}
                      id={`nav-mobile-${item.id}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-pink-500/20 px-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onDownloadResume();
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-sans text-base font-semibold cursor-pointer shadow-lg shadow-pink-500/25"
                    id="btn-mobile-resume"
                  >
                    <FileText className="w-5 h-5" />
                    <span>View CV / Print Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
