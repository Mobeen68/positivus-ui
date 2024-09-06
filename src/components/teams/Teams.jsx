import Heading from "../common/Heading";
import "./teams.css";

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
            <div className="flower__eye left">
              <span></span>
            </div>
            <div className="flower__nose"></div>
            <div className="flower__eye right">
              <span></span>
            </div>
          </div>

          <div className="flower__leaf"></div>
          <div className="flower__leaf--shadow"></div>
          <div className="flower__leaf oposite"></div>
          <div className="flower__leaf--shadow oposite"></div>

          <div className="flower__stem"></div>

          <div className="flower__pot">
            <div className="flower__pot--shadow"></div>
            <div className="flower__pot--bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
