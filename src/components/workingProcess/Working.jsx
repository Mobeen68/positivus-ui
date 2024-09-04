import Heading from "../common/Heading";
import ProcessAccordion from "./components/Accordion";
import "./working.css";

const process = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "research and Strategy Development",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    title: "Impelementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];
const Working = () => {
  return (
    <div className="working__container">
      <Heading
        title="Our Working Process"
        description="Step-by-step guide to achieving your business goals"
      ></Heading>

      <div className="working__content">
        {process.map((item) => (
          <ProcessAccordion key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Working;
