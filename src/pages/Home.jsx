import Education from "../components/ui/home/Education";
import Hero from "../components/ui/home/Hero";
import InvestmentCarousel from "../components/ui/home/InvestmentCarousel";
import InvestmentFunds from "../components/ui/home/InvestmentFunds";
import Newsletter from "../components/ui/home/Newsletter";
import OurApproach from "../components/ui/home/OurApproach";
import ResearchCenter from "../components/ui/home/ResearchCenter";
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <InvestmentCarousel />
      <OurApproach />
      <InvestmentFunds />
      <Education />
      <ResearchCenter />
      <Newsletter />
    </div>
  );
};

export default Home;
