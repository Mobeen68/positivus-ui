import illustration from "../../assets/illustration.png";

import "./hero.css";
const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__content">
        <h1 className="hero__content_title">
          Navigating the digital landscape for success
        </h1>
        <div>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </div>
        <div>
          <button className="hero__content_button">Book a consultation</button>
        </div>
      </div>
      <div>
        <img src={illustration} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
