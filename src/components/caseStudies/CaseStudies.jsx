import Heading from "../common/Heading";
import "./caseStudies.css";
import Studies from "./components/Studies";

const CaseStudies = () => {
  const studies = [
    {
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      description:
        "For a medical device company, we developed a PPC campaign that resulted in a 30% increase in website traffic and a 15% increase in sales.",
    },
  ];
  return (
    <div className="case__container">
      <Heading
        title="Case Studies"
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <div className="case__content bg-secondary">
        {studies.map((study, idx) => (
          <Studies
            description={study.description}
            key={study.description}
            border={studies.length - 1 !== idx}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
