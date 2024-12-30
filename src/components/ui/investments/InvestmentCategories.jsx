import { Col, Row } from "react-bootstrap";

const InvestmentCategories = () => {
  return (
    <div className="investment-categories">
      <div className="icontainer">
        <p className="header-text">
          We invest in data centers and the energy systems that power them,
          delivering the essential infrastructure driving the AI and digital
          revolution.
        </p>

        <Row className="categories-row">
          <Col md={5}>
            {categories.topCategories
              .slice(0, Math.ceil(categories.topCategories.length / 2))
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
          <Col md={5}>
            {categories.topCategories
              .slice(Math.ceil(categories.topCategories.length / 2))
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
        </Row>

        <div className="transformation-header">TRANSFORMATION</div>

        <Row className="categories-row">
          <Col md={5}>
            {categories.transformationCategories
              .slice(
                0,
                Math.ceil(categories.transformationCategories.length / 2)
              )
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
          <Col md={5}>
            {categories.transformationCategories
              .slice(Math.ceil(categories.transformationCategories.length / 2))
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InvestmentCategories;

const categories = {
  topCategories: [
    {
      title: "Digital Infrastructure & Connectivity",
      description:
        "Investing in the backbone of the digital economy, we target companies building data centers, cloud computing platforms, network infrastructure systems, and advanced infrastructure systems that enable a connected world.",
    },
    {
      title: "Energy Transition & Sustainability",
      description:
        "Accelerating the shift to clean energy, we back companies advancing renewable energy technologies and sustainable solutions that are essential to transitioning to a climate-neutral and sustainable future.",
    },
    {
      title: "Blockchain & Digital Currencies",
      description:
        "We support businesses leveraging blockchain technology to revolutionize industries, from financial services and supply chain management to digital identity and tokenized assets.",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Investing in companies that leverage AI and machine learning to solve complex challenges across diverse sectors such as healthcare, finance, and manufacturing.",
    },
    {
      title: "Bitcoin Ecosystem",
      description:
        "We contribute to build up the growing Bitcoin ecosystem, including infrastructure development, payment systems, and financial services that facilitate the adoption of Bitcoin as a global store of value and medium of exchange.",
    },
    {
      title: "Life Sciences & Biotechnology",
      description:
        "Investing in companies leading the development of cutting-edge advancements in healthcare, biotechnology, and medical devices, addressing critical global health challenges.",
    },
    {
      title: "Sustainable Bitcoin Mining",
      description:
        "We invest in innovative Bitcoin mining operations that prioritize energy efficiency and leverage clean energy sources while maintaining profitability and blockchain security.",
    },
    {
      title: "Autonomous Systems & Robotics",
      description:
        "We invest in pioneers of autonomous technologies, including self-driving vehicles, drones, and industrial robotics, shaping the future of mobility and automation.",
    },
  ],
  transformationCategories: [
    {
      title: "Technology & Innovation Strategy",
      description:
        "Leveraging emerging technologies to drive disruptive challenges, we work with portfolio companies to develop and execute innovation strategies that drive growth and market leadership.",
    },
    {
      title: "Digital Transformation & Automation",
      description:
        "Helping businesses embrace digital transformation and enable them to adopt automation technologies, enhance customer experiences, and remain competitive in an evolving digital landscape.",
    },
    {
      title: "Operational Excellence & Portfolio Optimization",
      description:
        "Through our operational expertise and data-driven methodologies, we support to streamline processes, reduce costs, and unlock value across our portfolio.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Empowering organizations to leverage data analytics capabilities, including advanced analytics and big data to inform strategic decisions and maximize growth opportunities.",
    },
    {
      title: "Sustainability & ESG Integration",
      description:
        "We embed environmental, social, and governance (ESG) principles into investment decisions and portfolio companies that align with long-term value creation and societal impact.",
    },
  ],
};
