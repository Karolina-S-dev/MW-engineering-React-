import ReactCountryFlag from "react-country-flag";
import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ util, isMobile }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === util.route;

  const redirect = () => {
    navigate(util.route);
  };

  return (
    <>
      {util.type === "common" && (
        <button
          onClick={redirect}
          className={`nav-button nav-button--secondary ${isMobile && "nav-button-mobile"}`}
        >
          <span>{util.text}</span>
        </button>
      )}
      {util.type === "contact" && (
        <button
          onClick={redirect}
          className={`nav-button nav-button--primary ${isMobile && "nav-button-mobile nav-button--primary-mobile"}`}
        >
          <span>{util.text}</span>
        </button>
      )}

      {util.type === "languagePL" && (
        <button className="language-change">
          <ReactCountryFlag countryCode="PL" svg className="emoji-flag" />
          {util.text}
        </button>
      )}

      {util.type === "languageDE" && (
        <button className="language-change">
          <ReactCountryFlag countryCode="DE" svg className="emoji-flag" />
          {util.text}
        </button>
      )}
      {util.type === "languageENG" && (
        <button className="language-change">
          <ReactCountryFlag countryCode="GB" svg className="emoji-flag" />
          {util.text}
        </button>
      )}
    </>
  );
};

export default NavItem;
