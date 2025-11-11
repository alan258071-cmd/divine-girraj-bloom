import { useEffect, useState } from "react";

interface OmSymbol {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export const FloatingOmSymbols = () => {
  const [symbols, setSymbols] = useState<OmSymbol[]>([]);

  useEffect(() => {
    const newSymbols: OmSymbol[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 32 + Math.random() * 32,
      opacity: 0.05 + Math.random() * 0.1,
    }));
    setSymbols(newSymbols);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute animate-float-up font-cinzel font-bold text-peacock-teal"
          style={{
            left: `${symbol.left}%`,
            bottom: "-10%",
            fontSize: `${symbol.size}px`,
            opacity: symbol.opacity,
            animationDelay: `${symbol.delay}s`,
            animationDuration: `${symbol.duration}s`,
          }}
        >
          ॐ
        </div>
      ))}
    </div>
  );
};
