import { Col, Row } from "react-bootstrap";

const InvestmentFundsSection = () => {
  const investmentOptions = [
    {
      title: "Direct Purchase",
      description:
        "Investors can purchase shares of Innovation mutual funds directly through the Innovation website.",
    },
    {
      title: "Brokerage Account",
      description:
        "Investors can purchase Innovation ETFs through an online broker. This allows investors to purchase ETF shares quickly and easily with minimal fees.",
    },
    {
      title: "Financial Advisor",
      description:
        "Discuss your portfolio and investment goals with an experienced financial advisor who can assist you with the purchase of Innovation ETFs.",
    },
    {
      title: "Self-Managed Super Fund",
      description:
        "Investors can access Innovation ETFs through a Self Managed Super Fund (SMSF). This allows investors to diversify their investments across a variety of ETFs, managed by themselves.",
    },
  ];

  return (
    <div className="investment-funds-section icontainer">
      <div className="section-header">
        <div className="">
          <h2>Investment Funds</h2>
        </div>
      </div>
      <div className=" section-content">
        <h3 className="section-subheader">
          How to Invest in <span>Innovation </span> ETFs
        </h3>
        <p className="section-description">
          Innovation ETFs trade on the largest exchanges around the world and
          can be purchased and sold through online broker/dealers, financial
          advisers, and other financial intermediaries.
        </p>

        <Row className="gy-5 gx-4 investment-options">
          {investmentOptions.map((option, index) => (
            <Col key={index} md={6}>
              <div className="investment-card">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default InvestmentFundsSection;
