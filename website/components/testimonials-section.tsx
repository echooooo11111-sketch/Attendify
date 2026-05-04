"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "High School Teacher",
    content:
      "Attendify has made my morning routine so much easier. I used to spend 10 minutes calling names, now it takes less than a minute!",
    avatar: "MS",
  },
  {
    name: "Juan dela Cruz",
    role: "Event Organizer",
    content:
      "We used Attendify for our barangay meetings. The export feature is perfect for our documentation requirements.",
    avatar: "JC",
  },
  {
    name: "Anna Reyes",
    role: "University Professor",
    content:
      "The offline feature is a lifesaver when the campus WiFi is down. My attendance records are always accurate.",
    avatar: "AR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full text-sm font-medium border border-[#f59e0b]/20">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Loved by Teachers &
            <span className="text-[#f59e0b]"> Organizers</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            See what our users are saying about their experience with Attendify.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#27272a] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-[#f59e0b]" />
              </div>

              {/* Content */}
              <p className="text-[#fafafa] leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#22c55e] flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-[#94a3b8] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
