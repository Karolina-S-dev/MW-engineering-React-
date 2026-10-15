import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const ContactBanner = () => {
  const { t } = useTranslation("projects");
  return (
    <>
      <section className="projects-contact-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="projects-contact-banner"
        >
          <div className="flex-row">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <div className="projects-contact-col">
              <h4>{t("contactBanner.title")}</h4>
              <p>{t("contactBanner.description")}</p>
            </div>
          </div>
          <a href="/contact" className="projects-contact-button">
            <span>{t("contactBanner.contactButton")}</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default ContactBanner;
