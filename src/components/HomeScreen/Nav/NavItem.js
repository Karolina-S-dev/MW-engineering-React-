import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavItem = ({ util, isMobile }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

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
          className={`nav-button ${isActive ? "active" : ""} nav-button--secondary `}
        >
          {isMobile ? (
            <span className="mobile-util-number">{util.number}</span>
          ) : null}
          {t(util.text)}
        </button>
      )}
      {util.type === "contact" && (
        <button
          onClick={redirect}
          className={`nav-button ${isActive ? "active" : ""} nav-button--primary`}
        >
          {isMobile ? (
            <span className="mobile-util-number">{util.number}</span>
          ) : null}
          {t(util.text)}
        </button>
      )}
    </>
  );
};

export default NavItem;
