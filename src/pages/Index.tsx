import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import StatsSection from "@/components/StatsSection";
import ActivationGrid from "@/components/ActivationGrid";
import HowIWorkSection from "@/components/HowIWorkSection";
import PointOfViewSection from "@/components/PointOfViewSection";
import PressStrip from "@/components/PressStrip";
import EndorsementsSection from "@/components/EndorsementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NavBar />
    <HeroSection />
    <LogoStrip />
    <div className="stripe-rule w-full" role="presentation" aria-hidden="true" />
    <StatsSection />

    <ActivationGrid />
    <HowIWorkSection />
    <PointOfViewSection />
    <PressStrip />
    <EndorsementsSection />
    <ContactSection />
  </main>
);

export default Index;
