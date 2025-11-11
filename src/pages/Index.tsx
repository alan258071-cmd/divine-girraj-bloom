import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { LuckyDrawSection } from "@/components/LuckyDrawSection";
import { PaymentTimelineSection } from "@/components/PaymentTimelineSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AmenitiesSection />
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
