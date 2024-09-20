/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { action } from "@storybook/addon-actions";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Star from "./Star";
import { useState } from "react";

const Carousal = ({ handleSlideChange, slideIndex }) => {
  const indicatorStyles = {
    // background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
    cursor: "pointer",
  };

  return (
    <Carousel
      // ariaLabel="Item 2"
      selectedItem={slideIndex}
      // centerMode
      onChange={handleSlideChange}
      centerSlidePercentage={60}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            >
              <Star color={"#b9ff66"} />
            </li>
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
          >
            <Star color={"#f3f3f3"} />
          </li>
        );
      }}
    >
      <div aria-label="Item 1">
        <div className="carousal__item">
          <div className="carousal__item_box">
            <p>
              &quot;We have been working with Positivus for the past year and
              have seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online
              presence.&quot;
            </p>
            <div className="carousal__item_triangle-bottom"></div>
          </div>
          <div className="carousal__item_name_section">
            <h4 className="carousal__item_name_section_name">John Smith</h4>
            <p className="carousal__item_name_section_position">
              Marketing Director at XYZ Corp
            </p>
          </div>
        </div>
      </div>
      <div aria-label="Item 2">
        <div className="carousal__item">
          <div className="carousal__item_box">
            <p>
              &quot;We have been working with Positivus for the past year and
              have seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online
              presence.&quot;
            </p>
            <div className="carousal__item_triangle-bottom"></div>
          </div>
          <div className="carousal__item_name_section">
            <h4 className="carousal__item_name_section_name">John Smith</h4>
            <p className="carousal__item_name_section_position">
              Marketing Director at XYZ Corp
            </p>
          </div>
        </div>
      </div>
      <div aria-label="Item 3">
        <div className="carousal__item">
          <div className="carousal__item_box">
            <p>
              &quot;We have been working with Positivus for the past year and
              have seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online
              presence.&quot;
            </p>
            <div className="carousal__item_triangle-bottom"></div>
          </div>
          <div className="carousal__item_name_section">
            <h4 className="carousal__item_name_section_name">John Smith</h4>
            <p className="carousal__item_name_section_position">
              Marketing Director at XYZ Corp
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousal;
