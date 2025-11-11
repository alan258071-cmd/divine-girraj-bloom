import { useEffect, useRef, useState } from "react";
import { MandalaBg } from "./MandalaBg";
import { LotusDivider } from "./LotusDivider";
import { KrishnaBlessings } from "./KrishnaBlessings";
import { KrishnaWatermark } from "./KrishnaWatermark";
import sacredAnimalsBg from "@/assets/sacred-animals-bg.jpg";

const highlights = [
  {
    title: "Prime Highway Location",
    description: "Direct access via Mathura–Goverdhan Highway",
    value: "Prime Location",
    icon: "🛣️",
    gradient: "from-peacock-teal to-krishna-blue",
  },
  {
    title: "MVDA Approval",
    description: "Approval in process — ensuring legal clarity and authentic development",
    value: "Legal Clarity",
    icon: "✅",
    gradient: "from-temple-gold to-saffron-gold",
  },
  {
    title: "High ROI Potential",
    description: "Rapidly increasing property values in fast-developing corridor",
    value: "High Returns",
    icon: "📈",
    gradient: "from-saffron-gold to-peacock-teal",
  },
  {
    title: "Exclusive Offering",
    description: "Only 125 well-planned plots for early investors",
    value: "Limited Plots",
    icon: "🏘️",
    gradient: "from-krishna-blue to-temple-gold",
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

      {/* Krishna Watermarks */}
      <KrishnaWatermark position="top-right" size="medium" opacity={0.05} />
      <KrishnaWatermark position="center" size="large" opacity={0.03} />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`investment-card group relative ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Outer Glow Ring */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${highlight.gradient} rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500`} />
              
              {/* Card Container */}
              <div className="relative h-full bg-gradient-to-br from-card via-sacred-white/30 to-card backdrop-blur-xl rounded-3xl p-10 border-2 border-border/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_24px_80px_hsl(40_90%_55%/0.3)] hover:border-saffron-gold/80 overflow-hidden">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Corner Decorative Element */}
                <div className="absolute top-4 right-4 w-10 h-10 opacity-20 group-hover:opacity-40 transition-all group-hover:rotate-180 duration-700">
                  <svg viewBox="0 0 40 40" className={`w-full h-full bg-gradient-to-br ${highlight.gradient} rounded-full p-2`}>
                    <path d="M20 5 L22 15 L32 15 L23 21 L27 31 L20 25 L13 31 L17 21 L8 15 L18 15 Z" fill="white" />
                  </svg>
                </div>

                <div className="relative">
                  <div className="text-7xl mb-6 transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg">
                    {highlight.icon}
                  </div>
                  <div className={`text-4xl font-cinzel font-bold mb-4 bg-gradient-to-br ${highlight.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                    {highlight.value}
                  </div>
                  <h3 className="font-cinzel text-xl font-bold mb-4 text-krishna-blue">
                    {highlight.title}
                  </h3>
                  <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Bottom Glow Line */}
                  <div className={`mt-8 h-1.5 w-20 bg-gradient-to-r ${highlight.gradient} rounded-full group-hover:w-full transition-all duration-500 shadow-lg`} />
                </div>

                {/* Hover Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl animate-[shimmer_2s_ease-in-out_infinite]" />
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
