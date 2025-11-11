import { useEffect, useRef, useState } from "react";
import { JaliPattern } from "./JaliPattern";
import { LotusDivider } from "./LotusDivider";

const amenities = [
  {
    title: "Temple Architecture",
    description: "Inspired by sacred Vrindavan temples",
    icon: "🕉️",
  },
  {
    title: "Landscaped Gardens",
    description: "Tulsi gardens and meditation spaces",
    icon: "🌿",
  },
  {
    title: "Premium Infrastructure",
    description: "Underground utilities, wide roads",
    icon: "🏛️",
  },
  {
    title: "Gated Security",
    description: "24/7 surveillance and controlled access",
    icon: "🔒",
  },
  {
    title: "Community Center",
    description: "Satsang hall and gathering spaces",
    icon: "🏡",
  },
  {
    title: "Water Features",
    description: "Fountains and sacred water elements",
    icon: "💧",
  },
];

export const AmenitiesSection = () => {
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
      id="amenities"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-sandalwood-cream"
    >
      {/* Jali Pattern */}
      <JaliPattern opacity={0.05} />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-peacock-teal">
          <circle cx="0" cy="0" r="180" fill="currentColor" opacity="0.3" />
          <circle cx="0" cy="0" r="120" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-saffron-gold">
          <circle cx="200" cy="200" r="180" fill="currentColor" opacity="0.3" />
          <circle cx="200" cy="200" r="120" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2
            className={`section-header font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            Divine Amenities
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-temple-gold" />
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-temple-gold">
                <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.3" />
                <circle cx="8" cy="8" r="3" fill="currentColor" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-temple-gold" />
            </div>
          </h2>
          <p
            className={`font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Experience world-class facilities designed for spiritual and comfortable living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`amenity-card group relative bg-card rounded-2xl p-10 border-2 border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_hsl(215_65%_25%/0.15)] hover:border-peacock-teal/50 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 60}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-peacock-teal/5 to-saffron-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Ornament */}
              <div className="absolute top-3 right-3 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-full h-full text-temple-gold">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
                  <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.5" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="relative">
                <div className="text-6xl mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 filter drop-shadow-lg">
                  {amenity.icon}
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-3 text-krishna-blue">
                  {amenity.title}
                </h3>
                <p className="font-cormorant text-base text-muted-foreground leading-relaxed">{amenity.description}</p>

                {/* Peacock Eye-Spot Check */}
                <div className="mt-6 flex items-center gap-3 text-peacock-teal text-sm font-semibold">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                  >
                    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
                    <circle cx="10" cy="10" r="6" fill="currentColor" opacity="0.3" />
                    <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.5" />
                    <path
                      d="M6 10l2.5 2.5 5.5-5.5"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-cormorant">Premium Feature</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lotus Divider */}
        <LotusDivider variant="gradient" className="mt-16" />
      </div>
    </section>
  );
};
