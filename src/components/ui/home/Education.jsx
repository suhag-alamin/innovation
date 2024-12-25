import { Col, Container, Row } from "react-bootstrap";
import { EducationGraphic } from "../../Image";

const Education = () => {
  return (
    <Container className="py-42">
      <Row className="d-flex align-items-center">
        <Col lg={7}>
          <h3 className="fs-48 fw-900">Education</h3>
          <p className="fs-20">
            At Innovat, we believe that knowledge is power. That’s why we
            provide you with access to comprehensive educational resources. Our
            materials include insights on exchange-traded funds (ETFs),
            strategies for maximizing ETF investing, and the benefits of
            thematic investing.
          </p>
          <p className="fs-20">
            Additionally, we offer educational courses on thematic investing and
            the latest innovations to help you stay ahead of the curve. Our goal
            is to empower you to make informed decisions about your investments
            and take control of your financial future.
          </p>

          <button className="outline-btn mt-4">Read More</button>
        </Col>
        <Col lg={5}>
          <EducationGraphic />
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
