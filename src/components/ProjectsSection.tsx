import { useState } from "react";
import { JaliPattern } from "./JaliPattern";
import { KrishnaBlessings } from "./KrishnaBlessings";
import radhaKrishnaBg from "@/assets/radha-krishna-silhouette.jpg";

const projects = [
  {
    name: "Girraj Pathway",
    location: "Mathura-Vrindavan Road",
    status: "Completed",
    image: "/api/placeholder/600/400",
  },
  {
    name: "Goverdhan Lok",
    location: "Near Govardhan Hill",
    status: "Completed",
    image: "/api/placeholder/600/400",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-krishna-blue relative inline-block">
            Completed Projects
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-temple-gold to-transparent" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A legacy of trust and excellence
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

              <div className="p-6 scroll-reveal">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-peacock-teal/20 text-peacock-teal text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-krishna-blue">
                  {project.name}
                </h3>
                <p className="text-muted-foreground">{project.location}</p>
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
              <div className="mt-6 p-6 bg-sandalwood-cream rounded-xl border-l-4 border-saffron-gold">
                <p className="text-lg italic text-krishna-blue">
                  "Building sacred spaces for devotional living, one plot at a time."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Founder, Girraj Developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
