import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Front-End Development",
    description: "A fully responsive e-commerce website with modern UI/UX, optimized for conversions and mobile users.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Interactive analytics dashboard featuring real-time data visualization and intuitive navigation.",
    tags: ["JavaScript", "Responsive Design", "API Integration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Business Website",
    description: "Professional corporate website with emphasis on brand identity, accessibility, and performance.",
    tags: ["HTML5", "CSS Grid", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="Explore a selection of my recent work, showcasing clean code and thoughtful design."
          />
          <Button asChild variant="outline" className="w-fit">
            <Link to="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to="/projects" className="block">
                <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-accent text-accent-foreground">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <span className="text-sm text-accent font-medium">{project.category}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
