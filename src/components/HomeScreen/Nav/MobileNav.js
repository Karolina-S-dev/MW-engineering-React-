import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import headerLogo from "../../../assets/img/header-logo.png";
import { navUtils } from "../../../utils/HomeScreen/navUtils";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import LanguageChange from "./LanguageChange";

const MobileNav = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  // const location = useLocation();
  // const isHome = location.pathname === "/";
  const { t } = useTranslation("common");

  // body scroll blockade when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <AnimatePresence>
        {isMobileNavOpen && (
          <div
            className="header-mobile-wrapper"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`header-section-mobile flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
              <a href="/">
                <img
                  src={headerLogo}
                  alt="MW-Engineering - instalacje elektryczne"
                  className="header-logo-mobile"
                />
                <p className="header-tagline-mobile">{t("header.tagline")}</p>
              </a>

              <nav>
                <ul className="flex-col">
                  {navUtils.map((util, index) => (
                    <li key={index}>
                      <NavItem util={util} isMobile={true} />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex-col mobile-nav-contact">
                <p className="mobile-nav-contact-title">
                  {t("header.question")}
                </p>
                <a
                  href="mailto:biuro@mw-engineering.pl"
                  className="flex-row mobile-nav-contact-link"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                  <p>biuro@mw-engineering.pl</p>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
              <LanguageChange/>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
