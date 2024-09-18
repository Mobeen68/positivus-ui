import illustration from "../../assets/illustration.png";
import amazon from "../../assets/sponsors/amazon.png";
import dribble from "../../assets/sponsors/dribble.png";
import notion from "../../assets/sponsors/notion.png";
import hubspot from "../../assets/sponsors/hubspot.png";
import netflix from "../../assets/sponsors/netflix.png";
import zoom from "../../assets/sponsors/zoom.png";

import "./hero.css";
const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__section">
        <div className="hero__content">
          <h1 className="hero__content_title">
            Navigating the digital landscape for success
          </h1>
          <div className="hero__mobile__image_container">
            <img src={illustration} alt="image" />
          </div>
          <div>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div className="hero__cta">
            <button className="btn-secondary hero__mobile__cta">Book a consultation</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={illustration} alt="image" />
        </div>
      </div>
      <div className="sponsor__container">
        <div>
          <img src={amazon} alt="amazon logo" className="sponsor__logo" />
        </div>
        <div>
          <img src={dribble} alt="dribble logo" className="sponsor__logo" />
        </div>
        <div>
          <img src={hubspot} alt="hubspot logo" className="sponsor__logo" />
        </div>
        <div>
          <img src={notion} alt="notion logo" className="sponsor__logo" />
        </div>
        <div>
          <img src={netflix} alt="netflix logo" className="sponsor__logo" />
        </div>
        <div>
          <img src={zoom} alt="zoom logo" className="sponsor__logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
