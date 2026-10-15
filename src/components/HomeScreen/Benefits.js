import { useTranslation } from "react-i18next";
import industrialEngineeringPhoto from "../../assets/img/home/industrial-engineering-photo.png";
import { motion } from "motion/react";

const Benefits = () => {
  const { t } = useTranslation("home");
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="section-dark"
    >
      <div className="home-benefits-container">
        <div className="home-benefits-content">
          <h2>{t("benefits.title")}</h2>
          <ul className="home-benefits-container-list">
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>{t("benefits.item1")}</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>{t("benefits.item2")}</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>{t("benefits.item3")}</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>{t("benefits.item4")}</span>
            </li>
          </ul>
        </div>
        <div className="home-benefits-image">
          <img
            loading="lazy"
            src={industrialEngineeringPhoto}
            alt={t("benefits.imageAlt")}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
