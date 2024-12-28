import { Container, Row, Col } from "react-bootstrap";

const ResearchSection = () => {
  const researchContent = {
    leftColumn: [
      {
        title: "Market Insights",
        description:
          "Learn about the power of thematic investing, focusing on disruptive innovation and market trends. Our insights help you understand emerging technologies, discover strategies to align your portfolio with the future of investing.",
      },
      {
        title: "Industry Reports",
        description:
          "Access comprehensive and actionable quantitative and qualitative fund ratings. Our focus areas on long-term growth, develop investment strategies with industry-leading research and analysis. Our reports provide detailed insights into market trends, helping investors make informed decisions.",
      },
      {
        title: "Portfolio Strategy & Risk Analysis",
        description:
          "Enhance your investment strategy with expert analysis on portfolio diversification, risk management, and asset allocation. Our research helps you measure growth, profitability trends, and your financial goals.",
      },
      {
        title: "Company & Sector Analysis",
        description:
          "Stay ahead with technical companies and detailed research, fundamental analysis, and market trends. Our expert analysis provides the critical information you need to assess investment opportunities.",
      },
    ],
    rightColumn: [
      {
        title: "Thematic Investment Research",
        description:
          "Plan for your future with innovative fundamental and valuation tools across multiple asset classes. Our research helps you identify long-term growth trends across sectors. Investments in clean energy, technology, and other transformative sectors. Access detailed reports and ratings to make informed investment decisions.",
      },
      {
        title: "ESG & Impact Investing Research",
        description:
          "Gain insights into the latest research on Environmental, Social, and Governance (ESG) investing. Our comprehensive analysis helps you understand the impact of investing in sustainable and responsible companies.",
      },
      {
        title: "Investment Tools & Resources",
        description:
          "Utilize a suite of research tools, calculators, and resources to support your investment decisions. Access historical data, performance metrics, and educational materials to enhance your investment strategy.",
      },
      {
        title: "Research Blog & Articles",
        description:
          "Stay informed with thought leadership and expert articles on the latest trends in markets, sector analysis, and investment strategies. Get blog posts and articles covering key market developments and industry insights.",
      },
    ],
  };

  return (
    <div className="research-section">
      <div className="section-header">
        <Container>
          <h2>Research</h2>
        </Container>
      </div>
      <Container>
        <Row>
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
      </Container>
    </div>
  );
};

export default ResearchSection;
