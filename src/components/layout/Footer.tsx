import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/michael-kariuki", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/unk.wn.ne.ke?mibextid=rS40aB7S9Ucbxw6v", label: "Facebook" },
    { icon: Mail, href: "mailto:hello@michaelkariuki.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-semibold">
                Michael<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Web Developer building fast, responsive, and user-focused websites.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              hello@michaelkariuki.com
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const isExternal = /^https?:\/\//.test(social.href);

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Michael Kariuki. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Designed & Developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
