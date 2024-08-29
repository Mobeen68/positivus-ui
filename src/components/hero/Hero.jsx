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
          <div>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div>
            <button className="hero__content_button">
              Book a consultation
            </button>
          </div>
        </div>
        <div>
          <img src={illustration} alt="image" />
        </div>
      </div>
      <div className="sponsor__container">
        <div>
          <img src={amazon} alt="amazon logo" />
        </div>
        <div>
          <img src={dribble} alt="dribble logo" />
        </div>
        <div>
          <img src={hubspot} alt="hubspot logo" />
        </div>
        <div>
          <img src={notion} alt="notion logo" />
        </div>
        <div>
          <img src={netflix} alt="netflix logo" />
        </div>
        <div>
          <img src={zoom} alt="zoom logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
