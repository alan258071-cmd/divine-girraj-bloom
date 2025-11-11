import { useState, useRef, useEffect } from "react";

export const DevotionalSoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for ambient flute sound
    // In production, replace with actual audio file
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (soundEnabled) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      // Note: Actual audio playback will fail without a real audio source
      // This is just the UI/UX framework
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
      setPlaying(true);
    }
    setSoundEnabled(!soundEnabled);
  };

  const playBellSound = () => {
    if (!soundEnabled) return;
    // Play bell chime sound on click
    const bellSound = new Audio();
    bellSound.volume = 0.5;
    bellSound.play().catch(() => {});
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="group relative bg-gradient-to-br from-saffron-gold to-temple-gold text-krishna-blue w-16 h-16 rounded-full shadow-[0_8px_32px_hsl(40_90%_55%/0.4)] hover:shadow-[0_12px_48px_hsl(40_90%_55%/0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
        aria-label={soundEnabled ? "Disable devotional sounds" : "Enable devotional sounds"}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-temple-gold to-saffron-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative z-10">
          {soundEnabled ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          )}
        </div>

        {/* Pulse Effect when playing */}
        {playing && (
          <>
            <div className="absolute inset-0 rounded-full bg-saffron-gold/30 animate-ping" />
            <div className="absolute inset-0 rounded-full bg-temple-gold/20 animate-pulse" />
          </>
        )}
      </button>

      {/* Bell Button (appears when sound is enabled) */}
      {soundEnabled && (
        <button
          onClick={playBellSound}
          className="group relative bg-gradient-to-br from-peacock-teal to-krishna-blue text-sacred-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
          aria-label="Ring temple bell"
          style={{ animation: "bell-swing 3s ease-in-out infinite" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-1.1 0-2 .9-2 2v.17c-2.36.46-4 2.47-4 4.83v7l-2 2v1h16v-1l-2-2V9c0-2.36-1.64-4.37-4-4.83V4c0-1.1-.9-2-2-2zm0 18c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
          </svg>
          
          {/* Sound waves */}
          <div className="absolute -inset-2 pointer-events-none">
            <div className="absolute inset-0 border-2 border-peacock-teal rounded-full opacity-0 animate-ping" />
          </div>
        </button>
      )}

      {/* Tooltip */}
      {!soundEnabled && (
        <div className="absolute bottom-20 right-0 bg-sacred-white/95 backdrop-blur-sm text-krishna-blue px-4 py-2 rounded-lg shadow-lg text-sm font-cormorant whitespace-nowrap animate-fade-in pointer-events-none">
          Enable devotional sounds 🔔
        </div>
      )}
    </div>
  );
};
