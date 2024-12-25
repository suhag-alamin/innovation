import { Container, Row, Col } from "react-bootstrap";

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "Delivering superior results through rigorous analysis, strategic foresight, and unwavering commitment to long-term value creation.",
    },
    {
      title: "Innovation",
      description:
        "Driving progress by identifying and investing in transformative technologies and groundbreaking ideas that shape the future.",
    },
    {
      title: "Integrity",
      description:
        "Upholding transparency, trust, and ethical practices in all business dealings and investment decisions.",
    },
    {
      title: "Sustainability",
      description:
        "Prioritizing investments that promote environmental responsibility and contribute to a sustainable global economy.",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Core Values</h2>
        <Row className="g-4">
          {values.map((value, index) => (
            <Col key={index} md={6} lg={3}>
              <div className="text-center">
                <h3 className="h4 mb-3 text-white">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoreValues;
