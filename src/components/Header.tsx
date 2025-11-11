import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sacred-white/95 backdrop-blur-md border-b border-temple-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div
          id="site-logo"
          className="peacock-sheen animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          <div className="w-[220px] h-[64px] flex items-center justify-center bg-gradient-to-br from-krishna-blue via-peacock-teal to-krishna-blue rounded-xl text-sacred-white font-cinzel font-bold text-xl tracking-wider shadow-lg">
            {/* {LOGO_PLACEHOLDER} - Replace with actual logo */}
            <span className="relative">
              GIRRAJ ENCLAVE
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-gold to-transparent" />
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#amenities" className="devotional-link font-cormorant text-base font-semibold">
            Amenities
          </a>
          <a href="#investment" className="devotional-link font-cormorant text-base font-semibold">
            Investment
          </a>
          <a href="#gallery" className="devotional-link font-cormorant text-base font-semibold">
            Gallery
          </a>
          <a href="#projects" className="devotional-link font-cormorant text-base font-semibold">
            Projects
          </a>
          <a href="#contact" className="devotional-link font-cormorant text-base font-semibold">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="bg-gradient-to-br from-saffron-gold via-temple-gold to-saffron-gold text-krishna-blue px-8 py-3 rounded-full font-cinzel font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_hsl(40_90%_55%/0.5)] border border-temple-gold/20">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1 L9.5 5 L13.5 5 L10 7.5 L11.5 11.5 L8 9 L4.5 11.5 L6 7.5 L2.5 5 L6.5 5 Z" />
            </svg>
            Book Now
          </span>
        </button>
      </div>
    </header>
  );
};
