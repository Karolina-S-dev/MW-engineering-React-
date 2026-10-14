import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <section className="home-hero-section flex-col">
      <div className="home-hero-content">
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
      </div>
    </section>
  );
};

export default Hero;
