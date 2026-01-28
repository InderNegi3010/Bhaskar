import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Credentials", href: "#achievements" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Navigation */}
      <Motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 transition-colors text-[#3d405b]"
          >
            <span className="text-xl sm:text-2xl text-[#dda15e]">ॐ</span>
            <span className="font-light text-base sm:text-lg tracking-wide">
              Bhaskar Singh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide transition-colors hover:text-[#606c38] text-[#5c5c5c]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 lg:px-5 py-2 bg-[#606c38] text-white rounded-full text-sm tracking-wide hover:bg-[#4a5429] transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#3d405b]" />
            ) : (
              <Menu className="w-6 h-6 text-[#3d405b]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#5c5c5c] hover:text-[#606c38] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 bg-[#606c38] text-white rounded-full text-sm tracking-wide text-center hover:bg-[#4a5429] transition-colors mt-2"
                >
                  Book Now
                </a>
              </nav>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
