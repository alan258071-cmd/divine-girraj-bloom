import { useState } from "react";

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
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-sacred-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-krishna-blue relative inline-block">
            Visual Journey
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-temple-gold to-transparent" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the beauty of Girraj Enclave
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryVideos.map((video) => (
            <div
              key={video.id}
              className="gallery-video group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-peacock-teal/50 transition-all duration-300"
            >
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Lotus Ripple Play Button */}
                    <button
                      onClick={() => handleVideoPlay(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-krishna-blue/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="relative">
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 rounded-full bg-peacock-teal/30 animate-ping" />
                        <div className="relative w-16 h-16 bg-sacred-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            width="24"
                            height="24"
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

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-krishna-blue">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
