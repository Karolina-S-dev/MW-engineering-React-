import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const NavItem = ({ util, isMobile }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");

  const isActiveLanguage = i18n.resolvedLanguage === util.lang;

  // const location = useLocation();
  // const isActive = location.pathname === util.route;

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
          <span>{t(util.text)}</span>
        </button>
      )}
      {util.type === "contact" && (
        <button
          onClick={redirect}
          className={`nav-button nav-button--primary ${isMobile && "nav-button-mobile nav-button--primary-mobile"}`}
        >
          <span>{t(util.text)}</span>
        </button>
      )}

      {util.type === "languagePL" && (
        <button
          className={`language-change ${isActiveLanguage ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("pl")}
        >
          <ReactCountryFlag countryCode="PL" svg className="emoji-flag" />
          {util.text}
        </button>
      )}

      {util.type === "languageDE" && (
        <button
          className={`language-change ${isActiveLanguage ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("de")}
        >
          <ReactCountryFlag countryCode="DE" svg className="emoji-flag" />
          {util.text}
        </button>
      )}
      {util.type === "languageENG" && (
        <button
          className={`language-change ${isActiveLanguage ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("en")}
        >
          <ReactCountryFlag countryCode="GB" svg className="emoji-flag" />
          {util.text}
        </button>
      )}
    </>
  );
};

export default NavItem;
