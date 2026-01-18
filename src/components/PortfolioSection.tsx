import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Garage Studio",
    description: "Professional automotive photography and content creation studio website with modern design and seamless user experience.",
    url: "http://garagestudio.ae/",
    category: "Creative Studio",
  },
  {
    title: "Studio 360",
    description: "Full-service photography and videography studio featuring immersive 360° content creation capabilities.",
    url: "https://studio360.ae/",
    category: "Photography",
  },
  {
    title: "PhotoPoint",
    description: "Premium photography services platform showcasing professional portfolio and booking system integration.",
    url: "https://www.photopoint.ae/",
    category: "Photography",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work. We've helped businesses across various 
            industries establish their digital presence and automate their operations.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project preview */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
