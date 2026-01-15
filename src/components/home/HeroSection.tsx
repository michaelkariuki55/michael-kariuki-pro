import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/michael-profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1]"
            >
              Michael<br />
              <span className="text-accent">Kariuki</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              Web Developer building fast, responsive, and user-focused websites 
              that turn design concepts into accessible digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* 3D Push Button - Hire Me */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-white bg-[#6c5ce7] rounded-md shadow-[0px_5px_0px_0px_#a29bfe] transition-all duration-100 active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#a29bfe] hover:bg-[#5b4cdb]"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View Portfolio</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              <div>
                <p className="font-display text-3xl font-semibold text-foreground">1</p>
                <p className="text-sm text-muted-foreground">Year Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-foreground">1</p>
                <p className="text-sm text-muted-foreground">Project & Growing</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border-2 border-accent/10" />
              <div className="absolute inset-16 rounded-full bg-accent/5" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-custom-xl">
                  <img 
                    src={profileImage} 
                    alt="Michael Kariuki" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-0 px-4 py-2 bg-card rounded-lg shadow-custom-lg border border-border"
              >
                <span className="text-sm font-medium">HTML5</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-0 px-4 py-2 bg-card rounded-lg shadow-custom-lg border border-border"
              >
                <span className="text-sm font-medium">JavaScript</span>
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 right-8 px-4 py-2 bg-card rounded-lg shadow-custom-lg border border-border"
              >
                <span className="text-sm font-medium">CSS3</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
