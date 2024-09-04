/* eslint-disable react/prop-types */
const Heading = ({ title, description }) => {
  return (
    <div className="heading__container">
      <div className="heading__title__container">
        <h3 className="heading__title">{title}</h3>
      </div>
      <p>{description}</p>
      {/* <div style={{ visibility: "hidden" }}>
        Ullamco pariatur dolore tempor magna. Ipsum aliquip sit sit id pariatur
        esse. eu.
      </div> */}
    </div>
  );
};

export default Heading;
