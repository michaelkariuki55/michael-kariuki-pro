import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AuroraBackground } from "@/components/ui/starfall-portfolio-landing";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AuroraBackground />
      <Header />
      <main className="flex-1 pt-20 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
