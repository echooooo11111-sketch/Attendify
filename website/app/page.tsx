import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DownloadSection } from "@/components/download-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
