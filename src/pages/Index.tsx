
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GamesSection } from "@/components/games-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="relative min-h-screen bg-zinovr-background text-zinovr-text overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <GamesSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
