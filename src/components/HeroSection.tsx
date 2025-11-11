import { FeatherParticle } from "./FeatherParticle";
import { JaliPattern } from "./JaliPattern";
import { MandalaBg } from "./MandalaBg";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Vrindavan Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-krishna-blue/40 via-transparent to-sandalwood-cream/60" />
      </div>

      {/* Jali Pattern Overlay */}
      <JaliPattern opacity={0.12} className="text-sacred-white" />

      {/* Mandala Background */}
      <MandalaBg animate />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-peacock-teal/20 via-transparent to-transparent" style={{
        background: "radial-gradient(circle at 50% 40%, hsl(185 55% 45% / 0.15), transparent 60%)"
      }} />

      {/* Temple Silhouettes (Parallax Layer) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.08] pointer-events-none">
        <svg
          viewBox="0 0 1920 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 256V180L100 140L200 160L300 120L400 140L500 100L600 130L700 90L800 120L900 80L1000 110L1100 70L1200 100L1300 60L1400 90L1500 50L1600 80L1700 40L1800 70L1900 30L1920 50V256H0Z"
            fill="currentColor"
            className="text-krishna-blue"
          />
        </svg>
      </div>

      {/* Peacock Feather Particles */}
      <div className="feather-particles absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FeatherParticle key={i} index={i} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Decorative Top Element */}
        <div className="flex justify-center mb-8 scroll-reveal" style={{ animationDelay: "50ms" }}>
          <div className="flex items-center gap-4 opacity-60">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-temple-gold" />
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-temple-gold">
              <path d="M16 2 L18 8 L24 8 L19 12 L21 18 L16 14 L11 18 L13 12 L8 8 L14 8 Z" fill="currentColor" />
            </svg>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-temple-gold" />
          </div>
        </div>

        <h1
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 scroll-reveal text-shadow-lg"
          style={{ 
            animationDelay: "150ms",
            textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(215, 180, 115, 0.2)"
          }}
        >
          <span className="bg-gradient-to-r from-sacred-white via-temple-gold to-sacred-white bg-clip-text text-transparent drop-shadow-2xl">
            Girraj Enclave
          </span>
        </h1>

        {/* Tagline */}
        <div
          className="font-cormorant text-3xl md:text-4xl mb-4 text-sacred-white/95 font-semibold italic scroll-reveal"
          style={{ 
            animationDelay: "200ms",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)"
          }}
        >
          "Your Space. Your Peace."
        </div>

        <p
          className="font-cormorant text-xl md:text-3xl mb-8 text-sacred-white/95 max-w-3xl mx-auto scroll-reveal font-medium tracking-wide"
          style={{ 
            animationDelay: "250ms",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)"
          }}
        >
          125 Premium Residential Plots on Mathura–Goverdhan Highway
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-reveal"
          style={{ animationDelay: "350ms" }}
        >
          <button className="group relative bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold text-krishna-blue px-10 py-5 rounded-full font-cinzel font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_hsl(40_90%_55%/0.4)] hover:shadow-[0_16px_48px_hsl(40_90%_55%/0.6)]">
            <span className="relative z-10 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
              </svg>
              Book Your Plot Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-temple-gold to-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative bg-sacred-white/10 backdrop-blur-md border-2 border-sacred-white/40 text-sacred-white px-10 py-5 rounded-full font-cinzel font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-sacred-white/20 hover:border-sacred-white/60 peacock-sheen">
            <span className="relative z-10 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Download Brochure
            </span>
          </button>
        </div>

        {/* Pre-Launch Badge */}
        <div
          id="prelaunch-cta"
          className="mt-16 inline-flex items-center gap-4 bg-sacred-white/95 backdrop-blur-md px-8 py-4 rounded-full border-2 border-temple-gold/50 scroll-reveal breathe shadow-[0_8px_32px_hsl(40_90%_55%/0.3)]"
          style={{ animationDelay: "450ms" }}
        >
          <div className="relative">
            <span className="absolute inset-0 w-3 h-3 bg-saffron-gold rounded-full animate-ping" />
            <span className="relative block w-3 h-3 bg-saffron-gold rounded-full" />
          </div>
          <span className="font-cormorant text-base font-semibold text-krishna-blue tracking-wide">
            Pre-Booking Open • Only 125 Plots • MVDA Approval in Process
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-peacock-teal"
        >
          <path
            d="M12 5v14m0 0l-7-7m7 7l7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};
