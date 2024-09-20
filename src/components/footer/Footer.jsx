import "./footer.css";
import logo from "../../assets/Logo-white.png";
import linkedin from "../../assets/footer/linkedin.png";
import twitter from "../../assets/footer/twitter.png";
import facebook from "../../assets/footer/facebook.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__header">
        <img src={logo} alt="logo" className="footer__header__logo" />
        <div className="footer__header__links">
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Use cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__header__social">
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="footer__body">
        <div className="footer__body__contact">
          <div className="footer__body__contact__title">Contact us:</div>
          <p>Email:info@positivus.com</p>
          <p>Phone: +1 202-555-0129</p>
          <p>Address: 1234 Street Name, City Name, United States</p>
        </div>
        <div className="footer__body__email">
          <input
            type="email"
            placeholder="Email"
            className="footer__body__email__input"
          />
          <div>
            <button className="footer__body__email__button">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="footer__mobile__social">
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="footer__hr"></div>
      <div className="footer__copyright">
        <p>
          © 2022. All rights reserved. <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
