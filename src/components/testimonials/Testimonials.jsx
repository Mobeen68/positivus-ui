import { useState } from "react";
import Heading from "../common/Heading";
import Arrow from "./components/Arrow";
import Carousal from "./components/Carousal";
import "./testimonials.css";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="testimonials__container">
      <Heading
        title="Testimonials"
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />

      <div className="testimonials__content bg-secondary">
        <div
          style={{
            position: "relative",
          }}
        >
          <Carousal
            handleSlideChange={handleSlideChange}
            slideIndex={slideIndex}
          />
          <div
            style={{
              position: "absolute",
              left: "30%",
              bottom: "0px",
              transform: "translate(-40%, -40%)",
              cursor: "pointer",
            }}
            onClick={() => slideIndex > 0 && handleSlideChange(slideIndex - 1)}
          >
            <Arrow isOpacity={slideIndex === 0 ? false : true} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "30%",
              transform: "translate(-40%, -50%)",
              cursor: "pointer",
            }}
            onClick={() => handleSlideChange(slideIndex + 1)}
          >
            <div
              style={{
                transform: "rotate(180deg)",
              }}
            >
              <Arrow isOpacity={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
