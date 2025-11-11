import { useEffect, useState } from "react";

export const SectionTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState("");

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute("href");
        
        if (href && href !== "#") {
          setTargetSection(href);
          setIsTransitioning(true);

          // Fade in overlay
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300);

          // Fade out overlay after scroll starts
          setTimeout(() => {
            setIsTransitioning(false);
          }, 800);
        }
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <>
      {/* Transition Overlay */}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-krishna-blue/30 via-peacock-teal/20 to-saffron-gold/30 backdrop-blur-sm" />
        
        {/* Animated Mandala Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`transition-all duration-700 ${isTransitioning ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            <svg width="120" height="120" viewBox="0 0 120 120" className="animate-spin" style={{ animationDuration: "3s" }}>
              {/* Outer Ring */}
              <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(40 90% 55%)" strokeWidth="2" opacity="0.4" />
              <circle cx="60" cy="60" r="40" fill="none" stroke="hsl(185 55% 45%)" strokeWidth="1" opacity="0.3" />
              
              {/* Inner Pattern */}
              <path d="M60 10 L65 35 L90 35 L70 50 L75 75 L60 60 L45 75 L50 50 L30 35 L55 35 Z" fill="hsl(40 90% 55%)" opacity="0.6" />
              
              {/* Center Om */}
              <text x="60" y="70" fontSize="24" textAnchor="middle" fill="hsl(215 65% 25%)" opacity="0.8" fontFamily="serif" fontWeight="bold">ॐ</text>
            </svg>
          </div>
        </div>

        {/* Peacock Feather Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${
                isTransitioning ? "opacity-60 translate-y-0" : "opacity-0 -translate-y-20"
              }`}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <ellipse cx="20" cy="20" rx="15" ry="20" fill="hsl(185 55% 45%)" opacity="0.3" />
                <ellipse cx="20" cy="20" rx="10" ry="13" fill="hsl(40 90% 55%)" opacity="0.4" />
                <circle cx="20" cy="20" r="5" fill="hsl(215 65% 25%)" opacity="0.5" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
