import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ActivationGrid from "@/components/ActivationGrid";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NavBar />
    <HeroSection />
    <StatsSection />
    <ActivationGrid />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </main>
);

export default Index;
