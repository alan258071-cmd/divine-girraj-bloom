import { useEffect, useRef, useState } from "react";
import { LotusDivider } from "./LotusDivider";

const milestones = [
  { label: "Booking", percentage: "10%" },
  { label: "30 Days", percentage: "20%" },
  { label: "60 Days", percentage: "20%" },
  { label: "90 Days", percentage: "25%" },
  { label: "On Possession", percentage: "25%" },
];

export const PaymentTimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress line
          setTimeout(() => {
            setProgress(100);
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-sacred-white via-sandalwood-cream to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="timeline-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="currentColor" className="text-peacock-teal" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-24">
          <h2
            className={`font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            Flexible Payment Plan
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-temple-gold" />
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-temple-gold">
                <circle cx="10" cy="10" r="3" fill="currentColor" />
                <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-temple-gold" />
            </div>
          </h2>
          <p
            className={`font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Own your dream plot with our easy installment options
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative mb-16">
          {/* Progress Line Container */}
          <div className="absolute top-16 left-0 right-0 h-2 bg-border/30 rounded-full overflow-hidden">
            {/* Animated Progress */}
            <div
              className="h-full bg-gradient-to-r from-peacock-teal via-temple-gold to-saffron-gold transition-all duration-1500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
            </div>
          </div>

          <div className="flex justify-between relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-step flex flex-col items-center ${
                  isVisible ? "scroll-reveal" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Chip Container with Glow */}
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-peacock-teal to-saffron-gold rounded-full opacity-30 blur-lg" />
                  
                  {/* Chip */}
                  <div
                    className="relative w-32 h-32 rounded-full bg-gradient-to-br from-card to-sacred-white border-4 border-peacock-teal flex flex-col items-center justify-center mb-6 transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-[0_16px_48px_hsl(185_55%_45%/0.4)] hover:border-saffron-gold overflow-hidden"
                    style={{
                      transitionDelay: `${(index + 1) * 100}ms`,
                      transform: isVisible ? "scale(1)" : "scale(0.8)",
                    }}
                  >
                    {/* Inner Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <circle cx="64" cy="64" r="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-peacock-teal" />
                        <circle cx="64" cy="64" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-saffron-gold" />
                      </svg>
                    </div>
                    
                    <span className="relative font-cinzel text-3xl font-bold bg-gradient-to-br from-peacock-teal to-krishna-blue bg-clip-text text-transparent">
                      {milestone.percentage}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <span className="font-cormorant text-base font-bold text-krishna-blue">
                  {milestone.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-peacock-teal to-saffron-gold rounded-full opacity-40 blur-md" />
                <div className="relative w-20 h-20 rounded-full bg-card border-4 border-peacock-teal flex items-center justify-center flex-shrink-0">
                  <span className="font-cinzel text-lg font-bold text-peacock-teal">
                    {milestone.percentage}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-cormorant text-lg font-bold text-krishna-blue">
                  {milestone.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center ${
            isVisible ? "scroll-reveal" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <button className="group relative bg-gradient-to-br from-peacock-teal via-krishna-blue to-peacock-teal text-sacred-white px-12 py-5 rounded-full font-cinzel font-bold text-lg transition-all duration-500 hover:scale-110 shadow-[0_12px_48px_hsl(185_55%_45%/0.4)] hover:shadow-[0_20px_64px_hsl(185_55%_45%/0.6)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
              </svg>
              Get Detailed Payment Schedule
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-krishna-blue to-peacock-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Lotus Divider */}
        <LotusDivider variant="gradient" className="mt-24" />
      </div>
    </section>
  );
};
