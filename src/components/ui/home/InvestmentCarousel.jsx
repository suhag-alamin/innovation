import { useRef } from "react";
import { Container } from "react-bootstrap";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "../../Image";
import electricCar from "/assets/images/electric_car_icon.svg";
import fuel from "/assets/images/fuel_icon.svg";
import memory from "/assets/images/memory_icon.svg";

const InvestmentCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Container fluid className="investment-slider">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {investmentCategories.map((category) => (
            <SwiperSlide key={category.id} className="slider-card-wrapper">
              <div className="slider-card">
                <div className="card-header">
                  <img src={category.icon} alt="" className="icon" />

                  <div className="icon-box">
                    <img src={category.icon} alt="" className="icon-mobile" />
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p className="card-content">{category.description}</p>
                  </div>
                </div>
                <button className="find-out-more">Find Out More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={navigationNextRef}
          className="custom-nav-button"
          aria-label="Next slide"
        >
          <ArrowCircleRight />
        </button>
      </Container>
    </>
  );
};

export default InvestmentCarousel;

const investmentCategories = [
  {
    id: 1,
    title: "Innovat™ Clean Energy",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 2,
    title: "Innovat™ Digital Infrastructure",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 3,
    title: "Innovat™ Autonomous Tech",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 4,
    title: "Innovat™ Fintech",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 5,
    title: "Innovat™ Blockchain Technology",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 6,
    title: "Innovat™ Space Tech & Exploration",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 7,
    title: "Innovat™ China Innovation",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 8,
    title: "Innovat™ US Innovation",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 9,
    title: "Innovat™ Diversified Technology",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 10,
    title: "Innovat™ Cybersecurity",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 11,
    title: "Innovat™ Internet of Things",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 12,
    title: "Innovat™ Mobility & Transportation",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 13,
    title: "Innovat™ Bitcoin Mining",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 14,
    title: "Innovat™ Digital Health",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 15,
    title: "Innovat™ Media & Entertainment",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 16,
    title: "Innovat™ Sustainable Agriculture",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 17,
    title: "Innovat™ Digital Assets",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 18,
    title: "Innovat™ Artificial Intelligence",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 19,
    title: "Innovat™ Robotics & Automation",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 20,
    title: "Innovat™ Digital Assets",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
];
