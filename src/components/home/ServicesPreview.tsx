import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building modern, responsive websites using HTML5, CSS3, and JavaScript with clean, maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating websites that look and function perfectly across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Improving website performance, loading speed, and overall user experience.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing website updates, bug fixes, and technical support to keep your site running smoothly.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <SectionHeading
          label="What I Do"
          title="Services"
          description="Professional web development services tailored to your needs."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
