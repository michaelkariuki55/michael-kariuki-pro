import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Front-End Development",
    client: "TechRetail Co.",
    description: "A fully responsive e-commerce website featuring product catalogs, shopping cart functionality, and an optimized checkout experience.",
    objective: "Build a modern, fast-loading e-commerce platform that increases conversions and provides seamless mobile shopping experience.",
    role: "Front-End Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    timeline: "6 weeks",
    outcome: "40% increase in mobile conversions and 2s improvement in page load time.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    client: "DataViz Inc.",
    description: "Interactive analytics dashboard with real-time data visualization, custom charts, and intuitive navigation for business intelligence.",
    objective: "Create an intuitive dashboard that helps users understand complex data through visual representations.",
    role: "UI Developer",
    tools: ["JavaScript", "CSS Grid", "Responsive Design", "Chart Integration"],
    timeline: "8 weeks",
    outcome: "Reduced user onboarding time by 50% with improved UX design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "Business Website",
    client: "GlobalTech Solutions",
    description: "Complete website redesign emphasizing brand identity, accessibility, and modern design principles for improved user engagement.",
    objective: "Modernize the corporate web presence while maintaining brand consistency and improving accessibility.",
    role: "Lead Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
    timeline: "4 weeks",
    outcome: "60% improvement in accessibility score and 35% increase in page engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Personal Branding",
    client: "Creative Professional",
    description: "Elegant portfolio website showcasing creative work with smooth animations and gallery functionality.",
    objective: "Create a visually stunning portfolio that effectively showcases creative work and attracts potential clients.",
    role: "Full-Stack Developer",
    tools: ["HTML5", "CSS Animations", "JavaScript", "Performance Optimization"],
    timeline: "3 weeks",
    outcome: "Client received 3x more inquiries within first month of launch.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "Business Website",
    client: "Urban Bistro",
    description: "Modern restaurant website with online menu, reservation system, and integrated location services.",
    objective: "Increase online reservations and provide customers with an easy way to explore the menu.",
    role: "Web Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "Maps Integration"],
    timeline: "3 weeks",
    outcome: "Online reservations increased by 80% within two months.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Non-Profit Organization Site",
    category: "Non-Profit",
    client: "Community Foundation",
    description: "Accessible, easy-to-navigate website for a non-profit organization with donation integration and event management.",
    objective: "Create a platform that effectively communicates the organization's mission and facilitates online donations.",
    role: "Web Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "Accessibility Standards"],
    timeline: "5 weeks",
    outcome: "Online donations increased by 150% year-over-year.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    featured: false,
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Michael Kariuki | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Michael Kariuki's web development portfolio featuring responsive websites, web applications, and front-end projects."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Selected <span className="text-accent">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A curated collection of my work, showcasing clean code, thoughtful design, 
                and attention to detail across various industries and project types.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading
              label="Featured Work"
              title="Case Studies"
              description="In-depth look at selected projects with detailed process and outcomes."
            />

            <div className="space-y-24">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative group overflow-hidden rounded-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-4 rounded-full bg-accent text-accent-foreground">
                            <ExternalLink className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <span className="text-accent text-sm font-medium">{project.category}</span>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Objective</h4>
                          <p className="text-sm text-muted-foreground">{project.objective}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1">Client</h4>
                            <p className="text-sm text-muted-foreground">{project.client}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1">Role</h4>
                            <p className="text-sm text-muted-foreground">{project.role}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1">Timeline</h4>
                            <p className="text-sm text-muted-foreground">{project.timeline}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                            <p className="text-sm text-muted-foreground">{project.outcome}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading
              label="More Work"
              title="Other Projects"
              description="Additional projects showcasing versatility across different industries."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl border border-border overflow-hidden card-hover"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-accent text-sm font-medium">{project.category}</span>
                      <h3 className="font-semibold text-foreground text-lg mt-1 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Projects;
