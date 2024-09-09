import Heading from "../common/Heading";
import "./teams.css";
import avatar from "../../assets/teams/300-1.jpg";

const Teams = () => {
  return (
    <div className="teams__container">
      <Heading
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="teams__content">
        <div className="flower">
          <div className="flower__head">
            <div className="flower__img_container">
              <img src={avatar} alt="image" className="flower__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
