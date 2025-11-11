import { useEffect, useState } from "react";

const quotes = [
  {
    sanskrit: "योगः कर्मसु कौशलम्",
    translation: "Yoga is skill in action",
    reference: "Bhagavad Gita 2.50",
  },
  {
    sanskrit: "सर्वे भवन्तु सुखिनः",
    translation: "May all beings be happy",
    reference: "Ancient Blessing",
  },
  {
    sanskrit: "वसुधैव कुटुम्बकम्",
    translation: "The world is one family",
    reference: "Maha Upanishad",
  },
  {
    sanskrit: "सत्यमेव जयते",
    translation: "Truth alone triumphs",
    reference: "Mundaka Upanishad",
  },
];

export const DivineQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const quote = quotes[currentQuote];

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-peacock-teal/10 via-saffron-gold/5 to-krishna-blue/10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="divine-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="50" y="50" fontSize="48" textAnchor="middle" fill="currentColor" className="text-saffron-gold">
                ॐ
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#divine-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sanskrit Quote */}
          <div
            className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-peacock-teal transition-all duration-1000"
            key={`sanskrit-${currentQuote}`}
            style={{ animation: "fade-in 1s ease-out" }}
          >
            {quote.sanskrit}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-saffron-gold" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-saffron-gold">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
              <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.4" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-saffron-gold" />
          </div>

          {/* Translation */}
          <div
            className="font-cormorant text-2xl md:text-3xl mb-4 text-krishna-blue transition-all duration-1000"
            key={`translation-${currentQuote}`}
            style={{ animation: "fade-in 1s ease-out 0.2s both" }}
          >
            "{quote.translation}"
          </div>

          {/* Reference */}
          <div
            className="font-cormorant text-lg text-muted-foreground italic transition-all duration-1000"
            key={`reference-${currentQuote}`}
            style={{ animation: "fade-in 1s ease-out 0.4s both" }}
          >
            — {quote.reference}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuote(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentQuote
                    ? "bg-saffron-gold w-8"
                    : "bg-border hover:bg-peacock-teal/30"
                }`}
                aria-label={`View quote ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
