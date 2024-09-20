import logo from "../../assets/logo.png";
import burgerMenu from "../../assets/BurgerMenu.png";
import "./header.css";
const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo_container">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__menu_container">
        <ul className="header__menu">
          <li>About us</li>
          <li>Services</li>
          <li>use cases</li>
          <li>pricing</li>
          <li>blog</li>
          <li>
            <button className="header__menu_button">Request a quote</button>
          </li>
        </ul>
      </div>
      <div className="header__mobile_menu">
        <img src={burgerMenu} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
