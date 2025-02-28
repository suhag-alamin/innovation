import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "../../Image";
import electricCar from "/assets/images/electric_car_icon.svg";
import fuel from "/assets/images/fuel_icon.svg";
import memory from "/assets/images/memory_icon.svg";

const InvestmentCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="investment-slider icontainer">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          grabCursor={false}
          spaceBetween={17}
          slidesPerView={1.1}
          slidesPerGroup={3}
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

                  <div className="card-content-box">
                    <div>
                      <h3>{category.title}</h3>
                      <p className="card-content">{category.description}</p>
                    </div>
                    <button className="find-out-more">Find Out More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          // ref={navigationNextRef}
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="custom-nav-button"
          aria-label="Next slide"
        >
          <ArrowCircleRight />
        </button>
      </div>
    </>
  );
};

export default InvestmentCarousel;

const investmentCategories = [
  {
    id: 2,
    title: "Innovation Digital Infrastructure",
    icon: fuel,
    description:
      "Invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 1,
    title: "Innovation Clean Energy",
    icon: memory,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, nuclear, wind, and geothermal",
  },

  {
    id: 3,
    title: "Innovation Autonomous Tech",
    icon: electricCar,
    description:
      "Invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 4,
    title: "Innovation Fintech",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 5,
    title: "Innovation Blockchain Technology",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 6,
    title: "Innovation Space Tech & Exploration",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 7,
    title: "Innovation China innovationion",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 8,
    title: "Innovation US innovationion",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 9,
    title: "Innovation Diversified Technology",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 10,
    title: "Innovation Cybersecurity",
    icon: fuel,
    description:
      "Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
  },
  {
    id: 11,
    title: "Innovation Internet of Things",
    icon: memory,
    description:
      "This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
  },
  {
    id: 12,
    title: "Innovation Mobility & Transportation",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 13,
    title: "Innovation Bitcoin Mining",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 14,
    title: "Innovation Digital Health",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 15,
    title: "Innovation Media & Entertainment",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 16,
    title: "Innovation Sustainable Agriculture",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 17,
    title: "Innovation Digital Assets",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 18,
    title: "Innovation Artificial Intelligence",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 19,
    title: "Innovation Robotics & Automation",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
  {
    id: 20,
    title: "Innovation Digital Assets",
    icon: electricCar,
    description:
      "This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
  },
];
