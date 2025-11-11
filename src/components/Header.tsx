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
          <div className="w-[220px] h-[64px] flex items-center justify-center bg-gradient-to-r from-krishna-blue to-peacock-teal rounded-lg text-sacred-white font-bold text-xl tracking-wide">
            {/* {LOGO_PLACEHOLDER} - Replace with actual logo */}
            GIRRAJ ENCLAVE
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#amenities" className="devotional-link text-sm font-medium">
            Amenities
          </a>
          <a href="#investment" className="devotional-link text-sm font-medium">
            Investment
          </a>
          <a href="#gallery" className="devotional-link text-sm font-medium">
            Gallery
          </a>
          <a href="#projects" className="devotional-link text-sm font-medium">
            Projects
          </a>
          <a href="#contact" className="devotional-link text-sm font-medium">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="bg-gradient-to-r from-saffron-gold to-temple-gold text-primary px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_hsl(40_90%_55%/0.4)]">
          Book Now
        </button>
      </div>
    </header>
  );
};
