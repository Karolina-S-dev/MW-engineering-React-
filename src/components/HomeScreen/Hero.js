import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Hero = () => {
  const { t } = useTranslation("home");
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <section className="home-hero-section flex-col">
      <motion.div
        initial={isMobile ? { opacity: 0, y: 24 } : false}
        whileInView={  {opacity: 1, y: 0 }}
        transition={ { duration: 1, ease: "easeOut" }}
        className="home-hero-content"
      >
        <h1>
          {t("hero.title1")} <br />
          {t("hero.title2")}
        </h1>
        <p>
          {t("hero.description1")}
          <br />
          {t("hero.description2")}
        </p>
        <div className="home-hero-buttons flex-row">
          <a href="/contact" className="btn btn-primary">
            {t("hero.contactButton")}
          </a>
          <a href="/projects" className="btn btn-secondary">
            {t("hero.projectsButton")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
