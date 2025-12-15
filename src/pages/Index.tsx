import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Michael Kariuki | Web Developer - HTML, CSS, JavaScript</title>
        <meta
          name="description"
          content="Michael Kariuki is a web developer specializing in building fast, responsive, and user-focused websites using HTML, CSS, and JavaScript."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <FeaturedProjects />
        <ServicesPreview />
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
