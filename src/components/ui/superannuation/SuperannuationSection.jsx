import { Col, Row } from "react-bootstrap";

const SuperannuationSection = () => {
  const superContent = {
    leftColumn: [
      {
        title: "Overview of Superannuation Solutions",
        description:
          "At Innovat, we redefine retirement planning with a focus on innovation-driven growth. Our superannuation solutions are designed to enhance your portfolio by investing in transformative sectors such as digital infrastructure, renewable energy, artificial intelligence, and blockchain technologies. With a commitment to long-term value creation, we ensure your retirement savings are aligned with the future of global industries.",
      },
      {
        title: "Managed Superannuation Funds",
        description:
          "Our managed superannuation funds offer professionally curated investment options that target high-growth opportunities in disruptive technologies and sustainable industries. By leveraging our expertise, you can achieve a balanced and future-ready portfolio that aligns with your retirement goals.",
      },
      {
        title: "Self-Managed Super Funds (SMSFs)",
        description:
          "Take control of your retirement planning with Innovat’s support for SMSFs. We provide tailored insights and access to high-potential investments in cutting-edge industries, empowering trustees to maximize returns while maintaining independence and flexibility in their financial strategies.",
      },
    ],
    rightColumn: [
      {
        title: "Thematic Retirement Investment Strategies",
        description:
          "Align your retirement savings with future-focused investment themes. Innovat specializes in thematic strategies that target sectors driving global transformation, ensuring your portfolio benefits from innovation while supporting your long-term financial security.",
      },
      {
        title: "Sustainability in Retirement Planning",
        description:
          "Innovat integrates sustainability into retirement investment strategies by focusing on renewable energy, energy transition, and environmentally responsible technologies. Our approach ensures your retirement savings contribute to a sustainable future while delivering strong financial outcomes.",
      },
      {
        title: "Retirement Insights & Resources",
        description:
          "Stay informed with Innovat’s comprehensive resources and insights for superannuation investors. From emerging market trends to regulatory updates, we provide the knowledge and tools you need to make confident, future-oriented decisions.",
      },
      {
        title: "Get Started with Innovat Superannuation",
        description:
          "Secure your financial future with Innovat’s innovation-focused superannuation solutions. Contact our team to explore tailored investment options that align with your retirement aspirations and values.",
      },
    ],
  };

  return (
    <div className="superannuation-section icontainer">
      <div className="section-header">
        <div className="">
          <h2>Superannuation / Retirement Funds</h2>
        </div>
      </div>
      <div className=" sub-section">
        <Row className="g-lg-5">
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
      </div>
    </div>
  );
};

export default SuperannuationSection;
