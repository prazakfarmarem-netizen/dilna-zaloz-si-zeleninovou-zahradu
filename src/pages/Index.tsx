import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
import TargetSection from "@/components/TargetSection";
import ResultsSection from "@/components/ResultsSection";
import WavyDivider from "@/components/WavyDivider";
import AboutSection from "@/components/AboutSection";
import WavyDividerBottom from "@/components/WavyDividerBottom";
import LearnSection from "@/components/LearnSection";
import TimelineSection from "@/components/TimelineSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import LocationSection from "@/components/LocationSection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyButton from "@/components/StickyButton";
import SectionCurve from "@/components/SectionCurve";

const Index = () => (
  <>
    <HeroSection />
    <VideoSection />
    <SectionCurve from="bg" to="card" />
    <ProblemSection />
    <SectionCurve from="card" to="bg" />
    <TargetSection />
    <SectionCurve from="bg" to="card" />
    <ResultsSection />
    <WavyDivider />
    <AboutSection />
    <WavyDividerBottom />
    <LearnSection />
    <SectionCurve from="bg" to="card" />
    <TimelineSection />
    <SectionCurve from="card" to="bg" />
    <DeliverablesSection />
    <SectionCurve from="bg" to="card" />
    <LocationSection />
    <SectionCurve from="card" to="bg" />
    <PricingSection />
    <WaitlistSection />
    <SectionCurve from="bg" to="card" />
    <FAQSection />
    <SectionCurve from="card" to="bg" />
    <FinalCTASection />
    <StickyButton />

    <footer className="py-8 px-5 text-center text-muted-foreground text-sm border-t border-border">
      <p>© 2026 Zahradní dílna. Všechna práva vyhrazena.</p>
    </footer>
  </>
);

export default Index;
