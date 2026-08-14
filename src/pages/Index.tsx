import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import StatsSection from "@/components/StatsSection";
import ActivationGrid from "@/components/ActivationGrid";
import WritingSection from "@/components/WritingSection";
import ExperienceSection from "@/components/ExperienceSection";
import EndorsementsSection from "@/components/EndorsementsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NavBar />
    <HeroSection />
    <LogoStrip />
    <StatsSection />
    <ActivationGrid />
    <WritingSection />
    <ExperienceSection />
    <EndorsementsSection />
    <AboutSection />
    <ContactSection />
  </main>
);

export default Index;
