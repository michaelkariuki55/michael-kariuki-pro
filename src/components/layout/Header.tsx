import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-custom-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-foreground">
              Michael<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - Skew hover effect */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative inline-block px-4 py-2 rounded-lg border overflow-hidden transition-all duration-500 z-[1] group ${
                  isActive(link.path)
                    ? "border-accent text-accent"
                    : "border-[#03045e] dark:border-accent/50"
                }`}
              >
                {/* Skew background effects */}
                <span className="absolute top-0 -left-[10px] w-0 h-full bg-[#240046] dark:bg-accent/80 skew-x-[15deg] transition-all duration-500 -z-[1] group-hover:w-[58%]" />
                <span className="absolute top-0 -right-[10px] w-0 h-full bg-[#5a189a] dark:bg-accent skew-x-[15deg] transition-all duration-500 -z-[1] group-hover:w-[58%]" />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) 
                    ? "text-accent" 
                    : "text-[#03045e] dark:text-foreground group-hover:text-[#e0aaff] dark:group-hover:text-white"
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            {/* 3D Push Button - Hire Me */}
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 text-sm font-bold text-white bg-[#6c5ce7] rounded-md shadow-[0px_5px_0px_0px_#a29bfe] transition-all duration-100 active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#a29bfe] hover:bg-[#5b4cdb]"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-accent bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-5 py-2.5 text-sm font-bold text-white bg-[#6c5ce7] rounded-md shadow-[0px_5px_0px_0px_#a29bfe] transition-all duration-100 active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#a29bfe]"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
