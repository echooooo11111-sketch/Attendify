"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold hidden sm:inline">Attendify</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#fafafa] transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-[#141414] border border-[#27272a] rounded-lg flex items-center justify-center text-[#fafafa]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#27272a] pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#94a3b8] hover:text-[#fafafa] transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download APK</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
