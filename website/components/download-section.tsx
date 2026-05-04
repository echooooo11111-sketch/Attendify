"use client";

import { Download, CheckCircle, ExternalLink } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="bg-gradient-to-br from-[#141414] to-[#1e293b] border border-[#27272a] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium border border-[#3b82f6]/20">
                Free Download
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Ready to Simplify
                <span className="text-[#3b82f6]"> Attendance?</span>
              </h2>

              <p className="text-lg text-[#94a3b8] leading-relaxed">
                Download Attendify now and experience the easiest way to manage
                attendance. Free to use, no subscription required.
              </p>

              {/* Benefits list */}
              <ul className="space-y-3">
                {[
                  "100% Free to use",
                  "No registration required",
                  "Works offline",
                  "Lightweight APK (under 10MB)",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0" />
                    <span className="text-[#fafafa]">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#3b82f6]/30 hover:shadow-[#3b82f6]/50 hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK</span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 bg-[#1e293b] hover:bg-[#334155] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-[#27272a] hover:border-[#3b82f6]/50"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* APK visual representation */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#3b82f6]/30 rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <CheckCircle className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="font-bold text-xl md:text-2xl">Attendify</p>
                    <p className="text-white/70 text-sm">v1.0.0</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#22c55e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Android
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#141414] border border-[#27272a] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ~8MB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
