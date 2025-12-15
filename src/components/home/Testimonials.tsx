import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    content: "Michael delivered our website on time and exceeded our expectations. His attention to detail and clean code made the handoff seamless.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2,
    content: "Working with Michael was a pleasure. He understood our vision perfectly and created a website that truly represents our brand.",
    author: "David Chen",
    role: "Founder, Design Studio",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: 3,
    content: "The website Michael built for us has significantly improved our online presence. Professional, responsive, and user-friendly.",
    author: "Emily Williams",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Feedback from clients I've had the pleasure of working with."
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-card rounded-xl border border-border"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
