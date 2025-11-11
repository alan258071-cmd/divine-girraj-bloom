import { FeatherParticle } from "./FeatherParticle";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        id="hero-video"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/api/placeholder/1920/1080"
      >
        {/* {HERO_VIDEO_URL} - Replace with actual video */}
        <source src="/placeholder-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sandalwood-cream/80 via-sandalwood-cream/60 to-sandalwood-cream/90" />

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
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 scroll-reveal bg-gradient-to-r from-krishna-blue via-peacock-teal to-krishna-blue bg-clip-text text-transparent"
          style={{ animationDelay: "150ms" }}
        >
          Experience Divine Living
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 text-krishna-blue/80 max-w-2xl mx-auto scroll-reveal"
          style={{ animationDelay: "250ms" }}
        >
          125 Premium Residential Plots in the Sacred Land of Vrindavan
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-reveal"
          style={{ animationDelay: "350ms" }}
        >
          <button className="group relative bg-gradient-to-r from-krishna-blue to-peacock-teal text-sacred-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-[0_12px_32px_hsl(215_65%_25%/0.3)]">
            <span className="relative z-10">Explore Plots</span>
            <div className="absolute inset-0 bg-gradient-to-r from-peacock-teal to-krishna-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="relative bg-transparent border-2 border-temple-gold text-krishna-blue px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-102 hover:border-saffron-gold peacock-sheen">
            <span className="relative z-10">Virtual Tour</span>
          </button>
        </div>

        {/* Pre-Launch Badge */}
        <div
          id="prelaunch-cta"
          className="mt-12 inline-flex items-center gap-3 bg-sacred-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-temple-gold/30 scroll-reveal breathe"
          style={{ animationDelay: "450ms" }}
        >
          <span className="w-2 h-2 bg-saffron-gold rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-krishna-blue">
            Pre-Launch Offer • Only 125 Plots Available
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
