import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="py-24 bg-sacred-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-krishna-blue relative inline-block ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            Flexible Payment Plan
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-temple-gold to-transparent" />
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Own your dream plot with our easy installment options
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-border">
            <div
              className="h-full bg-gradient-to-r from-peacock-teal to-saffron-gold transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-step flex flex-col items-center ${
                  isVisible ? "scroll-reveal" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Chip */}
                <div
                  className="w-24 h-24 rounded-full bg-card border-4 border-peacock-teal flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_8px_24px_hsl(185_55%_45%/0.3)]"
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  <span className="text-2xl font-bold text-peacock-teal">
                    {milestone.percentage}
                  </span>
                </div>

                {/* Label */}
                <span className="text-sm font-semibold text-krishna-blue">
                  {milestone.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-card border-4 border-peacock-teal flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-peacock-teal">
                  {milestone.percentage}
                </span>
              </div>
              <div>
                <span className="font-semibold text-krishna-blue">
                  {milestone.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "scroll-reveal" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <button className="bg-gradient-to-r from-peacock-teal to-krishna-blue text-sacred-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_hsl(185_55%_45%/0.4)]">
            Get Detailed Payment Schedule
          </button>
        </div>
      </div>
    </section>
  );
};
