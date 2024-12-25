import { Col, Container, Row } from "react-bootstrap";
import { InvestmentGraphic } from "../../Image";

const InvestmentFunds = () => {
  return (
    <Container className="py-42">
      <Row className="d-flex align-items-center">
        <Col lg={6}>
          <InvestmentGraphic />
        </Col>
        <Col lg={6}>
          <h3 className="fs-48 fw-900">Investment Funds</h3>
          <p className="fs-20">
            We specialize in investing in companies that lead the development of
            new technologies, create new markets, and drive change across
            industries.
          </p>
          <p className="fs-20">
            Our funds focus on disruptive innovation and thematic investing,
            offering access to investments in clean energy technology,
            autonomous vehicles, fintech solutions, digital infrastructure
            projects, blockchain technology applications, and more.
          </p>
          <p className="fs-20">
            We aim to identify companies at the forefront of innovation with
            strong potential for long-term growth.
          </p>
          <button className="outline-btn mt-4">Read More</button>
        </Col>
      </Row>
    </Container>
  );
};

export default InvestmentFunds;
