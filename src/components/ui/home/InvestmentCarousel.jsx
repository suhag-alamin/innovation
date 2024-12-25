import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { ArrowCircleRight, ElectricCar, Fuel, Memory } from "../../Image";

const investmentCategories = [
  {
    id: 1,
    title: "Digital Infrastructure",
    icon: <Memory />,
    description:
      "Invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 2,
    title: "Clean Energy",
    icon: <Fuel />,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, nuclear, wind, and geothermal.",
  },
  {
    id: 3,
    title: "Autonomous Tech",
    icon: <ElectricCar />,
    description:
      "Invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 3,
    title: "Autonomous Tech",
    icon: <ElectricCar />,
    description:
      "Invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
];

const InvestmentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="position-relative p-4">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
        className="container"
      >
        <Carousel.Item>
          <div className="row g-4">
            {investmentCategories.map((category) => (
              <div key={category.id} className="col-12 col-md-4">
                <div className="p-4 h-100 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <span className="me-2">{category.icon}</span>
                    <h3 className="h5 mb-0">{category.title}</h3>
                  </div>
                  <p className="text-light small flex-grow-1 mb-3">
                    {category.description}
                  </p>
                  <button className="btn btn-link text-info p-0 text-decoration-none">
                    Find Out More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      <button
        onClick={() => handleSelect((activeIndex + 1) % 3)}
        className="position-absolute top-50 end-0 translate-middle-y bg-secondary border-0 rounded-circle p-2 me-3"
        aria-label="Next slide"
      >
        <ArrowCircleRight />
      </button>
    </div>
  );
};

export default InvestmentCarousel;
