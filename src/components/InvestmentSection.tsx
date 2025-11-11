import { useEffect, useRef, useState } from "react";
import { MandalaBg } from "./MandalaBg";
import { LotusDivider } from "./LotusDivider";
import { KrishnaBlessings } from "./KrishnaBlessings";
import sacredAnimalsBg from "@/assets/sacred-animals-bg.jpg";

const highlights = [
  {
    title: "Prime Highway",
    description: "Mathura–Goverdhan Highway location",
    value: "Direct Access",
  },
  {
    title: "MVDA Approval",
    description: "In process for legal clarity",
    value: "Authentic",
  },
  {
    title: "ROI Potential",
    description: "Fast-developing corridor",
    value: "High Returns",
  },
  {
    title: "Limited Plots",
    description: "Only 125 well-planned plots",
    value: "Exclusive",
  },
];

export const InvestmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="investment"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Sacred Animals Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src={sacredAnimalsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/20 via-background/90 to-saffron-gold/20" />
      </div>

      {/* Complex Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/10 via-background to-saffron-gold/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, hsl(185 55% 45% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(40 90% 55% / 0.15) 0%, transparent 50%)"
          }}
        />
      </div>

      {/* Animated Mandala */}
      <MandalaBg className="opacity-[0.02]" animate={false} />

      {/* Krishna Blessings */}
      <KrishnaBlessings />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <h2
            className={`font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            <span className="relative">
              Investment Highlights
              {/* Animated Gold Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            </span>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-saffron-gold" />
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-saffron-gold">
                <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" fill="currentColor" />
              </svg>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-saffron-gold" />
            </div>
          </h2>
          <p
            className={`font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            A divine opportunity for spiritual and financial growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`investment-card group relative ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Card Container with Glow */}
              <div className="relative h-full bg-card rounded-3xl p-10 border-2 border-border/40 transition-all duration-500 hover:scale-110 hover:shadow-[0_24px_80px_hsl(40_90%_55%/0.25)] hover:border-saffron-gold/70 overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/5 via-transparent to-saffron-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Peacock Feather Corner */}
                <div className="absolute -top-2 -right-2 w-16 h-16 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:rotate-12">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <ellipse cx="32" cy="24" rx="20" ry="25" fill="currentColor" className="text-peacock-teal" opacity="0.4" />
                    <ellipse cx="32" cy="24" rx="12" ry="16" fill="currentColor" className="text-saffron-gold" opacity="0.3" />
                  </svg>
                </div>

                <div className="relative">
                  <div className="text-5xl font-cinzel font-bold mb-4 bg-gradient-to-br from-peacock-teal via-temple-gold to-saffron-gold bg-clip-text text-transparent drop-shadow-sm">
                    {highlight.value}
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold mb-3 text-krishna-blue">
                    {highlight.title}
                  </h3>
                  <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-peacock-teal to-saffron-gold rounded-full opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center ${
            isVisible ? "scroll-reveal" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <button className="group relative bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold text-krishna-blue px-12 py-5 rounded-full font-cinzel font-bold text-lg transition-all duration-500 hover:scale-110 shadow-[0_12px_48px_hsl(40_90%_55%/0.4)] hover:shadow-[0_20px_60px_hsl(40_90%_55%/0.6)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h16M12 4v16" />
              </svg>
              Download Investment Brochure
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-temple-gold to-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Lotus Divider */}
        <LotusDivider variant="gold" className="mt-20" />
      </div>
    </section>
  );
};
