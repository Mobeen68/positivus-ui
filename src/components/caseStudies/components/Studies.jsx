/* eslint-disable react/prop-types */
import ArrowIcon from "../../services/components/ArrowIcon";

const Studies = ({ description, border }) => {
  return (
    <div className={`case__studies ${border ? "case__studies__border" : ""}`}>
      <p>{description}</p>
      <div className="case__link">
        Learn more
        <ArrowIcon fillColor={"#b9ff66"} />
      </div>
    </div>
  );
};

export default Studies;
