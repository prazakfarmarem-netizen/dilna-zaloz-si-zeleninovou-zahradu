import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TargetSection from "@/components/TargetSection";
import ResultsSection from "@/components/ResultsSection";
import LearnSection from "@/components/LearnSection";

import TimelineSection from "@/components/TimelineSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import LocationSection from "@/components/LocationSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyButton from "@/components/StickyButton";

const Index = () => (
  <>
    <HeroSection />
    <ProblemSection />
    <TargetSection />
    <ResultsSection />
    <LearnSection />
    
    <TimelineSection />
    <DeliverablesSection />
    <LocationSection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <StickyButton />

    <footer className="py-8 px-5 text-center text-muted-foreground text-sm border-t border-border">
      <p>© 2026 Zahradní dílna. Všechna práva vyhrazena.</p>
    </footer>
  </>
);

export default Index;
