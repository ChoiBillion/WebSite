import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ResearchInterests from "@/components/portfolio/ResearchInterests";
import Publications from "@/components/portfolio/Publications";
import Experience from "@/components/portfolio/Experience";
import Honors from "@/components/portfolio/Honors";
import TechnicalExpertise from "@/components/portfolio/TechnicalExpertise";
import Conferences from "@/components/portfolio/Conferences";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ResearchInterests />
        <Publications />
        <Experience />
        <Honors />
        <TechnicalExpertise />
        <Conferences />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Mingi Choi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
