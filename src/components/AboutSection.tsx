import { useEffect, useRef, useState } from "react";
import { LotusDivider } from "./LotusDivider";

export const AboutSection = () => {
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
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-sandalwood-cream to-background overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-peacock-teal" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2
              className={`font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
            >
              Rooted in Community. Built for Life.
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-temple-gold" />
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-temple-gold">
                  <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" fill="currentColor" />
                </svg>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-temple-gold" />
              </div>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
            <div
              className={`${isVisible ? "scroll-reveal" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="bg-card rounded-3xl p-10 border-2 border-border/30 shadow-[0_12px_40px_hsl(215_65%_25%/0.08)] hover:shadow-[0_16px_48px_hsl(215_65%_25%/0.12)] transition-all duration-500">
                <h3 className="font-cinzel text-2xl font-bold mb-4 text-krishna-blue">
                  The Pinnacle of Private Living
                </h3>
                <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                  Spread across prime land on the <strong>Mathura–Goverdhan Highway</strong>, Girraj Enclave is a landmark township that blends modern infrastructure, security, and spiritual serenity.
                </p>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="font-cormorant text-base text-muted-foreground">
                    Strategically located at <strong>Jamuna Vata Chauraha</strong> with seamless access to Mathura, Vrindavan, Danghati, and Goverdhan.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`${isVisible ? "scroll-reveal" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="space-y-6">
                {/* Feature Box 1 */}
                <div className="bg-gradient-to-br from-peacock-teal/10 to-krishna-blue/5 rounded-2xl p-8 border border-peacock-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-peacock-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-peacock-teal">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-lg font-bold mb-2 text-krishna-blue">Prime Location</h4>
                      <p className="font-cormorant text-base text-muted-foreground">
                        Direct access to major temples, schools, hospitals, and shopping centers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Box 2 */}
                <div className="bg-gradient-to-br from-saffron-gold/10 to-temple-gold/5 rounded-2xl p-8 border border-saffron-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-saffron-gold">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-lg font-bold mb-2 text-krishna-blue">Future Growth</h4>
                      <p className="font-cormorant text-base text-muted-foreground">
                        MVDA approval in process with rapidly increasing property values
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Description */}
          <div
            className={`bg-gradient-to-br from-sacred-white to-card rounded-3xl p-10 border-2 border-border/30 shadow-lg ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <p className="font-cormorant text-xl text-center text-krishna-blue leading-relaxed">
              Designed as a <strong>premium gated township</strong>, residents enjoy world-class infrastructure, 
              contemporary design elements, and a blend of <strong>luxury, convenience, and recreation</strong> within 
              a secure environment — offering potential for future expansion and long-term value appreciation.
            </p>
          </div>
        </div>

        {/* Lotus Divider */}
        <LotusDivider variant="gradient" className="mt-20" />
      </div>
    </section>
  );
};
