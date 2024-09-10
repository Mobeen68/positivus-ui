import Heading from "../common/Heading";
import Carousal from "./components/Carousal";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <Heading
        title="Testimonials"
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />

      <div className="testimonials__content bg-secondary">
        <Carousal />
      </div>
    </div>
  );
};

export default Testimonials;
