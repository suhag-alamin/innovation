import { Col, Container, Row } from "react-bootstrap";
import { InvestmentGraphic } from "../../Image";

const InvestmentFunds = () => {
  return (
    <Container className="investment-funds">
      <Row className="d-flex align-items-center rows">
        <Col lg={6}>
          <InvestmentGraphic />
        </Col>
        <Col lg={6}>
          <h3>Investment Funds</h3>
          <p>
            We specialize in investing in companies that lead the development of
            new technologies, create new markets, and drive change across
            industries.
          </p>
          <p>
            Our funds focus on disruptive innovation and thematic investing,
            offering access to investments in clean energy technology,
            autonomous vehicles, fintech solutions, digital infrastructure
            projects, blockchain technology applications, and more.
          </p>
          <p>
            We aim to identify companies at the forefront of innovation with
            strong potential for long-term growth.
          </p>
          <button className="outline-btn ">Read More</button>
        </Col>
      </Row>
    </Container>
  );
};

export default InvestmentFunds;
