/* eslint-disable react/prop-types */
import linkedIn from "../../../assets/teams/linkedin.png";

const Team = ({ avatar, name, position, description }) => {
  return (
    <div className="teams__card">
      <div className="teams__card__head">
        <div className="teams__card__graphic_name__container">
          <div className="teams__card__graphic">
            <div className="teams__card__img_container">
              <img src={avatar} alt="image" className="teams__card__img" />
            </div>
          </div>
          <div className="teams__card__name">
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
        <div className="teams__card__cta">
          <div className="teams__card__svg">
            <img src={linkedIn} alt="linkedIn" className="teams__card__icon" />
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div className="teams__card__hr" />
      </div>
      <div className="teams__card__body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Team;
