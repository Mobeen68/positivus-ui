import ArrowIcon from "./ArrowIcon";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service, idx }) => {
  return (
    <div
      className="service__card"
      style={{ backgroundColor: service.backgroundColor }}
      key={service.title1}
    >
      <div className="service__card_title_container">
        <div>
          <h3
            className="service__card_title"
            style={{ backgroundColor: service.titleBackgroundColor }}
          >
            {service.title1}
          </h3>
          <h3
            className="service__card_title"
            style={{ backgroundColor: service.titleBackgroundColor }}
          >
            {service.title2}
          </h3>
        </div>
        <img src={service.icon} alt="image" className="service__card_image" />
      </div>
      <div className="service__card_cta">
        <div
          className="service__card_arrow"
          style={{ backgroundColor: service.arrowContainerColor }}
        >
          <ArrowIcon fillColor={service.arrowColor} />
        </div>
        <p style={{ color: (idx + 1) % 3 === 0 ? "#f3f3f3" : "inherit" }}>
          Learn more
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
