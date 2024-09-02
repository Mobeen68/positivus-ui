import "./services.css";
import seo from "../../assets/services/SEO.png";
import advertising from "../../assets/services/advertising.png";
import marketing from "../../assets/services/marketing.png";
import email from "../../assets/services/email.png";
import content from "../../assets/services/content.png";
import analytics from "../../assets/services/analytics.png";
import ServiceCard from "./components/ServiceCard";
import Heading from "../common/Heading";
const Services = () => {
  const servicesData = [
    {
      title1: "Search engine ",
      title2: "optimization",
      titleBackgroundColor: "#B9FF66",
      icon: seo,
      backgroundColor: "#f3f3f3",
      arrowColor: "#B9FF66",
      arrowContainerColor: "#191a23",
    },
    {
      title1: "Pay-per-click",
      title2: "advertising",
      titleBackgroundColor: "#f3f3f3",
      icon: advertising,
      backgroundColor: "#B9FF66",
      arrowColor: "#B9FF66",
      arrowContainerColor: "#191a23",
    },
    {
      title1: "Social media",
      title2: "marketing",
      titleBackgroundColor: "#f3f3f3",
      icon: marketing,
      backgroundColor: "#191a23",
      arrowColor: "#191a23",
      arrowContainerColor: "#f3f3f3",
    },
    {
      title1: "Email",
      title2: "marketing",
      titleBackgroundColor: "#B9FF66",
      icon: email,
      backgroundColor: "#f3f3f3",
      arrowColor: "#B9FF66",
      arrowContainerColor: "#191a23",
    },
    {
      title1: "Content",
      title2: "creation",
      titleBackgroundColor: "#f3f3f3",
      icon: content,
      backgroundColor: "#B9FF66",
      arrowColor: "#B9FF66",
      arrowContainerColor: "#191a23",
    },
    {
      title1: "Analytics and",
      title2: "Tracking",
      titleBackgroundColor: "#f3f3f3",
      icon: analytics,
      backgroundColor: "#191a23",
      arrowColor: "#191a23",
      arrowContainerColor: "#f3f3f3",
    },
  ];

  return (
    <section>
      <div className="services__container">
        <Heading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        />

        <div className="services__content">
          {servicesData.map((service, idx) => (
            <ServiceCard service={service} idx={idx} key={service.title1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
