import { Col, Container, Row } from "react-bootstrap";
import { EducationGraphic } from "../../Image";

const Education = () => {
  return (
    <Container className="education">
      <Row className="d-flex align-items-center rows">
        <Col lg={7}>
          <h3>Education</h3>
          <p>
            At Innovat, we believe that knowledge is power. That’s why we
            provide you with access to comprehensive educational resources. Our
            materials include insights on exchange-traded funds (ETFs),
            strategies for maximizing ETF investing, and the benefits of
            thematic investing.
          </p>
          <p>
            Additionally, we offer educational courses on thematic investing and
            the latest innovations to help you stay ahead of the curve. Our goal
            is to empower you to make informed decisions about your investments
            and take control of your financial future.
          </p>

          <button className="outline-btn">Read More</button>
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <EducationGraphic />
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
