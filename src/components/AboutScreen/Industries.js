import { useTranslation } from "react-i18next";
import { industriesData } from "../../utils/AboutScreen/industries";
import { motion } from "motion/react";
import { useRedirectionContext } from "../../context/redirectionContext";
import { Link } from "react-router-dom";

const Industries = () => {
  const { t, i18n} = useTranslation("about");
  const { setRedirection } = useRedirectionContext();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="industries-section"
      >
        <div className="industries-header flex-col">
          <p className="section-label">{t("industries.label")}</p>
          <h2 className="section-title section-title--light section-title--underline">
            {t("industries.title")}
          </h2>
        </div>

        <div className="industries-cards-container">
          {industriesData.map((item) => (
            <div className="industry-card flex-col" key={item.id}>
              <div className="industry-card-header">
                <img src={item.image} alt={item.alt} />
                <p lang={i18n.language}>{t(item.text)}</p>
              </div>
              <Link to="/projects"
                className="realization-link"
                onClick={() => setRedirection(item.id)}
              >
                {t("industries.projectsButton")}
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          ))}
        </div>
        <div className="industries-description flex-col">
          <p className="industries-description-text">
            {t("industries.description")}
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default Industries;
