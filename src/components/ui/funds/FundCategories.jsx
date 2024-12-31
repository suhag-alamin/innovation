import { Col, Row } from "react-bootstrap";

const FundCategories = () => {
  const half = Math.ceil(categories.activeFunds.length / 2);
  const firstHalf = categories.activeFunds.slice(0, half);
  const secondHalf = categories.activeFunds.slice(half);

  console.log(half);

  return (
    <div className="icontainer">
      <div className="fund-categories">
        <div className="view-all-funds">
          <p>View All Funds</p>
        </div>
        <Row>
          <Col md={8} className="category-column">
            <h2>Active Funds</h2>
            <Row>
              <Col>
                <ul>
                  {firstHalf.map((fund) => (
                    <li key={fund.id}>
                      <h5>
                        <span>Innovat™</span> {fund.name}
                      </h5>
                      <p>{fund.description}</p>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul>
                  {secondHalf.map((fund) => (
                    <li key={fund.id}>
                      <h5>
                        <span>Innovat™</span> {fund.name}
                      </h5>
                      <p>{fund.description}</p>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={4} className="category-column">
            <h2>Index Funds</h2>
            <ul>
              {categories.indexFunds.map((fund) => (
                <li key={fund.id}>
                  <h5>
                    <span>Innovat™</span> {fund.name}
                  </h5>
                  <p>{fund.description}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="category-column bottom">
            <h2>Superannuation / retirement Funds</h2>
            <ul>
              <li>
                <h5>
                  <span>Innovat™</span> Innovat™ Global Innovation
                </h5>
                <p>
                  Digital infrastructure, energy transition, artificial
                  intelligence, blockchain, mobility and transportation,
                  autonomous systems
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FundCategories;

const categories = {
  activeFunds: [
    {
      id: 1,
      name: "Blockchain Technology",
      description: "Distributed ledger technology, smart contracts.",
    },
    {
      id: 2,
      name: "Clean Energy",
      description:
        "Renewable energy, energy efficiency, clean transportation, smart grid technologies.",
    },
    {
      id: 3,
      name: "Autonomous Tech",
      description: "Autonomous vehicles, drones, self-driving cars.",
    },
    {
      id: 4,
      name: "Digital Infrastructure",
      description: "Cloud computing, big data analytics, internet of things.",
    },
    {
      id: 5,
      name: "Cybersecurity",
      description:
        "Encryption technologies, identity management solutions, threat detection and prevention systems.",
    },
    {
      id: 6,
      name: "Digital Health",
      description:
        "Mobile apps, wearables, telemedicine, artificial intelligence (AI).",
    },
    {
      id: 7,
      name: "Sustainable Agriculture",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 8,
      name: "Digital Assets",
      description: "Digital currencies, digital tokens, digital collectibles.",
    },
    {
      id: 9,
      name: "Mobility & Transportation",
      description: "Ride-sharing services, electric vehicles. ",
    },
    {
      id: 10,
      name: "Biotechnology",
      description: "Gene editing technologies, stem cell research.",
    },
    {
      id: 11,
      name: "Bitcoin Mining",
      description: "Cryptocurrency mining hardware and software solutions.",
    },
    {
      id: 12,
      name: "Robotics & Automation",
      description: "Industrial automation systems, autonomous robots.",
    },
    {
      id: 13,
      name: "Internet of Things",
      description:
        "Wireless communication protocols, sensor networks, data analytics.",
    },
    {
      id: 14,
      name: "Fintech",
      description: "Cryptocurrency, blockchain technology, digital payments.",
    },
    {
      id: 15,
      name: "Artificial Intelligence",
      description:
        "Natural language processing, computer vision, machine learning.",
    },
    {
      id: 16,
      name: "China Innovation",
      description:
        "Chinese biotechnology, robotics, advanced manufacturing technologies.",
    },
    {
      id: 17,
      name: "US Innovation",
      description:
        "US medical devices and diagnostics, advanced materials and nanotechnology.",
    },
    {
      id: 18,
      name: "Sustainable Agriculture",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 19,
      name: "Space Tech & Exploration",
      description: "Satellite communications, space exploration technologies.",
    },
    {
      id: 20,
      name: "Media & Entertainment",
      description:
        "Streaming services , video games , virtual reality experiences, and augmented reality applications.",
    },
    {
      id: 21,
      name: "Sustainable Agriculture",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 22,
      name: "Environmental Sustainability",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
  ],
  indexFunds: [
    {
      id: 1,
      name: "Global Clean Energy Index",
      description: "Satellite communications, space exploration technologies.",
    },
    {
      id: 2,
      name: "Global Digital Infrastructure Index",
      description:
        "Streaming services , video games , virtual reality experiences, and augmented reality applications.",
    },
    {
      id: 3,
      name: "Global Artificial Intelligence Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 4,
      name: "Sustainable Agriculture Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 5,
      name: "Global Cryptocurrency Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 6,
      name: "Robotics and Automation Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 7,
      name: "Global HealthTech Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 8,
      name: "Global ESG Index ETF",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 9,
      name: "Global Cybersecurity Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 10,
      name: "Global Biotech Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
    {
      id: 11,
      name: "Global Blockchain Index",
      description:
        "Precision agriculture technologies, hydroponic farming systems.",
    },
  ],
};
