import { useTranslation } from "react-i18next";
import { whyUsData } from "../../utils/AboutScreen/whyUs";
import { motion } from "motion/react";

const WhyUs = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="why-us-section section-padding"
      >
        {/* <!-- LEFT-COLUMN --> */}
        <div className="why-us-intro flex-col">
          <p className="section-label">{t("whyUs.label")}</p>
          <h2 className="section-title section-title--dark section-title-mb-lg section-title--underline">
            {t("whyUs.title")}
          </h2>
          <p className="section-description">{t("whyUs.description")}</p>
          <div className="why-us-experience-row">
            <ion-icon name="people-outline"></ion-icon>
            <p>{t("whyUs.experience")}</p>
          </div>
        </div>
        {/* <!-- RIGHT-COLUMN --> */}
        <div className="why-us-flex">
          {whyUsData.map((data) => (
            <div className="why-card flex-col" key={data.id}>
              <img src={data.image} alt="" />
              <h3>{t(data.title)}</h3>
              <p>{t(data.desc)}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default WhyUs;
