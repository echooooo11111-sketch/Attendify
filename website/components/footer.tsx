"use client";

import { CheckCircle, Mail, ExternalLink, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Attendify</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              The simplest way to track attendance for your classes, events, and
              organizations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@attendify.app"
                className="w-10 h-10 bg-[#141414] border border-[#27272a] rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#141414] border border-[#27272a] rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#fafafa] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#fafafa] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#fafafa] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#27272a] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} Attendify. All rights reserved.
          </p>
          <p className="text-[#94a3b8] text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ef4444] fill-current" />{" "}
            in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
