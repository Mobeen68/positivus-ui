import Heading from "../common/Heading";
import "./teams.css";
import avatar from "../../assets/teams/avatar.png";
import Team from "./components/Team";

const teams = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    avatar: avatar,
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    avatar: avatar,
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    avatar: avatar,
  },
  {
    name: "Emily Davis",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    avatar: avatar,
  },
  {
    name: "Brian Johnson",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    avatar: avatar,
  },
  {
    name: "Sarah Wilson",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    avatar: avatar,
  },
];

const Teams = () => {
  return (
    <div className="teams__container">
      <Heading
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="teams__content">
        {teams.map((team) => (
          <Team key={team.name} {...team} />
        ))}
      </div>
      <div className="teams__cta">
        <button
          className="btn-secondary"
          style={{
            padding: "15px 50px",
          }}
        >
          See all team
        </button>
      </div>
    </div>
  );
};

export default Teams;
