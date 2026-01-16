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
          ? "bg-[#0a0a1a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(139,92,246,0.15)] border-b border-purple-500/20"
          : "bg-[#0a0a1a]/80 backdrop-blur-sm border-b border-purple-500/10"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Michael<span className="text-purple-400">.</span>
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
                    ? "border-purple-400 text-purple-400"
                    : "border-purple-500/40"
                }`}
              >
                {/* Skew background effects */}
                <span className="absolute top-0 -left-[10px] w-0 h-full bg-purple-900/80 skew-x-[15deg] transition-all duration-500 -z-[1] group-hover:w-[58%]" />
                <span className="absolute top-0 -right-[10px] w-0 h-full bg-purple-700/80 skew-x-[15deg] transition-all duration-500 -z-[1] group-hover:w-[58%]" />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) 
                    ? "text-purple-400" 
                    : "text-gray-200 group-hover:text-white"
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
              className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-purple-300" />
              )}
            </button>
            {/* 3D Push Button - Hire Me */}
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 text-sm font-bold text-white bg-purple-600 rounded-md shadow-[0px_5px_0px_0px_#a855f7] transition-all duration-100 active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#a855f7] hover:bg-purple-500"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-purple-300" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
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
              className="md:hidden overflow-hidden bg-[#0a0a1a]/95 backdrop-blur-md border-t border-purple-500/20"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-5 py-2.5 text-sm font-bold text-white bg-purple-600 rounded-md shadow-[0px_5px_0px_0px_#a855f7] transition-all duration-100 active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#a855f7]"
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
