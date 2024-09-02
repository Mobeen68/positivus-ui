import "./cta.css";
import smiley from "../../../../assets/cta/smiley.png";
const CTA = () => {
  return (
    <div className="cta__container">
      <div className="cta__content">
        <div className="cta__text">
          <h3>Let&#39;s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <div>
            <button className="btn-secondary">Get your free proposal</button>
          </div>
        </div>
        <div></div>
        <div className="cta__image">
          <img src={smiley} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
