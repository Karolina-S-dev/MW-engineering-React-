import { useLocation } from "react-router-dom";
import headerLogo from "../../../assets/img/header-logo.png";
import { navUtils } from "../../../utils/HomeScreen/navUtils";
import NavItem from "./NavItem";
import { motion } from "motion/react";

const DesktopNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = (
    <ul className="nav-links flex-row">
      {navUtils.map((util, index) => (
        <li key={index}>
          <NavItem util={util} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="flex-row">
        <a
          href="/"
          className={`header-brand-col flex-col ${isMobileNavOpen && "header-brand-none"}`}
        >
          <img src={headerLogo} alt="MW-Engineering - instalacje elektryczne" />
          <p className="header-tagline">
            ELECTRICAL INSTALLATIONS | LIGHTING | INDUSTRY
          </p>
        </a>

        {isHome ? (
          <motion.nav
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {navLinks}
          </motion.nav>
        ) : (
          <nav>{navLinks}</nav>
        )}
      </header>
    </>
  );
};

export default DesktopNav;
