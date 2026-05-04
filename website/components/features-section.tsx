"use client";

import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Clock,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Record attendance in seconds with our streamlined interface. No complicated setup required.",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data stays safe with encrypted storage and privacy-first design. No data sold to third parties.",
    color: "#22c55e",
  },
  {
    icon: BarChart3,
    title: "Real-time Reports",
    description:
      "Get instant insights with detailed analytics and exportable attendance reports.",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "Unlimited Members",
    description:
      "Add as many participants as you need. Perfect for classes, events, and organizations of any size.",
    color: "#ec4899",
  },
  {
    icon: Clock,
    title: "History Tracking",
    description:
      "Access complete attendance history anytime. Never lose track of past records.",
    color: "#8b5cf6",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    description:
      "No internet? No problem. Record attendance offline and sync when connected.",
    color: "#14b8a6",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium border border-[#3b82f6]/20">
            Key Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Everything You Need for
            <span className="text-[#3b82f6]"> Attendance Management</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Powerful features designed to make attendance tracking effortless
            for teachers, event organizers, and team leaders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#141414] border border-[#27272a] rounded-2xl p-6 hover:border-[#3b82f6]/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
