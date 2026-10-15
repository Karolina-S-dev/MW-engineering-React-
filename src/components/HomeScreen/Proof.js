import { proofLogosData } from "../../utils/HomeScreen/proofLogos";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Proof = () => {
  const { t } = useTranslation("home");

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="home-proof-container">
        <h2>{t("proof.title")}</h2>
        <div className="home-proof-stats">
          <div className="home-proof-stat flex-col">
            <p>
              <strong>4500+</strong> {t("proof.projectsCount")}
            </p>
          </div>
          <div className="home-proof-stat flex-col">
            <p>
              <strong>
                15 <span>{t("proof.years")}</span>
              </strong>
              {t("proof.experience")}
            </p>
          </div>
          <div className="home-proof-stat flex-col">
            <p>
              <strong>{t("proof.projects")}</strong> {t("proof.locations")}
            </p>
          </div>
        </div>
        <div className="home-proof-logos">
          {proofLogosData.map((logo) => (
            <img
              key={logo.id}
              src={logo.image}
              alt={`Logo ${logo.name}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Proof;
