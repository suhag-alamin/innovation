import { Col, Row } from "react-bootstrap";

const FundingSection = () => {
  return (
    <div className="icontainer">
      <div className="funding-section">
        <h1 className="section-header">Funding</h1>
        <Row className="g-5">
          <Col lg={6}>
            <div className="funding-category">
              <h2>Venture Capital & Private Equity</h2>

              <div className="subcategory">
                <h3>Seed Funding</h3>
                <p>
                  Early-stage capital for startups to develop products, conduct
                  market research, and establish operations. Ideal for companies
                  in the ideation or prototype phase.
                </p>
              </div>

              <div className="subcategory">
                <h3> Venture Capital (VC) </h3>
                <p>
                  Equity investments in high-potential startups and early-stage
                  companies, providing funding to scale operations, expand
                  markets, and drive innovation.
                </p>
              </div>

              <div className="subcategory">
                <h3>Growth Equity</h3>
                <p>
                  Capital for mature companies to accelerate growth, develop new
                  products, or expand into new markets without ceding full
                  ownership.
                </p>
              </div>
            </div>

            <div className="funding-category">
              <h2>Strategic Investments</h2>

              <div className="subcategory">
                <h3>Thematic Investing</h3>
                <p>
                  Focused investments aligned with innovation-driven themes such
                  as digital infrastructure, energy transition, artificial
                  intelligence, or blockchain tech, targeting companies leading
                  transformative change.
                </p>
              </div>

              <div className="subcategory">
                <h3>Impact Investments</h3>
                <p>
                  Capital directed toward companies that deliver measurable
                  social or environmental impact alongside financial returns,
                  supporting ESG-aligned goals.
                </p>
              </div>

              <div className="subcategory">
                <h3>Strategic Partnerships and Joint Ventures</h3>
                <p>
                  Funding combined with collaborative opportunities to develop
                  innovative projects, enter new markets, or drive mutual
                  growth.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="funding-category">
              <h2>Innovation and Development</h2>

              <div className="subcategory">
                <h3>Research and Development (R&D) Funding</h3>
                <p>
                  Dedicated funding to support cutting-edge innovation, enabling
                  companies to develop new technologies, products, or services
                  that drive industry transformation.
                </p>
              </div>
            </div>

            <div className="funding-category">
              <h2>Specialized Financing</h2>

              <div className="subcategory">
                <h3>Mezzanine Financing</h3>
                <p>
                  A hybrid of debt and equity financing, offering flexible
                  funding for expansion or acquisitions with the potential for
                  higher returns than traditional debt.
                </p>
              </div>

              <div className="subcategory">
                <h3>Bridge Financing</h3>
                <p>
                  Short-term funding solutions to manage cash flow or support
                  companies during transitions, such as funding rounds or
                  acquisitions.
                </p>
              </div>

              <div className="subcategory">
                <h3>Convertible Debt</h3>
                <p>
                  Loans that can convert into equity at a later stage, providing
                  flexibility for startups while delaying valuation discussions.
                </p>
              </div>
            </div>
            <div className="funding-category">
              <h2>Acquisition and Restructuring</h2>

              <div className="subcategory">
                <h3>Buyout Funding</h3>
                <p>
                  Capital to acquire controlling stakes or full ownership of
                  companies, often used to restructure operations or drive
                  strategic growth.
                </p>
              </div>

              <div className="subcategory">
                <h3>Recapitalization</h3>
                <p>
                  Restructuring a company’s capital to stabilize finances,
                  support growth, or provide liquidity to existing shareholders.
                </p>
              </div>

              <div className="subcategory">
                <h3>Secondary Market Investments</h3>
                <p>
                  Purchasing existing shares from current shareholders, offering
                  liquidity while enabling strategic investments in established
                  companies.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FundingSection;
