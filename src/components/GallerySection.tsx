import { useState } from "react";
import { LotusDivider } from "./LotusDivider";
import { JaliPattern } from "./JaliPattern";

const galleryVideos = [
  {
    id: 1,
    title: "Serene Landscapes",
    caption: "Peaceful surroundings with lush greenery",
    poster: "/api/placeholder/640/360",
    // url: "{GALLERY_VIDEO_1}"
  },
  {
    id: 2,
    title: "Modern Infrastructure",
    caption: "Premium amenities and facilities",
    poster: "/api/placeholder/640/360",
    // url: "{GALLERY_VIDEO_2}"
  },
  {
    id: 3,
    title: "Community Spaces",
    caption: "Vibrant gathering areas",
    poster: "/api/placeholder/640/360",
    // url: "{GALLERY_VIDEO_3}"
  },
];

export const GallerySection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoPlay = (id: number) => {
    setPlayingVideo(id);
  };

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-sandalwood-cream via-sacred-white to-background overflow-hidden">
      {/* Jali Pattern */}
      <JaliPattern opacity={0.04} className="text-peacock-teal" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block">
            Visual Journey
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-peacock-teal to-transparent" />
            </div>
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the beauty of Girraj Enclave
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryVideos.map((video) => (
            <div
              key={video.id}
              className="gallery-video group relative bg-card rounded-3xl overflow-hidden border-2 border-border/30 hover:border-peacock-teal/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_24px_60px_hsl(185_55%_45%/0.2)]"
            >
              {/* Peacock Feather Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-peacock-teal via-saffron-gold to-peacock-teal opacity-50" />
              
              <div className="relative aspect-video">
                {playingVideo === video.id ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    poster={video.poster}
                  >
                    <source src={`/placeholder-video-${video.id}.mp4`} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Lotus Ripple Play Button */}
                    <button
                      onClick={() => handleVideoPlay(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-krishna-blue/30 to-krishna-blue/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >
                      <div className="relative">
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 rounded-full bg-peacock-teal/30 animate-ping" />
                        <div className="absolute inset-0 rounded-full bg-saffron-gold/20 animate-ping" style={{ animationDelay: "150ms" }} />
                        <div className="relative w-20 h-20 bg-sacred-white rounded-full flex items-center justify-center shadow-2xl border-4 border-temple-gold/30">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-peacock-teal ml-1"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </>
                )}
              </div>

              <div className="p-8 relative">
                {/* Corner Decoration */}
                <div className="absolute bottom-3 right-3 w-8 h-8 opacity-10">
                  <svg viewBox="0 0 32 32" className="w-full h-full text-peacock-teal">
                    <path d="M16 2 L18 8 L24 8 L19 12 L21 18 L16 14 L11 18 L13 12 L8 8 L14 8 Z" fill="currentColor" />
                  </svg>
                </div>
                
                <h3 className="font-cinzel text-xl font-bold mb-2 text-krishna-blue">
                  {video.title}
                </h3>
                <p className="font-cormorant text-sm text-muted-foreground">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lotus Divider */}
        <LotusDivider variant="peacock" className="mt-20" />
      </div>
    </section>
  );
};
