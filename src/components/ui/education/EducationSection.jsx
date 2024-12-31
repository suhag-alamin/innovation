import { Col, Row } from "react-bootstrap";

const EducationSection = () => {
  const educationContent = {
    leftColumn: [
      {
        title: "ETF & Thematic Investing",
        description:
          "Learn about the power of thematic investing, focusing on disruptive innovation and transformative trends like clean energy, AI, blockchain, and autonomous technologies. Discover strategies to align your portfolio with the future of innovation.",
      },
      {
        title: "ETF Insights",
        description:
          "Plan for your future with innovative superannuation and retirement fund options. Our funds focus on long-term growth, blending traditional strategies with thematic investments in clean energy, technology, and other transformative sectors. Explore sustainable and tax-efficient solutions designed to align with your retirement goals while supporting industries driving global change.",
      },
      {
        title: "Market Trends",
        description:
          "Stay informed with insights into emerging market trends and innovations shaping the global economy. Our experts provide analysis on the latest developments to help you identify opportunities in evolving industries.",
      },
      {
        title: "Investing Principles",
        description:
          "Build a strong foundation in financial literacy with resources covering key investment principles, risk management, and portfolio diversification. Designed to empower both new and seasoned investors.",
      },
      {
        title: "Glossary & Terms",
        description:
          "Access a comprehensive glossary of financial and investment terms to help you navigate complex concepts and enhance your understanding of industry terminology.",
      },
    ],
    rightColumn: [
      {
        title: "Superannuation & Retirement Funds",
        description:
          "Plan for your future with innovative superannuation and retirement fund options. Our funds focus on long-term growth, blending traditional strategies with thematic investments in clean energy, technology, and other transformative sectors. Explore sustainable and tax-efficient solutions designed to align with your retirement goals while supporting industries driving global change.",
      },
      {
        title: "Self-Managed Super Funds (SMSFs)",
        description:
          "Take control of your retirement savings with Self-Managed Super Funds (SMSFs). Our resources and expertise guide you in creating a tailored investment strategy, offering access to innovative asset classes such as thematic investments, ESG-focused funds, and emerging technologies. Empower your financial future with the flexibility to align your superannuation with your personal values and goals.",
      },
      {
        title: "Courses & Webinars",
        description:
          "Participate in interactive courses and live webinars led by industry experts. Topics include thematic investing strategies, leveraging ETFs, and understanding the impact of disruptive innovation on markets.",
      },
      {
        title: "Tools & Resources",
        description:
          "Utilize practical tools like investment calculators, guides, and downloadable resources to enhance your decision-making process and support your investment journey.",
      },
    ],
  };

  return (
    <div className="education-section icontainer">
      <div className="section-header ">
        <div className="">
          <h2>Education</h2>
        </div>
      </div>
      <div className=" sub-section">
        <h3 className="sub-section-header">Education</h3>
        <Row className="g-5">
          <Col lg={6}>
            {educationContent.leftColumn.map((item, index) => (
              <div key={index} className="education-category">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
          <Col lg={6}>
            {educationContent.rightColumn.map((item, index) => (
              <div key={index} className="education-category">
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

export default EducationSection;
