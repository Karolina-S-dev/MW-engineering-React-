import { valueData } from "../../utils/AboutScreen/value";
import factoryValuePhoto from "../../assets/img/about/factory-value-photo.png";
import { useTranslation } from "react-i18next";

const Value = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <section className="value-section section-padding">
        <div className="value-content flex-col">
          <div className="value-section-main flex-col">
            <p className="section-label">{t("value.label")}</p>
            <h2 className="section-title section-title--dark section-title--underline section-title-mb-lg">
              {t("value.title")}
            </h2>
            <p className="section-description">{t("value.description")}</p>
          </div>
          <div className="value-cards-container">
            {valueData.map((item) => (
              <div className="value-card flex-col" key={item.id}>
                <div className="value-row flex-col">
                  <img src={item.icon} alt="" />
                  <h3>{t(item.title)}</h3>
                </div>
                <p>{t(item.content)}</p>
              </div>
            ))}
          </div>

          <div className="value-banner">
            <ion-icon name="checkmark-done-circle-outline"></ion-icon>
            <p>{t("value.banner")}</p>
          </div>
        </div>
        <div className="value-section-image">
          <img
            loading="lazy"
            src={factoryValuePhoto}
            alt={t("value.imageAlt")}
          />
        </div>
      </section>
    </>
  );
};

export default Value;
