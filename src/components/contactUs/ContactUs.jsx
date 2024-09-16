import Heading from "../common/Heading";
import "./contactUs.css";
import contactImage from "../../assets/contactUs/contact.png";

const ContactUs = () => {
  return (
    <div className="contact__container">
      <Heading
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="contact__content">
        <div className="contact__form">
          <form action="">
            <div className="contact__radio__container">
              <input
                type="radio"
                name="contact"
                id="hi"
                value={"hi"}
                className="contact__radio"
              />
              <label htmlFor="hi" className="contact__label">
                Say Hi
              </label>
              <input
                type="radio"
                name="contact"
                id="get"
                value={"get"}
                className="contact__radio"
              />
              <label htmlFor="get" className="contact__label">
                Get a Quote
              </label>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea placeholder="Message" />
            </div>
          </form>
        </div>
        <div className="contact__image__container">
          <img src={contactImage} alt="contact" className="contact__image" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
