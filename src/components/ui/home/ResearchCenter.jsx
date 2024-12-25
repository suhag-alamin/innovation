import { Col, Container, Row } from "react-bootstrap";
import { ResearchGraphic } from "../../Image";

const ResearchCenter = () => {
  return (
    <Container className="py-42">
      <Row className="d-flex align-items-center">
        <Col lg={6}>
          <ResearchGraphic />
        </Col>
        <Col lg={6}>
          <h3 className="fs-48 fw-900">Research Center</h3>
          <p className="fs-20">
            Our team of experienced analysts delivers comprehensive research and
            analysis on the markets and industries we invest in. By combining
            quantitative analysis with fundamental research, we identify
            attractive investment opportunities.
          </p>
          <p className="fs-20">
            Stay informed on the latest developments in thematic investing
            through our blog posts and articles written by our experts. Gain
            insights into emerging market trends and receive valuable advice on
            making smart investment decisions for your portfolio.
          </p>

          <button className="outline-btn mt-4">Read More</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResearchCenter;
