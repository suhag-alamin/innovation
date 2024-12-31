import { useEffect, useState } from "react";
import { ArrowCircle } from "../Image";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top">
      <div className="position-fixed bottom-0 end-0 p-3">
        {showButton && (
          <div
            role="button"
            className="shadow-none bg-transparent"
            onClick={scrollToTop}
          >
            <ArrowCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
