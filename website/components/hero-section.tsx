"use client";

import { Download, Play, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3b82f6]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#22c55e]/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo and App Name */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#3b82f6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3b82f6]/30">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Attendify
              </span>
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Smart Attendance
                <span className="block text-[#3b82f6]">Made Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-[#94a3b8] max-w-xl leading-relaxed">
                Track attendance effortlessly for your classes, events, and
                organizations. Fast, reliable, and easy to use.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#3b82f6]/30 hover:shadow-[#3b82f6]/50 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-3 bg-[#1e293b] hover:bg-[#334155] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-[#27272a] hover:border-[#3b82f6]/50"
              >
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#22c55e] border-2 border-[#0a0a0a]"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#94a3b8]">
                  1,000+ active users
                </span>
              </div>
              <div className="h-4 w-px bg-[#27272a]" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-sm text-[#94a3b8] ml-1">4.9 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl border border-[#27272a]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0a0a0a] rounded-b-2xl" />

                {/* Phone screen */}
                <div className="w-full h-full bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-[2.5rem] overflow-hidden">
                  {/* App UI Preview */}
                  <div className="p-6 pt-10 space-y-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-xs text-[#94a3b8]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-[#94a3b8] rounded-sm" />
                        <div className="w-4 h-2 bg-[#94a3b8] rounded-sm" />
                        <div className="w-6 h-3 bg-[#22c55e] rounded-sm" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="space-y-1">
                      <h3 className="text-white font-semibold text-lg">
                        Good Morning!
                      </h3>
                      <p className="text-[#94a3b8] text-sm">
                        {"Today's"} attendance overview
                      </p>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#1e293b] rounded-xl p-4">
                        <p className="text-[#94a3b8] text-xs">Present</p>
                        <p className="text-2xl font-bold text-[#22c55e]">42</p>
                      </div>
                      <div className="bg-[#1e293b] rounded-xl p-4">
                        <p className="text-[#94a3b8] text-xs">Absent</p>
                        <p className="text-2xl font-bold text-[#ef4444]">3</p>
                      </div>
                    </div>

                    {/* Recent activity */}
                    <div className="space-y-3">
                      <h4 className="text-white font-medium text-sm">
                        Recent Check-ins
                      </h4>
                      {["Juan D.", "Maria S.", "Pedro R."].map((name, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-[#1e293b]/50 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#22c55e]" />
                            <span className="text-white text-sm">{name}</span>
                          </div>
                          <span className="text-[#22c55e] text-xs">
                            Just now
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#22c55e]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
