import { useEffect, useRef, useState } from "react";

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
      className="relative py-24 overflow-hidden"
    >
      {/* Feather Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 128 128" className="w-full h-full text-peacock-teal feather-float">
          <ellipse cx="64" cy="48" rx="32" ry="40" fill="currentColor" opacity="0.3" />
          <path d="M64 80 Q60 100 64 128" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`section-header text-4xl md:text-5xl font-bold mb-4 text-krishna-blue relative inline-block ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            Divine Amenities
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-temple-gold to-transparent" />
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
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
              className={`amenity-card group bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_hsl(215_65%_25%/0.12)] hover:border-peacock-teal/30 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 60}ms` }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-krishna-blue">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground">{amenity.description}</p>

              {/* Peacock Eye-Spot Check */}
              <div className="mt-4 flex items-center gap-2 text-peacock-teal text-sm font-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="transition-all duration-180 group-hover:scale-110"
                >
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.2" />
                  <circle cx="8" cy="8" r="4" fill="currentColor" opacity="0.4" />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Included</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
