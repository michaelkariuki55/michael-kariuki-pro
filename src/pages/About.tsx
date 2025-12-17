import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, MapPin, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import profileImage from "@/assets/michael-profile.jpg";

const skills = [
  {
    category: "HTML5",
    items: ["Semantic Markup", "Accessibility (WCAG)", "SEO Best Practices", "Forms & Validation"],
  },
  {
    category: "CSS3",
    items: ["Responsive Design", "Flexbox & Grid", "Animations", "CSS Variables"],
  },
  {
    category: "JavaScript",
    items: ["DOM Manipulation", "ES6+ Features", "API Integration", "Interactive UI"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "VS Code", "Browser DevTools", "Performance Optimization"],
  },
];

const experience = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    description: "Building custom websites and web applications for clients, focusing on clean code and responsive design.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Michael Kariuki | Web Developer</title>
        <meta
          name="description"
          content="Learn about Michael Kariuki, a web developer focused on building clean, responsive, and user-friendly websites using modern front-end technologies."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4">
                  About Me
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                  Building digital<br />
                  experiences with<br />
                  <span className="text-accent">precision</span>
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Nairobi, Kenya
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    Available for Hire
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-custom-xl bg-secondary">
                  <img
                    src={profileImage}
                    alt="Michael Kariuki"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-xl shadow-custom-lg border border-border">
                  <p className="font-display text-2xl font-semibold text-foreground">1</p>
                  <p className="text-sm text-muted-foreground">Year of Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeading label="Bio" title="My Story" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg text-muted-foreground"
              >
                <p className="text-lg leading-relaxed mb-6">
                  Michael Kariuki is a web developer focused on building clean, responsive, and 
                  user-friendly websites using modern front-end technologies. With a strong 
                  foundation in HTML, CSS, and JavaScript, he specializes in turning design 
                  concepts into functional, accessible digital experiences.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  He approaches every project with attention to detail, performance, and usability, 
                  ensuring websites not only look professional but also work seamlessly across devices. 
                  Michael is passionate about continuous learning, problem-solving, and delivering 
                  reliable solutions for clients and businesses.
                </p>
              </motion.div>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" download="Michael-Kariuki-CV.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading
              label="Expertise"
              title="Skills & Technologies"
              description="The tools and technologies I use to bring ideas to life."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading
              label="Career"
              title="Experience"
              description="My professional journey in web development."
            />

            <div className="max-w-2xl space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                  <span className="text-sm text-accent font-medium">{exp.period}</span>
                  <h3 className="font-semibold text-foreground text-lg mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;
