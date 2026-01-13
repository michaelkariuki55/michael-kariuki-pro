import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(Date.now());

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (trimmed.name.length < 2) {
      toast({
        title: "Name too short",
        description: "Please enter at least 2 characters.",
        variant: "destructive",
      });
      return;
    }

    if (trimmed.subject.length < 3) {
      toast({
        title: "Subject too short",
        description: "Please enter at least 3 characters.",
        variant: "destructive",
      });
      return;
    }

    if (trimmed.message.length < 10) {
      toast({
        title: "Message too short",
        description: "Please enter at least 10 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-message", {
        body: {
          ...trimmed,
          honeypot: formData.honeypot,
          submissionTime: formLoadTime,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      setFormLoadTime(Date.now()); // Reset form load time after successful submit
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or use WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Michael, my name is ${formData.name || '[Your Name]'}.\n\nSubject: ${formData.subject || '[Subject]'}\n\n${formData.message || '[Your Message]'}`
    );
    window.open(`https://wa.me/254717023526?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "michaelkariuki281@gmail.com",
      href: "mailto:michaelkariuki281@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0717 023 526",
      href: "tel:+254717023526",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Michael Kariuki | Hire a Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Michael Kariuki for web development projects. Available for freelance work and collaborations."
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
                Contact
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Let's Work<br />
                <span className="text-accent">Together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? I'd love to hear about it. Send me a message 
                and let's create something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance projects. If you have a project 
                    that needs coding, I'm your guy.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="relative p-8 md:p-10 bg-card rounded-2xl border border-border"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>

                  {/* Hidden honeypot field - bots will fill this */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <Input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2 mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      minLength={10}
                      required
                    />
                    <p className="text-sm text-muted-foreground">Minimum 10 characters.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send via Email
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white border-green-600"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
