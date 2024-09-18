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
        <div className="contact__form__container">
          <form action="" className="contact__form">
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
            <div className="contact__input__container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
            </div>
            <div className="contact__input__container">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="contact__input"
              />
            </div>
            <div className="contact__input__container">
              <label htmlFor="message">Message*</label>
              <textarea
                placeholder="Message"
                className="contact__textarea"
                cols="30"
                rows="8"
              />
            </div>
            {/* <div > */}
            <button
              className="btn-secondary"
              style={{
                textAlign: "center",
              }}
            >
              Send Message
            </button>
            {/* </div> */}
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
