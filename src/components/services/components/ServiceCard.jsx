import ArrowIcon from "./ArrowIcon";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service, idx }) => {
  const {
    backgroundColor,
    titleBackgroundColor,
    title1,
    title2,
    icon,
    arrowContainerColor,
    arrowColor,
  } = service;
  const textColor = (idx + 1) % 3 === 0 ? "#f3f3f3" : "inherit";

  return (
    <div className="service__card" style={{ backgroundColor }} key={title1}>
      <div className="service__card_title_container">
        <div>
          {[title1, title2].map((title, index) => (
            <h3
              key={index}
              className="service__card_title"
              style={{ backgroundColor: titleBackgroundColor }}
            >
              {title}
            </h3>
          ))}
        </div>
        <div className="service__card_image_container">
          <img
            src={icon}
            alt={`${title1} icon`}
            className="service__card_image"
          />
        </div>
      </div>
      <div className="service__card_mobile_image_container">
        <img
          src={icon}
          alt={`${title1} icon`}
          className="service__card_mobile_image"
          height={"140px"}
          width={"140px"}
        />
      </div>
      <div className="service__card_cta">
        <div
          className="service__card_arrow"
          style={{ backgroundColor: arrowContainerColor }}
        >
          <ArrowIcon fillColor={arrowColor} />
        </div>
        <p className="service__card_text" style={{ color: textColor }}>
          Learn more
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
