import { Col, Row } from "react-bootstrap";

const EducationSection = () => {
  const educationContent = {
    leftColumn: [
      {
        title: "ETF & Thematic Investing",
        description:
          "Learn about the core principles underlying thematic and exchange-traded funds (ETFs). Our educational resources cover portfolio construction, fund selection, and how to align investment strategies with long-term goals and risk tolerance.",
      },
      {
        title: "ETF Insights",
        description:
          "Stay ahead of the latest trends in exchange-traded funds with our regular market analysis and research. Our insights cover new fund launches, performance analysis, and emerging opportunities in the ETF marketplace.",
      },
      {
        title: "Market Trends",
        description:
          "Stay up to date with current market trends and their implications for investments. Our analysis covers economic indicators, sector performance, and how these factors influence investment decisions.",
      },
      {
        title: "Investing Principles",
        description:
          "Build a strong foundation in financial literacy and investment strategy by learning the fundamental principles of investing, risk management, and portfolio diversification.",
      },
      {
        title: "Glossary & Terms",
        description:
          "Access our comprehensive glossary of financial and investment terms to help you better understand market terminology, financial concepts, and investment technology.",
      },
    ],
    rightColumn: [
      {
        title: "Superannuation & Retirement Funds",
        description:
          "Get to grips with superannuation strategies and retirement planning. Our guides cover contribution strategies, investment options, and how to structure your super for optimal retirement outcomes.",
      },
      {
        title: "Self-Managed Super Funds (SMSFs)",
        description:
          "Understand the responsibilities and opportunities of managing your own super fund. Learn about SMSF setup, compliance requirements, investment restrictions, and strategies for effective self-directed retirement planning.",
      },
      {
        title: "Courses & Webinars",
        description:
          "Access our library of educational webinars and online courses covering various investment topics. From basic financial concepts to advanced trading strategies, we offer learning opportunities for all skill levels.",
      },
      {
        title: "Tools & Resources",
        description:
          "Explore our suite of investment tools and calculators designed to help you make informed investment decisions. Access research reports, market analysis, and educational materials.",
      },
    ],
  };

  return (
    <div className="education-section">
      <div className="section-header">
        <div className="icontainer">
          <h2>Education</h2>
        </div>
      </div>
      <div className="icontainer sub-section">
        <h3 className="sub-section-header">Education</h3>
        <Row className="education-content-row">
          <Col lg={5}>
            {educationContent.leftColumn.map((item, index) => (
              <div key={index} className="education-category">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
          <Col lg={5}>
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
