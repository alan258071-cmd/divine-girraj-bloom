import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    title: "Prime Location",
    description: "Minutes from Banke Bihari Temple",
    value: "2 KM",
  },
  {
    title: "Plot Sizes",
    description: "Flexible options for every need",
    value: "100-500 sq.yd",
  },
  {
    title: "Appreciation",
    description: "Expected annual growth",
    value: "15-20%",
  },
  {
    title: "Payment Plan",
    description: "Easy installment options",
    value: "Flexible",
  },
];

export const InvestmentSection = () => {
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
      id="investment"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandalwood-cream via-background to-sacred-white" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`investment-card text-4xl md:text-5xl font-bold mb-4 text-krishna-blue relative inline-block gold-shimmer ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
          >
            Investment Highlights
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-saffron-gold to-transparent" />
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "scroll-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            A divine opportunity for spiritual and financial growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`investment-card group relative bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_hsl(40_90%_55%/0.2)] hover:border-saffron-gold/50 ${
                isVisible ? "scroll-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Feather Wipe Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/5 to-saffron-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-peacock-teal to-saffron-gold bg-clip-text text-transparent">
                  {highlight.value}
                </div>
                <h3 className="text-xl font-bold mb-2 text-krishna-blue">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "scroll-reveal" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <button className="bg-gradient-to-r from-saffron-gold to-temple-gold text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_hsl(40_90%_55%/0.5)]">
            Download Investment Brochure
          </button>
        </div>
      </div>
    </section>
  );
};
