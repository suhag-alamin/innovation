import { Col, Container, Row } from "react-bootstrap";
import { ApproachGraphic } from "../../Image";

const OurApproach = () => {
  return (
    <Container className="our-approach">
      <Row className="d-flex align-items-center rows">
        <Col lg={7}>
          <h3 className="">Our Approach</h3>
          <p>
            We have a team of experts specializing in a variety of sectors,
            including clean energy technology, autonomous vehicles, fintech
            solutions, digital infrastructure projects, blockchain technology
            applications, and more.
          </p>
          <p>
            We strive to identify companies at the forefront of innovation with
            the potential for long-term growth.
          </p>
          <p>
            Our team is committed to providing you with the most up-to-date
            information on emerging trends in disruptive innovation, as well as
            insights into specific sectors, so you can make informed decisions
            about your investments.
          </p>
          <button className="outline-btn">Read More</button>
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <ApproachGraphic />
        </Col>
      </Row>
    </Container>
  );
};

export default OurApproach;
