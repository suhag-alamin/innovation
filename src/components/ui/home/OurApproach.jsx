import { Col, Container, Row } from "react-bootstrap";
import { ApproachGraphic } from "../../Image";

const OurApproach = () => {
  return (
    <Container className="py-42">
      <Row className="d-flex align-items-center">
        <Col lg={7}>
          <h3 className="fs-48 fw-900">Our Approach</h3>
          <p className="fs-20">
            We have a team of experts specializing in a variety of sectors,
            including clean energy technology, autonomous vehicles, fintech
            solutions, digital infrastructure projects, blockchain technology
            applications, and more.
          </p>
          <p className="fs-20">
            We strive to identify companies at the forefront of innovation with
            the potential for long-term growth.
          </p>
          <p className="fs-20">
            Our team is committed to providing you with the most up-to-date
            information on emerging trends in disruptive innovation, as well as
            insights into specific sectors, so you can make informed decisions
            about your investments.
          </p>
          <button className="outline-btn mt-4">Read More</button>
        </Col>
        <Col lg={5}>
          <ApproachGraphic />
        </Col>
      </Row>
    </Container>
  );
};

export default OurApproach;
