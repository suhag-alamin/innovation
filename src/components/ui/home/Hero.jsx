// import { WmremoveTransformed } from "../../Image";

const Hero = () => {
  return (
    <div className="home_hero icontainer">
      <h1>
        We invest in companies that are leading the way in the development of
        new technologies, creating new markets, and driving change across
        industries.
      </h1>
      {/* <WmremoveTransformed /> */}
      <video
        src="/assets/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload
      ></video>
    </div>
  );
};

export default Hero;
