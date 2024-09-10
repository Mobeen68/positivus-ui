/* eslint-disable no-unused-vars */
// import { action } from "@storybook/addon-actions";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    <img src={`/assets/${index}.jpeg`} />
    <p className="legend">Legend {index}</p>
  </div>
);

const Carousal = () => {
  const arrowStyles = {
    background: "#fff",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
    cursor: "pointer",
  };

  return (
    <Carousel
      autoPlay
      centerMode
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#000" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      <div className="wrapper">
        <ul>
          <li>This is a box with some content and an arrow at the bottom.</li>
        </ul>
      </div>
    </Carousel>
  );
};

export default Carousal;
