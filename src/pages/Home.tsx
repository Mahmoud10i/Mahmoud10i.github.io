import React from "react";
import { Hero } from "../components/home/Hero";
import { TrustPositioning } from "../components/home/TrustPositioning";
import { FeaturesGrid } from "../components/home/FeaturesGrid";
import { OfflineSection } from "../components/home/OfflineSection";
import { HowItWorks } from "../components/home/HowItWorks";
import { ProductShowcase } from "../components/home/ProductShowcase";
import { ProductPhilosophy } from "../components/home/ProductPhilosophy";
import { FAQSection } from "../components/home/FAQSection";
import { FinalCTA } from "../components/home/FinalCTA";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Section B: Hero Section & Mockup */}
      <Hero
        onExploreFeatures={() => onNavigate("/features")}
        onContactClick={() => onNavigate("/contact")}
      />

      {/* Section C: Trust and Positioning */}
      <TrustPositioning onExplore={() => onNavigate("/features")} />

      {/* Section D: Features Overview Grid (10 modules) */}
      <FeaturesGrid
        onModuleClick={(moduleId) => {
          onNavigate(`/features#${moduleId}`);
        }}
      />

      {/* Section E: Offline-First Operation Architecture */}
      <OfflineSection />

      {/* Section F: How It Works (01, 02, 03) */}
      <HowItWorks />

      {/* Section G: Interactive Product Modules Showcase Tabs */}
      <ProductShowcase onExploreFeatures={() => onNavigate("/features")} />

      {/* Section H: Product Philosophy */}
      <ProductPhilosophy />

      {/* Section I: FAQ Accordion */}
      <FAQSection onContactClick={() => onNavigate("/contact")} />

      {/* Section J: Final CTA */}
      <FinalCTA
        onContactClick={() => onNavigate("/contact")}
        onFeaturesClick={() => onNavigate("/features")}
      />
    </div>
  );
};
