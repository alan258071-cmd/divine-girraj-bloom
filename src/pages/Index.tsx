import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { LuckyDrawSection } from "@/components/LuckyDrawSection";
import { PaymentTimelineSection } from "@/components/PaymentTimelineSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { LoadingSplash } from "@/components/LoadingSplash";
import { FloatingOmSymbols } from "@/components/FloatingOmSymbols";
import { FloatingDiyas } from "@/components/FloatingDiyas";
import { TempleBells } from "@/components/TempleBells";
import { DevotionalSoundToggle } from "@/components/DevotionalSoundToggle";
import { DivineQuotes } from "@/components/DivineQuotes";
import { SectionTransition } from "@/components/SectionTransition";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingSplash onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Section Transition Overlay */}
      <SectionTransition />
      
      {/* Floating Devotional Elements */}
      <FloatingOmSymbols />
      <FloatingDiyas />
      
      {/* Sound Toggle */}
      <DevotionalSoundToggle />
      
      <Header />
      <main>
        <HeroSection />
        
        {/* Temple Bells Divider */}
        <div className="relative py-16 bg-gradient-to-b from-background to-sandalwood-cream">
          <TempleBells className="relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron-gold/5 to-transparent" />
        </div>
        
        <AboutSection />
        <AmenitiesSection />
        
        {/* Divine Quotes Section */}
        <DivineQuotes />
        
        <GallerySection />
        <InvestmentSection />
        <LuckyDrawSection />
        <PaymentTimelineSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
