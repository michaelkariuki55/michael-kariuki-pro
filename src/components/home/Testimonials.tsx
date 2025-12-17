import { motion } from "framer-motion";
import { Sparkles, Rocket, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: 1,
    icon: Sparkles,
    title: "Quality Work",
    description: "I'm committed to delivering clean, well-structured code and pixel-perfect designs for every project.",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Fast Turnaround",
    description: "I understand the importance of deadlines and work efficiently to deliver your project on time.",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Clear Communication",
    description: "I keep you updated throughout the process and ensure your vision is brought to life.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          label="Why Work With Me"
          title="Your First Project Could Be Here"
          description="I'm excited to start my journey and build amazing websites for clients like you."
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-card rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to be my first client? Let's create something great together!
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
