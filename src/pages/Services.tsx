import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Zap,
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Palette,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: Code,
    title: "Front-End Website Development",
    description:
      "Custom website development using modern HTML5, CSS3, and JavaScript. Every line of code is clean, semantic, and optimized for performance.",
    features: [
      "Semantic HTML5 markup",
      "Modern CSS3 with Flexbox & Grid",
      "Interactive JavaScript features",
      "Clean, maintainable code",
      "Cross-browser compatibility",
    ],
    price: "From $500",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    description:
      "Mobile-first design approach ensuring your website looks and functions perfectly on all devices, from smartphones to desktop computers.",
    features: [
      "Mobile-first development",
      "Fluid layouts & flexible images",
      "Touch-friendly interfaces",
      "Optimized for all screen sizes",
      "Tested across devices",
    ],
    price: "From $400",
  },
  {
    icon: Globe,
    title: "Portfolio & Business Websites",
    description:
      "Professional websites designed to showcase your work, promote your business, and convert visitors into clients or customers.",
    features: [
      "Custom design tailored to brand",
      "Strategic content layout",
      "Contact forms & CTAs",
      "SEO-friendly structure",
      "Fast loading performance",
    ],
    price: "From $600",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description:
      "Improve your existing website's performance, speed, and user experience through code optimization and best practices.",
    features: [
      "Performance audits",
      "Image optimization",
      "Code minification",
      "Loading speed improvements",
      "Core Web Vitals optimization",
    ],
    price: "From $300",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Ongoing website maintenance, updates, and technical support to keep your site running smoothly and securely.",
    features: [
      "Regular content updates",
      "Bug fixes & troubleshooting",
      "Security monitoring",
      "Performance monitoring",
      "Priority support",
    ],
    price: "From $100/mo",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transform design mockups and wireframes into pixel-perfect, functional websites with attention to every detail.",
    features: [
      "Figma/XD to HTML/CSS",
      "Pixel-perfect implementation",
      "Smooth animations",
      "Accessible design standards",
      "Interactive prototypes",
    ],
    price: "From $400",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals, target audience, and project requirements.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating a detailed project roadmap with timelines and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with clean code and regular progress updates.",
  },
  {
    step: "04",
    title: "Review & Launch",
    description: "Testing, refinements, and successful deployment of your website.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Michael Kariuki | Web Development Services</title>
        <meta
          name="description"
          content="Professional web development services including front-end development, responsive design, website optimization, and maintenance by Michael Kariuki."
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
                Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Web Development<br />
                <span className="text-accent">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Professional web development services tailored to your needs. From simple 
                landing pages to complex web applications, I deliver solutions that work.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading
              label="What I Offer"
              title="Services & Expertise"
              description="Comprehensive web development services to help you succeed online."
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                  </div>

                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-accent">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading
              label="How I Work"
              title="My Process"
              description="A structured approach to ensure project success from start to finish."
              centered
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="inline-block font-display text-5xl font-bold text-accent/20 mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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

export default Services;
