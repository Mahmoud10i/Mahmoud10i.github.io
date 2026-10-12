import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { ThemeToggle } from "../ui/ThemeToggle";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Announcement Bar */}
      <aside aria-label="Announcement" className="w-full bg-[#111827] border-b border-slate-800/80 px-4 py-1.5 text-center text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>Meet Phone Manager Pro — Your Business, Under Control.</span>
          <button
            onClick={() => handleLinkClick("/features")}
            className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none focus-visible:underline"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </aside>

      {/* Main Top Bar */}
      <div
        className={`w-full backdrop-blur-md transition-colors border-b ${
          scrolled
            ? "bg-[#0B1020]/95 border-slate-800/90 shadow-lg shadow-black/20"
            : "bg-[#0B1020]/80 border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick("/")}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg shrink-0"
            aria-label="Phone Manager Pro Home"
          >
            <Logo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded ${
                    isActive
                      ? "text-indigo-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle className="hidden sm:inline-flex" />

            <button
              onClick={() => handleLinkClick("/contact")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-900/40 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Get in Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Collapsible Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0F172A] border-b border-slate-800 shadow-xl px-4 pt-3 pb-6 transition-all duration-200"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600/10 text-indigo-400 font-semibold border border-indigo-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Interface Appearance</span>
            <ThemeToggle />
          </div>

          <div className="mt-4">
            <button
              onClick={() => handleLinkClick("/contact")}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
