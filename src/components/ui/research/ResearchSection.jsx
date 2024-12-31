import { Col, Row } from "react-bootstrap";

const ResearchSection = () => {
  const researchContent = {
    leftColumn: [
      {
        title: "Market Insights",
        description:
          "Learn about the power of thematic investing, focusing on disruptive innovation and transformative trends like clean energy, AI, blockchain, and autonomous technologies. Discover strategies to align your portfolio with the future of innovation.",
      },
      {
        title: "Industry Reports",
        description:
          "Plan for your future with innovative superannuation and retirement fund options. Our funds focus on long-term growth, blending traditional strategies with thematic investments in clean energy, technology, and other transformative sectors. Explore sustainable and tax-efficient solutions designed to align with your retirement goals while supporting industries driving global change.",
      },
      {
        title: "Portfolio Strategy & Risk Analysis",
        description:
          "Enhance your investment strategy with expert analysis on portfolio diversification, risk management, and asset allocation. Our research helps you balance growth and security in line with your financial goals.",
      },
      {
        title: "Company & Sector Analysis",
        description:
          "Dive deep into individual companies and sectors with detailed research reports. From financial performance to growth potential, we provide the critical information you need to assess investment opportunities.",
      },
    ],
    rightColumn: [
      {
        title: "Thematic Investment Research",
        description:
          "Plan for your future with innovative superannuation and retirement fund options. Our funds focus on long-term growth, blending traditional strategies with thematic investments in clean energy, technology, and other transformative sectors. Explore sustainable and tax-efficient solutions designed to align with your retirement goals while supporting industries driving global change.",
      },
      {
        title: "ESG & Impact Investing Research",
        description:
          "Gain insights into the latest research on Environmental, Social, and Governance (ESG) investing. Understand the financial and societal impacts of investing in sustainable and socially responsible companies.",
      },
      {
        title: "Investment Tools & Resources",
        description:
          "Utilize a suite of research tools, calculators, and resources to support your investment decisions. Access historical data, performance metrics, and industry benchmarks to guide your investment strategy.",
      },
      {
        title: "Research Blog & Articles",
        description:
          "Stay informed with thought leadership and expert articles on the latest trends in innovation, market analysis, and investment strategies. Our blog provides actionable insights and forward-thinking perspectives.",
      },
    ],
  };

  return (
    <div className="research-section">
      <div className="section-header icontainer">
        <div className="">
          <h2>Research</h2>
        </div>
      </div>
      <div className="icontainer research-content">
        <Row className="g-5">
          <Col lg={6}>
            {researchContent.leftColumn.map((item, index) => (
              <div key={index} className="research-category">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
          <Col lg={6}>
            {researchContent.rightColumn.map((item, index) => (
              <div key={index} className="research-category">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResearchSection;
