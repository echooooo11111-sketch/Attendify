"use client";

import { Download, UserPlus, ListChecks, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Install",
    description:
      "Download the APK file and install Attendify on your Android device. Installation takes less than a minute.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Create Your Group",
    description:
      "Set up your class, event, or organization. Add members manually or import from a list.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Take Attendance",
    description:
      "Mark attendance with just a tap. Use quick check-all or individual marking based on your needs.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Export Reports",
    description:
      "Generate detailed reports and export them as PDF or Excel. Share with stakeholders easily.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-sm font-medium border border-[#22c55e]/20">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Get Started in
            <span className="text-[#22c55e]"> 4 Easy Steps</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            From download to your first attendance record in minutes. No
            complicated setup, no learning curve.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6] via-[#22c55e] to-[#3b82f6] hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number indicator */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#141414] border-2 border-[#3b82f6] items-center justify-center z-10`}
                >
                  <span className="text-[#3b82f6] font-bold">{step.number}</span>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}
                >
                  <div className="bg-[#141414] border border-[#27272a] rounded-2xl p-6 hover:border-[#3b82f6]/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Mobile step number */}
                      <div className="md:hidden w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0">
                        <span className="text-[#3b82f6] font-bold text-lg">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-[#3b82f6]" />
                          </div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-[#94a3b8] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
