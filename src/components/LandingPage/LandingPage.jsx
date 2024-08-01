import FeatureSection from "./component/FeatureSection";
import HeroSection from "./component/HeroSection";
import TeamSection from "./component/TeamSection";

function LandingPage() {
  return (
    <div className="flex flex-col gap-16 overflow-hidden items-center md:items-stretch ">
      <HeroSection />
      <FeatureSection />
      <TeamSection />
    </div>
  );
}

export default LandingPage;
