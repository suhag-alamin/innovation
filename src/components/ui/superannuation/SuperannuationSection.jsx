import { Container, Row, Col } from "react-bootstrap";

const SuperannuationSection = () => {
  const superContent = {
    leftColumn: [
      {
        title: "Overview of Superannuation Solutions",
        description:
          "At Innovat, our multiple solutions for growing wealth through superannuation investments provide a comprehensive approach to retirement planning. Our expert team helps you navigate the complexities of superannuation, ensuring your investments align with your retirement goals while maximizing tax benefits.",
      },
      {
        title: "Managed Superannuation Funds",
        description:
          "Our managed superannuation funds offer you professional support accessing a wide range of investment options guided by our strategic investment approach. We focus on long-term growth while maintaining appropriate risk levels to help you achieve your retirement goals.",
      },
      {
        title: "Self-Managed Super Funds (SMSFs)",
        description:
          "Take control of your retirement planning with Innovat's expertise in SMSFs. We provide comprehensive guidance on fund establishment, compliance requirements, investment strategies, and ongoing administration to help you make informed decisions.",
      },
    ],
    rightColumn: [
      {
        title: "Thematic Retirement Investment Strategies",
        description:
          "Align your retirement savings with future-focused investment themes, incorporating innovative technologies and sustainable practices. Our thematic strategies help position your retirement savings for long-term growth in an evolving global economy.",
      },
      {
        title: "Sustainability in Retirement Planning",
        description:
          "Ensure your retirement planning aligns with sustainable practices and ESG principles. We integrate environmental and social considerations into our investment strategies while maintaining strong returns for your retirement future.",
      },
      {
        title: "Retirement Insights & Resources",
        description:
          "Access our comprehensive retirement planning resources, including educational materials, retirement calculators, and market insights. Stay informed about superannuation strategies, policy updates, and investment opportunities.",
      },
      {
        title: "Get Started with Innovat Superannuation",
        description:
          "Connect with Innovat's superannuation specialists to develop a tailored retirement strategy. Our team will guide you through available options and help you optimize the right mix of investment approaches and assets.",
      },
    ],
  };

  return (
    <div className="superannuation-section">
      <div className="section-header">
        <Container>
          <h2>Superannuation / Retirement Funds</h2>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            {superContent.leftColumn.map((item, index) => (
              <div key={index} className="super-category">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
          <Col lg={6}>
            {superContent.rightColumn.map((item, index) => (
              <div key={index} className="super-category">
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

export default SuperannuationSection;
