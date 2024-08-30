import "./services.css";
import seo from "../../assets/services/SEO.png";
import advertising from "../../assets/services/advertising.png";
import marketing from "../../assets/services/marketing.png";
import email from "../../assets/services/email.png";
import content from "../../assets/services/content.png";
import analytics from "../../assets/services/analytics.png";
import ArrowIcon from "./components/ArrowIcon";
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
        <div className="services__heading">
          <div className="services__title__container">
            <h3 className="services__title">Services</h3>
          </div>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
          <div style={{ width: "60%" }}></div>
        </div>

        <div className="services__content">
          {servicesData.map((service, idx) => (
            <div
              className="service__card"
              style={{ backgroundColor: service.backgroundColor }}
              key={service.title1}
            >
              <div className="service__card_title_container">
                <div>
                  <h3
                    className="service__card_title"
                    style={{ backgroundColor: service.titleBackgroundColor }}
                  >
                    {service.title1}
                  </h3>
                  <h3
                    className="service__card_title"
                    style={{ backgroundColor: service.titleBackgroundColor }}
                  >
                    {service.title2}
                  </h3>
                </div>
                <img
                  src={service.icon}
                  alt="image"
                  className="service__card_image"
                />
              </div>
              <div className="service__card_cta">
                <div
                  className="service__card_arrow"
                  style={{ backgroundColor: service.arrowContainerColor }}
                >
                  <ArrowIcon fillColor={service.arrowColor} />
                </div>
                <p
                  style={{ color: (idx + 1) % 3 === 0 ? "#f3f3f3" : "inherit" }}
                >
                  Learn more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
