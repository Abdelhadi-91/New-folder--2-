import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import VisionSection from "@/components/VisionSection";
import ComponentsSection from "@/components/ComponentsSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <LanguageSwitcher />
        <HeroSection />
        <ProblemSolutionSection />
        <VisionSection />
        <ComponentsSection />
        <WorkflowSection />
        <FeaturesSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
