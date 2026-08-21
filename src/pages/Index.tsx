import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import StatsSection from "@/components/StatsSection";
import ActivationGrid from "@/components/ActivationGrid";
import HowIWorkSection from "@/components/HowIWorkSection";
import PointOfViewSection from "@/components/PointOfViewSection";
import ExperienceSection from "@/components/ExperienceSection";
import EndorsementsSection from "@/components/EndorsementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NavBar />
    <HeroSection />
    <LogoStrip />
    <StatsSection />
    <ActivationGrid />
    <HowIWorkSection />
    <PointOfViewSection />
    <ExperienceSection />
    <EndorsementsSection />
    <ContactSection />
  </main>
);

export default Index;
