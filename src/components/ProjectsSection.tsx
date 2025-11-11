import { useState } from "react";
import { JaliPattern } from "./JaliPattern";
import { KrishnaBlessings } from "./KrishnaBlessings";
import radhaKrishnaBg from "@/assets/radha-krishna-silhouette.jpg";

const projects = [
  {
    name: "Girraj Pathway",
    location: "Mathura-Vrindavan Region",
    status: "Completed & Delivered",
    image: "/api/placeholder/600/400",
    features: ["24×7 Security", "Wide Roads", "Legal Documentation"],
  },
  {
    name: "Goverdhan Lok",
    location: "Near Govardhan Hill",
    status: "Completed & Delivered",
    image: "/api/placeholder/600/400",
    features: ["Landscaped Spaces", "Premium Infrastructure", "Quality Delivery"],
  },
];

export const ProjectsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-sacred-white to-background overflow-hidden">
      {/* Radha Krishna Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={radhaKrishnaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sacred-white/90 via-background/80 to-background/90" />
      </div>

      {/* Jali Pattern */}
      <JaliPattern opacity={0.04} className="text-peacock-teal" />

      {/* Krishna Blessings */}
      <KrishnaBlessings />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-6 text-krishna-blue relative inline-block">
            Our Legacy of Excellence
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-temple-gold" />
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-temple-gold">
                <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" fill="currentColor" />
              </svg>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-temple-gold" />
            </div>
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record of quality development and timely delivery
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-peacock-teal/50 transition-all duration-500"
            >
              {/* Temple Arch Mask */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Arch Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-krishna-blue/80 to-transparent opacity-60" />
              </div>

              <div className="p-8 scroll-reveal">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-4 py-1.5 bg-peacock-teal/20 text-peacock-teal text-sm font-semibold rounded-full border border-peacock-teal/30">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-cinzel text-3xl font-bold mb-3 text-krishna-blue">
                  {project.name}
                </h3>
                <p className="font-cormorant text-lg text-muted-foreground mb-4">{project.location}</p>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-sandalwood-cream text-krishna-blue text-sm font-cormorant rounded-full border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Story Video */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden border-2 border-peacock-teal/30 relative">
            {/* Peacock Feather Border Motif */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-peacock-teal via-saffron-gold to-peacock-teal opacity-50" />

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-krishna-blue text-center">
                Our Story
              </h3>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {showVideo ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    poster="/api/placeholder/800/450"
                  >
                    {/* {DEVELOPER_STORY_VIDEO} */}
                    <source src="/placeholder-story.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img
                      src="/api/placeholder/800/450"
                      alt="Developer Story"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-krishna-blue/30 backdrop-blur-sm hover:bg-krishna-blue/40 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-sacred-white rounded-full flex items-center justify-center shadow-xl">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-peacock-teal ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </>
                )}
              </div>

              {/* Overlay Quote */}
              <div className="mt-6 p-8 bg-sandalwood-cream rounded-xl border-l-4 border-saffron-gold">
                <h4 className="font-cinzel text-xl font-bold mb-3 text-krishna-blue">
                  By Shrimanohar Real Estate
                </h4>
                <p className="font-cormorant text-lg italic text-krishna-blue mb-3">
                  "Building sacred communities with modern infrastructure, ensuring quality and timely delivery for every family."
                </p>
                <div className="pt-3 border-t border-border/30">
                  <p className="font-cormorant text-base text-muted-foreground">
                    Established developer with completed projects: <strong>Girraj Pathway</strong> and <strong>Goverdhan Lok</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
