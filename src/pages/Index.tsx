import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import CodingProgramSection from "@/components/CodingProgramSection";
import YouthForceSection from "@/components/YouthForceSection";
import SolarYouthSection from "@/components/SolarYouthSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import WrapAroundSection from "@/components/wrap-around/WrapAroundSection";
import ImpactSourcingSection from "@/components/ImpactSourcingSection";
import PartnershipSection from "@/components/PartnershipSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <CodingProgramSection />
      <YouthForceSection />
      <SolarYouthSection />
      <BeneficiariesSection />
      <div className="w-full h-px bg-border" />
      <WrapAroundSection />
      <ImpactSourcingSection />
      <PartnershipSection />
      <ContactSection />
    </main>
  );
};

export default Index;
