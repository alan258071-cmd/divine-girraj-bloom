import { useEffect, useRef, useState } from "react";
import { MandalaBg } from "./MandalaBg";
import { JaliPattern } from "./JaliPattern";
import { LotusDivider } from "./LotusDivider";
import { KrishnaWatermark } from "./KrishnaWatermark";
import radhaKrishnaBg from "@/assets/radha-krishna-silhouette.jpg";

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
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-sacred-white via-sandalwood-cream to-background"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={radhaKrishnaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/20 via-background/90 to-saffron-gold/20" />
      </div>

      {/* Jali Pattern */}
      <JaliPattern opacity={0.05} className="text-peacock-teal" />

      {/* Mandala Background */}
      <MandalaBg className="opacity-[0.02]" animate={true} />

      {/* Krishna Watermarks */}
      <KrishnaWatermark position="top-right" size="medium" opacity={0.06} />
      <KrishnaWatermark position="bottom-left" size="large" opacity={0.04} />

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path d="M64 20 L70 50 L100 50 L75 70 L85 100 L64 80 L43 100 L53 70 L28 50 L58 50 Z" fill="currentColor" className="text-saffron-gold" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 160 160" className="w-full h-full rotate-45">
          <circle cx="80" cy="80" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-peacock-teal" />
          <circle cx="80" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-saffron-gold" />
          <circle cx="80" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-peacock-teal" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Enhanced Design */}
          <div className="text-center mb-20">
            <h2
              className={`font-cinzel text-5xl md:text-7xl font-bold mb-8 text-krishna-blue relative inline-block ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
            >
              <span className="relative">
                Rooted in Community
                <br />
                <span className="bg-gradient-to-r from-peacock-teal via-temple-gold to-saffron-gold bg-clip-text text-transparent">
                  Built for Life
                </span>
                {/* Animated Underline */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 w-full justify-center">
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-peacock-teal to-transparent" />
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-saffron-gold">
                    <path d="M12 2 L14 9 L21 9 L15 13 L17 20 L12 16 L7 20 L9 13 L3 9 L10 9 Z" fill="currentColor" />
                  </svg>
                  <div className="h-px w-32 bg-gradient-to-l from-transparent via-saffron-gold to-transparent" />
                </div>
              </span>
            </h2>
            <p
              className={`font-cormorant text-2xl text-muted-foreground mt-12 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "50ms" }}
            >
              A landmark township blending modern living with spiritual serenity
            </p>
          </div>

          {/* Enhanced Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Main Description Card */}
            <div
              className={`about-card group ${isVisible ? "scroll-reveal" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-full bg-gradient-to-br from-card via-sacred-white/50 to-card backdrop-blur-xl rounded-3xl p-10 border-2 border-peacock-teal/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_24px_80px_hsl(185_55%_45%/0.25)] overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 128 128" className="w-full h-full text-peacock-teal">
                    <ellipse cx="64" cy="64" rx="48" ry="60" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="text-6xl mb-6">🏘️</div>
                  <h3 className="font-cinzel text-2xl font-bold text-krishna-blue mb-4">Premium Township</h3>
                  <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                    Spread across prime land on the <span className="text-krishna-blue font-bold">Mathura–Goverdhan Highway</span>, 
                    offering well-planned community layout, future expansion potential, and long-term value appreciation.
                  </p>
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-peacock-teal to-saffron-gold rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Premium Features Card */}
            <div
              className={`about-card group ${isVisible ? "scroll-reveal" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative h-full bg-gradient-to-br from-saffron-gold/10 via-card to-peacock-teal/10 backdrop-blur-xl rounded-3xl p-10 border-2 border-saffron-gold/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_24px_80px_hsl(40_90%_55%/0.25)] overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 128 128" className="w-full h-full text-saffron-gold">
                    <path d="M64 10 L72 40 L102 40 L77 60 L87 90 L64 70 L41 90 L51 60 L26 40 L56 40 Z" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="text-6xl mb-6">🏛️</div>
                  <h3 className="font-cinzel text-2xl font-bold text-krishna-blue mb-4">World-Class Living</h3>
                  <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                    Designed as a <span className="text-peacock-teal font-bold">premium gated township</span> with world-class 
                    infrastructure, contemporary design, and a perfect blend of luxury, convenience, and recreation.
                  </p>
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-saffron-gold to-peacock-teal rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Location Highlights - Full Width Card */}
          <div
            className={`about-card ${isVisible ? "scroll-reveal" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative bg-gradient-to-br from-peacock-teal/5 via-card to-saffron-gold/5 backdrop-blur-xl rounded-3xl p-12 border-2 border-peacock-teal/30 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="location-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" className="text-peacock-teal" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#location-grid)" />
                </svg>
              </div>

              <div className="relative">
                <div className="text-center mb-10">
                  <div className="text-7xl mb-4">📍</div>
                  <h3 className="font-cinzel text-4xl font-bold mb-4 bg-gradient-to-r from-krishna-blue via-peacock-teal to-saffron-gold bg-clip-text text-transparent">
                    The Pinnacle of Private Living
                  </h3>
                  <p className="font-cormorant text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    Strategically located at <span className="text-krishna-blue font-bold">Jamuna Vata Chauraha on Mathura Road</span>, 
                    with seamless access to Mathura, Vrindavan, Danghati, Goverdhan, schools, hospitals, malls, markets, and major temples.
                  </p>
                </div>
                
                {/* Connectivity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="connectivity-card group relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-peacock-teal to-saffron-gold rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity" />
                    <div className="relative bg-sacred-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-peacock-teal/30 transition-all duration-300 hover:scale-105 hover:border-peacock-teal/60">
                      <div className="text-6xl mb-4">🛣️</div>
                      <h4 className="font-cinzel text-xl font-bold text-krishna-blue mb-3">Highway Access</h4>
                      <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                        Direct connectivity via Mathura–Goverdhan Highway
                      </p>
                    </div>
                  </div>
                  
                  <div className="connectivity-card group relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-saffron-gold to-peacock-teal rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity" />
                    <div className="relative bg-sacred-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-saffron-gold/30 transition-all duration-300 hover:scale-105 hover:border-saffron-gold/60">
                      <div className="text-6xl mb-4">🚗</div>
                      <h4 className="font-cinzel text-xl font-bold text-krishna-blue mb-3">Smooth Roads</h4>
                      <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                        Well-maintained road connectivity throughout
                      </p>
                    </div>
                  </div>
                  
                  <div className="connectivity-card group relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-peacock-teal to-saffron-gold rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity" />
                    <div className="relative bg-sacred-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-peacock-teal/30 transition-all duration-300 hover:scale-105 hover:border-peacock-teal/60">
                      <div className="text-6xl mb-4">🕉️</div>
                      <h4 className="font-cinzel text-xl font-bold text-krishna-blue mb-3">Spiritual Hub</h4>
                      <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                        Modern living with spiritual ambience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lotus Divider */}
          <LotusDivider variant="gradient" className="mt-20" />
        </div>
      </div>
    </section>
  );
};