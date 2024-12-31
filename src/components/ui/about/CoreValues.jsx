import { Col, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle";

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
    <div className="icontainer">
      <section className="about_sections core-values">
        <SectionTitle title="Our Core Values" />
        <Row className="g-4">
          {values.map((value, index) => (
            <Col key={index} xs={12}>
              <div className="text-center">
                <h5>{value.title}</h5>
                <p className="">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default CoreValues;
