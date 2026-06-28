import { LandingHeader } from "@/components/layout/LandingHeader";
import { landingNavItems } from "../constants";
import { FeatureSection } from "../modules/FeatureSection";
import { FinalCtaSection } from "../modules/FinalCtaSection";
import { HeroSection } from "../modules/HeroSection";
import { HomeFooter } from "../modules/HomeFooter";
import { HowItWorksSection } from "../modules/HowItWorksSection";
import { SupportSection } from "../modules/SupportSection";

export function HomeView() {
  return (
    <main
      id="beranda"
      className="min-h-screen overflow-hidden bg-warm-bg text-warm-ink"
    >
      <LandingHeader
        ctaHref="/register"
        ctaLabel="Coba Cermin"
        navItems={landingNavItems}
      />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <SupportSection />
      <FinalCtaSection />
      <HomeFooter />
    </main>
  );
}
