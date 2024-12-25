import approachGraphic from "/assets/images/approach-graphic.svg";
import arrowCircle from "/assets/images/arrow_circle_icon.svg";
import linkedin from "/assets/images/linkedin_icon.svg";
import logo from "/assets/images/logo.svg";
import twitter from "/assets/images/twitter_icon.svg";
import wmremoveTransformed from "/assets/images/wmremove-transformed.svg";
import youtube from "/assets/images/youtube_icon.svg";
import eductionGraphic from "/assets/images/education-graphic.svg";
import investmentGraphic from "/assets/images/investment-graphic.svg";
import researchGraphic from "/assets/images/research-graphic.svg";

// Logo
export const Logo = () => <img src={logo} alt={logo} />;

// icons
export const LinkedIn = () => <img src={linkedin} alt={linkedin} />;
export const Twitter = () => <img src={twitter} alt={twitter} />;
export const Youtube = () => <img src={youtube} alt={youtube} />;
export const ArrowCircle = () => <img src={arrowCircle} alt={arrowCircle} />;

// Images
export const WmremoveTransformed = () => (
  <img src={wmremoveTransformed} alt={wmremoveTransformed} />
);

export const ApproachGraphic = () => (
  <img src={approachGraphic} alt={approachGraphic} />
);

export const EducationGraphic = () => (
  <img src={eductionGraphic} alt={eductionGraphic} />
);

export const InvestmentGraphic = () => (
  <img src={investmentGraphic} alt={investmentGraphic} />
);

export const ResearchGraphic = () => (
  <img src={researchGraphic} alt={researchGraphic} />
);
