import CoreValues from "../components/ui/about/CoreValues";
import Hero from "../components/ui/about/Hero";
import InvestmentProcess from "../components/ui/about/InvestmentProcess";
import Mission from "../components/ui/about/Mission";
import Team from "../components/ui/about/Team";
import "../styles/about.scss";

const AboutInnovation = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Team />
      <InvestmentProcess />
      <CoreValues />
    </div>
  );
};

export default AboutInnovation;
